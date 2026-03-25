import { useMemo, useRef, useState } from "react";

function getDifficultyTone(difficulty) {
  if (difficulty === "Easy") {
    return "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200";
  }

  if (difficulty === "Hard") {
    return "border border-rose-400/20 bg-rose-400/10 text-rose-200";
  }

  return "border border-amber-400/20 bg-amber-400/10 text-amber-100";
}

function getLanguageLabel(track) {
  if (track.id === "javascript") {
    return "JavaScript";
  }

  if (track.id === "css") {
    return "CSS";
  }

  return "HTML";
}

function getHintSnippet(track, activity) {
  if (track.id === "html") {
    if (activity.id === "html-1") {
      return "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>Minha página</title>\n  </head>\n  <body>\n    <h1>Olá, mundo!</h1>\n  </body>\n</html>";
    }

    if (activity.id === "html-2") {
      return "<h1>Título principal</h1>\n<h2>Subtítulo</h2>\n<p>Um parágrafo curto.</p>";
    }

    return activity.starterCode || "<section>\n  <!-- organize sua estrutura aqui -->\n</section>";
  }

  if (track.id === "css") {
    return activity.starterCode || "body {\n  color: #ffffff;\n}";
  }

  return activity.starterCode || 'console.log("Olá, mundo!");';
}

function renderHtmlToken(part, key) {
  if (/^\s*<!DOCTYPE/i.test(part)) {
    return (
      <span key={key}>
        <span className="text-[#94a3b8]">&lt;!DOCTYPE</span>
        <span className="text-[#e2e8f0]"> html&gt;</span>
      </span>
    );
  }

  const leadingSpace = part.match(/^\s*/)?.[0] || "";
  const trimmed = part.trim();
  const isClosing = trimmed.startsWith("</");
  const match = trimmed.match(/^<\/?([^\s/>]+)(.*?)(\/?)>$/);

  if (!match) {
    return (
      <span key={key} className="text-[#e2e8f0]">
        {part}
      </span>
    );
  }

  const [, tagName, rawAttributes, selfClosingMarker] = match;
  const attributeRegex = /([:@\w-]+)(=)("[^"]*"|'[^']*')?/g;
  const attributes = [];
  let attributeMatch;

  while ((attributeMatch = attributeRegex.exec(rawAttributes)) !== null) {
    attributes.push({
      name: attributeMatch[1],
      equal: attributeMatch[2] || "",
      value: attributeMatch[3] || ""
    });
  }

  return (
    <span key={key}>
      <span className="text-[#e2e8f0]">{leadingSpace}</span>
      <span className="text-[#94a3b8]">{isClosing ? "</" : "<"}</span>
      <span className="text-[#60a5fa]">{tagName}</span>
      {attributes.map((attribute, index) => (
        <span key={`${key}-${attribute.name}-${index}`}>
          <span className="text-[#e2e8f0]"> </span>
          <span className="text-[#c084fc]">{attribute.name}</span>
          <span className="text-[#94a3b8]">{attribute.equal}</span>
          <span className="text-[#f9a8d4]">{attribute.value}</span>
        </span>
      ))}
      {selfClosingMarker ? <span className="text-[#94a3b8]"> /</span> : null}
      <span className="text-[#94a3b8]">{">"}</span>
    </span>
  );
}

function renderCssCode(code) {
  return (
    <code className="block">
      {code.split("\n").map((line, index) => {
        const trimmed = line.trim();
        const indent = line.match(/^\s*/)?.[0] || "";

        if (!trimmed) {
          return (
            <div key={`${index}-empty`} className="whitespace-pre">
              {line}
            </div>
          );
        }

        if (trimmed.endsWith("{")) {
          return (
            <div key={`${index}-${line}`} className="whitespace-pre">
              <span className="text-[#e2e8f0]">{indent}</span>
              <span className="text-[#7dd3fc]">{trimmed.slice(0, -1).trim()}</span>
              <span className="text-[#94a3b8]"> {"{"}</span>
            </div>
          );
        }

        if (trimmed === "}") {
          return (
            <div key={`${index}-${line}`} className="whitespace-pre">
              <span className="text-[#e2e8f0]">{indent}</span>
              <span className="text-[#94a3b8]">{"}"}</span>
            </div>
          );
        }

        const match = trimmed.match(/^([-\w]+)(:\s*)(.+?)(;?)$/);
        if (!match) {
          return (
            <div key={`${index}-${line}`} className="whitespace-pre text-[#e2e8f0]">
              {line}
            </div>
          );
        }

        return (
          <div key={`${index}-${line}`} className="whitespace-pre">
            <span className="text-[#e2e8f0]">{indent}</span>
            <span className="text-[#c084fc]">{match[1]}</span>
            <span className="text-[#94a3b8]">{match[2]}</span>
            <span className="text-[#f8fafc]">{match[3]}</span>
            <span className="text-[#94a3b8]">{match[4]}</span>
          </div>
        );
      })}
    </code>
  );
}

