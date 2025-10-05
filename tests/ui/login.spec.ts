import { test, expect } from '@playwright/test';
import config from '../../src/config/config';
import { LoginPage } from '../../src/pages/loginPage';

test.describe('Login flow @smoke', () => {
  test('should login successfully', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto('/login');
    await login.login(config.credentials.username || 'demo', config.credentials.password || 'demo');
    await expect(page).toHaveURL(/dashboard/);
  });
});
