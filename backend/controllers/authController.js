const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/userModel");

async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const existing = await userModel.findByEmail(email);
  if (existing) {
    return res.status(409).json({ message: "Email already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await userModel.createUser({
    name,
    email,
    password: hashedPassword
  });

  return res.status(201).json({ id: userId, name, email });
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const user = await userModel.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email }
  });
}

async function logout(req, res) {
  return res.json({ message: "Logged out" });
}

module.exports = {
  register,
  login,
  logout
};
