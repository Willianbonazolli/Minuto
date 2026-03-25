export default function Header({ onNavigate, onLogout, onOpenAbout, isAuthed, user, isCourseView }) {
  return (
    <header className="surface-enter border-b border-white/10 bg-[#141414]/90 backdrop-blur-xl">
      <div
        className={`mx-auto flex w-full flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between ${
          isCourseView ? "max-w-none" : "max-w-6xl"
        }`}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#b5b5b5]">Minuto</p>
          <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Mini curso de Introducao a Programacao
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[#94a3b8]">
            Plataforma gratuita com dashboard, aulas guiadas e laboratorio com preview ao vivo.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {isAuthed && user?.name ? (
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#cbd5e1]">
              Ola, <strong className="font-semibold text-white">{user.name}</strong>
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="glass-button rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#dbeafe] transition hover:bg-white/10"
              onClick={onOpenAbout}
            >
              Sobre
            </button>

            {isAuthed ? (
              <>
                <button
                  type="button"
                  className="glass-button rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#dbeafe] transition hover:bg-white/10"
                  onClick={() => onNavigate("tasks")}
                >
                  Meus cursos
                </button>
                <button
                  type="button"
                  className="glass-button rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-4 py-2 text-sm text-white transition hover:opacity-95"
                  onClick={onLogout}
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="glass-button rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#dbeafe] transition hover:bg-white/10"
                  onClick={() => onNavigate("login")}
                >
                  Entrar
                </button>
                <button
                  type="button"
                  className="glass-button rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-4 py-2 text-sm text-white transition hover:opacity-95"
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
