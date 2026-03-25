import { Suspense, lazy, useEffect, useMemo, useState } from "react";

import Header from "./components/Header.jsx";
import { activityOrder } from "./data/activityOrder.js";
import { clearSession, consumeWelcomeForUser, getUser, isAuthenticated } from "./services/auth.js";
import { completeActivity, getCompletedActivityIds, setCompletedActivityIds } from "./services/progress.js";
import { fetchRemoteProgress, saveRemoteProgress } from "./services/progressApi.js";

const ActivityWorkspace = lazy(() => import("./pages/ActivityWorkspace.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Tasks = lazy(() => import("./pages/Tasks.jsx"));
const TrackDetails = lazy(() => import("./pages/TrackDetails.jsx"));

const initialView = () => (isAuthenticated() ? "tasks" : "login");

function ViewFallback() {
  return (
    <div className="surface-enter flex min-h-[16rem] items-center justify-center rounded-[2rem] border border-white/10 bg-[#081121]/90 px-6 py-10 text-[#cbd5e1] shadow-[0_24px_80px_rgba(2,6,23,0.36)]">
      Carregando ambiente...
    </div>
  );
}

export default function App() {
  const [view, setView] = useState(initialView);
  const [activeTrack, setActiveTrack] = useState(null);
  const [activeActivity, setActiveActivity] = useState(null);
  const [lastOpenedTrackId, setLastOpenedTrackId] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [progressVersion, setProgressVersion] = useState(0);
  const [sessionVersion, setSessionVersion] = useState(0);
  const user = useMemo(() => getUser(), [sessionVersion]);
  const authed = isAuthenticated();

  useEffect(() => {
    if (!authed && (view === "tasks" || view === "track" || view === "activity")) {
      setView("login");
    }
  }, [authed, view]);

  useEffect(() => {
    if (!authed || !user?.id) {
      return;
    }

    let cancelled = false;

    const syncProgress = async () => {
      try {
        const data = await fetchRemoteProgress();
        if (cancelled || !Array.isArray(data?.completedActivityIds)) {
          return;
        }

        const localIds = getCompletedActivityIds(user);
        const remoteIds = data.completedActivityIds;

        if (JSON.stringify(localIds) !== JSON.stringify(remoteIds)) {
          setCompletedActivityIds(user, remoteIds);
          setProgressVersion((value) => value + 1);
        }
      } catch (error) {
        // Keep local progress active if the backend is unavailable.
      }
    };

    syncProgress();

    return () => {
      cancelled = true;
    };
  }, [authed, user, sessionVersion]);

  useEffect(() => {
    if (!authed || !user) {
      return;
    }

    if (consumeWelcomeForUser(user)) {
      setShowAbout(true);
    }
  }, [authed, user, sessionVersion]);

  const handleLogout = () => {
    clearSession();
    setSessionVersion((value) => value + 1);
    setActiveTrack(null);
    setActiveActivity(null);
    setView("login");
  };

  const handleAuthSuccess = () => {
    setSessionVersion((value) => value + 1);
    setView("tasks");
  };

  const handleNavigate = (nextView) => {
    if (nextView !== "activity") {
      setActiveActivity(null);
    }

    if (nextView === "tasks") {
      setActiveTrack(null);
    }

    setView(nextView);
  };

  const handleOpenTrack = (trackId) => {
    setLastOpenedTrackId(trackId || null);
    setActiveTrack(trackId ? { id: trackId } : null);
    setActiveActivity(null);
    setView("track");
  };

  const handleStartActivity = (track, activity) => {
    setActiveTrack(track);
    setActiveActivity(activity);
    setLastOpenedTrackId(track?.id || null);
    setView("activity");
  };

  const handleBackToTracks = () => {
    setView(activeTrack?.id ? "track" : "tasks");
  };

  const handleCompleteActivity = (activityId) => {
    if (!user) {
      return false;
    }

    const completed = completeActivity(activityOrder, user, activityId);
    if (completed) {
      saveRemoteProgress(getCompletedActivityIds(user)).catch(() => {
        // The local cache stays valid even if the sync request fails.
      });
      setProgressVersion((value) => value + 1);
    }

    return completed;
  };

  return (
    <div className="min-h-screen text-white">
      <Header
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        onOpenAbout={() => setShowAbout(true)}
        isAuthed={authed}
        user={user}
        isCourseView={view === "tasks" || view === "track" || view === "activity"}
      />

      {showAbout ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#081121] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#7dd3fc]">Sobre</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Uma plataforma simples para aprender programacao desde a base.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowAbout(false)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#dbeafe] transition hover:bg-white/10"
              >
                Fechar
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#cbd5e1] sm:text-base">
              <p>
                O Minuto e uma plataforma educacional gratuita voltada ao ensino de logica e fundamentos de programacao.
              </p>
              <p>
                Aqui, o conteudo esta organizado em trilhas, com atividades sequenciais para voce aprender aos poucos e praticar no proprio site.
              </p>
              <p>
                A proposta e ajudar iniciantes a entender conceitos essenciais, como estrutura de paginas, estilos, variaveis, operadores e condicionais, de forma simples, visual e progressiva.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <main
        className={
          view === "tasks" || view === "track" || view === "activity"
            ? "w-full px-4 py-6 sm:px-6 sm:py-8"
            : "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10"
        }
      >
        <Suspense fallback={<ViewFallback />}>
          {view === "login" && (
            <Login onSwitch={() => setView("register")} onSuccess={handleAuthSuccess} />
          )}
          {view === "register" && (
            <Register onSwitch={() => setView("login")} onSuccess={handleAuthSuccess} />
          )}
          {view === "tasks" && (
            <Tasks
              user={user}
              progressVersion={progressVersion}
              initialTrackId={lastOpenedTrackId}
              onOpenTrack={handleOpenTrack}
            />
          )}
          {view === "track" && activeTrack?.id ? (
            <TrackDetails
              trackId={activeTrack.id}
              user={user}
              progressVersion={progressVersion}
              onBack={() => setView("tasks")}
              onStartActivity={handleStartActivity}
            />
          ) : null}
          {view === "activity" && activeTrack && activeActivity ? (
            <ActivityWorkspace
              track={activeTrack}
              activity={activeActivity}
              onBack={handleBackToTracks}
              onCompleteActivity={handleCompleteActivity}
            />
          ) : null}
        </Suspense>
      </main>
    </div>
  );
}
