import { test, expect } from '@playwright/test';

//Reporting in Playwright
//HTML
/*
   // HTML report configuration
  reporter: [
    ['html', {
      outputFolder: 'report',
      open: 'never/always'
    }]
  ],

*/

//Allure
/*
//To generate the allure reports
//1.npm install -D allure-playwright
//2.npm install -D allure-commandline

//3.Allure configuration inside playwright.config.js
reporter: [
  ['allure-playwright', {
    resultsDir: 'allure-results'
  }]
  ],

  4. Add scripts to package.json
Add:
{
  "scripts": {
    "test": "playwright test",
    "allure:generate": "allure generate allure-results --clean -o allure-report",
    "allure:open": "allure open allure-report",
    "allure:report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
  }
}

To generate the report: npx allure generate allure-results --clean -o allure-report
To open the report:npx allure open allure-report
*/

test.only('Playwright Reporting', async ({ page }) => {

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
    
    await expect(page).toHaveTitle("Automation Practice Hub : A Sage Syntax Academy's product")

    
})