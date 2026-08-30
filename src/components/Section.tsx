import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-20 ${className ?? ""}`}>
      <div className="mb-10">
        {eyebrow ? (
          <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
