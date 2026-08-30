import { experience } from "@/lib/data/experience";

export function ExperienceTimeline() {
  return (
    <ol className="relative space-y-10 border-l border-border pl-8">
      {experience.map((entry) => (
        <li key={`${entry.company}-${entry.start}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[2.31rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              {entry.role} <span className="text-muted">· {entry.company}</span>
            </h3>
            <p className="font-mono text-xs text-muted whitespace-nowrap">
              {entry.start} to {entry.end}
            </p>
          </div>
          <p className="mt-1 font-mono text-xs text-muted">{entry.location}</p>
          <ul className="mt-4 space-y-2">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
