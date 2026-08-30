import type { Metadata } from "next";
import type { Project } from "@/lib/data/projects";

export function projectMetadata(project: Project): Metadata {
  const title = `${project.name}: ${project.tagline}`;
  const description = project.overview;
  const path = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function projectJsonLd(project: Project, siteUrl: string, authorName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.overview,
    url: `${siteUrl}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: authorName,
      url: siteUrl,
    },
    keywords: project.stack.join(", "),
  };
}
