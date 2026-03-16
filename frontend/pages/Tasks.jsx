import { useEffect, useMemo, useState } from "react";

import TaskItem from "../components/TaskItem.jsx";
import { apiRequest } from "../services/api.js";
import { getToken } from "../services/auth.js";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const headers = useMemo(() => {
    const token = getToken();
    return {
      Authorization: `Bearer ${token}`
    };
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiRequest("/api/tasks", { headers });
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      if (editingId) {
        await apiRequest(`/api/tasks/${editingId}`, {
          method: "PUT",
          headers,
          body: JSON.stringify({ title, description, status })
        });
      } else {
        await apiRequest("/api/tasks", {
          method: "POST",
          headers,
          body: JSON.stringify({ title, description })
        });
      }
      setTitle("");
      setDescription("");
      setStatus("pending");
      setEditingId(null);
      await loadTasks();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggle = async (task) => {
    const nextStatus = task.status === "done" ? "pending" : "done";
    await apiRequest(`/api/tasks/${task.id}/status`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ status: nextStatus })
    });
    await loadTasks();
  };

  const handleDelete = async (taskId) => {
    await apiRequest(`/api/tasks/${taskId}`, {
      method: "DELETE",
      headers
    });
    await loadTasks();
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description || "");
    setStatus(task.status);
  };

  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <form onSubmit={handleSubmit} className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold">
          {editingId ? "Editar tarefa" : "Nova tarefa"}
        </h3>
        <div className="mt-6 space-y-4">
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            Titulo
            <input
              type="text"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none focus:border-black"
            />
          </label>
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            Descricao
            <textarea
              rows="4"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none focus:border-black"
            />
          </label>
          {editingId && (
            <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
              Status
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none focus:border-black"
              >
                <option value="pending">Pendente</option>
                <option value="done">Concluida</option>
              </select>
            </label>
          )}
        </div>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-black px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-black/80"
        >
          {editingId ? "Salvar alteracoes" : "Adicionar tarefa"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setTitle("");
              setDescription("");
              setStatus("pending");
            }}
            className="mt-3 w-full rounded-full border border-black/20 px-4 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-black hover:bg-black hover:text-white"
          >
            Cancelar
          </button>
        )}
      </form>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Suas tarefas</h3>
          <span className="text-sm uppercase tracking-[0.2em] text-black/40">
            {tasks.length} itens
          </span>
        </div>
        {loading && <p className="text-sm text-black/60">Carregando...</p>}
        {!loading && tasks.length === 0 && (
          <p className="rounded-2xl border border-dashed border-black/20 bg-white p-6 text-sm text-black/60">
            Nenhuma tarefa ainda. Crie a primeira no formulario ao lado.
          </p>
        )}
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => handleToggle(task)}
              onDelete={() => handleDelete(task.id)}
              onEdit={() => handleEdit(task)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
