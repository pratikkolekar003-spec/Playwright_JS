import { test } from '@playwright/test';

test('login',async({page})=>{
//fixture: Ready-to-use setup provided by playwright for a test
//browser
//context
//page
//const context=await browser.newContext();
//const page=await context.newPage();
await page.goto("https://automationpracticehub.com/");
//username
//password
//login button click
await page.waitForTimeout(5000);
await page.locator("#username").fill("sagesyntaxacademy");
await page.waitForTimeout(5000);
await page.locator("[type='password']").fill("BuildingExcellence@111");
await page.waitForTimeout(5000);
//await page.locator("[type='submit']").click();
//await page.waitForTimeout(5000);
await page.getByRole("button",{name:"Sign In"}).click();
await page.waitForTimeout(5000);

});

/*
//Waits :Waits are used to synchronize the test with the applications behaviour
//waits in selenium:implicit,explicit,fluent
//waits in playwright:
//1.Auto waiting
//Auto waits in Playwright are inbuilt waits which waits for the button to become actionable
//2.Assertion waiting
//.toBeHidden();
//.toBeVisible();
//.toHaveText('');
//.toHaveURL('');
//3.Explicit waiting
//waitForTimeout();
//waitForSelector();
//waitForURL();
//waiForLoadState();
//waitForResponse();

//locator vs selector:
//selector: a selector is a pattern used to identify an element
//locator: is a playwright object used to identify a web element 
// and perform actions or assertions on that element

//Different types of locators:
//1.CSS Locator
page.locator("#username");
//2.xpath
//absolute xpath
//relative xpath
page.locator("//input[@id='username']");
//3.Role Locator
page.getByRole("button",{name:"Sign In"});
//4.Text Locator
page.getByText("");
//5.Label Locator
page.getByLabel("");
//6.Placeholder Locator
//7.Test ID Locator */