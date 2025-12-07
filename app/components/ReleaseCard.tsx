import Image from "next/image";
import Card from "./ui/Card";
import Button from "./ui/Button";

export interface Release {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  link: string;
  featured: boolean;
}

interface ReleaseCardProps {
  release: Release;
  variant?: "default" | "featured";
}

export default function ReleaseCard({
  release,
  variant = "default",
}: ReleaseCardProps) {
  if (variant === "featured") {
    return (
      <Card padding="none" className="group">
        <div className="flex flex-col md:flex-row">
          <div className="relative aspect-square md:w-1/2 overflow-hidden">
            <Image
              src={release.coverImage}
              alt={release.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10 md:w-1/2">
            <span className="text-sm font-medium text-primary-1 uppercase tracking-wider mb-2">
              Lanzamiento Destacado
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {release.name}
            </h3>
            <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
              {release.description}
            </p>
            <div>
              <Button
                href={release.link}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Escuchar
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card padding="none" className="group h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={release.coverImage}
          alt={release.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {release.name}
        </h3>
        <p className="text-sm text-foreground-muted mb-4 flex-grow">
          {release.description}
        </p>
        <Button
          href={release.link}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          className="w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Escuchar
        </Button>
      </div>
    </Card>
  );
}
