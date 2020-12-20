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
curl --insecure -i -X OPTIONS https://access-analyzer.us-east-1.amazonaws.com/analyzer -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: access-analyzer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:28 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 268dfe37-ec0d-40af-8734-2a10044087bd
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3kycGGwIAMFRDg=
  access-control-allow-methods: GET,PUT
  x-amzn-trace-id: Root=1-5fdfb4dc-779e068279820e2d6746cc69
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
curl --insecure -i -X OPTIONS https://acm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: acm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: bc56302a-e32a-4417-9cad-04e7c2806eda
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:27 GMT
  
  
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
curl --insecure -i -X OPTIONS https://acm-pca.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: acm-pca.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:29 GMT
  content-length: 127
  x-amzn-requestid: b027f4e5-9ad2-42a6-ae6b-7e5bf9fae4ec
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    395      0 --:--:-- --:--:-- --:--:--   394
  
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
curl --insecure -i -X OPTIONS https://a4b.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: a4b.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  allow: OPTIONS, POST
  content-length: 0
  date: Sun, 20 Dec 2020 20:32:29 GMT
  
  
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
curl --insecure -i -X OPTIONS https://amplify.us-east-1.amazonaws.com/apps -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: amplify.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Sun, 20 Dec 2020 20:32:29 GMT
  x-amzn-requestid: 1696e9a5-06a4-4b5f-a9bd-af6bdda180cf
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3kypHSAIAMF4qw=
  x-cache: Error from cloudfront
  via: 1.1 38e44b0b4251fbfb70eb0f304e9558fb.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: OfS620a3vOLL5oEe8sWJxME437UQTDHLQ1xNn2FX6w1K05t2kHy-Jw==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    623      0 --:--:-- --:--:-- --:--:--   623
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>amplifybackend.us-east-1.amazonaws.com</strong></td>
      <td>204 </td>
      <td>✅ </td>
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://amplifybackend.us-east-1.amazonaws.com/backend/stringvalue/environments/stringvalue/clone -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: amplifybackend.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 204
  date: Sun, 20 Dec 2020 20:32:30 GMT
  x-amzn-requestid: 759a8795-929d-43a8-97d0-bcbe636630fc
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amzn-remapped-content-length: 0
  x-amzn-remapped-connection: close
  set-cookie: connect.sid=s%3AHygTYY8D6aS6qA45cLTVQ5_Jh2mW45z6.YAKPR7uva2AxpUytBO6Sdh%2FqNlKXOzANu4DKW%2BjpSYQ; Path=/; Expires=Wed, 11 Jul 2029 20:32:30 GMT; HttpOnly
  x-amz-apigw-id: X3kysFvlIAMFkig=
  vary: Access-Control-Request-Headers
  access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
  x-powered-by: Express
  x-amzn-trace-id: Root=1-5fdfb4dd-0f8d14cb1d30759166fc9804;Sampled=1
  x-amzn-remapped-date: Sun, 20 Dec 2020 20:32:30 GMT
  
  
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
curl --insecure -i -X OPTIONS https://apigateway.us-east-1.amazonaws.com/apikeys -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: apigateway.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:30 GMT
  content-length: 0
  x-amzn-requestid: 54baeca6-b5be-46fb-8255-b8fee425a706
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amz-apigw-id: X3kyxLboIAMEd5A=
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
      <td><strong>execute-api.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://execute-api.us-east-1.amazonaws.com/@connections/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: execute-api.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://apigateway.us-east-1.amazonaws.com/v2/apis -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: apigateway.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:30 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: ac6cb719-68cd-47b6-a39c-4d1627f3e035
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3ky1EqEoAMFXaw=
  x-amzn-trace-id: Root=1-5fdfb4de-3b8eca075f2bf6730720b88a
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    262      0 --:--:-- --:--:-- --:--:--   262
  
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
curl --insecure -i -X OPTIONS https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/stringvalue/virtualGateway/stringvalue/gatewayRoutes -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appmesh.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-requestid: c8c1e0be-b10d-4886-8972-4642dbbfa030
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: PUT
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  content-length: 0
  date: Sun, 20 Dec 2020 20:32:30 GMT
  x-envoy-upstream-service-time: 0
  server: envoy
  
  
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
curl --insecure -i -X OPTIONS https://appconfig.us-east-1.amazonaws.com/applications -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appconfig.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:31 GMT
  content-length: 127
  x-amzn-requestid: 3938246f-a5a5-4867-87bf-626f16f21e58
  
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
curl --insecure -i -X OPTIONS https://appflow.us-east-1.amazonaws.com/create-connector-profile -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appflow.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:31 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: a3d3476c-8b74-43c8-8d21-353aafa3cc1e
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3ky_Hm3IAMFvLw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4df-2d71d03c5c4ee3d329077734
  
  
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
      <td><strong>app-integrations.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://app-integrations.us-east-1.amazonaws.com/eventIntegrations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: app-integrations.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:32 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 8de81f72-c25e-44b0-81ed-047fd7ba2641
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3kzDHZ9IAMFZTg=
  access-control-allow-methods: POST,GET
  
  
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
curl --insecure -i -X OPTIONS https://application-autoscaling.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: application-autoscaling.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: dc650037-65bc-4b9f-96de-c26625bac56c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:32 GMT
  
  
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
curl --insecure -i -X OPTIONS https://discovery.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: discovery.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Sun, 20 Dec 2020 20:32:32 GMT
  x-amzn-RequestId: 649d5158-e2ce-4a11-9c7a-9152ee66b300
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    466      0 --:--:-- --:--:-- --:--:--   466
  
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
curl --insecure -i -X OPTIONS https://applicationinsights.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: applicationinsights.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:33 GMT
  content-length: 0
  x-amzn-requestid: de456f4c-d2c1-451c-aba9-cb766f81c6f5
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://appstream2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appstream2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6a517d26-b3ad-4470-8a6c-b3074fb64776
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:32 GMT
  
  
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
curl --insecure -i -X OPTIONS https://appsync.us-east-1.amazonaws.com/apis/stringvalue/ApiCaches -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appsync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 23
  date: Sun, 20 Dec 2020 20:32:33 GMT
  x-amzn-requestid: 3991e5c5-6dd4-4da5-bfbb-f308e8386f8f
  x-amzn-errortype: ForbiddenException
  x-amz-apigw-id: X3kzREGiIAMFjbg=
  x-cache: Error from cloudfront
  via: 1.1 ddd913fbbe7367d44af4ac06097e7a2b.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: 5CEw-0DGFs0ROaRRHtzPXwHra7oogoTTIpzJfKRDodUkVlut3RXEXw==
  
  {"message":"Forbidden"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    23  100    23    0     0    184      0 --:--:-- --:--:-- --:--:--   184
  
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
curl --insecure -i -X OPTIONS https://athena.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: athena.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:32:33 GMT
  x-amzn-RequestId: a2c1db2d-1783-4b65-8a65-4cea1493a06a
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
      <td><strong>auditmanager.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://auditmanager.us-east-1.amazonaws.com/assessments/stringvalue/associateToAssessmentReport -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: auditmanager.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:34 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 2b2e83af-01f3-45d7-a8c9-7bee2025e483
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3kzYF4UoAMFsUA=
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
curl --insecure -i -X OPTIONS https://autoscaling.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: autoscaling.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: d516661c-0249-4f78-af4a-8c497855a2e8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:34 GMT
  
  
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
curl --insecure -i -X OPTIONS https://autoscaling-plans.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: autoscaling-plans.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: b4efd5cf-be44-4c91-a14a-bb1306ef3f1f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:34 GMT
  
  
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
curl --insecure -i -X OPTIONS https://backup.us-east-1.amazonaws.com/backup/plans -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: backup.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Sun, 20 Dec 2020 20:32:35 GMT
  x-amzn-RequestId: 39786183-183a-4ce5-a206-dd5e77ff1e94
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    466      0 --:--:-- --:--:-- --:--:--   466
  
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
curl --insecure -i -X OPTIONS https://batch.us-east-1.amazonaws.com/v1/canceljob -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: batch.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:35 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 5395fe54-a487-40d6-b381-d90c53c4af9a
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3kzmFqjIAMFXlg=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    244      0 --:--:-- --:--:-- --:--:--   244
  
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
curl --insecure -i -X OPTIONS https://braket.us-east-1.amazonaws.com/quantum-task/stringvalue/cancel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: braket.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:36 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 399d7982-1b32-49eb-9c40-ba1fdc9adf7d
  access-control-allow-origin: *
  access-control-allow-headers: *,Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request,content-type,x-amz-content-sha256,x-amz-user-agent,x-amzn-platform-id,x-amzn-trace-id
  x-amz-apigw-id: X3kzpHviIAMFt1A=
  access-control-allow-methods: PUT
  x-amzn-trace-id: Root=1-5fdfb4e4-67b8069e76b642ce18bbde92
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
curl --insecure -i -X OPTIONS https://budgets.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: budgets.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:36 GMT
  content-length: 0
  x-amzn-requestid: 452240e7-4f9f-4b8c-a9db-8a95b74b2d53
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://service.chime.aws.amazon.com/accounts/stringvalue/users/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: service.chime.aws.amazon.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 453ca6e1-f6bb-4708-9094-ef2dec9bef78
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:32:36 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    297      0 --:--:-- --:--:-- --:--:--   296
  
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
curl --insecure -i -X OPTIONS https://cloud9.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloud9.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:37 GMT
  content-length: 0
  x-amzn-requestid: dd5330a9-6976-416b-8747-a15153d524f5
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://clouddirectory.us-east-1.amazonaws.com/amazonclouddirectory/2017-01-11/object/facets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: clouddirectory.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f344632a-c03c-417b-99e1-8c4106c46aa7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Sun, 20 Dec 2020 20:32:37 GMT
  x-amzn-RequestId: f344632a-c03c-417b-99e1-8c4106c46aa7
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
curl --insecure -i -X OPTIONS https://cloudformation.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudformation.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 19f08bbd-b3ec-462b-9e25-885448da4b40
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:37 GMT
  
  
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
curl --insecure -i -X OPTIONS https://cloudfront.amazonaws.com/2020-05-31/cache-policy -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudfront.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 84ff5cb9-318f-47e0-9b56-143ca8cbf230
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:37 GMT
  
  
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
curl --insecure -i -X OPTIONS https://cloudhsm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudhsm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: b2ac8a0e-349e-4b7c-9171-05d0b00011f1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:38 GMT
  
  
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
curl --insecure -i -X OPTIONS https://cloudhsmv2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudhsmv2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Sun, 20 Dec 2020 20:32:38 GMT
  x-amzn-RequestId: e9ca6e76-8b86-4382-98ab-ef15af6154cd
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    411      0 --:--:-- --:--:-- --:--:--   411
  
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
curl --insecure -i -X OPTIONS https://cloudsearch.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudsearch.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 1114484d-548b-494a-9211-e611b6409ad6
  Content-Length: 29
  Date: Sun, 20 Dec 2020 20:32:39 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     99      0 --:--:-- --:--:-- --:--:--   100
  
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
Command failed: curl --insecure -i -X OPTIONS https://cloudsearchdomain.us-east-1.amazonaws.com/2013-01-01/search -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudsearchdomain.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://cloudtrail.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudtrail.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7ea9b77a-4f8e-4790-9c46-07522cc2403b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:39 GMT
  
  
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
curl --insecure -i -X OPTIONS https://monitoring.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: monitoring.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 88387ef7-61d7-49a0-99e0-5d5a8bc1972c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:39 GMT
  
  
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
curl --insecure -i -X OPTIONS https://events.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: events.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7e5234ec-63d7-496b-8e21-bd6b20be7daa
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:39 GMT
  
  
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
curl --insecure -i -X OPTIONS https://logs.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: logs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: f84641c1-e45d-422b-a339-2c6fa9c3a6fc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:40 GMT
  
  
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
curl --insecure -i -X OPTIONS https://codeartifact.us-east-1.amazonaws.com/v1/repository/external-connection -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeartifact.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:41 GMT
  content-length: 0
  x-amzn-requestid: 3333b3eb-bc7f-4f28-9758-ba395663719d
  access-control-allow-origin: *
  access-control-allow-headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://codebuild.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codebuild.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1c27cf0d-8b4d-4c06-995b-f3a188fb9a4f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:40 GMT
  
  
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
curl --insecure -i -X OPTIONS https://codecommit.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codecommit.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 5b30ceed-6de6-4afc-8382-82ee5dda0590
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:41 GMT
  
  
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
curl --insecure -i -X OPTIONS https://codedeploy.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codedeploy.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: bc08e50c-8522-40fa-a005-65c4ca68558b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:32:42 GMT
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
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codeguru-reviewer.us-east-1.amazonaws.com/associations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeguru-reviewer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:42 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 3998ee28-0756-4f3a-999a-a392ea22c286
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k0qGhKIAMF6Nw=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5fdfb4ea-26221e1f02cbf8892789ef78
  
  
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
curl --insecure -i -X OPTIONS https://codeguru-profiler.us-east-1.amazonaws.com/profilingGroups/stringvalue/configureAgent -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeguru-profiler.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Sun, 20 Dec 2020 20:32:42 GMT
  x-amzn-requestid: 266b2ff5-1ad7-4de5-a7e2-34ddb53548af
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,Date,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k0tHebIAMFsuA=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4ea-519dd2103d6e71f71653ab01
  access-control-max-age: 600
  x-cache: Miss from cloudfront
  via: 1.1 c7c3cdef911c9ee3c1a83a78f425dc5b.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: GeEIvruSbuzF4ucu_YfhK5SYV0A-CAyeqXq8d8D0lAXkJtsCjuKT3w==
  
  
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
curl --insecure -i -X OPTIONS https://codepipeline.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codepipeline.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7f0ddb68-8e65-4c43-956e-0fdfc044168d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:32:43 GMT
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
curl --insecure -i -X OPTIONS https://codestar.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codestar.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: eadde67f-d4f8-4798-8c74-8dc49d747367
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:42 GMT
  
  
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
curl --insecure -i -X OPTIONS https://codestar-connections.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codestar-connections.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:43 GMT
  content-length: 0
  x-amzn-requestid: b46addff-5d27-49ab-97b9-22af93a234ea
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://codestar-notifications.us-east-1.amazonaws.com/createNotificationRule -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codestar-notifications.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:44 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 5b81a002-edcf-401e-8c86-dea163779dee
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k07HKpoAMF3hg=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4ec-2d7005ef4fb684517fc8dd3a
  
  
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
curl --insecure -i -X OPTIONS https://cognito-identity.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cognito-identity.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:44 GMT
  content-length: 0
  x-amzn-requestid: 2b3aedd9-123d-420a-bcf2-e88988022586
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://cognito-idp.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cognito-idp.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:44 GMT
  content-length: 0
  x-amzn-requestid: d99f1914-757e-4dce-bd75-8e2a9a6f92ef
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://cognito-sync.us-east-1.amazonaws.com/identitypools/stringvalue/bulkpublish -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cognito-sync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:45 GMT
  content-length: 0
  x-amzn-requestid: d2d2242d-bb49-46cb-86bb-94edec7b91ae
  access-control-allow-origin: *
  access-control-allow-headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://comprehend.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: comprehend.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: fabdce08-b55b-4fca-a87f-73e9d5e71846
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:44 GMT
  
  
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
curl --insecure -i -X OPTIONS https://comprehendmedical.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: comprehendmedical.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 29541fc5-2c9b-49e6-b2fd-edaa9ba87963
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:45 GMT
  
  
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
curl --insecure -i -X OPTIONS https://compute-optimizer.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: compute-optimizer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 404
  date: Sun, 20 Dec 2020 20:32:46 GMT
  content-length: 272
  x-amzn-requestid: 7bb58c79-67fc-4e96-a6e8-ecac203f6e5c
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   272  100   272    0     0    888      0 --:--:-- --:--:-- --:--:--   888
  
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
curl --insecure -i -X OPTIONS https://config.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: config.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4dbd3577-d2c4-4d17-8a01-ab60a6406e80
  Access-Control-Allow-Origin: *
  Strict-Transport-Security: max-age=86400
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:46 GMT
  
  
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
      <td>✅ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://connect.us-east-1.amazonaws.com/instance/stringvalue/approved-origin -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:47 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 46e29f3f-cc9c-49e6-8553-269ffae44125
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k1XE5rIAMFeFA=
  access-control-allow-methods: PUT,DELETE
  x-amzn-trace-id: Root=1-5fdfb4ef-055cb4ee7a83c04f35574bb7
  
  
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
      <td><strong>contact-lens.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://contact-lens.us-east-1.amazonaws.com/realtime-contact-analysis/analysis-segments -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: contact-lens.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:47 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 764b566c-a6de-4399-9633-97aed2a98657
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3k1aF--oAMF2ig=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4ef-525c3174652dabbe3df1d6a2
  
  
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
curl --insecure -i -X OPTIONS https://participant.connect.us-east-1.amazonaws.com/participant/connection -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Bearer,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: participant.connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:47 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f42743ee-8d7b-4a67-988b-e770d36bcca2
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,X-Amz-Bearer
  x-amz-apigw-id: X3k1eEBfIAMFXEA=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4ef-7ff9aac41af84fd630842144
  
  
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
curl --insecure -i -X OPTIONS https://cur.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cur.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: adc0e79d-2d32-4778-9815-68d4c0a20e08
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:48 GMT
  
  
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
curl --insecure -i -X OPTIONS https://ce.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ce.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:48 GMT
  content-length: 0
  x-amzn-requestid: 3337ab2a-eba4-4d4d-9c14-4e0a8082c25f
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
      <td><strong>profile.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://profile.us-east-1.amazonaws.com/domains/stringvalue/profiles/keys -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: profile.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:48 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: bbde0193-2fa9-424c-9b39-b06394c7af1b
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3k1oG13IAMFXuw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4f0-11a2c5cb2bef9f67303e05d5
  
  
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
curl --insecure -i -X OPTIONS https://datapipeline.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: datapipeline.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6cfa3df0-169b-45cb-bcb0-a8e6edb656dc
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:48 GMT
  
  
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
curl --insecure -i -X OPTIONS https://dms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: bca6a4a9-fc24-4035-bd51-070399c19b78
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:48 GMT
  
  
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
      <td><strong>databrew.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://databrew.us-east-1.amazonaws.com/recipes/stringvalue/batchDeleteRecipeVersion -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: databrew.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Sun, 20 Dec 2020 20:32:49 GMT
  x-amzn-requestid: eb8a92a8-0366-49e8-9569-8bdcdbca62aa
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3k1xFlcIAMFQXw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4f1-09c21db37f9a96325c80b868
  x-cache: Miss from cloudfront
  via: 1.1 2afae0d44e2540f472c0635ab62c232b.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: ZptDfZBWQ5M-0fL02t9A_heO3u9K41loXcu7T7XFOVDclBL8jRtnww==
  
  
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
curl --insecure -i -X OPTIONS https://dataexchange.us-east-1.amazonaws.com/v1/jobs/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dataexchange.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Sun, 20 Dec 2020 20:32:50 GMT
  x-amzn-requestid: 002e38b3-09da-4234-83ac-ed42d314ab1f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k11HyxoAMF6Ow=
  x-amzn-trace-id: Root=1-5fdfb4f2-02d6ea1808a94a342338eeaf
  x-cache: Error from cloudfront
  via: 1.1 1bfde73e7d02732154f58c7e03609d09.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: z1jPFP3CziSXybvxQk-I1NqcFVMhsaErPiloYBgifZL0L_bEpwuwNw==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    257      0 --:--:-- --:--:-- --:--:--   256100    73  100    73    0     0    257      0 --:--:-- --:--:-- --:--:--   256
  
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
curl --insecure -i -X OPTIONS https://datasync.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: datasync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:50 GMT
  content-length: 127
  x-amzn-requestid: 27902318-ce5e-404a-b286-fdfe9851367f
  
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
curl --insecure -i -X OPTIONS https://dax.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dax.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 9a7e7545-4237-433f-b85c-3e67611d0479
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:49 GMT
  
  
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
curl --insecure -i -X OPTIONS https://api.detective.us-east-1.amazonaws.com/invitation -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.detective.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Content-Type: application/json
  Content-Length: 73
  Connection: keep-alive
  Date: Sun, 20 Dec 2020 20:32:51 GMT
  x-amzn-RequestId: 43afcbd2-cdad-44b4-83cd-cd5a8c2dde41
  x-amzn-ErrorType: AccessDeniedException
  x-amz-apigw-id: X3k2AEfEIAMFzhw=
  X-Amzn-Trace-Id: Root=1-5fdfb4f3-00c720df77f3f336010d226f
  X-Cache: Error from cloudfront
  Via: 1.1 86b676273517904f44af31586adb06af.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: 4NC2HO-D22VaH3cQ0BJ7mzQ3IFRoB3AGBwvs5RBsRnPNiRtgX2q_1A==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    177      0 --:--:-- --:--:-- --:--:--   176100    73  100    73    0     0    177      0 --:--:-- --:--:-- --:--:--   176
  
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
Command failed: curl --insecure -i -X OPTIONS https://devicefarm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devicefarm.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: devicefarm.us-east-1.amazonaws.com
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>devops-guru.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://devops-guru.us-east-1.amazonaws.com/channels -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devops-guru.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:51 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 48d11493-ba9a-442b-8799-2c59296e9683
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k2EH7FIAMFrBQ=
  x-amzn-trace-id: Root=1-5fdfb4f3-1c933c2d0083be114307fa49
  
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
curl --insecure -i -X OPTIONS https://directconnect.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: directconnect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: e95acf7c-938d-4727-a533-2057117381bf
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:51 GMT
  
  
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
curl --insecure -i -X OPTIONS https://ds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 5836202f-abf1-4abe-b45b-fe12198c42a8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:52 GMT
  
  
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
curl --insecure -i -X OPTIONS https://dlm.us-east-1.amazonaws.com/policies -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dlm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:52 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 29a98471-074d-47a5-97de-016e3a929436
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k2PEy2IAMFxrw=
  x-amzn-trace-id: Root=1-5fdfb4f4-52b449022e1297dc5338e855
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    233      0 --:--:-- --:--:-- --:--:--   233
  
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
curl --insecure -i -X OPTIONS https://rds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 791c25f1-6846-4a8d-b1d2-0d2239f4e520
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:52 GMT
  
  
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
curl --insecure -i -X OPTIONS https://dynamodb.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dynamodb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Server: Server
  Date: Sun, 20 Dec 2020 20:32:53 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: Q77DB9H1L7FRFF4NNM114J2JJ7VV4KQNSO5AEMVJF66Q9ASUAAJG
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://streams.dynamodb.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: streams.dynamodb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Server: Server
  Date: Sun, 20 Dec 2020 20:32:53 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: G42V94R5H2PQNI6864F2MIB3UFVV4KQNSO5AEMVJF66Q9ASUAAJG
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://ebs.us-east-1.amazonaws.com/snapshots/completion/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: x-amz-ChangedBlocksCount,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ebs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 7dc70079-7542-4e32-a4e3-9f6274942243
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:32:53 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    440      0 --:--:-- --:--:-- --:--:--   439
  
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
curl --insecure -i -X OPTIONS https://ec2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ec2.us-east-1.amazonaws.com" 
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
  Date: Sun, 20 Dec 2020 20:32:54 GMT
  Server: AmazonEC2
  
  
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
curl --insecure -i -X OPTIONS https://ec2-instance-connect.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ec2-instance-connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 07df4317-74ff-465a-bdbc-0762008f52b7
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:32:54 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    383      0 --:--:-- --:--:-- --:--:--   383
  
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
curl --insecure -i -X OPTIONS https://api.ecr.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.ecr.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: aee513f9-a937-48e9-aec1-11e795f81863
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:32:55 GMT
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
      <td><strong>api.ecr-public.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://api.ecr-public.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.ecr-public.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 13c533b7-32cd-470e-88f8-a27f4c1b1dbb
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:32:55 GMT
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
curl --insecure -i -X OPTIONS https://ecs.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ecs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: d6eccd9d-5d2b-470f-b93f-695ea8d8d74f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:56 GMT
  
  
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
curl --insecure -i -X OPTIONS https://elasticfilesystem.us-east-1.amazonaws.com/2015-02-01/access-points -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticfilesystem.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6aba8242-c4b2-4a15-bbcc-1a918ef87ae6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:56 GMT
  
  
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
curl --insecure -i -X OPTIONS https://eks.us-east-1.amazonaws.com/clusters/stringvalue/addons -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: eks.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:56 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: ecd6bd61-d539-401c-9494-94022c5c7a61
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k25FWXIAMFlAQ=
  x-amzn-trace-id: Root=1-5fdfb4f8-42f7c950550e98a97209b50d
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    269      0 --:--:-- --:--:-- --:--:--   269
  
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
curl --insecure -i -X OPTIONS https://elasticbeanstalk.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticbeanstalk.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:32:56 GMT
  x-amzn-RequestId: 209dff03-beef-411c-8a88-cf0d5f6b3bf1
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
curl --insecure -i -X OPTIONS https://api.elastic-inference.us-east-1.amazonaws.com/describe-accelerator-offerings -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.elastic-inference.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:32:57 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: e6e96aab-6b9e-4fab-a11d-80bd95ddbe7f
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k2_FLgIAMFS5g=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb4f9-68add2f301a81857681d99f7
  
  
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
curl --insecure -i -X OPTIONS https://elasticloadbalancing.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticloadbalancing.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ef11c063-fcaf-4fd3-ad43-d79a305c2e18
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:57 GMT
  
  
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
curl --insecure -i -X OPTIONS https://elasticloadbalancing.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticloadbalancing.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 17bf5d54-9426-4700-97b3-2c73f0480929
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:57 GMT
  
  
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
curl --insecure -i -X OPTIONS https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobs/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elastictranscoder.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: c4483d06-148f-4a4e-9570-bc3d80ce6453
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:58 GMT
  
  
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
curl --insecure -i -X OPTIONS https://elasticache.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticache.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2b52f8e8-4cbf-4b33-95e5-d611b21846c2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:57 GMT
  
  
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
curl --insecure -i -X OPTIONS https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/stringvalue/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: es.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1c35ac18-65ba-4fec-9535-ac447c0f099c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: PUT
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:58 GMT
  
  
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
curl --insecure -i -X OPTIONS https://elasticmapreduce.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elasticmapreduce.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: bbf270cb-db12-4fee-85c4-19a875558260
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:59 GMT
  
  
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
      <td><strong>emr-containers.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://emr-containers.us-east-1.amazonaws.com/virtualclusters/stringvalue/jobruns/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: emr-containers.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:32:59 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: dd690e1c-9378-4f6c-b59e-c9ca60150dc7
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k3XFrKIAMF5ow=
  x-amzn-trace-id: Root=1-5fdfb4fb-62fd574d61a301df6844852a
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    231      0 --:--:-- --:--:-- --:--:--   231
  
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
curl --insecure -i -X OPTIONS https://events.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: events.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 37550f8f-34f5-4fc7-8214-dc771944bd02
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:59 GMT
  
  
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
curl --insecure -i -X OPTIONS https://firehose.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: firehose.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ec7dc23e-e434-ba42-b424-75026011783b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:32:59 GMT
  
  
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
curl --insecure -i -X OPTIONS https://fms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: fms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403
  x-amzn-RequestId: 35b99199-f93b-451e-b158-f3cd5dc09dc4
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:00 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    458      0 --:--:-- --:--:-- --:--:--   458
  
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
curl --insecure -i -X OPTIONS https://forecast.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: forecast.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:01 GMT
  x-amzn-RequestId: 154af4ec-5447-4bea-a031-c32a5177d438
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
curl --insecure -i -X OPTIONS https://forecastquery.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: forecastquery.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:01 GMT
  x-amzn-RequestId: 480d8528-956c-4bd7-889e-cd8786949ce7
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
curl --insecure -i -X OPTIONS https://frauddetector.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: frauddetector.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:01 GMT
  content-length: 0
  x-amzn-requestid: 88380e87-f34a-4a0d-ae0a-313adae94ceb
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://fsx.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: fsx.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:02 GMT
  content-length: 0
  x-amzn-requestid: 49613481-3ef9-40da-8358-23cf4f8f94bc
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://gamelift.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: gamelift.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: a7273266-4190-406e-a437-9fcb0f8d6982
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:02 GMT
  
  
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
curl --insecure -i -X OPTIONS https://glacier.us-east-1.amazonaws.com/stringvalue/vaults/stringvalue/multipart-uploads/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,x-amz-glacier-version,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: glacier.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 400 Bad Request
  x-amzn-RequestId: Af9DQn7LwdHKLhV3YJDjJb58WZBgPARosj5fem-OGO8RCmg
  Content-Length: 109
  Date: Sun, 20 Dec 2020 20:33:02 GMT
  Connection: close
  
  {"code":"MissingParameterValueException","message":"Required parameter missing: API version","type":"Client"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   109    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   109  100   109    0     0    363      0 --:--:-- --:--:-- --:--:--   362
  
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
Command failed: curl --insecure -i -X OPTIONS https://globalaccelerator.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: globalaccelerator.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://glue.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: glue.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:03 GMT
  content-length: 0
  x-amzn-requestid: 48607182-a6de-45ce-bedd-fc2b564d17ca
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://greengrass.us-east-1.amazonaws.com/greengrass/groups/stringvalue/role -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: greengrass.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:03 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 6cbd57bf-9386-4715-9a26-66a84efb6c06
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k3_GZZIAMF68g=
  x-amzn-trace-id: Root=1-5fdfb4ff-68202d4c78a6b15d2b06d2e3
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    241      0 --:--:-- --:--:-- --:--:--   241
  
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
Command failed: curl --insecure -i -X OPTIONS https://groundstation.us-east-1.amazonaws.com/contact/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: groundstation.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://guardduty.us-east-1.amazonaws.com/detector/stringvalue/master -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: guardduty.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:04 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 5260f0fe-886d-445f-bffd-480ebc90f6e1
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k4DE72oAMFZeA=
  
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
curl --insecure -i -X OPTIONS https://health.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: health.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Access-Control-Allow-Credentials: true
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:04 GMT
  
  
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
      <td><strong>healthlake.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://healthlake.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: healthlake.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 12aa0dc8-8cb1-4610-8a9e-49c8cd42a252
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:04 GMT
  
  
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
      <td><strong>honeycode.us-east-1.amazonaws.com</strong></td>
      <td colspan="3">🚨 ERROR</td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>Error</strong>
<pre>
<code>
Command failed: curl --insecure -i -X OPTIONS https://honeycode.us-east-1.amazonaws.com/workbooks/stringvalue/tables/stringvalue/rows/batchcreate -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: honeycode.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://iam.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iam.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 5fce4dfc-2a93-4074-8d55-df6df2c025ae
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:04 GMT
  
  
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
curl --insecure -i -X OPTIONS https://identitystore.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: identitystore.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:05 GMT
  content-length: 0
  x-amzn-requestid: e342655c-2006-43a3-b5c3-fc0df8919b64
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
      <td><strong>imagebuilder.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://imagebuilder.us-east-1.amazonaws.com/CancelImageCreation -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: imagebuilder.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:06 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 675231ac-87c7-4d5a-bdf5-ce2b6ab70cfc
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k4WGLPoAMF47w=
  access-control-allow-methods: PUT
  
  
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
curl --insecure -i -X OPTIONS https://inspector.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: inspector.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: a7a90553-9f06-4332-a7ae-2d9cba04b7a5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:05 GMT
  
  
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
curl --insecure -i -X OPTIONS https://iot.us-east-1.amazonaws.com/accept-certificate-transfer/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PATCH" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:06 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 703f2f8e-679a-45b4-a27b-dced71c7f5aa
  access-control-allow-origin: *
  access-control-allow-headers: Authorization, X-Amz-Date, X-Amz-Security-Token, x-amzn-iot-principal, X-Amz-Content-Sha256, X-Amz-User-Agent, Content-Type, x-amzn-principal
  x-amz-apigw-id: X3k4eEAKIAMFy_A=
  access-control-allow-methods: OPTIONS, GET, HEAD, POST, PUT, PATCH, DELETE
  
  {}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      7      0 --:--:-- --:--:-- --:--:--     7
  
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
Command failed: curl --insecure -i -X OPTIONS https://devices.iot1click.us-east-1.amazonaws.com/claims/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devices.iot1click.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://projects.iot1click.us-east-1.amazonaws.com/projects/stringvalue/placements/stringvalue/devices/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: projects.iot1click.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:07 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 269a3c92-8994-4b81-bf91-79e55af46aa4
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k4iFfmoAMFoRg=
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
curl --insecure -i -X OPTIONS https://data.iot.us-east-1.amazonaws.com/things/stringvalue/shadow -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.iot.us-east-1.amazonaws.com" 
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
  date: "Sun, 20 Dec 2020 20:33:07 GMT"
  
  
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
curl --insecure -i -X OPTIONS https://iotevents.us-east-1.amazonaws.com/detector-models -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotevents.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:07 GMT
  content-length: 0
  x-amzn-requestid: 8233357c-a43f-4fad-98e3-44c7d1007f44
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://data.iotevents.us-east-1.amazonaws.com/inputs/messages -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.iotevents.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:08 GMT
  content-length: 0
  x-amzn-requestid: 7a170538-7b19-4ddd-a622-32ebf34fe644
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://data.jobs.iot.us-east-1.amazonaws.com/things/stringvalue/jobs/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.jobs.iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: e8671860-b06f-4dd3-a40f-5f6abe170d51
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: GET
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:07 GMT
  
  
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
curl --insecure -i -X OPTIONS https://iotanalytics.us-east-1.amazonaws.com/messages/batch -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:09 GMT
  content-length: 0
  x-amzn-requestid: 9cb0d9ab-d478-4b7e-bb89-6e635f60a1f3
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
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
curl --insecure -i -X OPTIONS https://api.tunneling.iot.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.tunneling.iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:09 GMT
  content-length: 25
  x-amzn-requestid: cc301a85-663d-48cc-85d5-93541a7432a2
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     81      0 --:--:-- --:--:-- --:--:--    81
  
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
curl --insecure -i -X OPTIONS https://model.iotsitewise.us-east-1.amazonaws.com/assets/stringvalue/associate -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: model.iotsitewise.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:09 GMT
  content-length: 0
  x-amzn-requestid: dbd3aac2-b5a5-403e-a53a-1e8e25afdaca
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://iotthingsgraph.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotthingsgraph.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:10 GMT
  content-length: 130
  x-amzn-requestid: 3c975f36-dfc8-4946-8f4a-f4b79f1f9583
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   130  100   130    0     0    422      0 --:--:-- --:--:-- --:--:--   420
  
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
curl --insecure -i -X OPTIONS https://ivs.us-east-1.amazonaws.com/BatchGetChannel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ivs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Sun, 20 Dec 2020 20:33:10 GMT
  x-amzn-requestid: 3686b106-eb17-4d66-b8cf-a4832c113893
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k4_HzLoAMF8Hg=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fdfb506-56b813ca3c0cbc123352c2db
  x-cache: Miss from cloudfront
  via: 1.1 030fe0607711293dda988e571617a9f3.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: NPpFicxKJu3OGvjCZbtlDeAX1QYQtxU9kNY92B7RuVoyGbgQgpaqRw==
  
  
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
curl --insecure -i -X OPTIONS https://kafka.us-east-1.amazonaws.com/v1/clusters/stringvalue/scram-secrets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kafka.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Sun, 20 Dec 2020 20:33:10 GMT
  x-amzn-requestid: 625b364c-d445-419d-a38e-c8f3db768a66
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k5CEwhoAMFYpw=
  x-amzn-trace-id: Root=1-5fdfb506-6601373f201602fb30cc77d6
  x-cache: Error from cloudfront
  via: 1.1 078213358ed22cd95c76373c4ed65b5a.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: htR4cQyMxe1EQNyT4hcYYAtpXz-CHSCNCQhjbw1GWVlWl7HdTkg5AQ==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    255      0 --:--:-- --:--:-- --:--:--   255
  
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
curl --insecure -i -X OPTIONS https://kendra.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kendra.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 210c5bd7-4dac-4aa2-aaba-8af3783dca0b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:10 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kinesis.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesis.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: eda11ca0-7d25-09ca-b5f8-abe7469344c9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:11 GMT
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
curl --insecure -i -X OPTIONS https://kinesisanalytics.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ec46637a-19f5-4db7-8b47-bbcb9446daaa
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:10 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kinesisanalytics.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4ff79c94-cbda-484c-a4d4-f2a332b202f2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:11 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/createSignalingChannel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: b3365980-d6ec-4d94-8271-f9de8c1326fe
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:12 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/getClip -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: d2e29ac9-0909-4169-a1f1-fca338fcf127
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:12 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/getMedia -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: b1c247c8-d0b8-4e19-a031-c626d5661320
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:12 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/v1/get-ice-server-config -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4a61b7db-bc3e-4d12-b71b-e9f7541e0a8b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:13 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 5f36c300-d104-4bd2-b543-4e050978416a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: no-cache, no-store, must-revalidate, private
  Expires: 0
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Pragma: no-cache
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:13 GMT
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
curl --insecure -i -X OPTIONS https://lakeformation.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lakeformation.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:13 GMT
  content-length: 0
  x-amzn-requestid: 3c4bb533-cc31-4d37-bd56-c3e5f429ca14
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/stringvalue/versions/stringvalue/policy -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lambda.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:14 GMT
  content-length: 0
  x-amzn-requestid: 6dbd4828-f2f7-490c-b7a3-8274729f8b24
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
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
curl --insecure -i -X OPTIONS https://models.lex.us-east-1.amazonaws.com/bots/stringvalue/versions -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: models.lex.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:14 GMT
  x-amzn-RequestId: 41ed3d2b-680c-4651-9d58-bff21b68b003
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
curl --insecure -i -X OPTIONS https://runtime.lex.us-east-1.amazonaws.com/bot/stringvalue/alias/stringvalue/user/stringvalue/session -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.lex.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  x-amzn-requestid: 01efc99b-a941-4b7a-a76b-7dbfe8306fa8
  access-control-allow-origin: *
  access-control-allow-headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: DELETE
  access-control-expose-headers: x-amz-lex-session-attributes,x-amz-lex-slots,x-amz-lex-dialog-state,Date,x-amz-lex-message,x-amz-lex-input-transcript,x-amzn-ErrorMessage,x-amz-lex-slot-to-elicit,x-amzn-RequestId,x-amzn-ErrorType,x-amz-lex-intent-name
  access-control-max-age: 172800
  date: Sun, 20 Dec 2020 20:33:14 GMT
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
curl --insecure -i -X OPTIONS https://license-manager.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: license-manager.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: e851b4af-bb4a-43cb-b330-905f440d893d
  Content-Length: 272
  Date: Sun, 20 Dec 2020 20:33:15 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   272  100   272    0     0    842      0 --:--:-- --:--:-- --:--:--   842
  
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
curl --insecure -i -X OPTIONS https://lightsail.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lightsail.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  Server: Server
  Date: Sun, 20 Dec 2020 20:33:15 GMT
  Content-Length: 114
  Connection: keep-alive
  x-amzn-RequestId: bcfe9b5c-e6bf-472c-a851-4591e49c54bc
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   114  100   114    0     0    387      0 --:--:-- --:--:-- --:--:--   387
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>lookoutvision.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://lookoutvision.us-east-1.amazonaws.com/2020-11-20/projects/stringvalue/datasets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lookoutvision.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2f1462ae-66eb-4551-a27b-b5fae80847ed
  X-XSS-Protection: 1; mode=block
  Access-Control-Allow-Origin: *
  Strict-Transport-Security: max-age=31540000; includeSubDomains
  X-Frame-Options: DENY
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  X-Content-Type-Options: nosniff
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:16 GMT
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
curl --insecure -i -X OPTIONS https://machinelearning.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: machinelearning.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: d3d269f5-8771-4407-bf21-6a684a3c0192
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:16 GMT
  
  
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
curl --insecure -i -X OPTIONS https://macie.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: macie.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:16 GMT
  content-length: 127
  x-amzn-requestid: 9d279271-c2bd-46dc-b9b1-73e36a45707c
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    393      0 --:--:-- --:--:-- --:--:--   393
  
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
curl --insecure -i -X OPTIONS https://macie2.us-east-1.amazonaws.com/invitations/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: macie2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:17 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: ff17827a-b55e-406b-bbd6-f78e1064d4bb
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k6EEkvoAMFW8g=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    260      0 --:--:-- --:--:-- --:--:--   259
  
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
curl --insecure -i -X OPTIONS https://managedblockchain.us-east-1.amazonaws.com/networks/stringvalue/members -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: managedblockchain.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:17 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: f0a589c2-5652-4d1c-9c4b-b81fd61498df
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k6HEgjoAMF7Gg=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    255      0 --:--:-- --:--:-- --:--:--   255
  
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
curl --insecure -i -X OPTIONS https://catalog.marketplace.us-east-1.amazonaws.com/CancelChangeSet -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PATCH" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: catalog.marketplace.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: PATCH
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:17 GMT
  x-amzn-RequestId: c0d3be05-8b48-4e68-a3cf-9e1f576ec8cc
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
curl --insecure -i -X OPTIONS https://marketplacecommerceanalytics.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: marketplacecommerceanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 46de8399-dc0c-4276-b6f1-e79949fa57b6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:18 GMT
  
  
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
curl --insecure -i -X OPTIONS https://entitlement.marketplace.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: entitlement.marketplace.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 0b988070-8504-446c-a958-d42b55bb0054
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:18 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    470      0 --:--:-- --:--:-- --:--:--   470
  
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
curl --insecure -i -X OPTIONS https://metering.marketplace.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: metering.marketplace.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 4ba2eb3c-2b3e-4454-b15e-a46e6ccdc161
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:18 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    451      0 --:--:-- --:--:-- --:--:--   451
  
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
curl --insecure -i -X OPTIONS https://mediaconnect.us-east-1.amazonaws.com/v1/flows/stringvalue/outputs -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediaconnect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Sun, 20 Dec 2020 20:33:18 GMT
  x-amzn-requestid: 7b9e7ee7-fee1-4500-abc4-242a875ea588
  x-amzn-errortype: APIGatewayFailedToParseRequestError
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k6WHuRoAMF74A=
  x-amzn-trace-id: Root=1-5fdfb50e-76ca800063ca911d202f6351
  x-cache: Error from cloudfront
  via: 1.1 3396f08538cae17d7cab5e402e844a55.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: ONHvhADbHc-7EKXP_AaWBefaaOTPn58dMykCLXOAy0qlQ0RZmkMj7w==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    557      0 --:--:-- --:--:-- --:--:--   557
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mediaconvert.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://mediaconvert.us-east-1.amazonaws.com/2017-08-29/certificates -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediaconvert.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 8
  date: Sun, 20 Dec 2020 20:33:19 GMT
  x-amzn-requestid: 4f5aaef9-9af1-4f8d-9b91-9b96ce3babd2
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amz-apigw-id: X3k6XEyuoAMF7Dg=
  access-control-allow-methods: OPTIONS,POST
  x-amzn-trace-id: Root=1-5fdfb50f-168dc5eb6accfaad1be1fee7
  x-cache: Miss from cloudfront
  via: 1.1 87cff53a3b3c669d865b820d148e2d63.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: i-b0R2yjJFNghIbFtoPJItTOir1VgpHXtssyRXzbG0gmpQJljXK3sg==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     8  100     8    0     0     66      0 --:--:-- --:--:-- --:--:--    66
  
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
curl --insecure -i -X OPTIONS https://medialive.us-east-1.amazonaws.com/prod/inputDevices/stringvalue/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: medialive.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Sun, 20 Dec 2020 20:33:19 GMT
  x-amzn-requestid: 08fa773a-d568-4ae8-8983-606a28e05219
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k6ZEFhoAMFZRA=
  x-cache: Error from cloudfront
  via: 1.1 91c80546b6d0beebffe469756e2c35aa.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: GqmxZNlB8sJILIoyvIil9YSY5l4gBsYeKur3Y4EAsQYOo_EoCrwAHQ==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    548      0 --:--:-- --:--:-- --:--:--   548
  
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
curl --insecure -i -X OPTIONS https://mediapackage.us-east-1.amazonaws.com/channels/stringvalue/configure_logs -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediapackage.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:19 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 4a437fac-5dbc-47f3-bda0-2eb086444c18
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k6dEVGIAMFkOg=
  
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
curl --insecure -i -X OPTIONS https://mediapackage-vod.us-east-1.amazonaws.com/assets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediapackage-vod.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 3
  date: Sun, 20 Dec 2020 20:33:19 GMT
  x-amzn-requestid: cb1dbc2d-fd26-46f1-9c98-f5849b3bc5de
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k6fGcMIAMFeUA=
  access-control-allow-methods: *
  x-cache: Miss from cloudfront
  via: 1.1 f13aef0c4b52f6f681401f232d03eb69.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: HpJKSr814TkKAkzQOVS5ahdIea_y4zD_vUTjrcElOLw0gLbnUeZeMQ==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0     20      0 --:--:-- --:--:-- --:--:--    20
  
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
curl --insecure -i -X OPTIONS https://mediastore.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediastore.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Sun, 20 Dec 2020 20:33:20 GMT
  x-amzn-RequestId: ACUZZSSZ5M6IOF46KVYCHJIRYSCGTNNL3SP7HNBDDWU6MNIT5GA4HRX4F3UZR6DWHVUKYF3GSOD7PAZVHNUQF4Q
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    386      0 --:--:-- --:--:-- --:--:--   384
  
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
Command failed: curl --insecure -i -X OPTIONS https://data.mediastore.us-east-1.amazonaws.com/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.mediastore.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://api.mediatailor.us-east-1.amazonaws.com/playbackConfiguration/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.mediatailor.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:20 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 7a07889f-1a96-42c1-a227-53f1b0849b04
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k6mFf7oAMF3sA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    240      0 --:--:-- --:--:-- --:--:--   240
  
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
curl --insecure -i -X OPTIONS https://mgh.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mgh.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:20 GMT
  x-amzn-RequestId: 0c2a936a-a01c-497d-af56-ebe2f465f08b
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
curl --insecure -i -X OPTIONS https://migrationhub-config.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: migrationhub-config.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:21 GMT
  content-length: 0
  x-amzn-requestid: edfb7516-d224-43ce-b462-8d917623d6be
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://mobile.us-east-1.amazonaws.com/projects -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mobile.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:21 GMT
  x-amzn-RequestId: e033de5a-6a93-455d-b6fb-4a4f54f11025
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
curl --insecure -i -X OPTIONS https://mq.us-east-1.amazonaws.com/v1/brokers -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mq.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Sun, 20 Dec 2020 20:33:21 GMT
  x-amzn-requestid: 4ce9f11e-b6d8-444f-b136-099fa3d9a6d5
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k6zERioAMFxxg=
  x-amzn-trace-id: Root=1-5fdfb511-30e530412879149e22beb9a6
  x-cache: Error from cloudfront
  via: 1.1 23206a1c229d8877bdd053c4b05f9d12.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: H3xbY8dLgTRdGMbwT5gTu-fAzGhkTCi2x5SnL8lND39DLuXttWr4-Q==
  
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
curl --insecure -i -X OPTIONS https://mturk-requester.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mturk-requester.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1a27b1e3-fc7d-483a-a1fb-78ec68f355cb
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:21 GMT
  
  
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
curl --insecure -i -X OPTIONS https://rds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1ed3ae27-2f86-4284-b747-3f96d72c9559
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:22 GMT
  
  
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
      <td><strong>network-firewall.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://network-firewall.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: network-firewall.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: ce26ef48-7449-4a58-bea1-0c296925a76f
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:23 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    434      0 --:--:-- --:--:-- --:--:--   433
  
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
Command failed: curl --insecure -i -X OPTIONS https://networkmanager.us-east-1.amazonaws.com/global-networks/stringvalue/customer-gateway-associations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: networkmanager.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://opsworks.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: opsworks.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:23 GMT
  x-amzn-RequestId: 941427a9-b5f6-4034-ac3b-d7a686ee480d
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
curl --insecure -i -X OPTIONS https://opsworks-cm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: opsworks-cm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2f7c7134-24e0-4a9e-80d3-fe922f797225
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:23 GMT
  
  
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
curl --insecure -i -X OPTIONS https://organizations.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: organizations.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 3aa6092e-0f4f-41ad-a05d-35292da2fd6d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:23 GMT
  
  
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
curl --insecure -i -X OPTIONS https://outposts.us-east-1.amazonaws.com/outposts -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: outposts.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:24 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 131cdaf6-5cc9-4be3-b8c0-6d99138bced2
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k7NF2fIAMFq4Q=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5fdfb514-0e047d6c1548ffde756d4a1e
  
  
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
curl --insecure -i -X OPTIONS https://personalize.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: personalize.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:24 GMT
  x-amzn-RequestId: c8ab3557-f0b8-4e2e-ba00-1c38e17e09e5
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
curl --insecure -i -X OPTIONS https://personalize-events.us-east-1.amazonaws.com/events -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: personalize-events.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:25 GMT
  x-amzn-RequestId: 954027d2-0ba0-45dd-a45b-b771e70c3a94
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
curl --insecure -i -X OPTIONS https://personalize-runtime.us-east-1.amazonaws.com/personalize-ranking -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: personalize-runtime.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:24 GMT
  x-amzn-RequestId: e99baf1b-cdf7-45b5-b267-14cef620a394
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
curl --insecure -i -X OPTIONS https://pi.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: pi.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:25 GMT
  x-amzn-RequestId: 8799b04f-0606-468e-aaec-fbd21f1a503c
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
curl --insecure -i -X OPTIONS https://pinpoint.us-east-1.amazonaws.com/v1/apps -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: pinpoint.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Content-Type: application/json
  Content-Length: 0
  Connection: keep-alive
  Date: Sun, 20 Dec 2020 20:33:26 GMT
  x-amzn-RequestId: 23a55209-b635-4382-ba54-1ebf8673f063
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k7dFGzIAMF_GQ=
  Access-Control-Allow-Methods: POST,GET,OPTIONS
  X-Cache: Miss from cloudfront
  Via: 1.1 d83ae0e1ba84e92e58bc1efc23a0c653.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: bfTt2V2zJ0KCJyaIzm4SXAceVVBNb7yvZGmO99C-3MZIzmdM8IwCdg==
  
  
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
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/v1/email/configuration-sets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 06d93b1a-1b39-49ea-a72b-1a2928297721
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:25 GMT
  
  
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
curl --insecure -i -X OPTIONS https://sms-voice.pinpoint.us-east-1.amazonaws.com/v1/sms-voice/configuration-sets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sms-voice.pinpoint.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 3
  date: Sun, 20 Dec 2020 20:33:26 GMT
  x-amzn-requestid: a87f1982-f787-414a-8d24-6cf30910cecd
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3k7iFHaIAMFkqQ=
  access-control-allow-methods: GET,POST,PUT,DELETE,OPTIONS
  x-cache: Miss from cloudfront
  via: 1.1 c1c7bd66e338154bf556b9c8414debe9.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: xbuCuvmVhcJfAhaZfNb0RPAAvFppDQWNdzlkdNAJv7Riewff8jbS_g==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0     20      0 --:--:-- --:--:-- --:--:--    20
  
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
curl --insecure -i -X OPTIONS https://polly.us-east-1.amazonaws.com/v1/lexicons/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: polly.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1719e288-0a1c-4b6b-9ea9-0ade15ae4fcc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:26 GMT
  
  
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
curl --insecure -i -X OPTIONS https://api.pricing.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.pricing.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: b6f0ab90-337a-420e-98a8-f63521de7351
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:26 GMT
  
  
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
curl --insecure -i -X OPTIONS https://qldb.us-east-1.amazonaws.com/ledgers/stringvalue/journal-kinesis-streams/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: qldb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Sun, 20 Dec 2020 20:33:27 GMT
  x-amzn-requestid: bd9066fc-84d6-41ab-b543-d556ea464d91
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3k7rHpBIAMF8rw=
  access-control-allow-methods: DELETE,GET
  x-amzn-trace-id: Root=1-5fdfb517-515e04883ad894bc7b8154c3
  x-cache: Miss from cloudfront
  via: 1.1 0005a84c2971ff4f5bbb79e7ebc622a9.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: eur2NdXRnCOR4Ssis6o4ltTsBNrF8v7Jm-_b_Z9hJoVhA0do6iLX4w==
  
  
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
curl --insecure -i -X OPTIONS https://session.qldb.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: session.qldb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 500 Internal Server Error
  x-amzn-RequestId: InjUkyawxVn5Rhm3cT3NMP
  Date: Sun, 20 Dec 2020 20:33:27 GMT
  Content-Length: 19
  
  <InternalFailure/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    19  100    19    0     0     70      0 --:--:-- --:--:-- --:--:--    70
  
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
curl --insecure -i -X OPTIONS https://quicksight.us-east-1.amazonaws.com/accounts/stringvalue/data-sets/stringvalue/ingestions/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: quicksight.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:28 GMT
  content-length: 127
  x-amzn-requestid: 708d3678-60c1-45dd-9b54-6c06a6f45db7
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    440      0 --:--:-- --:--:-- --:--:--   440
  
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
curl --insecure -i -X OPTIONS https://ram.us-east-1.amazonaws.com/acceptresourceshareinvitation -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ram.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:28 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: cf03aa68-36fb-464b-b174-4a3ead18c007
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k72EIhIAMFeqA=
  x-amzn-trace-id: Root=1-5fdfb518-1b52179916dfe5e428fecdd7
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    230      0 --:--:-- --:--:-- --:--:--   230
  
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
curl --insecure -i -X OPTIONS https://rds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 72cd3907-ea91-43e7-8294-14a53a0a5f7f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:28 GMT
  
  
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
curl --insecure -i -X OPTIONS https://rds-data.us-east-1.amazonaws.com/BatchExecute -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds-data.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: b0c1c490-4b3c-40fa-8bd0-d64c021bbdbf
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:28 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    451      0 --:--:-- --:--:-- --:--:--   450
  
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
curl --insecure -i -X OPTIONS https://redshift.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: redshift.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 49924eb9-bbbe-477d-8d25-355c7c982ca6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:28 GMT
  
  
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
curl --insecure -i -X OPTIONS https://redshift-data.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: redshift-data.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: be3f3477-c277-4527-858c-e1b0459d6c29
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:29 GMT
  
  
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
curl --insecure -i -X OPTIONS https://rekognition.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rekognition.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:29 GMT
  x-amzn-RequestId: 7874d303-4df0-46be-8e37-2c669a9db05b
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
curl --insecure -i -X OPTIONS https://resource-groups.us-east-1.amazonaws.com/groups -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: resource-groups.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:30 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 71c5ed1a-6699-4294-8e66-a06120f38c43
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k8KE1VIAMFkOg=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5fdfb51a-7ddc877b263a9af55d3a6087
  
  
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
curl --insecure -i -X OPTIONS https://tagging.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: tagging.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: e2d88a7f-ba6f-4f63-9a13-ba2b3cc5c010
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:30 GMT
  
  
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
curl --insecure -i -X OPTIONS https://robomaker.us-east-1.amazonaws.com/batchDeleteWorlds -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: robomaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:31 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a29d0a51-f95b-46c9-a8cc-36f63133dd89
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k8REtAoAMFaMg=
  x-amzn-trace-id: Root=1-5fdfb51b-31b47ad25f00d1816715bc79
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    209      0 --:--:-- --:--:-- --:--:--   209
  
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
curl --insecure -i -X OPTIONS https://route53.amazonaws.com/2013-04-01/hostedzone/stringvalue/associatevpc -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: dcb742f0-7dd2-4216-887d-3b0235229419
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:31 GMT
  
  
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
curl --insecure -i -X OPTIONS https://route53domains.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53domains.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 266407b0-7c0b-4b8f-8589-f9dc4ea644fc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:31 GMT
  
  
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
curl --insecure -i -X OPTIONS https://route53resolver.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53resolver.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:32 GMT
  content-length: 0
  x-amzn-requestid: b5ba653c-cf3e-46a4-85b1-a66265fd7f43
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://stringvalue.s3.us-east-1.amazonaws.com/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: stringvalue.s3.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: 838CC9DB0F05F009
  x-amz-id-2: D99GHK2utJ/Id75gNERoTQCz3T1oXpAEgCuBExQML2rz2hXG6s8HmGbe6tNgOQBWOPcaxXeToSw=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Sun, 20 Dec 2020 20:33:32 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <Error><Code>AccessForbidden</Code><Message>CORSResponse: Bucket not found</Message><Method>DELETE</Method><ResourceType>BUCKET</ResourceType><RequestId>838CC9DB0F05F009</RequestId><HostId>D99GHK2utJ/Id75gNERoTQCz3T1oXpAEgCuBExQML2rz2hXG6s8HmGbe6tNgOQBWOPcaxXeToSw=</HostId></Error>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   321    0   321    0     0   1073      0 --:--:-- --:--:-- --:--:--  1073
  
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
curl --insecure -i -X OPTIONS https://stringvalue.s3-control.us-east-1.amazonaws.com/v20180820/accesspoint/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: content-type,x-amz-account-id,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: stringvalue.s3-control.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: 48C93689AF7223BA
  x-amz-id-2: DEKKBBXgj7pr7vv6OgDViwJZOrGoHeeWB5EGvQ8BzAdCf9q7xA2DEbqifTcu+FSEj7kK0Bxadu4=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Sun, 20 Dec 2020 20:33:33 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <ErrorResponse><Error><Code>AccessDenied</Code><Message>Access Denied</Message><AccountId>stringvalue</AccountId></Error><RequestId>48C93689AF7223BA</RequestId><HostId>DEKKBBXgj7pr7vv6OgDViwJZOrGoHeeWB5EGvQ8BzAdCf9q7xA2DEbqifTcu+FSEj7kK0Bxadu4=</HostId></ErrorResponse>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   308    0   308    0     0    895      0 --:--:-- --:--:-- --:--:--   892
  
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
curl --insecure -i -X OPTIONS https://s3-outposts.us-east-1.amazonaws.com/S3Outposts/CreateEndpoint -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: s3-outposts.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: d281f7ac-60e4-4a82-b07d-e0dac2a2c0d7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:33 GMT
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
curl --insecure -i -X OPTIONS https://api.sagemaker.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1db56ae8-3830-4b13-a2e5-f337d6fcc015
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:33 GMT
  
  
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
curl --insecure -i -X OPTIONS https://a2i-runtime.sagemaker.us-east-1.amazonaws.com/human-loops/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: a2i-runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:34 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 08792c3d-7eaa-45f9-bc65-a4c6b7173167
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k8wGJjIAMF3sA=
  access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
  x-amzn-trace-id: Root=1-5fdfb51e-345d3f5419648cac265ed1c7
  
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
      <td><strong>edge.sagemaker.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://edge.sagemaker.us-east-1.amazonaws.com/GetDeviceRegistration -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: edge.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6d3dfd54-0ccb-4457-b467-8d8293859089
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:34 GMT
  
  
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
      <td><strong>featurestore-runtime.sagemaker.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://featurestore-runtime.sagemaker.us-east-1.amazonaws.com/FeatureGroup/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: featurestore-runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 75733840-c3cc-4d78-bca3-bb3929bb1b7a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:34 GMT
  
  
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
curl --insecure -i -X OPTIONS https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/stringvalue/invocations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 173b67c5-d1e7-4cd3-a1db-20b139b2671c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-Amzn-Invoked-Production-Variant,x-amzn-RequestId,x-amzn-ErrorType,X-Amzn-SageMaker-Custom-Attributes,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:35 GMT
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
curl --insecure -i -X OPTIONS https://savingsplans.amazonaws.com/CreateSavingsPlan -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: savingsplans.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:35 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 709f2465-40c2-41e1-840d-ad21790ea861
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k89EZLoAMFtlQ=
  x-amzn-trace-id: Root=1-5fdfb51f-014d9df9389fbd987a7631ca
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    228      0 --:--:-- --:--:-- --:--:--   228
  
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
curl --insecure -i -X OPTIONS https://schemas.us-east-1.amazonaws.com/v1/discoverers -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: schemas.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:35 GMT
  content-type: application/json
  content-length: 113
  x-amzn-requestid: 9831fa7d-a185-49e9-81aa-a6ebb1935c10
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k9AHJDIAMF2FQ=
  x-amzn-trace-id: Root=1-5fdfb51f-1f56a09811c034e567ac7ae4
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   113  100   113    0     0    380      0 --:--:-- --:--:-- --:--:--   379
  
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
curl --insecure -i -X OPTIONS https://secretsmanager.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: secretsmanager.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:36 GMT
  content-length: 0
  x-amzn-requestid: 1f7f7745-f0f0-4f0d-b9eb-9e66c8dd8157
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://securityhub.us-east-1.amazonaws.com/master -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: securityhub.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:36 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: f0a43a2f-6886-4459-95bc-16473cb2b19d
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k9HGE9oAMF2QQ=
  x-amzn-trace-id: Root=1-5fdfb520-262a665210a4da806ffc2e44
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    260      0 --:--:-- --:--:-- --:--:--   260
  
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
curl --insecure -i -X OPTIONS https://serverlessrepo.us-east-1.amazonaws.com/applications -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: serverlessrepo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:36 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 7fe65a09-8fad-4cd0-bc3e-49bb06932fb7
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k9KGhfoAMFQMg=
  x-amzn-trace-id: Root=1-5fdfb520-3ca5d34153152d8558b7e7bb
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    264      0 --:--:-- --:--:-- --:--:--   264
  
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
curl --insecure -i -X OPTIONS https://servicecatalog.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: servicecatalog.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: e9dd9175-c31e-4a79-aaa7-6ae9fd3228b4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:36 GMT
  
  
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
      <td><strong>servicecatalog-appregistry.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://servicecatalog-appregistry.us-east-1.amazonaws.com/applications/stringvalue/attribute-groups/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: servicecatalog-appregistry.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:37 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 7f504087-1bbb-4d57-b9e4-319a56dbbd31
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: X3k9RGzuoAMFq7w=
  access-control-allow-methods: PUT,DELETE
  x-amzn-trace-id: Root=1-5fdfb521-0e642ce46522807755422b41
  
  
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
curl --insecure -i -X OPTIONS https://servicequotas.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: servicequotas.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:38 GMT
  content-length: 0
  x-amzn-requestid: 8d7afb18-a07a-4963-a383-2e45d0eb8afa
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://servicediscovery.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: servicediscovery.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:38 GMT
  x-amzn-RequestId: c6ebdaa2-c553-4c24-8798-8314fcb7ca09
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
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 06ae906d-856d-46c3-ae0a-6960ed4b7011
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:38 GMT
  
  
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
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/v2/email/configuration-sets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 40b568fd-79f4-4cd4-8a98-75bd0b29daad
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:39 GMT
  
  
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
curl --insecure -i -X OPTIONS https://states.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: states.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 821c427c-96ec-4140-bdf7-e837c43509d3
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     91      0 --:--:-- --:--:-- --:--:--    92
  
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
curl --insecure -i -X OPTIONS https://shield.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: shield.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 5ce6b736-f7a6-41da-ad8e-a222800aff9e
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:39 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    456      0 --:--:-- --:--:-- --:--:--   456
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>signer.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://signer.us-east-1.amazonaws.com/signing-profiles/stringvalue/permissions -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: signer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:40 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 9b157756-ee03-43b2-ac44-b59c9668fea5
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: X3k9qHoGoAMFSng=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5fdfb524-4528076f6fe51a7b7609a278
  
  
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
curl --insecure -i -X OPTIONS https://sms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: f682ecf2-55e8-4c5d-9f07-56ef9d14465b
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:39 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    408      0 --:--:-- --:--:-- --:--:--   408
  
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
curl --insecure -i -X OPTIONS https://snowball.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: snowball.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2d4a1f84-31e4-4020-aed7-8082a591e0a7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:40 GMT
  
  
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
curl --insecure -i -X OPTIONS https://sns.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sns.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: efb89a97-ff94-517b-8410-c2ce48f1cd3d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:40 GMT
  
  
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
curl --insecure -i -X OPTIONS https://sqs.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sqs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: e6384634-f1a6-500b-aafa-1e6d46c38b8e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Sun, 20 Dec 2020 20:33:41 GMT
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
curl --insecure -i -X OPTIONS https://ssm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ssm.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Server: Server
  Date: Sun, 20 Dec 2020 20:33:41 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 839a0d07-babf-4fe5-b21c-6b5fd5b7a3e2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://portal.sso.us-east-1.amazonaws.com/federation/credentials -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: x-amz-sso_bearer_token,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: portal.sso.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 400
  date: Sun, 20 Dec 2020 20:33:42 GMT
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   121  100   121    0     0    410      0 --:--:-- --:--:-- --:--:--   410
  
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
curl --insecure -i -X OPTIONS https://sso.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sso.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:42 GMT
  content-length: 0
  x-amzn-requestid: b717a39c-b3e7-4377-9a5b-5d0f9c93d175
  access-control-allow-origin: *
  access-control-allow-headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://oidc.us-east-1.amazonaws.com/token -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: oidc.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:42 GMT
  content-length: 25
  x-amzn-requestid: 713aa29e-33f6-4250-9f65-e5385daa5440
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     77      0 --:--:-- --:--:-- --:--:--    77
  
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
curl --insecure -i -X OPTIONS https://storagegateway.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: storagegateway.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  Date: Sun, 20 Dec 2020 20:33:43 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 34bfc7be-179e-4af6-914e-fc2c7d09df41
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
curl --insecure -i -X OPTIONS https://sts.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sts.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 03400cde-6449-4c92-99ce-4048ea1c7e04
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:43 GMT
  
  
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
curl --insecure -i -X OPTIONS https://support.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: support.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403
  x-amzn-RequestId: 0e118865-8606-4c22-9eed-70c694a58332
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:43 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    468      0 --:--:-- --:--:-- --:--:--   466
  
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
curl --insecure -i -X OPTIONS https://swf.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: swf.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 4e97f02b-cba4-45b7-9327-38dc55ac6298
  Date: Sun, 20 Dec 2020 20:33:44 GMT
  Content-Length: 29
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0    109      0 --:--:-- --:--:-- --:--:--   109
  
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
curl --insecure -i -X OPTIONS https://synthetics.us-east-1.amazonaws.com/canary -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: synthetics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:44 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 4fa2303b-699c-42cb-8381-4dee31ab9224
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k-XHHXIAMFtDQ=
  x-amzn-trace-id: Root=1-5fdfb528-1826f877399c1f347f254cea
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    258      0 --:--:-- --:--:-- --:--:--   258
  
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
curl --insecure -i -X OPTIONS https://textract.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: textract.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: ae214e30-1bbe-46bd-8767-b2e166e9c350
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:44 GMT
  
  
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
      <td><strong>query.timestream.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://query.timestream.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: query.timestream.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: b6f211cc-9ffa-402f-acaa-f8c9dcf66587
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:45 GMT
  
  
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
      <td><strong>ingest.timestream.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://ingest.timestream.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ingest.timestream.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 939d160e-b5f0-4131-a5ba-7714f84add92
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:45 GMT
  
  
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
curl --insecure -i -X OPTIONS https://transcribe.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: transcribe.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Sun, 20 Dec 2020 20:33:46 GMT
  x-amzn-RequestId: c8517cc6-77b5-4c0f-9c8a-3d40cc67ab5f
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
curl --insecure -i -X OPTIONS https://transfer.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: transfer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 404
  date: Sun, 20 Dec 2020 20:33:46 GMT
  content-length: 29
  x-amzn-requestid: bc1d443b-c24b-4658-aca4-a9a3e730e917
  
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
curl --insecure -i -X OPTIONS https://translate.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: translate.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: c85d870e-958f-4e83-83f0-88141a4a4688
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:46 GMT
  
  
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
curl --insecure -i -X OPTIONS https://waf.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: waf.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: a5143bd8-d786-4478-9ada-d1a83865e61e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:46 GMT
  
  
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
curl --insecure -i -X OPTIONS https://waf-regional.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: waf-regional.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 3e2a18a9-19c5-421f-859a-9b5978c9c90d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:47 GMT
  
  
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
curl --insecure -i -X OPTIONS https://wafv2.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: wafv2.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: d4f4e6d7-4f7d-4831-adb2-bfe8efe667a3
  Content-Length: 127
  Date: Sun, 20 Dec 2020 20:33:47 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    433      0 --:--:-- --:--:-- --:--:--   433
  
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
curl --insecure -i -X OPTIONS https://workdocs.us-east-1.amazonaws.com/api/v1/documents/stringvalue/versions/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workdocs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1d1510f9-6bcc-44ee-a90d-0a67724f2775
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: private, no-cache, no-store, max-age=0
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Server-ResponseTime-Millis: 0
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:47 GMT
  
  
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
curl --insecure -i -X OPTIONS https://worklink.us-east-1.amazonaws.com/associateDomain -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: worklink.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Sun, 20 Dec 2020 20:33:48 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: d81e72bb-9ecb-46ff-85c3-e844e89855ae
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: X3k--EBxoAMF2pg=
  x-amzn-trace-id: Root=1-5fdfb52c-5d4490fc4f8fc57f018330d6
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    250      0 --:--:-- --:--:-- --:--:--   250
  
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
curl --insecure -i -X OPTIONS https://workmail.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workmail.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 35ff6bc4-0a65-45fd-aff3-6bd2dce12662
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:48 GMT
  
  
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
curl --insecure -i -X OPTIONS https://workmailmessageflow.us-east-1.amazonaws.com/messages/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workmailmessageflow.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Sun, 20 Dec 2020 20:33:48 GMT
  x-amzn-RequestId: 1e8c0f8f-01f6-4f67-87a3-4747b85c4ec5
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    417      0 --:--:-- --:--:-- --:--:--   416
  
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
curl --insecure -i -X OPTIONS https://workspaces.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workspaces.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 417b5a26-f91c-4ac6-9983-b966ed754016
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: content-type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Sun, 20 Dec 2020 20:33:48 GMT
  
  
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
curl --insecure -i -X OPTIONS https://xray.us-east-1.amazonaws.com/Traces -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: xray.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Sun, 20 Dec 2020 20:33:49 GMT
  content-length: 0
  x-amzn-requestid: 9988b34f-cf7c-45ac-92f3-37f7ed62c9a7
  access-control-allow-origin: *
  access-control-allow-headers: content-type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
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
  </tbody>
</table>
