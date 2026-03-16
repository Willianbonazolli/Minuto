const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.id, email: payload.email };
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = authMiddleware;
