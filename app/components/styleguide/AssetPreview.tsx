import Image from "next/image";

const icons = [
  { name: "Primary 1 (sin fondo)", src: "/icon/primary_1_no_bg.png" },
  { name: "Primary 1 (con fondo)", src: "/icon/primary_1_over_bg.png" },
  { name: "Primary 2 (sin fondo)", src: "/icon/primary_2_no_bg.png" },
  { name: "Primary 2 (con fondo)", src: "/icon/primary_2_over_bg.png" },
  { name: "Secondary 1 (sin fondo)", src: "/icon/secondary_1_no_bg.png" },
  { name: "Secondary 1 (blanco/fondo)", src: "/icon/secondary_1_white_over_bg.png" },
  { name: "Secondary 2 (sin fondo)", src: "/icon/secondary_2_no_bg.png" },
  { name: "Secondary 2 (blanco/fondo)", src: "/icon/secondary_2_white_over_bg.png" },
  { name: "Blanco (sin fondo)", src: "/icon/white_no_bg.png" },
  { name: "Negro (sin fondo)", src: "/icon/black_no_bg.png" },
];

const logos = [
  { name: "Primary 1 (sin fondo)", src: "/logo/primary_1_no_bg.png" },
  { name: "Primary 1 (con fondo)", src: "/logo/primary_1_over_bg.png" },
  { name: "Primary 2 (sin fondo)", src: "/logo/primary_2_no_bg.png" },
  { name: "Primary 2 (con fondo)", src: "/logo/primary_2_over_bg.png" },
  { name: "Secondary 1 (sin fondo)", src: "/logo/secondary_1_no_bg.png" },
  { name: "Secondary 1 (con fondo)", src: "/logo/secondary_1_over_bg.png" },
  { name: "Secondary 2 (sin fondo)", src: "/logo/secondary_2_no_bg.png" },
  { name: "Secondary 2 (con fondo)", src: "/logo/secondary_2_over_bg.png" },
  { name: "Blanco (sin fondo)", src: "/logo/white_no_bg.png" },
  { name: "Negro (sin fondo)", src: "/logo/black_no_bg.png" },
];

export default function AssetPreview() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Assets</h2>
        <p className="text-foreground-muted">
          Iconos y logos de la marca Arantxa
        </p>
      </div>

      {/* Icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Iconos (Hada)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {icons.map((icon) => (
            <div
              key={icon.src}
              className="flex flex-col items-center p-4 rounded-xl border border-border bg-background-card"
            >
              <div className="relative w-16 h-16 mb-3 bg-[repeating-conic-gradient(#d4c7b5_0%_25%,#c4b8a7_0%_50%)] bg-[length:16px_16px] rounded-lg flex items-center justify-center">
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-center text-foreground-muted">
                {icon.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Logos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
          Logos (Arantxa)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex flex-col items-center p-4 rounded-xl border border-border bg-background-card"
            >
              <div className="relative w-full h-16 mb-3 bg-[repeating-conic-gradient(#d4c7b5_0%_25%,#c4b8a7_0%_50%)] bg-[length:16px_16px] rounded-lg flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="object-contain max-h-12"
                />
              </div>
              <p className="text-xs text-center text-foreground-muted">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

