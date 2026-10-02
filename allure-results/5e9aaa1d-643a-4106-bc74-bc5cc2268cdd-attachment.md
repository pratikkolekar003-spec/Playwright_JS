# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\GETRequest.spec.js >> Get Request test
- Location: tests\API\GETRequest.spec.js:3:6

# Error details

```
TypeError: (0 , _test.expect)(...).tobe is not a function
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.only('Get Request test', async ({ request }, testInfo) => {
  4  | 
  5  |     const responseBody = await request.get('https://reqres.in/api/users?page=1');
  6  |     expect(responseBody.status()).toBe(200);
  7  | 
  8  |     const responseJson = await responseBody.json();
  9  |     //console.log(responseJson);
  10 | 
> 11 |     await expect(responseJson.id).tobe(1);
     |                                   ^ TypeError: (0 , _test.expect)(...).tobe is not a function
  12 |     await expect(responseJson.email).tobe('george.bluth@reqres.in');
  13 |     await expect(responseJson.first_name).tobe('George');
  14 |     await expect(responseJson.last_name).tobe('Bluth');
  15 | 
  16 | 
  17 | });
```