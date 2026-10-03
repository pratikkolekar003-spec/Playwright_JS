import { test, expect } from '@playwright/test';
import { Loginpage } from '../../pages/Login';


test('first test case', async ({ page }) => {

    let loginPage = new Loginpage(page);

    await loginPage.navigateToLoginPage();
    await expect(page).toHaveURL('https://www.automationpracticehub.com/');

    await loginPage.login('sagesyntaxacademy', 'BuildingExcellence@111')

    await expect(loginPage.usernameField).toHaveValue('sagesyntaxacademy');
    await expect(loginPage.passwordField).toHaveValue('BuildingExcellence@111');

    await page.pause()
});