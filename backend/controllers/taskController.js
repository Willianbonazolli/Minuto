const taskModel = require("../models/taskModel");

async function listTasks(req, res) {
  const tasks = await taskModel.getTasksByUser(req.user.id);
  return res.json(tasks);
}

async function createTask(req, res) {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Titulo e obrigatorio" });
  }

  const taskId = await taskModel.createTask({
    title,
    description,
    userId: req.user.id
  });

  return res.status(201).json({ id: taskId });
}

async function updateTask(req, res) {
  const { title, description, status } = req.body;
  const { id } = req.params;

  if (!title || !status) {
    return res.status(400).json({ message: "Titulo e status sao obrigatorios" });
  }

  const affected = await taskModel.updateTask({
    id,
    userId: req.user.id,
    title,
    description,
    status
  });

  if (!affected) {
    return res.status(404).json({ message: "Tarefa nao encontrada" });
  }

  return res.json({ message: "Tarefa atualizada" });
}

async function deleteTask(req, res) {
  const { id } = req.params;

  const affected = await taskModel.deleteTask({ id, userId: req.user.id });
  if (!affected) {
    return res.status(404).json({ message: "Tarefa nao encontrada" });
  }

  return res.json({ message: "Tarefa removida" });
}

async function updateStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status e obrigatorio" });
  }

  const affected = await taskModel.updateStatus({
    id,
    userId: req.user.id,
    status
  });

  if (!affected) {
    return res.status(404).json({ message: "Tarefa nao encontrada" });
  }

  return res.json({ message: "Status atualizado" });
}

module.exports = {
  listTasks,
  createTask,
  updateTask,
  deleteTask,
  updateStatus
};
