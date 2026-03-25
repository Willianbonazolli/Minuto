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
    return { label: "Pratica", tone: "bg-[#393939] text-[#f2f2f2]" };
  }

  return { label: "Fundamentos", tone: "bg-[#4C4C4C] text-[#f2f2f2]" };
}

export default function TaskItem({ task, onToggle }) {
  const done = task.status === "done";
  const difficulty = getDifficulty(task);

  return (
    <article className="rounded-[2rem] border border-white/10 bg-[#131313] p-5 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-[#4C4C4C] px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">
              Atividade
            </span>
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${
                done
                  ? "bg-[#262626] text-[#f2f2f2]"
                  : "bg-[#393939] text-[#f2f2f2]"
              }`}
            >
              {done ? "Resolvido" : "Para resolver"}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${difficulty.tone}`}>
              {difficulty.label}
            </span>
          </div>

          {task.description ? (
            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-[#cfcfcf]">{task.description}</p>
          ) : (
            <p className="mt-3 text-sm text-[#9f9f9f]">Sem enunciado complementar informado.</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#9f9f9f]">
            <span>Disponivel desde {formatDate(task.created_at)}</span>
            <span className="rounded-full bg-[#262626] px-3 py-1 text-[#d1d1d1]">
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
                ? "border border-white/25 text-white hover:border-white hover:bg-[#4C4C4C] hover:text-white"
                : "bg-[#4C4C4C] text-white hover:bg-[#393939]"
            }`}
          >
            {done ? "Revisar atividade" : "Marcar como resolvido"}
          </button>
        </div>
      </div>
    </article>
  );
}


