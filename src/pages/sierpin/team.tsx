/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Team page (Bitget dark theme)
import { useState } from "react";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_A1 = "https://www.figma.com/api/mcp/asset/40bec599-e752-40e9-ac6a-07ef02d2e4b9";
const IMG_A2 = "https://www.figma.com/api/mcp/asset/fd38a9cf-5855-41e1-a13f-d8b2fb853682";
const IMG_A3 = "https://www.figma.com/api/mcp/asset/6eb854d6-6cf0-4c42-b11a-45d42b535190";
const IMG_A4 = "https://www.figma.com/api/mcp/asset/45243bd2-520f-40a7-906a-684afa1a43ee";
const IMG_A5 = "https://www.figma.com/api/mcp/asset/fafbd747-bbf0-41b8-a6d1-684578d8c9ec";
const IMG_A6 = "https://www.figma.com/api/mcp/asset/41637d3f-70c5-446e-8c4e-5465c9282a01";

const TEAM = [
  { id: 1, name: "Alex Chen",    role: "Co-Founder & CEO",       img: IMG_A1, bio: "Strategic visionary with 10+ years in Web3 and blockchain ecosystems." },
  { id: 2, name: "Maya Lin",     role: "Head of Growth",          img: IMG_A2, bio: "Growth hacker specializing in data-driven campaigns and product-market fit." },
  { id: 3, name: "Jordan Park",  role: "Creative Director",       img: IMG_A3, bio: "Award-winning designer building immersive brand identities for Web3 startups." },
  { id: 4, name: "Sam Wu",       role: "Event Producer",          img: IMG_A4, bio: "Delivered 50+ large-scale offline events across Asia and Europe." },
  { id: 5, name: "Riley Kim",    role: "Blockchain Strategist",   img: IMG_A5, bio: "Expert in DeFi, tokenomics, and decentralized protocol design." },
  { id: 6, name: "Taylor Zhao",  role: "Tech Lead",               img: IMG_A6, bio: "Full-stack engineer with deep expertise in Web3 infrastructure and dApps." },
];

// ── Team Card ─────────────────────────────────────────────────────────────────
function TeamCard({ member }: { member: typeof TEAM[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 220px",
        maxWidth: 280,
        borderRadius: 20,
        background: hovered ? S.BG_CARD_HOVER : S.BG_CARD,
        overflow: "hidden",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          height: 180,
          overflow: "hidden",
          background: S.BG_SECONDARY,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={member.img}
          alt={member.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            background: "linear-gradient(to bottom, transparent, rgba(8,12,20,0.6))",
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: "18px 20px 24px" }}>
        <h3
          style={{
            fontFamily: S.FONT_HEADING,
            fontSize: 18,
            fontWeight: 700,
            color: S.TEXT,
            margin: "0 0 4px",
            letterSpacing: "-0.2px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: 12,
            fontWeight: 600,
            color: S.ACCENT,
            margin: "0 0 12px",
            textTransform: "uppercase",
            letterSpacing: "0.6px",
          }}
        >
          {member.role}
        </p>
        <p
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: 13,
            fontWeight: 400,
            color: S.TEXT_60,
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TeamPage() {
  return (
    <SierpinLayout title="Team — Sierpin Lab">
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
          <div style={{ marginBottom: "clamp(40px, 5vw, 64px)", textAlign: "center" }}>
            <SectionLabel>The People</SectionLabel>
            <h1
              style={{
                fontFamily: S.FONT_HEADING,
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 800,
                color: S.TEXT,
                margin: "20px 0 16px",
                letterSpacing: "-1px",
                lineHeight: 1.1,
              }}
            >
              Meet the{" "}
              <span style={{ color: S.ACCENT }}>Team</span>
            </h1>
            <p
              style={{
                fontFamily: S.FONT_BODY,
                fontSize: "clamp(14px, 1.3vw, 17px)",
                color: S.TEXT_60,
                maxWidth: 440,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              A crew of Web3 builders, designers, and strategists obsessed with
              making decentralized brands matter.
            </p>
          </div>

          {/* Team grid */}
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 2vw, 24px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {TEAM.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>

          {/* Join us CTA */}
          <div
            style={{
              marginTop: "clamp(48px, 6vw, 80px)",
              padding: "40px",
              borderRadius: 20,
              background: S.BG_CARD,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: S.FONT_HEADING,
                  fontSize: "clamp(22px, 2vw, 30px)",
                  fontWeight: 700,
                  color: S.TEXT,
                  margin: "0 0 8px",
                  letterSpacing: "-0.5px",
                }}
              >
                Join Our Team
              </h3>
              <p
                style={{
                  fontFamily: S.FONT_BODY,
                  fontSize: 15,
                  color: S.TEXT_60,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                We&apos;re always looking for talented people passionate about Web3.
              </p>
            </div>
            <a
              href="mailto:BD@sierpin.com"
              className="transition-all duration-150 active:scale-95"
              style={{
                padding: "14px 36px",
                borderRadius: 999,
                background: S.BTN_BG,
                color: S.BTN_TEXT,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: S.FONT_BODY,
                textDecoration: "none",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              View Open Roles
            </a>
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
