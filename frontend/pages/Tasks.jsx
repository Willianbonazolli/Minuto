import { useMemo, useState } from "react";

import { tracks } from "../data/tracks.js";
import { getTracksWithProgress } from "../services/progress.js";

function getDifficultyColor(difficulty) {
  if (difficulty === "Easy") {
    return "text-[#9fcfc0]";
  }

  if (difficulty === "Hard") {
    return "text-[#d79486]";
  }

  return "text-[#d7ba83]";
}

function getStatusLabel(status) {
  if (status === "done") {
    return "Concluida";
  }

  if (status === "locked") {
    return "Bloqueada";
  }

  return "Disponivel";
}

function getStatusClasses(status) {
  if (status === "done") {
    return "border border-emerald-400/35 bg-emerald-500/12 text-emerald-300";
  }

  if (status === "locked") {
    return "border border-rose-400/30 bg-rose-500/12 text-rose-300";
  }

  return "border border-amber-300/35 bg-amber-400/12 text-amber-200";
}

function renderHtmlTag(part, key) {
  if (/^\s*<!DOCTYPE/i.test(part)) {
    const match = part.match(/^(\s*)(<!DOCTYPE)(\s+)(html)(>)$/i);

    if (!match) {
      return (
        <span key={key} className="text-[#9cdcfe]">
          {part}
        </span>
      );
    }

    return (
      <span key={key}>
        <span className="text-[#e9ddcf]">{match[1]}</span>
        <span className="text-[#c586c0]">{match[2]}</span>
        <span className="text-[#e9ddcf]">{match[3]}</span>
        <span className="text-[#4ec9b0]">{match[4]}</span>
        <span className="text-[#808080]">{match[5]}</span>
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
      <span key={key} className="text-[#9cdcfe]">
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

function renderCssCode(code) {
  const lines = code.split("\n");

  return (
    <code className="block">
      {lines.map((line, lineIndex) => {
        const trimmed = line.trim();
        const indent = line.match(/^\s*/)?.[0] || "";

        if (!trimmed) {
          return (
            <div key={`${lineIndex}-empty`} className="whitespace-pre">
              {line}
            </div>
          );
        }

        if (trimmed.endsWith("{")) {
          const selector = trimmed.slice(0, -1).trim();
          return (
            <div key={`${lineIndex}-${line}`} className="whitespace-pre">
              <span className="text-[#e9ddcf]">{indent}</span>
              <span className="text-[#d7ba83]">{selector}</span>
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

        return (
          <div key={`${lineIndex}-${line}`} className="whitespace-pre text-[#e9ddcf]">
            {line}
          </div>
        );
      })}
    </code>
  );
}

function renderJavascriptCode(code) {
  const lines = code.split("\n");

  return (
    <code className="block">
      {lines.map((line, lineIndex) => {
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

              const tokens = part.split(/\b(const|let|if|else|true|false|prompt|console)\b/g);

              return tokens.map((token, tokenIndex) => {
                if (!token) {
                  return null;
                }

                if (/^(const|let|if|else|true|false)$/.test(token)) {
                  return (
                    <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#c586c0]">
                      {token}
                    </span>
                  );
                }

                if (/^(prompt|console)$/.test(token)) {
                  return (
                    <span key={`${partIndex}-${tokenIndex}-${token}`} className="text-[#4ec9b0]">
                      {token}
                    </span>
                  );
                }

                const subTokens = token.split(/(\b\d+\b)/g);

                return subTokens.map((subToken, subIndex) => {
                  if (!subToken) {
                    return null;
                  }

                  if (/^\d+$/.test(subToken)) {
                    return (
                      <span key={`${partIndex}-${tokenIndex}-${subIndex}-${subToken}`} className="text-[#b5cea8]">
                        {subToken}
                      </span>
                    );
                  }

                  return (
                    <span key={`${partIndex}-${tokenIndex}-${subIndex}-${subToken}`} className="text-[#e9ddcf]">
                      {subToken}
                    </span>
                  );
                });
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

  const lines = code.split("\n");

  return (
    <code className="block">
      {lines.map((line, lineIndex) => {
        const parts = line.split(/(<\/?[^>]+>)/g);

        return (
          <div key={`${lineIndex}-${line}`} className="whitespace-pre">
            {parts.map((part, partIndex) => {
              if (/^\s*<!DOCTYPE/i.test(part) || /^(\s*)<\/?[^>]+>$/.test(part)) {
                return renderHtmlTag(part, `${partIndex}-${part}`);
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

function getPreviewFileName(trackId) {
  if (trackId === "css") {
    return "style.css";
  }

  if (trackId === "javascript") {
    return "script.js";
  }

  return "index.html";
}

export default function Tasks({ user, progressVersion, onStartActivity }) {
  const [selectedTrack, setSelectedTrack] = useState("html");
  const [selectedItemId, setSelectedItemId] = useState("html-1");
  const tracksWithProgress = useMemo(() => getTracksWithProgress(tracks, user), [progressVersion, user]);

  const currentTrack = useMemo(
    () => tracksWithProgress.find((track) => track.id === selectedTrack) || tracksWithProgress[0],
    [selectedTrack, tracksWithProgress]
  );

  const selectedItem = useMemo(
    () => currentTrack.items.find((item) => item.id === selectedItemId) || currentTrack.items[0],
    [currentTrack, selectedItemId]
  );

  const handleTrackChange = (trackId) => {
    const nextTrack = tracksWithProgress.find((track) => track.id === trackId);
    setSelectedTrack(trackId);
    setSelectedItemId(nextTrack?.items[0]?.id || "");
  };

  return (
    <section className="page-enter space-y-6">
      <div className="interactive-card surface-enter rounded-[2rem] border border-black/10 bg-[#221d19] px-6 py-6 text-[#f5efe6] shadow-[0_20px_60px_rgba(34,29,25,0.24)] sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#c7b7a3]">Roadmaps</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {user?.name ? `${user.name}, escolha sua trilha` : "Escolha sua trilha"}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#d8ccbf]">
              Explore sua jornada de aprendizado por trilhas e avance passo a passo em HTML, CSS e JavaScript.
            </p>
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#cdbdaa]">
            3 trilhas disponiveis
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {tracksWithProgress.map((track) => {
            const active = track.id === currentTrack.id;

            return (
              <button
                key={track.id}
                type="button"
                onClick={() => handleTrackChange(track.id)}
                className={`glass-button rounded-full px-5 py-3 text-sm font-medium transition ${
                  active
                    ? `bg-gradient-to-r ${track.accent} text-[#1e1915]`
                    : "border border-white/10 bg-white/5 text-[#e4dacd] hover:bg-white/10"
                }`}
              >
                {track.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
        <div className="interactive-card surface-enter surface-enter-delay-1 h-full rounded-[2rem] border border-black/10 bg-[#1d1916] p-3 shadow-[0_20px_60px_rgba(34,29,25,0.24)]">
          <div className="rounded-[1.4rem] border border-white/5 bg-[#28221e] px-5 py-4 text-[#f5efe6]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className={`text-xs uppercase tracking-[0.22em] ${currentTrack.accentText}`}>{currentTrack.label}</p>
                <h3 className="mt-1 text-2xl font-semibold">{currentTrack.subtitle}</h3>
              </div>
              <div className="text-sm text-[#b8aa99]">{currentTrack.items.length} atividades</div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {currentTrack.items.map((item) => {
              const active = item.id === selectedItem.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItemId(item.id)}
                  className={`interactive-row grid w-full grid-cols-[minmax(0,1fr)_90px_80px_100px] items-center gap-3 rounded-2xl px-5 py-4 text-left transition ${
                    active
                      ? "bg-[#332c27] text-[#fffaf2]"
                      : "bg-[#241f1b] text-[#e4dacd] hover:bg-[#2c2622]"
                  }`}
                >
                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold">{item.title}</p>
                  </div>
                  <div className="text-sm text-[#c2b09b]">{item.acceptance}</div>
                  <div className={`text-sm font-semibold ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </div>
                  <div className="flex justify-end">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${getStatusClasses(item.status)}`}
                    >
                      {getStatusLabel(item.status)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <article className="interactive-card surface-enter surface-enter-delay-2 flex min-h-[42rem] flex-col rounded-[2rem] border border-black/10 bg-[#231e1a] p-6 text-[#f5efe6] shadow-[0_20px_60px_rgba(34,29,25,0.24)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full bg-gradient-to-r ${currentTrack.accent} px-3 py-1 text-xs font-semibold text-[#1e1915]`}>
              {currentTrack.label}
            </span>
            <span className={`rounded-full bg-white/5 px-3 py-1 text-xs font-semibold ${getDifficultyColor(selectedItem.difficulty)}`}>
              {selectedItem.difficulty}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(selectedItem.status)}`}>
              {getStatusLabel(selectedItem.status)}
            </span>
          </div>

          <div className="mt-5 min-h-[5.5rem]">
            <h3 className="text-3xl font-semibold leading-tight">{selectedItem.title}</h3>
          </div>

          <section className="mt-3 min-h-[7rem]">
            <h4 className="text-lg font-semibold">Resumo rapido</h4>
            <p className="mt-3 text-sm leading-6 text-[#ddd1c5]">{selectedItem.summary}</p>
          </section>

          <section className="mt-8 flex-1">
            <h4 className="text-lg font-semibold">Preview</h4>
            <div className="code-shell mt-3 overflow-hidden rounded-2xl border border-white/5 bg-[#181411]">
              <div className="flex items-center justify-between border-b border-white/5 bg-[#211b17] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6f61]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5c04f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#67c587]" />
                </div>
                <span className="text-xs font-medium tracking-[0.18em] text-[#bfae99]">
                  {getPreviewFileName(currentTrack.id)}
                </span>
              </div>
              <pre className="min-h-[18rem] overflow-auto p-4 text-sm leading-6 text-[#e9ddcf]">
                {renderCode(selectedItem.code, currentTrack.id)}
              </pre>
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              className={`glass-button rounded-full px-5 py-3 text-sm font-semibold transition ${
                selectedItem.status === "locked"
                  ? "cursor-not-allowed bg-white/10 text-[#978877]"
                  : `bg-gradient-to-r ${currentTrack.accent} text-[#1e1915] hover:opacity-90`
              }`}
              disabled={selectedItem.status === "locked"}
              onClick={() => onStartActivity?.(currentTrack, selectedItem)}
            >
              {selectedItem.status === "done"
                ? "Revisar atividade"
                : selectedItem.status === "locked"
                  ? "Desbloqueie etapas anteriores"
                  : "Comecar atividade"}
            </button>

            <div className="rounded-full border border-white/10 px-4 py-3 text-sm text-[#baa997]">
              Taxa de acerto: {selectedItem.acceptance}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
