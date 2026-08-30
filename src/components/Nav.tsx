import Link from "next/link";
import { siteConfig } from "@/lib/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

const homeLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border font-mono text-sm font-medium text-accent transition-colors hover:border-accent"
        >
          {siteConfig.initials}
        </Link>

        <ul className="hidden items-center gap-6 font-mono text-sm text-muted sm:flex">
          {homeLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
