import { Suspense, lazy, useEffect, useMemo, useState } from "react";

import Header from "./components/Header.jsx";
import { activityOrder } from "./data/activityOrder.js";
import { apiRequest } from "./services/api.js";
import { clearSession, consumeWelcomeForUser, getUser, isAuthenticated } from "./services/auth.js";
import { completeActivity, getCompletedActivityIds, setCompletedActivityIds } from "./services/progress.js";
import { fetchRemoteProgress, saveRemoteProgress } from "./services/progressApi.js";

const ActivityWorkspace = lazy(() => import("./pages/ActivityWorkspace.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Tasks = lazy(() => import("./pages/Tasks.jsx"));
const TrackDetails = lazy(() => import("./pages/TrackDetails.jsx"));

const initialView = () => (isAuthenticated() ? "tasks" : "login");
const LAST_TRACK_PREFIX = "minuto_last_track_";

function getLastTrackKey(user) {
  const userId = user?.id || user?.username || user?.name;
  return userId ? `${LAST_TRACK_PREFIX}${userId}` : null;
}

function getSavedTrackId(user) {
  const key = getLastTrackKey(user);
  if (!key) {
    return null;
  }

  return localStorage.getItem(key);
}

function saveTrackId(user, trackId) {
  const key = getLastTrackKey(user);
  if (!key) {
    return;
  }

  if (!trackId) {
    localStorage.removeItem(key);
    return;
  }

  localStorage.setItem(key, trackId);
}

function ViewFallback() {
  return (
    <div className="surface-enter flex min-h-[16rem] items-center justify-center rounded-[2rem] border border-white/10 bg-[#131313]/90 px-6 py-10 text-[#cfcfcf] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
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
  const [syncWarning, setSyncWarning] = useState("");
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
      setLastOpenedTrackId(null);
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
        setSyncWarning("");
      } catch (error) {
        setSyncWarning("Nao foi possivel sincronizar seu progresso com o servidor. Seu progresso local continua salvo neste navegador.");
      }
    };

    syncProgress();

    return () => {
      cancelled = true;
    };
  }, [authed, user, sessionVersion]);

  useEffect(() => {
    if (!authed || !user) {
      setLastOpenedTrackId(null);
      return;
    }

    setLastOpenedTrackId(getSavedTrackId(user));
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
    apiRequest("/api/auth/logout", { method: "POST" }).catch(() => {
      // Best effort para limpar cookie de sessao no backend.
    });
    clearSession();
    setSessionVersion((value) => value + 1);
    setActiveTrack(null);
    setActiveActivity(null);
    setSyncWarning("");
    setLastOpenedTrackId(null);
    setView("login");
  };

  const handleAuthSuccess = () => {
    setSessionVersion((value) => value + 1);
    setSyncWarning("");
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
    saveTrackId(user, trackId || null);
    setActiveTrack(trackId ? { id: trackId } : null);
    setActiveActivity(null);
    setView("track");
  };

  const handleStartActivity = (track, activity) => {
    saveTrackId(user, track?.id || null);
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
      saveRemoteProgress(getCompletedActivityIds(user))
        .then(() => {
          setSyncWarning("");
        })
        .catch(() => {
          setSyncWarning("Atividade concluida localmente, mas a sincronizacao com o servidor falhou. Tentaremos novamente mais tarde.");
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/85 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[2rem] bg-[#262626] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#ffffff]">Sobre</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Uma plataforma simples para aprender programaÃ§Ã£o.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowAbout(false)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#d1d1d1] transition hover:bg-white/10"
              >
                Fechar
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#cfcfcf] sm:text-base">
              <p>
                O Minuto Ã© uma plataforma educacional gratuita voltada ao ensino inicial de programaÃ§Ã£o.
              </p>
              <p>
                Aqui, o conteÃºdo estÃ¡ organizado em trilhas, com atividades sequenciais para vocÃª aprender aos poucos e praticar no prÃ³prio site.
              </p>
              <p>
                A proposta Ã© ajudar iniciantes a entender conceitos essenciais, como estrutura de pÃ¡ginas, estilos, variÃ¡veis, operadores e condicionais, de forma simples, visual e progressiva.
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
        {syncWarning ? (
          <div className="mb-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-[#cfcfcf]">
            {syncWarning}
          </div>
        ) : null}
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




