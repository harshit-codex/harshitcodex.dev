import { ImageResponse } from "next/og";
import { OgImage, ogContentType, ogSize } from "@/lib/og";
import { siteConfig } from "@/lib/data/site";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${siteConfig.name}: ${siteConfig.role}`;

export default function Image() {
  return new ImageResponse(
    (
      <OgImage
        eyebrow={siteConfig.role}
        title={siteConfig.name}
        subtitle={siteConfig.titleLine}
      />
    ),
    { ...size }
  );
}
