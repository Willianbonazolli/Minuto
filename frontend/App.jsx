import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Tasks from "./pages/Tasks.jsx";
import { getToken, clearToken } from "./services/auth.js";

const initialView = () => {
  if (getToken()) return "tasks";
  return "login";
};

export default function App() {
  const [view, setView] = useState(initialView);

  useEffect(() => {
    if (!getToken() && view === "tasks") {
      setView("login");
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header
        onNavigate={setView}
        onLogout={() => {
          clearToken();
          setView("login");
        }}
        isAuthed={Boolean(getToken())}
      />

      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        {view === "login" && (
          <Login onSwitch={() => setView("register")} onSuccess={() => setView("tasks")} />
        )}
        {view === "register" && (
          <Register onSwitch={() => setView("login")} onSuccess={() => setView("tasks")} />
        )}
        {view === "tasks" && <Tasks />}
      </main>
    </div>
  );
}
