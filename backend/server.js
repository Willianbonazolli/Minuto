require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : true
  })
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Rota nao encontrada." });
});

app.use((error, req, res, next) => {
  console.error(error);
  const message = process.env.NODE_ENV === "production"
    ? "Erro interno do servidor."
    : error.message || "Erro interno do servidor.";

  res.status(500).json({ message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Minuto backend running on port ${port}`);
});
