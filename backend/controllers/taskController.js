const taskModel = require("../models/taskModel");

const VALID_STATUS = new Set(["pending", "done"]);

function normalizeTaskPayload(body) {
  return {
    title: String(body.title || "").trim(),
    description: String(body.description || "").trim(),
    status: String(body.status || "").trim()
  };
}

async function listTasks(req, res, next) {
  try {
    const tasks = await taskModel.getTasksByUser(req.user.id);
    return res.json(tasks);
  } catch (error) {
    return next(error);
  }
}

async function createTask(req, res, next) {
  try {
    const { title, description } = normalizeTaskPayload(req.body);

    if (!title) {
      return res.status(400).json({ message: "Titulo e obrigatorio." });
    }

    const taskId = await taskModel.createTask({
      title,
      description,
      userId: req.user.id
    });

    return res.status(201).json({ id: taskId });
  } catch (error) {
    return next(error);
  }
}

async function updateTask(req, res, next) {
  try {
    const { title, description, status } = normalizeTaskPayload(req.body);
    const { id } = req.params;

    if (!title || !status) {
      return res.status(400).json({ message: "Titulo e status sao obrigatorios." });
    }

    if (!VALID_STATUS.has(status)) {
      return res.status(400).json({ message: "Status invalido." });
    }

    const affected = await taskModel.updateTask({
      id,
      userId: req.user.id,
      title,
      description,
      status
    });

    if (!affected) {
      return res.status(404).json({ message: "Tarefa nao encontrada." });
    }

    return res.json({ message: "Tarefa atualizada." });
  } catch (error) {
    return next(error);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;

    const affected = await taskModel.deleteTask({ id, userId: req.user.id });
    if (!affected) {
      return res.status(404).json({ message: "Tarefa nao encontrada." });
    }

    return res.json({ message: "Tarefa removida." });
  } catch (error) {
    return next(error);
  }
}

async function updateStatus(req, res, next) {
  try {
    const { id } = req.params;
    const status = String(req.body.status || "").trim();

    if (!status) {
      return res.status(400).json({ message: "Status e obrigatorio." });
    }

    if (!VALID_STATUS.has(status)) {
      return res.status(400).json({ message: "Status invalido." });
    }

    const affected = await taskModel.updateStatus({
      id,
      userId: req.user.id,
      status
    });

    if (!affected) {
      return res.status(404).json({ message: "Tarefa nao encontrada." });
    }

    return res.json({ message: "Status atualizado." });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  listTasks,
  createTask,
  updateTask,
  deleteTask,
  updateStatus
};
