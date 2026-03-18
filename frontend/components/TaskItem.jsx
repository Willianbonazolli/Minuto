function formatDate(value) {
  if (!value) {
    return "Data indisponivel";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function getDifficulty(task) {
  const content = `${task.title} ${task.description || ""}`.toLowerCase();

  if (content.includes("if") || content.includes("else") || content.includes("logicos")) {
    return { label: "Intermediario", tone: "bg-orange-100 text-orange-700" };
  }

  if (content.includes("aritmeticos") || content.includes("relacionais")) {
    return { label: "Pratica", tone: "bg-sky-100 text-sky-700" };
  }

  return { label: "Fundamentos", tone: "bg-violet-100 text-violet-700" };
}

export default function TaskItem({ task, onToggle }) {
  const done = task.status === "done";
  const difficulty = getDifficulty(task);

  return (
    <article className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-black px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">
              Atividade
            </span>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${
                done
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {done ? "Resolvido" : "Para resolver"}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${difficulty.tone}`}>
              {difficulty.label}
            </span>
          </div>

          {task.description ? (
            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-black/70">{task.description}</p>
          ) : (
            <p className="mt-3 text-sm text-black/45">Sem enunciado complementar informado.</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-black/35">
            <span>Disponivel desde {formatDate(task.created_at)}</span>
            <span className="rounded-full bg-paper px-3 py-1 text-black/55">
              {done ? "Conquista liberada" : "Proximo passo da trilha"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 lg:w-[14rem] lg:justify-end">
          <button
            type="button"
            onClick={onToggle}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
              done
                ? "border border-black/20 text-black hover:border-black hover:bg-black hover:text-white"
                : "bg-black text-white hover:bg-black/80"
            }`}
          >
            {done ? "Revisar atividade" : "Marcar como resolvido"}
          </button>
        </div>
      </div>
    </article>
  );
}
