# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Ui\POMLogin.spec.js >> first test case
- Location: tests\Ui\POMLogin.spec.js:5:6

# Error details

```
Error: locator.fill: value: expected string, got undefined
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
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class Loginpage {
  4  |     page: Page;
  5  |     usernameFiels: Locator;
  6  |     passwordField: Locator;
  7  |     tncBtn: Locator;
  8  |     SigninBtn: Locator;
  9  | 
  10 |     constructor(page: Page) {
  11 |         this.page = page;
  12 |         this.usernameFiels = page.getByRole('textbox', { name: 'Username' });
  13 |         this.passwordField = page.getByRole('textbox', { name: 'Password' });
  14 |         this.tncBtn = page.getByRole('checkbox', { name: 'I Agree to the' });
  15 |         this.SigninBtn = page.getByRole('button', { name: 'Sign In' });
  16 | 
  17 |     }
  18 | 
  19 |     async navigateToLoginPage() {
  20 |         await this.page.goto('https://www.automationpracticehub.com/');
  21 |     }
  22 | 
  23 |     async login(Username: string, Password: string) {
> 24 |         await this.usernameFiels.fill(Username);
     |                                  ^ Error: locator.fill: value: expected string, got undefined
  25 |         await this.passwordField.fill(Password);
  26 |         await this.tncBtn.check();
  27 |         await this.SigninBtn.click();
  28 | 
  29 |     }
  30 | }
  31 | 
  32 | 
```