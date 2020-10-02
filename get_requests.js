const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const { createRequest } = require("@aws-sdk/util-create-request");
const C2J = path.join("node_modules/aws-sdk/apis");
const { formatUrl } = require("@aws-sdk/util-format-url");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const clientsDir = "clients";
const defaultRegion = "us-east-1";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const { v3dir } = yargs
  .string("v3dir")
  .demandOption("v3dir")
  .describe(
    "v3dir",
    "Path to a checked out v3 SDK repo(https://github.com/aws/aws-sdk-js-v3.git). " +
      "You need to run `yarn && yarn build:all` in v3 repo before running this"
  ).argv;

/**
 * Load all C2J models grouping by endpoint prefix. For different models with same
 * endpoint prefix(apigateway VS apigatewayv2), push them into an array.
 */
const loadC2JModels = async () => {
  const loadedModels = {};
  const modelFileNames = fs
    .readdirSync(C2J)
    .sort()
    .filter((name) => name.endsWith(".min.json"));
  for (const modelFile of modelFileNames) {
    const model = JSON.parse(fs.readFileSync(path.join(C2J, modelFile)));
    if (!model.metadata || !model.metadata.endpointPrefix) continue;
    if (!loadedModels[model.metadata.endpointPrefix]) {
      loadedModels[model.metadata.endpointPrefix] = [model];
    } else {
      loadedModels[model.metadata.endpointPrefix].push(model);
    }
  }
  return loadedModels;
};

/**
 * Get the input shape model of the given operation name from the services
 * with the given endpoint prefix
 * @return Array:
 *     0: operation's input model
 *     1: all the shapes in the service model.
 */
const getInputModel = (allmodels, endpointPrefix, operationName) => {
  const model = allmodels[endpointPrefix]?.filter(
    (model) =>
      Object.keys(model.operations).filter(
        (name) => name.toLowerCase() === operationName.toLowerCase()
      ).length === 1
  )[0];
  return [
    Object.entries(model?.operations || {}).filter(
      ([name]) => name.toLowerCase() === operationName.toLowerCase()
    )[0][1].input,
    model.shapes,
  ];
};

const hostnameToEndpointPrefix = (hostname) => {
  if (hostname.indexOf("service.chime.") === 0) return "chime";
  if (hostname.indexOf("transcribestreaming.") === 0) return "transcribe";
  if (hostname.indexOf(defaultRegion) > 0)
    return hostname.substring(0, hostname.indexOf(defaultRegion) - 1);
  return hostname.match(/(.+?)\./)[1];
};

const getFakeParams = (inputShape, shapes) => {
  if (inputShape.shape) return getFakeParams(shapes[inputShape.shape], shapes);
  if (inputShape.type === "integer") return 1;
  if (inputShape.type === "boolean") return false;
  if (inputShape.type === "blob") return Uint8Array.from([1, 2, 3]);
  if (inputShape.type === "timestamp") return new Date();
  if (inputShape.type === "structure") {
    const rtn = {};
    for (const requiredKey of inputShape.required || []) {
      rtn[requiredKey] = getFakeParams(inputShape.members[requiredKey], shapes);
    }
    return rtn;
  }
  if (inputShape.type === "list") {
    return [getFakeParams(inputShape.member, shapes)];
  }
  return "stringValue";
};

const parseCurlResponse = (stdout) => {
  const [summary, ...headerLines] = stdout.split("\r\n");
  const [_, status, statusMessage] = summary.split(" ");
  return {
    status,
    statusMessage,
    headers: headerLines.reduce((previous, line) => {
      if (line.indexOf(": ") > 0) {
        const [name, value] = line.split(": ");
        previous[name.toLowerCase()] = value.toLowerCase();
      }
      return previous;
    }, {}),
  };
};

