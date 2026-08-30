import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { getProjectBySlug } from "@/lib/data/projects";
import { projectJsonLd, projectMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/data/site";

const project = getProjectBySlug("gigrocket");

export const metadata: Metadata = project ? projectMetadata(project) : {};

export default function GigRocketPage() {
  if (!project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd(project, siteConfig.siteUrl, siteConfig.name)),
        }}
      />
      <ProjectCaseStudy project={project} />
    </>
  );
}
