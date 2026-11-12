
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL belum diatur di .env.local");
}

const globalForPg = globalThis;

const pool =
  globalForPg.pgPool ||
  new Pool({
    connectionString,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPg.pgPool = pool;
}

export default pool;