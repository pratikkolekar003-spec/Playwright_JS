import { test, expect } from '@playwright/test';

test('Post Request test', async ({ request }, testInfo) => {

    const responseBody = await request.post('https://reqres.in/api/users',
        {
            data: {
                name: 'Name 1',
                email: 'Name1@example.com',
                job: 'Automation Test Engineer'
            }
        }
    );
    expect(responseBody.status()).toBe(201);

    const responseJson = await responseBody.json();
    //   console.log(responseJson);

    expect(responseJson.name).toBe('Name 1');
    expect(responseJson.email).toBe('Name1@example.com');
    expect(responseJson.job).toBe('Automation Test Engineer');


});