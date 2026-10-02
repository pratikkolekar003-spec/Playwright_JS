import { test, expect } from '@playwright/test';

test('first test case', async ({ page }) => {

    await page.goto('https://www.automationpracticehub.com/');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/');

    const userName = page.locator('#username');
    const passWord = page.locator('#password');

    await userName.fill('sagesyntaxacademy');
    await passWord.fill('BuildingExcellence@111');

    await expect(userName).toHaveValue('sagesyntaxacademy');
    await expect(passWord).toHaveValue('BuildingExcellence@111');

    await page.getByRole('checkbox', { name: 'I Agree to the' }).check();
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.pause()
})