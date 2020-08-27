const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const { ensureDirSync } = require("fs-extra");
const clientsDir = "clients";

const { v3dir } = yargs
  .string("v3dir")
  .required("v3dir")
  .describe(
    "v3dir",
    "Path to a checked out v3 SDK repo(https://github.com/aws/aws-sdk-js-v3.git). " +
      "You need to run `yarn && yarn build:all` in v3 repo before running this"
  ).argv;

const run = async () => {
  const dir = await fs.promises.opendir(path.join(v3dir, "clients"));
  for await (const clientDir of dir) {
    if (!clientDir.isDirectory()) continue;
    const targetDir = path.join(clientsDir, clientDir.name);
    ensureDirSync(targetDir);
    fs.copyFileSync(
      path.join(
        v3dir,
        "clients",
        clientDir.name,
        "dist",
        "cjs",
        "endpoints.js"
      ),
      path.join(targetDir, "endpoints.js")
    );
  }
  console.log(
    "Copy completed! Please check the endpoints.json files under clients folder"
  );
};

run();
