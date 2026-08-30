import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { siteConfig } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { skills } from "@/lib/data/skills";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const knowsAbout = skills.flatMap((group) => group.items);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.siteUrl,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bareilly",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Hero />

      <Section eyebrow="About" title="Summary" id="about">
        <p className="max-w-2xl leading-relaxed text-foreground/85">{siteConfig.summary}</p>
      </Section>

      <Section eyebrow="Career" title="Experience" id="experience">
        <ExperienceTimeline />
      </Section>

      <Section eyebrow="Selected Work" title="Featured Projects" id="projects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Toolbox" title="Skills" id="skills">
        <SkillsGrid />
      </Section>
    </>
  );
}
