import { Suspense, lazy, useEffect, useMemo, useState } from "react";

import Header from "./components/Header.jsx";
import { activityOrder } from "./data/activityOrder.js";
import { clearSession, getUser, isAuthenticated } from "./services/auth.js";
import { completeActivity } from "./services/progress.js";

const ActivityWorkspace = lazy(() => import("./pages/ActivityWorkspace.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Tasks = lazy(() => import("./pages/Tasks.jsx"));

const initialView = () => (isAuthenticated() ? "tasks" : "login");

function ViewFallback() {
  return (
    <div className="surface-enter flex min-h-[16rem] items-center justify-center rounded-[2rem] border border-black/10 bg-white/70 px-6 py-10 text-[#5f4c3d] shadow-sm">
      Carregando ambiente...
    </div>
  );
}

export default function App() {
  const [view, setView] = useState(initialView);
  const [activeTrack, setActiveTrack] = useState(null);
  const [activeActivity, setActiveActivity] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [progressVersion, setProgressVersion] = useState(0);
  const [sessionVersion, setSessionVersion] = useState(0);
  const user = useMemo(() => getUser(), [sessionVersion]);
  const authed = isAuthenticated();

  useEffect(() => {
    if (!authed && (view === "tasks" || view === "activity")) {
      setView("login");
    }
  }, [authed, view]);

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
      setActiveTrack(null);
      setActiveActivity(null);
    }

    setView(nextView);
  };

  const handleStartActivity = (track, activity) => {
    setActiveTrack(track);
    setActiveActivity(activity);
    setView("activity");
  };

  const handleBackToTracks = () => {
    setView("tasks");
  };

  const handleCompleteActivity = (activityId) => {
    if (!user) {
      return false;
    }

    const completed = completeActivity(activityOrder, user, activityId);
    if (completed) {
      setProgressVersion((value) => value + 1);
    }

    return completed;
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        onOpenAbout={() => setShowAbout(true)}
        isAuthed={authed}
        user={user}
        isCourseView={view === "tasks" || view === "activity"}
      />

      {showAbout ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b140f]/55 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[2rem] border border-[#d9c4aa] bg-[#f6eee4] p-6 text-[#2c221b] shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8d7762]">Sobre</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Uma plataforma simples para aprender programacao desde a base
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowAbout(false)}
                className="rounded-full border border-[#d1b89d] bg-[#fffaf4] px-4 py-2 text-sm text-[#4a382c] transition hover:bg-[#f1e3d3]"
              >
                Fechar
              </button>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f4c3d] sm:text-base">
              <p>
                O Minuto e uma plataforma educacional gratuita voltada ao ensino de logica e fundamentos de programacao.
              </p>
              <p>
                Aqui o conteudo esta organizado em trilhas de HTML, CSS e JavaScript, com atividades sequenciais para voce aprender aos poucos e praticar no proprio site.
              </p>
              <p>
                A proposta e ajudar iniciantes a entender conceitos essenciais como estrutura de paginas, estilos, variaveis, operadores e condicionais de forma simples, visual e progressiva.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <main
        className={
          view === "tasks" || view === "activity"
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
              onStartActivity={handleStartActivity}
            />
          )}
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
