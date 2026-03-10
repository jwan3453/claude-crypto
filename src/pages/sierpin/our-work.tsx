/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Our Work page
import { useRouter } from "next/router";
import { useState } from "react";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
// For "Our Work" page Figma used images named 1051741330092_.pic etc — use service images as fallback
const IMG_PROJECT2 = "https://www.figma.com/api/mcp/asset/fd38a9cf-5855-41e1-a13f-d8b2fb853682";
const IMG_PROJECT3 = "https://www.figma.com/api/mcp/asset/6eb854d6-6cf0-4c42-b11a-45d42b535190";
const IMG_PROJECT4 = "https://www.figma.com/api/mcp/asset/45243bd2-520f-40a7-906a-684afa1a43ee";

const PROJECTS = [
  {
    id: "hk-gov",
    img: IMG_PROJECT2,
    title: "HK Government",
    tags: ["Offline Event", "Filming"],
    desc: "Web3 ushers in a new digital era. It's about decentralization, empowering users with true ownership. With blockchain at its core, it's rewriting the rules of the internet.",
  },
  {
    id: "shanghai",
    img: IMG_PROJECT3,
    title: "Shanghai Summit",
    tags: ["Web3", "Telegram", "MiniApp"],
    desc: "With blockchain at its core, it's rewriting the rules of the internet.",
  },
  {
    id: "sierpin-brand",
    img: IMG_PROJECT4,
    title: "Sierpin Brand Identity",
    tags: ["Vision Design", "Branding"],
    desc: "Building a unified brand identity across all channels and product lines, crafting immersive value via visual consistency.",
  },
];

// ── Tag ──────────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 14px",
        borderRadius: 20,
        background: "rgba(1,58,149,0.1)",
        color: S.NAVY,
        fontSize: 13,
        fontWeight: 500,
        fontFamily: S.FONT_BODY,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

// ── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onClick }: { project: typeof PROJECTS[0]; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 300px",
        maxWidth: 420,
        borderRadius: 20,
        background: hovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.4)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        cursor: "pointer",
        overflow: "hidden",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ height: 200, overflow: "hidden" }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
        <h3
          style={{
            fontFamily: S.FONT_HEADING,
            fontSize: 24,
            fontWeight: 600,
            color: S.TEXT,
            margin: "0 0 10px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: 14,
            fontWeight: 400,
            color: S.TEXT_80,
            lineHeight: "22px",
            margin: 0,
          }}
        >
          {project.desc}
        </p>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function OurWorkPage() {
  const router = useRouter();

  return (
    <SierpinLayout title="Our Work — Sierpin Lab">
      <div
        style={{
          minHeight: "calc(100vh - 88px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px clamp(24px, 8vw, 160px)",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%" }}>
          {/* Label + View All */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <SectionLabel>Projects That We Elevate</SectionLabel>
            <button
              onClick={() => router.push("/sierpin/our-work")}
              className="transition-all duration-150 hover:opacity-80 active:scale-95"
              style={{
                padding: "10px 28px",
                borderRadius: 49,
                background: "transparent",
                color: S.NAVY,
                fontSize: 16,
                fontWeight: 500,
                fontFamily: S.FONT_BODY,
                border: `1px solid ${S.NAVY}`,
                cursor: "pointer",
              }}
            >
              View All Projects
            </button>
          </div>

          {/* Projects grid */}
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 3vw, 40px)",
              flexWrap: "wrap",
            }}
          >
            {PROJECTS.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={() => router.push("/sierpin/contact")}
              />
            ))}
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
