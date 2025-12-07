import ReleaseCard, { Release } from "../components/ReleaseCard";
import SectionHeading from "../components/ui/SectionHeading";
import releases from "../../data/releases.json";

export const metadata = {
  title: "Música - Arantxa",
  description: "Escucha el último álbum y sencillos de Arantxa",
};

export default function MusicaPage() {
  const featuredReleases = (releases as Release[]).filter((r) => r.featured);
  const otherReleases = (releases as Release[]).filter((r) => !r.featured);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Música
          </h1>
          <p className="text-lg text-foreground-muted">
            Escucha mi música en todas las plataformas
          </p>
        </header>

        {/* Featured Releases */}
        {featuredReleases.length > 0 && (
          <section className="mb-16">
            {featuredReleases.map((release) => (
              <ReleaseCard
                key={release.id}
                release={release}
                variant="featured"
              />
            ))}
          </section>
        )}

        {/* Other Releases */}
        {otherReleases.length > 0 && (
          <section>
            <SectionHeading
              title="Otros Lanzamientos"
              subtitle="Explora más de mi música"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherReleases.map((release) => (
                <ReleaseCard key={release.id} release={release} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
