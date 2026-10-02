import { test, expect } from '@playwright/test';
import { userData } from '../../Data/userData';
import { Excelreader } from '../../utils/ExcelReader';
import { PropertyReader } from '../../utils/PropertyReader';
import { Logger } from '../../utils/Logger';


test('Logs Test', async ({ page }, testInfo) => {

    const propertyGlobal = PropertyReader.readProperties('./config/global.properties')

    await page.goto(`${propertyGlobal.BASE_URL}`);
    await expect(page).toHaveURL('https://www.automationpracticehub.com/');

    Logger.info(`goto, ${propertyGlobal.BASE_URL}`)

    const readExcelFile1 = Excelreader.readExcelFile('userData.xlsx', 'userDataSheet1')

    const userName = page.locator('#username');
    const passWord = page.locator('#password');

    await userName.fill(`${userData[0].userName}`);
    await passWord.fill(`${readExcelFile1[0].passWord}`);

    Logger.info(`Creat User, ${userData[0].userName} ${readExcelFile1[0].passWord}`)

    await expect(userName).toHaveValue('sagesyntaxacademy');
    await expect(passWord).toHaveValue('BuildingExcellence@111');

    await page.getByRole('checkbox', { name: 'I Agree to the' }).check();
    await page.getByRole('button', { name: 'Sign In' }).click();

    Logger.info(`User SignIn...`)

    
});