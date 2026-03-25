const jwt = require("jsonwebtoken");

function parseCookies(cookieHeader) {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(";").reduce((acc, item) => {
    const [rawKey, ...rest] = item.trim().split("=");
    if (!rawKey) {
      return acc;
    }

    const rawValue = rest.join("=");
    try {
      acc[rawKey] = decodeURIComponent(rawValue);
    } catch (error) {
      acc[rawKey] = rawValue;
    }
    return acc;
  }, {});
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  const bearerToken = authHeader && authHeader.startsWith("Bearer ")
    ? authHeader.replace("Bearer ", "")
    : "";
  const cookies = parseCookies(req.headers.cookie || "");
  const cookieToken = cookies.minuto_token || "";
  const token = bearerToken || cookieToken;

  if (!token) {
    return res.status(401).json({ message: "Token nao informado." });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ message: "JWT_SECRET nao configurado." });
  }

  try {
    const payload = jwt.verify(token, secret, { algorithms: ["HS256"] });
    req.user = { id: payload.id, username: payload.username };
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalido." });
  }
}

module.exports = authMiddleware;
