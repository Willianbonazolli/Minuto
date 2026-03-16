export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex h-3 w-3 rounded-full ${
              task.status === "done" ? "bg-emerald-500" : "bg-amber-500"
            }`}
          />
          <h3 className="text-lg font-semibold">{task.title}</h3>
        </div>
        {task.description && (
          <p className="mt-2 text-sm text-black/70">{task.description}</p>
        )}
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/40">
          {task.status === "done" ? "concluída" : "pendente"}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={onToggle}
          className="rounded-full border border-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] transition hover:border-black hover:bg-black hover:text-white"
        >
          {task.status === "done" ? "reabrir" : "concluir"}
        </button>
        <button
          type="button"
          onClick={onEdit}
          className="rounded-full border border-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] transition hover:border-black hover:bg-black hover:text-white"
        >
          editar
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-full border border-red-500/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          excluir
        </button>
      </div>
    </div>
  );
}
