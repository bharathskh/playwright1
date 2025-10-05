import { Page } from '@playwright/test';
import { logger } from '../utils/logger';

export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    logger.info('Navigating to', path);
    await this.page.goto(path);
  }

  async click(selector: string) {
    await this.page.locator(selector).click({ trial: false });
  }

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async text(selector: string) {
    return this.page.locator(selector).innerText();
  }

  async waitForVisible(selector: string, timeout = 5000) {
    await this.page.locator(selector).waitFor({ state: 'visible', timeout });
  }
}
