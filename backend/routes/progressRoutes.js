const express = require("express");

const progressController = require("../controllers/progressController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", progressController.getProgress);
router.put("/", progressController.saveProgress);

module.exports = router;
