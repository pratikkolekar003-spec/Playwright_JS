# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Screenshots.spec.js >> Screenshots for Test
- Location: tests\Screenshots.spec.js:8:6

# Error details

```
TypeError: now.getFullYear(...)String(...).padStart(...)String(...).padStart(...) is not a function
```

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#username')
    - locator resolved to <input value="" type="text" id="username" name="username" class="border-2 border-gray-400 rounded-xl px-2"/>
    - fill("sagesyntaxacademy")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - heading "Login" [level=1] [ref=e3]
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: Username
        - textbox "Username" [ref=e8]
        - paragraph [ref=e9]: Please enter username.
      - generic [ref=e10]:
        - generic [ref=e11]: Password
        - textbox "Password" [ref=e12]
        - paragraph [ref=e13]: Please enter password.
      - combobox [ref=e15]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e16]:
        - generic [ref=e17]:
          - radio "Admin" [checked] [ref=e18]
          - generic [ref=e19]: Admin
        - generic [ref=e20]:
          - radio "User" [ref=e21]
          - generic [ref=e22]: User
      - generic [ref=e23]:
        - checkbox "I Agree to the terms and conditions" [ref=e24]
        - generic [ref=e25]:
          - text: I Agree to the
          - link "terms and conditions" [ref=e27] [cursor=pointer]:
            - /url: "#"
      - button "Sign In" [ref=e29]
      - paragraph [ref=e30]:
        - text: The username is
        - mark [ref=e31]: sagesyntaxacademy
        - text: and the password is
        - mark [ref=e32]: BuildingExcellence@111
        - text: .
  - alert [ref=e33]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { userData } from '../Data/userData';
  3  | import { Excelreader } from '../utils/ExcelReader';
  4  | import { PropertyReader } from '../utils/PropertyReader';
  5  | import { ScreenshotUtil } from '../utils/Screenshots';
  6  | 
  7  | 
  8  | test.only('Screenshots for Test', async ({ page }, testInfo) => {
  9  | 
  10 |     const propertyGlobal = PropertyReader.readProperties('./config/global.properties')
  11 | 
  12 |     await page.goto(`${propertyGlobal.BASE_URL}`);
  13 |     await expect(page).toHaveURL('https://www.automationpracticehub.com/');
  14 | 
  15 |     ScreenshotUtil.takeScreenshot(page,testInfo);
  16 | 
  17 |     const readExcelFile1 = Excelreader.readExcelFile('userData.xlsx','userDataSheet1')
  18 | 
  19 |     const userName = page.locator('#username');
  20 |     const passWord = page.locator('#password');
  21 | 
> 22 |     await userName.fill(`${userData[0].userName}`);
     |                    ^ Error: locator.fill: Test ended.
  23 |     await passWord.fill(`${readExcelFile1[0].passWord}`);
  24 | 
  25 |     await expect(userName).toHaveValue('sagesyntaxacademy');
  26 |     await expect(passWord).toHaveValue('BuildingExcellence@111');
  27 | 
  28 |     await page.getByRole('checkbox', { name: 'I Agree to the' }).check();
  29 |     await page.getByRole('button', { name: 'Sign In' }).click();
  30 | 
  31 |     await page.pause()
  32 | })
```