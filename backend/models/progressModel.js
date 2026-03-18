const db = require("./db");

async function ensureProgressTable() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS user_progress (
      user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      completed_activity_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

async function getProgressByUser(userId) {
  const { rows } = await db.query(
    "SELECT completed_activity_ids FROM user_progress WHERE user_id = $1 LIMIT 1",
    [userId]
  );

  return rows[0]?.completed_activity_ids || [];
}

async function saveProgressByUser(userId, completedActivityIds) {
  const { rows } = await db.query(
    `
      INSERT INTO user_progress (user_id, completed_activity_ids, updated_at)
      VALUES ($1, $2::jsonb, NOW())
      ON CONFLICT (user_id)
      DO UPDATE SET
        completed_activity_ids = EXCLUDED.completed_activity_ids,
        updated_at = NOW()
      RETURNING completed_activity_ids
    `,
    [userId, JSON.stringify(completedActivityIds)]
  );

  return rows[0]?.completed_activity_ids || [];
}

module.exports = {
  ensureProgressTable,
  getProgressByUser,
  saveProgressByUser
};
