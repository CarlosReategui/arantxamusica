export const metadata = {
  title: "Merch - Arantxa",
  description: "Tienda oficial de merchandising de Arantxa",
};

export default function MerchPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Merch
          </h1>
          <p className="text-lg text-foreground-muted">
            Tienda oficial
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

