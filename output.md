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
      <td>❌ </td>
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
  date: Fri, 02 Oct 2020 15:44:19 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 80d89617-7d5a-43f3-ae93-19da6d709717
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target
  x-amz-apigw-id: TyihAFviIAMFifw=
  access-control-allow-methods: GET,PUT
  x-amzn-trace-id: Root=1-5f774ad3-6619051c2c8c2e2d36fc574e
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
  x-amzn-RequestId: 8fd8b667-ec0e-48e0-a0e4-15bf87189aec
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:18 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:19 GMT
  content-length: 127
  x-amzn-requestid: 284a9fa8-368a-4da7-9803-f4c31c72f207
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    368      0 --:--:-- --:--:-- --:--:--   367
  
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
  date: Fri, 02 Oct 2020 15:44:20 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:20 GMT
  x-amzn-requestid: d3e92a38-2ff7-4a7c-8d08-cf9c2d3797fc
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyihPEPaoAMF5lg=
  x-cache: Error from cloudfront
  via: 1.1 7b29c68a44c475b0442c0aba0da476c8.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: gLHoGkH0GFk5JoCp2ykBFQwDATJuSfw_c4c0rZew5cc7ThKbIKo40g==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    257      0 --:--:-- --:--:-- --:--:--   257
  
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
  date: Fri, 02 Oct 2020 15:44:21 GMT
  content-length: 0
  x-amzn-requestid: d8efe42c-0694-401d-9696-c59b51999553
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amz-apigw-id: TyihTLCfIAMEbHg=
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
Command failed: curl --insecure -i -X OPTIONS https://execute-api.us-east-1.amazonaws.com/@connections/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: execute-api.us-east-1.amazonaws.com" 
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
  date: Fri, 02 Oct 2020 15:44:21 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 35176389-4bda-4218-b9ec-37887c2a8e4f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyihXGOZIAMFYaw=
  x-amzn-trace-id: Root=1-5f774ad5-2e8c15f25108c16459b49929
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    212      0 --:--:-- --:--:-- --:--:--   212
  
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
curl --insecure -i -X OPTIONS https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/stringValue/virtualGateway/stringValue/gatewayRoutes -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appmesh.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-requestid: 0c4950b0-6dd2-45d8-86e4-9b9aa661b3fb
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: PUT
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  content-length: 0
  date: Fri, 02 Oct 2020 15:44:21 GMT
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
  date: Fri, 02 Oct 2020 15:44:22 GMT
  content-length: 127
  x-amzn-requestid: dab71906-0cf5-466c-a73d-725ad2ec24b3
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    370      0 --:--:-- --:--:-- --:--:--   370
  
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
  x-amzn-RequestId: 2755db8f-eca8-4ee5-a8bd-ed9ef341879a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:21 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Fri, 02 Oct 2020 15:44:22 GMT
  x-amzn-RequestId: 692f1493-c748-41e6-b1f5-347341fb4898
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    368      0 --:--:-- --:--:-- --:--:--   367
  
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
  date: Fri, 02 Oct 2020 15:44:23 GMT
  content-length: 0
  x-amzn-requestid: a5d71816-f7d4-42fb-b131-65b75216c0c2
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
  x-amzn-RequestId: 1c0bf19c-bdb3-427c-b5b7-d9a132dd0a71
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:23 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://appsync.us-east-1.amazonaws.com/apis/stringValue/ApiCaches -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appsync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 23
  date: Fri, 02 Oct 2020 15:44:23 GMT
  x-amzn-requestid: 6304d639-8431-4188-8718-791c79c003b9
  x-amzn-errortype: ForbiddenException
  x-amz-apigw-id: TyihvFKyIAMFsAQ=
  x-cache: Error from cloudfront
  via: 1.1 26ca01ec7377e425b59b6a08cb1ec343.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: FjY-xiZ_Oc2emjcga1eigkbz3RRXzkrUHPMlORMlaEd1ZOr8WWNV7g==
  
  {"message":"Forbidden"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    23  100    23    0     0    182      0 --:--:-- --:--:-- --:--:--   181100    23  100    23    0     0    182      0 --:--:-- --:--:-- --:--:--   181
  
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
  Date: Fri, 02 Oct 2020 15:44:24 GMT
  x-amzn-RequestId: 7d49c761-582a-4096-85a4-b511b9496b49
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
  x-amzn-RequestId: fd1e9667-e48d-4fd7-b0d1-b12645d239d5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:24 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 0941edb2-7595-4818-b1a6-e5d40786e34b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:24 GMT
  
  
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
  Date: Fri, 2 Oct 2020 15:44:25 GMT
  x-amzn-RequestId: 224a7ced-2025-4df8-aed9-f835cc1c4df6
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    346      0 --:--:-- --:--:-- --:--:--   346
  
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
  date: Fri, 02 Oct 2020 15:44:25 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: ea2e0007-c7dd-4d28-9621-f4c9584a72c1
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyiiCFiQoAMF3wg=
  
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
curl --insecure -i -X OPTIONS https://braket.us-east-1.amazonaws.com/quantum-task/stringValue/cancel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: braket.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:26 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 8feb9bef-76b8-46d6-8b26-5df432266147
  access-control-allow-origin: *
  access-control-allow-headers: *,Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,content-type,x-amz-content-sha256,x-amz-user-agent,x-amzn-platform-id,x-amzn-trace-id
  x-amz-apigw-id: TyiiFGGWoAMFsBQ=
  access-control-allow-methods: PUT
  x-amzn-trace-id: Root=1-5f774ada-11ec22006a1c3f2c2ca6fe9a
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
  date: Fri, 02 Oct 2020 15:44:26 GMT
  content-length: 0
  x-amzn-requestid: b718a748-6f65-4c90-95a0-39387db62407
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
curl --insecure -i -X OPTIONS https://service.chime.aws.amazon.com/accounts/stringValue/users/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: service.chime.aws.amazon.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 48d79f4e-7f64-4219-9d05-5d95a3354c71
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:44:27 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    158      0 --:--:-- --:--:-- --:--:--   158
  
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
  date: Fri, 02 Oct 2020 15:44:27 GMT
  content-length: 0
  x-amzn-requestid: 9e20c6df-d456-4daf-9a42-9ca6dfc594db
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
  x-amzn-RequestId: aa5abca5-923e-43e8-b95c-1a6cbd9efa70
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Fri, 02 Oct 2020 15:44:27 GMT
  x-amzn-RequestId: aa5abca5-923e-43e8-b95c-1a6cbd9efa70
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
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
  x-amzn-RequestId: fe786c9b-9733-446e-821b-ded13948e7e6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:28 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: a2e15153-43a2-4440-84e1-527e633c9c24
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:28 GMT
  
  
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
  x-amzn-RequestId: bd8b136c-0681-484d-baa2-2ef57f010c2e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:29 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Fri, 02 Oct 2020 15:44:28 GMT
  x-amzn-RequestId: b919fae1-cf8f-4fea-afab-cbbf1d7ac755
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    370      0 --:--:-- --:--:-- --:--:--   370
  
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
  x-amzn-RequestId: abbdfe62-1749-4f1d-a6c1-cbbf492029ca
  Content-Length: 29
  Date: Fri, 02 Oct 2020 15:44:29 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     86      0 --:--:-- --:--:-- --:--:--    86
  
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
  x-amzn-RequestId: 851a27f6-6a9e-4f93-b86c-167179f7add2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:29 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 0f9ad39e-e74c-4344-a714-f7e97c654c40
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:30 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: d4f9ae38-3a51-49a1-8e2b-6d7c234afbec
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:30 GMT
  
  
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
  x-amzn-RequestId: f739e221-d02d-4042-9fcf-b179ed3784d6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:30 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:31 GMT
  content-length: 0
  x-amzn-requestid: 98b449ed-4867-42a4-ad47-9550f4aa63e4
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
  x-amzn-RequestId: 1d2086fe-6710-43a8-bded-39881d9232ef
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:31 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 63cc44ac-fd8f-484b-a71a-8bfd579e8ecc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:32 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: fada813d-c2bc-4059-aae8-95455f1767e4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 15:44:32 GMT
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
  date: Fri, 02 Oct 2020 15:44:33 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 9b9e2b9d-6076-41fa-8420-8204df5a9f54
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyijOEPuoAMFr6w=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f774ae1-33574187150bb48e32869477
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://codeguru-profiler.us-east-1.amazonaws.com/profilingGroups/stringValue/configureAgent -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeguru-profiler.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Fri, 02 Oct 2020 15:44:33 GMT
  x-amzn-requestid: 01ea76f3-d9ce-4628-90ce-48056fe04229
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,Date,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,X-Amz-User-Agent
  x-amz-apigw-id: TyijRE4HoAMFTVA=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f774ae1-68a3623b2ea69fdc420c6bef
  access-control-max-age: 600
  x-cache: Miss from cloudfront
  via: 1.1 98e601970ea59f4d5f56a752787ff9fc.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: qswBziBKcRjM8xlMq_gmUnZJhitSap9vZDEj3OK0CYTKgU_K3jNaFg==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: e4aa21fc-5371-4881-b80c-db762867204f
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
  x-amzn-RequestId: efa0de99-64c5-498d-a1d0-451f412c2a7a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:33 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:34 GMT
  content-length: 0
  x-amzn-requestid: 700f5c31-5e43-4b78-8f07-4fdffb4675d8
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
      <td>❌ </td>
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
  date: Fri, 02 Oct 2020 15:44:35 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: b996b9c7-8d37-490c-aa78-4658dd2de7c0
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyijgHnioAMF0Fw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f774ae3-4f21152a1c7a2dde56ce48bc
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:35 GMT
  content-length: 0
  x-amzn-requestid: 55eef80c-d98e-4495-a41d-2ca63dfee2c5
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
  date: Fri, 02 Oct 2020 15:44:35 GMT
  content-length: 0
  x-amzn-requestid: edaa7804-eaff-4001-8fd8-de5d491daa86
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
curl --insecure -i -X OPTIONS https://cognito-sync.us-east-1.amazonaws.com/identitypools/stringValue/bulkpublish -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cognito-sync.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:36 GMT
  content-length: 0
  x-amzn-requestid: 7cd44b89-e15c-4294-8821-371b76940393
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
  x-amzn-RequestId: 895f2d64-a04c-4889-9ec3-b3757575c519
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:36 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: e936fd89-c876-49bc-8f3e-dcf01a7c918e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:36 GMT
  
  
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
  date: Fri, 02 Oct 2020 15:44:37 GMT
  content-length: 272
  x-amzn-requestid: af006aa6-2f7f-4656-89e8-b814ec32579a
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   272  100   272    0     0    790      0 --:--:-- --:--:-- --:--:--   790
  
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
  x-amzn-RequestId: 1c2d85be-d697-4381-af8c-2c07ecdfb92d
  Access-Control-Allow-Origin: *
  Strict-Transport-Security: max-age=86400
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:37 GMT
  
  
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
curl --insecure -i -X OPTIONS https://connect.us-east-1.amazonaws.com/users/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:38 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 70933e08-09f9-48f6-b3c5-4d787156bac0
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Tyij-FXuIAMF-aA=
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
  date: Fri, 02 Oct 2020 15:44:38 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 35d5faff-e450-456b-aeca-706e20d20081
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,X-Amz-Bearer
  x-amz-apigw-id: TyikCG8WoAMFssw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f774ae6-37c04a6615ef36dd50e6f003
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://cur.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cur.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: a6e1c557-63b3-4b76-9aae-c9347f65893d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:38 GMT
  
  
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
curl --insecure -i -X OPTIONS https://ce.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ce.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:39 GMT
  content-length: 0
  x-amzn-requestid: 6c62e3ce-e176-4666-ad78-b937a14d9162
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
  x-amzn-RequestId: 36c98a8f-37bd-4c93-9f44-bdc61dd3f691
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:38 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 32d814b3-af19-4575-bc15-80ccac52ceed
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:39 GMT
  
  
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
curl --insecure -i -X OPTIONS https://dataexchange.us-east-1.amazonaws.com/v1/jobs/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dataexchange.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 15:44:40 GMT
  x-amzn-requestid: 3d9b9e2d-0b3d-4949-88bf-79a37b903bb9
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyikSG6tIAMFljg=
  x-amzn-trace-id: Root=1-5f774ae8-a376b6dc6d2dc31fc03e28a7
  x-cache: Error from cloudfront
  via: 1.1 2a02ac7e0927ff4d681c73fb791a7755.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: YGFMdpVSpeIwTlROKi1yEmAPfTeB_j2ZYgQfub4IDIXtOOEP9yiplw==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    608      0 --:--:-- --:--:-- --:--:--   608
  
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
  date: Fri, 02 Oct 2020 15:44:40 GMT
  content-length: 127
  x-amzn-requestid: b7fe2563-9b3f-43e5-bf85-e0a02e5f657f
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    368      0 --:--:-- --:--:-- --:--:--   368
  
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
  x-amzn-RequestId: cbc94e56-915c-4a9d-ae99-c4001a02911c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:41 GMT
  
  
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
  Date: Fri, 02 Oct 2020 15:44:41 GMT
  x-amzn-RequestId: dd864d8d-7d05-4d26-be27-e79b46f25977
  x-amzn-ErrorType: AccessDeniedException
  x-amz-apigw-id: TyikiFlroAMFt2Q=
  X-Amzn-Trace-Id: Root=1-5f774ae9-2016e8e71dcc91b205c34c2b
  X-Cache: Error from cloudfront
  Via: 1.1 1b0911478686968732f973d6e5e31d11.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: Gw6C8Da47Pd31ZcFIQI9MImIFGJnyWzrbl7YEKhrsDfMk82yEG4xDQ==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    195      0 --:--:-- --:--:-- --:--:--   196
  
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
  x-amzn-RequestId: 89ab50eb-4388-4adf-b3df-46e0fdffca5b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:42 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 7c707885-be1c-4773-827e-bd38e5f5ae9f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:41 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:42 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 0b92844b-262f-4a78-baf7-ed7550c38fed
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyikuFSbIAMF_OQ=
  x-amzn-trace-id: Root=1-5f774aea-58b1cd790f00af140f36baf8
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    210      0 --:--:-- --:--:-- --:--:--   209
  
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
  x-amzn-RequestId: 5d77746e-d0a1-49f8-9b8b-93a985e69745
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:42 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Fri, 02 Oct 2020 15:44:43 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 2JLBGEGBPUPIGPFVK5DMOEBCTRVV4KQNSO5AEMVJF66Q9ASUAAJG
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
  Date: Fri, 02 Oct 2020 15:44:43 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: USQPAOE8LJ0PTCSG9UNNHKTR0NVV4KQNSO5AEMVJF66Q9ASUAAJG
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
curl --insecure -i -X OPTIONS https://ebs.us-east-1.amazonaws.com/snapshots/completion/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,x-amz-ChangedBlocksCount,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ebs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 9abd136c-5a89-4af3-a4dd-9ef0dd36c3a6
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:44:44 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    362      0 --:--:-- --:--:-- --:--:--   363
  
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
  Date: Fri, 02 Oct 2020 15:44:44 GMT
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
  x-amzn-RequestId: 09471f37-2560-4e4f-8f7b-53477248ecdb
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:44:44 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    359      0 --:--:-- --:--:-- --:--:--   359
  
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
  x-amzn-RequestId: a7c7a497-612d-498c-9e36-ab578812ffe3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 15:44:45 GMT
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
  x-amzn-RequestId: f14e2073-eb89-4a98-bddf-57f239819675
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:45 GMT
  
  
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
  x-amzn-RequestId: 583de591-c8bd-4695-8124-524cc6784bc1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:46 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:46 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a82aa51a-a24c-41ed-98a7-0e713e429df8
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyilVGgzIAMF-sg=
  x-amzn-trace-id: Root=1-5f774aee-7cacea2b3023b062138c31f4
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    212      0 --:--:-- --:--:-- --:--:--   212
  
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
  Date: Fri, 02 Oct 2020 15:44:47 GMT
  x-amzn-RequestId: 52ba58dd-eafe-4cc1-b38a-b9d9b453ea97
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
      <td>❌ </td>
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
  date: Fri, 02 Oct 2020 15:44:47 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 15294abc-1fa8-4d2a-bebb-a1adde72fb07
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyildFAioAMF-Wg=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f774aef-3eee9cf439c7cb4325a3cbbc
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 5d1769bb-f527-43b5-acf8-d953f19a3b1f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:47 GMT
  
  
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
  x-amzn-RequestId: aa7318ab-8ee1-4586-a2b1-80090b5b5382
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:47 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
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
curl --insecure -i -X OPTIONS https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobs/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: elastictranscoder.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 98dea3bb-486f-462b-8262-7333125a2215
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:48 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: d372554b-baf1-44da-a5b4-a890b0d85ab3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:48 GMT
  
  
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
curl --insecure -i -X OPTIONS https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/stringValue/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: es.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 077d4e3c-c0d5-4118-a12b-5ba15b05fae3
  Content-Length: 29
  Date: Fri, 02 Oct 2020 15:44:49 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     85      0 --:--:-- --:--:-- --:--:--    85
  
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
  x-amzn-RequestId: 8d3488bf-bd2f-434e-a460-f20794b4ed07
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:49 GMT
  
  
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
  x-amzn-RequestId: 9a29d28e-df6d-4c29-97cd-c828484be0b4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:49 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: dcc4ddad-8eb5-39ec-8b35-909fb141a576
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:49 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: edee026e-d693-4adc-b8b1-e05826f92819
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:44:50 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    367      0 --:--:-- --:--:-- --:--:--   365
  
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
  Date: Fri, 02 Oct 2020 15:44:50 GMT
  x-amzn-RequestId: a9c86c62-bfe5-4087-b7d8-7511078b8b56
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
  Date: Fri, 02 Oct 2020 15:44:51 GMT
  x-amzn-RequestId: 6309b500-fe67-4d8d-9fdf-27486505558b
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
  date: Fri, 02 Oct 2020 15:44:52 GMT
  content-length: 0
  x-amzn-requestid: 0e3206c8-9ffb-440b-9e3f-c90fca8fd6e2
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
  date: Fri, 02 Oct 2020 15:44:52 GMT
  content-length: 0
  x-amzn-requestid: cf9f05d1-87ff-46cc-9198-42d7dbacb367
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
  x-amzn-RequestId: 1e1d68d2-3630-477d-b69f-5d2d3f1b3943
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:51 GMT
  
  
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
curl --insecure -i -X OPTIONS https://glacier.us-east-1.amazonaws.com/stringValue/vaults/stringValue/multipart-uploads/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,x-amz-glacier-version,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: glacier.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 400 Bad Request
  x-amzn-RequestId: ewwY4lqAIBw67as6ToCofg5ooc5SW7w27-LRHqcpjnGaFg8
  Content-Length: 109
  Date: Fri, 02 Oct 2020 15:44:52 GMT
  Connection: close
  
  {"code":"MissingParameterValueException","message":"Required parameter missing: API version","type":"Client"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   109  100   109    0     0    316      0 --:--:-- --:--:-- --:--:--   316
  
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
  date: Fri, 02 Oct 2020 15:44:53 GMT
  content-length: 0
  x-amzn-requestid: aabdb20b-77c0-4dac-be45-a49a2bc1bb77
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
curl --insecure -i -X OPTIONS https://greengrass.us-east-1.amazonaws.com/greengrass/groups/stringValue/role -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: greengrass.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:44:54 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a77a47ea-69de-430b-aa95-5b7081a94ca3
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyimdEa7IAMF6-g=
  x-amzn-trace-id: Root=1-5f774af6-78c417ae2f295c2232b31026
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    211      0 --:--:-- --:--:-- --:--:--   210
  
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
Command failed: curl --insecure -i -X OPTIONS https://groundstation.us-east-1.amazonaws.com/contact/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: groundstation.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://guardduty.us-east-1.amazonaws.com/detector/stringValue/master -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: guardduty.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:44:54 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a0dfb5f7-0c73-40e2-b3a0-9d9011f308fc
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyimiFhNoAMF8zA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    179      0 --:--:-- --:--:-- --:--:--   179
  
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
  Date: Fri, 02 Oct 2020 15:44:54 GMT
  
  
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
  x-amzn-RequestId: 00c8fd96-fd88-4802-8b86-fa7c4949d052
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:55 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:55 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 5583d86f-0733-4017-83dd-4b558decdcba
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyimvG6MoAMFwYQ=
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
  x-amzn-RequestId: 81cd2e0b-f185-4b71-b565-ea28a424172e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:55 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://iot.us-east-1.amazonaws.com/accept-certificate-transfer/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PATCH" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:56 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 9dd935a4-a693-4559-805c-83c304cf1d8f
  access-control-allow-origin: *
  access-control-allow-headers: Authorization, X-Amz-Date, X-Amz-Security-Token, x-amzn-iot-principal, X-Amz-Content-Sha256, X-Amz-User-Agent, Content-Type, x-amzn-principal
  x-amz-apigw-id: Tyim3EGjIAMFhcw=
  access-control-allow-methods: OPTIONS, GET, HEAD, POST, PUT, PATCH, DELETE
  
  {}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      5      0 --:--:-- --:--:-- --:--:--     5
  
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
Command failed: curl --insecure -i -X OPTIONS https://devices.iot1click.us-east-1.amazonaws.com/claims/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devices.iot1click.us-east-1.amazonaws.com" 
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
      <td>❌ </td>
    </tr>
    <tr>
      <td colspan="4">
<details><summary>Details</summary>

<strong>cmd</strong>
<pre>
<code>
curl --insecure -i -X OPTIONS https://projects.iot1click.us-east-1.amazonaws.com/projects/stringValue/placements/stringValue/devices/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: projects.iot1click.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:57 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f62c3d60-1954-4813-ab16-3a61fa031416
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Tyim7HtBoAMFy9w=
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
curl --insecure -i -X OPTIONS https://data.iot.us-east-1.amazonaws.com/things/stringValue/shadow -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.iot.us-east-1.amazonaws.com" 
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
  date: "Fri, 2 Oct 2020 15:44:57 GMT"
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:44:57 GMT
  content-length: 0
  x-amzn-requestid: 9cb2e1ed-8a8c-4a50-b46f-de9dc87ae6c8
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
curl --insecure -i -X OPTIONS https://data.iotevents.us-east-1.amazonaws.com/inputs/messages -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.iotevents.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:58 GMT
  content-length: 0
  x-amzn-requestid: fe7f2d70-32c9-47df-b892-739ad39e7029
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
curl --insecure -i -X OPTIONS https://data.jobs.iot.us-east-1.amazonaws.com/things/stringValue/jobs/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.jobs.iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 912cf7ad-7d8e-4349-8505-3a8e7ff0735a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: GET
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:44:57 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://iotanalytics.us-east-1.amazonaws.com/messages/batch -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: iotanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:58 GMT
  content-length: 0
  x-amzn-requestid: cff6c15d-8c35-437d-9145-8a5accde6e5e
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
curl --insecure -i -X OPTIONS https://api.tunneling.iot.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.tunneling.iot.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:44:59 GMT
  content-length: 25
  x-amzn-requestid: 72c72427-54be-41cd-b056-310763d9fbf9
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     71      0 --:--:-- --:--:-- --:--:--    71
  
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
curl --insecure -i -X OPTIONS https://model.iotsitewise.us-east-1.amazonaws.com/assets/stringValue/associate -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: model.iotsitewise.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:44:59 GMT
  content-length: 0
  x-amzn-requestid: 7e2b9d2a-98c2-4bfc-b0e8-a93c8909264f
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
  date: Fri, 02 Oct 2020 15:45:00 GMT
  content-length: 130
  x-amzn-requestid: 7d5366fb-eab3-4842-a633-562619d9a49a
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   130  100   130    0     0    380      0 --:--:-- --:--:-- --:--:--   380
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>ivs.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://ivs.us-east-1.amazonaws.com/BatchGetChannel -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ivs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Fri, 02 Oct 2020 15:45:00 GMT
  x-amzn-requestid: 51c3fa1d-05e4-4652-bee0-6c754e0b635c
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyincE93oAMFzbg=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f774afc-50f712f4609be25b5fe3f158
  x-cache: Miss from cloudfront
  via: 1.1 95b0ac620fa3a80ee590ecf1cda1c698.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: 4f5D3l7Bh-YwdHKdjcc_IidLzriEmNPhjW3VNYfIoi5n-QvqdTWuOQ==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://kafka.us-east-1.amazonaws.com/v1/clusters -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: kafka.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 15:45:00 GMT
  x-amzn-requestid: 175b376c-fd7f-45c2-90ef-ed090d1ac992
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyingH33oAMFpWA=
  x-amzn-trace-id: Root=1-5f774afc-eca02adab7cfb1c49e054d80
  x-cache: Error from cloudfront
  via: 1.1 c9cb74549b807d498500f04e1d4b8c7d.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: 2tW4-siaKbMQ9qViBAeNmPThY6IPF4T9ucGcIXSV8HSbUNpUtvR0jA==
  
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
  x-amzn-RequestId: f39916a1-b7f1-4e4e-980d-3eb9b84eba9b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:01 GMT
  
  
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
  x-amzn-RequestId: d4df7e04-fc82-1856-832e-333945782343
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 15:45:01 GMT
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
  x-amzn-RequestId: 7a611f27-2300-4dba-a536-48a562804fa6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:01 GMT
  
  
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
  x-amzn-RequestId: e4d181dd-6f96-461a-b596-cc08138550cb
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:02 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: dbd241dd-9f59-4d4b-8735-acd6d208a349
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:02 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: cfc27c94-73a6-43c3-a5a5-6b77065b0f1b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:02 GMT
  
  
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
  x-amzn-RequestId: 7e52e864-a259-46ec-9bd7-e5d7916f6c58
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:02 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 88b9ce0b-848a-40df-9fe6-bacb6c733f08
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:03 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: bec67a63-7977-4758-be48-79aa6717e160
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: no-cache, no-store, must-revalidate, private
  Expires: 0
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Pragma: no-cache
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 15:45:04 GMT
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
  date: Fri, 02 Oct 2020 15:45:04 GMT
  content-length: 0
  x-amzn-requestid: e7d132af-6062-4af5-8e7c-4b3f69b96bb4
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
curl --insecure -i -X OPTIONS https://lambda.us-east-1.amazonaws.com/2018-10-31/layers/stringValue/versions/stringValue/policy -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: lambda.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:45:04 GMT
  content-length: 0
  x-amzn-requestid: f0063b1b-c670-4695-a1f9-1bc4d839da79
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
curl --insecure -i -X OPTIONS https://models.lex.us-east-1.amazonaws.com/bots/stringValue/versions -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: models.lex.us-east-1.amazonaws.com" 
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
  Date: Fri, 02 Oct 2020 15:45:04 GMT
  x-amzn-RequestId: 866ab4f2-c092-4ff7-83a3-9f5a47fca7a6
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
curl --insecure -i -X OPTIONS https://runtime.lex.us-east-1.amazonaws.com/bot/stringValue/alias/stringValue/user/stringValue/session -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.lex.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  x-amzn-requestid: 16866ab6-7ab9-4ff5-bab3-d00a2ccc2b58
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: DELETE
  access-control-expose-headers: x-amz-lex-session-attributes,x-amz-lex-slots,x-amz-lex-dialog-state,Date,x-amz-lex-message,x-amz-lex-input-transcript,x-amzn-ErrorMessage,x-amz-lex-slot-to-elicit,x-amzn-RequestId,x-amzn-ErrorType,x-amz-lex-intent-name
  access-control-max-age: 172800
  date: Fri, 2 Oct 2020 15:45:05 GMT
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
  x-amzn-RequestId: 412227a7-2e98-4f9f-9b07-78b1a53c7bbb
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:05 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    355      0 --:--:-- --:--:-- --:--:--   354
  
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
  Date: Fri, 02 Oct 2020 15:45:06 GMT
  Content-Length: 114
  Connection: keep-alive
  x-amzn-RequestId: 7050179b-4018-417a-ad50-ca2d2380b8fd
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   114  100   114    0     0    334      0 --:--:-- --:--:-- --:--:--   334
  
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
  x-amzn-RequestId: 36dce297-87e8-424b-a6ec-7ee3c61905fa
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:06 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:45:07 GMT
  content-length: 127
  x-amzn-requestid: a65d826e-c11e-40da-a5bb-9688ceeb4839
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    375      0 --:--:-- --:--:-- --:--:--   374
  
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
  date: Fri, 02 Oct 2020 15:45:07 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 2b0ba991-1b88-4dfe-9a86-3db0e97a4020
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyiojGBQIAMFd7Q=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    209      0 --:--:-- --:--:-- --:--:--   209
  
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
curl --insecure -i -X OPTIONS https://managedblockchain.us-east-1.amazonaws.com/networks/stringValue/members -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: managedblockchain.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:45:07 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 43b0c5f1-3b70-45df-826c-f8c98753a861
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyionHs6oAMFRSA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    196      0 --:--:-- --:--:-- --:--:--   196
  
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
  Date: Fri, 02 Oct 2020 15:45:08 GMT
  x-amzn-RequestId: b1c62679-84bb-4ab8-bd7e-94b77061d3be
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
curl --insecure -i -X OPTIONS https://marketplacecommerceanalytics.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: marketplacecommerceanalytics.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200
  x-amzn-RequestId: 81fa7d8f-7e85-49d2-bb05-39112900a17e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:08 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: e80616cc-ead7-45c4-9448-fe78b5a9d2ad
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:08 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    370      0 --:--:-- --:--:-- --:--:--   369
  
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
  x-amzn-RequestId: 94daef4c-d56b-4230-b708-d9ef7adc3f65
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:09 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    341      0 --:--:-- --:--:-- --:--:--   341
  
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
curl --insecure -i -X OPTIONS https://mediaconnect.us-east-1.amazonaws.com/v1/flows/stringValue/outputs -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediaconnect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 15:45:09 GMT
  x-amzn-requestid: ef4efe06-07f9-4b62-b9bc-e6432d0fc44b
  x-amzn-errortype: APIGatewayFailedToParseRequestError
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Tyio3H31oAMFbzw=
  x-amzn-trace-id: Root=1-5f774b05-37ae895f4cf540bf5198a9a4
  x-cache: Error from cloudfront
  via: 1.1 98b030ba90f9fb8f8b176298ebb3ab79.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: hhp7S3n45hi9Jsrn9eHYSOU9XPXnYboZpjz7FpyStmyw8K1qJMkjiw==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    613      0 --:--:-- --:--:-- --:--:--   613
  
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
  date: Fri, 02 Oct 2020 15:45:09 GMT
  x-amzn-requestid: 902ab14b-9260-4f39-8673-fc31a90f599c
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-User-Agent
  x-amz-apigw-id: Tyio5FY9oAMFURQ=
  access-control-allow-methods: OPTIONS,POST
  x-amzn-trace-id: Root=1-5f774b05-12fdaec9369a35e0534409de
  x-cache: Miss from cloudfront
  via: 1.1 4dbcbae01dbe8e38ad716ec4b04c5f39.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: EFEC__BMAs5e8P52Ts_hNdU4nlR6XaF--Bf2CEtiBTZ1yiZwGDJQrw==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     8  100     8    0     0     51      0 --:--:-- --:--:-- --:--:--    51
  
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
curl --insecure -i -X OPTIONS https://medialive.us-east-1.amazonaws.com/prod/channels/stringValue/schedule -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: medialive.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 15:45:09 GMT
  x-amzn-requestid: 1e517ade-c2ae-4311-9202-92ed3832ce14
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Tyio7FNYIAMF3JA=
  x-cache: Error from cloudfront
  via: 1.1 2a02ac7e0927ff4d681c73fb791a7755.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: 82uEmHQfOBiDgvVg-lLP_X7AHyjJ-cK61vcLwPMbS3E0ZlCaesNcng==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    574      0 --:--:-- --:--:-- --:--:--   570100    73  100    73    0     0    574      0 --:--:-- --:--:-- --:--:--   570
  
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
curl --insecure -i -X OPTIONS https://mediapackage.us-east-1.amazonaws.com/channels -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediapackage.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 15:45:09 GMT
  x-amzn-requestid: 9167d7bd-101b-429c-aba8-a14f961db69c
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Tyio8EzOIAMF6RA=
  x-cache: Error from cloudfront
  via: 1.1 1865e5b3ee96e079d9136cbe7267820e.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: cO_kxGdBYRNIEy_QXmFcJx5BY4j9_TTTtuwAFMGuT1ylDVHVmd-jSQ==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    618      0 --:--:-- --:--:-- --:--:--   618
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>mediapackage-vod.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://mediapackage-vod.us-east-1.amazonaws.com/assets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: mediapackage-vod.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 3
  date: Fri, 02 Oct 2020 15:45:10 GMT
  x-amzn-requestid: 3af8f304-8c0d-49ad-afe3-5389dbd080ed
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key
  x-amz-apigw-id: TyipAHEjoAMFuKQ=
  access-control-allow-methods: *
  x-cache: Miss from cloudfront
  via: 1.1 c7c3cdef911c9ee3c1a83a78f425dc5b.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: qj9D5WCZI_nsMvMRsnGjptXmbgl050pVxiKaKMNKE3VjYG9jRgiVUw==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0     10      0 --:--:-- --:--:-- --:--:--    10
  
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
  Date: Fri, 02 Oct 2020 15:45:10 GMT
  x-amzn-RequestId: VZHHPUICWF5BEQVMD2MYOBZC5B7CCRZYPVPRQBPTUY2YPFBCUXICWAFFCZ25Q5LFD47ZX6LMRY4BYBC7PCR2OZA
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    365      0 --:--:-- --:--:-- --:--:--   365
  
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
Command failed: curl --insecure -i -X OPTIONS https://data.mediastore.us-east-1.amazonaws.com/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.mediastore.us-east-1.amazonaws.com" 
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
curl --insecure -i -X OPTIONS https://api.mediatailor.us-east-1.amazonaws.com/playbackConfiguration/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: api.mediatailor.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 15:45:10 GMT
  x-amzn-requestid: 2a585f38-7869-4b22-bedb-c0b3e5dc0f6c
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyipFGl4oAMFXWw=
  x-cache: Error from cloudfront
  via: 1.1 7f5e0d3b9ea85d0d75063a66c0ebc841.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: ykb1xKgAAoImxj2cVz6E1hTXBFdNgsHtX-6RmHgxoGLpB5V9EFPlgg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    561      0 --:--:-- --:--:-- --:--:--   557100    73  100    73    0     0    561      0 --:--:-- --:--:-- --:--:--   557
  
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
  Date: Fri, 02 Oct 2020 15:45:11 GMT
  x-amzn-RequestId: eadeaf79-d194-4cb6-ad1b-c8e4b5627328
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
  date: Fri, 02 Oct 2020 15:45:11 GMT
  content-length: 0
  x-amzn-requestid: f59c93e0-dba6-48a5-8ea6-00d08be7eb39
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
  Date: Fri, 02 Oct 2020 15:45:11 GMT
  x-amzn-RequestId: 7cf718eb-78fb-4559-9961-f5ceed5ee316
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
  date: Fri, 02 Oct 2020 15:45:12 GMT
  x-amzn-requestid: a8386e09-5652-4ecb-bb91-ced07cc04927
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyipSHz0IAMFyjg=
  x-amzn-trace-id: Root=1-5f774b08-6692bb7136ec357f4165903f
  x-cache: Error from cloudfront
  via: 1.1 7f5e0d3b9ea85d0d75063a66c0ebc841.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: 52r_dInQLseReAUxNrSPWNTk5UtePAFbOOTEk1vLKYgngBXkjcEL0w==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    618      0 --:--:-- --:--:-- --:--:--   618
  
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
  x-amzn-RequestId: 578f580a-42e9-4f7f-aaae-25df84ff670a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:11 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 52b024cd-abfb-47b2-a1b3-780164b4cdfd
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:12 GMT
  
  
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
Command failed: curl --insecure -i -X OPTIONS https://networkmanager.us-east-1.amazonaws.com/global-networks/stringValue/customer-gateway-associations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: networkmanager.us-east-1.amazonaws.com" 
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
  Date: Fri, 02 Oct 2020 15:45:13 GMT
  x-amzn-RequestId: a3a58cde-4e91-45a3-9bae-734cdd92ff94
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
  x-amzn-RequestId: c90d3d94-4570-434e-bed4-012e998fcf5f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:13 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 96d5b62c-002e-4959-9301-f60a6c413a07
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:13 GMT
  
  
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
      <td>❌ </td>
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
  date: Fri, 02 Oct 2020 15:45:14 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f72f3dcd-513e-405a-a357-34ab80567159
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyippF3BIAMF8XA=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f774b0a-3da5bc61035d0d0e5dc69b94
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Fri, 02 Oct 2020 15:45:14 GMT
  x-amzn-RequestId: ce9159c9-92ae-40d8-8a3a-fd2422b365ae
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
  Date: Fri, 02 Oct 2020 15:45:14 GMT
  x-amzn-RequestId: a94e2d2f-4045-4b17-935a-d82f99d791d4
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
  Date: Fri, 02 Oct 2020 15:45:14 GMT
  x-amzn-RequestId: ec72f7b0-90bd-41d1-8728-e7d691e2a2f6
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
  Date: Fri, 02 Oct 2020 15:45:15 GMT
  x-amzn-RequestId: 1fdf3624-86cd-490c-953c-5586c0cc808b
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
  Date: Fri, 02 Oct 2020 15:45:16 GMT
  x-amzn-RequestId: d188dfc5-25dc-4a70-b433-fc300ef1b4e3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: Tyip5FRlIAMF3eg=
  Access-Control-Allow-Methods: POST,GET,OPTIONS
  X-Cache: Miss from cloudfront
  Via: 1.1 768a2670e63a97b7ac4065216c345a7a.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: 2aet7H6o7FiMixnkimQ0n7SUJCdyHyUr0pOFjfdTjkd9DB7PgDu9fw==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 9be22237-7b88-4207-bac3-377cc8cf229a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:15 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:45:16 GMT
  x-amzn-requestid: 845834c9-7401-43a9-9e56-d58c25b5095f
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyiqAHvDIAMF_CA=
  access-control-allow-methods: GET,POST,PUT,DELETE,OPTIONS
  x-cache: Miss from cloudfront
  via: 1.1 75b094ecf0bf22429a44bab3eafcbf16.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: aaSv-U-cNnILsEp2qL-0Szeyv8nwHOS0jNt9EZ9I37jKgl4fMuyI2w==
  
  {}
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0     11      0 --:--:-- --:--:-- --:--:--    11
  
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
curl --insecure -i -X OPTIONS https://polly.us-east-1.amazonaws.com/v1/lexicons/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: polly.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 49374d07-f9c9-45aa-ae6b-281803c5a5a1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:16 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 7fe28e82-1345-4194-9398-093adce17cee
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:17 GMT
  
  
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
curl --insecure -i -X OPTIONS https://qldb.us-east-1.amazonaws.com/ledgers/stringValue/journal-kinesis-streams/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: qldb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Fri, 02 Oct 2020 15:45:18 GMT
  x-amzn-requestid: f220aa34-1585-45f0-bd90-d42d175bc806
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyiqPGfJoAMFSdw=
  access-control-allow-methods: DELETE,GET
  x-amzn-trace-id: Root=1-5f774b0e-121e3601a3963e86d3e0f74b
  x-cache: Miss from cloudfront
  via: 1.1 7f5e0d3b9ea85d0d75063a66c0ebc841.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: Rz_k9NZN_VuFv9q2-29JXzGd2f8TZc2ZQWXn0JsKUMcE24XD9xqO2Q==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://session.qldb.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: session.qldb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 500 Internal Server Error
  x-amzn-RequestId: 9hUtPjIGheS8ijx1jdtcFj
  Date: Fri, 2 Oct 2020 15:45:18 GMT
  Content-Length: 19
  
  <InternalFailure/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    19  100    19    0     0     54      0 --:--:-- --:--:-- --:--:--    54
  
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
curl --insecure -i -X OPTIONS https://quicksight.us-east-1.amazonaws.com/accounts/stringValue/data-sets/stringValue/ingestions/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: quicksight.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:45:19 GMT
  content-length: 127
  x-amzn-requestid: e3bb107f-66d3-4426-a4a0-05fda16753e9
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    371      0 --:--:-- --:--:-- --:--:--   371
  
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
  date: Fri, 02 Oct 2020 15:45:19 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 3bb15e11-9e5c-4cf8-be81-4423a397c6b7
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyiqbGnSoAMFSzQ=
  x-amzn-trace-id: Root=1-5f774b0f-5ec6c3a55c2ed65a7ddd27ff
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    202      0 --:--:-- --:--:-- --:--:--   202
  
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
  x-amzn-RequestId: 9e504ee0-2c96-4d9a-a950-18bb16c43be4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:18 GMT
  
  
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
  x-amzn-RequestId: 33a13f41-cd2c-472c-9849-3cccd624b1a3
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:19 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    365      0 --:--:-- --:--:-- --:--:--   365
  
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
  x-amzn-RequestId: 94991a6a-30f4-4d85-946e-55412aa8b8ab
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:20 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Fri, 02 Oct 2020 15:45:20 GMT
  x-amzn-RequestId: 1fe512b1-996a-4a3d-8048-404d4e1037f8
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
      <td>❌ </td>
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
  date: Fri, 02 Oct 2020 15:45:21 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 3cea2eb8-de17-45b0-b65c-052005d010e1
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyiquHXcIAMF-Gg=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f774b11-1d3935f3705703d7098773b1
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: b1b74d6d-d3f8-4629-871a-012a52052d7a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:21 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://robomaker.us-east-1.amazonaws.com/batchDescribeSimulationJob -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: robomaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:45:22 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 873b961a-0cdf-4a28-b3e8-32cbb902c6f7
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Tyiq2FnIoAMFpuQ=
  x-amzn-trace-id: Root=1-5f774b12-45d866f96affce244bf966e3
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    208      0 --:--:-- --:--:-- --:--:--   208
  
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
curl --insecure -i -X OPTIONS https://route53.amazonaws.com/2013-04-01/hostedzone/stringValue/associatevpc -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: d871af62-7e13-4d99-8c83-037126c285fe
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:22 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 73af3a4b-2bc1-4c5a-ac19-150663e5d486
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:22 GMT
  
  
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
curl --insecure -i -X OPTIONS https://route53resolver.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: route53resolver.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:45:23 GMT
  content-length: 0
  x-amzn-requestid: 7fe530db-9544-4dff-907e-a3420169d63b
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
      <td><strong>s3.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://s3.amazonaws.com/stringValue/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: s3.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: CE25A84993903415
  x-amz-id-2: GmPusO6RvfIlsS8Q0X6D9pDP86SFp2DMTC6rvxEBBQI8Lw8kIuZymbHWIuLgDFIeKKhySOeCOdw=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Fri, 02 Oct 2020 15:45:23 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <Error><Code>AccessForbidden</Code><Message>CORSResponse: Bucket not found</Message><Method>DELETE</Method><ResourceType>BUCKET</ResourceType><RequestId>CE25A84993903415</RequestId><HostId>GmPusO6RvfIlsS8Q0X6D9pDP86SFp2DMTC6rvxEBBQI8Lw8kIuZymbHWIuLgDFIeKKhySOeCOdw=</HostId></Error>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   321    0   321    0     0    944      0 --:--:-- --:--:-- --:--:--   944
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>stringValue.s3-control.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://stringValue.s3-control.us-east-1.amazonaws.com/v20180820/accesspoint/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: stringValue.s3-control.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: C23E747AA5720910
  x-amz-id-2: IgYm/UedbaTRIj0KdhYyocxg4UI/US1eXsEu8oq2571/49mG7UOIw06tX1MypaaQDid0AAYeemI=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Fri, 02 Oct 2020 15:45:24 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <ErrorResponse><Error><Code>AccessDenied</Code><Message>Access Denied</Message><AccountId>stringvalue</AccountId></Error><RequestId>C23E747AA5720910</RequestId><HostId>IgYm/UedbaTRIj0KdhYyocxg4UI/US1eXsEu8oq2571/49mG7UOIw06tX1MypaaQDid0AAYeemI=</HostId></ErrorResponse>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   308    0   308    0     0    908      0 --:--:-- --:--:-- --:--:--   905
  
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
  x-amzn-RequestId: 1f96e2ed-2f16-4e3b-aef0-d4e826999412
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:23 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://a2i-runtime.sagemaker.us-east-1.amazonaws.com/human-loops/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: a2i-runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:45:24 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 0c40e512-ad6d-480f-b6d3-800de72a37e1
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: TyirRG9_IAMFVVw=
  access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
  x-amzn-trace-id: Root=1-5f774b14-5a415b370a7c25e2568491ba
  
  {}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      5      0 --:--:-- --:--:-- --:--:--     5
  
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
curl --insecure -i -X OPTIONS https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/stringValue/invocations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 17c47e7e-1992-4ae9-a0f1-8f8d333b7f8c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-Amzn-Invoked-Production-Variant,x-amzn-RequestId,x-amzn-ErrorType,X-Amzn-SageMaker-Custom-Attributes,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 15:45:25 GMT
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
curl --insecure -i -X OPTIONS https://savingsplans.amazonaws.com/CreateSavingsPlan -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: savingsplans.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:45:25 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 383fc36e-28b2-4b5d-be25-3e023f8c2bbf
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyirZHxPIAMFb2w=
  x-amzn-trace-id: Root=1-5f774b15-615a462734d0a1930f16d024
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    209      0 --:--:-- --:--:-- --:--:--   209
  
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
  date: Fri, 02 Oct 2020 15:45:25 GMT
  content-type: application/json
  content-length: 113
  x-amzn-requestid: 95fd3502-efc1-4381-b241-ba650ee13943
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyircH-GIAMFvhw=
  x-amzn-trace-id: Root=1-5f774b15-3c7d5a822bff1b503a6425d4
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   113  100   113    0     0    329      0 --:--:-- --:--:-- --:--:--   328
  
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
  date: Fri, 02 Oct 2020 15:45:26 GMT
  content-length: 0
  x-amzn-requestid: c6689c2b-f2e8-47fd-96a3-5b4f4ce41a3f
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
  date: Fri, 02 Oct 2020 15:45:26 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: bb945a78-96fc-4882-9533-e2c0ab0d8f39
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyirkFyVoAMFZbA=
  
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
  date: Fri, 02 Oct 2020 15:45:27 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: b6e78ef4-5e93-4367-a46e-485410738bd4
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyirnGeHIAMFtkw=
  x-amzn-trace-id: Root=1-5f774b17-600b78f062a2fa58071a32b1
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    210      0 --:--:-- --:--:-- --:--:--   209
  
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
  x-amzn-RequestId: 85d0c3f1-489b-4381-a9c8-7ba310123c67
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:26 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:45:27 GMT
  content-length: 0
  x-amzn-requestid: c448f5fa-dfbb-4563-a03d-9b8582a6f2d3
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
  Date: Fri, 02 Oct 2020 15:45:27 GMT
  x-amzn-RequestId: 5ed013a0-8ef2-489f-88bd-70749c1c22ea
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
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 0b7c607c-cd2c-4caa-9272-0a33109ff58c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:28 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 229eae45-b1c5-4501-a704-639ed8c21fdf
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:28 GMT
  
  
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
  x-amzn-RequestId: 565bbd87-80ce-4a13-8db0-723bc2c1b981
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     86      0 --:--:-- --:--:-- --:--:--    86
  
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
  x-amzn-RequestId: 9b91456b-1926-479e-9d82-1fd04fd6dde5
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:29 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    365      0 --:--:-- --:--:-- --:--:--   365
  
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
curl --insecure -i -X OPTIONS https://signer.us-east-1.amazonaws.com/signing-profiles/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: signer.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Fri, 02 Oct 2020 15:45:30 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 9959e43b-b7d8-4b58-a1e7-a448d4246494
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TyisGFm9IAMFRSA=
  access-control-allow-methods: DELETE,GET,PUT
  x-amzn-trace-id: Root=1-5f774b1a-25d3dfe027eb07f50080d724
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: d69d8e0e-f54d-4b03-952e-468f50b40676
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:30 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    371      0 --:--:-- --:--:-- --:--:--   371
  
</code>
</pre>

</details>
      </td>
    </tr>
    <tr>
      <td><strong>snowball.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://snowball.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: snowball.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 419fb419-31cb-448c-85cf-98f2068e8ced
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:30 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    361      0 --:--:-- --:--:-- --:--:--   360
  
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
  x-amzn-RequestId: d8ac5885-9476-504c-bed6-0f74d92d9e13
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:31 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 8e815332-467a-5abf-9a7d-04c30b21841a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Fri, 02 Oct 2020 15:45:31 GMT
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
  Date: Fri, 02 Oct 2020 15:45:32 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: a41d0a08-4a8f-4a8c-a513-2f8f6fa73f07
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
  date: Fri, 02 Oct 2020 15:45:32 GMT
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   121  100   121    0     0    342      0 --:--:-- --:--:-- --:--:--   342
  
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
  date: Fri, 02 Oct 2020 15:45:32 GMT
  content-length: 25
  x-amzn-requestid: 904159c3-d5de-4f18-9c20-e319a9a0d799
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     66      0 --:--:-- --:--:-- --:--:--    66
  
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
  Date: Fri, 02 Oct 2020 15:45:33 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: bb78e9da-48ab-4fda-b9a8-5efe2f938361
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
  x-amzn-RequestId: 86d1b757-8a1b-45e3-a3d0-d1f37fe0cc0c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:32 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://support.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: support.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: d004db99-9224-4cb2-bcf8-d9b3fcc4a071
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:33 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    357      0 --:--:-- --:--:-- --:--:--   356
  
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
  x-amzn-RequestId: 7386a614-324e-41e7-8a2f-671588e55acb
  Date: Fri, 2 Oct 2020 15:45:34 GMT
  Content-Length: 29
  
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
  date: Fri, 02 Oct 2020 15:45:34 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 322aa004-38df-4f94-aaeb-dcb751cc9d6d
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Tyis0HRKIAMFXnA=
  x-amzn-trace-id: Root=1-5f774b1e-138e1f8b724b0cfe13c181ae
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    208      0 --:--:-- --:--:-- --:--:--   208
  
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
  x-amzn-RequestId: 0d2783d2-33fb-428b-a797-dcfc67e31dbb
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:34 GMT
  
  
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
  Date: Fri, 02 Oct 2020 15:45:34 GMT
  x-amzn-RequestId: c6aa87e4-308c-43de-9d82-cff15cec5fab
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
  date: Fri, 02 Oct 2020 15:45:35 GMT
  content-length: 29
  x-amzn-requestid: 10716bdf-6b39-4c04-996d-9120a3631da9
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     85      0 --:--:-- --:--:-- --:--:--    85
  
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
  x-amzn-RequestId: 0c2d2116-4ca7-40cc-be63-911344dac358
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:35 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 4a328aef-72fc-4848-bede-0fa4983f34ec
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:35 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 1a6484be-7eb1-43cf-bc1d-f20c6343de8b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:36 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 94cab895-b234-4c78-914f-ea1bc26f66d4
  Content-Length: 127
  Date: Fri, 02 Oct 2020 15:45:36 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    372      0 --:--:-- --:--:-- --:--:--   372
  
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
curl --insecure -i -X OPTIONS https://workdocs.us-east-1.amazonaws.com/api/v1/documents/stringValue/versions/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workdocs.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4239a77e-ad9b-447d-986c-fc941cc36a72
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: private, no-cache, no-store, max-age=0
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Server-ResponseTime-Millis: 0
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:37 GMT
  
  
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
curl --insecure -i -X OPTIONS https://worklink.us-east-1.amazonaws.com/associateDomain -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: worklink.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Fri, 02 Oct 2020 15:45:38 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 0fc5b2d9-92e5-45b5-aa11-0afd390dd0cc
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TyitYGU-oAMF0JQ=
  x-amzn-trace-id: Root=1-5f774b22-2cbd63c97bfbcd9b203278f1
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    205      0 --:--:-- --:--:-- --:--:--   205
  
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
  x-amzn-RequestId: 2f4856a4-b700-4969-a321-45a0aa35be3d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:38 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://workmailmessageflow.us-east-1.amazonaws.com/messages/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: workmailmessageflow.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  Date: Fri, 02 Oct 2020 15:45:38 GMT
  x-amzn-RequestId: d8706a21-3eda-4fb5-82b9-327f3bd5d51c
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    353      0 --:--:-- --:--:-- --:--:--   352
  
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
  x-amzn-RequestId: abf03a02-f555-4109-9dee-f1f5fd7a90be
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 15:45:38 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Fri, 02 Oct 2020 15:45:39 GMT
  content-length: 0
  x-amzn-requestid: 3910ee39-8786-42e5-85f4-4576b4554702
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
</code>
</pre>

</details>
      </td>
    </tr>
  </tbody>
</table>
