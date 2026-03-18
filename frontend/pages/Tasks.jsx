import { useEffect, useMemo, useState } from "react";

import TaskItem from "../components/TaskItem.jsx";
import { apiRequest } from "../services/api.js";
import { clearSession, getToken } from "../services/auth.js";

const statusOptions = [
  { value: "all", label: "Todos os status" },
  { value: "pending", label: "Pendentes" },
  { value: "done", label: "Concluidas" }
];

const sortOptions = [
  { value: "recent", label: "Mais recentes" },
  { value: "oldest", label: "Mais antigas" },
  { value: "alphabetical", label: "Ordem alfabetica" }
];

function buildAuthHeaders() {
  const token = getToken();

  return token
    ? {
        Authorization: `Bearer ${token}`
      }
    : {};
}

function getFriendlyMessage(error) {
  if (error.message === "Token invalido" || error.message === "Token nao informado") {
    return "Sua sessao expirou. Entre novamente para continuar.";
  }

  return error.message;
}

export default function Tasks({ onLogout, user }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const loadTasks = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await apiRequest("/api/tasks", { headers: buildAuthHeaders() });
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      const message = getFriendlyMessage(err);
      setError(message);
      if (message.includes("sessao expirou")) {
        clearSession();
        onLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const nextTasks = tasks.filter((task) => {
      const matchesStatus = statusFilter === "all" || task.status === statusFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        task.title.toLowerCase().includes(normalizedQuery) ||
        (task.description || "").toLowerCase().includes(normalizedQuery);

      return matchesStatus && matchesQuery;
    });

    nextTasks.sort((a, b) => {
      if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title, "pt-BR");
      }

      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();

      if (sortBy === "oldest") {
        return dateA - dateB;
      }

      return dateB - dateA;
    });

    return nextTasks;
  }, [query, sortBy, statusFilter, tasks]);

  const stats = useMemo(() => {
    const doneCount = tasks.filter((task) => task.status === "done").length;
    const pendingCount = tasks.length - doneCount;
    const completionRate = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;

    return [
      { label: "Total", value: tasks.length, tone: "bg-black text-white" },
      { label: "Pendentes", value: pendingCount, tone: "bg-amber-100 text-amber-800" },
      { label: "Concluidas", value: doneCount, tone: "bg-emerald-100 text-emerald-800" },
      { label: "Progresso", value: `${completionRate}%`, tone: "bg-sky-100 text-sky-800" }
    ];
  }, [tasks]);

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  const handleRequestError = (err) => {
    const message = getFriendlyMessage(err);
    setError(message);
    setSuccess("");

    if (message.includes("sessao expirou")) {
      clearSession();
      onLogout();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim()) {
      setError("Informe um titulo para a tarefa.");
      return;
    }

    setSaving(true);

    try {
      if (editingId) {
        await apiRequest(`/api/tasks/${editingId}`, {
          method: "PUT",
          headers: buildAuthHeaders(),
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim(),
            status
          })
        });
        setSuccess("Tarefa atualizada com sucesso.");
      } else {
        await apiRequest("/api/tasks", {
          method: "POST",
          headers: buildAuthHeaders(),
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim()
          })
        });
        setSuccess("Tarefa criada com sucesso.");
      }

      resetForm();
      await loadTasks();
    } catch (err) {
      handleRequestError(err);
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (task) => {
    try {
      await apiRequest(`/api/tasks/${task.id}/status`, {
        method: "PATCH",
        headers: buildAuthHeaders(),
        body: JSON.stringify({
          status: task.status === "done" ? "pending" : "done"
        })
      });
      setSuccess(`Tarefa "${task.title}" atualizada.`);
      await loadTasks();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await apiRequest(`/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: buildAuthHeaders()
      });
      setSuccess("Tarefa removida com sucesso.");
      if (editingId === taskId) {
        resetForm();
      }
      await loadTasks();
    } catch (err) {
      handleRequestError(err);
    }
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description || "");
    setStatus(task.status);
    setSuccess("");
    setError("");
  };

  const handleMarkAllDone = async () => {
    const pendingTasks = tasks.filter((task) => task.status !== "done");

    if (!pendingTasks.length) {
      setSuccess("Todas as tarefas ja estao concluidas.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      await Promise.all(
        pendingTasks.map((task) =>
          apiRequest(`/api/tasks/${task.id}/status`, {
            method: "PATCH",
            headers: buildAuthHeaders(),
            body: JSON.stringify({ status: "done" })
          })
        )
      );
      setSuccess("Todas as tarefas pendentes foram concluidas.");
      await loadTasks();
    } catch (err) {
      handleRequestError(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/45">Visao geral</p>
            <h2 className="mt-2 text-3xl font-semibold">
              {user?.name ? `Bem-vindo, ${user.name}` : "Seu painel de tarefas"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-black/60">
              Crie, filtre e acompanhe tudo em um unico lugar. As tarefas podem ser editadas, concluidas ou reabertas a qualquer momento.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleMarkAllDone}
              disabled={saving || loading}
              className="rounded-full border border-black/20 px-4 py-2 text-sm transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Concluir pendentes
            </button>
            <button
              type="button"
              onClick={loadTasks}
              disabled={loading}
              className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Atualizar painel
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className={`rounded-2xl px-5 py-4 ${item.tone}`}>
              <p className="text-xs uppercase tracking-[0.22em] opacity-70">{item.label}</p>
              <p className="mt-3 text-3xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">{editingId ? "Editar tarefa" : "Nova tarefa"}</h3>
              <p className="mt-2 text-sm text-black/55">
                {editingId
                  ? "Atualize as informacoes abaixo e salve as alteracoes."
                  : "Preencha os campos e adicione uma nova tarefa ao painel."}
              </p>
            </div>
            {editingId ? (
              <span className="rounded-full bg-black px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                Edicao
              </span>
            ) : null}
          </div>

          <div className="mt-6 space-y-4">
            <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
              Titulo
              <input
                type="text"
                required
                maxLength="150"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none transition focus:border-black"
              />
            </label>

            <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
              Descricao
              <textarea
                rows="5"
                maxLength="600"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none transition focus:border-black"
              />
            </label>

            {editingId ? (
              <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
                Status
                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none transition focus:border-black"
                >
                  <option value="pending">Pendente</option>
                  <option value="done">Concluida</option>
                </select>
              </label>
            ) : null}
          </div>

          {error ? <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
          {success ? <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{success}</p> : null}

          <button
            type="submit"
            disabled={saving}
            className="mt-6 w-full rounded-full bg-black px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Salvando..." : editingId ? "Salvar alteracoes" : "Adicionar tarefa"}
          </button>

          {editingId ? (
            <button
              type="button"
              onClick={resetForm}
              className="mt-3 w-full rounded-full border border-black/20 px-4 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-black hover:bg-black hover:text-white"
            >
              Cancelar edicao
            </button>
          ) : null}
        </form>

        <div className="space-y-5">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Suas tarefas</h3>
                <p className="mt-2 text-sm text-black/55">Use os filtros para encontrar o que precisa mais rapido.</p>
              </div>
              <span className="rounded-full bg-paper px-4 py-2 text-sm text-black/65">
                {filteredTasks.length} de {tasks.length} itens
              </span>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,0.8fr))]">
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por titulo ou descricao"
                className="rounded-xl border border-black/20 px-4 py-3 text-sm outline-none transition focus:border-black"
              />

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-black/20 px-4 py-3 text-sm outline-none transition focus:border-black"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-xl border border-black/20 px-4 py-3 text-sm outline-none transition focus:border-black"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading ? <p className="text-sm text-black/60">Carregando tarefas...</p> : null}

          {!loading && filteredTasks.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-black/20 bg-white p-8 text-sm text-black/60 shadow-sm">
              Nenhuma tarefa encontrada com os filtros atuais. Ajuste a busca ou crie um novo item.
            </div>
          ) : null}

          <div className="space-y-4">
            {filteredTasks.map((task) => (
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
      </div>
    </section>
  );
}
