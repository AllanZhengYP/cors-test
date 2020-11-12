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
  date: Thu, 12 Nov 2020 16:04:35 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 36e2469f-a490-4252-843f-03b08841c7c4
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5t7IFP_IAMFd3g=
  access-control-allow-methods: GET,PUT
  x-amzn-trace-id: Root=1-5fad5d13-6f9362d414be6f2562dae540
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
  x-amzn-RequestId: 27eff16a-99c4-4c26-ad50-ce220ebe7586
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:36 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:04:37 GMT
  content-length: 127
  x-amzn-requestid: cf00c0ce-6d91-4835-87c8-4599e7f1e947
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    266      0 --:--:-- --:--:-- --:--:--   266
  
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
  date: Thu, 12 Nov 2020 16:04:37 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:04:38 GMT
  x-amzn-requestid: 7a1fff7d-73a2-41cc-9191-006414355549
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5t7eFwNIAMFm2A=
  x-cache: Error from cloudfront
  via: 1.1 8fc9659fc06389e49927f68638e9bc94.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C1
  x-amz-cf-id: XZ5FuP0nP2wMsfaIllUvrGZ7CFUHcc4YCnrPRvqnFlF2BppgHzPKqQ==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    153      0 --:--:-- --:--:-- --:--:--   152
  
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
  date: Thu, 12 Nov 2020 16:04:38 GMT
  content-length: 0
  x-amzn-requestid: 9b8b536e-e2e2-4f26-9a37-4e54109fd44b
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amz-apigw-id: V5t7lKQ6oAMEbNw=
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
Command failed: curl --insecure -i -X OPTIONS https://execute-api.us-east-1.amazonaws.com/@connections/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: execute-api.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: execute-api.us-east-1.amazonaws.com
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
  date: Thu, 12 Nov 2020 16:04:39 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: db29b84f-db61-4b63-a38f-d82c40d5457f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5t7rERIoAMFx8w=
  x-amzn-trace-id: Root=1-5fad5d17-33d1233d1126a8e11c7a6288
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    185      0 --:--:-- --:--:-- --:--:--   185
  
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
  x-amzn-requestid: 3220f4f8-ebf6-4ea4-8651-866852d18b49
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: PUT
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  content-length: 0
  date: Thu, 12 Nov 2020 16:04:39 GMT
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
curl --insecure -i -X OPTIONS https://appconfig.us-east-1.amazonaws.com/applications -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appconfig.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Thu, 12 Nov 2020 16:04:40 GMT
  content-length: 127
  x-amzn-requestid: 53bc418c-b356-48ef-8259-98d9bb0924a9
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    260      0 --:--:-- --:--:-- --:--:--   260
  
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
  date: Thu, 12 Nov 2020 16:04:41 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 117193fb-03d4-46dd-be24-5ea2071b254e
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: V5t78HlaIAMFdEw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fad5d19-1ecfecab3a4d6aa20654cd18
  
  
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
curl --insecure -i -X OPTIONS https://application-autoscaling.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: application-autoscaling.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 72c6224f-9fd6-4354-995d-184ec9ee7154
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:40 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:04:42 GMT
  x-amzn-RequestId: cf060bef-b6f2-42c5-be78-7d12faebe053
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    255      0 --:--:-- --:--:-- --:--:--   255
  
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
  date: Thu, 12 Nov 2020 16:04:42 GMT
  content-length: 0
  x-amzn-requestid: 0d870ecb-857a-496e-986a-dbb20844f695
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
  x-amzn-RequestId: cea2fa04-45ae-4da8-b64c-4b8d49fc3905
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:42 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:04:43 GMT
  x-amzn-requestid: 7184fed9-5b41-43fa-9b0b-f260dfc42299
  x-amzn-errortype: ForbiddenException
  x-amz-apigw-id: V5t8YG-MoAMF52w=
  x-cache: Error from cloudfront
  via: 1.1 ec2068c87c2d80519a5753dcf9eaede7.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD66-C2
  x-amz-cf-id: 8Owm6sTsuu0nLivEZfCYGldmicLKUe-x1C-EwmvIMyw0FUlP4dqPcQ==
  
  {"message":"Forbidden"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    23  100    23    0     0     46      0 --:--:-- --:--:-- --:--:--    46
  
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
  Date: Thu, 12 Nov 2020 16:04:43 GMT
  x-amzn-RequestId: 6a0e0cac-e95d-41df-b16d-3958c680ce74
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
  x-amzn-RequestId: a5594955-2951-4d69-be07-976736cb7b52
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:44 GMT
  
  
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
  x-amzn-RequestId: 359d47c2-9b17-4495-82cd-35429780b1ff
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:44 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:04:46 GMT
  x-amzn-RequestId: ab0ba1dc-2725-4ba3-a246-59e1541e3f7e
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    230      0 --:--:-- --:--:-- --:--:--   230
  
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
  date: Thu, 12 Nov 2020 16:04:46 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 5b316491-0e83-4109-9664-82fc21053783
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5t80G1UIAMF66A=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    151      0 --:--:-- --:--:-- --:--:--   151
  
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
  date: Thu, 12 Nov 2020 16:04:47 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 4aa1e29f-36a2-4c8f-8d20-6d25391a734e
  access-control-allow-origin: *
  access-control-allow-headers: *,Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request,content-type,x-amz-content-sha256,x-amz-user-agent,x-amzn-platform-id,x-amzn-trace-id
  x-amz-apigw-id: V5t85FvNIAMFTGg=
  access-control-allow-methods: PUT
  x-amzn-trace-id: Root=1-5fad5d1f-0f6d272f6993818a695abc6a
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
  date: Thu, 12 Nov 2020 16:04:47 GMT
  content-length: 0
  x-amzn-requestid: a3e5daab-cc65-4f6e-a53b-e301e1c786de
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
  x-amzn-RequestId: a4419f85-cbc0-4a42-9bb5-4cd7f2126e03
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:04:48 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    219      0 --:--:-- --:--:-- --:--:--   219
  
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
  date: Thu, 12 Nov 2020 16:04:49 GMT
  content-length: 0
  x-amzn-requestid: 37b90453-ef68-4261-8754-4b59c2c33c7b
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
  x-amzn-RequestId: 60c00a6d-3dfc-4829-a9cd-a32c33904d88
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Thu, 12 Nov 2020 16:04:49 GMT
  x-amzn-RequestId: 60c00a6d-3dfc-4829-a9cd-a32c33904d88
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
  x-amzn-RequestId: bd64b76b-6e28-47eb-baac-babd913b97e1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:49 GMT
  
  
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
curl --insecure -i -X OPTIONS https://cloudfront.amazonaws.com/2020-05-31/cache-policy -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudfront.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7331bc23-5289-494d-a902-c321274fd1ab
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:50 GMT
  
  
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
  x-amzn-RequestId: d0cc83f7-970f-4286-b595-08a223fcbaaf
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:51 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:04:51 GMT
  x-amzn-RequestId: 08c0e726-3f88-418f-a4e9-333bff119279
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    270      0 --:--:-- --:--:-- --:--:--   269
  
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
  x-amzn-RequestId: 5ceefc0d-b4da-4bc5-a691-fa8cef6d4e4e
  Content-Length: 29
  Date: Thu, 12 Nov 2020 16:04:52 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     60      0 --:--:-- --:--:-- --:--:--    60
  
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
  x-amzn-RequestId: c48e8b42-554c-4761-a455-effce0ce3292
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:52 GMT
  
  
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
  x-amzn-RequestId: a5264a9a-849f-44ae-82f0-78158a85d1e2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:53 GMT
  
  
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
  x-amzn-RequestId: b3582367-d6fe-4a96-8dbc-1e17e3d0e85f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:53 GMT
  
  
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
  x-amzn-RequestId: 660f7042-752b-4bda-9730-e2265e655651
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:54 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:04:55 GMT
  content-length: 0
  x-amzn-requestid: 7b549f89-6e84-48f0-afc8-b508ff7fbcf1
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
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
  x-amzn-RequestId: 4cc7ea0d-70b8-4395-81c7-6c1a3ed9c209
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:55 GMT
  
  
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
  x-amzn-RequestId: 48d8c46d-cea6-4f78-8cf8-57dc667e1286
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:56 GMT
  
  
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
  x-amzn-RequestId: 68586651-3c58-4d64-97e7-2e481bad55e4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Thu, 12 Nov 2020 16:04:57 GMT
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
curl --insecure -i -X OPTIONS https://codeguru-reviewer.us-east-1.amazonaws.com/associations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeguru-reviewer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:04:57 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: b829c18c-cee9-4cd1-adb8-ff1696c07bad
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5t-jFsMIAMFbcw=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5fad5d29-2544070b475ad7d862508eca
  
  
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
  date: Thu, 12 Nov 2020 16:04:58 GMT
  x-amzn-requestid: 7cb4f701-bdf0-4a0d-9888-007220382721
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,Date,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5t-pFheoAMFnCA=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fad5d2a-398cff926208d1131d635905
  access-control-max-age: 600
  x-cache: Miss from cloudfront
  via: 1.1 841dfa6074cf4b3b0718988f088a4ac2.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C1
  x-amz-cf-id: 6gpt7OzRWb85Q41_0y4pbeco4JV_eAUWrkaqlshwKKHij_YurmrDDQ==
  
  
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
  x-amzn-RequestId: 45bbb9b7-585c-42da-a2c2-fd8c6caf0361
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
  x-amzn-RequestId: 279df669-4f01-4657-ac83-b87ba96b06aa
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:04:59 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:00 GMT
  content-length: 0
  x-amzn-requestid: 9b197e74-ce09-4fdf-8209-bb5503708611
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
  date: Thu, 12 Nov 2020 16:05:00 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: d2dae874-0bda-4dc8-8853-84f62eaf4c7b
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5t-_FynIAMF-YA=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fad5d2c-5ce619a5643342982412d25b
  
  
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
  date: Thu, 12 Nov 2020 16:05:01 GMT
  content-length: 0
  x-amzn-requestid: b922e788-7702-47e9-8927-1886a8daffbc
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
  date: Thu, 12 Nov 2020 16:05:01 GMT
  content-length: 0
  x-amzn-requestid: fe905f1c-cb24-4d47-b67b-c4736861d346
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
  date: Thu, 12 Nov 2020 16:05:02 GMT
  content-length: 0
  x-amzn-requestid: e07ff1af-5751-4281-a331-cf38122c2042
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
curl --insecure -i -X OPTIONS https://comprehend.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: comprehend.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: a8f5c9c2-3000-4c28-8c6c-68b7a013beea
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:02 GMT
  
  
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
  x-amzn-RequestId: 1d26e939-5b7f-4ef6-9802-18e526516f18
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:03 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:04 GMT
  content-length: 272
  x-amzn-requestid: d2b2cf9a-1138-4c29-9caa-1bd9430e0a82
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   272  100   272    0     0    534      0 --:--:-- --:--:-- --:--:--   533
  
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
  x-amzn-RequestId: 29c2ce00-faac-46e2-89fe-124e962813af
  Access-Control-Allow-Origin: *
  Strict-Transport-Security: max-age=86400
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:04 GMT
  
  
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
curl --insecure -i -X OPTIONS https://connect.us-east-1.amazonaws.com/routing-profiles/stringvalue/stringvalue/associate-queues -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:05:05 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 5f2fad0e-ac95-4ec4-b0ae-0ec8f0489d62
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5t_uGj_oAMFvfw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fad5d31-7728f1927c4537c23564892a
  
  
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
  date: Thu, 12 Nov 2020 16:05:05 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 6916eadc-d2bd-4a57-b0da-d1e668fad1bb
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,X-Amz-Bearer
  x-amz-apigw-id: V5t_zFo1IAMFUwQ=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fad5d31-64a597677967723204461b11
  
  
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
  x-amzn-RequestId: 35cf9995-8d0a-4a05-ae90-c5a84b044457
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:06 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:06 GMT
  content-length: 0
  x-amzn-requestid: 79256fcc-04c3-4db3-96d1-3616f7bae84a
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
  x-amzn-RequestId: 734f3560-cd23-4deb-8708-ce5f8226a075
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:06 GMT
  
  
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
  x-amzn-RequestId: 8e4923be-9ada-4f23-a0a2-c5e615060856
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:07 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:08 GMT
  x-amzn-requestid: 27a00246-9082-4f17-a038-c729dc9849cd
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uASEecIAMFQug=
  x-amzn-trace-id: Root=1-5fad5d34-23468f51283f2a293a0c1b22
  x-cache: Error from cloudfront
  via: 1.1 20579d8c7e6a7d159f211e9ee1d4003c.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C3
  x-amz-cf-id: dKEdY_JVeXj261Os0a9vvB3l314m0AWkflgRRCyuyp3w0kJ7xzdakg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    149      0 --:--:-- --:--:-- --:--:--   149
  
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
  date: Thu, 12 Nov 2020 16:05:09 GMT
  content-length: 127
  x-amzn-requestid: ffd83f51-01b7-4426-a7c8-0631a63bc8d7
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    265      0 --:--:-- --:--:-- --:--:--   265
  
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
  x-amzn-RequestId: ded405af-9674-4be2-a5b7-7a9952af34ab
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:09 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:05:10 GMT
  x-amzn-RequestId: 2f6b4875-acc1-4ac9-9155-39affe0ed925
  x-amzn-ErrorType: AccessDeniedException
  x-amz-apigw-id: V5uAjG5gIAMFdfg=
  X-Amzn-Trace-Id: Root=1-5fad5d36-5a8ea49d5bd709cc3278dde5
  X-Cache: Error from cloudfront
  Via: 1.1 10a9e9969f05a75cc05e6f70b8499f7e.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: IAD89-C3
  X-Amz-Cf-Id: AVuCKQDQTEDM2yZN-cE5V71lZKHMtYwgnkCEHto2uUAbshLqA5efYA==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    149      0 --:--:-- --:--:-- --:--:--   149
  
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
  x-amzn-RequestId: bb3dbcec-8ea4-4cd3-9c5b-3245dc297cd6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:10 GMT
  
  
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
  x-amzn-RequestId: b366174f-8f1d-4060-84f8-febde5db8594
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:11 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:13 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 9c3b33c1-a5ab-4e6b-a6d1-fed4ff8991ae
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uA7H6QIAMF_2Q=
  x-amzn-trace-id: Root=1-5fad5d39-20dbaf6805d863c204c5d412
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0     84      0 --:--:-- --:--:-- --:--:--    83
  
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
  x-amzn-RequestId: 11952034-d1bc-4cea-afa7-13e62a683dff
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:12 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:05:14 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: MB6ILT1H24GTGOJ1M3HLG0U3MJVV4KQNSO5AEMVJF66Q9ASUAAJG
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
  x-amzn-RequestId: VU6CDLFD0EQETN0H26MR3CKES7VV4KQNSO5AEMVJF66Q9ASUAAJG
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:14 GMT
  
  
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
curl --insecure -i -X OPTIONS https://ebs.us-east-1.amazonaws.com/snapshots/completion/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,x-amz-ChangedBlocksCount,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ebs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: dd96e756-c351-4f07-aaa6-4449343d1bb7
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:05:15 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    247      0 --:--:-- --:--:-- --:--:--   246
  
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
  Date: Thu, 12 Nov 2020 16:05:15 GMT
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
  x-amzn-RequestId: 10146568-f1ec-4e1a-a883-5b60a4b1518c
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:05:16 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    259      0 --:--:-- --:--:-- --:--:--   259
  
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
  x-amzn-RequestId: 2fe68e2c-3af0-46c4-ae49-70918de631a9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Thu, 12 Nov 2020 16:05:17 GMT
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
  x-amzn-RequestId: a6684208-eaf5-4b1d-8136-ce2334e44893
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:17 GMT
  
  
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
  x-amzn-RequestId: 6c9c521f-36b3-460e-adc4-b9595f204c9e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:17 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:18 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 725857fe-dbc8-487a-be92-25b983fb15c0
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uB2EDNoAMFpCQ=
  x-amzn-trace-id: Root=1-5fad5d3e-57240e1b7b9f3fdd33c3fe31
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    154      0 --:--:-- --:--:-- --:--:--   154
  
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
  Date: Thu, 12 Nov 2020 16:05:19 GMT
  x-amzn-RequestId: b5b1cffa-f161-452c-a1c1-51b84d8407a0
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
  date: Thu, 12 Nov 2020 16:05:20 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 18595cf7-6e0f-471b-ab79-5cbf0aca10d8
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uCBGV3IAMF7zA=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fad5d40-3eb3ad0c33d778ea085d3a7a
  
  
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
  x-amzn-RequestId: 35cea2e4-dee8-48e9-ac7e-2a6405742169
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:20 GMT
  
  
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
  x-amzn-RequestId: f898ea7b-96bb-4b04-a338-707244603b91
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:20 GMT
  
  
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
  x-amzn-RequestId: a656abb4-bfe1-4bbd-8464-ae8750fc2a04
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:21 GMT
  
  
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
  x-amzn-RequestId: 89b41e2a-da64-4758-83be-e964523644e8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:21 GMT
  
  
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
  x-amzn-RequestId: f340c19e-4a68-4db2-95ff-ceb98eae4692
  Content-Length: 29
  Date: Thu, 12 Nov 2020 16:05:22 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     61      0 --:--:-- --:--:-- --:--:--    61
  
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
  x-amzn-RequestId: 81bf7c25-6810-4b58-88a6-b32ebf93c6cd
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:22 GMT
  
  
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
  x-amzn-RequestId: 8c25172b-968c-4ca0-87e1-e3b0e9a2d592
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:23 GMT
  
  
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
  x-amzn-RequestId: e7655ad5-a20d-c245-bf42-055172b20933
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:23 GMT
  
  
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
  x-amzn-RequestId: 69ab813f-0ac7-4d11-969a-a2e2e6930f5d
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:05:24 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    259      0 --:--:-- --:--:-- --:--:--   259
  
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
  Date: Thu, 12 Nov 2020 16:05:24 GMT
  x-amzn-RequestId: 7f17c23f-a7e6-4bdd-a708-bf242b9b50c3
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
  Date: Thu, 12 Nov 2020 16:05:25 GMT
  x-amzn-RequestId: 4b7de0b8-8725-47ce-b8c0-864c2db40829
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
  date: Thu, 12 Nov 2020 16:05:26 GMT
  content-length: 0
  x-amzn-requestid: 5be1c6fb-8a91-42b7-a319-58a6728e2bf3
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
  date: Thu, 12 Nov 2020 16:05:26 GMT
  content-length: 0
  x-amzn-requestid: 1e9ffbe0-e80a-44f6-80cf-49758e2e6e18
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
  x-amzn-RequestId: 0d87e7ec-8fe5-4372-a3b3-d71958f7af2c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:27 GMT
  
  
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
  x-amzn-RequestId: ZPQj1TGE-eczkWxoaFtD42eq13lgALIWpAGhEOzf7VkeP_0
  Content-Length: 109
  Date: Thu, 12 Nov 2020 16:05:27 GMT
  Connection: close
  
  {"code":"MissingParameterValueException","message":"Required parameter missing: API version","type":"Client"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   109  100   109    0     0    213      0 --:--:-- --:--:-- --:--:--   212
  
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
  date: Thu, 12 Nov 2020 16:05:29 GMT
  content-length: 0
  x-amzn-requestid: 84875f13-c4c9-41a5-a864-d5da142e23a2
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
  date: Thu, 12 Nov 2020 16:05:29 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 8bbe088c-1b20-482b-927a-add0a8de6bb2
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uDiFz0oAMFvhA=
  x-amzn-trace-id: Root=1-5fad5d49-472c5bd0736585b01278e1c2
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    149      0 --:--:-- --:--:-- --:--:--   149
  
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
  date: Thu, 12 Nov 2020 16:05:30 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: b34a3a1c-e4a6-4092-823e-6c269567ba53
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uDqHRTIAMF7qw=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    150      0 --:--:-- --:--:-- --:--:--   150
  
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
  Date: Thu, 12 Nov 2020 16:05:30 GMT
  
  
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
  x-amzn-RequestId: 0740caa3-f22a-4f6b-8da1-bae98b28105e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:31 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:32 GMT
  content-length: 0
  x-amzn-requestid: f83089e7-8a36-428c-abcf-fb1b1bf9a44d
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
curl --insecure -i -X OPTIONS https://imagebuilder.us-east-1.amazonaws.com/CancelImageCreation -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: imagebuilder.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:05:33 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 0f98d281-8077-45f0-aa12-1b2be3f70e33
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uEFEFpoAMFXVw=
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
curl --insecure -i -X OPTIONS https://inspector.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: inspector.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6cd7a768-8393-4422-81f9-1f4723257613
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:33 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:34 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 6922b952-d667-4447-90d8-0a3c4afaf63c
  access-control-allow-origin: *
  access-control-allow-headers: Authorization, X-Amz-Date, X-Amz-Security-Token, x-amzn-iot-principal, X-Amz-Content-Sha256, X-Amz-User-Agent, Content-Type, x-amzn-principal
  x-amz-apigw-id: V5uETGxrIAMF75A=
  access-control-allow-methods: OPTIONS, GET, HEAD, POST, PUT, PATCH, DELETE
  
  {}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      4      0 --:--:-- --:--:-- --:--:--     4
  
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
  date: Thu, 12 Nov 2020 16:05:35 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 9c49e8c1-971d-40cb-9fe4-c76ec45e54b2
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uEZG88oAMFz_A=
  access-control-allow-methods: PUT,DELETE
  
  
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
  date: "Thu, 12 Nov 2020 16:05:35 GMT"
  
  
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
curl --insecure -i -X OPTIONS https://iotevents.us-east-1.amazonaws.com/detector-models -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotevents.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:05:36 GMT
  content-length: 0
  x-amzn-requestid: 8fedb5e3-d358-4270-a61f-76d287a372d8
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
  date: Thu, 12 Nov 2020 16:05:37 GMT
  content-length: 0
  x-amzn-requestid: a3ee6d81-3a47-462d-bd17-8f20add2706b
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
  x-amzn-RequestId: b8aefef5-5691-4431-aba6-e4e50a632a28
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: GET
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:37 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:38 GMT
  content-length: 0
  x-amzn-requestid: 408e6122-f1f2-4989-addd-8d6bf8e3534e
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
  date: Thu, 12 Nov 2020 16:05:39 GMT
  content-length: 25
  x-amzn-requestid: 99f2aa23-1c94-47d0-9fc1-3a04df8b90a2
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     53      0 --:--:-- --:--:-- --:--:--    53
  
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
  date: Thu, 12 Nov 2020 16:05:39 GMT
  content-length: 0
  x-amzn-requestid: faa2e8f8-f7da-421a-98dd-385929dc9498
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
  date: Thu, 12 Nov 2020 16:05:40 GMT
  content-length: 130
  x-amzn-requestid: 8cfab4fe-8615-467b-97d0-7a94d03a5169
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0100   130  100   130    0     0     97      0  0:00:01  0:00:01 --:--:--    97
  
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
  date: Thu, 12 Nov 2020 16:05:42 GMT
  x-amzn-requestid: 9808e85a-6624-4fdb-8050-1921f19439af
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uFjGjqIAMF_Mg=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5fad5d56-010550d056b5d89a149264be
  x-cache: Miss from cloudfront
  via: 1.1 f9efe5e72b7e5cc47bf34a0b0debcbe2.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C1
  x-amz-cf-id: 9fji9WbNHfcvoq-SRp-Kmf-x-Cjm5f1z-CjVvVTfSobPVM8HQmvwew==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
  
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
  date: Thu, 12 Nov 2020 16:05:44 GMT
  x-amzn-requestid: aff25969-940e-4713-b8c0-723d354424bc
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uF0FdyoAMF_gw=
  x-amzn-trace-id: Root=1-5fad5d58-655cf4ca5f58551f6e352033
  x-cache: Error from cloudfront
  via: 1.1 ddeb8679359f033dad405557c487bfdd.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C3
  x-amz-cf-id: jWR6Y7aLXjJ-XQ33AJcn9XD0A5OqW5mVTlbjSRpJfA2paPn0RaNJCA==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0     56      0  0:00:01  0:00:01 --:--:--    56
  
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
  x-amzn-RequestId: 6ae6a2cf-ea47-4ab3-a6cb-c07ec1955cd1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:44 GMT
  
  
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
  x-amzn-RequestId: d5a6b219-6a65-d0c0-8d81-ed80449ae2aa
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Thu, 12 Nov 2020 16:05:45 GMT
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
  x-amzn-RequestId: 7bcc2646-e646-4652-a151-478a065ca84b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:45 GMT
  
  
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
  x-amzn-RequestId: 97edef45-0b0a-4d52-b248-773df0fce1d6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:46 GMT
  
  
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
  x-amzn-RequestId: e186af6c-f46b-42c3-b803-e93aaf2f254c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:46 GMT
  
  
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
  x-amzn-RequestId: ef37359f-4db2-4fd2-9c2c-add5d2c86bdf
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:46 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kinesisvideo.us-east-1.amazonaws.com/getMedia -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kinesisvideo.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4d140f6c-ecbd-499a-9b4c-a4b942db749c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:47 GMT
  
  
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
  x-amzn-RequestId: a78337a3-594c-4022-b855-37eb3d35ea44
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:47 GMT
  
  
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
curl --insecure -i -X OPTIONS https://kms.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kms.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2c4a5592-d795-433d-bf37-ce32237ffc7d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: no-cache, no-store, must-revalidate, private
  Expires: 0
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Pragma: no-cache
  Access-Control-Max-Age: 172800
  Date: Thu, 12 Nov 2020 16:05:48 GMT
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
curl --insecure -i -X OPTIONS https://lakeformation.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lakeformation.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:05:49 GMT
  content-length: 0
  x-amzn-requestid: 227fb661-c74e-499a-94ea-33e61887d84b
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
  date: Thu, 12 Nov 2020 16:05:49 GMT
  content-length: 0
  x-amzn-requestid: 8ad3bd50-b348-48bc-938a-24304c1d1eec
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
  Date: Thu, 12 Nov 2020 16:05:49 GMT
  x-amzn-RequestId: e79f60c2-15eb-44c0-a4a0-77610f373f43
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
  x-amzn-requestid: 7e97b11f-95ab-4a5c-93ca-1a96a9a09a88
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: DELETE
  access-control-expose-headers: x-amz-lex-session-attributes,x-amz-lex-slots,x-amz-lex-dialog-state,Date,x-amz-lex-message,x-amz-lex-input-transcript,x-amzn-ErrorMessage,x-amz-lex-slot-to-elicit,x-amzn-RequestId,x-amzn-ErrorType,x-amz-lex-intent-name
  access-control-max-age: 172800
  date: Thu, 12 Nov 2020 16:05:50 GMT
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
curl --insecure -i -X OPTIONS https://license-manager.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: license-manager.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 8a6a60fd-df75-4664-a314-904c66172122
  Content-Length: 272
  Date: Thu, 12 Nov 2020 16:05:50 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   272  100   272    0     0    579      0 --:--:-- --:--:-- --:--:--   579
  
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
  Date: Thu, 12 Nov 2020 16:05:51 GMT
  Content-Length: 114
  Connection: keep-alive
  x-amzn-RequestId: dd541615-cf45-4a24-947d-2e301a3fbc1d
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   114  100   114    0     0    243      0 --:--:-- --:--:-- --:--:--   243
  
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
  x-amzn-RequestId: d6d95f2f-9f56-47ee-8e64-fbf89050ef63
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:52 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:05:53 GMT
  content-length: 127
  x-amzn-requestid: dcde0659-802b-445e-8ad7-8b70ce60133b
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    168      0 --:--:-- --:--:-- --:--:--   167
  
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
  date: Thu, 12 Nov 2020 16:05:53 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 1bea0b55-775b-41a0-bba9-fab6e33d8ac5
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uHUHNHIAMFy-g=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    148      0 --:--:-- --:--:-- --:--:--   148
  
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
  date: Thu, 12 Nov 2020 16:05:54 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 82b4d4a6-0775-4212-b608-13d690930249
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uHZEq7IAMF20A=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    150      0 --:--:-- --:--:-- --:--:--   150
  
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
  Date: Thu, 12 Nov 2020 16:05:54 GMT
  x-amzn-RequestId: 913c3849-409b-457a-a7a1-c8684f7e138f
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
  x-amzn-RequestId: f68b9efa-c7f8-446e-9746-c6f9e5282571
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:05:54 GMT
  
  
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
  x-amzn-RequestId: 8253947b-d286-43d3-994f-edd11d5eb817
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:05:55 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    269      0 --:--:-- --:--:-- --:--:--   268
  
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
  x-amzn-RequestId: 94414d9a-d5e7-415c-aa51-48f0d748f3ae
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:05:56 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    265      0 --:--:-- --:--:-- --:--:--   265
  
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
  date: Thu, 12 Nov 2020 16:05:57 GMT
  x-amzn-requestid: 96b76098-52c0-4bf1-8034-dddaa155e929
  x-amzn-errortype: APIGatewayFailedToParseRequestError
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uHzGgbIAMF4Xw=
  x-amzn-trace-id: Root=1-5fad5d65-0c5be21f34afc6f645fc49f6
  x-cache: Error from cloudfront
  via: 1.1 aabff76d9515c67bc2758117b3e68446.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD66-C1
  x-amz-cf-id: PtEVPgNFq9oZRgJRtKZm35nVJmx4b03XJvG0n00diZYjDUWK-nhrmQ==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    151      0 --:--:-- --:--:-- --:--:--   151
  
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
  date: Thu, 12 Nov 2020 16:05:57 GMT
  x-amzn-requestid: da44ec07-1531-4f2e-b0de-2057d380f15b
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-User-Agent
  x-amz-apigw-id: V5uH4FcbIAMFjuw=
  access-control-allow-methods: OPTIONS,POST
  x-amzn-trace-id: Root=1-5fad5d65-342f889f4441a095633a3dc1
  x-cache: Miss from cloudfront
  via: 1.1 69e952c7b08727f752b5559b0b6d2109.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD66-C1
  x-amz-cf-id: dnkoRjTNJZ1VN3P8BGWnN7smtHQnbU8goOPkyJWfQTD52EbvPxLRKg==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     8  100     8    0     0     16      0 --:--:-- --:--:-- --:--:--    16
  
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
  date: Thu, 12 Nov 2020 16:05:58 GMT
  x-amzn-requestid: a8d54877-04ac-4cc6-8d14-e504c70f84e0
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uH-HqTIAMFcaw=
  x-cache: Error from cloudfront
  via: 1.1 a20436c6d109fe9002d093f519ad4399.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C2
  x-amz-cf-id: LsaE16IuB5jwdexgHVZIfvzdRxIEjX9vPgSG01loaLXaJjjTowcIdA==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    148      0 --:--:-- --:--:-- --:--:--   148
  
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
  date: Thu, 12 Nov 2020 16:05:58 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 0ab1641f-42c9-408a-8a4d-2945ecce9b38
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uIEGYuoAMFdJA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    153      0 --:--:-- --:--:-- --:--:--   153
  
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
  date: Thu, 12 Nov 2020 16:05:59 GMT
  x-amzn-requestid: 46f602ff-b505-4da7-a077-1aae099cdbbc
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uIJGgsIAMFXgQ=
  access-control-allow-methods: *
  x-cache: Miss from cloudfront
  via: 1.1 97971aa6c140e2dfc8adaee6c929eedc.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C3
  x-amz-cf-id: aea7kDud-EHxmPAdkdRW8TjzQ05Ld5ru-5cXRIVlGMiYd7MgaFb9Fg==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0      6      0 --:--:-- --:--:-- --:--:--     6
  
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
  Date: Thu, 12 Nov 2020 16:05:59 GMT
  x-amzn-RequestId: C2R75SYCDSULXPFO27DDUFOZULEHU6FARBBMIMJVTX6PEU3GDS7QKCBQRGBJBW5ASNHXHOFQBFI4MWNLANNJYRY
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    261      0 --:--:-- --:--:-- --:--:--   262
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: data.mediastore.us-east-1.amazonaws.com
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
  date: Thu, 12 Nov 2020 16:06:00 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 13385362-a12e-4b2e-b6b0-1577aebf09a5
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uIVFy9IAMFU-A=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    152      0 --:--:-- --:--:-- --:--:--   152
  
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
  Date: Thu, 12 Nov 2020 16:06:01 GMT
  x-amzn-RequestId: 6c72f51a-53e0-476d-867e-50b04c10dc4f
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
  date: Thu, 12 Nov 2020 16:06:02 GMT
  content-length: 0
  x-amzn-requestid: 1b4267e7-d504-4e0b-bdd2-e3153a8ff329
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
  
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
  Date: Thu, 12 Nov 2020 16:06:01 GMT
  x-amzn-RequestId: 323468de-f9e4-45c0-956f-13f601395fe0
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
curl --insecure -i -X OPTIONS https://mq.us-east-1.amazonaws.com/v1/brokers -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mq.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Thu, 12 Nov 2020 16:06:03 GMT
  x-amzn-requestid: 46f7b646-2d3e-4a91-b31f-4fcc5dd6e829
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uIwGknIAMF-sg=
  x-amzn-trace-id: Root=1-5fad5d6b-274057af10de1dfe655358bf
  x-cache: Error from cloudfront
  via: 1.1 d203e374ba383a11f7beaf8a1353c661.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD66-C2
  x-amz-cf-id: fwAnFXZYM2p9tTYaZbgiVn_QHvCh1Pc68Fp5Dwu-0E7JxvyzaDSoeg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    155      0 --:--:-- --:--:-- --:--:--   154
  
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
  x-amzn-RequestId: 47f2c9ff-f62a-4679-b460-3cbc1a6e694c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:03 GMT
  
  
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
  x-amzn-RequestId: 0206e50b-6f8f-4326-a3f2-e362b480db0f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:03 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:06:04 GMT
  x-amzn-RequestId: c1ab9a15-6f7c-4112-b19e-a19aeb5e5365
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
  x-amzn-RequestId: 24509adb-403f-4828-9027-879f725bf001
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:05 GMT
  
  
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
curl --insecure -i -X OPTIONS https://organizations.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: organizations.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 16a3c686-5224-49ca-a4eb-619604e6b643
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:05 GMT
  
  
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
curl --insecure -i -X OPTIONS https://outposts.us-east-1.amazonaws.com/outposts -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: outposts.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:06:06 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f6b4c033-1459-41f0-851c-c0f881a987d4
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uJTH6qIAMFbug=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5fad5d6e-1f079be711b1ff6164ff7799
  
  
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
  Date: Thu, 12 Nov 2020 16:06:06 GMT
  x-amzn-RequestId: c365a8bb-175d-4790-8fe7-ba78dd666727
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
  Date: Thu, 12 Nov 2020 16:06:07 GMT
  x-amzn-RequestId: c6f90eeb-067d-4e08-b7a4-d356b593427b
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
  Date: Thu, 12 Nov 2020 16:06:07 GMT
  x-amzn-RequestId: 6dca08fe-2e48-4775-8682-44adde8a8ec7
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
  Date: Thu, 12 Nov 2020 16:06:07 GMT
  x-amzn-RequestId: e4303ebe-8b86-4aa2-8ae9-bb3263dc58f3
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
  Date: Thu, 12 Nov 2020 16:06:09 GMT
  x-amzn-RequestId: ff6ad540-ec75-4e31-997e-f5d20e931178
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uJuGBXIAMFmwA=
  Access-Control-Allow-Methods: POST,GET,OPTIONS
  X-Cache: Miss from cloudfront
  Via: 1.1 7c246f3a389d2701a9bf150d0e576cd0.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: IAD66-C1
  X-Amz-Cf-Id: d-1J4syJw9Xrr74EAVTV_QgwF5Op2JRrmFi4lApNfhR93cvcXB4d2w==
  
  
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
  x-amzn-RequestId: f45c4e9d-e618-4b1d-82a1-8578fc1caf92
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:09 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:06:10 GMT
  x-amzn-requestid: e86e5d1d-a538-42e0-aa7d-e2967e243b97
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: V5uJ5GMqIAMF20A=
  access-control-allow-methods: GET,POST,PUT,DELETE,OPTIONS
  x-cache: Miss from cloudfront
  via: 1.1 841dfa6074cf4b3b0718988f088a4ac2.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C1
  x-amz-cf-id: TC-qgzMKKb9-E1Jf7E6oj6B9-iLP0gmf4R69mXmJUIxTWAQlwrNpAw==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0      6      0 --:--:-- --:--:-- --:--:--     6
  
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
  x-amzn-RequestId: 3fe2307c-5fda-414a-b1d7-20bf787ed84d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:10 GMT
  
  
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
  x-amzn-RequestId: c2c0b336-aec2-4c0e-8891-442c4dbc0802
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:11 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:06:12 GMT
  x-amzn-requestid: ba471fe3-476a-4110-af8c-f59d4a205b70
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: V5uKKEsGIAMFccg=
  access-control-allow-methods: DELETE,GET
  x-amzn-trace-id: Root=1-5fad5d74-7a95dc8a3125c0b73774d2a9
  x-cache: Miss from cloudfront
  via: 1.1 fb41e17254dfd781519e95cedd257827.cloudfront.net (CloudFront)
  x-amz-cf-pop: IAD89-C3
  x-amz-cf-id: N3Swlj9izB-L7pz8B_K5eReBgZ5jIVFJcfuWEIVPMjz-82k2G0kRPg==
  
  
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
  x-amzn-RequestId: IyNXmjC6UcE4tpjgcsYsnc
  Date: Thu, 12 Nov 2020 16:06:12 GMT
  Content-Length: 19
  
  <InternalFailure/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    19  100    19    0     0     40      0 --:--:-- --:--:-- --:--:--    40
  
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
  date: Thu, 12 Nov 2020 16:06:13 GMT
  content-length: 127
  x-amzn-requestid: 08379cd0-27b4-4303-8c89-044a83de4667
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    262      0 --:--:-- --:--:-- --:--:--   261
  
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
  date: Thu, 12 Nov 2020 16:06:13 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 5ff38533-e7e9-4429-9458-8a052767f7df
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uKbEJRIAMFsvw=
  x-amzn-trace-id: Root=1-5fad5d75-0236e84c77fee0c37e694278
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    152      0 --:--:-- --:--:-- --:--:--   152
  
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
  x-amzn-RequestId: e3f0c722-406f-425e-a161-1c4f193eabac
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:13 GMT
  
  
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
  x-amzn-RequestId: 5aa3d918-6749-4136-ac92-435616020cf0
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:06:14 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    260      0 --:--:-- --:--:-- --:--:--   260100   127  100   127    0     0    260      0 --:--:-- --:--:-- --:--:--   260
  
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
  x-amzn-RequestId: 7da85ebc-310e-4725-b755-fbb11bffc279
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:15 GMT
  
  
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
curl --insecure -i -X OPTIONS https://redshift-data.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: redshift-data.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 15229b8d-91ab-4e71-b082-fc3c585284c3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:16 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:06:16 GMT
  x-amzn-RequestId: 7ed06871-6245-45b4-a05c-919cf4be0e59
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
curl --insecure -i -X OPTIONS https://resource-groups.us-east-1.amazonaws.com/groups -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: resource-groups.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:06:17 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f36826e7-a447-485d-97b8-10e178ab6ece
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uK-GkqIAMF0zQ=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5fad5d79-49a40032180f012226c108bf
  
  
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
  x-amzn-RequestId: 4adc4a93-79ef-48bd-9cb3-ded5696c778c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:17 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:06:18 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 4cb2297f-5870-4382-a414-f5e2d811c079
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uLKEvsoAMF_gw=
  x-amzn-trace-id: Root=1-5fad5d7a-63e9f6af1f533ffb5f9de574
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    136      0 --:--:-- --:--:-- --:--:--   136
  
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
  x-amzn-RequestId: e536e339-5812-4c74-993f-bf278b7cc68d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:18 GMT
  
  
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
  x-amzn-RequestId: 4f206529-00e6-4549-a827-96919e565bdf
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:19 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:06:20 GMT
  content-length: 0
  x-amzn-requestid: 7d437a41-5dcb-4058-a23a-ac19cbe2cd39
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
  x-amz-request-id: BFA0808623E02DC5
  x-amz-id-2: RkRm8QMPaDH/KgWklHxkohw4oBelg0HHGrErQYXIgHhaqeX165tmc0MsUKhLWWH9/rg/9dXDNq4=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Thu, 12 Nov 2020 16:06:20 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <Error><Code>AccessForbidden</Code><Message>CORSResponse: Bucket not found</Message><Method>DELETE</Method><ResourceType>BUCKET</ResourceType><RequestId>BFA0808623E02DC5</RequestId><HostId>RkRm8QMPaDH/KgWklHxkohw4oBelg0HHGrErQYXIgHhaqeX165tmc0MsUKhLWWH9/rg/9dXDNq4=</HostId></Error>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   321    0   321    0     0    660      0 --:--:-- --:--:-- --:--:--   659
  
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
  x-amz-request-id: AK3Z4WEY2TCX0Y5T
  x-amz-id-2: XcOtfYMBCsQDTRU7/AKVj6j1CCOFIbp6TprtByNwg6B+iDRjPtKbIywwtJePD1Daz7DBtNB9jBM=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Thu, 12 Nov 2020 16:06:20 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <ErrorResponse><Error><Code>AccessDenied</Code><Message>Access Denied</Message><AccountId>stringvalue</AccountId></Error><RequestId>AK3Z4WEY2TCX0Y5T</RequestId><HostId>XcOtfYMBCsQDTRU7/AKVj6j1CCOFIbp6TprtByNwg6B+iDRjPtKbIywwtJePD1Daz7DBtNB9jBM=</HostId></ErrorResponse>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   308    0   308    0     0    609      0 --:--:-- --:--:-- --:--:--   609
  
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
  x-amzn-RequestId: 3e4f76bf-b703-4cc8-9aa0-19547c343372
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Thu, 12 Nov 2020 16:06:22 GMT
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
  x-amzn-RequestId: 79499d14-3127-41ff-8ab1-b5805cd99e27
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:21 GMT
  
  
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
curl --insecure -i -X OPTIONS https://a2i-runtime.sagemaker.us-east-1.amazonaws.com/human-loops/stringvalue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: a2i-runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Thu, 12 Nov 2020 16:06:23 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 9e6361f6-821b-44fa-9b5b-22468773f5a1
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: V5uL7Hh1oAMFhDg=
  access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
  x-amzn-trace-id: Root=1-5fad5d7f-750fc337491e13377a31b18a
  
  {}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      4      0 --:--:-- --:--:-- --:--:--     4
  
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
  x-amzn-RequestId: c191f37b-d9ab-435e-9bed-29f6262b2274
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-Amzn-Invoked-Production-Variant,x-amzn-RequestId,x-amzn-ErrorType,X-Amzn-SageMaker-Custom-Attributes,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Thu, 12 Nov 2020 16:06:23 GMT
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
  date: Thu, 12 Nov 2020 16:06:24 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 58f92ebd-3860-4eea-a571-9ee6ad1cf969
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uMGEu1IAMF7Gw=
  x-amzn-trace-id: Root=1-5fad5d80-4f5054a028da070b77f9c275
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    146      0 --:--:-- --:--:-- --:--:--   146
  
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
  date: Thu, 12 Nov 2020 16:06:25 GMT
  content-type: application/json
  content-length: 113
  x-amzn-requestid: 8b15cc7a-fb38-4126-b043-c288ce7f0bf1
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uMMG0xoAMFRXw=
  x-amzn-trace-id: Root=1-5fad5d81-6ab2c2326ab08abf7e88aaf6
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   113  100   113    0     0    226      0 --:--:-- --:--:-- --:--:--   226
  
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
  date: Thu, 12 Nov 2020 16:06:25 GMT
  content-length: 0
  x-amzn-requestid: 8c98e6ff-5699-4663-a1a3-b6a740f31a3a
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
  date: Thu, 12 Nov 2020 16:06:26 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 1172029e-4cd7-4e3d-a976-96f898032cf0
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uMXHhzoAMFiyw=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    143      0 --:--:-- --:--:-- --:--:--   142
  
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
  date: Thu, 12 Nov 2020 16:06:27 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 497842ff-e7b8-42d7-8dd5-ab40f5cd5ac5
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uMfHvKoAMF8DA=
  x-amzn-trace-id: Root=1-5fad5d83-03da14b0631ff9fa19149a55
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0     96      0 --:--:-- --:--:-- --:--:--    96
  
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
  x-amzn-RequestId: c9116c98-eca9-4a7b-a770-d5419b2a0c05
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:26 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:06:28 GMT
  content-length: 0
  x-amzn-requestid: 6fcc311d-ef00-4d69-9bb7-68e610fa122d
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
  Date: Thu, 12 Nov 2020 16:06:28 GMT
  x-amzn-RequestId: 619c748f-f167-4038-954d-6b5fbb318e9b
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
  x-amzn-RequestId: 57bcf2e4-6471-4b63-8fe5-d630d5c4a005
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:28 GMT
  
  
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
  x-amzn-RequestId: a8d8c644-52c6-4363-8ffb-9165aabf2c66
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:29 GMT
  
  
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
curl --insecure -i -X OPTIONS https://states.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: states.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: e053b5fe-893f-4e46-bb02-f8ef88557a2f
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     59      0 --:--:-- --:--:-- --:--:--    59
  
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
  x-amzn-RequestId: ce607867-6e59-4d59-9fb5-8dad29a390a3
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:06:31 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    249      0 --:--:-- --:--:-- --:--:--   248
  
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
  date: Thu, 12 Nov 2020 16:06:31 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: bae3c985-21da-40d6-ab61-42dde28d1cba
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: V5uNOHqkIAMFUyQ=
  access-control-allow-methods: DELETE,GET,PUT
  x-amzn-trace-id: Root=1-5fad5d87-2e765cb0200cd2493c630bdf
  
  
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
  x-amzn-RequestId: e7a6327c-75fd-4a58-9605-6631c7c759af
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:06:31 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    234      0 --:--:-- --:--:-- --:--:--   233
  
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
  x-amzn-RequestId: f2bfd77c-5722-497c-b245-364c15446efc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:33 GMT
  
  
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
  x-amzn-RequestId: 47f94fa7-eaff-51a2-b766-1780b536fb37
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:33 GMT
  
  
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
curl --insecure -i -X OPTIONS https://sqs.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: sqs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 702752d2-52af-5811-84ce-0af50d65e820
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Thu, 12 Nov 2020 16:06:34 GMT
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
  Date: Thu, 12 Nov 2020 16:06:35 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 4026512b-23f2-486f-8d7f-e1a5d0f9b7ba
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
  date: Thu, 12 Nov 2020 16:06:35 GMT
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   121  100   121    0     0    241      0 --:--:-- --:--:-- --:--:--   241
  
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
  date: Thu, 12 Nov 2020 16:06:36 GMT
  content-length: 0
  x-amzn-requestid: 268fdabf-88e8-4c5f-9a11-50ca3201edcd
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
  date: Thu, 12 Nov 2020 16:06:36 GMT
  content-length: 25
  x-amzn-requestid: 3dfaf0ca-12fc-4d7a-a0b1-3a9397295f53
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     47      0 --:--:-- --:--:-- --:--:--    47
  
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
  Date: Thu, 12 Nov 2020 16:06:37 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: c72046c4-6a80-4b3d-a436-f3336523cb7c
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
  x-amzn-RequestId: a4a24d20-47a3-4d8f-9748-ced73d86885c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:37 GMT
  
  
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
  x-amzn-RequestId: 1b401bbd-d775-44fe-b4c5-df26f9884272
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:06:37 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    252      0 --:--:-- --:--:-- --:--:--   252
  
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
  x-amzn-RequestId: db069aea-6e03-4836-a2ca-2f85d2527239
  Date: Thu, 12 Nov 2020 16:06:39 GMT
  Content-Length: 29
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     55      0 --:--:-- --:--:-- --:--:--    55
  
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
  date: Thu, 12 Nov 2020 16:06:39 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 39f0f5c8-d76a-40dc-9279-c59e51b9adf1
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uOdFgGoAMF-MQ=
  x-amzn-trace-id: Root=1-5fad5d8f-48c8f4b107f0012c63cd053c
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    146      0 --:--:-- --:--:-- --:--:--   146
  
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
  x-amzn-RequestId: 76580ac3-ff1b-4b3a-abfb-b002f26a47c3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:40 GMT
  
  
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
curl --insecure -i -X OPTIONS https://query.timestream.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: query.timestream.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 92a95ed7-09b9-48d8-ad6e-fecaa766fd34
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:40 GMT
  
  
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
curl --insecure -i -X OPTIONS https://ingest.timestream.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ingest.timestream.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 8312140d-39d2-4b31-b55f-e0c703dbf840
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:40 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:06:41 GMT
  x-amzn-RequestId: badbd102-8a87-4e5f-99fb-7a2721515585
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
  date: Thu, 12 Nov 2020 16:06:42 GMT
  content-length: 29
  x-amzn-requestid: cfc76983-1c29-4961-9667-3649347684a6
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     58      0 --:--:-- --:--:-- --:--:--    58
  
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
  x-amzn-RequestId: 8ab992ea-e7e4-4e53-9bba-7c310167c4d2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:42 GMT
  
  
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
  x-amzn-RequestId: d76df869-12bb-4310-a346-73955dbffd3c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:42 GMT
  
  
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
  x-amzn-RequestId: d6e15860-7828-49cf-97f4-fbde6d3454fb
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:44 GMT
  
  
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
  x-amzn-RequestId: 28535fbf-0b62-4f87-9a75-357577992b04
  Content-Length: 127
  Date: Thu, 12 Nov 2020 16:06:44 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    226      0 --:--:-- --:--:-- --:--:--   226
  
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
  x-amzn-RequestId: a6a88b8d-6632-4686-9d0c-d7e3f10a14f9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: private, no-cache, no-store, max-age=0
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Server-ResponseTime-Millis: 1
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:44 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:06:46 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: ef751b87-b044-4b64-9476-2750d44ae529
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: V5uPeEH5oAMFaNA=
  x-amzn-trace-id: Root=1-5fad5d96-42817495042bc3d73f3e6e7c
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    136      0 --:--:-- --:--:-- --:--:--   136
  
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
  x-amzn-RequestId: e7540f9f-b1bf-47f1-a691-8adde7d80b40
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:46 GMT
  
  
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
  Date: Thu, 12 Nov 2020 16:06:47 GMT
  x-amzn-RequestId: 3293ee2f-276b-45c1-9b71-08aedb3858e6
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    224      0 --:--:-- --:--:-- --:--:--   224
  
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
  x-amzn-RequestId: 67c98b41-f7ce-4833-b92e-432a9c686d34
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Thu, 12 Nov 2020 16:06:48 GMT
  
  
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
  date: Thu, 12 Nov 2020 16:06:48 GMT
  content-length: 0
  x-amzn-requestid: d4636ac5-571c-4050-8983-599eaee0f33c
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
