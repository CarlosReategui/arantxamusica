import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  children,
  className = "",
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={`mb-8 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-muted">
          {subtitle}
        </p>
      )}
      {children}
    </header>
  );
}
