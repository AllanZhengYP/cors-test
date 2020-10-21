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
  date: Wed, 21 Oct 2020 16:21:31 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 4ece69f4-b200-4cd6-955d-c8ce6ddc1ecd
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxPx1GTEIAMFkcA=
  access-control-allow-methods: GET,PUT
  x-amzn-trace-id: Root=1-5f90600b-2a86dacc0ff0e353279e0086
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
  x-amzn-RequestId: 20446a66-5415-402b-9de2-912709042279
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:31 GMT
  
  
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
  date: Wed, 21 Oct 2020 16:21:32 GMT
  content-length: 127
  x-amzn-requestid: e316e3db-8950-40d9-bfcd-325b10595e29
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    465      0 --:--:-- --:--:-- --:--:--   465
  
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
  date: Wed, 21 Oct 2020 16:21:32 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:21:32 GMT
  x-amzn-requestid: 2db32477-62a6-4457-b7d5-8e8c1b935479
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxPyCE8NoAMFxBw=
  x-cache: Error from cloudfront
  via: 1.1 c1c7bd66e338154bf556b9c8414debe9.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: A-GbCkT1XRlAB-nhTve1FuHH5PBCcQXUpS12ects59TUvgIAemgDdQ==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    273      0 --:--:-- --:--:-- --:--:--   272
  
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
  date: Wed, 21 Oct 2020 16:21:33 GMT
  content-length: 0
  x-amzn-requestid: fa820870-dfe0-4a1e-96aa-89c741bc0721
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amz-apigw-id: UxPyFLqGIAMEbow=
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
  date: Wed, 21 Oct 2020 16:21:33 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: eabf38a5-8878-4064-a082-d614025b81d1
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxPyJEt5IAMF25Q=
  x-amzn-trace-id: Root=1-5f90600d-79a4e48974f66c7b56a44bab
  
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
curl --insecure -i -X OPTIONS https://appmesh.us-east-1.amazonaws.com/v20190125/meshes/stringValue/virtualGateway/stringValue/gatewayRoutes -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: appmesh.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-requestid: 056b4f89-fdfb-4ee5-a114-1779a44e185e
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: PUT
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  content-length: 0
  date: Wed, 21 Oct 2020 16:21:33 GMT
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
  date: Wed, 21 Oct 2020 16:21:34 GMT
  content-length: 127
  x-amzn-requestid: 451ea8cd-eacd-4d95-9a3b-7456dca72478
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    411      0 --:--:-- --:--:-- --:--:--   411
  
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
  x-amzn-RequestId: 9af57554-4368-46dc-b1f8-296b87085b6f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:33 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:21:34 GMT
  x-amzn-RequestId: 8ae92628-759c-4676-b3f8-3fe8abfd3dc1
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    463      0 --:--:-- --:--:-- --:--:--   461
  
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
  date: Wed, 21 Oct 2020 16:21:35 GMT
  content-length: 0
  x-amzn-requestid: d5f62c9e-e411-4150-8b07-efb2a9ef70ee
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
  x-amzn-RequestId: be546eb9-eeec-446d-aba1-3efaf1bd9190
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:35 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:21:35 GMT
  x-amzn-requestid: b0edb9e8-fa80-4c78-beb9-15158010f73d
  x-amzn-errortype: ForbiddenException
  x-amz-apigw-id: UxPyeGdwoAMFkbw=
  x-cache: Error from cloudfront
  via: 1.1 5ab5dc09da67e3ea794ec8a82992cc89.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: X9dD2dHjfX2OBGw_B9qxOHr62ayJAbxV6fTfrlDgsE9BoZS57ZIJaA==
  
  {"message":"Forbidden"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    23  100    23    0     0    203      0 --:--:-- --:--:-- --:--:--   203
  
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
  Date: Wed, 21 Oct 2020 16:21:35 GMT
  x-amzn-RequestId: 61f40959-c844-47f5-9b90-b358f07e04b0
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
  x-amzn-RequestId: e4a21a7b-3718-4824-8fd5-a014d872c70b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:36 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: a18d660a-1e78-4cfc-a68b-82e53bb5b449
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:35 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:21:36 GMT
  x-amzn-RequestId: 426625e9-5ce9-466d-a16e-8cdc49dd3869
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    451      0 --:--:-- --:--:-- --:--:--   450
  
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
  date: Wed, 21 Oct 2020 16:21:37 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a352bc1a-d86d-4b6d-bd35-51b24ee60d4c
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxPytG39oAMFv5Q=
  
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
  date: Wed, 21 Oct 2020 16:21:37 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 61a0ff8e-fcd6-435f-b313-7c79a0730a37
  access-control-allow-origin: *
  access-control-allow-headers: *,Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,amz-sdk-invocation-id,amz-sdk-request,content-type,x-amz-content-sha256,x-amz-user-agent,x-amzn-platform-id,x-amzn-trace-id
  x-amz-apigw-id: UxPywH-LoAMFctw=
  access-control-allow-methods: PUT
  x-amzn-trace-id: Root=1-5f906011-32b80dcc31ecdf294b351142
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
  date: Wed, 21 Oct 2020 16:21:37 GMT
  content-length: 0
  x-amzn-requestid: cfeb1be6-3543-4b8a-8ed1-b42e5b5712aa
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
  x-amzn-RequestId: 5c88e0f4-5799-4e25-85e3-3cc7c38b7457
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:21:37 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    300      0 --:--:-- --:--:-- --:--:--   300
  
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
  date: Wed, 21 Oct 2020 16:21:38 GMT
  content-length: 0
  x-amzn-requestid: d4d546af-7998-4950-8d07-5ce8c7a283ee
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
  x-amzn-RequestId: 93ba0a45-4f3a-497d-aee9-7d6a12879447
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Wed, 21 Oct 2020 16:21:38 GMT
  x-amzn-RequestId: 93ba0a45-4f3a-497d-aee9-7d6a12879447
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
  x-amzn-RequestId: 93fc3f57-1cf8-467f-9e56-eac4469c040d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:38 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 4ca39b42-12dc-4428-816c-800797b39f62
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:39 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 5e74062e-efbb-4588-af12-c17f8dcc2954
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:40 GMT
  
  
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
  Date: Wed, 21 Oct 2020 16:21:39 GMT
  x-amzn-RequestId: ea75ebb9-112c-4f54-93cd-e5abfec96217
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    409      0 --:--:-- --:--:-- --:--:--   409
  
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
  x-amzn-RequestId: d686d5c5-b61f-48c3-a802-d40b2b411161
  Content-Length: 29
  Date: Wed, 21 Oct 2020 16:21:39 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     94      0 --:--:-- --:--:-- --:--:--    94
  
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
  x-amzn-RequestId: e523c5e7-1dce-4373-b7e3-5fe4c0b40a43
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:40 GMT
  
  
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
  x-amzn-RequestId: 826edf3e-f227-4edf-8a8c-70eeea318c74
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:40 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 14197e70-d889-44dc-ad8e-bd474d828988
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:41 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 036bf05b-e598-4e28-8fee-f7656dbb65e7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:41 GMT
  
  
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
  date: Wed, 21 Oct 2020 16:21:42 GMT
  content-length: 0
  x-amzn-requestid: 3c6486a3-2d19-474d-a9b7-7857476f10ad
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
  x-amzn-RequestId: a569f8ea-0614-453a-9bcc-7e5ec637a28a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:42 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: fe8b414d-1f96-4b08-bfc2-c599a6466a7c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:42 GMT
  
  
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
  x-amzn-RequestId: 0d3669ed-5fc8-44d4-94dc-891392dc7ee5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Wed, 21 Oct 2020 16:21:43 GMT
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
  date: Wed, 21 Oct 2020 16:21:43 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: ee1b1f3a-a624-48e6-b024-2340632abcad
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: UxPzuHbnIAMFv5Q=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f906017-444a9a4572ffe3ee50b318a9
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://codeguru-profiler.us-east-1.amazonaws.com/profilingGroups/stringValue/configureAgent -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: codeguru-profiler.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Wed, 21 Oct 2020 16:21:43 GMT
  x-amzn-requestid: 5331710a-1f60-46c2-9b7a-b3abbe210f32
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,Date,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxPzvFOYoAMFg9g=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f906017-6e75243652bf2418356f12c4
  access-control-max-age: 600
  x-cache: Miss from cloudfront
  via: 1.1 5a1753718d8b33365e5f693dd338c511.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: vXWRmKRbjCjLsGwyFVd_zQ64bAKisCyCehHF7u9zOm-C3Tc1suK6oA==
  
  
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
  x-amzn-RequestId: 5513e610-55e3-4c91-b02f-1fcb08970db6
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
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
  x-amzn-RequestId: 2247372f-8cf6-47db-b840-d5ab409f746c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:44 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:21:44 GMT
  content-length: 0
  x-amzn-requestid: bab3cf28-a63b-4297-bd40-f6fb55baefa8
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
  date: Wed, 21 Oct 2020 16:21:45 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: fb1ab407-8c03-4f4c-a0b2-5fa9d0ef8d03
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxPz8FbVoAMFrfA=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f906019-4fa9e74336ba82453b525cc3
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:21:45 GMT
  content-length: 0
  x-amzn-requestid: 8081077a-d54b-4f52-946f-c37680a71395
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
  date: Wed, 21 Oct 2020 16:21:45 GMT
  content-length: 0
  x-amzn-requestid: e41d9952-f1e8-4e8c-9f5a-a99c892405b0
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
  date: Wed, 21 Oct 2020 16:21:46 GMT
  content-length: 0
  x-amzn-requestid: abd8cbda-0a64-4e80-996d-5563b1062e3a
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
  x-amzn-RequestId: 34146546-ed7d-4c79-9a54-1c3b45916b2b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:46 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 51c4be2f-9211-462e-9fad-c321a59ba7b8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:46 GMT
  
  
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
  date: Wed, 21 Oct 2020 16:21:47 GMT
  content-length: 272
  x-amzn-requestid: 0d6bfad5-a992-4be5-8894-e037fd69bb72
  
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
curl --insecure -i -X OPTIONS https://config.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: config.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: a847335a-d15e-412c-b477-8c13a426424b
  Access-Control-Allow-Origin: *
  Strict-Transport-Security: max-age=86400
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:46 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://connect.us-east-1.amazonaws.com/users/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Wed, 21 Oct 2020 16:21:47 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 9b23c4e8-d363-49cf-83ef-15ebee6bd4b6
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: UxP0WFz2IAMF-Hg=
  access-control-allow-methods: PUT
  x-amzn-trace-id: Root=1-5f90601b-2f9d99581cb52b964d33bf21
  
  
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
  date: Wed, 21 Oct 2020 16:21:48 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 3bb6926a-190e-4fee-aa2a-42035f98dc39
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,X-Amz-Bearer
  x-amz-apigw-id: UxP0aE9NoAMFdCw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f90601c-79846db57026bed2280f0e92
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 3abc4d12-1d7c-4fa5-a81f-ea0854576ab7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:48 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:21:48 GMT
  content-length: 0
  x-amzn-requestid: 5034c3ae-c72c-4747-bc0f-91e489287115
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
  x-amzn-RequestId: 6ddd41a6-9e89-4342-95c4-fee22f722e76
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:49 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: e6bb3a9a-027b-4b58-9d8e-0e5a5758705e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:49 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://dataexchange.us-east-1.amazonaws.com/v1/jobs/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: dataexchange.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Wed, 21 Oct 2020 16:21:49 GMT
  x-amzn-requestid: 4de76326-34f2-4a26-aad2-667fbd49a920
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP0qEMoIAMF4uQ=
  x-amzn-trace-id: Root=1-5f90601d-292314dd3fa0f6fe223b224c
  x-cache: Error from cloudfront
  via: 1.1 c9cb74549b807d498500f04e1d4b8c7d.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: zBJQY3E-fdaZ3JQPpzrcsrdWm5XHJJqXKRP-MO4N66dUgcLiquXvbQ==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    278      0 --:--:-- --:--:-- --:--:--   278
  
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
  date: Wed, 21 Oct 2020 16:21:50 GMT
  content-length: 127
  x-amzn-requestid: 8b284cd9-7a9b-49d7-9841-f439c7870d00
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    419      0 --:--:-- --:--:-- --:--:--   417
  
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
  x-amzn-RequestId: a220099b-6f1f-4a47-bf9e-3a55fd7452d7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:50 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:21:50 GMT
  x-amzn-RequestId: 0ad19b3c-5486-4651-b07e-ba266f0a5ac6
  x-amzn-ErrorType: AccessDeniedException
  x-amz-apigw-id: UxP00E5WoAMFxFA=
  X-Amzn-Trace-Id: Root=1-5f90601e-004decd072e6322d59d83454
  X-Cache: Error from cloudfront
  Via: 1.1 26ca01ec7377e425b59b6a08cb1ec343.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: YI0ZpszLyLrweDlfh4fzcI2awoTaqnbHvpAR_27vxDR3KAKf1OXuMg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    187      0 --:--:-- --:--:-- --:--:--   186100    73  100    73    0     0    187      0 --:--:-- --:--:-- --:--:--   186
  
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
  x-amzn-RequestId: 5bdc2124-c365-4881-ad0f-23c7c172b0a6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:50 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 67f54984-f15d-4acc-9ed3-b6f8a34a5e12
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:51 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:21:51 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 1c1e454c-daf4-4271-8ac8-414145a9dd78
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP1AG-hIAMFZFw=
  x-amzn-trace-id: Root=1-5f90601f-6ec9b6e70a1ee2346c04503e
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    151      0 --:--:-- --:--:-- --:--:--   150100    73  100    73    0     0    151      0 --:--:-- --:--:-- --:--:--   150
  
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
  x-amzn-RequestId: 6667b6d5-2b8e-41ab-9c08-e703b29e021b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:52 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:21:52 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: E1HAVJHOEPU15G5FU5LFUK3TDFVV4KQNSO5AEMVJF66Q9ASUAAJG
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
  Date: Wed, 21 Oct 2020 16:21:52 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 38Q0012DKM7LKSLTSVSFPA8J5BVV4KQNSO5AEMVJF66Q9ASUAAJG
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
  x-amzn-RequestId: facef781-5fa3-4dcf-a631-6e623ce49519
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:21:53 GMT
  
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
  Date: Wed, 21 Oct 2020 16:21:53 GMT
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
curl --insecure -i -X OPTIONS https://ec2-instance-connect.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: ec2-instance-connect.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 9280a67c-f4ef-4187-b89a-217aec96a7fa
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:21:53 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    461      0 --:--:-- --:--:-- --:--:--   461
  
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
  x-amzn-RequestId: a16891c0-f696-4f20-9911-277c4566cc2d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Wed, 21 Oct 2020 16:21:54 GMT
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
  x-amzn-RequestId: 0762daff-e0fb-4ca6-91b6-44e640e01590
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:54 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
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
  x-amzn-RequestId: 04d048eb-b45a-48d4-a581-70422bf117ef
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:54 GMT
  
  
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
  date: Wed, 21 Oct 2020 16:21:55 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 1cc326c2-f711-4657-8293-a9bfd74e215e
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP1iFLJoAMFlMw=
  x-amzn-trace-id: Root=1-5f906023-3faaa4805f21abf7550ce34c
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    261      0 --:--:-- --:--:-- --:--:--   261
  
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
  Date: Wed, 21 Oct 2020 16:21:55 GMT
  x-amzn-RequestId: 57f2e159-2fbf-4433-9fc2-cafc4e107de7
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
  date: Wed, 21 Oct 2020 16:21:55 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 5b97d98a-4616-4108-a2d8-9969a03a1041
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP1oGmDoAMFlXw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f906023-3196edba5f3c616a48b40ceb
  
  
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
  x-amzn-RequestId: 788bf989-5846-424c-be1c-eaed8cb6140b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:55 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: f7231675-88f0-4825-b754-9d48ddd429d2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:56 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 7290b1a5-9842-4592-8ce5-8783077c3cc5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:56 GMT
  
  
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
  x-amzn-RequestId: eb6c83c3-5e81-4f93-a22c-6309bd0fd23e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:56 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/stringValue/accept -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: es.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: de0b4824-4ebf-4482-8e78-d1fa9f7e8167
  Content-Length: 29
  Date: Wed, 21 Oct 2020 16:21:56 GMT
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     95      0 --:--:-- --:--:-- --:--:--    95
  
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
  x-amzn-RequestId: f5a3ee7f-ed3a-4ed2-9b9b-9f0c162418b9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:57 GMT
  
  
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
  x-amzn-RequestId: 67c0831f-a444-4980-bb6f-06addb7b4751
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:57 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: cf639fb7-44d0-2f9f-9769-fdd16783e1db
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:21:57 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: df55c18f-66b9-45c0-827e-f424962ac20f
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:21:58 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    463      0 --:--:-- --:--:-- --:--:--   461
  
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
  Date: Wed, 21 Oct 2020 16:21:59 GMT
  x-amzn-RequestId: 2d7b0b68-628e-46e1-b780-e0332b578ad0
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
  Date: Wed, 21 Oct 2020 16:21:59 GMT
  x-amzn-RequestId: 7623e2ff-34e4-4dd1-8700-3180e0318a68
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
  date: Wed, 21 Oct 2020 16:21:59 GMT
  content-length: 0
  x-amzn-requestid: b5ab0897-0641-4984-bba5-1af233e90c71
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
  date: Wed, 21 Oct 2020 16:22:00 GMT
  content-length: 0
  x-amzn-requestid: c9b62921-99cc-4640-b735-d0e68a1c65f9
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
  x-amzn-RequestId: ddc1f224-fcb3-47c1-82bf-30b7ac2e8e8e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:00 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://glacier.us-east-1.amazonaws.com/stringValue/vaults/stringValue/multipart-uploads/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,x-amz-glacier-version,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: glacier.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 400 Bad Request
  x-amzn-RequestId: GwWP9gOETwf0RsjWyQ_ogN3I7ljoL_5iBvcsbZ7JRSl2gSA
  Content-Length: 109
  Date: Wed, 21 Oct 2020 16:22:00 GMT
  Connection: close
  
  {"code":"MissingParameterValueException","message":"Required parameter missing: API version","type":"Client"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   109    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   109  100   109    0     0    357      0 --:--:-- --:--:-- --:--:--   356
  
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
  date: Wed, 21 Oct 2020 16:22:01 GMT
  content-length: 0
  x-amzn-requestid: d0e4a9f8-06c3-4beb-99e2-01dbbbca22b7
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
  date: Wed, 21 Oct 2020 16:22:01 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: fc017ef1-b1fa-4d56-bbb0-837eada9a91c
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP2gH6roAMFbxA=
  x-amzn-trace-id: Root=1-5f906029-04aca911423022dd3ea4b3a0
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    266      0 --:--:-- --:--:-- --:--:--   266
  
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
  date: Wed, 21 Oct 2020 16:22:01 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a40f48cf-d25f-4d2c-8238-9ba497246ce3
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP2kHz3oAMFUXg=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    262      0 --:--:-- --:--:-- --:--:--   261
  
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
  Date: Wed, 21 Oct 2020 16:22:02 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 8c94d584-e8a7-4d65-aaa1-a7ee945e9064
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:01 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:02 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: e6e69cfb-26ba-4a46-8f6b-dfe0f639eba2
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: UxP2uHwyIAMFnCQ=
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
  x-amzn-RequestId: b5529019-b59d-40d4-ad21-3738b31df312
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:02 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:03 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 5bb0c973-dd25-4aa2-8c35-023d0d9580eb
  access-control-allow-origin: *
  access-control-allow-headers: Authorization, X-Amz-Date, X-Amz-Security-Token, x-amzn-iot-principal, X-Amz-Content-Sha256, X-Amz-User-Agent, Content-Type, x-amzn-principal
  x-amz-apigw-id: UxP21Gp7oAMFxzw=
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
      <td>✅ </td>
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
  date: Wed, 21 Oct 2020 16:22:04 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: a791f076-a815-4db0-8994-048a625301e8
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP25FNoIAMFb_w=
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
  date: "Wed, 21 Oct 2020 16:22:04 GMT"
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:04 GMT
  content-length: 0
  x-amzn-requestid: c3728986-e4a7-4744-8e4f-d8b426236177
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
  date: Wed, 21 Oct 2020 16:22:04 GMT
  content-length: 0
  x-amzn-requestid: 5f806f8a-90ec-4208-be2f-3b747cf2be4d
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
  x-amzn-RequestId: f388309e-5a8f-4bcf-bc19-439b9a585b1a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: GET
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:04 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:05 GMT
  content-length: 0
  x-amzn-requestid: 68cb34e5-2867-42fa-9fe8-f607503ed92d
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
  date: Wed, 21 Oct 2020 16:22:05 GMT
  content-length: 25
  x-amzn-requestid: f81fcf27-13d9-4782-85c6-fd4d9c2a1908
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     81      0 --:--:-- --:--:-- --:--:--    81
  
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
  date: Wed, 21 Oct 2020 16:22:06 GMT
  content-length: 0
  x-amzn-requestid: 911952d0-650f-4922-a694-095c4daa7924
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
  date: Wed, 21 Oct 2020 16:22:06 GMT
  content-length: 130
  x-amzn-requestid: 7307e2cb-b806-4b85-83a8-fb66807aafa0
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   130  100   130    0     0    422      0 --:--:-- --:--:-- --:--:--   422
  
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
  date: Wed, 21 Oct 2020 16:22:06 GMT
  x-amzn-requestid: a772944a-0371-41ea-b61a-805b5a251ea6
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP3UGuAoAMFhTQ=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f90602e-306912e13c06d351102f3fc1
  x-cache: Miss from cloudfront
  via: 1.1 2afae0d44e2540f472c0635ab62c232b.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: PgftV1OYx-ACAHeusHEdZE5j87jJPGXsYlZ-SzwcgMeJ-tU3Ef2NnA==
  
  
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
  date: Wed, 21 Oct 2020 16:22:07 GMT
  x-amzn-requestid: ba7e7e78-9eeb-4dba-aed1-a4540346675b
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP3XE7eoAMFR_Q=
  x-amzn-trace-id: Root=1-5f90602f-7974dbda50123a7458e4d28c
  x-cache: Error from cloudfront
  via: 1.1 eb7d416369db7f3961117199ddc9e343.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: MUiLiqzzCEBYkxKfsdlFKa32EAXLFESuG9nUT5eoRR_rQJABU-_mkA==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    271      0 --:--:-- --:--:-- --:--:--   271
  
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
  x-amzn-RequestId: 97cdf247-60be-431c-a6ee-3d5b3f732fcd
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:07 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: d60e15fb-18a4-d66e-8e04-7794262b8bc6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Wed, 21 Oct 2020 16:22:07 GMT
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
  x-amzn-RequestId: 0e4d4f7e-a2c3-4866-ba37-9facabc2b395
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:07 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: e4c28bca-8667-4241-8ad5-8d36615db4d9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:08 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 4eef2bce-786a-40a1-beb9-de00114d7524
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:08 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: bcc596b9-2bd3-4bf9-92d8-76a9f9e5c0da
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:08 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: b62e950c-3481-4fe4-9b8b-49c43468c6f2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:08 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 950b0790-ff7c-4e2e-bfee-484441e3ef5f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:09 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 543c149f-9be9-46f9-9381-3bde0c7d1a8f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: no-cache, no-store, must-revalidate, private
  Expires: 0
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Pragma: no-cache
  Access-Control-Max-Age: 172800
  Date: Wed, 21 Oct 2020 16:22:10 GMT
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
  date: Wed, 21 Oct 2020 16:22:10 GMT
  content-length: 0
  x-amzn-requestid: 96392fbe-4566-4846-839e-f363dcff145d
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
  date: Wed, 21 Oct 2020 16:22:10 GMT
  content-length: 0
  x-amzn-requestid: cc9c6444-36d8-487c-9a5a-a2b7e758632a
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
  Date: Wed, 21 Oct 2020 16:22:10 GMT
  x-amzn-RequestId: b50c1a5b-65c5-47c7-92e0-e0ed4647b7eb
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
curl --insecure -i -X OPTIONS https://runtime.lex.us-east-1.amazonaws.com/bot/stringValue/alias/stringValue/user/stringValue/session -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.lex.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  x-amzn-requestid: 32408784-cc76-4cb0-9210-5661c74c48ad
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: DELETE
  access-control-expose-headers: x-amz-lex-session-attributes,x-amz-lex-slots,x-amz-lex-dialog-state,Date,x-amz-lex-message,x-amz-lex-input-transcript,x-amzn-ErrorMessage,x-amz-lex-slot-to-elicit,x-amzn-RequestId,x-amzn-ErrorType,x-amz-lex-intent-name
  access-control-max-age: 172800
  date: Wed, 21 Oct 2020 16:22:11 GMT
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
  x-amzn-RequestId: d460f55a-b049-4347-878f-4f28eb1f7124
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:11 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    374      0 --:--:-- --:--:-- --:--:--   374
  
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
  Date: Wed, 21 Oct 2020 16:22:12 GMT
  Content-Length: 114
  Connection: keep-alive
  x-amzn-RequestId: 106dd2a0-8906-4ba2-8966-64f51008a0ec
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   114  100   114    0     0    416      0 --:--:-- --:--:-- --:--:--   414
  
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
  x-amzn-RequestId: adf1e634-7621-469b-a420-e4041adbf001
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:11 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:12 GMT
  content-length: 127
  x-amzn-requestid: 470afe33-64a6-40c1-8d05-c500cdda63af
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    463      0 --:--:-- --:--:-- --:--:--   463
  
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
  date: Wed, 21 Oct 2020 16:22:12 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 38220f1e-660c-4968-9d55-350c7e170226
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP4SFOqIAMF1MA=
  
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
curl --insecure -i -X OPTIONS https://managedblockchain.us-east-1.amazonaws.com/networks/stringValue/members -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: managedblockchain.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 403
  date: Wed, 21 Oct 2020 16:22:13 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: c9768584-9163-4e49-9c34-a9a8ad8d77dc
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP4VEiFoAMF8Jw=
  
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
  Date: Wed, 21 Oct 2020 16:22:13 GMT
  x-amzn-RequestId: ad77be6b-1861-4e1f-b3fe-637178ef208a
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
  x-amzn-RequestId: 528ea057-819a-4e8f-9582-21c1910666ad
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:13 GMT
  
  
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
curl --insecure -i -X OPTIONS https://entitlement.marketplace.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: entitlement.marketplace.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 26a51d06-ecfc-4c12-92db-2ea7cbfd9e2d
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:14 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    465      0 --:--:-- --:--:-- --:--:--   465
  
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
  x-amzn-RequestId: 373ca903-8187-4ed6-8ce3-f9ecca5b9b11
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:13 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    463      0 --:--:-- --:--:-- --:--:--   463
  
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
  date: Wed, 21 Oct 2020 16:22:14 GMT
  x-amzn-requestid: 235b5f60-75bf-40e0-9d27-3af727ba5245
  x-amzn-errortype: APIGatewayFailedToParseRequestError
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP4kFxBoAMFaNQ=
  x-amzn-trace-id: Root=1-5f906036-618662a11fa277b022166967
  x-cache: Error from cloudfront
  via: 1.1 6ba3abdaa02208a6c3f49daf91689ad2.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: Z3dMeHGltc442WGSaC-1SkzCQngnGnHhgs1Ig3g9f1xIh4rRNyNMww==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    274      0 --:--:-- --:--:-- --:--:--   274
  
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
  date: Wed, 21 Oct 2020 16:22:14 GMT
  x-amzn-requestid: c9f699b4-d24d-4372-a1e3-1f20181d8783
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-User-Agent
  x-amz-apigw-id: UxP4mGFOIAMFRcQ=
  access-control-allow-methods: OPTIONS,POST
  x-amzn-trace-id: Root=1-5f906036-6acd3a320bd6cec5255b40b0
  x-cache: Miss from cloudfront
  via: 1.1 4dbcbae01dbe8e38ad716ec4b04c5f39.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: 3iaCj6CU-Z9_nAMZP3BxOb0fSRjIB2p5eMxshmLfjdCJsx0gNRNFiw==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     8  100     8    0     0     70      0 --:--:-- --:--:-- --:--:--    70
  
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
  date: Wed, 21 Oct 2020 16:22:15 GMT
  x-amzn-requestid: 0e36c435-c747-40d8-8bad-7217c0e184c8
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP4nEAZIAMF8Ng=
  x-cache: Error from cloudfront
  via: 1.1 916b3636f0e5533b1181c2f24120881f.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: xIx-bGHAh5_x3avFLPgjUtELEoV0-iZe9T_Ke_2Qb6gsLJGJ2FzqoA==
  
  {"message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    640      0 --:--:-- --:--:-- --:--:--   646
  
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
  date: Wed, 21 Oct 2020 16:22:15 GMT
  x-amzn-requestid: 618ac4ca-603d-4066-9328-301158d9e3ce
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP4qFyIIAMFj9A=
  x-cache: Error from cloudfront
  via: 1.1 802eebfb6e9ab6bda66a7156bc7add93.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: YIAkPfmI4R7IEhsQmWXMEJtbJOSKoJ1ifjn7YfqLi7JU7ovsjjTV_Q==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    271      0 --:--:-- --:--:-- --:--:--   271
  
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
  date: Wed, 21 Oct 2020 16:22:15 GMT
  x-amzn-requestid: d66956b8-ecc4-4b97-8b76-e1e69deddc26
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP4tFyvIAMF3KA=
  access-control-allow-methods: *
  x-cache: Miss from cloudfront
  via: 1.1 5a1753718d8b33365e5f693dd338c511.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: 7WsG_ZdaE_prrRNnScrzWfC6T7teYzDBNdkZ-a3i8Qeuv9ajpOPPGg==
  
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
  Date: Wed, 21 Oct 2020 16:22:15 GMT
  x-amzn-RequestId: JLEZAVJ7KJ6WFUO554MI6SABBRDHHJZ2BWJWB742SKJV5LMJSUJEBK2V3EBNBS42N4MCJJBD5ZETQGMZPKMAB7Q
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    463      0 --:--:-- --:--:-- --:--:--   463
  
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
  date: Wed, 21 Oct 2020 16:22:16 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: fbf3d1d0-c7a6-4be7-a194-403645607345
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP4zFBjIAMFZFw=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    237      0 --:--:-- --:--:-- --:--:--   238
  
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
  Date: Wed, 21 Oct 2020 16:22:16 GMT
  x-amzn-RequestId: a4ff428b-cf58-449d-a450-73158f5a57cc
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
  date: Wed, 21 Oct 2020 16:22:16 GMT
  content-length: 0
  x-amzn-requestid: 303e85e5-e666-4449-b5e5-114df70949ba
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
  Date: Wed, 21 Oct 2020 16:22:17 GMT
  x-amzn-RequestId: 74826e83-f864-4f8e-acd4-1362ecce9741
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
  date: Wed, 21 Oct 2020 16:22:17 GMT
  x-amzn-requestid: bea3b4b7-2874-4ddb-a5ef-f644beaffeca
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP5AFr9IAMFx_A=
  x-amzn-trace-id: Root=1-5f906039-2df53f64548c1c8a1a48d723
  x-cache: Error from cloudfront
  via: 1.1 8f22423015641505b8c857a37450d6c0.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: uNuKWmVof8XOaI09zt-odVw9UOcHtTaiFFR0L31PRVTEutq_YdIj_Q==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    278      0 --:--:-- --:--:-- --:--:--   278
  
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
  x-amzn-RequestId: 6f8c3954-d28d-401e-bdc7-a960a706c335
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:17 GMT
  
  
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
curl --insecure -i -X OPTIONS https://rds.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: rds.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 565bc9a3-c2b9-4b83-9527-f66e2d68b6c0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:18 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:22:17 GMT
  x-amzn-RequestId: e79921a8-b897-49f1-81f5-e9a253a22a1d
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
  x-amzn-RequestId: 952b0a3e-7715-421d-a46a-bc96bda643a5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:18 GMT
  
  
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
  x-amzn-RequestId: a6455972-4f8b-4e46-a040-b2e3007d2c04
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:18 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:19 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 51a67821-319a-440d-8b88-b72e15a242ad
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP5UEv9IAMFZYQ=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f90603b-02f1fee9536422a0346340cf
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:22:19 GMT
  x-amzn-RequestId: 2f3c98e5-4662-414b-9a17-29439a2aa163
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
  Date: Wed, 21 Oct 2020 16:22:19 GMT
  x-amzn-RequestId: 9e68aa6c-03e4-46ca-9977-255e8723dfd1
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
  Date: Wed, 21 Oct 2020 16:22:20 GMT
  x-amzn-RequestId: 08a0774c-6e78-4279-a073-1956ae744cf1
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
  Date: Wed, 21 Oct 2020 16:22:20 GMT
  x-amzn-RequestId: de548294-c8c6-4e72-b353-52935f8f7631
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
  Date: Wed, 21 Oct 2020 16:22:21 GMT
  x-amzn-RequestId: 74e156ed-ec6d-4473-a342-0d53a614e352
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP5jF9sIAMFpIg=
  Access-Control-Allow-Methods: POST,GET,OPTIONS
  X-Cache: Miss from cloudfront
  Via: 1.1 f13aef0c4b52f6f681401f232d03eb69.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: B-e2nhmoKctg9ILCYvWLCqrYZpEBHMytqDivhFopO_wwWuSfVIjwpA==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 96b900d3-b253-49dd-b809-d75ef7a3f8b5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:20 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:21 GMT
  x-amzn-requestid: 7121b273-c126-43d0-a98a-64d2839948df
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: UxP5pFkrIAMFaGg=
  access-control-allow-methods: GET,POST,PUT,DELETE,OPTIONS
  x-cache: Miss from cloudfront
  via: 1.1 38e44b0b4251fbfb70eb0f304e9558fb.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: aGrNf8A_FfNhEdwbZjdWxWnHgQmK0QpznptzPmIoHCqfzXSUXDB2PA==
  
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
  x-amzn-RequestId: 45dc95fa-1486-46ee-b5fd-734f76d57757
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:22 GMT
  
  
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
  x-amzn-RequestId: 70502b39-8637-4ba0-883f-991243a591f7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:22 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
curl --insecure -i -X OPTIONS https://qldb.us-east-1.amazonaws.com/ledgers/stringValue/journal-kinesis-streams/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: qldb.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Wed, 21 Oct 2020 16:22:22 GMT
  x-amzn-requestid: 8ce8cb3f-912e-4494-bcc1-45d1787c51c1
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: UxP5zFh3oAMFeFg=
  access-control-allow-methods: DELETE,GET
  x-amzn-trace-id: Root=1-5f90603e-710ae0eb6cbec7201934a4b1
  x-cache: Miss from cloudfront
  via: 1.1 41e349e25dc4bc856d0e5d2c162428a0.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: gFeOscRKtJQkCwpwXp9VO_XkeZxD7pdbUWw5b8es9IWUvqOwdM0WdQ==
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 6GZuY8d2Uem4PVISwbrFzX
  Date: Wed, 21 Oct 2020 16:22:22 GMT
  Content-Length: 19
  
  <InternalFailure/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    19  100    19    0     0     61      0 --:--:-- --:--:-- --:--:--    60
  
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
  date: Wed, 21 Oct 2020 16:22:23 GMT
  content-length: 127
  x-amzn-requestid: 5807adc7-f1d3-491e-99a4-bf856651607e
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    450      0 --:--:-- --:--:-- --:--:--   450
  
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
  date: Wed, 21 Oct 2020 16:22:23 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: c09bf0ef-71bb-4553-947c-74af218a1d76
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP59HOKoAMFqoA=
  x-amzn-trace-id: Root=1-5f90603f-487e3bef5f2502f32be0f868
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    238      0 --:--:-- --:--:-- --:--:--   238
  
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
  x-amzn-RequestId: 8f06fa0e-6251-45ba-8154-d322e94e0c34
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:23 GMT
  
  
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
  x-amzn-RequestId: cb31a486-cc4a-4ab3-8872-4aa72bfef5cd
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:23 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    461      0 --:--:-- --:--:-- --:--:--   461
  
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
  x-amzn-RequestId: c97ce4fe-0125-4e82-af95-39d5c18346d3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:24 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:22:25 GMT
  x-amzn-RequestId: ac9ba97e-05fd-4d01-849d-7b5dc2cbdfaa
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
  date: Wed, 21 Oct 2020 16:22:25 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: bb2e0933-ab53-4d1c-a1e9-120a4b68d5c8
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP6OEO-oAMFb6w=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f906041-75636ae77ced62a23ee14813
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 406e63b8-58f0-4d3a-86ac-442637610547
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:25 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:25 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 851224ba-41dc-4888-926d-1ee99e00e89b
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP6UH8vIAMFkHQ=
  x-amzn-trace-id: Root=1-5f906041-42e69fac5c60cbcb263c9ae0
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    263      0 --:--:-- --:--:-- --:--:--   262
  
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
  x-amzn-RequestId: 469fed51-ad73-45ca-a69b-a70aaa3c5c9d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:26 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: b0fec9a3-bb7c-4dc7-a7aa-25dbaf1bd1e4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:26 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:26 GMT
  content-length: 0
  x-amzn-requestid: 2c4f0e9b-ffa1-46ae-9f7e-2755af5a3805
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
      <td><strong>s3.us-east-1.amazonaws.com</strong></td>
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
curl --insecure -i -X OPTIONS https://s3.us-east-1.amazonaws.com/stringValue/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: s3.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: FY3Y9Y1RDT3J6M6Y
  x-amz-id-2: KguNnWSA/x5FhGtFXZTSgcTmECKR01253bqrYeqCDkZzj1B5B1uvcbxr6vSzyH5BGrRlWk6Pclc=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Wed, 21 Oct 2020 16:22:26 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <Error><Code>AccessForbidden</Code><Message>CORSResponse: Bucket not found</Message><Method>DELETE</Method><ResourceType>BUCKET</ResourceType><RequestId>FY3Y9Y1RDT3J6M6Y</RequestId><HostId>KguNnWSA/x5FhGtFXZTSgcTmECKR01253bqrYeqCDkZzj1B5B1uvcbxr6vSzyH5BGrRlWk6Pclc=</HostId></Error>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   321    0   321    0     0   1059      0 --:--:-- --:--:-- --:--:--  1059
  
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
curl --insecure -i -X OPTIONS https://stringValue.s3-control.us-east-1.amazonaws.com/v20180820/accesspoint/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,x-amz-account-id,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: stringValue.s3-control.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 403 Forbidden
  x-amz-request-id: 47CC9A3DA0DE7E42
  x-amz-id-2: p5UZ/c3oRlJ4Z044tZ8gP4xnmBPupnGbKzA9MLaYSmaM0YDlmlX0b4TDkbrTzLo/zP9Fi3x5Iws=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Wed, 21 Oct 2020 16:22:27 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <ErrorResponse><Error><Code>AccessDenied</Code><Message>Access Denied</Message><AccountId>stringvalue</AccountId></Error><RequestId>47CC9A3DA0DE7E42</RequestId><HostId>p5UZ/c3oRlJ4Z044tZ8gP4xnmBPupnGbKzA9MLaYSmaM0YDlmlX0b4TDkbrTzLo/zP9Fi3x5Iws=</HostId></ErrorResponse>
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   308    0   308    0     0   1080      0 --:--:-- --:--:-- --:--:--  1084
  
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
  x-amzn-RequestId: e53e07cc-bab5-4bb5-9b8c-1d41bebdd53a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:28 GMT
  
  
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
curl --insecure -i -X OPTIONS https://a2i-runtime.sagemaker.us-east-1.amazonaws.com/human-loops/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: a2i-runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/2 200
  date: Wed, 21 Oct 2020 16:22:28 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: cebe1060-bce5-45bd-8fc2-1db35bebe959
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: UxP6sFh-IAMFmJA=
  access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
  x-amzn-trace-id: Root=1-5f906044-767d34f64e4d5ffd19501cdf
  
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
curl --insecure -i -X OPTIONS https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/stringValue/invocations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: runtime.sagemaker.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 0d11427d-c64e-434a-b936-a51c5b1ff38a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-Amzn-Invoked-Production-Variant,x-amzn-RequestId,x-amzn-ErrorType,X-Amzn-SageMaker-Custom-Attributes,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Wed, 21 Oct 2020 16:22:28 GMT
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
  date: Wed, 21 Oct 2020 16:22:29 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 36fddaf4-1b98-4734-ab66-ebc083148390
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP6zHKLIAMFUFw=
  x-amzn-trace-id: Root=1-5f906045-4d3f68bb3d0f8c8306a6ccdd
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    231      0 --:--:-- --:--:-- --:--:--   231
  
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
  date: Wed, 21 Oct 2020 16:22:29 GMT
  content-type: application/json
  content-length: 113
  x-amzn-requestid: af821401-330a-4cd0-8230-f5281ab55b48
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP63G2eIAMFaWg=
  x-amzn-trace-id: Root=1-5f906045-472c35e9786bcb9b6f4b0294
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   113  100   113    0     0    321      0 --:--:-- --:--:-- --:--:--   321
  
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
  date: Wed, 21 Oct 2020 16:22:29 GMT
  content-length: 0
  x-amzn-requestid: 269b6ef7-ca56-45fb-b6f9-068c553b1ecf
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
  date: Wed, 21 Oct 2020 16:22:30 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: f64037e4-7b29-4e78-9462-afa501a43df9
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP7AHTUoAMFuUA=
  
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
  date: Wed, 21 Oct 2020 16:22:30 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: a6a2faa4-d5c0-42ed-8d1d-02c01182f11b
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP7DGveIAMFhMQ=
  x-amzn-trace-id: Root=1-5f906046-3614647753b4f05f394e962c
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    232      0 --:--:-- --:--:-- --:--:--   232
  
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
  x-amzn-RequestId: 7cb3844c-5d10-4385-addb-20d8ced46185
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:31 GMT
  
  
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
  date: Wed, 21 Oct 2020 16:22:31 GMT
  content-length: 0
  x-amzn-requestid: 828807f8-b829-4993-b9ab-68075c97ab67
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
  Date: Wed, 21 Oct 2020 16:22:31 GMT
  x-amzn-RequestId: 21165d65-c39d-4a2b-94b8-a7d70e8f08ce
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
  x-amzn-RequestId: 31e2375a-a6ee-4128-82c3-20a5ec13289a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:31 GMT
  
  
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
curl --insecure -i -X OPTIONS https://email.us-east-1.amazonaws.com/v2/email/configuration-sets -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: email.us-east-1.amazonaws.com" 
</code>
</pre>


<strong>stdout</strong>
<pre>
<code>
  HTTP/1.1 200 OK
  x-amzn-RequestId: 346864ac-e332-4ad3-be22-6acd0a6fc31b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:32 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 4ccfbc22-423c-4c3f-a0b1-de6c8301c613
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     85      0 --:--:-- --:--:-- --:--:--    85
  
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
  x-amzn-RequestId: de5f9b0e-7146-4557-a859-48421acb973c
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:33 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    390      0 --:--:-- --:--:-- --:--:--   389
  
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
  date: Wed, 21 Oct 2020 16:22:33 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f0e9beb3-110e-4465-82eb-52b174ec6836
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: UxP7fHcDoAMFu3g=
  access-control-allow-methods: DELETE,GET,PUT
  x-amzn-trace-id: Root=1-5f906049-20ab012d3169f8f249f7869f
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 51ae4d16-4980-4327-a82a-50f482cf0502
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:33 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    388      0 --:--:-- --:--:-- --:--:--   387
  
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
  x-amzn-RequestId: ea3f166e-0c5a-41da-890d-6b1248a56699
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:33 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 66afd687-9120-5024-848a-8e8df3aade89
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:33 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: f5399c1c-71ea-5616-adf0-c416136045f9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Wed, 21 Oct 2020 16:22:34 GMT
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
  Date: Wed, 21 Oct 2020 16:22:35 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: d6f2143f-bc77-4450-8d61-ac7aed96b57c
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
  date: Wed, 21 Oct 2020 16:22:35 GMT
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   121  100   121    0     0    372      0 --:--:-- --:--:-- --:--:--   372
  
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
  date: Wed, 21 Oct 2020 16:22:35 GMT
  content-length: 25
  x-amzn-requestid: 5602f700-01a3-4bbc-b1d0-fe3121dda7b7
  
  <AccessDeniedException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     81      0 --:--:-- --:--:-- --:--:--    81
  
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
  Date: Wed, 21 Oct 2020 16:22:36 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 3932a566-ba72-4fbd-b3a8-1bb3f2b2ee9b
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
  x-amzn-RequestId: 6d1d6572-0e8c-4716-97b1-9ac1a83ca0db
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:35 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: 3af4c1f3-fb5c-4903-b474-415cf00e4f80
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:36 GMT
  
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    407      0 --:--:-- --:--:-- --:--:--   405
  
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
  x-amzn-RequestId: 91dff1f8-b887-478e-a944-df0fa019d4d7
  Date: Wed, 21 Oct 2020 16:22:37 GMT
  Content-Length: 29
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     94      0 --:--:-- --:--:-- --:--:--    94
  
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
  date: Wed, 21 Oct 2020 16:22:37 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: e79b9973-e9e7-4212-91c0-e07d8b7f3fa9
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP8KFWEoAMF1XQ=
  x-amzn-trace-id: Root=1-5f90604d-2124aeee3ec282df3fc55e61
  
  {"Message":"Unable to determine service/operation name to be authorized"}
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    148      0 --:--:-- --:--:-- --:--:--   148
  
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
  x-amzn-RequestId: f5c56942-760d-408c-b0be-9e41fe6364da
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:37 GMT
  
  
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
  Date: Wed, 21 Oct 2020 16:22:38 GMT
  x-amzn-RequestId: 9b5c83c6-e789-4fbe-a400-02b16cd94b62
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
  date: Wed, 21 Oct 2020 16:22:38 GMT
  content-length: 29
  x-amzn-requestid: d5374a2a-fbe9-4af7-bdee-213581bd13cc
  
  <UnknownOperationException/>
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     98      0 --:--:-- --:--:-- --:--:--    98
  
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
  x-amzn-RequestId: 23d3c070-0a89-42b1-a8e3-2b36b879ca76
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:38 GMT
  
  
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
  x-amzn-RequestId: 31cc6da7-aec3-4f3a-adc9-1166ae8fa806
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:39 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  x-amzn-RequestId: a301d9fb-d4d3-466a-bbaf-f6ac59952afa
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:39 GMT
  
  
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
  x-amzn-RequestId: 5081555b-a3de-4e2d-803d-6df7d4b66487
  Content-Length: 127
  Date: Wed, 21 Oct 2020 16:22:39 GMT
  
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
  x-amzn-RequestId: 826da416-5666-454b-9c29-5bfe872c34d9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: private, no-cache, no-store, max-age=0
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Server-ResponseTime-Millis: 0
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:39 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  date: Wed, 21 Oct 2020 16:22:40 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 99a73432-d8a7-47bc-93bb-a3728c46adb9
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: UxP8pHZMIAMFlyg=
  x-amzn-trace-id: Root=1-5f906050-05fd53ba079e9af81795b10a
  
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
  x-amzn-RequestId: 0aaccf6b-43b7-4aee-90fe-fd8688ac24a6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:40 GMT
  
  
</code>
</pre>


<strong>stderr</strong>
<pre>
<code>
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
  Date: Wed, 21 Oct 2020 16:22:40 GMT
  x-amzn-RequestId: 5eb0fdb6-9342-47e9-b867-b0bf2f33ed43
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
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    388      0 --:--:-- --:--:-- --:--:--   388
  
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
  x-amzn-RequestId: 3d33688c-012d-436c-a599-e76be215ec8b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Wed, 21 Oct 2020 16:22:41 GMT
  
  
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
  date: Wed, 21 Oct 2020 16:22:42 GMT
  content-length: 0
  x-amzn-requestid: 5b5fcdb8-9e53-43d7-9fe0-61bdbf5fd385
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
