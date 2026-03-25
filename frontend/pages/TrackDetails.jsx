import { useEffect, useMemo, useState } from "react";

import { tracks } from "../data/tracks.js";
import { getTracksWithProgress } from "../services/progress.js";

function getDifficultyTone(difficulty) {
  if (difficulty === "Easy") {
    return "text-emerald-300";
  }

  if (difficulty === "Hard") {
    return "text-rose-300";
  }

  return "text-amber-200";
}

function getStatusLabel(status) {
  if (status === "done") {
    return "Concluída";
  }

  if (status === "locked") {
    return "Bloqueada";
  }

  return "Disponível";
}

function getStatusClasses(status) {
  if (status === "done") {
    return "border border-emerald-400/25 bg-emerald-400/15 text-emerald-200";
  }

  if (status === "locked") {
    return "border border-rose-400/25 bg-rose-400/12 text-rose-200";
  }

  return "border border-sky-400/20 bg-sky-400/10 text-sky-200";
}

function getTrackStats(track) {
  const total = track.items.length;
  const completed = track.items.filter((item) => item.status === "done").length;

  return {
    total,
    completed,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
}

function getUnlockHint(prerequisite) {
  if (!prerequisite?.title) {
    return "";
  }

  const match = prerequisite.title.match(/^(\d+)\./);
  if (match) {
    return `Complete a atividade ${match[1]} para desbloquear.`;
  }

  return `Complete "${prerequisite.title}" para desbloquear.`;
}

function renderHtmlToken(part, key) {
  if (/^\s*<!DOCTYPE/i.test(part)) {
    return (
      <span key={key}>
        <span className="text-[#9f9f9f]">&lt;!DOCTYPE</span>
        <span className="text-[#e5e5e5]"> html&gt;</span>
      </span>
    );
  }

  const leadingSpace = part.match(/^\s*/)?.[0] || "";
  const trimmed = part.trim();
  const isClosing = trimmed.startsWith("</");
  const tagMatch = trimmed.match(/^<\/?([^\s/>]+)(.*?)(\/?)>$/);

  if (!tagMatch) {
    return (
      <span key={key} className="text-[#e5e5e5]">
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
      <span className="text-[#e5e5e5]">{leadingSpace}</span>
      <span className="text-[#9f9f9f]">{isClosing ? "</" : "<"}</span>
      <span className="text-[#60a5fa]">{tagName}</span>
      {attributes.map((attribute, index) => (
        <span key={`${key}-${attribute.name}-${index}`}>
          <span className="text-[#e5e5e5]"> </span>
          <span className="text-[#c084fc]">{attribute.name}</span>
          <span className="text-[#9f9f9f]">{attribute.equal}</span>
          <span className="text-[#f9a8d4]">{attribute.value}</span>
        </span>
      ))}
      {selfClosingMarker ? <span className="text-[#9f9f9f]"> /</span> : null}
      <span className="text-[#9f9f9f]">{">"}</span>
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
          return <div key={`${index}-empty`} className="whitespace-pre">{line}</div>;
        }

        if (trimmed.endsWith("{")) {
          return (
            <div key={`${index}-${line}`} className="whitespace-pre">
              <span className="text-[#e5e5e5]">{indent}</span>
              <span className="text-[#7dd3fc]">{trimmed.slice(0, -1).trim()}</span>
              <span className="text-[#9f9f9f]"> {"{"}</span>
            </div>
          );
        }

        if (trimmed === "}") {
          return (
            <div key={`${index}-${line}`} className="whitespace-pre">
              <span className="text-[#e5e5e5]">{indent}</span>
              <span className="text-[#9f9f9f]">{"}"}</span>
            </div>
          );
        }

        const match = trimmed.match(/^([-\w]+)(:\s*)(.+?)(;?)$/);
        if (!match) {
          return <div key={`${index}-${line}`} className="whitespace-pre text-[#e5e5e5]">{line}</div>;
        }

        return (
          <div key={`${index}-${line}`} className="whitespace-pre">
            <span className="text-[#e5e5e5]">{indent}</span>
            <span className="text-[#c084fc]">{match[1]}</span>
            <span className="text-[#9f9f9f]">{match[2]}</span>
            <span className="text-white">{match[3]}</span>
            <span className="text-[#9f9f9f]">{match[4]}</span>
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
                return <span key={`${partIndex}-${part}`} className="text-[#f9a8d4]">{part}</span>;
              }

              const tokens = part.split(/\b(const|let|if|else|return|function|true|false|prompt|console|Number)\b/g);

              return tokens.map((token, tokenIndex) => {
                if (!token) {
                  return null;
                }

                if (/^(const|let|if|else|return|function|true|false)$/.test(token)) {
                  return <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#c084fc]">{token}</span>;
                }

                if (/^(prompt|console|Number)$/.test(token)) {
                  return <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#7dd3fc]">{token}</span>;
                }

                return <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#e5e5e5]">{token}</span>;
              });
            })}
          </div>
        );
      })}
    </code>
  );
}