function renderJavascriptCode(code) {
  return (
    <code className="block">
      {code.split("\n").map((line, lineIndex) => {
        const parts = line.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g);

        return (
          <div key={`${lineIndex}-${line}`} className="whitespace-pre">
            {parts.map((part, partIndex) => {
              if (!part) {
                return null;
              }

              if (/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')$/.test(part)) {
                return (
                  <span key={`${partIndex}-${part}`} className="text-[#f9a8d4]">
                    {part}
                  </span>
                );
              }

              const tokens = part.split(/\b(const|let|if|else|return|function|true|false|prompt|console|Number)\b/g);

              return tokens.map((token, tokenIndex) => {
                if (!token) {
                  return null;
                }

                if (/^(const|let|if|else|return|function|true|false)$/.test(token)) {
                  return (
                    <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#c084fc]">
                      {token}
                    </span>
                  );
                }

                if (/^(prompt|console|Number)$/.test(token)) {
                  return (
                    <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#7dd3fc]">
                      {token}
                    </span>
                  );
                }

                return (
                  <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#e2e8f0]">
                    {token}
                  </span>
                );
              });
            })}
          </div>
        );
      })}
    </code>
  );
}

function renderCode(code, trackId, placeholder = "") {
  const content = code || placeholder;
  const wrapperClass = code ? "" : "opacity-45";

  if (trackId === "css") {
    return <div className={wrapperClass}>{renderCssCode(content)}</div>;
  }

  if (trackId === "javascript") {
    return <div className={wrapperClass}>{renderJavascriptCode(content)}</div>;
  }

  return (
    <div className={wrapperClass}>
      <code className="block">
        {content.split("\n").map((line, lineIndex) => {
          const parts = line.split(/(<\/?[^>]+>)/g);

          return (
            <div key={`${lineIndex}-${line}`} className="whitespace-pre">
              {parts.map((part, partIndex) => {
                if (/^\s*<!DOCTYPE/i.test(part) || /^(\s*)<\/?[^>]+>$/.test(part)) {
                  return renderHtmlToken(part, `${partIndex}-${part}`);
                }

                return (
                  <span key={`${partIndex}-${part}`} className="text-[#e2e8f0]">
                    {part}
                  </span>
                );
              })}
            </div>
          );
        })}
      </code>
    </div>
  );
}

function getSubmissionStatus(isSubmitted) {
  if (isSubmitted) {
    return {
      label: "Concluída",
      classes: "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
    };
  }

  return {
    label: "Em progresso",
    classes: "border border-sky-400/20 bg-sky-400/10 text-sky-200"
  };
}

