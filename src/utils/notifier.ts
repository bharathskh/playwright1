import fetch from 'node-fetch';
import config from '../config/config';

export async function sendSlack(message: string) {
  const url = config.slackWebhook;
  if (!url) return;
  try {
    await fetch(url, { method: 'POST', body: JSON.stringify({ text: message }), headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    // don't fail tests for notification errors
    // eslint-disable-next-line no-console
    console.error('Slack notify failed', err);
  }
}
