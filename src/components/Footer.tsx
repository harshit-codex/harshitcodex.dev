import { siteConfig } from "@/lib/data/site";
import { FileTextIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">Let&apos;s work together</p>
            <p className="mt-1 text-sm text-muted">
              Open to backend and full-stack roles. Reach out any time.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 sm:items-end">
            <div className="grid grid-cols-1 gap-x-6 gap-y-3 font-mono text-sm sm:grid-cols-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
              >
                <MailIcon className="h-4 w-4 shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" />
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-foreground/85 transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4 shrink-0" />
                GitHub
              </a>
            </div>
            <a
              href={siteConfig.resumeUrl}
              download
              className="flex items-center gap-2 rounded-md border border-accent bg-accent/10 px-4 py-2 font-mono text-sm font-medium text-accent transition-colors hover:bg-accent/20"
            >
              <FileTextIcon className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
        <p className="mt-10 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
