function formatDate(value) {
  if (!value) {
    return "Data indisponivel";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const done = task.status === "done";

  return (
    <article className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex h-3 w-3 rounded-full ${done ? "bg-emerald-500" : "bg-amber-500"}`}
            />
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${
                done
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {done ? "Concluida" : "Pendente"}
            </span>
          </div>

          {task.description ? (
            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-black/70">{task.description}</p>
          ) : (
            <p className="mt-3 text-sm text-black/45">Sem descricao informada.</p>
          )}

          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-black/35">
            Criada em {formatDate(task.created_at)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:w-[15rem] lg:justify-end">
          <button
            type="button"
            onClick={onToggle}
            className="rounded-full border border-black/20 px-3 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-black hover:bg-black hover:text-white"
          >
            {done ? "Reabrir" : "Concluir"}
          </button>
          <button
            type="button"
            onClick={onEdit}
            className="rounded-full border border-black/20 px-3 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-black hover:bg-black hover:text-white"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="rounded-full border border-red-500/40 px-3 py-2 text-xs uppercase tracking-[0.18em] text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            Excluir
          </button>
        </div>
      </div>
    </article>
  );
}
