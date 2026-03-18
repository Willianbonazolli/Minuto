export default function Header({ onNavigate, onLogout, onOpenAbout, isAuthed, user, isCourseView }) {
  return (
    <header className="surface-enter border-b border-[#d8c8b5] bg-[#f3ebe1]/92 backdrop-blur">
      <div
        className={`mx-auto flex w-full flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between ${
          isCourseView ? "max-w-none" : "max-w-6xl"
        }`}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#8d7762]">Minuto</p>
          <h1 className="mt-2 text-2xl font-semibold text-[#2c221b] sm:text-3xl">
            Mini curso de Introdução à Programação
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[#6f5b4a]">
            Plataforma gratuita para aprender programação de forma simples, prática e progressiva.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {isAuthed && user?.name ? (
            <div className="rounded-full border border-[#d7c5b2] bg-[#fbf6f0] px-4 py-2 text-sm text-[#6f5b4a]">
              Olá, <strong className="font-semibold text-[#2c221b]">{user.name}</strong>
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            {isAuthed ? (
              <>
                <button
                  type="button"
                  className="glass-button rounded-full border border-[#cbb7a3] bg-[#fbf6f0] px-4 py-2 text-sm text-[#4a382c] transition hover:border-[#9d8064] hover:bg-[#e9dccd]"
                  onClick={onOpenAbout}
                >
                  Sobre
                </button>
                <button
                  type="button"
                  className="glass-button rounded-full border border-[#cbb7a3] bg-[#fbf6f0] px-4 py-2 text-sm text-[#4a382c] transition hover:border-[#9d8064] hover:bg-[#e9dccd]"
                  onClick={() => onNavigate("tasks")}
                >
                  Curso
                </button>
                <button
                  type="button"
                  className="glass-button rounded-full bg-[#2f241d] px-4 py-2 text-sm text-[#f6efe7] transition hover:bg-[#43342a]"
                  onClick={onLogout}
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="glass-button rounded-full border border-[#cbb7a3] bg-[#fbf6f0] px-4 py-2 text-sm text-[#4a382c] transition hover:border-[#9d8064] hover:bg-[#e9dccd]"
                  onClick={onOpenAbout}
                >
                  Sobre
                </button>
                <button
                  type="button"
                  className="glass-button rounded-full border border-[#cbb7a3] bg-[#fbf6f0] px-4 py-2 text-sm text-[#4a382c] transition hover:border-[#9d8064] hover:bg-[#e9dccd]"
                  onClick={() => onNavigate("login")}
                >
                  Entrar
                </button>
                <button
                  type="button"
                  className="glass-button rounded-full bg-[#2f241d] px-4 py-2 text-sm text-[#f6efe7] transition hover:bg-[#43342a]"
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
