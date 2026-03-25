import { useState } from "react";

import { apiRequest } from "../services/api.js";
import { markWelcomeForUser, setSession } from "../services/auth.js";

export default function Register({ onSwitch, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (password.trim().length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("A confirmacao de senha precisa ser igual a senha.");
      return;
    }

    setLoading(true);

    try {
      await apiRequest("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: username.trim(),
          password
        })
      });

      const loginData = await apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: username.trim(),
          password
        })
      });

      setSession(loginData);
      markWelcomeForUser(loginData.user || { username: username.trim() });
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#081121]/95 p-8 text-white shadow-[0_24px_80px_rgba(2,6,23,0.42)]">
        <h3 className="text-2xl font-semibold">Crie sua conta.</h3>
        <p className="mt-2 text-sm text-[#94a3b8]">Leva menos de um minuto para comecar a estudar.</p>

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
              minLength="6"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-sky-400/40"
            />
          </label>
          <label className="block text-sm uppercase tracking-[0.2em] text-[#94a3b8]">
            Confirmar senha
            <input
              type="password"
              required
              minLength="6"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
          {loading ? "Criando..." : "Criar conta"}
        </button>

        <div className="mt-5 text-center text-sm text-[#94a3b8]">
          Ja tem uma conta?{" "}
          <button
            type="button"
            onClick={onSwitch}
            className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
          >
            Entrar
          </button>
        </div>
      </form>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(80,80,80,0.18),rgba(20,20,20,0.95)_52%,rgba(0,0,0,0.98))] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#b5b5b5]">
          Novo curso
        </div>
        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Uma base simples para aprender programacao.</h2>
        <p className="mt-4 max-w-lg text-[#cbd5e1]">
          Crie sua conta para acompanhar sua evolucao, acessar os laboratorios e continuar exatamente da ultima trilha aberta.
        </p>
        <div className="mt-8 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#dbeafe]">
            Cadastro simples com usuario, senha e confirmacao.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#dbeafe]">
            Trilhas pensadas para quem esta dando os primeiros passos em programacao.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#dbeafe]">
            Atividades curtas, preview visual e progresso salvo automaticamente.
          </div>
        </div>
        <button
          type="button"
          onClick={onSwitch}
          className="mt-8 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Ja tenho conta
        </button>
      </div>
    </section>
  );
}
