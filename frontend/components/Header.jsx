export default function Header({ onNavigate, onLogout, isAuthed }) {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-black/40">Minuto</p>
          <h1 className="text-2xl font-semibold">Gerenciador de tarefas</h1>
        </div>
        <div className="flex items-center gap-3">
          {isAuthed ? (
            <>
              <button
                type="button"
                className="rounded-full border border-black/20 px-4 py-2 text-sm transition hover:border-black hover:bg-black hover:text-white"
                onClick={() => onNavigate("tasks")}
              >
                Minhas tarefas
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
    </header>
  );
}
