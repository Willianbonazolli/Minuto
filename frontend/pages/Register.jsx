import { useState } from "react";

import { apiRequest } from "../services/api.js";
import { setSession } from "../services/auth.js";

export default function Register({ onSwitch, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (password.trim().length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
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
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-semibold">Crie sua conta</h3>
        <p className="mt-2 text-sm text-black/55">Leva menos de um minuto para comecar a estudar.</p>

        <div className="mt-6 space-y-4">
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            Usuario
            <input
              type="text"
              required
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full rounded-xl border border-black/20 px-4 py-3 text-base outline-none transition focus:border-black"
            />
          </label>
          <label className="block text-sm uppercase tracking-[0.2em] text-black/60">
            Senha
            <input
              type="password"
              required
              minLength="6"
              autoComplete="new-password"
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
          {loading ? "Criando..." : "Criar conta"}
        </button>
      </form>

      <div className="rounded-[2rem] bg-[#0e141b] p-8 text-white shadow-xl shadow-black/10">
        <div className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
          Novo curso
        </div>
        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Uma base simples para aprender programacao</h2>
        <p className="mt-4 max-w-lg text-white/70">
          Cadastre-se para acessar gratuitamente um mini curso de Introducao a Programacao com conteudos iniciais.
        </p>
        <div className="mt-8 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
            Aulas organizadas por modulos com progresso de estudo.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
            Conteudos sobre entrada e saida de dados, operadores e logica condicional.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
            Base construida com HTML, CSS e JavaScript para facilitar a pratica.
          </div>
        </div>
        <button
          type="button"
          onClick={onSwitch}
          className="mt-8 rounded-full border border-white/30 px-4 py-2 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          Ja tenho conta
        </button>
      </div>
    </section>
  );
}
