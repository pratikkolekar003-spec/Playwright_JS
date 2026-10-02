import { test, expect } from '@playwright/test';

test('Get Request test', async ({ request }, testInfo) => {

    const responseBody = await request.get('https://reqres.in/api/users?page=1');
    expect(responseBody.status()).toBe(200);

    const responseJson = await responseBody.json();
    //  console.log(responseJson);

    expect(responseJson.data[0].id).toBe(1);
    expect(responseJson.data[0].email).toBe('george.bluth@reqres.in');
    expect(responseJson.data[0].first_name).toBe('George');
    expect(responseJson.data[0].last_name).toBe('Bluth');


});