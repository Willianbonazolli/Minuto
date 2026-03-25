import { useMemo } from "react";

import { tracks } from "../data/tracks.js";
import { getTracksWithProgress } from "../services/progress.js";

function getTrackStats(track) {
  const total = track.items.length;
  const completed = track.items.filter((item) => item.status === "done").length;

  return {
    total,
    completed,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
}

function getTrackIconClasses(trackId) {
  if (trackId === "html") {
    return "bg-[#E34F26] text-white";
  }

  if (trackId === "css") {
    return "bg-[#264DE4] text-white";
  }

  return "bg-[#F7DF1E] text-black";
}

export default function Tasks({ user, progressVersion, initialTrackId, onOpenTrack }) {
  const tracksWithProgress = useMemo(() => getTracksWithProgress(tracks, user), [progressVersion, user]);

  const overallProgress = useMemo(() => {
    const totals = tracksWithProgress.reduce(
      (acc, track) => {
        acc.total += track.items.length;
        acc.completed += track.items.filter((item) => item.status === "done").length;
        return acc;
      },
      { total: 0, completed: 0 }
    );

    return {
      ...totals,
      percent: totals.total ? Math.round((totals.completed / totals.total) * 100) : 0
    };
  }, [tracksWithProgress]);

  return (
    <section className="page-enter space-y-6">
      <div className="surface-enter overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(80,80,80,0.18),rgba(20,20,20,0.96)_45%,rgba(0,0,0,0.98))] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <div className="grid gap-6 px-6 py-8 sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#b5b5b5]">Minuto Academy</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
              {user?.name ? `${user.name}, escolha seu proximo curso.` : "Escolha seu proximo curso."}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#cbd5e1]">
              Cada trilha foi pensada para guiar seu aprendizado do basico ate atividades mais completas, sempre em pequenos passos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-[#94a3b8]">Progresso geral</p>
                <p className="mt-3 text-3xl font-semibold text-white">{overallProgress.percent}%</p>
                <p className="mt-2 text-sm text-[#cbd5e1]">
                  {overallProgress.completed}/{overallProgress.total} aulas concluidas
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-[#94a3b8]">Trilhas disponiveis</p>
                <p className="mt-3 text-3xl font-semibold text-white">{tracksWithProgress.length}</p>
                <p className="mt-2 text-sm text-[#cbd5e1]">Escolha entre HTML, CSS e JavaScript</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-[#94a3b8]">Retome de onde parou</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {initialTrackId ? tracksWithProgress.find((track) => track.id === initialTrackId)?.label || "Sua ultima trilha" : "Sua ultima trilha"}
                </p>
                <p className="mt-2 text-sm text-[#cbd5e1]">Ao abrir uma trilha, voce entra direto na pagina completa do modulo.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[#141414] p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#b5b5b5]">Escolha sua trilha</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Meus cursos</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#cbd5e1]">
                {tracksWithProgress.length} trilhas
              </span>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {tracksWithProgress.map((track) => {
                const stats = getTrackStats(track);
                const illustration = track.id === "html" ? "<html>" : track.id === "css" ? "{ }" : "JS";

                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => onOpenTrack?.(track.id)}
                    className="interactive-card w-full rounded-[1.6rem] border border-white/10 bg-[#1a1a1a] p-5 text-left hover:bg-[#202020]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-[#9ca3af]">{track.duration}</p>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#f59e0b]">Curso</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{track.label}</p>
                        <p className="mt-2 text-sm text-[#94a3b8]">{track.description}</p>
                      </div>
                      <div className={`grid h-24 w-24 place-items-center rounded-full text-2xl font-semibold ${getTrackIconClasses(track.id)}`}>
                        {illustration}
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-sm text-[#d1d5db]">
                      <span>{stats.percent}% completo</span>
                      <span>{stats.completed}/{stats.total}</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#3da9fc] to-[#2563eb]"
                        style={{ width: `${stats.percent}%` }}
                      />
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm text-[#cbd5e1]">{track.subtitle}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                        Abrir trilha
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
