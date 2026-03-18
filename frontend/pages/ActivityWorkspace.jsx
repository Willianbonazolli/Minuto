import { useState } from "react";

function getDifficultyTone(difficulty) {
  if (difficulty === "Easy") {
    return "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30";
  }

  if (difficulty === "Hard") {
    return "bg-rose-500/15 text-rose-300 border border-rose-400/30";
  }

  return "bg-amber-500/15 text-amber-200 border border-amber-400/30";
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

function getEditorPlaceholder(track) {
  if (track.id === "html") {
    return "<!-- Escreva sua estrutura HTML aqui -->";
  }

  if (track.id === "css") {
    return "/* Escreva seu CSS aqui */";
  }

  return "// Escreva sua solucao JavaScript aqui";
}

function getHintSnippet(track, activity) {
  if (track.id === "html") {
    if (activity.id === "html-1") {
      return "<body>\n  <!-- seu conteudo aqui -->\n</body>";
    }

    if (activity.id === "html-2") {
      return "<h1>Titulo principal</h1>\n<p>Um paragrafo curto.</p>";
    }

    if (activity.id === "html-3") {
      return "<ul>\n  <li>Item</li>\n</ul>";
    }

    if (activity.id === "html-4") {
      return '<a href="/trilha">Abrir trilha</a>';
    }

    if (activity.id === "html-5") {
      return "<label>Nome</label>\n<input type=\"text\" />";
    }

    if (activity.id === "html-6") {
      return "<button>Comecar</button>";
    }

    if (activity.id === "html-7") {
      return "<tr>\n  <td>HTML</td>\n</tr>";
    }

    if (activity.id === "html-8") {
      return "<main>\n  <section></section>\n</main>";
    }

    if (activity.id === "html-9") {
      return "<article>\n  <h2>Atividade</h2>\n</article>";
    }

    return "<section>\n  <!-- organize sua estrutura aqui -->\n</section>";
  }

  if (track.id === "css") {
    if (activity.id === "css-1") {
      return "h1 {\n  color: #f3d3ab;\n}";
    }

    if (activity.id === "css-2") {
      return ".card {\n  padding: 16px;\n}";
    }

    if (activity.id === "css-3") {
      return ".linha {\n  display: flex;\n}";
    }

    if (activity.id === "css-4") {
      return ".painel {\n  display: grid;\n}";
    }

    if (activity.id === "css-5") {
      return "@media (max-width: 768px) {\n  .painel {\n  }\n}";
    }

    if (activity.id === "css-6") {
      return ".secao {\n  margin-bottom: 20px;\n}";
    }

    if (activity.id === "css-7") {
      return ".botao:hover {\n  opacity: 0.9;\n}";
    }

    if (activity.id === "css-8") {
      return ".card {\n  border-radius: 20px;\n}";
    }

    if (activity.id === "css-9") {
      return ":root {\n  --accent: #e7c79f;\n}";
    }

    return ".bloco {\n  /* adicione propriedades aqui */\n}";
  }

  if (activity.id === "js-1") {
    return 'const nome = "Ana";';
  }

  if (activity.id === "js-2") {
    return 'console.log("Mensagem");';
  }

  if (activity.id === "js-3") {
    return "const total = a + b;";
  }

  if (activity.id === "js-4") {
    return "idade >= 16 && matriculado";
  }

  if (activity.id === "js-5") {
    return "if (condicao) {\n  // ...\n} else {\n  // ...\n}";
  }

  if (activity.id === "js-6") {
    return 'const numero = Number(prompt("Digite um numero"));';
  }

  if (activity.id === "js-7") {
    return "if (nota >= 7) {\n  // ...\n} else if (nota >= 5) {\n  // ...\n}";
  }

  if (activity.id === "js-8") {
    return "function saudacao(nome) {\n  return nome;\n}";
  }

  if (activity.id === "js-9") {
    return 'const trilhas = ["HTML", "CSS"];';
  }

  return "console.log(valor);";
}

function renderHtmlHint(part, key) {
  if (/^\s*<!DOCTYPE/i.test(part)) {
    return (
      <span key={key} className="text-[#c586c0]">
        {part}
      </span>
    );
  }

  const leadingSpace = part.match(/^\s*/)?.[0] || "";
  const trimmed = part.trim();
  const isClosing = trimmed.startsWith("</");
  const isSelfClosing = trimmed.endsWith("/>");
  const tagMatch = trimmed.match(/^<\/?([^\s/>]+)(.*?)(\/?)>$/);

  if (!tagMatch) {
    return (
      <span key={key} className="text-[#e9ddcf]">
        {part}
      </span>
    );
  }

  const [, tagName, rawAttributes, selfClosingMarker] = tagMatch;
  const attributes = [];
  const attributeRegex = /([:@\w-]+)(=)("[^"]*"|'[^']*')?/g;
  let attrMatch;

  while ((attrMatch = attributeRegex.exec(rawAttributes)) !== null) {
    attributes.push({
      name: attrMatch[1],
      equal: attrMatch[2] || "",
      value: attrMatch[3] || ""
    });
  }

  return (
    <span key={key}>
      <span className="text-[#e9ddcf]">{leadingSpace}</span>
      <span className="text-[#808080]">{isClosing ? "</" : "<"}</span>
      <span className="text-[#569cd6]">{tagName}</span>
      {attributes.map((attribute, index) => (
        <span key={`${key}-attr-${index}`}>
          <span className="text-[#e9ddcf]"> </span>
          <span className="text-[#9cdcfe]">{attribute.name}</span>
          <span className="text-[#d4d4d4]">{attribute.equal}</span>
          <span className="text-[#ce9178]">{attribute.value}</span>
        </span>
      ))}
      {isSelfClosing || selfClosingMarker ? <span className="text-[#808080]"> /</span> : null}
      <span className="text-[#808080]">{">"}</span>
    </span>
  );
}

function renderCssHint(code) {
  return (
    <code className="block">
      {code.split("\n").map((line, lineIndex) => {
        const trimmed = line.trim();
        const indent = line.match(/^\s*/)?.[0] || "";

        if (!trimmed) {
          return <div key={`${lineIndex}-empty`} className="whitespace-pre">{line}</div>;
        }

        if (trimmed.endsWith("{")) {
          return (
            <div key={`${lineIndex}-${line}`} className="whitespace-pre">
              <span className="text-[#e9ddcf]">{indent}</span>
              <span className="text-[#d7ba83]">{trimmed.slice(0, -1).trim()}</span>
              <span className="text-[#808080]"> {"{"}</span>
            </div>
          );
        }

        if (trimmed === "}") {
          return (
            <div key={`${lineIndex}-${line}`} className="whitespace-pre">
              <span className="text-[#e9ddcf]">{indent}</span>
              <span className="text-[#808080]">{"}"}</span>
            </div>
          );
        }

        const propertyMatch = trimmed.match(/^([-\w]+)(:\s*)(.+?)(;?)$/);
        if (propertyMatch) {
          return (
            <div key={`${lineIndex}-${line}`} className="whitespace-pre">
              <span className="text-[#e9ddcf]">{indent}</span>
              <span className="text-[#9cdcfe]">{propertyMatch[1]}</span>
              <span className="text-[#d4d4d4]">{propertyMatch[2]}</span>
              <span className="text-[#ce9178]">{propertyMatch[3]}</span>
              <span className="text-[#808080]">{propertyMatch[4]}</span>
            </div>
          );
        }

        return <div key={`${lineIndex}-${line}`} className="whitespace-pre text-[#e9ddcf]">{line}</div>;
      })}
    </code>
  );
}

function renderJavascriptHint(code) {
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
                  <span key={`${partIndex}-${part}`} className="text-[#ce9178]">
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
                  return <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#c586c0]">{token}</span>;
                }

                if (/^(prompt|console|Number)$/.test(token)) {
                  return <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#4ec9b0]">{token}</span>;
                }

                return <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#e9ddcf]">{token}</span>;
              });
            })}
          </div>
        );
      })}
    </code>
  );
}

