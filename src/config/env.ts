import dotenv from 'dotenv';
import path from 'path';

export function loadEnv(env?: string) {
  const nodeEnv = env || process.env.NODE_ENV || 'qa';
  const envPath = path.resolve(process.cwd(), `.env.${nodeEnv}`);
  dotenv.config({ path: envPath });
  // Also load default .env
  dotenv.config();
}

loadEnv();

export const ENV = process.env.NODE_ENV || 'qa';
export const CONFIG = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  apiBase: process.env.API_BASE || 'http://localhost:3000',
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  },
  credentials: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },
  slackWebhook: process.env.SLACK_WEBHOOK_URL
};
