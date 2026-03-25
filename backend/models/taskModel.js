const db = require("./db");

async function ensureTasksTable() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(150) NOT NULL,
      description TEXT,
      status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'done')),
      user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

async function getTasksByUser(userId) {
  const { rows } = await db.query(
    "SELECT id, title, description, status, created_at FROM tasks WHERE user_id = $1 ORDER BY created_at DESC",
    [userId]
  );
  return rows;
}

async function createTask({ title, description, userId }) {
  const { rows } = await db.query(
    "INSERT INTO tasks (title, description, status, user_id) VALUES ($1, $2, 'pending', $3) RETURNING id",
    [title, description || null, userId]
  );
  return rows[0].id;
}

async function updateTask({ id, userId, title, description, status }) {
  const result = await db.query(
    "UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 AND user_id = $5",
    [title, description || null, status, id, userId]
  );
  return result.rowCount;
}

async function deleteTask({ id, userId }) {
  const result = await db.query(
    "DELETE FROM tasks WHERE id = $1 AND user_id = $2",
    [id, userId]
  );
  return result.rowCount;
}

async function updateStatus({ id, userId, status }) {
  const result = await db.query(
    "UPDATE tasks SET status = $1 WHERE id = $2 AND user_id = $3",
    [status, id, userId]
  );
  return result.rowCount;
}

module.exports = {
  ensureTasksTable,
  getTasksByUser,
  createTask,
  updateTask,
  deleteTask,
  updateStatus
};
