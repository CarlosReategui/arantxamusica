import ColorPalette from "../components/styleguide/ColorPalette";
import Typography from "../components/styleguide/Typography";
import Buttons from "../components/styleguide/Buttons";
import AssetPreview from "../components/styleguide/AssetPreview";

export const metadata = {
  title: "Guía de Estilos - Arantxa",
  description: "Sistema de diseño y componentes para el portfolio de Arantxa",
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Guía de Estilos
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl">
            Sistema de diseño para el portfolio de Arantxa. 
            Aquí encontrarás todos los colores, tipografías, botones y assets 
            que componen la identidad visual de la marca.
          </p>
        </header>

        {/* Components */}
        <div className="space-y-16">
          <ColorPalette />
          <Typography />
          <Buttons />
          <AssetPreview />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-foreground-muted text-center">
            Esta guía de estilos es una referencia interna para mantener 
            la consistencia visual en todo el portfolio.
          </p>
        </footer>
      </div>
    </div>
  );
}

