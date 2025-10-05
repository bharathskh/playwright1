import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load .env based on NODE_ENV
const env = process.env.NODE_ENV || 'qa';
dotenv.config({ path: `.env.${env}` });

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? undefined : undefined,
  reporter: [ ['list'], ['allure-playwright'] ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 30_000
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ]
});
