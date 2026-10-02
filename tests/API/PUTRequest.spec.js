import { test, expect } from '@playwright/test';

test('Put Request test', async ({ request }, testInfo) => {

    const responseBody = await request.post('https://reqres.in/api/users/2',
        {
            data: {
                "name": "morpheus",
                "job": "zion resident",
                "email":"xyz@example.com"
            }
        }
    );
    expect(responseBody.status()).toBe(201);

    const responseJson = await responseBody.json();
    //   console.log(responseJson);

    expect(responseJson.name).toBe('morpheus');
    expect(responseJson.email).toBe('xyz@example.com');
    expect(responseJson.job).toBe('zion resident');


});