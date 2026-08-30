import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { ArrowUpRightIcon } from "@/components/Icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60 hover:bg-surface-hover">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
      </div>

      <p className="mt-2 font-mono text-xs text-accent">{project.role}</p>

      <ul className="mt-4 space-y-2">
        {project.cardHighlights.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed text-foreground/85">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-2 text-sm font-medium text-accent">
        View case study
        <Link href={`/projects/${project.slug}`} className="absolute inset-0" aria-label={`View ${project.name} case study`}>
          <span className="sr-only">View {project.name} case study</span>
        </Link>
      </div>
    </article>
  );
}
