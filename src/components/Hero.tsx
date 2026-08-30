import { siteConfig } from "@/lib/data/site";
import {
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";

export function Hero() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 max-w-2xl font-mono text-sm text-muted sm:text-base">
        {siteConfig.titleLine}
      </p>
      <p className="mt-6 max-w-2xl text-lg text-foreground/90">{siteConfig.tagline}</p>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
        <span className="flex items-center gap-2">
          <MapPinIcon className="h-4 w-4" />
          {siteConfig.location}
        </span>
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <PhoneIcon className="h-4 w-4" />
          {siteConfig.phone}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <MailIcon className="h-4 w-4" />
          Email
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={siteConfig.resumeUrl}
          download
          className="flex items-center gap-2 rounded-md border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          <FileTextIcon className="h-4 w-4" />
          Resume
        </a>
      </div>
    </section>
  );
}
