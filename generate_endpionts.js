const fs = require("fs");
const path = require("path");
const partitions = require("./all_regions");
const fetch = require("node-fetch");
const clientsDir = "clients";
const testPartitions = ["aws" /* "aws-cn" */];

const getRegionInfoProviders = async function* () {
  const dir = await fs.promises.opendir(clientsDir);
  for await (const clientDir of dir) {
    if (!clientDir.isDirectory()) continue;
    const {
      defaultRegionInfoProvider,
    } = require(`./${clientsDir}/${clientDir.name}/endpoints`);
    console.log(`${clientDir.name}:`);
    yield defaultRegionInfoProvider;
  }
};

const run = async () => {
  for await (const regionInfoProvider of getRegionInfoProviders()) {
    const endpoints = new Set();
    const regions = Object.entries(partitions)
      .filter(([partition]) => testPartitions.indexOf(partition) >= 0)
      .map(([, regions]) => Object.keys(regions))
      .flat();
    for (const region of regions) {
      endpoints.add((await regionInfoProvider(region)).hostname);
    }
    for (const hostname of endpoints.keys()) {
      console.log(`   ${hostname}: `);
    }
  }
  // const resp = await fetch(
  //   "https://pinpoint.us-east-1.amazonaws.com/v1/apps/5081432cca7c471daf8d3b373142a631/endpoints/eid_0001",
  //   {
  //     method: "OPTIONS",
  //     headers: {
  //       "Access-Control-Request-Headers":
  //         "amz-sdk-invocation-id, amz-sdk-request",
  //       "Access-Control-Request-Method": "GET",
  //       Origin: "http://wwww.example.com",
  //     },
  //   }
  // );
  // console.log(resp.headers);
};

run();
