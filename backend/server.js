require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const progressModel = require("./models/progressModel");
const taskModel = require("./models/taskModel");
const userModel = require("./models/userModel");
const progressRoutes = require("./routes/progressRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const isProduction = process.env.NODE_ENV === "production";

function getAllowedOrigins() {
  const configured = String(process.env.CORS_ORIGIN || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (configured.length > 0) {
    return configured;
  }

  if (isProduction) {
    throw new Error("CORS_ORIGIN precisa estar configurado em producao.");
  }

  return ["http://localhost:5173", "http://localhost:4173", "http://127.0.0.1:5173"];
}

const allowedOrigins = getAllowedOrigins();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origem nao permitida pelo CORS."));
    },
    credentials: true
  })
);
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (isProduction) {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  next();
});
app.use(express.json({ limit: "100kb" }));
app.set("trust proxy", 1);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
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

async function startServer() {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET === "change_me") {
    if (isProduction) {
      throw new Error("JWT_SECRET invalido para producao.");
    }

    console.warn("Aviso: defina um JWT_SECRET forte para ambiente seguro.");
  }

  await userModel.ensureUsersTable();
  await taskModel.ensureTasksTable();
  await progressModel.ensureProgressTable();

  app.listen(port, () => {
    console.log(`Minuto backend running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});
