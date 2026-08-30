import { ImageResponse } from "next/og";
import { OgImage, ogContentType, ogSize } from "@/lib/og";
import { getProjectBySlug } from "@/lib/data/projects";

const project = getProjectBySlug("gigrocket")!;

export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${project.name}: ${project.tagline}`;

export default function Image() {
  return new ImageResponse(
    <OgImage eyebrow={project.role} title={project.name} subtitle={project.tagline} />,
    { ...size }
  );
}
