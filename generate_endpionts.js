const fs = requie("fs");
const path = require("path");
const clientsDir = "clients";

const getEndpoints = async function* () {
  const dir = await fs.promises.opendir(clientsDir);
  for await (const clientDir of dir) {
    if (!clientDir.isDirectory()) continue;
    const endpointsFile = fs.readFileSync(
      path.join(clientDir, clientDir.name, "endpoints.js")
    );
  }
};

const run = async () => {};

run();
