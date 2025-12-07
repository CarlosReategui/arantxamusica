export const metadata = {
  title: "Música - Arantxa",
  description: "Escucha el último álbum y sencillos de Arantxa",
};

export default function MusicaPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Música
          </h1>
          <p className="text-lg text-foreground-muted">
            Último álbum y sencillos
          </p>
        </header>

        <div className="flex items-center justify-center min-h-[400px] border border-dashed border-border rounded-xl">
          <p className="text-foreground-muted">
            Contenido próximamente...
          </p>
        </div>
      </div>
    </div>
  );
}

