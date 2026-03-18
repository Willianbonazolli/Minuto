const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const progressModel = require("../models/progressModel");
const userModel = require("../models/userModel");

function normalizeUsername(username) {
  return String(username || "").trim().toLowerCase();
}

function buildEmailFromUsername(username) {
  return `${normalizeUsername(username)}@minuto.local`;
}

async function register(req, res, next) {
  try {
    const username = String(req.body.username || req.body.name || "").trim();
    const password = String(req.body.password || "");

    if (!username || !password) {
      return res.status(400).json({ message: "Usuario e senha sao obrigatorios." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "A senha precisa ter pelo menos 6 caracteres." });
    }

    const existing = await userModel.findByName(username);
    if (existing) {
      return res.status(409).json({ message: "Este usuario ja esta em uso." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser({
      name: username,
      email: buildEmailFromUsername(username),
      password: hashedPassword
    });

    await progressModel.saveProgressByUser(userId, []);

    return res.status(201).json({ id: userId, username, completedActivityIds: [] });
  } catch (error) {
    return next(error);
  }
}

async function login(req, res, next) {
  try {
    const username = String(req.body.username || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if ((!username && !email) || !password) {
      return res.status(400).json({ message: "Usuario e senha sao obrigatorios." });
    }

    const user = username
      ? await userModel.findByName(username)
      : await userModel.findByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Credenciais invalidas." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Credenciais invalidas." });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET nao configurado.");
    }

    const token = jwt.sign({ id: user.id, username: user.name }, secret, {
      expiresIn: "7d"
    });
    const completedActivityIds = await progressModel.getProgressByUser(user.id);

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.name,
        completedActivityIds
      }
    });
  } catch (error) {
    return next(error);
  }
}

async function logout(req, res) {
  return res.json({ message: "Logout realizado." });
}

module.exports = {
  register,
  login,
  logout
};
