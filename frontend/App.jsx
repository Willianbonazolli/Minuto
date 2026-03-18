import { useEffect, useMemo, useState } from "react";

import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Tasks from "./pages/Tasks.jsx";
import { clearSession, getUser, isAuthenticated } from "./services/auth.js";

const initialView = () => (isAuthenticated() ? "tasks" : "login");

export default function App() {
  const [view, setView] = useState(initialView);
  const [sessionVersion, setSessionVersion] = useState(0);
  const user = useMemo(() => getUser(), [sessionVersion]);
  const authed = isAuthenticated();

  useEffect(() => {
    if (!authed && view === "tasks") {
      setView("login");
    }
  }, [authed, view]);

  const handleLogout = () => {
    clearSession();
    setSessionVersion((value) => value + 1);
    setView("login");
  };

  const handleAuthSuccess = () => {
    setSessionVersion((value) => value + 1);
    setView("tasks");
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header
        onNavigate={setView}
        onLogout={handleLogout}
        isAuthed={authed}
        user={user}
      />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {view === "login" && (
          <Login onSwitch={() => setView("register")} onSuccess={handleAuthSuccess} />
        )}
        {view === "register" && (
          <Register onSwitch={() => setView("login")} onSuccess={handleAuthSuccess} />
        )}
        {view === "tasks" && <Tasks onLogout={handleLogout} user={user} />}
      </main>
    </div>
  );
}
