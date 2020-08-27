1. Clone the V3 SDK repo(https://github.com/aws/aws-sdk-js-v3.git) and any directory, run:
   `yarn && yarn build:all`
2. In this repo, run:
   `node copy_endpoints.js --v3dir [dir/to/aws-sdk-js-v3/repo]`
3. In this repo, run bellow command to print all the endpoints:
   `node generate_endpoints.js`
