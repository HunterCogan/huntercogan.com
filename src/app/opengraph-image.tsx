import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0d0e12",
          color: "#f3f1ec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#ff7a45",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {site.title}
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#9b9a95" }}>
          Front-end &amp; full-stack developer
        </div>
      </div>
    ),
    { ...size }
  );
}
