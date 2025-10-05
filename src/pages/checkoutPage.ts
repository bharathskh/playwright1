import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutPage extends BasePage {
  cartItem = '.cart-item';
  checkoutBtn = 'button#checkout';
  paymentForm = 'form#payment';

  constructor(page: Page) {
    super(page);
  }

  async checkout() {
    await this.waitForVisible(this.checkoutBtn);
    await this.click(this.checkoutBtn);
    await this.waitForVisible(this.paymentForm, 10000);
  }
}
