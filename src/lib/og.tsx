export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function OgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#090b0f",
        color: "#e7e9ec",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", fontSize: 28, color: "#2dd4bf", fontFamily: "monospace" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, marginTop: 24, lineHeight: 1.15 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#93a0b3", marginTop: 28, maxWidth: 900 }}>
          {subtitle}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#93a0b3", fontFamily: "monospace" }}>
        harshitcodex.dev
      </div>
    </div>
  );
}
