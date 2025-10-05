import { Pool } from 'pg';
import config from '../config/config';

let pool: Pool | null = null;

export function getPgPool() {
  if (!pool) {
    pool = new Pool({
      host: config.db.host,
      port: Number(config.db.port) || 5432,
      user: config.db.user,
      password: config.db.pass
    });
  }
  return pool;
}

export async function query(sql: string, params?: any[]) {
  const p = getPgPool();
  const res = await p.query(sql, params);
  return res.rows;
}
