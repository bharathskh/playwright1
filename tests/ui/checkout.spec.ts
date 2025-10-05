import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/loginPage';
import { CheckoutPage } from '../../src/pages/checkoutPage';
import config from '../../src/config/config';

test.describe('Checkout flow @regression', () => {
  test('complete checkout @smoke', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/login');
    await login.login(config.credentials.username || 'demo', config.credentials.password || 'demo');

    const checkout = new CheckoutPage(page);
    await checkout.goto('/cart');
    await checkout.checkout();

    await expect(page.locator('text=Thank you')).toBeVisible();
  });
});
