import { Page, Locator } from '@playwright/test';

export class Loginpage {
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    tncBtn: Locator;
    SigninBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByRole('textbox', { name: 'Username' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.tncBtn = page.getByRole('checkbox', { name: 'I Agree to the' });
        this.SigninBtn = page.getByRole('button', { name: 'Sign In' });

    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.automationpracticehub.com/');
    }

    async login(Username: string, Password: string) {
        await this.usernameField.fill(Username);
        await this.passwordField.fill(Password);
        await this.tncBtn.check();
        await this.SigninBtn.click();

    }
}

