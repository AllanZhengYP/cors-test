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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:41 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 56ef3377-b540-4b8e-90d3-f8fcc719eaf5
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target
  x-amz-apigw-id: Twq5MHuFIAMF1Fw=
  access-control-allow-methods: GET,PUT
  x-amzn-trace-id: Root=1-5f768b6d-2774e2f64fff292c7106cd4f
  access-control-max-age: 600
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  x-amzn-RequestId: 44934eeb-088b-4a25-ab2d-f4d9614eee6d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:42 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:07:42 GMT
  content-length: 127
  x-amzn-requestid: 3cca132d-e226-41b3-b7c1-8bd96f2423b3
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    372      0 --:--:-- --:--:-- --:--:--   372
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  allow: OPTIONS, POST
  content-length: 0
  date: Fri, 02 Oct 2020 02:07:43 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:07:43 GMT
  x-amzn-requestid: 8c708aa2-92fd-4f28-894b-b177f927118b
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq5aHIToAMFkXA=
  x-cache: Error from cloudfront
  via: 1.1 6f51dc97d58041fe23fd6f71e2f76dd5.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: 0OVpfu-g2r9EZSAV6R_1pG0ZPYHRA5xEkEebaWpVM1By79324Dr7_g==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    278      0 --:--:-- --:--:-- --:--:--   278
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:43 GMT
  content-length: 0
  x-amzn-requestid: 38a3e515-e0e0-4521-8850-87d67fabd8c5
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,accept,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  x-amz-apigw-id: Twq5eLNJoAMEdsQ=
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://execute-api.us-east-1.amazonaws.com/@connections/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: execute-api.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: execute-api.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:07:44 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 9f8bcde7-6ce2-43d1-a9ed-c05c1a2e61e9
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq5iHxdIAMFSWQ=
  x-amzn-trace-id: Root=1-5f768b70-180ab801542247917f5aad02
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    212      0 --:--:-- --:--:-- --:--:--   212
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-requestid: 8728a817-13ed-40c0-82f2-bb53eabf450f
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: PUT
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  content-length: 0
  date: Fri, 02 Oct 2020 02:07:44 GMT
  x-envoy-upstream-service-time: 0
  server: envoy
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:07:44 GMT
  content-length: 127
  x-amzn-requestid: c8793ed1-0b68-484f-979b-646cd63214d0
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    375      0 --:--:-- --:--:-- --:--:--   374
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 5853c594-db5c-4739-b741-46f949cfb3d3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:45 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  Date: Fri, 02 Oct 2020 02:07:45 GMT
  x-amzn-RequestId: 09d7b143-cc25-4085-81c2-a7237a9bf59e
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    372      0 --:--:-- --:--:-- --:--:--   372
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:45 GMT
  content-length: 0
  x-amzn-requestid: b80dccd2-a7f3-4f17-bf14-be560d2f3325
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: d8b9fcee-2294-4c48-abe1-7795d7cbefa8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:45 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 23
  date: Fri, 02 Oct 2020 02:07:46 GMT
  x-amzn-requestid: 5aea5b6a-e3ad-401c-b44e-6ccda563baf6
  x-amzn-errortype: ForbiddenException
  x-amz-apigw-id: Twq56GN-oAMF1mg=
  x-cache: Error from cloudfront
  via: 1.1 0005a84c2971ff4f5bbb79e7ebc622a9.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: F5-216njQCo_CdsJKPlxUEZ7wQUy6ufEJpy32MIfUKYaFKI1Bao3_w==
  
  {"message":"Forbidden"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    23  100    23    0     0    211      0 --:--:-- --:--:-- --:--:--   211
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:07:46 GMT
  x-amzn-RequestId: 0852fbbd-1528-4fd2-9151-55181202f2b5
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 63da0f89-1110-4ff5-b539-1a9874e610f0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:46 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 90687332-0982-4149-92d4-e590172bfcb5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:46 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  Date: Fri, 2 Oct 2020 02:07:48 GMT
  x-amzn-RequestId: 20317174-17ec-464f-8ae7-f40a19aafb78
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    372      0 --:--:-- --:--:-- --:--:--   371
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:07:48 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 99be76f7-f5d5-488c-bfd1-1f01fb83f573
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq6MHitoAMFcKg=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    215      0 --:--:-- --:--:-- --:--:--   216
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:48 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 522fef42-3c41-4aaf-a00a-9b7cf22c74ed
  access-control-allow-origin: *
  access-control-allow-headers: *,Authorization,Date,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,content-type,x-amz-content-sha256,x-amz-user-agent,x-amzn-platform-id,x-amzn-trace-id
  x-amz-apigw-id: Twq6QGCmoAMFtAg=
  access-control-allow-methods: PUT
  x-amzn-trace-id: Root=1-5f768b74-63b8afe81bce6cd951694f62
  access-control-max-age: 600
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:49 GMT
  content-length: 0
  x-amzn-requestid: d932484a-1b90-4b72-986c-cb51d4c3f658
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: a442a630-0fcb-4faf-a6d7-a15b494d5ddd
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:07:49 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    377      0 --:--:-- --:--:-- --:--:--   377
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:49 GMT
  content-length: 0
  x-amzn-requestid: 79d24c04-71dc-43f4-a88c-52979359e680
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 566354a4-214b-4ce8-9eaa-53bdc1c84fd8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,x-amz-data-partition,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Fri, 02 Oct 2020 02:07:49 GMT
  x-amzn-RequestId: 566354a4-214b-4ce8-9eaa-53bdc1c84fd8
  Access-Control-Allow-Methods: PUT
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: ecbf95ef-7502-4d70-bad7-61e8751cb4fc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:49 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 8c851ccb-0f0e-4618-8a0d-4b67717559ab
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:50 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1b83975f-8412-45ee-83bf-eb96e1650448
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:51 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  Date: Fri, 02 Oct 2020 02:07:51 GMT
  x-amzn-RequestId: e5ddea42-a3ff-482d-92b2-d9d10cbca398
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    374      0 --:--:-- --:--:-- --:--:--   374
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: a762b6b7-b308-4a76-90a0-e2b0cd5ad990
  Content-Length: 29
  Date: Fri, 02 Oct 2020 02:07:51 GMT
  
  <UnknownOperationException/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     86      0 --:--:-- --:--:-- --:--:--    86
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://cloudsearchdomain.us-east-1.amazonaws.com/2013-01-01/search -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: cloudsearchdomain.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: cloudsearchdomain.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 62a7eaea-a320-4fe2-b8b8-c45c0e29340e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:52 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 0addacf3-da6f-4ebb-aae6-b4aa1104d2de
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:52 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 9a4d2636-adf9-40dc-85d4-a2f6dd8b5d29
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:52 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 3f447823-b960-4370-82a6-a903380f24e4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:52 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:53 GMT
  content-length: 0
  x-amzn-requestid: 30847996-7be8-4c25-9a1d-efb1c19f7a6e
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: eb68e22e-01da-4714-8acf-a6885fc8c90e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:54 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  x-amzn-RequestId: 35d0f01a-af2a-48b2-9fbf-8cbd16002bbe
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:54 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: f501dfce-4cc8-431b-9c42-8dd40b9987e3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 02:07:55 GMT
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:55 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: f7dcacc7-4b2b-4a68-8dd8-a1c807f50d2f
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Twq7TEhVoAMFlcQ=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f768b7b-64a419324ef2910a2cb463c5
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Fri, 02 Oct 2020 02:07:55 GMT
  x-amzn-requestid: dffc39a5-8b3f-41fd-964c-552d66fa71f5
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,Date,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-Target,X-Amz-User-Agent
  x-amz-apigw-id: Twq7UHZloAMFzLQ=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f768b7b-2e5d9d0004bc4c7430d52354
  access-control-max-age: 600
  x-cache: Miss from cloudfront
  via: 1.1 da5952aa802df39905ceb16592e9698a.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: 2kxZZueogz_Ni7DqzK68qzV0gh_DTjkaLiFWehi6USXM1DEKViz0mw==
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: c7a126c2-71fa-4450-b202-a302d21902c1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Type: null
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 9f761367-7a92-4cc1-b1f7-51816c9b38e6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:56 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:56 GMT
  content-length: 0
  x-amzn-requestid: 0641b6fa-b0e0-4d15-b043-aec04180ce80
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:57 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: ac887db5-31c8-4fff-a86b-eb55f14b7d63
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Twq7jHrFIAMF3ig=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f768b7d-461dce1268ea2c574127eeca
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:57 GMT
  content-length: 0
  x-amzn-requestid: 8a3c396e-c999-4602-a68a-be982dcdaa78
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:57 GMT
  content-length: 0
  x-amzn-requestid: 98afc359-d744-44cd-8886-7bde682558f0
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:58 GMT
  content-length: 0
  x-amzn-requestid: 45280b8b-ddd5-4a7a-a4fa-85c4f9f090ef
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 15e1ed1a-f62a-47b2-b93e-2edcf0e005a8
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:58 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: a494a0d5-905a-4b40-8b93-bdf4e8368cbb
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:58 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 404
  date: Fri, 02 Oct 2020 02:07:59 GMT
  content-length: 272
  x-amzn-requestid: 6c3b6723-f840-4441-b507-ccf29b8359a5
  
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
  <title>Page Not Found</title>
  </head>
  <body>Page Not Found</body>
  </html>
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   272  100   272    0     0    811      0 --:--:-- --:--:-- --:--:--   811
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 00ad0fbc-23ed-4db5-a36a-67b6dc216b16
  Access-Control-Allow-Origin: *
  Strict-Transport-Security: max-age=86400
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:07:59 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:07:59 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: bda73587-0e59-485f-9a63-e19519ac9046
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Twq8AE0JoAMFvEA=
  access-control-allow-methods: PUT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:00 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 8bac39e3-bc63-46d0-acf6-f98a8a1772a4
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,X-Amz-Bearer
  x-amz-apigw-id: Twq8EH-fIAMFaKQ=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f768b80-69f68cbb4fb427f174c9d00e
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6b98e469-0c63-4290-9ffe-52e7ca644b2a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:00 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:01 GMT
  content-length: 0
  x-amzn-requestid: 6ff43979-5dbe-4c78-bbec-1005ceca70fc
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: e97dde4b-c769-485f-a693-edc0e018fab3
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:00 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 12569332-3163-4d27-ab88-9c8a22b02dae
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:01 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:08:02 GMT
  x-amzn-requestid: 31918b17-8d6f-45fa-a86c-a6a3342839f6
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq8WEZRoAMFsXw=
  x-amzn-trace-id: Root=1-5f768b82-12ea8dfc315ae6683933545a
  x-cache: Error from cloudfront
  via: 1.1 eb7d416369db7f3961117199ddc9e343.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: NXeVOm0_EiRLBCp0lpEcB2JAwKNk6kgV7D_CG86EKjKdikxGCsI_Tg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    275      0 --:--:-- --:--:-- --:--:--   275
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:02 GMT
  content-length: 127
  x-amzn-requestid: 4f038eae-7324-4df5-9914-5dc658daefa8
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    376      0 --:--:-- --:--:-- --:--:--   376
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 6c6bff56-e2fa-4103-9c0f-ab7d12141ff6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:02 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  Content-Type: application/json
  Content-Length: 73
  Connection: keep-alive
  Date: Fri, 02 Oct 2020 02:08:03 GMT
  x-amzn-RequestId: 7d1d1f08-7888-403b-9d97-571d3915f871
  x-amzn-ErrorType: AccessDeniedException
  x-amz-apigw-id: Twq8gGtaIAMFxsg=
  X-Amzn-Trace-Id: Root=1-5f768b83-5c3c6905730c8a06501ffa12
  X-Cache: Error from cloudfront
  Via: 1.1 7f5e0d3b9ea85d0d75063a66c0ebc841.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: 4sMRg0CMbAzIoi8YbMPFaBj7UynafG3fcuMIoGh3tzeG8rgFVWE7cg==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    271      0 --:--:-- --:--:-- --:--:--   271
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://devicefarm.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devicefarm.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: devicefarm.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 77679b36-ec9d-484e-ba52-74a637e2e813
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:03 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2b170ec0-e6b7-4307-a029-a041e9efdf04
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:03 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:04 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: e1abb9eb-5d14-4101-adfa-6024292ea4ae
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq8rHxfoAMFu5g=
  x-amzn-trace-id: Root=1-5f768b84-662c1b9632e30b2a0c84fd0b
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    217      0 --:--:-- --:--:-- --:--:--   217
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4ceedc4f-f327-48f0-81e6-b98fa42af162
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:04 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Server: Server
  Date: Fri, 02 Oct 2020 02:08:04 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: Q217I55SHSR3HC4PD2Q9EU3ROVVV4KQNSO5AEMVJF66Q9ASUAAJG
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Server: Server
  Date: Fri, 02 Oct 2020 02:08:05 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: TJ3TEU5F7C90NA3R457V4G0COBVV4KQNSO5AEMVJF66Q9ASUAAJG
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: e1eb69e8-33fb-4a2c-9a73-19abb11e7bdf
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:04 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    375      0 --:--:-- --:--:-- --:--:--   375
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: *
  Access-Control-Max-Age: 1800
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Headers: content-type,user-agent,content-length,host,authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:05 GMT
  Server: AmazonEC2
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 5931ec9e-2388-44af-8f07-63f3d150d165
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:06 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    377      0 --:--:-- --:--:-- --:--:--   377
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: ad6062c4-cab7-4c43-979e-5790e209a9d4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 02:08:07 GMT
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  x-amzn-RequestId: 033e9e83-69de-4e98-bed7-d79b97044643
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:07 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: a0734873-41d4-4818-9eb7-270303c7b5db
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:07 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:08 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 84f830bd-637b-490c-92e1-fbae80bea624
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq9SHDRoAMFlrg=
  x-amzn-trace-id: Root=1-5f768b88-31cb72931961c4af5a4575a3
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    212      0 --:--:-- --:--:-- --:--:--   212
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:07 GMT
  x-amzn-RequestId: f4227cc2-8d7c-43a4-84fa-a48c8d5922d9
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:08 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 89f2965e-d4ef-4b0d-abaa-c23a5d8ce8d7
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Twq9ZHjEIAMFWGg=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f768b88-1693b02473238bf425b8e6cc
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 82f6f17b-c29c-4f0d-b30b-e8b7f09cba12
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:08 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: d8390ce3-620e-489e-b8cd-0de02236a8ee
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:09 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  x-amzn-RequestId: 952d6baf-c7a3-4a84-b548-0e29a61c717d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:09 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 04353c5b-021f-455a-a003-58e9e0caa9fd
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:09 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 690d9b2d-30f9-41aa-93c5-b67a4f292af0
  Content-Length: 29
  Date: Fri, 02 Oct 2020 02:08:09 GMT
  
  <UnknownOperationException/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     84      0 --:--:-- --:--:-- --:--:--    84
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7fa81349-167c-49cb-9992-b86be8dfeeb1
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:10 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 4ab4d1ec-375a-435a-a219-603d63a4544a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:10 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: dbe80051-d948-e228-8c18-8d9aa7fa9fc0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:11 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403
  x-amzn-RequestId: 534e8aa1-5d07-4701-9571-621d4f3ad78c
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:11 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    382      0 --:--:-- --:--:-- --:--:--   383
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:11 GMT
  x-amzn-RequestId: e0d03b74-c6df-4137-b4ca-65f239c4fda6
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:12 GMT
  x-amzn-RequestId: ea7ddae7-86ef-4ea4-a8c6-432aa66accec
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:13 GMT
  content-length: 0
  x-amzn-requestid: 954f1788-9c60-4191-85ec-144a4badefbf
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:13 GMT
  content-length: 0
  x-amzn-requestid: d562d6c2-39ff-41d9-be19-c36004f0b8d9
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 196a791a-26c1-4d9b-87a9-24bac0cdf6fc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:13 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 400 Bad Request
  x-amzn-RequestId: -8pF8_Hx71O1BmDGHBbXHs_nIeC8JShZq5LlqbFh3j3xTms
  Content-Length: 109
  Date: Fri, 02 Oct 2020 02:08:13 GMT
  Connection: close
  
  {"code":"MissingParameterValueException","message":"Required parameter missing: API version","type":"Client"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   109  100   109    0     0    325      0 --:--:-- --:--:-- --:--:--   326
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://globalaccelerator.us-east-1.amazonaws.com/ -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: globalaccelerator.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: globalaccelerator.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:14 GMT
  content-length: 0
  x-amzn-requestid: f5983c97-26e3-4e36-9fe1-7b460dd7ae94
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:15 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 519ae7a5-b8dd-431a-a1e0-9ef2e761b50f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq-ZGsVoAMFqug=
  x-amzn-trace-id: Root=1-5f768b8f-2f73110529fb8d762a3c2149
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    215      0 --:--:-- --:--:-- --:--:--   216
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://groundstation.us-east-1.amazonaws.com/contact/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: groundstation.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: groundstation.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:15 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 886c1b33-baa2-41c2-bc22-e29a05dbb0b2
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq-eEmBIAMFXHA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    211      0 --:--:-- --:--:-- --:--:--   211
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: https://foo.example
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Vary: Origin
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Access-Control-Allow-Credentials: true
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:15 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://honeycode.us-east-1.amazonaws.com/screendata -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: honeycode.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: honeycode.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 9a96a71f-f38a-43b9-a21f-32236428f9f3
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:16 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:17 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 58148723-7682-4154-a7aa-b15ea55410e0
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Twq-rGuQIAMFbNQ=
  access-control-allow-methods: PUT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: fbb5d0e1-a89d-47b4-a955-c33b00511545
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:16 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:17 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: 9a8856b6-4c64-4f77-b996-1d167aa99d70
  access-control-allow-origin: *
  access-control-allow-headers: Authorization, X-Amz-Date, X-Amz-Security-Token, x-amzn-iot-principal, X-Amz-Content-Sha256, X-Amz-User-Agent, Content-Type, x-amzn-principal
  x-amz-apigw-id: Twq-zHcQIAMFriA=
  access-control-allow-methods: OPTIONS, GET, HEAD, POST, PUT, PATCH, DELETE
  
  {}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      5      0 --:--:-- --:--:-- --:--:--     5
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://devices.iot1click.us-east-1.amazonaws.com/claims/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: PUT" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: devices.iot1click.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: devices.iot1click.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:18 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 1166a01f-c777-4328-b6de-4891c34a30c0
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Twq-3HfOoAMF15g=
  access-control-allow-methods: PUT,DELETE
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  access-control-allow-origin: *
  access-control-allow-methods: DELETE,POST,GET
  access-control-allow-headers: Authorization,X-amz-security-token,Accept,X-amz-date,X-amz-user-agent,X-amz-content-sha256,Accept-Language,X-requested-with,Content-Language,Content-Type
  access-control-max-age: 1800
  content-length: 0
  date: "Fri, 2 Oct 2020 02:08:18 GMT"
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:18 GMT
  content-length: 0
  x-amzn-requestid: 73571301-2242-470a-a92c-5c4cb83b004c
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:19 GMT
  content-length: 0
  x-amzn-requestid: 7d2f80d8-2038-4499-8562-630d2db78bbf
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 295b2186-c2c2-4dde-bb9e-59e1827784e2
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: GET
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:19 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:20 GMT
  content-length: 0
  x-amzn-requestid: ce68ec25-b7e4-459f-b23e-27ff19c17025
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  cache-control: no-cache, no-store, must-revalidate, private
  expires: 0
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  pragma: no-cache
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:20 GMT
  content-length: 25
  x-amzn-requestid: 396494cd-7df0-4487-955f-692bac8f849e
  
  <AccessDeniedException/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     73      0 --:--:-- --:--:-- --:--:--    73
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:20 GMT
  content-length: 0
  x-amzn-requestid: 4be164b1-dd18-4f0e-af0a-90f5d8e7453f
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:21 GMT
  content-length: 130
  x-amzn-requestid: 5aa0a6b6-e13f-47de-a4f8-f930c13db43a
  
  <AccessDeniedException>
  <Message>Unable to determine service/operation name to be authorized</Message>
  </AccessDeniedException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   130  100   130    0     0    383      0 --:--:-- --:--:-- --:--:--   383
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Fri, 02 Oct 2020 02:08:21 GMT
  x-amzn-requestid: 6199da77-d2f1-4d00-ba34-7d52b2bbbcf9
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: Twq_XHqWoAMF0Rw=
  access-control-allow-methods: POST
  x-amzn-trace-id: Root=1-5f768b95-571afc0e13c1129b292d8058
  x-cache: Miss from cloudfront
  via: 1.1 000f4a2f631bace380a0afa747a82483.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: egTVgizTa1upNChzHuAug5EI2mstxac27c02SlF2q-zHKURuOt_W-Q==
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:08:21 GMT
  x-amzn-requestid: 27cc8c9e-3daa-4feb-bf86-a57140d21bea
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: Twq_aFHZIAMFXsQ=
  x-amzn-trace-id: Root=1-5f768b95-1edf52712d3a5e4809ed0015
  x-cache: Error from cloudfront
  via: 1.1 75b094ecf0bf22429a44bab3eafcbf16.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: mYC0pJkMT4gWHtDBEDO6UphZh2K5zDT79GWFVHZfteyK2WCPE7_b1w==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    279      0 --:--:-- --:--:-- --:--:--   279
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2be66651-f01c-40bf-83b1-c6b8046dc659
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:21 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: e0b33146-8681-bf87-b743-bc90ab19a300
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amz-request-id,x-amz-id-2,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 02:08:22 GMT
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 5f9f211e-bf63-4e9e-a674-6b2762e64a2e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:21 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 573df275-a362-476c-9f5d-be68b8d3d732
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:22 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 543213f2-ab60-42dd-9be7-f26439956de7
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:23 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 159d85fb-36a1-4486-a65a-7ab79cdedf00
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:23 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: f5c4e44f-3a28-493e-9b26-a96e248509ef
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:24 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: d989789e-a3f0-4ba9-9866-c4a5463a5d09
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:23 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 471a91eb-ce1a-4e1b-82ff-b4fac40744c5
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: no-cache, no-store, must-revalidate, private
  Expires: 0
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Pragma: no-cache
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 02:08:24 GMT
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:25 GMT
  content-length: 0
  x-amzn-requestid: b967fdc3-bef3-4f0a-88f5-276336ae6cf8
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:25 GMT
  content-length: 0
  x-amzn-requestid: ce6041d8-67a3-46a9-8d83-062ed63e480f
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date,x-amz-log-result,x-amz-function-error
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:26 GMT
  x-amzn-RequestId: b787d624-3b88-4a12-9362-b62a6f273a32
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  x-amzn-requestid: 8a46d624-3f2b-41df-a288-4d6d6f3bcd35
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: DELETE
  access-control-expose-headers: x-amz-lex-session-attributes,x-amz-lex-slots,x-amz-lex-dialog-state,Date,x-amz-lex-message,x-amz-lex-input-transcript,x-amzn-ErrorMessage,x-amz-lex-slot-to-elicit,x-amzn-RequestId,x-amzn-ErrorType,x-amz-lex-intent-name
  access-control-max-age: 172800
  date: Fri, 2 Oct 2020 02:08:26 GMT
  content-length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 8fea5301-6104-4354-8ede-ebd32597b97f
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:26 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    375      0 --:--:-- --:--:-- --:--:--   374
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 404 Not Found
  Server: Server
  Date: Fri, 02 Oct 2020 02:08:27 GMT
  Content-Length: 114
  Connection: keep-alive
  x-amzn-RequestId: 73c4c299-16c1-44b4-a2c5-555f6881e229
  
  <UnknownOperationException>
  <Message>The request is not valid operation.</Message>
  </UnknownOperationException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   114  100   114    0     0    343      0 --:--:-- --:--:-- --:--:--   343
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 01be3aa3-4c16-4041-80b1-8ef2712dde2d
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:27 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:27 GMT
  content-length: 127
  x-amzn-requestid: 71be678e-add5-4390-9f3e-954483df545c
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    373      0 --:--:-- --:--:-- --:--:--   372
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:28 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 6e22f46b-4f45-45b4-9b81-199095139d5c
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrAcEkDIAMFnrA=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    214      0 --:--:-- --:--:-- --:--:--   214
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:28 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: b42e08ea-c886-4d2b-9f7d-fc15a1654145
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrAgFItIAMFc5A=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    211      0 --:--:-- --:--:-- --:--:--   211
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: PATCH
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:29 GMT
  x-amzn-RequestId: f4f1b60c-e281-4dca-ad0f-ad5c98a01e60
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  x-amzn-RequestId: a0d84958-4c34-4796-a81a-0e0a6b0079e9
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:29 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 50488aec-7e1b-476e-b544-0c21120dbfe8
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:29 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    373      0 --:--:-- --:--:-- --:--:--   372
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: c2a1d539-449a-4bfc-b2dd-e2bdc5f16d02
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:30 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    364      0 --:--:-- --:--:-- --:--:--   364
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:08:30 GMT
  x-amzn-requestid: 312aecc1-0dba-4203-baff-5edc345c9136
  x-amzn-errortype: APIGatewayFailedToParseRequestError
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrAxHW3IAMFx8A=
  x-amzn-trace-id: Root=1-5f768b9e-183395811dbe3e175e3001da
  x-cache: Error from cloudfront
  via: 1.1 6ba3abdaa02208a6c3f49daf91689ad2.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: hWxRVR0EAzHNgYRfZ4BmKv_XZ8Sd1uyw3fW9N5HNf_vRNNx-_kbM3g==
  
  {"message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    278      0 --:--:-- --:--:-- --:--:--   278
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  content-type: application/json
  content-length: 8
  date: Fri, 02 Oct 2020 02:08:30 GMT
  x-amzn-requestid: 1264b086-41d3-48e6-9006-64e3f6bc74a8
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-User-Agent
  x-amz-apigw-id: TwrAyHe1oAMFWsw=
  access-control-allow-methods: OPTIONS,POST
  x-amzn-trace-id: Root=1-5f768b9e-317a46d47e7e258e40e1868b
  x-cache: Miss from cloudfront
  via: 1.1 ee46fdde6e68c4ab6c791f98f3f42706.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: A47GnWuh_ecnQnMGZunRlE8u3JZg83JgsU8K0tjAu7UhO2GrcR5vsA==
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     8  100     8    0     0     71      0 --:--:-- --:--:-- --:--:--    71
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:08:30 GMT
  x-amzn-requestid: 564a9c10-d00d-4f34-9904-b90d0174705a
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrA0FlBIAMFdvQ=
  x-cache: Error from cloudfront
  via: 1.1 eb7d416369db7f3961117199ddc9e343.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: mPL0iqLL1ABp_ET7URctBb_-cb33AwLxgjTZ04iV9t2PhgyqKVADiw==
  
  {"message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    657      0 --:--:-- --:--:-- --:--:--   657
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:08:30 GMT
  x-amzn-requestid: 569cc692-f626-4b24-8f04-7a7916764973
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrA1GJnIAMFi9g=
  x-cache: Error from cloudfront
  via: 1.1 3c30155ad910c4216892222abd582a99.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: kSa6pIoOIra49KYUw9RlcjKZlSW7jJDLCo1rWypqXz_Cb7YIP0uUnw==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    651      0 --:--:-- --:--:-- --:--:--   646
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  content-type: application/json
  content-length: 3
  date: Fri, 02 Oct 2020 02:08:31 GMT
  x-amzn-requestid: df0af0ed-2dbb-4d3e-931c-15622f8b2e07
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key
  x-amz-apigw-id: TwrA3Gr3oAMF-AQ=
  access-control-allow-methods: *
  x-cache: Miss from cloudfront
  via: 1.1 7f5e0d3b9ea85d0d75063a66c0ebc841.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: 1gDfmeMWDTFfvB5eWGll3CMSmqsCuvN3uCl9Nle_fB9SByP0BaL0iw==
  
  {}
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0     26      0 --:--:-- --:--:-- --:--:--    26
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  Date: Fri, 02 Oct 2020 02:08:31 GMT
  x-amzn-RequestId: 5MRJ3YBC5HZMH557VF4OZTIYW36AOGMSKO4WBHNORDMMU7NEZ3XIY4WVBJLEM6XZT5YDPRKNJBXCFZ733LKHNWQ
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    373      0 --:--:-- --:--:-- --:--:--   373
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://data.mediastore.us-east-1.amazonaws.com/stringValue -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: DELETE" -H "Access-Control-Request-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: data.mediastore.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: data.mediastore.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:08:31 GMT
  x-amzn-requestid: 406ca64b-7b39-4b22-a15c-ad9b065efed9
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrA8FqmIAMFXsQ=
  x-cache: Error from cloudfront
  via: 1.1 4dde8ec6d6c12741888c2d3a059d4a2f.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: E7yt8HydRADNvIjFJY9iz6DWUq0eyFUg7KTCqW4aRuf7E-D57vYbjQ==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    657      0 --:--:-- --:--:-- --:--:--   657
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:31 GMT
  x-amzn-RequestId: f2585588-0fae-4c5c-988a-5e1e94a577db
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:32 GMT
  content-length: 0
  x-amzn-requestid: 612f1836-68b8-421d-b58b-a9aa14c543fe
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:32 GMT
  x-amzn-RequestId: f106ca42-082f-45ab-a6f4-3762b12c33f0
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  content-type: application/json
  content-length: 73
  date: Fri, 02 Oct 2020 02:08:32 GMT
  x-amzn-requestid: 8232e62a-cad3-43b3-9d27-bb517e709b94
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrBKEnjIAMF00A=
  x-amzn-trace-id: Root=1-5f768ba0-01d4bb8c245d4ea94ca545ed
  x-cache: Error from cloudfront
  via: 1.1 5a1753718d8b33365e5f693dd338c511.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: kZRnjnlRsUThJkzCD6RZBXcA3rVLoh_MIpKOxhVtyUgsOEM2yb2Q8A==
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    277      0 --:--:-- --:--:-- --:--:--   276
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 003d65bd-e84c-4f97-9fc0-8a862ef20684
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:33 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 22b4e119-3247-41f2-9064-99698a5ac8c4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:33 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

```console
Command failed: curl --insecure -i -X OPTIONS https://networkmanager.us-east-1.amazonaws.com/global-networks/stringValue/customer-gateway-associations -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" -H "Origin: https://foo.example" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token" -H "host: networkmanager.us-east-1.amazonaws.com" 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0curl: (6) Could not resolve host: networkmanager.us-east-1.amazonaws.com
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:33 GMT
  x-amzn-RequestId: 29fd866c-983d-4ab0-a5e0-eebd6d2e0ff2
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: efbb56b6-ef37-4afd-8f2d-4f3d8d590246
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:33 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: e7af4dde-3c54-420a-ac3c-2f54b056658b
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:34 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:35 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 395ae431-6823-427b-a3ea-27ae858519bd
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TwrBgFheIAMFyvw=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f768ba3-477afcab7a3f0f4420505b69
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:35 GMT
  x-amzn-RequestId: 4d78e159-478c-4094-b10e-751a262f406b
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:35 GMT
  x-amzn-RequestId: d707c713-7bb9-4c33-b9f8-d93b0c063c48
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:35 GMT
  x-amzn-RequestId: 4d7a8af3-8c95-4096-baeb-093c30c04890
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:36 GMT
  x-amzn-RequestId: 97cf43e6-f429-4cec-ac04-a97727ab4c1d
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Content-Type: application/json
  Content-Length: 0
  Connection: keep-alive
  Date: Fri, 02 Oct 2020 02:08:36 GMT
  x-amzn-RequestId: d9893198-7a4c-4759-b780-f97a63d827ac
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: TwrByGSPIAMFT7Q=
  Access-Control-Allow-Methods: POST,GET,OPTIONS
  X-Cache: Miss from cloudfront
  Via: 1.1 95b0ac620fa3a80ee590ecf1cda1c698.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: HIO50-C1
  X-Amz-Cf-Id: p4PrqChJOIMT11uHjqj3dfS1DD4xLiZh4u_00knYdFQFMzClWb6rCQ==
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2ecc7148-1c9c-4b4f-b101-6a7431183ded
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:36 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  content-type: application/json
  content-length: 3
  date: Fri, 02 Oct 2020 02:08:37 GMT
  x-amzn-requestid: c21a6519-be7a-4b90-a27c-32e5046bfd09
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TwrB5GLwIAMFlKw=
  access-control-allow-methods: GET,POST,PUT,DELETE,OPTIONS
  x-cache: Miss from cloudfront
  via: 1.1 916b3636f0e5533b1181c2f24120881f.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C2
  x-amz-cf-id: RCQx71YqqTgbW2x2NEchJCCoFrmLNTQhV90B6AM9Uj2cC-LKmxE6tw==
  
  {}
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     3  100     3    0     0     10      0 --:--:-- --:--:-- --:--:--    10
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 136c87f8-cb25-468a-ac0f-4b107e6eb468
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:37 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: f631871c-1b1e-4ac2-82f2-fcf0c7c5e873
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:38 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  content-type: application/json
  content-length: 0
  date: Fri, 02 Oct 2020 02:08:38 GMT
  x-amzn-requestid: 348ec5e5-5a01-465f-81a1-a59bfa58d41b
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TwrCDGd5oAMF3Pw=
  access-control-allow-methods: DELETE,GET
  x-amzn-trace-id: Root=1-5f768ba6-2d514a95143465f21e5e35e7
  x-cache: Miss from cloudfront
  via: 1.1 dbeb98709410a42541e3a4522fba8a67.cloudfront.net (CloudFront)
  x-amz-cf-pop: HIO50-C1
  x-amz-cf-id: 7bf9kM31ankrHcudYzItz_QrGSOfTZCJwxLSEvkQQxv6Pyq59D5zXQ==
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 500 Internal Server Error
  x-amzn-RequestId: 42BGyVXYGh7HgFHZVVZ4Ds
  Date: Fri, 2 Oct 2020 02:08:39 GMT
  Content-Length: 19
  
  <InternalFailure/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    19  100    19    0     0     56      0 --:--:-- --:--:-- --:--:--    56
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:39 GMT
  content-length: 127
  x-amzn-requestid: dcb9a8d1-c0cb-468a-96c9-2c0b9df10441
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    379      0 --:--:-- --:--:-- --:--:--   379
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:39 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: d380319f-b0ce-4fb4-b3f3-dfb5238a195a
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrCOEltoAMFTeQ=
  x-amzn-trace-id: Root=1-5f768ba7-13290c2f622a16893b7caeda
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    212      0 --:--:-- --:--:-- --:--:--   212
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 292de380-ac9f-472d-8fbd-1374526db783
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:39 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: dd6481b5-c99a-4be2-bc43-61b25c73e89c
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:40 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    360      0 --:--:-- --:--:-- --:--:--   360
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 0321c2b9-dedb-4e84-810d-bc3f5a49a33e
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:40 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:40 GMT
  x-amzn-RequestId: 8c42b527-1376-48b5-8863-a0890639c762
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:41 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: fb089100-405d-4f5d-94d9-4a543acdf4c0
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TwrCiEh7oAMFQrg=
  access-control-allow-methods: POST,GET
  x-amzn-trace-id: Root=1-5f768ba9-2416c7fa523c47fb0aa92fc1
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: b22b4f3c-ebc1-4ef4-930a-891443c625df
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:41 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:42 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 5fe53dc0-3068-4cf7-9752-02204501e15e
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrCpEZoIAMFiMA=
  x-amzn-trace-id: Root=1-5f768baa-40889d6d3e11e6a718794aa8
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    215      0 --:--:-- --:--:-- --:--:--   215
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: c8afb646-2750-40ff-a391-6b8e29620ee6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:42 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 7788aa0d-5500-4f1a-8c69-5b771754cc4f
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:42 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:43 GMT
  content-length: 0
  x-amzn-requestid: 48830798-70fe-4325-b28f-53f37f2ddcc1
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amz-request-id: 114B8D9EA42A48E4
  x-amz-id-2: nsLXoDRqWDMbmOxIdNTg2iP3qUH2yl1HOE1GI0JTfN6/DH3QAC51BwpH29X4jVOYXOfcm+DmWbE=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Fri, 02 Oct 2020 02:08:43 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <Error><Code>AccessForbidden</Code><Message>CORSResponse: Bucket not found</Message><Method>DELETE</Method><ResourceType>BUCKET</ResourceType><RequestId>114B8D9EA42A48E4</RequestId><HostId>nsLXoDRqWDMbmOxIdNTg2iP3qUH2yl1HOE1GI0JTfN6/DH3QAC51BwpH29X4jVOYXOfcm+DmWbE=</HostId></Error>
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   321    0   321    0     0    952      0 --:--:-- --:--:-- --:--:--   949
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amz-request-id: 9D06004F62E15FEB
  x-amz-id-2: HFaWHV2uKXVHFwP7y7uyuDwWkeD2MgcyJE6hlusL0roYcC4nfhtW4p4nNvHR9qEj4lWyYV3rWRM=
  Content-Type: application/xml
  Transfer-Encoding: chunked
  Date: Fri, 02 Oct 2020 02:08:43 GMT
  Server: AmazonS3
  
  <?xml version="1.0" encoding="UTF-8"?>
  <ErrorResponse><Error><Code>AccessDenied</Code><Message>Access Denied</Message><AccountId>stringvalue</AccountId></Error><RequestId>9D06004F62E15FEB</RequestId><HostId>HFaWHV2uKXVHFwP7y7uyuDwWkeD2MgcyJE6hlusL0roYcC4nfhtW4p4nNvHR9qEj4lWyYV3rWRM=</HostId></ErrorResponse>
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   308    0   308    0     0    911      0 --:--:-- --:--:-- --:--:--   911
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: b5332f82-da1d-4020-9ed6-dd6680bc0f51
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:44 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:45 GMT
  content-type: application/json
  content-length: 2
  x-amzn-requestid: b5b67576-4601-4ff8-94c3-933d2f05bc35
  access-control-allow-origin: *
  access-control-allow-headers: Authorization,Content-Type,X-Amz-Content-Sha256,X-Amz-Date,X-Amz-Security-Token,X-Amz-User-Agent,amz-sdk-invocation-id,amz-sdk-request
  x-amz-apigw-id: TwrDEFtAIAMF5tw=
  access-control-allow-methods: GET,PUT,POST,DELETE,OPTIONS
  x-amzn-trace-id: Root=1-5f768bad-53244e19671a5f9873f05a57
  
  {}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100     2  100     2    0     0      5      0 --:--:-- --:--:-- --:--:--     5
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: e69d07f5-6a20-493f-b92e-2986cb67d644
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-Amzn-Invoked-Production-Variant,x-amzn-RequestId,x-amzn-ErrorType,X-Amzn-SageMaker-Custom-Attributes,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 2 Oct 2020 02:08:45 GMT
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:45 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 77f41612-4542-4ea3-88d1-a81105ad5d1f
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrDLFbpoAMFZWg=
  x-amzn-trace-id: Root=1-5f768bad-308d1a3b74daa829200f6e27
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    210      0 --:--:-- --:--:-- --:--:--   210
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:46 GMT
  content-type: application/json
  content-length: 113
  x-amzn-requestid: a97884c2-f87b-4ded-8f48-e8b983a0a392
  x-amzn-errortype: ForbiddenException
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrDPHpqoAMFWyQ=
  x-amzn-trace-id: Root=1-5f768bae-42a526841f4e5523173279b1
  
  {
  "Message":"Unable to determine service/operation name to be authorized",
  "Code": "MethodNotAllowed"
  }
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   113  100   113    0     0    326      0 --:--:-- --:--:-- --:--:--   326
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:46 GMT
  content-length: 0
  x-amzn-requestid: ee0d38e1-0690-48bb-a7c1-547fd293e153
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:47 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 7fe9b373-a36f-4574-a578-290b396a8988
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrDXFljIAMFlKg=
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    207      0 --:--:-- --:--:-- --:--:--   207
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:47 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: f054ed88-4d4f-4f62-920c-6736c71f4c08
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrDbFgQoAMFXJQ=
  x-amzn-trace-id: Root=1-5f768baf-7d36248c248731ae00cf5b89
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    197      0 --:--:-- --:--:-- --:--:--   197
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: a1acdd79-976e-4e18-bafd-ca2940b0321a
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:47 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:48 GMT
  content-length: 0
  x-amzn-requestid: d8e7af91-9bb9-49d5-a1e7-3896e046f41e
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:47 GMT
  x-amzn-RequestId: 9ebdb8de-1485-479c-9921-42399da6a00d
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 8984fedb-a192-4b48-b997-a5993f9226e4
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:48 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 1a9dc3bd-ece9-4d2c-bf20-9d8b27d3a354
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:48 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: f4e2d502-4b51-45fb-bfcb-f171de1efb96
  Content-Type: null
  Content-Length: 29
  
  <UnknownOperationException/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     84      0 --:--:-- --:--:-- --:--:--    84
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: fa39d7da-9815-40fb-8c66-b4537c398a6b
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:49 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    340      0 --:--:-- --:--:-- --:--:--   339
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:08:50 GMT
  content-type: application/json
  content-length: 0
  x-amzn-requestid: 9c50c045-0ce7-4b19-9a9c-c6f927125d80
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-Content-Sha256,X-Amz-User-Agent
  x-amz-apigw-id: TwrD5Ez4oAMFdDg=
  access-control-allow-methods: DELETE,GET,PUT
  x-amzn-trace-id: Root=1-5f768bb2-1406a4a533bdc1866f2d4529
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: b764257f-acc7-411f-af14-11c7337a2f53
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:50 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0   127    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    369      0 --:--:-- --:--:-- --:--:--   368
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: 3b316f30-7966-48fb-bc89-382ec028716a
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:50 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    362      0 --:--:-- --:--:-- --:--:--   362
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 91311892-ef56-5bb6-89d1-4f6262a5f4b6
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:51 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: a0889c9d-fd73-50eb-81c4-cb6d7080c7d0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Date: Fri, 02 Oct 2020 02:08:51 GMT
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Type: null
  Content-Length: 0
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Server: Server
  Date: Fri, 02 Oct 2020 02:08:52 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: 30124d5c-4ead-4e82-b7b3-44479fdf1a49
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 400
  date: Fri, 02 Oct 2020 02:08:52 GMT
  content-type: application/json
  content-length: 121
  server: AWS SSO
  
  {"message":"Origin not allowed: https://foo.example","__type":"com.amazonaws.switchboard.portal#InvalidRequestException"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   121  100   121    0     0    350      0 --:--:-- --:--:-- --:--:--   350
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:53 GMT
  content-length: 25
  x-amzn-requestid: c669e0f9-8dc0-455d-b2be-0e40c453b0b9
  
  <AccessDeniedException/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    25  100    25    0     0     71      0 --:--:-- --:--:-- --:--:--    70
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  Date: Fri, 02 Oct 2020 02:08:53 GMT
  Content-Length: 0
  Connection: keep-alive
  x-amzn-RequestId: b6d6932c-1e04-40af-8af6-ba8d10973a0c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 59f746c5-0e75-436c-b2d1-8a9225373b09
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:52 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: cc594240-2ffa-4ac8-9301-8bd2c6c15c6d
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:53 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    371      0 --:--:-- --:--:-- --:--:--   371
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 404 Not Found
  x-amzn-RequestId: 766e60b1-f956-4a03-98a6-dece227de911
  Date: Fri, 2 Oct 2020 02:08:54 GMT
  Content-Length: 29
  
  <UnknownOperationException/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     86      0 --:--:-- --:--:-- --:--:--    86
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:54 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 9eab757f-7843-403d-ad90-ae9416d6e068
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrEmGRxoAMF5tw=
  x-amzn-trace-id: Root=1-5f768bb6-2d4edc6e0e0dc9561961a057
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    207      0 --:--:-- --:--:-- --:--:--   207
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 2b8c18b6-d577-4dc8-84c2-055f51ca645c
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:55 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Date: Fri, 02 Oct 2020 02:08:55 GMT
  x-amzn-RequestId: 2914126e-2618-449b-a311-de8a7b367ca0
  Content-Length: 0
  Connection: keep-alive
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 404
  date: Fri, 02 Oct 2020 02:08:56 GMT
  content-length: 29
  x-amzn-requestid: b4291ffb-d2d1-415f-a9d6-f4aa45d9a0d1
  
  <UnknownOperationException/>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    29  100    29    0     0     80      0 --:--:-- --:--:-- --:--:--    80
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: ea5a3d03-8e59-4e5e-8da7-a123a50cc7fc
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:56 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: f7e64d10-17d5-4669-be84-6c11bf979388
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:56 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: de75bfe8-5091-4328-b9fa-8ae060d6ae59
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:56 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  x-amzn-RequestId: a4f764c3-f049-48e5-95a5-0044a03af90a
  Content-Length: 127
  Date: Fri, 02 Oct 2020 02:08:57 GMT
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    356      0 --:--:-- --:--:-- --:--:--   355
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 88cad9e9-2bf8-4630-9878-f8cc25970ac0
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,user-agent,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Cache-Control: private, no-cache, no-store, max-age=0
  Access-Control-Allow-Methods: DELETE
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Server-ResponseTime-Millis: 0
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:57 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 403
  date: Fri, 02 Oct 2020 02:08:58 GMT
  content-type: application/json
  content-length: 73
  x-amzn-requestid: 67066d67-6ba4-432e-950d-30e6f961d4c0
  x-amzn-errortype: AccessDeniedException
  x-amz-apigw-id: TwrFLHmRoAMF9nA=
  x-amzn-trace-id: Root=1-5f768bba-6b050d8d40e7b26a432eef4e
  
  {"Message":"Unable to determine service/operation name to be authorized"}
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100    73  100    73    0     0    210      0 --:--:-- --:--:-- --:--:--   210
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200
  x-amzn-RequestId: 9a437422-b6ca-495a-8df8-9d2d265a3088
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:58 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 403 Forbidden
  Date: Fri, 02 Oct 2020 02:08:58 GMT
  x-amzn-RequestId: 24f2e393-c624-45c5-8d70-8f832033b66c
  Content-Length: 127
  Connection: keep-alive
  
  <MissingAuthenticationTokenException>
  <Message>Missing Authentication Token</Message>
  </MissingAuthenticationTokenException>
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0100   127  100   127    0     0    359      0 --:--:-- --:--:-- --:--:--   359
  
```

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

<strong>stdout</strong>

```console
  HTTP/1.1 200 OK
  x-amzn-RequestId: 97f4d345-762c-4645-a232-4e0de577a336
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Headers: Content-Type,X-Amz-Target,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  Access-Control-Allow-Methods: POST
  Access-Control-Expose-Headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  Access-Control-Max-Age: 172800
  Content-Length: 0
  Date: Fri, 02 Oct 2020 02:08:59 GMT
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

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

<strong>stdout</strong>

```console
  HTTP/2 200
  date: Fri, 02 Oct 2020 02:09:00 GMT
  content-length: 0
  x-amzn-requestid: 4e3135e0-459b-4235-8f17-41b2e82d7067
  access-control-allow-origin: *
  access-control-allow-headers: Content-Type,user-agent,content-length,host,Authorization,amz-sdk-invocation-id,amz-sdk-request,x-amz-security-token
  access-control-allow-methods: POST
  access-control-expose-headers: x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date
  access-control-max-age: 172800
  
  
```


<strong>stderr</strong>

```console
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  
```

</details>
      </td>
    </tr>
  </tbody>
</table>
