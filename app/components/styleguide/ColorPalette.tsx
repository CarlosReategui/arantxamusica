const colors = [
  {
    name: "Primary 1",
    variable: "--color-primary-1",
    value: "rgb(28, 137, 89)",
    hex: "#1C8959",
    description: "Verde principal - Usado para acentos y elementos destacados",
  },
  {
    name: "Primary 2",
    variable: "--color-primary-2",
    value: "rgb(247, 143, 32)",
    hex: "#F78F20",
    description: "Naranja principal - Usado para estados activos y hover",
  },
  {
    name: "Secondary 1",
    variable: "--color-secondary-1",
    value: "#0691CF",
    hex: "#0691CF",
    description: "Azul secundario - Usado para enlaces y elementos informativos",
  },
  {
    name: "Secondary 2",
    variable: "--color-secondary-2",
    value: "rgb(101, 31, 210)",
    hex: "#651FD2",
    description: "Púrpura secundario - Usado para elementos creativos",
  },
];

const themeColors = [
  {
    name: "Background",
    variable: "--background",
    value: "#e0d4c3",
    description: "Fondo principal de la página",
  },
  {
    name: "Background Elevated",
    variable: "--background-elevated",
    value: "#d4c7b5",
    description: "Fondo elevado para secciones",
  },
  {
    name: "Background Card",
    variable: "--background-card",
    value: "#f5ede3",
    description: "Fondo de tarjetas y componentes",
  },
  {
    name: "Foreground",
    variable: "--foreground",
    value: "#4a4541",
    description: "Color de texto principal",
  },
  {
    name: "Foreground Muted",
    variable: "--foreground-muted",
    value: "#7a746d",
    description: "Color de texto secundario",
  },
  {
    name: "Border",
    variable: "--border",
    value: "#c4b8a7",
    description: "Color de bordes",
  },
];

export default function ColorPalette() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Paleta de Colores</h2>
        <p className="text-foreground-muted">Los colores de la marca de Arantxa</p>
      </div>

      {/* Brand Colors */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Colores de Marca</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div
              key={color.name}
              className="rounded-xl overflow-hidden border border-border bg-background-card"
            >
              <div
                className="h-24 w-full"
                style={{ backgroundColor: color.value }}
              />
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-foreground">{color.name}</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-foreground-muted font-mono">{color.hex}</p>
                  <p className="text-foreground-muted font-mono text-xs">{color.variable}</p>
                </div>
                <p className="text-xs text-foreground-muted">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Colors */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Colores del Tema</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {themeColors.map((color) => (
            <div
              key={color.name}
              className="rounded-xl overflow-hidden border border-border bg-background-card"
            >
              <div
                className="h-16 w-full border-b border-border"
                style={{ backgroundColor: color.value }}
              />
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-foreground">{color.name}</h4>
                <p className="text-foreground-muted font-mono text-sm">{color.value}</p>
                <p className="text-xs text-foreground-muted">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

