const { Pool } = require("pg");

const useSsl =
  String(process.env.DB_SSL || "").toLowerCase() === "true" ||
  String(process.env.DATABASE_URL || "").includes("sslmode=require");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 5432),
  max: 10,
  ssl: useSsl ? { rejectUnauthorized: false } : undefined
});

module.exports = pool;