function buildPreviewDocument(trackId, code) {
  if (!code.trim()) {
    return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Preview</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #f8fafc;
        color: #334155;
        font-family: Arial, sans-serif;
      }
      .empty {
        max-width: 28rem;
        padding: 2rem;
        border-radius: 1rem;
        border: 1px dashed #94a3b8;
        background: white;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="empty">Escreva seu código para ver o preview ao vivo.</div>
  </body>
</html>`;
  }

  if (trackId === "html") {
    return code;
  }

  if (trackId === "css") {
    return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Preview CSS</title>
    <style>
      body {
        margin: 0;
        padding: 32px;
        background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
        color: #e5e7eb;
        font-family: Arial, sans-serif;
      }
      .card {
        max-width: 560px;
        margin: 0 auto;
        padding: 24px;
        border-radius: 20px;
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(148, 163, 184, 0.25);
        box-shadow: 0 20px 60px rgba(15, 23, 42, 0.35);
      }
      .card h1 {
        margin-top: 0;
      }
      ${code}
    </style>
  </head>
  <body>
    <div class="card">
      <p>Preview CSS</p>
      <h1>Seu estilo aparece aqui</h1>
      <p>Use esta área para testar cores, espaçamento, tipografia e layout.</p>
      <button>Botão de exemplo</button>
    </div>
  </body>
</html>`;
  }

  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Preview JavaScript</title>
    <style>
      body {
        margin: 0;
        padding: 24px;
        background: #ffffff;
        color: #0f172a;
        font-family: Arial, sans-serif;
      }
      .console {
        margin-top: 20px;
        padding: 16px;
        border-radius: 14px;
        background: #0f172a;
        color: #e2e8f0;
        white-space: pre-wrap;
      }
    </style>
  </head>
  <body>
    <h1>Preview JavaScript</h1>
    <p>Use <strong>console.log</strong> para ver as saídas abaixo.</p>
    <div id="console" class="console">Console pronto.</div>
    <script>
      const consoleElement = document.getElementById("console");
      const originalLog = console.log;
      console.log = (...args) => {
        consoleElement.textContent += "\\n" + args.join(" ");
        originalLog(...args);
      };
      try {
        ${code}
      } catch (error) {
        consoleElement.textContent += "\\nErro: " + error.message;
      }
    </script>
  </body>
</html>`;
}

function getNextLabel(track, activity) {
  const currentIndex = track.items.findIndex((item) => item.id === activity.id);
  if (currentIndex === -1 || currentIndex === track.items.length - 1) {
    return "Última atividade deste módulo";
  }

  return `Próxima atividade: ${track.items[currentIndex + 1].title}`;
}

function splitSentences(text) {
  return String(text || "")
    .split(/(?<=[.!?])\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getLearningBlocks(activity) {
  const sentences = splitSentences(activity.theory);
  const concept = sentences[0] || activity.summary;
  const importance = sentences[1] || "Você vai entender como esse conceito aparece em situações reais.";
  const outcome = activity.instructions?.length
    ? `Ao final, você entrega: ${activity.instructions.slice(0, 2).join(" ")}`
    : "Ao final, você entrega uma solução funcional para a atividade.";

  return { concept, importance, outcome };
}

function getInstructionGuide(activity) {
  const lastIndex = (activity.instructions || []).length - 1;

  return (activity.instructions || []).map((instruction, index) => ({
    title: `Atividade ${index + 1}`,
    instruction,
    explanation:
      index === 0
        ? "Comece por esta etapa para montar uma base sólida da solução."
        : index === lastIndex
          ? "Finalize esta etapa e valide no preview para garantir que o resultado está correto."
          : "Com a base pronta, avance neste passo para consolidar o aprendizado da aula."
  }));
}

export default function ActivityWorkspace({ track, activity, onBack, onCompleteActivity }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [editorValue, setEditorValue] = useState("");
  const [submitted, setSubmitted] = useState(activity.status === "done");
  const [feedback, setFeedback] = useState("");
  const submissionStatus = getSubmissionStatus(submitted);
  const editorRef = useRef(null);
  const previewDocument = useMemo(() => buildPreviewDocument(track.id, editorValue), [editorValue, track.id]);
  const instructionGuide = useMemo(() => getInstructionGuide(activity), [activity]);
  const learningBlocks = useMemo(() => getLearningBlocks(activity), [activity]);

  const lessonIndex = useMemo(
    () => track.items.findIndex((item) => item.id === activity.id) + 1,
    [activity.id, track.items]
  );

  const completedLessons = useMemo(
    () => track.items.filter((item) => item.status === "done").length,
    [track.items]
  );

  const progressPercent = useMemo(
    () => Math.round((completedLessons / track.items.length) * 100),
    [completedLessons, track.items.length]
  );

  const tabs = [
    { id: "overview", label: "Visão geral" },
    { id: "notes", label: "Guia da aula" }
  ];

  const handleSubmit = () => {
    if (submitted) {
      onBack?.();
      return;
    }

    if (!editorValue.trim()) {
      setFeedback("Escreva sua resposta no editor antes de enviar.");
      return;
    }

    const completed = onCompleteActivity?.(activity.id);

    if (completed) {
      setSubmitted(true);
      setFeedback("Atividade concluída com sucesso. A próxima atividade foi liberada.");
      return;
    }

    setFeedback("Não foi possível concluir esta atividade agora.");
  };

  const handleEditorKeyDown = (event) => {
    if (track.id !== "html" || event.key !== ">" || event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }

    const textarea = event.currentTarget;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start !== end) {
      return;
    }

    const beforeCursor = editorValue.slice(0, start);
    const tagMatch = beforeCursor.match(/<([A-Za-z][\w-]*)$/);
    if (!tagMatch) {
      return;
    }

    const tagName = tagMatch[1].toLowerCase();
    const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
    if (voidTags.has(tagName)) {
      return;
    }

    event.preventDefault();

    const nextValue = `${editorValue.slice(0, start)}></${tagName}>${editorValue.slice(end)}`;
    const nextCursor = start + 1;

    setEditorValue(nextValue);

    requestAnimationFrame(() => {
      if (editorRef.current) {
        editorRef.current.selectionStart = nextCursor;
        editorRef.current.selectionEnd = nextCursor;
      }
    });
  };

  return (
    <section className="page-enter space-y-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_360px]">
        <div className="surface-enter overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/95 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(80,80,80,0.18),rgba(20,20,20,0.92)_55%,rgba(0,0,0,0.98))] px-6 py-6 sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#d4d4d4]">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {track.label}
              </span>
              <span className={`rounded-full px-3 py-1 ${getDifficultyTone(activity.difficulty)}`}>
                {activity.difficulty}
              </span>
              <span className={`rounded-full px-3 py-1 ${submissionStatus.classes}`}>
                {submissionStatus.label}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.28em] text-[#b5b5b5]">
                  Aula {lessonIndex} de {track.items.length}
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{activity.title}</h1>
                <p className="mt-4 text-base leading-8 text-[#cbd5e1]">{activity.summary}</p>
              </div>

              <button
                type="button"
                onClick={onBack}
                className="glass-button rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Voltar para dashboard
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#000000]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#94a3b8]">
                <span>{getNextLabel(track, activity)}</span>
              </div>
              <div className="grid min-h-[18rem] place-items-center bg-[radial-gradient(circle_at_top,rgba(80,80,80,0.16),transparent_45%),linear-gradient(180deg,#141414_0%,#000000_100%)] p-8">
                <div className="w-full max-w-3xl rounded-[1.75rem] border border-white/10 bg-[#141414]/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#3c3c3c] text-2xl font-semibold text-white">
                      {lessonIndex}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-[#b5b5b5]">Objetivo da atividade</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">{activity.title}</h2>
                    </div>
                  </div>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#cbd5e1]">
                    {learningBlocks.importance}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8">
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    activeTab === tab.id
                      ? "bg-white text-[#0f172a]"
                      : "border border-white/10 bg-white/5 text-[#cbd5e1] hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "overview" ? (
              <div className="mt-6 space-y-8">
                <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h2 className="text-lg font-semibold text-white">O que você vai aprender</h2>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a]/70 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#94a3b8]">Conceito-chave</p>
                      <p className="mt-2 text-sm leading-7 text-[#dbe7ff]">{learningBlocks.concept}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a]/70 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#94a3b8]">Por que isso importa</p>
                      <p className="mt-2 text-sm leading-7 text-[#dbe7ff]">{learningBlocks.importance}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#1a1a1a]/70 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#94a3b8]">Resultado esperado</p>
                      <p className="mt-2 text-sm leading-7 text-[#dbe7ff]">{learningBlocks.outcome}</p>
                    </div>
                  </div>
                </section>

                <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h2 className="text-lg font-semibold text-white">Atividade</h2>
                  <div className="mt-4 grid gap-3">
                    {activity.instructions?.map((instruction, index) => (
                      <div
                        key={instruction}
                        className="flex gap-3 rounded-2xl border border-white/8 bg-[#1a1a1a]/70 px-4 py-4 text-sm text-[#dbe7ff]"
                      >
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <span>{instruction}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ) : null}

            {activeTab === "notes" ? (
              <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <section className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h2 className="text-lg font-semibold text-white">Guia da aula</h2>
                  <div className="mt-4 space-y-4">
                    {instructionGuide.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-4">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-2 text-sm text-[#dbe7ff]">{item.instruction}</p>
                        <p className="mt-2 text-sm leading-7 text-[#94a3b8]">{item.explanation}</p>
                      </div>
                    ))}
                  </div>
                  {feedback ? (
                    <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                      {feedback}
                    </div>
                  ) : null}
                </section>

                <section className="rounded-[1.5rem] border border-white/10 bg-[#000000] p-5">
                  <h2 className="text-lg font-semibold text-white">Snippet de referência</h2>
                  <pre className="mt-4 overflow-auto rounded-2xl border border-white/8 bg-[#141414] p-4 text-sm leading-7 text-[#e2e8f0]">
                    {renderCode(getHintSnippet(track, activity), track.id)}
                  </pre>
                </section>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="surface-enter surface-enter-delay-1 space-y-4">
          <div className="rounded-[2rem] border border-white/10 bg-[#141414]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#b5b5b5]">Modulo atual</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{track.label}</h2>
            <p className="mt-2 text-sm text-[#94a3b8]">{track.subtitle}</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#505050] to-[#ffffff]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-[#e5e7eb]">
              {completedLessons}/{track.items.length} atividades concluídas
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#141414]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
            <div className="flex items-center justify-between px-2 py-2">
              <h3 className="text-lg font-semibold text-white">Atividades da trilha</h3>
              <span className="text-xs uppercase tracking-[0.22em] text-[#64748b]">Academy</span>
            </div>
            <div className="mt-2 space-y-2">
              {track.items.map((item, index) => {
                const active = item.id === activity.id;
                const done = item.status === "done";

                return (
                  <div
                    key={item.id}
                    className={`rounded-[1.25rem] border px-4 py-4 transition ${
                      active
                        ? "border-white/20 bg-white/10"
                        : "border-white/8 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-semibold ${
                          active
                            ? "bg-white text-black"
                            : done
                              ? "bg-emerald-400/20 text-emerald-200"
                              : "bg-white/8 text-[#cbd5e1]"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-[#94a3b8]">
                          {done ? "Concluída" : item.status === "locked" ? "Bloqueada" : "Disponível"}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      <div className="surface-enter surface-enter-delay-2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/95 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
              {track.label}
            </span>
            <span className="text-sm text-[#cbd5e1]">Laboratório com preview ao vivo</span>
          </div>
        </div>

          <div className="grid min-h-[36rem] gap-px bg-white/10 xl:grid-cols-2">
          <div className="flex min-h-[24rem] flex-col bg-[#000000]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#94a3b8]">
              <span>{getLanguageLabel(track)}</span>
              <span>Editor</span>
            </div>
            <div className="code-shell relative min-h-0 flex-1 overflow-hidden bg-[#000000]">
              <div className="pointer-events-none absolute inset-0 overflow-auto px-5 py-4 font-mono text-sm leading-7">
                {renderCode(editorValue, track.id)}
              </div>
              <textarea
                ref={editorRef}
                value={editorValue}
                onChange={(event) => setEditorValue(event.target.value)}
                onKeyDown={handleEditorKeyDown}
                spellCheck={false}
                className="relative z-10 h-full w-full resize-none border-0 bg-transparent px-5 py-4 font-mono text-sm leading-7 text-transparent caret-white outline-none"
              />
            </div>
          </div>

          <div className="flex min-h-[24rem] flex-col bg-[#e2e8f0]">
            <div className="flex items-center justify-between border-b border-slate-300 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-500">
              <span>Resultado</span>
              <span>Preview ao vivo</span>
            </div>
            <iframe
              title={`Preview ${track.label}`}
              srcDoc={previewDocument}
              sandbox="allow-scripts"
              className="h-full min-h-[24rem] w-full border-0 bg-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 bg-[#000000] px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-[#94a3b8]">
              Escreva no editor e veja o resultado
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleSubmit}
              className="glass-button rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              {submitted ? "Voltar ao dashboard" : "Concluir aula"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
