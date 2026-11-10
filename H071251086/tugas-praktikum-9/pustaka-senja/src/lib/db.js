import { Pool } from "pg";

// pool atau atau koneksi atau akses ke database
const globalUntukPool = globalThis;

const pool =
  globalUntukPool.pgPool ??
  new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== "production") globalUntukPool.pgPool = pool;

export default pool;