function renderCode(code, trackId) {
  if (trackId === "css") {
    return renderCssCode(code);
  }

  if (trackId === "javascript") {
    return renderJavascriptCode(code);
  }

  return (
    <code className="block">
      {code.split("\n").map((line, lineIndex) => {
        const parts = line.split(/(<\/?[^>]+>)/g);

        return (
          <div key={`${lineIndex}-${line}`} className="whitespace-pre">
            {parts.map((part, partIndex) => {
              if (/^\s*<!DOCTYPE/i.test(part) || /^(\s*)<\/?[^>]+>$/.test(part)) {
                return renderHtmlToken(part, `${partIndex}-${part}`);
              }

              return <span key={`${partIndex}-${part}`} className="text-[#e5e5e5]">{part}</span>;
            })}
          </div>
        );
      })}
    </code>
  );
}

function getPreviewFileName(trackId) {
  if (trackId === "css") {
    return "style.css";
  }

  if (trackId === "javascript") {
    return "script.js";
  }

  return "index.html";
}

export default function TrackDetails({ trackId, user, progressVersion, onBack, onStartActivity }) {
  const tracksWithProgress = useMemo(() => getTracksWithProgress(tracks, user), [progressVersion, user]);
  const currentTrack = useMemo(
    () => tracksWithProgress.find((track) => track.id === trackId) || tracksWithProgress[0],
    [trackId, tracksWithProgress]
  );
  const [selectedItemId, setSelectedItemId] = useState(currentTrack?.items?.[0]?.id || "");

  useEffect(() => {
    const nextItem = currentTrack.items.find((item) => item.status === "pending") || currentTrack.items[0];
    setSelectedItemId(nextItem?.id || "");
  }, [currentTrack]);

  const selectedItem = useMemo(
    () => currentTrack.items.find((item) => item.id === selectedItemId) || currentTrack.items[0],
    [currentTrack, selectedItemId]
  );

  const currentTrackStats = useMemo(() => getTrackStats(currentTrack), [currentTrack]);
  const trackPrerequisite = useMemo(
    () => currentTrack.items.find((item) => item.status === "pending") || null,
    [currentTrack]
  );
  const selectedUnlockHint = useMemo(
    () => (selectedItem.status === "locked" ? getUnlockHint(trackPrerequisite) : ""),
    [selectedItem.status, trackPrerequisite]
  );

  return (
    <section className="page-enter grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]">
      <div className="surface-enter surface-enter-delay-1 space-y-6">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#131313]/95 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
          <div className="border-b border-white/10 px-6 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#9f9f9f]">{currentTrack.label}</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">{currentTrack.subtitle}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#cfcfcf]">{currentTrack.description}</p>
              </div>
              <div className="min-w-[16rem]">
                <div className="flex items-center justify-between text-sm text-[#cfcfcf]">
                  <span>Progresso do módulo</span>
                  <span>{currentTrackStats.completed}/{currentTrackStats.total}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${currentTrack.accent}`}
                    style={{ width: `${currentTrackStats.percent}%` }}
                  />
                </div>
                <button
                  type="button"
                  onClick={onBack}
                  className="mt-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  Voltar para cursos
                </button>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="space-y-2">
              {currentTrack.items.map((item, index) => {
                const active = item.id === selectedItem.id;
                const unlockHint = item.status === "locked" ? getUnlockHint(trackPrerequisite) : "";

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedItemId(item.id)}
                    title={unlockHint || undefined}
                    className={`interactive-row grid w-full gap-3 rounded-[1.4rem] px-4 py-4 text-left sm:grid-cols-[72px_minmax(0,1fr)_110px_112px] sm:items-center ${
                      active ? "bg-[#262626] text-white" : "bg-white/[0.03] text-[#d1d1d1] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em] text-[#9f9f9f]">Aula</span>
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold">{item.title}</p>
                      {item.status === "locked" && unlockHint ? (
                        <p className="mt-1 truncate text-xs text-rose-200">{unlockHint}</p>
                      ) : (
                        <p className="mt-1 truncate text-xs text-[#cfcfcf]">{item.summary}</p>
                      )}
                    </div>

                    <div className={`text-sm font-semibold ${getDifficultyTone(item.difficulty)}`}>{item.difficulty}</div>

                    <div className="flex justify-start sm:justify-end">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${getStatusClasses(item.status)}`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <article className="surface-enter surface-enter-delay-2 flex min-h-[42rem] flex-col rounded-[2rem] border border-white/10 bg-[#131313]/95 p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full bg-gradient-to-r ${currentTrack.accent} px-3 py-1 text-xs font-semibold text-white`}>
            {currentTrack.label}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(selectedItem.status)}`}>
            {getStatusLabel(selectedItem.status)}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#cfcfcf]">
            {selectedItem.acceptance} de acerto
          </span>
        </div>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9f9f9f]">Aula em destaque</p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight">{selectedItem.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#cfcfcf]">{selectedItem.summary}</p>
        </div>

        {selectedItem.status === "locked" && selectedUnlockHint ? (
          <div className="mt-5 rounded-[1.4rem] border border-rose-400/25 bg-rose-400/12 px-4 py-4 text-sm text-rose-200">
            {selectedUnlockHint}
          </div>
        ) : null}

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#000000] p-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs uppercase tracking-[0.2em] text-[#9f9f9f]">
            <span>Preview da aula</span>
            <span>{getPreviewFileName(currentTrack.id)}</span>
          </div>
          <pre className="mt-4 min-h-[18rem] overflow-auto rounded-2xl bg-[#131313] p-4 text-sm leading-6 text-[#e5e5e5]">
            {renderCode(selectedItem.code, currentTrack.id)}
          </pre>
        </div>

        <div className="mt-auto pt-6">
          <button
            type="button"
            className={`glass-button w-full rounded-[1.2rem] px-5 py-4 text-sm font-semibold transition ${
              selectedItem.status === "locked"
                ? "cursor-not-allowed bg-white/10 text-[#9f9f9f]"
                : "bg-gradient-to-r from-[#393939] to-[#4C4C4C] text-white hover:opacity-95"
            }`}
            disabled={selectedItem.status === "locked"}
            title={selectedItem.status === "locked" ? selectedUnlockHint || "Complete as etapas anteriores para desbloquear." : undefined}
            onClick={() => onStartActivity?.(currentTrack, selectedItem)}
          >
            {selectedItem.status === "done"
              ? "Revisar aula"
              : selectedItem.status === "locked"
                ? selectedUnlockHint || "Complete as etapas anteriores para desbloquear."
                : "Abrir laboratorio da aula"}
          </button>
        </div>
      </article>
    </section>
  );
}






