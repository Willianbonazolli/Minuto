const taskModel = require("../models/taskModel");

async function listTasks(req, res) {
  const tasks = await taskModel.getTasksByUser(req.user.id);
  return res.json(tasks);
}

async function createTask(req, res) {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
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
    return res.status(400).json({ message: "Title and status are required" });
  }

  const affected = await taskModel.updateTask({
    id,
    userId: req.user.id,
    title,
    description,
    status
  });

  if (!affected) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.json({ message: "Task updated" });
}

async function deleteTask(req, res) {
  const { id } = req.params;

  const affected = await taskModel.deleteTask({ id, userId: req.user.id });
  if (!affected) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.json({ message: "Task deleted" });
}

async function updateStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  const affected = await taskModel.updateStatus({
    id,
    userId: req.user.id,
    status
  });

  if (!affected) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.json({ message: "Status updated" });
}

module.exports = {
  listTasks,
  createTask,
  updateTask,
  deleteTask,
  updateStatus
};
