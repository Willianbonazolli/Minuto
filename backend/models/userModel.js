const db = require("./db");

async function ensureUsersTable() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

async function findByEmail(email) {
  const { rows } = await db.query(
    "SELECT * FROM users WHERE email = $1 LIMIT 1",
    [email]
  );
  return rows[0];
}

async function findByName(name) {
  const { rows } = await db.query(
    "SELECT * FROM users WHERE LOWER(name) = LOWER($1) LIMIT 1",
    [name]
  );
  return rows[0];
}

async function findById(id) {
  const { rows } = await db.query(
    "SELECT id, name, email, created_at FROM users WHERE id = $1 LIMIT 1",
    [id]
  );
  return rows[0];
}

async function createUser({ name, email, password }) {
  const { rows } = await db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
    [name, email, password]
  );
  return rows[0].id;
}

module.exports = {
  ensureUsersTable,
  findByEmail,
  findByName,
  findById,
  createUser
};
