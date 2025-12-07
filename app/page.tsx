import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <Image
          src="/icon/primary_1_no_bg.png"
          alt="Arantxa"
          width={120}
          height={120}
          className="animate-pulse"
        />
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            <span className="text-primary-1">Arantxa</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-md">
            Cantante pop de Lima, Perú
          </p>
        </div>
        <p className="text-foreground-muted">
          Página en construcción...
        </p>
      </main>
    </div>
  );
}
