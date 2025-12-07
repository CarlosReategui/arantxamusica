import VideoClipCard, { VideoClip } from "../components/VideoClipCard";
import videoclips from "../../data/videoclips.json";

export const metadata = {
  title: "Videoclips - Arantxa",
  description: "Mira los videoclips oficiales de Arantxa",
};

export default function VideoclipsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Videoclips
          </h1>
          <p className="text-lg text-foreground-muted">
            Videos musicales oficiales
          </p>
        </header>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(videoclips as VideoClip[]).map((clip) => (
            <VideoClipCard key={clip.id} clip={clip} />
          ))}
        </div>
      </div>
    </div>
  );
}
