import { useState } from "react";

import { apiRequest } from "../services/api.js";
import { setToken } from "../services/auth.js";

export default function Login({ onSwitch, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      setToken(data.token);
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-3xl bg-black p-8 text-white">
        <h2 className="text-3xl font-semibold">Entre para organizar o seu dia</h2>
        <p className="mt-4 text-white/70">
          Use o Minuto para acompanhar tarefas por usuario, status e data de criacao.
        </p>
        <button
          type="button"
          onClick={onSwitch}
          className="mt-6 rounded-full border border-white/30 px-4 py-2 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          Criar conta
        </button>
      </div>

      <form onSubmit={handleSubmit} className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold">Login</h3>
        <div className="mt-6 space-y-4">
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none focus:border-black"
            />
          </label>
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            Senha
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none focus:border-black"
            />
          </label>
        </div>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-black px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-black/80 disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}
