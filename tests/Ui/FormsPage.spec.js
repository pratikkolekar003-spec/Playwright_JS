import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.automationpracticehub.com/');
    await expect(page).toHaveURL('https://www.automationpracticehub.com/');

    const userName = page.locator('#username');
    const passWord = page.locator('#password');

    await userName.fill('sagesyntaxacademy');
    await passWord.fill('BuildingExcellence@111');

    await page.getByRole('checkbox', { name: 'I Agree to the' }).check();
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.getByRole('heading', { name: 'Forms' }).click();
})



test('Forms Page Text Inputs', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Enter your name' }).fill('Pratik K');

    await page.getByRole('textbox', { name: 'Enter password' }).fill('Pk@123456');

    await page.getByRole('textbox', { name: 'example@email.com' }).fill('pratik.k@test.com');

    await page.getByRole('spinbutton', { name: 'Enter age' }).fill('30');

    await page.getByRole('textbox', { name: '+91 999999xxxx' }).fill('9996663331');

    await page.getByRole('textbox', { name: 'https://example.com' }).fill('https://forms_example.com');

    await page.getByRole('searchbox', { name: 'Search something...' }).fill('Search something abour formsInput');

    await page.getByRole('textbox', { name: 'message' }).fill('Forms fill up successfully.');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Are you sure, you want to submit the form');
        await dialog.accept();
    });

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Form submitted successfully : )');
        await dialog.accept();
    });


    await page.getByRole('button', { name: 'Submit', exact: true }).click();


});

test('Forms Page Date & Time Inputs', async ({ page }) => {

    await page.locator('[type="date"]').click();

    await page.locator('[type="time"]').fill('22:45');

    await page.locator('[type="month"]').fill('2026-10');

    await page.locator('[type="datetime-local"]').fill('2026-10-12T22:45');


});

test('Forms Page Special Inputs', async ({ page }) => {

    const colorPicker = page.getByLabel('Choose Color');
    await colorPicker.fill('#f001f4');

    await expect(colorPicker).toHaveValue('#f001f4');

    const colorRange = page.getByRole('slider', { name: 'Select Range' });
    await colorRange.fill('81');

    await expect(colorRange).toHaveValue('81');

});

test('Forms Page Selection Inputs', async ({ page }) => {

    const tncBox = page.getByRole('checkbox', { name: 'Accept Terms & Conditions' });
    await tncBox.check();
    await expect(tncBox).toBeChecked();

    const subandNewsBox = page.getByRole('checkbox', { name: 'Subscribe to Newsletter' });
    await subandNewsBox.check();
    await expect(subandNewsBox).toBeChecked();

    const reciveProductBox = page.getByRole('checkbox', { name: 'Receive Product Updates' });
    await reciveProductBox.uncheck();
    await expect(reciveProductBox).not.toBeChecked();

    const automationRadioBtn = page.getByRole('radio', { name: 'Automation Testing' });
    await automationRadioBtn.click();

    const comboBox = page.locator('#testing-level');
    await comboBox.selectOption('Advanced');
    await expect(comboBox).toHaveValue('Advanced')

    const languageDropdown = page.locator('.css-hlgwow');
    await languageDropdown.click();
    await page.getByText('English', { exact: true }).click();
    await expect(page.getByText('English', { exact: true })).toBeVisible();

});

test('Forms Page Button Inputs', async ({ page }) => {
    const txtBox = page.getByRole('textbox', { name: 'Enter Something' });
    await txtBox.fill('About button inputs');
    await expect(txtBox).toHaveValue('About button inputs');

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Form submitted successfully!');
        await dialog.accept();
    });

    const sumbitBtn = page.getByRole('button', { name: 'Submit Form' });
    await sumbitBtn.click();

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Button Clicked!');
        await dialog.accept();
    });

    const clickMeBtn = page.getByRole('button', { name: 'Click me' });
    await clickMeBtn.click();

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Image button clicked!');
        await dialog.accept();
    });

    const imageBtn = page.getByRole('button', { name: 'Submit Image' });
    await imageBtn.click();


});

test('Forms Page Dynamic Inputs', async ({ page }) => {

    const dropdownBox = page.locator('#input-type');
    await dropdownBox.selectOption('datetime-local');

    const addFieldBtn = page.getByRole('button', { name: 'Add Field' });
    await addFieldBtn.click();

    const dateTimeInput = page.getByPlaceholder('datetime-local input');
    await dateTimeInput.fill('2026-10-12T22:45');
    await expect(dateTimeInput).toHaveValue('2026-10-12T22:45');

});

test('Forms Page File Uploads', async ({ page }) => {
    const uploadFileInput = page.locator('#file-upload-input');
    await uploadFileInput.setInputFiles('uploadfile/playwright-upload-test.txt');


    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('1 file uploaded successfully.');
        await dialog.accept();
    });

    const uploadBtn = page.locator('#upload-files-button');
    await uploadBtn.click();

  
});

