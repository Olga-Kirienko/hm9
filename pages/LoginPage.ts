import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async fillUsername(name: string) {
    await this.usernameInput.fill(name);
  }

  async fillPassword(pass: string) {
    await this.passwordInput.fill(pass);
  }

  async submit() {
    await this.loginButton.click();
  }
}
