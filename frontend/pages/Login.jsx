import { useState } from "react";

import { apiRequest } from "../services/api.js";
import { setSession } from "../services/auth.js";

export default function Login({ onSwitch, onSuccess }) {
  const [username, setUsername] = useState("");
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
          username: username.trim(),
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
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(80,80,80,0.18),rgba(20,20,20,0.96)_52%,rgba(0,0,0,0.98))] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#b5b5b5]">
          Plataforma gratuita
        </div>
        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
          Entre para acompanhar seu mini curso de programacao.
        </h2>
        <p className="mt-4 max-w-lg text-[#cbd5e1]">
          Aprenda no seu ritmo, acompanhe sua evolucao e avance atividade por atividade em um ambiente de estudo mais moderno.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-white">Dashboard de progresso</p>
            <p className="mt-2 text-sm text-[#cbd5e1]">Veja seus modulos, aulas concluidas e o proximo passo da trilha.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-white">Laboratorio com preview</p>
            <p className="mt-2 text-sm text-[#cbd5e1]">Edite o codigo e acompanhe o resultado ao vivo na mesma tela.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onSwitch}
          className="mt-8 w-full rounded-full bg-gradient-to-r from-[#3da9fc] to-[#2563eb] px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-95 sm:w-auto sm:min-w-[18rem]"
        >
          Quero me cadastrar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#081121]/95 p-8 text-white shadow-[0_24px_80px_rgba(2,6,23,0.42)]">
        <h3 className="text-2xl font-semibold">Acesse sua conta.</h3>
        <p className="mt-2 text-sm text-[#94a3b8]">Use seu usuario e senha para voltar ao ambiente de estudo.</p>

        <div className="mt-6 space-y-4">
          <label className="block text-sm uppercase tracking-[0.2em] text-[#94a3b8]">
            Usuario
            <input
              type="text"
              required
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-sky-400/40"
            />
          </label>
          <label className="block text-sm uppercase tracking-[0.2em] text-[#94a3b8]">
            Senha
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-sky-400/40"
            />
          </label>
        </div>

        {error ? <p className="mt-4 rounded-xl bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-4 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <div className="mt-5 text-center text-sm text-[#94a3b8]">
          Ainda nao tem conta?{" "}
          <button
            type="button"
            onClick={onSwitch}
            className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
          >
            Criar conta
          </button>
        </div>
      </form>
    </section>
  );
}
