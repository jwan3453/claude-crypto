/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Team page
import { useState } from "react";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Team data ─────────────────────────────────────────────────────────────────
// Team member avatars use Figma background assets as placeholders
const IMG_AVATAR_1 = "https://www.figma.com/api/mcp/asset/40bec599-e752-40e9-ac6a-07ef02d2e4b9";
const IMG_AVATAR_2 = "https://www.figma.com/api/mcp/asset/fd38a9cf-5855-41e1-a13f-d8b2fb853682";
const IMG_AVATAR_3 = "https://www.figma.com/api/mcp/asset/6eb854d6-6cf0-4c42-b11a-45d42b535190";
const IMG_AVATAR_4 = "https://www.figma.com/api/mcp/asset/45243bd2-520f-40a7-906a-684afa1a43ee";
const IMG_AVATAR_5 = "https://www.figma.com/api/mcp/asset/fafbd747-bbf0-41b8-a6d1-684578d8c9ec";
const IMG_AVATAR_6 = "https://www.figma.com/api/mcp/asset/41637d3f-70c5-446e-8c4e-5465c9282a01";

const TEAM = [
  { id: 1, name: "Alex Chen", role: "Co-Founder & CEO", img: IMG_AVATAR_1, bio: "Strategic visionary with 10+ years in Web3 and blockchain ecosystems." },
  { id: 2, name: "Maya Lin", role: "Head of Growth", img: IMG_AVATAR_2, bio: "Growth hacker specializing in data-driven campaigns and product-market fit." },
  { id: 3, name: "Jordan Park", role: "Creative Director", img: IMG_AVATAR_3, bio: "Award-winning designer building immersive brand identities for Web3 startups." },
  { id: 4, name: "Sam Wu", role: "Event Producer", img: IMG_AVATAR_4, bio: "Delivered 50+ large-scale offline events across Asia and Europe." },
  { id: 5, name: "Riley Kim", role: "Blockchain Strategist", img: IMG_AVATAR_5, bio: "Expert in DeFi, tokenomics, and decentralized protocol design." },
  { id: 6, name: "Taylor Zhao", role: "Tech Lead", img: IMG_AVATAR_6, bio: "Full-stack engineer with deep expertise in Web3 infrastructure and dApps." },
];

// ── Team Card ─────────────────────────────────────────────────────────────────
function TeamCard({ member }: { member: typeof TEAM[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 240px",
        maxWidth: 280,
        borderRadius: 20,
        background: hovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.38)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        overflow: "hidden",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          height: 180,
          overflow: "hidden",
          background: "rgba(1,58,149,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={member.img}
          alt={member.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ padding: "18px 20px 22px" }}>
        <h3
          style={{
            fontFamily: S.FONT_HEADING,
            fontSize: 20,
            fontWeight: 600,
            color: S.TEXT,
            margin: "0 0 4px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: 13,
            fontWeight: 500,
            color: S.NAVY,
            margin: "0 0 10px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {member.role}
        </p>
        <p
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: 13,
            fontWeight: 400,
            color: S.TEXT_80,
            lineHeight: "20px",
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
    <SierpinLayout title="Our Team — Sierpin Lab">
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
          {/* Label */}
          <div style={{ marginBottom: 48 }}>
            <SectionLabel>Our Team</SectionLabel>
            <h2
              style={{
                fontFamily: S.FONT_HEADING,
                fontSize: "clamp(36px, 4vw, 64px)",
                fontWeight: 600,
                color: "#000",
                margin: "20px 0 0",
                letterSpacing: "-1px",
                lineHeight: 1.1,
              }}
            >
              The People Who Elevate.
            </h2>
          </div>

          {/* Team grid */}
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 2.5vw, 36px)",
              flexWrap: "wrap",
            }}
          >
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
