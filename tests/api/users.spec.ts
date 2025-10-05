import { test, expect } from '@playwright/test';
import { buildApiContext } from '../../src/utils/requestHelper';

test.describe('API - Users', () => {
  test('GET /users returns 200', async () => {
    const ctx = await buildApiContext();
    const res = await ctx.get('/users');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBeTruthy();
  });

  test('POST /users create user', async () => {
    const ctx = await buildApiContext();
    const res = await ctx.post('/users', { data: { name: 'API Tester', email: `api+${Date.now()}@example.com` } });
    expect([200,201]).toContain(res.status());
  });
});
