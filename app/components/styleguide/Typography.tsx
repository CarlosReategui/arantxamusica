export default function Typography() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Tipografía</h2>
        <p className="text-foreground-muted">
          Sistema tipográfico usando la fuente Outfit
        </p>
      </div>

      {/* Headings */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Encabezados
        </h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              h1 - text-5xl font-bold
            </p>
            <h1 className="text-5xl font-bold text-foreground">
              Arantxa Música
            </h1>
          </div>

          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              h2 - text-4xl font-bold
            </p>
            <h2 className="text-4xl font-bold text-foreground">
              Cantante Pop Peruana
            </h2>
          </div>

          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              h3 - text-3xl font-semibold
            </p>
            <h3 className="text-3xl font-semibold text-foreground">
              Nuevo Álbum Disponible
            </h3>
          </div>

          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              h4 - text-2xl font-semibold
            </p>
            <h4 className="text-2xl font-semibold text-foreground">
              Últimos Sencillos
            </h4>
          </div>

          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              h5 - text-xl font-medium
            </p>
            <h5 className="text-xl font-medium text-foreground">
              Conciertos Próximos
            </h5>
          </div>

          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              h6 - text-lg font-medium
            </p>
            <h6 className="text-lg font-medium text-foreground">
              Sígueme en Redes
            </h6>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Texto de Cuerpo
        </h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              Párrafo grande - text-lg
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Arantxa es una cantante pop de 22 años originaria de Lima, Perú. 
              Su música combina ritmos latinos con influencias pop contemporáneas, 
              creando un sonido único que ha cautivado a miles de fans.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              Párrafo normal - text-base
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Desde sus inicios en la música, Arantxa ha demostrado un talento 
              excepcional para conectar con su audiencia a través de letras 
              emotivas y melodías pegajosas.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-background-card border border-border">
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              Texto pequeño - text-sm
            </p>
            <p className="text-sm text-foreground-muted leading-relaxed">
              © 2024 Arantxa Música. Todos los derechos reservados. 
              Diseño y desarrollo por el equipo creativo.
            </p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Enlaces
        </h3>
        <div className="p-4 rounded-lg bg-background-card border border-border space-y-4">
          <div>
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              Enlace primario
            </p>
            <a href="#" className="text-primary-1 hover:text-primary-2 transition-colors underline underline-offset-4">
              Escucha mi nuevo sencillo
            </a>
          </div>
          <div>
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              Enlace secundario
            </p>
            <a href="#" className="text-secondary-1 hover:text-secondary-2 transition-colors underline underline-offset-4">
              Ver más información
            </a>
          </div>
          <div>
            <p className="text-xs text-foreground-muted mb-2 font-mono">
              Enlace sutil
            </p>
            <a href="#" className="text-foreground-muted hover:text-foreground transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

