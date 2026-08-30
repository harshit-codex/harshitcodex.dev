import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { ArrowLeftIcon } from "@/components/Icons";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to projects
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <p className="font-mono text-sm text-accent">{project.tagline}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
          <span>{project.role}</span>
          <span aria-hidden="true">·</span>
          <span>{project.period}</span>
        </div>
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
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Overview</h2>
        <p className="mt-3 leading-relaxed text-foreground/85">{project.overview}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">The problem</h2>
        <p className="mt-3 leading-relaxed text-foreground/85">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Architecture &amp; approach</h2>
        <div className="mt-3 space-y-4">
          {project.architecture.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-foreground/85">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Technical decisions</h2>
        <div className="mt-4 space-y-5">
          {project.decisions.map((decision) => (
            <div key={decision.title} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm font-medium text-accent">{decision.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{decision.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Outcome</h2>
        <ul className="mt-3 space-y-3">
          {project.outcome.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed text-foreground/85">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
