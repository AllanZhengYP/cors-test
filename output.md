<table>
  <thead>
    <tr>
      <th>Service Endpoint</th>
      <th>HTTP Response</th>
      <th>CORS</th>
      <th>Retry Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>access-analyzer.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://access-analyzer.us-east-1.amazonaws.com/analyzer -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: access-analyzer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:28 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: cd83b589-88e4-4218-ba47-d658a1d440d2
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCe8bGbMIAMFfmA=
  access-control-allow-methods: GET,PUT
  x-amzn-trace-id: Root=1-5f97451c-3a7aae5f3ded91947538df68
  access-control-max-age: 600
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>acm.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://acm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: acm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 537aabdd-5c1c-4001-a749-1231e96a263f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:27 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>acm-pca.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://acm-pca.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: acm-pca.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:52:28 GMT
  content-length: 127
  x-amzn-requestid: f36149e6-3561-43ab-87e4-dbc7046d3935
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    429      0 --:--:-- --:--:-- --:--:--   427
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>a4b.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://a4b.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: a4b.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  allow: OPTIONS, POST
  content-length: 0
  date: Mon, 26 Oct 2020 21:52:29 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>amplify.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://amplify.us-east-1.amazonaws.com/apps -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: amplify.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Mon, 26 Oct 2020 21:52:29 GMT
  x-amzn-requestid: c6603c30-e3e9-47e9-941a-9728b7c4737d
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCe8pHRRoAMFUkg=
  x-cache: Error from cloudfront
  via: 1.1 570075675953459325e00b7bcd171df3.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: vwFvw849EQcR1VwAUB1ND5KMz8Poud9FtoPODfvK9UJbsOMTmnjmww==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    293      0 --:--:-- --:--:-- --:--:--   293
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>apigateway.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://apigateway.us-east-1.amazonaws.com/apikeys -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: apigateway.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:30 GMT
  content-length: 0
  x-amzn-requestid: 18bede22-0532-4b49-a1b0-a203e7333521
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amz-apigw-id: VCe8tKfUoAMEdMg=
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>execute-api.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://execute-api.us-east-1.amazonaws.com/@connections/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: execute-api.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: execute-api.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>apigateway.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://apigateway.us-east-1.amazonaws.com/v2/apis -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: apigateway.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:52:30 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 526b3f09-d2da-4a92-9588-5c2103a8e884
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCe8wF7DIAMFbEw=
  x-amzn-trace-id: Root=1-5f97451e-58f7cc0b336c733a0a4f8992
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    267      0 --:--:-- --:--:-- --:--:--   267
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>appmesh.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/stringvalue/virtualGateway/stringvalue/gatewayRoutes -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appmesh.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-requestid: 2f0b35c3-4349-47e4-964c-44112b86018f
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: PUT
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  content-length: 0
  date: Mon, 26 Oct 2020 21:52:30 GMT
  x-envoy-upstream-service-time: 0
  server: envoy
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>appconfig.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://appconfig.us-east-1.amazonaws.com/applications -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appconfig.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:52:31 GMT
  content-length: 127
  x-amzn-requestid: 99f09066-cfd4-4cae-aa28-f8e44e346a42
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    468      0 --:--:-- --:--:-- --:--:--   466
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>appflow.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://appflow.us-east-1.amazonaws.com/create-connector-profile -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appflow.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:31 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: b9889337-26dc-4922-a334-c0b1030687a1
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: VCe86EGDIAMF1yw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f97451f-47770fb220e8eb930c7a1e4d
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>application-autoscaling.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://application-autoscaling.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: application-autoscaling.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 95c86e81-570b-4059-985f-4ab102fbb420
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:31 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>discovery.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://discovery.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: discovery.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Mon, 26 Oct 2020 21:52:32 GMT
  x-amzn-RequestId: f96f986d-28d3-43b1-a9b6-a6b7f7f9144f
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    403      0 --:--:-- --:--:-- --:--:--   401
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>applicationinsights.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://applicationinsights.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: applicationinsights.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:32 GMT
  content-length: 0
  x-amzn-requestid: daf76c2b-2387-424d-8928-3d88565ce130
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>appstream2.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://appstream2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appstream2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ea6d63a6-ad35-41a6-82c0-20e0b66488b6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:32 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>appsync.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://appsync.us-east-1.amazonaws.com/apis/stringvalue/ApiCaches -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appsync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 23
  date: Mon, 26 Oct 2020 21:52:32 GMT
  x-amzn-requestid: 4ab26226-dfce-4aaf-a306-acc3187a3929
  x-amzn-errortype: ForbiddenException
  x-amz-apigw-id: VCe9JH9HoAMFw3A=
  x-cache: Error from cloudfront
  via: 1.1 12a392bc3a7281f8d5d4591bfadc41fc.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: qoVnzbmFS_kCE-v9YliSdFkVKQ7gl0p-3TS9lp06jsvN_3gLG0gTgw==
  
  {"message":"Forbidden"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    23  100    23    0     0    142      0 --:--:-- --:--:-- --:--:--   141100    23  100    23    0     0    142      0 --:--:-- --:--:-- --:--:--   141
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>athena.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://athena.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: athena.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:52:32 GMT
  x-amzn-RequestId: fb151b59-8e0e-4845-8d28-bd8b1869e024
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>autoscaling.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://autoscaling.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: autoscaling.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: d59f12c0-eb83-4712-9b96-d3de60fdecb5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:33 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>autoscaling-plans.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://autoscaling-plans.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: autoscaling-plans.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 8aa4de6c-f294-43a4-873a-49a0dfe3fce6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:33 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>backup.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://backup.us-east-1.amazonaws.com/backup/plans -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: backup.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Mon, 26 Oct 2020 21:52:34 GMT
  x-amzn-RequestId: 26b4d16a-d994-4c6a-b960-460a71bcd088
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    407      0 --:--:-- --:--:-- --:--:--   407
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>batch.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://batch.us-east-1.amazonaws.com/v1/canceljob -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: batch.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:52:34 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: ee02e8f9-431b-4f7f-bcbd-91c2c571cd55
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCe9aF7wIAMFolg=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    263      0 --:--:-- --:--:-- --:--:--   264
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>braket.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://braket.us-east-1.amazonaws.com/quantum-task/stringvalue/cancel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: braket.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:34 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: deb86153-3258-41ae-b52d-73c6d287e3f9
  access-control-allow-origin: *
  access-control-allow-headers: *,Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request,content-type,x-amz-content-sha256,x-amz-user-agent,x-amzn-platform-id,x-amzn-trace-id
  x-amz-apigw-id: VCe9eFvzoAMFv3w=
  access-control-allow-methods: PUT
  x-amzn-trace-id: Root=1-5f974522-74fcd075167f13511385ccd8
  access-control-max-age: 600
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>budgets.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://budgets.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: budgets.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:35 GMT
  content-length: 0
  x-amzn-requestid: 7cdabdb2-50a4-4401-9fe5-b13fde94f26c
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>service.chime.aws.amazon.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://service.chime.aws.amazon.com/accounts/stringvalue/users/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: service.chime.aws.amazon.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 0288b835-ad15-4a7c-bf04-ee6d3fc930dd
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:52:35 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    360      0 --:--:-- --:--:-- --:--:--   360
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloud9.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cloud9.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloud9.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:36 GMT
  content-length: 0
  x-amzn-requestid: e973b976-7287-49dc-b52b-4c9f0db08bba
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>clouddirectory.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/facets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: clouddirectory.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: cdc63d77-9a64-4b47-bb1f-920d82c1bde0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Mon, 26 Oct 2020 21:52:36 GMT
  x-amzn-RequestId: cdc63d77-9a64-4b47-bb1f-920d82c1bde0
  Access-Control-Allow-Methods: PUT
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloudformation.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cloudformation.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudformation.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: cce83f82-ec23-4375-8f55-ee86b56f6b23
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:36 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloudfront.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cloudfront.amazonaws.com/2020-05-31/cache-policy -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudfront.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: cd5f7efb-fc39-42f2-9761-cd95d9b090e1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:36 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloudhsm.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cloudhsm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudhsm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: bc57fd6f-4ca7-4900-b70f-17a0fd92f549
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:37 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloudhsmv2.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cloudhsmv2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudhsmv2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Mon, 26 Oct 2020 21:52:37 GMT
  x-amzn-RequestId: 354acf06-90ab-4554-996a-907f308a2ef7
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    395      0 --:--:-- --:--:-- --:--:--   394100   127  100   127    0     0    395      0 --:--:-- --:--:-- --:--:--   394
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloudsearch.us-east-1.amazonaws.com</strong></td>
      <td>404 Not</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cloudsearch.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudsearch.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 64a3e1da-23f7-409b-b31d-4394cfe730a8
  Content-Length: 29
  Date: Mon, 26 Oct 2020 21:52:37 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     86      0 --:--:-- --:--:-- --:--:--    86
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloudsearchdomain.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://cloudsearchdomain.us-east-1.amazonaws.com/2013-01-01/search -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudsearchdomain.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: cloudsearchdomain.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cloudtrail.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cloudtrail.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudtrail.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: d74553c1-af37-4ceb-a740-a5b6dc81688e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:38 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>monitoring.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://monitoring.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: monitoring.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4b594e3a-f584-481e-97ca-5f491dffafc7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:38 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>events.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://events.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: events.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: cefee939-9e1b-4cb7-9a88-225cb62e27a0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:38 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>logs.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://logs.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: logs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 200b6eb4-2191-41b4-95c1-38cef65129c0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:39 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codeartifact.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codeartifact.us-east-1.amazonaws.com/v1/repository/external-connection -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeartifact.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:39 GMT
  content-length: 0
  x-amzn-requestid: 9c25d82d-c35a-4a36-b609-9f05d2d5cacb
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codebuild.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codebuild.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codebuild.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 97c6b765-e01c-4875-80d5-35c9e4864cb7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:40 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codecommit.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codecommit.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codecommit.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 9bea2326-95a4-4fc7-ad9d-27ea049ec9ec
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:40 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codedeploy.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codedeploy.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codedeploy.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1c0bdcee-eae9-4275-9553-ae06893f9f10
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:52:41 GMT
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codeguru-reviewer.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codeguru-reviewer.us-east-1.amazonaws.com/associations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeguru-reviewer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:41 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f2d3bda7-5532-4a71-89a5-a77e27dde199
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: VCe-fGvloAMFaGg=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f974529-25cb6658085d0e6f31a0ad4b
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codeguru-profiler.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codeguru-profiler.us-east-1.amazonaws.com/profilingGroups/stringvalue/configureAgent -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeguru-profiler.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Mon, 26 Oct 2020 21:52:41 GMT
  x-amzn-requestid: e2c87cb4-6ec9-4d0c-b7c9-ea6622f3717f
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,Date,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCe-hEoQIAMFing=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f974529-4ceaff5739b769e27edad0cc
  access-control-max-age: 600
  x-cache: Miss from cloudfront
  via: 1.1 d6b180eb367f7de26d67a9f3901b96a6.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: _8wrht5mFuzqHjAV3DZJuzfzAFuHCy0j-NyC8_GVGcs2imypVFQXdA==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codepipeline.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codepipeline.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codepipeline.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: c5ff7de1-2e33-4da8-8386-6667ad149314
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Type: null
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codestar.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codestar.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codestar.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: a0568ccc-79b3-4248-8160-a5b2a4d92b5e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:41 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codestar-connections.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codestar-connections.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codestar-connections.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:42 GMT
  content-length: 0
  x-amzn-requestid: a1b631f7-f92a-4d2a-9641-9305b9ee5c67
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>codestar-notifications.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codestar-notifications.us-east-1.amazonaws.com/createNotificationRule -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codestar-notifications.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:42 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 39dc84c4-2cd1-490c-84df-bf8de77c66f2
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCe-uGWPoAMFjnQ=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f97452a-0cfb51044d8a27b535d1218e
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cognito-identity.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cognito-identity.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cognito-identity.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:43 GMT
  content-length: 0
  x-amzn-requestid: a32af9e4-2e98-4d38-8750-d62ceebf663e
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cognito-idp.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cognito-idp.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cognito-idp.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:43 GMT
  content-length: 0
  x-amzn-requestid: 13ef063d-a692-4ce8-9438-086627aa9ced
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cognito-sync.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cognito-sync.us-east-1.amazonaws.com/identitypools/stringvalue/bulkpublish -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cognito-sync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:44 GMT
  content-length: 0
  x-amzn-requestid: 0d5f3c55-6bae-4eb8-a724-1b43f3244986
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>comprehend.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://comprehend.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: comprehend.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ea1d4586-16da-4c30-9107-beffa5c0df52
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:43 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>comprehendmedical.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://comprehendmedical.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: comprehendmedical.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4512801d-b1d8-4f22-9cc2-d6f7f4a804e6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:44 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>compute-optimizer.us-east-1.amazonaws.com</strong></td>
      <td>404 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://compute-optimizer.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: compute-optimizer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 404
  date: Mon, 26 Oct 2020 21:52:45 GMT
  content-length: 272
  x-amzn-requestid: 97a3a325-f79d-4a99-8531-10697da5c7bb
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
  <title>Page Not Found</title>
  </head>
  <body>Page Not Found</body>
  </html>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   272  100   272    0     0    925      0 --:--:-- --:--:-- --:--:--   922
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>config.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://config.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: config.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: bcba7adf-8d77-4a3b-b1c2-ac7c0de4c589
  Access-Control-Allow-Origin: *
  Strict-Transport-Security: max-age=86400
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:44 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>connect.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://connect.us-east-1.amazonaws.com/routing-profiles/stringvalue/stringvalue/associate-queues -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:45 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 7ef15e12-2c4a-444e-8f61-69ead5c7f7d8
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: VCe_KFOcIAMFt4g=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f97452d-4d1797004e8640f85fd53f34
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>participant.connect.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://participant.connect.us-east-1.amazonaws.com/participant/connection -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Bearer,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: participant.connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:46 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 5d3fa2f4-bd71-4f6a-b55b-0e2d3e989fad
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,X-Amz-Bearer
  x-amz-apigw-id: VCe_OG0OoAMFebQ=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f97452e-35efa2ed0012ed2148b37d8f
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>cur.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://cur.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cur.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 06586477-7db3-4095-ac79-49176f597314
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:46 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ce.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ce.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ce.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:46 GMT
  content-length: 0
  x-amzn-requestid: fcbb55a3-4619-4461-8311-eaf4b17a30d4
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>datapipeline.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://datapipeline.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: datapipeline.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 64099739-c183-4ddd-80c5-196d9c9b6f21
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:46 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>dms.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://dms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 507e0270-6881-4850-ba6f-bf9740f2d63f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:47 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>dataexchange.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://dataexchange.us-east-1.amazonaws.com/v1/jobs/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dataexchange.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Mon, 26 Oct 2020 21:52:47 GMT
  x-amzn-requestid: 746e783d-37bf-4e12-9c8b-e71c47ec85c0
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCe_eFlIoAMFa_Q=
  x-amzn-trace-id: Root=1-5f97452f-6ea3f4fe16af30a771d3f0cc
  x-cache: Error from cloudfront
  via: 1.1 34f8ef0e4c880df0650a814412a26ea6.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C1
  x-amz-cf-id: tPog1G751PVHQ3LtHITeJPeJCXw2MXn1N4QEjRcwPF2pTQAx_gUcjw==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    285      0 --:--:-- --:--:-- --:--:--   285
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>datasync.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://datasync.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: datasync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:52:48 GMT
  content-length: 127
  x-amzn-requestid: 002b1f7c-932c-4c99-aba6-1d0491084f33
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    440      0 --:--:-- --:--:-- --:--:--   440
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>dax.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://dax.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dax.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f301c5cd-2e23-4385-99dd-b0cf91208625
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:48 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>api.detective.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://api.detective.us-east-1.amazonaws.com/invitation -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.detective.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Content-Type: application/json
  Content-Length: 73
  Connection: keep-alive
  Date: Mon, 26 Oct 2020 21:52:48 GMT
  x-amzn-RequestId: c81ef98f-5e84-473d-a868-46dd7c91a1d1
  x-amzn-ErrorType: AccessDeniedException
  x-amz-apigw-id: VCe_pEnWIAMFuFQ=
  X-Amzn-Trace-Id: Root=1-5f974530-6dca5aef239f6bee25253dd5
  X-Cache: Error from cloudfront
  Via: 1.1 ec2a2c75c16156e4d43504606c118b91.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: SEA19-C1
  X-Amz-Cf-Id: goOksN7U-9EHo37aAGd4y2KutfYjYt1hTZz00gkAeK8V5jME0-puSg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    196      0 --:--:-- --:--:-- --:--:--   196100    73  100    73    0     0    196      0 --:--:-- --:--:-- --:--:--   196
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>devicefarm.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://devicefarm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devicefarm.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: devicefarm.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>directconnect.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://directconnect.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: directconnect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4ff5ff54-a8b6-4c97-95b6-3eee51ac9c1e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:49 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ds.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ddd2b50b-21ee-4d89-94cb-f7eb84f14518
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:49 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>dlm.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://dlm.us-east-1.amazonaws.com/policies -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dlm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:52:50 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a60c6e0f-fd24-4ff7-8517-50a01f9681cd
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCe_1E15IAMFoJg=
  x-amzn-trace-id: Root=1-5f974532-1de98cda3c68eea840ec2fe9
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    245      0 --:--:-- --:--:-- --:--:--   244
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>rds.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://rds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: e96690d6-a50f-45b4-a7a2-eb237c008b5d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:49 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>dynamodb.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://dynamodb.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dynamodb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Server: Server
  Date: Mon, 26 Oct 2020 21:52:50 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: GMCJBH987G2911EPLHSOS1V15NVV4KQNSO5AEMVJF66Q9ASUAAJG
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>streams.dynamodb.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://streams.dynamodb.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: streams.dynamodb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Server: Server
  Date: Mon, 26 Oct 2020 21:52:50 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 40K1JRUL1I8TVEKJBS4LP123O3VV4KQNSO5AEMVJF66Q9ASUAAJG
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ebs.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ebs.us-east-1.amazonaws.com/snapshots/completion/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,x-amz-ChangedBlocksCount,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ebs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 8444a799-4c73-4f39-990b-fbfdaf558ddd
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:52:50 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    445      0 --:--:-- --:--:-- --:--:--   445
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ec2.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ec2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ec2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: *
  Access-Control-Max-Age: 1800
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:52 GMT
  Server: AmazonEC2
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ec2-instance-connect.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ec2-instance-connect.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ec2-instance-connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 01d727d1-0015-48fc-aae5-33b41f456f5a
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:52:51 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    416      0 --:--:-- --:--:-- --:--:--   416
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>api.ecr.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://api.ecr.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.ecr.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1567cbc1-53a4-407c-ae65-41c66a787f76
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:52:52 GMT
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ecs.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ecs.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ecs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 6063cb1c-bee1-4703-8d59-b62f20169bab
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:53 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>elasticfilesystem.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/access-points -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticfilesystem.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f52f8602-e106-41f0-8806-b003dc160d37
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:53 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>eks.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://eks.us-east-1.amazonaws.com/clusters -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: eks.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:52:53 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: f8c42969-4e38-4f87-bbc5-b61555ee2df2
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfAaGM5oAMFmtA=
  x-amzn-trace-id: Root=1-5f974535-237c986921c6d7654a48276a
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    213      0 --:--:-- --:--:-- --:--:--   213
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>elasticbeanstalk.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://elasticbeanstalk.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticbeanstalk.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:52:53 GMT
  x-amzn-RequestId: acb5d5f7-a480-4f9f-b068-7353b6f40691
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>api.elastic-inference.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://api.elastic-inference.us-east-1.amazonaws.com/describe-accelerator-offerings -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.elastic-inference.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:54 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 16f298a8-d33f-42b9-8749-8ef8b87e5579
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfAhGWuIAMF9MQ=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f974536-2a312a9c23893c950f3afcab
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>elasticloadbalancing.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://elasticloadbalancing.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticloadbalancing.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: dadee43f-ac2e-4166-b859-907909eecad9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:54 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>elasticloadbalancing.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://elasticloadbalancing.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticloadbalancing.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 30047a48-b77f-49b3-be1a-83bf9e30dbad
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:54 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>elastictranscoder.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobs/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elastictranscoder.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: ab4ed287-7ef0-4474-82c2-85fc8c30763a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:55 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>elasticache.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://elasticache.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticache.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2c855ef9-f7fd-4014-bbf5-a2bc5b7175dc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:55 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>es.us-east-1.amazonaws.com</strong></td>
      <td>404 Not</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/stringvalue/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: es.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 82f478da-aa90-42e3-9d55-517d68914359
  Content-Length: 29
  Date: Mon, 26 Oct 2020 21:52:55 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     90      0 --:--:-- --:--:-- --:--:--    90
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>elasticmapreduce.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://elasticmapreduce.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticmapreduce.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ded5afd5-82fb-4de9-ad2d-0acc35ffc28f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:56 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>events.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://events.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: events.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 042c9f48-5b53-4c40-a430-f76273cae927
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:56 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>firehose.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://firehose.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: firehose.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f18a9ce5-59e9-7907-a99b-db9c15fc1ac7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:56 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>fms.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://fms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: fms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403
  x-amzn-RequestId: 2ad38661-5ea5-441c-b044-3b8e3f3797b8
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:52:57 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    376      0 --:--:-- --:--:-- --:--:--   376
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>forecast.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://forecast.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: forecast.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:52:57 GMT
  x-amzn-RequestId: 919ba25e-bcef-4dea-b728-18142609006d
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>forecastquery.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://forecastquery.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: forecastquery.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:52:58 GMT
  x-amzn-RequestId: 9ddeffbc-5eed-4c98-a072-2efcdaad6617
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>frauddetector.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://frauddetector.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: frauddetector.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:58 GMT
  content-length: 0
  x-amzn-requestid: 109bec87-de0a-4e11-bf76-9a022b971bf8
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>fsx.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://fsx.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: fsx.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:52:58 GMT
  content-length: 0
  x-amzn-requestid: 7c915c66-597d-44ac-b89d-ef3d3ad7f192
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>gamelift.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://gamelift.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: gamelift.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 54ffb6f4-254e-4b45-99f5-58586198577f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:52:58 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>glacier.us-east-1.amazonaws.com</strong></td>
      <td>400 Bad</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://glacier.us-east-1.amazonaws.com/stringvalue/vaults/stringvalue/multipart-uploads/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,x-amz-glacier-version,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: glacier.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 400 Bad Request
  x-amzn-RequestId: NHVvpebacLTNEsfZqGRapnwsy5UGNnlQpPV5O54iXLmFOfs
  Content-Length: 109
  Date: Mon, 26 Oct 2020 21:52:59 GMT
  Connection: close
  
  {"code":"MissingParameterValueException","message":"Required parameter missing: API version","type":"Client"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   109  100   109    0     0    378      0 --:--:-- --:--:-- --:--:--   378
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>globalaccelerator.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://globalaccelerator.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: globalaccelerator.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: globalaccelerator.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>glue.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://glue.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: glue.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:00 GMT
  content-length: 0
  x-amzn-requestid: 9d9e6ebc-0334-4f1b-846b-dcf0eefb6327
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>greengrass.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://greengrass.us-east-1.amazonaws.com/greengrass/groups/stringvalue/role -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: greengrass.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:00 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: b9c9dc9d-e5df-4cb4-80a6-4c8ec3da46b4
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfBdF3LIAMFYew=
  x-amzn-trace-id: Root=1-5f97453c-6b68e5d66f2baf044426aa1f
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    242      0 --:--:-- --:--:-- --:--:--   243
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>groundstation.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://groundstation.us-east-1.amazonaws.com/contact/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: groundstation.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: groundstation.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>guardduty.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://guardduty.us-east-1.amazonaws.com/detector/stringvalue/master -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: guardduty.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:00 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 12d52d9a-f380-4d1c-9f69-f550a7225fa8
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfBiELwoAMFsfg=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    233      0 --:--:-- --:--:-- --:--:--   233
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>health.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://health.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: health.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Access-Control-Allow-Credentials: true
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:00 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>honeycode.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://honeycode.us-east-1.amazonaws.com/screendata -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: honeycode.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: honeycode.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>iam.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://iam.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iam.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7a4bff39-81f8-4b3d-948e-98452afd5456
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:00 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>identitystore.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://identitystore.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: identitystore.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:02 GMT
  content-length: 0
  x-amzn-requestid: 8da72856-bd7f-49c7-8508-3894bf07e424
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>imagebuilder.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://imagebuilder.us-east-1.amazonaws.com/CancelImageCreation -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: imagebuilder.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:02 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f139f87f-5e15-4920-83ca-0f872b395ed9
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: VCfBwGYsoAMF61w=
  access-control-allow-methods: PUT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>inspector.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://inspector.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: inspector.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 31ec4908-2cfb-486d-bb47-0f09f8c2ae1d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:02 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>iot.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://iot.us-east-1.amazonaws.com/accept-certificate-transfer/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PATCH" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:03 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 49c1414e-9de2-432b-8483-36f852e35a0f
  access-control-allow-origin: *
  access-control-allow-headers: Authorization, X-Amz-Date, X-Amz-Security-Token, x-amzn-iot-principal, X-Amz-Content-Sha256, X-Amz-User-Agent, Content-Type, x-amzn-principal
  x-amz-apigw-id: VCfB5EVHIAMFjsw=
  access-control-allow-methods: OPTIONS, GET, HEAD, POST, PUT, PATCH, DELETE
  
  {}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      6      0 --:--:-- --:--:-- --:--:--     6
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>devices.iot1click.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://devices.iot1click.us-east-1.amazonaws.com/claims/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devices.iot1click.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: devices.iot1click.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>projects.iot1click.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://projects.iot1click.us-east-1.amazonaws.com/projects/stringvalue/placements/stringvalue/devices/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: projects.iot1click.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:03 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 888a2bc8-d4cc-4bcb-b78f-bbdda6cb8905
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfB8H3cIAMFnFQ=
  access-control-allow-methods: PUT,DELETE
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>data.iot.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://data.iot.us-east-1.amazonaws.com/things/stringvalue/shadow -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  access-control-allow-origin: *
  access-control-allow-methods: DELETE,POST,GET
  access-control-allow-headers: Authorization,X-amz-security-token,Accept,X-amz-date,X-amz-user-agent,X-amz-content-sha256,Accept-Language,X-requested-with,Content-Language,Content-Type
  access-control-max-age: 1800
  content-length: 0
  date: "Mon, 26 Oct 2020 21:53:03 GMT"
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>iotevents.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://iotevents.us-east-1.amazonaws.com/detector-models -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotevents.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:04 GMT
  content-length: 0
  x-amzn-requestid: d45e285d-6cd8-460b-94b4-9632275fc66b
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>data.iotevents.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://data.iotevents.us-east-1.amazonaws.com/inputs/messages -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.iotevents.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:04 GMT
  content-length: 0
  x-amzn-requestid: cb95258e-db3e-413f-bd75-55259607156d
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>data.jobs.iot.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://data.jobs.iot.us-east-1.amazonaws.com/things/stringvalue/jobs/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.jobs.iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4b7faca1-f619-4138-9484-503ff37ce575
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: GET
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:04 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>iotanalytics.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://iotanalytics.us-east-1.amazonaws.com/messages/batch -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:05 GMT
  content-length: 0
  x-amzn-requestid: 50c0d4be-cbd1-47e0-9145-18159c9e61d1
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  cache-control: no-cache, no-store, must-revalidate, private
  expires: 0
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  pragma: no-cache
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>api.tunneling.iot.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://api.tunneling.iot.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.tunneling.iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:05 GMT
  content-length: 25
  x-amzn-requestid: 65f986d5-f196-4e6f-902f-10e3c012dcc9
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     70      0 --:--:-- --:--:-- --:--:--    70
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>model.iotsitewise.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://model.iotsitewise.us-east-1.amazonaws.com/assets/stringvalue/associate -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: model.iotsitewise.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:06 GMT
  content-length: 0
  x-amzn-requestid: 2f0de65d-2408-4f1a-bde9-c111bbd938fc
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>iotthingsgraph.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://iotthingsgraph.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotthingsgraph.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:06 GMT
  content-length: 130
  x-amzn-requestid: 15bdfce5-7db3-4365-93b5-ba942f6f7e64
  
  <AccessDeniedException>
  <Message>Unable to determine service/operation name to be authorized</Message>
  </AccessDeniedException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   130  100   130    0     0    411      0 --:--:-- --:--:-- --:--:--   411
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ivs.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ivs.us-east-1.amazonaws.com/BatchGetChannel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ivs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Mon, 26 Oct 2020 21:53:06 GMT
  x-amzn-requestid: 8793c62e-841a-4dc0-992b-bfad6a69a2e4
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfCcE3QoAMFmZg=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f974542-4dd8d1f8157578fd4d944563
  x-cache: Miss from cloudfront
  via: 1.1 efcf7b9d0f917f9ebf314db03e52d9b7.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C1
  x-amz-cf-id: 7NPPNY8lP5IpLlZTmjeYoRVxtP6tLSr2_DK50xhzozXl6PPLq1uOSA==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kafka.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kafka.us-east-1.amazonaws.com/v1/clusters/stringvalue/scram-secrets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kafka.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Mon, 26 Oct 2020 21:53:06 GMT
  x-amzn-requestid: 7fe578d0-afac-410a-92f6-8173856c36a9
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfCeFlZoAMFovQ=
  x-amzn-trace-id: Root=1-5f974542-0d40df280fdc6778646ea0e5
  x-cache: Error from cloudfront
  via: 1.1 98aedae6661e3904540676966998ed89.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: nH4aMprE40oY1LrobLuyxvEPHoN3lBRogY83szxzvw9rg3DMBoVBaw==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    354      0 --:--:-- --:--:-- --:--:--   352
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kendra.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kendra.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kendra.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 254ba838-b01b-4c6f-a876-f662c138d520
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:06 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kinesis.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kinesis.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesis.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f690f1ff-5618-3bdc-ae81-b67cddc9d58b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:07 GMT
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kinesisanalytics.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kinesisanalytics.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f746ae88-738a-4f79-a663-4cc1c5a29bb1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:07 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kinesisanalytics.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kinesisanalytics.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ad29c020-470a-4c09-864a-6d8e6f362fcf
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:07 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kinesisvideo.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/createSignalingChannel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: eed08c76-eb76-4149-b066-0ad5a9bab171
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:08 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kinesisvideo.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/getClip -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6430f7c0-8397-4b23-b4d6-0f6d400a954e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:08 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kinesisvideo.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/getMedia -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7fe142f4-0233-49f5-b16c-56f1dc6b5851
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:09 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kinesisvideo.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/v1/get-ice-server-config -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7f2d666c-135d-413e-90c6-a006413ac750
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:09 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>kms.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://kms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6f170906-16cf-4420-ba3d-580948bcbe74
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: no-cache, no-store, must-revalidate, private
  Expires: 0
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Pragma: no-cache
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:09 GMT
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>lakeformation.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://lakeformation.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lakeformation.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:10 GMT
  content-length: 0
  x-amzn-requestid: 5e55a746-836b-454e-9b09-d9506dd76093
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>lambda.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/stringvalue/versions/stringvalue/policy -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lambda.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:10 GMT
  content-length: 0
  x-amzn-requestid: c1a7b533-9619-4f24-9b5f-f5e99528dc65
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date,x-amz-log-result,x-amz-function-error
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>models.lex.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://models.lex.us-east-1.amazonaws.com/bots/stringvalue/versions -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: models.lex.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:10 GMT
  x-amzn-RequestId: a82fffe3-273e-4bbc-9df8-2fec10b6c68b
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>runtime.lex.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://runtime.lex.us-east-1.amazonaws.com/bot/stringvalue/alias/stringvalue/user/stringvalue/session -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.lex.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  x-amzn-requestid: 1ede3c97-dc29-4624-977b-ad84adbe1267
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: DELETE
  access-control-expose-headers: x-amz-lex-session-attributes,x-amz-lex-slots,x-amz-lex-dialog-state,Date,x-amz-lex-message,x-amz-lex-input-transcript,x-amzn-ErrorMessage,x-amz-lex-slot-to-elicit,x-amzn-RequestId,x-amzn-ErrorType,x-amz-lex-intent-name
  access-control-max-age: 172800
  date: Mon, 26 Oct 2020 21:53:11 GMT
  content-length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>license-manager.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://license-manager.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: license-manager.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 79100a88-fbd6-4fad-91ce-9e1be7bab7d9
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:11 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    389      0 --:--:-- --:--:-- --:--:--   389
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>lightsail.us-east-1.amazonaws.com</strong></td>
      <td>404 Not</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://lightsail.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lightsail.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  Server: Server
  Date: Mon, 26 Oct 2020 21:53:12 GMT
  Content-Length: 114
  Connection: keep-alive
  x-amzn-RequestId: b893b2f2-59a8-4e18-a6cc-3726dd0af4c6
  
  <UnknownOperationException>
  <Message>The request is not valid operation.</Message>
  </UnknownOperationException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   114  100   114    0     0    344      0 --:--:-- --:--:-- --:--:--   343
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>machinelearning.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://machinelearning.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: machinelearning.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: fc00cafd-bd8a-4d2e-91bd-402e3328ff02
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:12 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>macie.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://macie.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: macie.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:12 GMT
  content-length: 127
  x-amzn-requestid: 7a8376e0-f17c-47ce-a52a-8ac0543bcbd1
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    394      0 --:--:-- --:--:-- --:--:--   394
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>macie2.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://macie2.us-east-1.amazonaws.com/invitations/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: macie2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:13 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 010c5421-4070-4a0e-a447-d8b0d8947874
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfDdHztIAMFrPQ=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    223      0 --:--:-- --:--:-- --:--:--   223
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>managedblockchain.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://managedblockchain.us-east-1.amazonaws.com/networks/stringvalue/members -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: managedblockchain.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:13 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 424b10b8-4d80-4804-a7bd-afc352d9e2da
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfDgHMJIAMFcdA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    229      0 --:--:-- --:--:-- --:--:--   229
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>catalog.marketplace.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://catalog.marketplace.us-east-1.amazonaws.com/CancelChangeSet -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PATCH" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: catalog.marketplace.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: PATCH
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:13 GMT
  x-amzn-RequestId: 88f6b7ee-7856-4d85-9e0e-33edf970f952
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>marketplacecommerceanalytics.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://marketplacecommerceanalytics.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: marketplacecommerceanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: d5b2f471-9c18-4e03-8675-e887aa6e727d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:13 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>entitlement.marketplace.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://entitlement.marketplace.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: entitlement.marketplace.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 49cc4bf7-b77d-4554-aae5-f314cfae0fdb
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:14 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    426      0 --:--:-- --:--:-- --:--:--   426
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>metering.marketplace.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://metering.marketplace.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: metering.marketplace.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 0ada60ae-fde4-4fad-a7fa-398e152e5d5a
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:14 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    427      0 --:--:-- --:--:-- --:--:--   426
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mediaconnect.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mediaconnect.us-east-1.amazonaws.com/v1/flows/stringvalue/outputs -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediaconnect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Mon, 26 Oct 2020 21:53:15 GMT
  x-amzn-requestid: a778be86-b436-4128-8933-05842aba5db1
  x-amzn-errortype: APIGatewayFailedToParseRequestError
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfDwF4lIAMF8Tw=
  x-amzn-trace-id: Root=1-5f97454b-172ecbe216c1bd100ccee0ab
  x-cache: Error from cloudfront
  via: 1.1 e9f9d4725d6328edca783d6dff756da8.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C1
  x-amz-cf-id: JTB-x6wlrwBuTmJdr5x9HrGYfPXZ6iiwLZW1fwcIN9URGxbNvGeR8w==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    496      0 --:--:-- --:--:-- --:--:--   496
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mediaconvert.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mediaconvert.us-east-1.amazonaws.com/2017-08-29/certificates -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediaconvert.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 8
  date: Mon, 26 Oct 2020 21:53:15 GMT
  x-amzn-requestid: 6e34dcd8-e541-4227-8f3d-2e551b78c6ba
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-User-Agent
  x-amz-apigw-id: VCfDxE7ZoAMFe9g=
  access-control-allow-methods: OPTIONS,POST
  x-amzn-trace-id: Root=1-5f97454b-3c1577ff6af2d95c2a1d3f0e
  x-cache: Miss from cloudfront
  via: 1.1 d90109c5a0c30f43223e0db85921c5c2.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C1
  x-amz-cf-id: xZPjYeoSvpAl94WcZQvwaAFA50P7h8TdgqZG-Q0UnCp-WjAc-6X7JQ==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     8  100     8    0     0     60      0 --:--:-- --:--:-- --:--:--    60
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>medialive.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://medialive.us-east-1.amazonaws.com/prod/inputDevices/stringvalue/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: medialive.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Mon, 26 Oct 2020 21:53:15 GMT
  x-amzn-requestid: cb73bc37-d21a-4629-937e-61330728c3de
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfD1HODIAMFbVA=
  x-cache: Error from cloudfront
  via: 1.1 2241406ac19fffc8f35d6ddef8e22f56.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C1
  x-amz-cf-id: iQQKcavV2ndpsFxvCtYaGJmonIODQAwApJqaljW-u3vMV6yn81swbQ==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    296      0 --:--:-- --:--:-- --:--:--   296
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mediapackage.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mediapackage.us-east-1.amazonaws.com/channels/stringvalue/configure_logs -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediapackage.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Mon, 26 Oct 2020 21:53:15 GMT
  x-amzn-requestid: 9779898d-4f72-45c5-bb99-7d017ebe236f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfD4G40oAMFYew=
  x-cache: Error from cloudfront
  via: 1.1 d0387b833e3ca8cb748a1296b4b4bf2b.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C1
  x-amz-cf-id: zK0X1emhPWccEcSdsb-lN-kbqtfKryFQDZ5MOCXFvc2lEWYpj1jaCg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    267      0 --:--:-- --:--:-- --:--:--   266
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mediapackage-vod.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mediapackage-vod.us-east-1.amazonaws.com/assets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediapackage-vod.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 3
  date: Mon, 26 Oct 2020 21:53:16 GMT
  x-amzn-requestid: 760a0455-4c53-42e0-a298-840303764a27
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfD8F_VIAMF5JQ=
  access-control-allow-methods: *
  x-cache: Miss from cloudfront
  via: 1.1 476c2ba6d9f6cd69dbcedbd65688cbc0.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: dz-tNXcCXV8fTMRlW739RJkO3es-mwD9APUvHdMElSKIH_uJvX9sWQ==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0      8      0 --:--:-- --:--:-- --:--:--     8
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mediastore.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mediastore.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediastore.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Mon, 26 Oct 2020 21:53:16 GMT
  x-amzn-RequestId: FE6GU3WITDYSE2KZUWXYKJRA3RNS66NGCEIHPEBOTDVGUKP4AYXZ3J5SWPUWFY4RFV6QEMBVHNVKUSFSRE5OR2I
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    453      0 --:--:-- --:--:-- --:--:--   453
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>data.mediastore.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://data.mediastore.us-east-1.amazonaws.com/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.mediastore.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: data.mediastore.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>api.mediatailor.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://api.mediatailor.us-east-1.amazonaws.com/playbackConfiguration/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.mediatailor.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:17 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 805d8cee-f7df-43a2-ad38-ef80cd342176
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfEDF5HoAMFqLA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    224      0 --:--:-- --:--:-- --:--:--   223
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mgh.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mgh.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mgh.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:17 GMT
  x-amzn-RequestId: bfb6d1d8-d6b2-4ce4-926b-d9de48b52168
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>migrationhub-config.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://migrationhub-config.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: migrationhub-config.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:17 GMT
  content-length: 0
  x-amzn-requestid: c291b09b-114e-45e7-8e78-3f255091d674
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mobile.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mobile.us-east-1.amazonaws.com/projects -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mobile.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:17 GMT
  x-amzn-RequestId: 909e50be-7919-4492-8328-53ef26d43507
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mq.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mq.us-east-1.amazonaws.com/v1/brokers -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mq.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Mon, 26 Oct 2020 21:53:18 GMT
  x-amzn-requestid: 503d1273-ba0d-478b-af69-82f13c0607e7
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfERHJ5oAMF5Zg=
  x-amzn-trace-id: Root=1-5f97454e-7dcde4446e443ef823f0de5c
  x-cache: Error from cloudfront
  via: 1.1 32c16f33c8f5601364fa8229b0d74dc3.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: kYqLZ3LhSK2myVXeXchoCz-ZYBtInc5ekAPWhud4ZbBYDkwpIMdLgA==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    288      0 --:--:-- --:--:-- --:--:--   289
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mturk-requester.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://mturk-requester.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mturk-requester.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 0ff2aa35-1231-48c8-90af-f8db552bf73b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:18 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>rds.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://rds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 3889cfc2-538c-4e71-b9c9-a0f210024af0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:18 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>networkmanager.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://networkmanager.us-east-1.amazonaws.com/global-networks/stringvalue/customer-gateway-associations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: networkmanager.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: networkmanager.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>opsworks.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://opsworks.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: opsworks.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:19 GMT
  x-amzn-RequestId: f99527e3-570d-4e7f-b3ff-96fc05bf6a6a
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>opsworks-cm.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://opsworks-cm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: opsworks-cm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 831a2a29-b6e3-40fd-b402-e3ec3eae131f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:19 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>organizations.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://organizations.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: organizations.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 183f2ccf-158f-4dc3-982a-c26c7988165c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:19 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>outposts.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://outposts.us-east-1.amazonaws.com/outposts -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: outposts.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:20 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 068b67cf-189a-42f2-8477-96e2b30d2b24
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfEoFFYoAMF8Nw=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f974550-4c15a02f7821746e2198053a
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>personalize.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://personalize.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: personalize.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:20 GMT
  x-amzn-RequestId: 35e05e1d-e7c1-4e3e-8a65-699f06202a26
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>personalize-events.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://personalize-events.us-east-1.amazonaws.com/events -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: personalize-events.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:20 GMT
  x-amzn-RequestId: 3a46f63c-9ff2-487b-a26f-33563ea9f7fb
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>personalize-runtime.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://personalize-runtime.us-east-1.amazonaws.com/personalize-ranking -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: personalize-runtime.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:21 GMT
  x-amzn-RequestId: 9e9cdf3f-2a8f-4fe2-93b4-11e71c7766f4
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>pi.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://pi.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: pi.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:21 GMT
  x-amzn-RequestId: a5c04b35-4407-438a-aa98-dcfc385c3616
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>pinpoint.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://pinpoint.us-east-1.amazonaws.com/v1/apps -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: pinpoint.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Content-Type: application/json
  Content-Length: 0
  Connection: keep-alive
  Date: Mon, 26 Oct 2020 21:53:22 GMT
  x-amzn-RequestId: 42dfb5bc-3f45-41e6-854d-6ce31456e4eb
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfE4FB9oAMFb-Q=
  Access-Control-Allow-Methods: POST,GET,OPTIONS
  X-Cache: Miss from cloudfront
  Via: 1.1 040bad3c7f7db09654c66da40c719fb0.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: YVR50-C1
  X-Amz-Cf-Id: OiW2PPN6f_gcuvD7UhaBCM3pcoNtYcKHLRidzxGD-Cc1MvwqholdUQ==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>email.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/v1/email/configuration-sets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1e0de721-a79c-4313-bca6-2f01b0ce58dc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:21 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>sms-voice.pinpoint.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://sms-voice.pinpoint.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sms-voice.pinpoint.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 3
  date: Mon, 26 Oct 2020 21:53:22 GMT
  x-amzn-requestid: c1c8644e-5341-4163-a7ea-114df80d2747
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: VCfE9Ex0IAMFoYg=
  access-control-allow-methods: GET,POST,PUT,DELETE,OPTIONS
  x-cache: Miss from cloudfront
  via: 1.1 6a9b42e38e76b7d4a4044ebe0e0eca09.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: HBf1dZjL-NV1NnUXnTHpm34_nCImjhK3XBoB4yzr-iC1v94eHmAABA==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0     18      0 --:--:-- --:--:-- --:--:--    18100     3  100     3    0     0     18      0 --:--:-- --:--:-- --:--:--    18
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>polly.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://polly.us-east-1.amazonaws.com/v1/lexicons/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: polly.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: b2f9ac76-031d-4d4b-ab3c-e86e64cc59fa
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:23 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>api.pricing.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://api.pricing.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.pricing.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ba9489f4-d29b-4fb4-bb5b-67c6fa3f91c3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:23 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>qldb.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://qldb.us-east-1.amazonaws.com/ledgers/stringvalue/journal-kinesis-streams/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: qldb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Mon, 26 Oct 2020 21:53:23 GMT
  x-amzn-requestid: 39ce497d-2edc-473b-9bba-e4a500416df4
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: VCfFIFQFoAMFz-w=
  access-control-allow-methods: DELETE,GET
  x-amzn-trace-id: Root=1-5f974553-5682827146fde97554ce8122
  x-cache: Miss from cloudfront
  via: 1.1 760139201585481b26f947c5f776103a.cloudfront.net (CloudFront)
  x-amz-cf-pop: SEA19-C2
  x-amz-cf-id: it4uL07THrOkWkAblDbo718M8Drfi8xKbolWgZ0NbxSDpTu5TjT25w==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>session.qldb.us-east-1.amazonaws.com</strong></td>
      <td>500 Internal</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://session.qldb.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: session.qldb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 500 Internal Server Error
  x-amzn-RequestId: IXlQAYIEZqGAxBVVsaOjr0
  Date: Mon, 26 Oct 2020 21:53:24 GMT
  Content-Length: 19
  
  <InternalFailure/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    19  100    19    0     0     68      0 --:--:-- --:--:-- --:--:--    68
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>quicksight.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://quicksight.us-east-1.amazonaws.com/accounts/stringvalue/data-sets/stringvalue/ingestions/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: quicksight.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:24 GMT
  content-length: 127
  x-amzn-requestid: 513090b3-f21d-4962-950a-f1db225fbe03
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    396      0 --:--:-- --:--:-- --:--:--   396
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ram.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ram.us-east-1.amazonaws.com/acceptresourceshareinvitation -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ram.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:25 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: dd012542-28e4-410c-8cac-4580c4cc7f2f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfFTEN0IAMFkrA=
  x-amzn-trace-id: Root=1-5f974555-3b42b6150b48238909be10db
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    252      0 --:--:-- --:--:-- --:--:--   251
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>rds.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://rds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2d2d4c47-dde3-44ef-90a6-062a96d762a4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:24 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>rds-data.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://rds-data.us-east-1.amazonaws.com/BatchExecute -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds-data.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 18e48a85-6db3-4f0f-9544-1ed5034ab345
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:25 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    400      0 --:--:-- --:--:-- --:--:--   400
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>redshift.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://redshift.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: redshift.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: fa1ae7ae-9fe3-49da-87e6-c55adb35b6b2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:26 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>redshift-data.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://redshift-data.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: redshift-data.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 32af3cbd-abf8-4833-8c52-f0f1b2300ae0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:26 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>rekognition.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://rekognition.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rekognition.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:26 GMT
  x-amzn-RequestId: cd6f7e31-9b28-407b-8510-e591fc50f3f0
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>resource-groups.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://resource-groups.us-east-1.amazonaws.com/groups -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: resource-groups.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:27 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: fe96628b-3103-4217-8cf6-fd92c767817a
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfFoF5loAMFkRg=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f974557-65827ae87536a0660f9eb2fa
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>tagging.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://tagging.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: tagging.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 75b4eb30-8dd9-4cd0-9bfd-e26bfc1b36fd
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:27 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>robomaker.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://robomaker.us-east-1.amazonaws.com/batchDeleteWorlds -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: robomaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:27 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 44cb65cb-3e7d-40fa-b7b2-322de9d5bd9d
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfFvG36oAMFiWw=
  x-amzn-trace-id: Root=1-5f974557-4b7b203b0155325d57f5bf43
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    245      0 --:--:-- --:--:-- --:--:--   245
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>route53.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://route53.amazonaws.com/2013-04-01/hostedzone/stringvalue/associatevpc -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: cd42ce81-ae6c-4539-be3d-4bdd6d1a7568
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:27 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>route53domains.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://route53domains.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53domains.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 8b04ab77-e26b-4946-a1b9-da38a5b521a8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:28 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>route53resolver.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://route53resolver.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53resolver.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:28 GMT
  content-length: 0
  x-amzn-requestid: 6b6117b8-c4af-426f-a72a-403f6c25f7d8
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>stringvalue.s3.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://stringvalue.s3.us-east-1.amazonaws.com/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: stringvalue.s3.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: 5METANEHCQ6JFM6G
  x-amz-id-2: PV3OSptFeYnvEA2ZUNKAj+HO/nBIILnohd8P0Y6qs9lS3KlfxRFHlxaxIpRRDU9+lyCLv1TS3WM=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Mon, 26 Oct 2020 21:53:28 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <Error><Code>AccessForbidden</Code><Message>CORSResponse: Bucket not found</Message><Method>DELETE</Method><ResourceType>BUCKET</ResourceType><RequestId>5METANEHCQ6JFM6G</RequestId><HostId>PV3OSptFeYnvEA2ZUNKAj+HO/nBIILnohd8P0Y6qs9lS3KlfxRFHlxaxIpRRDU9+lyCLv1TS3WM=</HostId></Error>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   321    0   321    0     0   1150      0 --:--:-- --:--:-- --:--:--  1154
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>stringvalue.s3-control.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://stringvalue.s3-control.us-east-1.amazonaws.com/v20180820/accesspoint/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,x-amz-account-id,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: stringvalue.s3-control.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: 30012BC82865EC77
  x-amz-id-2: h02avd20NoLkNtxBhI6I5j4/5TBZMJ1BS617xzK/2uEq5JRPTNDjBRnzAb29moHedtHddvHUPbw=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Mon, 26 Oct 2020 21:53:29 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <ErrorResponse><Error><Code>AccessDenied</Code><Message>Access Denied</Message><AccountId>stringvalue</AccountId></Error><RequestId>30012BC82865EC77</RequestId><HostId>h02avd20NoLkNtxBhI6I5j4/5TBZMJ1BS617xzK/2uEq5JRPTNDjBRnzAb29moHedtHddvHUPbw=</HostId></ErrorResponse>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   308    0   308    0     0   1084      0 --:--:-- --:--:-- --:--:--  1084
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>s3-outposts.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://s3-outposts.us-east-1.amazonaws.com/S3Outposts/CreateEndpoint -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: s3-outposts.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ca014ceb-55ea-451a-b464-4f7a5912ad3a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:30 GMT
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>api.sagemaker.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://api.sagemaker.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: c038f29f-d31b-490f-a4ad-28049180e21b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:29 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>a2i-runtime.sagemaker.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://a2i-runtime.sagemaker.us-east-1.amazonaws.com/human-loops/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: a2i-runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:30 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 4c62dd7c-e2b1-43df-8da8-f1713ddd1358
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: VCfGNEHQIAMFfNg=
  access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
  x-amzn-trace-id: Root=1-5f97455a-65db82310f62de64639e3ff4
  
  {}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      6      0 --:--:-- --:--:-- --:--:--     6
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>runtime.sagemaker.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/stringvalue/invocations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f9536bd9-715a-49e8-9f94-c507c2987de9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-Amzn-Invoked-Production-Variant,x-amzn-RequestId,x-amzn-ErrorType,X-Amzn-SageMaker-Custom-Attributes,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:31 GMT
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>savingsplans.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://savingsplans.amazonaws.com/CreateSavingsPlan -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: savingsplans.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:31 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 80299570-0d8c-48b1-a67e-c99629bfeb7f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfGUHZLIAMF9sw=
  x-amzn-trace-id: Root=1-5f97455b-62a7f3550621220e6dd35eeb
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    217      0 --:--:-- --:--:-- --:--:--   217
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>schemas.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://schemas.us-east-1.amazonaws.com/v1/discoverers -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: schemas.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:31 GMT
  content-type: application/json
  content-length: 113
  x-amzn-requestid: 0548c550-db15-42a6-b991-a4f1a8e89a56
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfGYHB9oAMFhTA=
  x-amzn-trace-id: Root=1-5f97455b-2ce1cdbc53a11ecd55c233d5
  
  {
  "Message":"Unable to determine service/operation name to be authorized",
  "Code": "MethodNotAllowed"
  }
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   113  100   113    0     0    323      0 --:--:-- --:--:-- --:--:--   323
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>secretsmanager.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://secretsmanager.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: secretsmanager.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:32 GMT
  content-length: 0
  x-amzn-requestid: 4d4c3581-48f4-4dd1-a0bb-a53901d081d3
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>securityhub.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://securityhub.us-east-1.amazonaws.com/master -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: securityhub.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:32 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: eade9eb9-080d-49a3-879b-e41c638756f7
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfGfEe_oAMFmKQ=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    265      0 --:--:-- --:--:-- --:--:--   265
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>serverlessrepo.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://serverlessrepo.us-east-1.amazonaws.com/applications -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: serverlessrepo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:32 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: c6bee662-e3e1-4704-9b96-2b6506293fba
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfGiEz_oAMFYWQ=
  x-amzn-trace-id: Root=1-5f97455c-4571b34e044f71f50c67f9c9
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    250      0 --:--:-- --:--:-- --:--:--   249
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>servicecatalog.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://servicecatalog.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: servicecatalog.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 43c513fb-8aa5-4030-a3d4-96a18a42864f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:33 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>servicequotas.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://servicequotas.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: servicequotas.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:33 GMT
  content-length: 0
  x-amzn-requestid: cb2e21f9-8127-425d-a2ec-2ed3be7dd883
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>servicediscovery.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://servicediscovery.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: servicediscovery.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:33 GMT
  x-amzn-RequestId: 0025331e-e27a-4009-8f06-edee39ec0aaf
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>email.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6a93e4ae-9ce2-42f0-8d00-ed0ab9daf764
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:34 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>email.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/v2/email/configuration-sets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1d2713aa-5015-4d44-93f7-066c5d4fe657
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:34 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>states.us-east-1.amazonaws.com</strong></td>
      <td>404 Not</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://states.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: states.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 8acbb20a-55c9-4fbc-a311-036067109e01
  Content-Type: null
  Content-Length: 29
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     96      0 --:--:-- --:--:-- --:--:--    96
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>shield.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://shield.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: shield.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: c5a68fdc-2793-4809-b2e1-477308a6dc3f
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:35 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    460      0 --:--:-- --:--:-- --:--:--   460
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>signer.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://signer.us-east-1.amazonaws.com/signing-profiles/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: signer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:35 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 5685fd0d-6fd6-447f-9c25-0a8314c41a16
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: VCfG-Ex2IAMFdAQ=
  access-control-allow-methods: DELETE,GET,PUT
  x-amzn-trace-id: Root=1-5f97455f-474539ee33ec49532d3a713f
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>sms.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://sms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: cb80ecd9-9058-4173-b0fa-6eac7b071eef
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:35 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    416      0 --:--:-- --:--:-- --:--:--   415
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>snowball.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://snowball.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: snowball.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6999bba9-4c1c-4075-b1bf-c4102be31065
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:36 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>sns.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://sns.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sns.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4ecc1035-9058-5e23-a194-4824d7f8e1c8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:36 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>sqs.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://sqs.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sqs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1cb68ee9-9a3e-5bc0-bb28-d6f8dd9f51ea
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Mon, 26 Oct 2020 21:53:37 GMT
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Type: null
  Content-Length: 0
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ssm.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://ssm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ssm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Server: Server
  Date: Mon, 26 Oct 2020 21:53:37 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: ce38a800-867c-413f-80ae-6db95f91ddd2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>portal.sso.us-east-1.amazonaws.com</strong></td>
      <td>400 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://portal.sso.us-east-1.amazonaws.com/federation/credentials -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type,x-amz-sso_bearer_token,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: portal.sso.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 400
  date: Mon, 26 Oct 2020 21:53:37 GMT
  content-type: application/json
  content-length: 121
  server: AWS SSO
  
  {"message":"Origin not allowed: https://foo.example","__type":"com.amazonaws.switchboard.portal#InvalidRequestException"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   121  100   121    0     0    395      0 --:--:-- --:--:-- --:--:--   394
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>sso.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://sso.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sso.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:38 GMT
  content-length: 0
  x-amzn-requestid: 18a1b5c0-9bff-499c-95cd-5782f8f7ffbe
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>oidc.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://oidc.us-east-1.amazonaws.com/token -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: oidc.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:38 GMT
  content-length: 25
  x-amzn-requestid: 6a4c98e4-cb83-4b30-9b67-4b9513023423
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     70      0 --:--:-- --:--:-- --:--:--    70
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>storagegateway.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://storagegateway.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: storagegateway.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Date: Mon, 26 Oct 2020 21:53:39 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 434b20a0-1e07-40e4-bda4-e73dddd0ab4a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>sts.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://sts.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sts.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 13f6921c-bdb4-40f4-ae98-a334fc506700
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:39 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>support.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://support.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: support.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403
  x-amzn-RequestId: 860154ea-880f-4bd2-b78a-422498378609
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:39 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    412      0 --:--:-- --:--:-- --:--:--   412
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>swf.us-east-1.amazonaws.com</strong></td>
      <td>404 Not</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://swf.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: swf.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: ae3606f3-eb25-484b-99bb-97cca9ae872e
  Date: Mon, 26 Oct 2020 21:53:40 GMT
  Content-Length: 29
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     94      0 --:--:-- --:--:-- --:--:--    94
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>synthetics.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://synthetics.us-east-1.amazonaws.com/canary -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: synthetics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:40 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 7b9ae2ad-774e-46b9-a78f-fc6e197c1b97
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfHtEmmoAMFvuQ=
  x-amzn-trace-id: Root=1-5f974564-2cff01ec3008ee8d333e3d14
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    249      0 --:--:-- --:--:-- --:--:--   249
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>textract.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://textract.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: textract.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: c5f5b391-256b-46c0-9721-a10603757930
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:40 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>transcribe.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://transcribe.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: transcribe.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Mon, 26 Oct 2020 21:53:40 GMT
  x-amzn-RequestId: 85c983f0-de39-45dd-9b02-dbaa0c2ef628
  Content-Length: 0
  Connection: keep-alive
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>transfer.us-east-1.amazonaws.com</strong></td>
      <td>404 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://transfer.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: transfer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 404
  date: Mon, 26 Oct 2020 21:53:41 GMT
  content-length: 29
  x-amzn-requestid: c7c2a2a7-10d3-4a88-89f7-e3975fa83224
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0    105      0 --:--:-- --:--:-- --:--:--   105
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>translate.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://translate.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: translate.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ba2e9f40-11f1-4872-9710-041b617c8dc9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:41 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>waf.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://waf.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: waf.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ef3608d6-6171-4b49-802c-d8d6e4db61da
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:41 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>waf-regional.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://waf-regional.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: waf-regional.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: abd9f8a7-989b-479c-bbaf-83cf4b6d3ef2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:42 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>wafv2.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://wafv2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: wafv2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: b6007e23-912b-4ec7-b0a0-9d3114261263
  Content-Length: 127
  Date: Mon, 26 Oct 2020 21:53:43 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    388      0 --:--:-- --:--:-- --:--:--   388
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>workdocs.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://workdocs.us-east-1.amazonaws.com/api/v1/documents/stringvalue/versions/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workdocs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 0889ef1c-1f87-4a8e-89a8-be628c638773
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: private, no-cache, no-store, max-age=0
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Server-ResponseTime-Millis: 0
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:43 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>worklink.us-east-1.amazonaws.com</strong></td>
      <td>403 </td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://worklink.us-east-1.amazonaws.com/associateDomain -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: worklink.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Mon, 26 Oct 2020 21:53:43 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: f3fa911d-200d-491e-861a-36c2b57cea07
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: VCfIOHKSoAMFSeg=
  x-amzn-trace-id: Root=1-5f974567-7f6374dc67abe9a61cadd23d
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    234      0 --:--:-- --:--:-- --:--:--   234
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>workmail.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://workmail.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workmail.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: c4d0637e-76c2-4249-a8ba-4619983c6b70
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:43 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>workmailmessageflow.us-east-1.amazonaws.com</strong></td>
      <td>403 Forbidden</td>
      <td>❌</td>
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://workmailmessageflow.us-east-1.amazonaws.com/messages/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workmailmessageflow.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Mon, 26 Oct 2020 21:53:44 GMT
  x-amzn-RequestId: 30c5efd0-6c63-4e07-be18-4a5ba16264bb
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    413      0 --:--:-- --:--:-- --:--:--   413
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>workspaces.us-east-1.amazonaws.com</strong></td>
      <td>200 OK</td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://workspaces.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workspaces.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: e3d64856-a1a6-43fe-b180-a7ef7559c8cf
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Mon, 26 Oct 2020 21:53:44 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>xray.us-east-1.amazonaws.com</strong></td>
      <td>200 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://xray.us-east-1.amazonaws.com/Traces -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: xray.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Mon, 26 Oct 2020 21:53:45 GMT
  content-length: 0
  x-amzn-requestid: cad30fe0-2cfa-4415-9269-13ebad6333d5
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
  </tbody>
</table>
