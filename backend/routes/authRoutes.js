const express = require("express");

const authController = require("../controllers/authController");
const { createAuthRateLimiter } = require("../middleware/rateLimitMiddleware");

const router = express.Router();
const authRateLimiter = createAuthRateLimiter({ windowMs: 15 * 60 * 1000, max: 12 });

router.post("/register", authRateLimiter, authController.register);
router.post("/login", authRateLimiter, authController.login);
router.post("/logout", authController.logout);

module.exports = router;