function renderHintCode(code, trackId) {
  if (trackId === "css") {
    return renderCssHint(code);
  }

  if (trackId === "javascript") {
    return renderJavascriptHint(code);
  }

  return (
    <code className="block">
      {code.split("\n").map((line, lineIndex) => {
        const parts = line.split(/(<\/?[^>]+>)/g);

        return (
          <div key={`${lineIndex}-${line}`} className="whitespace-pre">
            {parts.map((part, partIndex) => {
              if (/^\s*<!DOCTYPE/i.test(part) || /^(\s*)<\/?[^>]+>$/.test(part)) {
                return renderHtmlHint(part, `${partIndex}-${part}`);
              }

              return (
                <span key={`${partIndex}-${part}`} className="text-[#e9ddcf]">
                  {part}
                </span>
              );
            })}
          </div>
        );
      })}
    </code>
  );
}

function renderEditorCode(code, trackId, placeholder) {
  const content = code || placeholder;
  const mutedClass = code ? "" : "opacity-45";

  if (trackId === "css") {
    return <div className={mutedClass}>{renderCssHint(content)}</div>;
  }

  if (trackId === "javascript") {
    return <div className={mutedClass}>{renderJavascriptHint(content)}</div>;
  }

  return (
    <div className={mutedClass}>
      <code className="block">
        {content.split("\n").map((line, lineIndex) => {
          const parts = line.split(/(<\/?[^>]+>)/g);

          return (
            <div key={`${lineIndex}-${line}`} className="whitespace-pre">
              {parts.map((part, partIndex) => {
                if (/^\s*<!DOCTYPE/i.test(part) || /^(\s*)<\/?[^>]+>$/.test(part)) {
                  return renderHtmlHint(part, `${partIndex}-${part}`);
                }

                return (
                  <span key={`${partIndex}-${part}`} className="text-[#e9ddcf]">
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
      label: "Concluida",
      classes: "border border-emerald-400/35 bg-emerald-500/12 text-emerald-300"
    };
  }

  return {
    label: "Disponivel",
    classes: "border border-amber-300/35 bg-amber-400/12 text-amber-200"
  };
}

function getValidationChecks(track, activity) {
  if (track.id === "html") {
    if (activity.id === "html-1") {
      return ["<html", "<head", "<body"];
    }

    if (activity.id === "html-2") {
      return ["<h1", "<h2", "<p"];
    }

    if (activity.id === "html-3") {
      return ["<nav", "<ul", "<li"];
    }

    return ["<", ">"];
  }

  if (track.id === "css") {
    if (activity.id === "css-1") {
      return ["body", "font-family", "color"];
    }

    if (activity.id === "css-3") {
      return ["display: flex", "justify-content", "align-items"];
    }

    return ["{", ":", "}"];
  }

  if (activity.id === "js-5" || activity.id === "js-7" || activity.id === "js-10") {
    return ["if", "else", "console.log"];
  }

  if (activity.id === "js-8") {
    return ["function", "return"];
  }

  if (activity.id === "js-9") {
    return ["[", "]", ".length"];
  }

  return ["const", "=", "console.log"];
}

function getRunFeedback(track, activity, code) {
  const normalizedCode = code.toLowerCase();
  const checks = getValidationChecks(track, activity);
  const matches = checks.filter((token) => normalizedCode.includes(token.toLowerCase()));

  if (matches.length === checks.length) {
    return "Execucao simulada: boa base. Voce ja cobriu os principais elementos esperados desta atividade.";
  }

  if (matches.length > 0) {
    return `Execucao simulada: voce ja atendeu ${matches.length} de ${checks.length} pontos principais. Continue refinando antes de enviar.`;
  }

  return "Execucao simulada: o codigo ainda nao mostra os elementos principais da atividade. Revise o objetivo e tente novamente.";
}

export default function ActivityWorkspace({ track, activity, onBack, onCompleteActivity }) {
  const [activeTab, setActiveTab] = useState("description");
  const [editorValue, setEditorValue] = useState("");
  const [submitted, setSubmitted] = useState(activity.status === "done");
  const [feedback, setFeedback] = useState("");
  const [runFeedback, setRunFeedback] = useState("");
  const submissionStatus = getSubmissionStatus(submitted);
  const editorPlaceholder = getEditorPlaceholder(track);

  const tabs = [
    { id: "description", label: "Description" },
    { id: "editorial", label: "Editorial" }
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
      setFeedback("Atividade enviada com sucesso. A proxima etapa foi desbloqueada.");
      setRunFeedback("Ultima execucao: resposta pronta para envio.");
      return;
    }

    setFeedback("Nao foi possivel concluir esta atividade agora.");
  };

  const handleRun = () => {
    if (!editorValue.trim()) {
      setRunFeedback("Escreva algum codigo antes de executar.");
      return;
    }

    setRunFeedback(getRunFeedback(track, activity, editorValue));
  };

  return (
    <section className="page-enter grid h-[calc(100vh-9rem)] gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="interactive-card surface-enter flex min-h-0 flex-col overflow-hidden rounded-[1rem] border border-white/10 bg-[#1f1f1f] text-[#f5efe6] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#2a2a2a] px-4 py-3">
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#d6cabc]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-2 py-1 transition ${
                  activeTab === tab.id ? "font-semibold text-white" : "text-[#ae9f8f] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onBack}
            className="glass-button rounded-full border border-[#d7b891] bg-[#f0d8b8] px-5 py-2.5 text-sm font-semibold text-[#2b221c] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:brightness-95"
          >
            {"<- Voltar para trilhas"}
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getDifficultyTone(activity.difficulty)}`}>
              {activity.difficulty}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#d6cabc]">
              {track.label}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#d6cabc]">
              {activity.acceptance} de acerto
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${submissionStatus.classes}`}>
              {submissionStatus.label}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-tight">{activity.title}</h1>

          {activeTab === "description" ? (
            <div className="mt-6 space-y-8">
              <p className="text-base leading-8 text-[#dfd4c8]">{activity.theory}</p>

              <section>
                <h2 className="text-xl font-semibold">Objetivo</h2>
                <p className="mt-3 text-sm leading-7 text-[#d3c6b8]">{activity.summary}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Tarefas da atividade</h2>
                <div className="mt-4 space-y-3">
                  {activity.instructions?.map((instruction) => (
                    <div
                      key={instruction}
                      className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm leading-6 text-[#dfd4c8]"
                    >
                      {instruction}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Dica de sintaxe</h2>
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/8 bg-[#151515] p-4 text-sm leading-6 text-[#eadfd2]">
                  {renderHintCode(getHintSnippet(track, activity), track.id)}
                </pre>
              </section>

              {feedback ? (
                <section className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-[#dfd4c8]">
                  {feedback}
                </section>
              ) : null}
            </div>
          ) : null}

          {activeTab === "editorial" ? (
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#dfd4c8]">
              <p>Comece identificando o conceito principal desta etapa e depois reproduza a estrutura base no editor.</p>
              <p>Monte primeiro a versao minima funcionando. Depois refine o codigo para ficar mais semantico e legivel.</p>
              <p>Use o exemplo de referencia como guia, mas tente escrever com suas proprias palavras e estrutura.</p>
            </div>
          ) : null}

        </div>
      </div>

      <div className="interactive-card surface-enter surface-enter-delay-1 flex min-h-0 flex-col overflow-hidden rounded-[1rem] border border-white/10 bg-[#1f1f1f] text-[#f5efe6] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#2a2a2a] px-4 py-3">
          <div className="flex items-center gap-3">
            <span className={`rounded-full bg-gradient-to-r ${track.accent} px-3 py-1 text-xs font-semibold text-[#1e1915]`}>
              {track.label}
            </span>
            <span className="text-sm text-[#d3c6b8]">Code</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#b8aa99]">
            <span>{getLanguageLabel(track)}</span>
            <span>Auto</span>
          </div>
        </div>

        <div className="code-shell relative min-h-0 flex-1 overflow-hidden bg-[#181818]">
          <div className="pointer-events-none absolute inset-0 overflow-auto px-5 py-4 font-mono text-sm leading-7">
            {renderEditorCode(editorValue, track.id, editorPlaceholder)}
          </div>
          <textarea
            value={editorValue}
            onChange={(event) => setEditorValue(event.target.value)}
            spellCheck={false}
            placeholder=""
            className="relative z-10 h-full w-full resize-none border-0 bg-transparent px-5 py-4 font-mono text-sm leading-7 text-transparent caret-[#f5efe6] outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#222222] px-4 py-3">
          <div className="space-y-1">
            <p className="text-sm text-[#b8aa99]">Escreva sua solucao no editor e teste suas ideias antes de enviar.</p>
            {runFeedback ? (
              <p className="rounded-2xl border border-amber-300/30 bg-amber-400/12 px-3 py-2 text-xs font-medium text-[#f0d6a8]">
                {runFeedback}
              </p>
            ) : null}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleRun}
              className="glass-button rounded-full border border-white/10 px-4 py-2 text-sm text-[#d6cabc] transition hover:bg-white/5 hover:text-white"
            >
              Executar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className={`glass-button rounded-full bg-gradient-to-r ${track.accent} px-4 py-2 text-sm font-semibold text-[#1e1915] transition hover:opacity-90`}
            >
              {submitted ? "Atividade concluida" : "Enviar e concluir"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
