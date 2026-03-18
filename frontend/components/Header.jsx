export default function Header({ onNavigate, onLogout, isAuthed, user }) {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">Minuto</p>
          <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Painel de tarefas mais rapido e organizado</h1>
          <p className="mt-2 max-w-2xl text-sm text-black/60">
            Controle tarefas, acompanhe o progresso do dia e mantenha tudo centralizado em um painel simples.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {isAuthed && user?.name ? (
            <div className="rounded-full border border-black/10 bg-paper px-4 py-2 text-sm text-black/70">
              Ola, <strong className="font-semibold text-black">{user.name}</strong>
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            {isAuthed ? (
              <>
                <button
                  type="button"
                  className="rounded-full border border-black/20 px-4 py-2 text-sm transition hover:border-black hover:bg-black hover:text-white"
                  onClick={() => onNavigate("tasks")}
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-black/80"
                  onClick={onLogout}
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="rounded-full border border-black/20 px-4 py-2 text-sm transition hover:border-black hover:bg-black hover:text-white"
                  onClick={() => onNavigate("login")}
                >
                  Entrar
                </button>
                <button
                  type="button"
                  className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-black/80"
                  onClick={() => onNavigate("register")}
                >
                  Criar conta
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
