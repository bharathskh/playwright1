import { APIRequestContext, request } from '@playwright/test';
import config from '../config/config';

export async function buildApiContext(): Promise<APIRequestContext> {
  const apiBase = config.apiBase;
  return await request.newContext({ baseURL: apiBase, extraHTTPHeaders: { 'accept': 'application/json' } });
}

export async function apiGet(ctx: APIRequestContext, path: string) {
  return ctx.get(path);
}

export async function apiPost(ctx: APIRequestContext, path: string, body: any) {
  return ctx.post(path, { data: body });
}
