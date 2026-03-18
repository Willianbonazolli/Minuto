const progressModel = require("../models/progressModel");

function normalizeCompletedIds(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return [...new Set(value.map((item) => String(item || "").trim()).filter(Boolean))];
}

async function getProgress(req, res, next) {
  try {
    const completedActivityIds = await progressModel.getProgressByUser(req.user.id);
    return res.json({ completedActivityIds });
  } catch (error) {
    return next(error);
  }
}

async function saveProgress(req, res, next) {
  try {
    const completedActivityIds = normalizeCompletedIds(req.body.completedActivityIds);
    const saved = await progressModel.saveProgressByUser(req.user.id, completedActivityIds);
    return res.json({ completedActivityIds: saved });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getProgress,
  saveProgress
};
