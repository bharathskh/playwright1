import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  usernameField = 'input[name="username"]';
  passwordField = 'input[name="password"]';
  submitBtn = 'button[type="submit"]';

  async login(username: string, password: string) {
    await this.fill(this.usernameField, username);
    await this.fill(this.passwordField, password);
    await this.click(this.submitBtn);
  }
}
