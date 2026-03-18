import { useState } from "react";

import { apiRequest } from "../services/api.js";
import { setSession } from "../services/auth.js";

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
        body: JSON.stringify({
          email: email.trim(),
          password
        })
      });

      setSession(data);
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
      <div className="rounded-[2rem] bg-black p-8 text-white shadow-xl shadow-black/10">
        <div className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
          Login seguro
        </div>
        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Entre e organize seu dia sem perder o ritmo</h2>
        <p className="mt-4 max-w-lg text-white/70">
          Veja o que falta concluir, filtre tarefas em segundos e acompanhe o progresso do seu painel.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium">Busca instantanea</p>
            <p className="mt-2 text-sm text-white/60">Encontre qualquer tarefa pelo titulo ou descricao.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium">Painel com resumo</p>
            <p className="mt-2 text-sm text-white/60">Visualize pendencias e concluidas sem sair da tela.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onSwitch}
          className="mt-8 rounded-full border border-white/30 px-4 py-2 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          Quero me cadastrar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold">Acesse sua conta</h3>
        <p className="mt-2 text-sm text-black/55">Use seu email e senha para voltar ao painel.</p>

        <div className="mt-6 space-y-4">
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            E-mail
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none transition focus:border-black"
            />
          </label>
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            Senha
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none transition focus:border-black"
            />
          </label>
        </div>

        {error ? <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-black px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}
