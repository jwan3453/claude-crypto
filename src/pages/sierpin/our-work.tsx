/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Our Work page (Bitget dark theme)
import { useRouter } from "next/router";
import { useState } from "react";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_PROJECT2 = "https://www.figma.com/api/mcp/asset/fd38a9cf-5855-41e1-a13f-d8b2fb853682";
const IMG_PROJECT3 = "https://www.figma.com/api/mcp/asset/6eb854d6-6cf0-4c42-b11a-45d42b535190";
const IMG_PROJECT4 = "https://www.figma.com/api/mcp/asset/45243bd2-520f-40a7-906a-684afa1a43ee";

const PROJECTS = [
  {
    id: "hk-gov",
    img: IMG_PROJECT2,
    title: "HK Government",
    tags: ["Offline Event", "Filming"],
    desc: "Web3 ushers in a new digital era. Empowering users with true ownership through blockchain at its core — rewriting the rules of the internet.",
    year: "2024",
  },
  {
    id: "shanghai",
    img: IMG_PROJECT3,
    title: "Shanghai Summit",
    tags: ["Web3", "Telegram", "MiniApp"],
    desc: "With blockchain at its core, it's rewriting the rules of the internet — a flagship summit bridging East and West in Web3.",
    year: "2024",
  },
  {
    id: "sierpin-brand",
    img: IMG_PROJECT4,
    title: "Sierpin Brand Identity",
    tags: ["Vision Design", "Branding"],
    desc: "Building a unified brand identity across all channels and product lines, crafting immersive value via visual consistency.",
    year: "2023",
  },
];

// ── Tag ──────────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 14px",
        borderRadius: 999,
        background: "rgba(0,240,255,0.10)",
        color: S.ACCENT,
        fontSize: 12,
        fontWeight: 500,
        fontFamily: S.FONT_BODY,
        whiteSpace: "nowrap",
        letterSpacing: "0.3px",
      }}
    >
      {label}
    </span>
  );
}

// ── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  onClick,
}: {
  project: typeof PROJECTS[0];
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 280px",
        maxWidth: 420,
        borderRadius: 20,
        background: hovered ? S.BG_CARD_HOVER : S.BG_CARD,
        cursor: "pointer",
        overflow: "hidden",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "all 0.2s ease",
      }}
    >
      {/* Image */}
      <div style={{ height: 200, overflow: "hidden", background: S.BG_SECONDARY, position: "relative" }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.35s ease",
          }}
        />
        {/* Year badge */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            padding: "3px 12px",
            borderRadius: 999,
            background: "rgba(8,12,20,0.7)",
            color: S.TEXT_60,
            fontSize: 12,
            fontWeight: 500,
            fontFamily: S.FONT_BODY,
          }}
        >
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px 28px" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <h3
          style={{
            fontFamily: S.FONT_HEADING,
            fontSize: "clamp(18px, 1.8vw, 24px)",
            fontWeight: 700,
            color: S.TEXT,
            margin: "0 0 10px",
            letterSpacing: "-0.3px",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: 14,
            fontWeight: 400,
            color: S.TEXT_60,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {project.desc}
        </p>

        {/* Arrow */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: hovered ? S.ACCENT : S.TEXT_40,
            fontSize: 13,
            fontWeight: 600,
            fontFamily: S.FONT_BODY,
            transition: "color 0.15s ease",
          }}
        >
          View Case
          <span style={{ fontSize: 15 }}>→</span>
        </div>
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
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px clamp(24px, 8vw, 160px) 60px",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%" }}>
          {/* Header */}
          <div style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <SectionLabel>Portfolio</SectionLabel>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
                marginTop: 20,
              }}
            >
              <h1
                style={{
                  fontFamily: S.FONT_HEADING,
                  fontSize: "clamp(36px, 4.5vw, 64px)",
                  fontWeight: 800,
                  color: S.TEXT,
                  margin: 0,
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                  maxWidth: 560,
                }}
              >
                Work That{" "}
                <span style={{ color: S.ACCENT }}>Speaks</span>
              </h1>

              <button
                onClick={() => router.push("/sierpin/contact")}
                className="transition-all duration-150 active:scale-95"
                style={{
                  padding: "12px 32px",
                  borderRadius: 999,
                  background: S.BTN_SEC_BG,
                  color: S.BTN_SEC_TEXT,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: S.FONT_BODY,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
              >
                Start a Project
              </button>
            </div>
          </div>

          {/* Projects grid */}
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 2vw, 28px)",
              flexWrap: "wrap",
              justifyContent: "flex-start",
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

          {/* Stats bar */}
          <div
            style={{
              marginTop: "clamp(48px, 6vw, 80px)",
              padding: "32px",
              borderRadius: 20,
              background: S.BG_CARD,
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            {[
              { value: "120+", label: "Projects" },
              { value: "50+",  label: "Events" },
              { value: "15+",  label: "Countries" },
              { value: "95%",  label: "On-time Rate" },
            ].map((s) => (
              <div key={s.value} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 800,
                    color: S.ACCENT,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: 13,
                    fontWeight: 400,
                    color: S.TEXT_MUTED,
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
