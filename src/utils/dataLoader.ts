import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export const loadJson = (relPath: string) => {
  const p = path.resolve(process.cwd(), relPath);
  const raw = fs.readFileSync(p, 'utf-8');
  return JSON.parse(raw);
};

export const loadCsv = (relPath: string) => {
  const p = path.resolve(process.cwd(), relPath);
  const raw = fs.readFileSync(p, 'utf-8');
  return parse(raw, { columns: true });
};

export const mask = (value: string, unmaskedStart = 2, unmaskedEnd = 2) => {
  if (!value) return value;
  const len = value.length;
  if (len <= unmaskedStart + unmaskedEnd) return '*'.repeat(len);
  return (
    value.slice(0, unmaskedStart) +
    '*'.repeat(len - unmaskedStart - unmaskedEnd) +
    value.slice(len - unmaskedEnd)
  );
};
