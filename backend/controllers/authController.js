const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

async function register(req, res, next) {
  try {
    const name = String(req.body.name || "").trim();
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || "");

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Nome, email e senha sao obrigatorios." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "A senha precisa ter pelo menos 6 caracteres." });
    }

    const existing = await userModel.findByEmail(email);
    if (existing) {
      return res.status(409).json({ message: "Este e-mail ja esta em uso." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser({
      name,
      email,
      password: hashedPassword
    });

    return res.status(201).json({ id: userId, name, email });
  } catch (error) {
    return next(error);
  }
}

async function login(req, res, next) {
  try {
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({ message: "Email e senha sao obrigatorios." });
    }

    const user = await userModel.findByEmail(email);
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

    const token = jwt.sign({ id: user.id, email: user.email }, secret, {
      expiresIn: "7d"
    });

    return res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
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