const makeOptionsRequest = async (httpRequest) => {
  const url = formatUrl({
    ...httpRequest,
    query: {},
    body: undefined,
  });
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    Origin: "https://foo.example",
    "Access-Control-Request-Method": httpRequest.method,
    "Access-Control-Request-Headers": [
      ...Object.keys(httpRequest.headers),
      "Authorization",
      "amz-sdk-invocation-id",
      "amz-sdk-request",
      "x-amz-security-token",
    ].join(","),
    host: httpRequest.headers.host,
  };
  try {
    const cmd = `curl --insecure -i -X OPTIONS ${url} ${Object.entries(
      headers
    ).reduce((previous, entry) => {
      return previous + `-H "${entry[0]}: ${entry[1]}" `;
    }, "")}`;
    const { stdout, stderr } = await exec(cmd);
    const { status, statusMessage, headers: respHeaders } = parseCurlResponse(
      stdout
    );

    const allowHeaders = respHeaders["access-control-allow-headers"]?.split(
      ","
    );
    console.log(`    <tr>
      <td><strong>${httpRequest.hostname}</strong></td>
      <td>${status} ${statusMessage}</td>
      <td>${respHeaders["access-control-allow-origin"] ? "✅ " : "❌"}</td>
      <td>${
        allowHeaders?.includes("*") ||
        allowHeaders?.includes("amz-sdk-invocation-id")
          ? "✅ "
          : "❌ "
      }</td>
    </tr>`);

    console.log(`    <tr>
      <td colspan="4">\n<details><summary>Details</summary>`);
    console.log(
      `\n<strong>stdout</strong>\n\n\`\`\`console\n${stdout
        .split("\n")
        .map((line) => `  ${line.trim()}`)
        .filter((line) => line !== "")
        .join("\n")}\n\`\`\`\n`
    );
    if (stderr) {
      console.log(
        `\n<strong>stderr</strong>\n\n\`\`\`console\n${stderr
          .split("\n")
          .map((line) => `  ${line.trim()}`)
          .filter((line) => line !== "")
          .join("\n")}\n\`\`\`\n`
      );
    }
    console.log(`</details>\n      </td>\n    </tr>`);
  } catch (e) {
    console.log("\n  🚨ERROR");
    console.log(
      `  <details><summary>expand error</summary><p>${e.message.trim()}</p></details>\n`
    );
  }
};

const run = async () => {
  const C2JModels = await loadC2JModels();
  const clientsDirPath = path.join(v3dir, clientsDir);
  const dir = await fs.promises.readdir(clientsDirPath, {
    withFileTypes: true,
  });
  console.log(`<table>
  <thead>
    <tr>
      <th>Service Endpoint</th>
      <th>HTTP Response</th>
      <th>CORS</th>
      <th>Retry Header</th>
    </tr>
  </thead>
  <tbody>`);
  for (const clientDir of dir) {
    if (!clientDir.isDirectory()) continue;
    if (clientDir.name === "client-transcribe-streaming") continue; // transcribe streaming is not supported in v2
    const servicePath = path.join(
      clientsDirPath,
      clientDir.name,
      "dist",
      "cjs"
    );
    const clientFileName = fs
      .readdirSync(servicePath)
      .filter((name) => /(.+)Client.js$/.test)[0];
    const client = new (require(path.join(servicePath, clientFileName))[
      clientFileName.replace(".js", "")
    ])({
      region: defaultRegion,
    });
    const commandFileName = fs.readdirSync(
      path.join(servicePath, "commands")
    )[0];
    const commandName = commandFileName.replace(".js", "");
    const commandPath = path.join(servicePath, "commands", commandFileName);

    const { hostname } = await require(path.join(
      servicePath,
      "endpoints.js"
    )).defaultRegionInfoProvider(defaultRegion);
    const endpointPrefix = hostnameToEndpointPrefix(hostname);

    const [inputShape, shapes] = getInputModel(
      C2JModels,
      endpointPrefix,
      commandName.replace(/Command$/, "")
    );

    const fakeParames = getFakeParams(inputShape, shapes);
    const command = new (require(commandPath)[commandName])(fakeParames);

    const request = await createRequest(client, command);
    await makeOptionsRequest(request);
  }
  console.log(`  </tbody>\n</table>`);
};

run();
