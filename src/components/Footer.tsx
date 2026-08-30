import { siteConfig } from "@/lib/data/site";
import { FileTextIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">Let&apos;s work together</p>
            <p className="mt-1 text-sm text-muted">
              Open to backend and full-stack roles. Reach out any time.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
            >
              <MailIcon className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
            >
              <FileTextIcon className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
        <p className="mt-10 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
