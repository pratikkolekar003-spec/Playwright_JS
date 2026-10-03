# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Ui\POMLogin.spec.js >> first test case
- Location: tests\Ui\POMLogin.spec.js:5:6

# Error details

```
ReferenceError: toHaveValue is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - heading "Login" [level=1] [ref=e3]
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: Username
        - textbox "Username" [ref=e8]: sagesyntaxacademy
        - paragraph
      - generic [ref=e9]:
        - generic [ref=e10]: Password
        - textbox "Password" [ref=e11]: BuildingExcellence@111
        - paragraph
      - combobox [ref=e13]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e14]:
        - generic [ref=e15]:
          - radio "Admin" [checked] [ref=e16]
          - generic [ref=e17]: Admin
        - generic [ref=e18]:
          - radio "User" [ref=e19]
          - generic [ref=e20]: User
      - generic [ref=e21]:
        - checkbox "I Agree to the terms and conditions" [checked] [ref=e22]
        - generic [ref=e23]:
          - text: I Agree to the
          - link "terms and conditions" [ref=e25] [cursor=pointer]:
            - /url: "#"
      - button "Signing..." [active] [ref=e27]
      - paragraph [ref=e28]:
        - text: The username is
        - mark [ref=e29]: sagesyntaxacademy
        - text: and the password is
        - mark [ref=e30]: BuildingExcellence@111
        - text: .
  - alert [ref=e32]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Loginpage } from '../../pages/Login';
  3  | 
  4  | 
  5  | test.only('first test case', async ({ page }) => {
  6  | 
  7  |     let loginPage = new Loginpage(page);
  8  | 
  9  |     await loginPage.navigateToLoginPage();
  10 |     await expect(page).toHaveURL('https://www.automationpracticehub.com/');
  11 | 
  12 |     await loginPage.login('sagesyntaxacademy', 'BuildingExcellence@111')
  13 | 
> 14 |    await loginPage.usernameFiels(toHaveValue('sagesyntaxacademy'));
     |                    ^ ReferenceError: toHaveValue is not defined
  15 |     await loginPage.passwordField(toHaveValue('BuildingExcellence@111'));
  16 | 
  17 |     await page.pause()
  18 | });
```