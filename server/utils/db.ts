import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as schema from '../database/schema';

// This will create a local sqlite file if it doesn't exist
const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite, { schema });
