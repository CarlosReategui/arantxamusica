export default function Buttons() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Botones</h2>
        <p className="text-foreground-muted">
          Variantes de botones para diferentes contextos
        </p>
      </div>

      {/* Primary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Botones Primarios
        </h3>
        <div className="p-6 rounded-lg bg-background-card border border-border">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-primary-1 text-white font-medium rounded-full hover:bg-primary-1/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Primary 1
            </button>
            <button className="px-6 py-3 bg-primary-2 text-white font-medium rounded-full hover:bg-primary-2/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Primary 2
            </button>
            <button className="px-6 py-3 bg-primary-1 text-white font-medium rounded-full opacity-50 cursor-not-allowed">
              Deshabilitado
            </button>
          </div>
          <p className="text-xs text-foreground-muted mt-4 font-mono">
            bg-primary-1 / bg-primary-2 + rounded-full + hover:scale-105
          </p>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Botones Secundarios
        </h3>
        <div className="p-6 rounded-lg bg-background-card border border-border">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-secondary-1 text-white font-medium rounded-full hover:bg-secondary-1/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Secondary 1
            </button>
            <button className="px-6 py-3 bg-secondary-2 text-white font-medium rounded-full hover:bg-secondary-2/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Secondary 2
            </button>
          </div>
          <p className="text-xs text-foreground-muted mt-4 font-mono">
            bg-secondary-1 / bg-secondary-2 + rounded-full
          </p>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Botones con Borde
        </h3>
        <div className="p-6 rounded-lg bg-background-card border border-border">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 border-2 border-primary-1 text-primary-1 font-medium rounded-full hover:bg-primary-1 hover:text-white transition-all duration-300">
              Outline Primary 1
            </button>
            <button className="px-6 py-3 border-2 border-primary-2 text-primary-2 font-medium rounded-full hover:bg-primary-2 hover:text-white transition-all duration-300">
              Outline Primary 2
            </button>
            <button className="px-6 py-3 border-2 border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-background transition-all duration-300">
              Outline Neutral
            </button>
          </div>
          <p className="text-xs text-foreground-muted mt-4 font-mono">
            border-2 border-[color] + hover:bg-[color]
          </p>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Botones Fantasma
        </h3>
        <div className="p-6 rounded-lg bg-background-card border border-border">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 text-primary-1 font-medium rounded-full hover:bg-primary-1/10 transition-all duration-300">
              Ghost Primary 1
            </button>
            <button className="px-6 py-3 text-primary-2 font-medium rounded-full hover:bg-primary-2/10 transition-all duration-300">
              Ghost Primary 2
            </button>
            <button className="px-6 py-3 text-foreground font-medium rounded-full hover:bg-foreground/10 transition-all duration-300">
              Ghost Neutral
            </button>
          </div>
          <p className="text-xs text-foreground-muted mt-4 font-mono">
            text-[color] + hover:bg-[color]/10
          </p>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Tamaños de Botón
        </h3>
        <div className="p-6 rounded-lg bg-background-card border border-border">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-4 py-2 text-sm bg-primary-1 text-white font-medium rounded-full hover:bg-primary-1/90 transition-all duration-300">
              Pequeño
            </button>
            <button className="px-6 py-3 bg-primary-1 text-white font-medium rounded-full hover:bg-primary-1/90 transition-all duration-300">
              Mediano
            </button>
            <button className="px-8 py-4 text-lg bg-primary-1 text-white font-medium rounded-full hover:bg-primary-1/90 transition-all duration-300">
              Grande
            </button>
          </div>
          <p className="text-xs text-foreground-muted mt-4 font-mono">
            sm: px-4 py-2 text-sm | md: px-6 py-3 | lg: px-8 py-4 text-lg
          </p>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Botones con Icono
        </h3>
        <div className="p-6 rounded-lg bg-background-card border border-border">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-1 text-white font-medium rounded-full hover:bg-primary-1/90 transition-all duration-300 hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Reproducir
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-2 text-white font-medium rounded-full hover:bg-primary-2/90 transition-all duration-300 hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Descargar
            </button>
            <button className="p-3 bg-primary-1 text-white rounded-full hover:bg-primary-1/90 transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
          </div>
          <p className="text-xs text-foreground-muted mt-4 font-mono">
            inline-flex items-center gap-2 + icon svg
          </p>
        </div>
      </div>
    </section>
  );
}

