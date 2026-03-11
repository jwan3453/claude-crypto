/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Service page (Bitget dark theme)
import { useRouter } from "next/router";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_GROWTH  = "https://www.figma.com/api/mcp/asset/fd38a9cf-5855-41e1-a13f-d8b2fb853682";
const IMG_OFFLINE = "https://www.figma.com/api/mcp/asset/6eb854d6-6cf0-4c42-b11a-45d42b535190";
const IMG_VISION  = "https://www.figma.com/api/mcp/asset/45243bd2-520f-40a7-906a-684afa1a43ee";

const SERVICES = [
  {
    id: "growth",
    img: IMG_GROWTH,
    title: "GROWTH STRATEGY",
    tag: "Strategy",
    desc: "Accelerate scalable growth through product-market fit, SEO optimization and targeted campaigns, powered by data-driven insights.",
    points: ["Product-Market Fit", "SEO & Paid Campaigns", "Data Analytics", "Community Building"],
  },
  {
    id: "offline",
    img: IMG_OFFLINE,
    title: "OFFLINE EVENT",
    tag: "Events",
    desc: "Deliver full-spectrum event production by integrating custom AV stages, and professional media creation to form narrative brand legacies.",
    points: ["AV Stage Production", "Media Creation", "Brand Narrative", "Global Events"],
  },
  {
    id: "vision",
    img: IMG_VISION,
    title: "VISION DESIGN",
    tag: "Design",
    desc: "Build a unified brand identity across all channels and product lines, crafting immersive value via visual consistency.",
    points: ["Brand Identity", "Visual System", "UI / UX Design", "Multi-channel Assets"],
  },
];

// ── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/sierpin/contact")}
      className="transition-all duration-200"
      style={{
        flex: 1,
        minWidth: 0,
        cursor: "pointer",
        padding: "clamp(20px, 2vw, 32px)",
        borderRadius: 20,
        background: S.BG_CARD,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px) scale(1.01)";
        el.style.background = S.BG_CARD_HOVER;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0) scale(1)";
        el.style.background = S.BG_CARD;
      }}
    >
      {/* Service tag badge */}
      <div
        style={{
          display: "inline-block",
          padding: "4px 14px",
          borderRadius: 999,
          background: "rgba(0,240,255,0.10)",
          color: S.ACCENT,
          fontSize: 12,
          fontWeight: 600,
          fontFamily: S.FONT_BODY,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        {service.tag}
      </div>

      {/* 3D illustration */}
      <img
        src={service.img}
        alt={service.title}
        style={{
          width: "100%",
          maxWidth: 260,
          aspectRatio: "1",
          objectFit: "contain",
          display: "block",
          margin: "0 auto 28px",
        }}
      />

      <h2
        style={{
          fontFamily: S.FONT_HEADING,
          fontSize: "clamp(22px, 2.2vw, 36px)",
          fontWeight: 700,
          color: S.TEXT,
          margin: "0 0 14px",
          letterSpacing: "-0.5px",
          lineHeight: 1.1,
        }}
      >
        {service.title}
      </h2>

      <p
        style={{
          fontFamily: S.FONT_BODY,
          fontSize: "clamp(13px, 1.2vw, 15px)",
          fontWeight: 400,
          color: S.TEXT_60,
          lineHeight: 1.6,
          margin: "0 0 20px",
        }}
      >
        {service.desc}
      </p>

      {/* Feature list */}
      <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
        {service.points.map((pt) => (
          <li
            key={pt}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: S.FONT_BODY,
              fontSize: "clamp(12px, 1.1vw, 14px)",
              fontWeight: 400,
              color: S.TEXT_60,
              padding: "7px 0",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: S.ACCENT,
                flexShrink: 0,
              }}
            />
            {pt}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div
        style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: S.ACCENT,
          fontSize: 14,
          fontWeight: 600,
          fontFamily: S.FONT_BODY,
        }}
      >
        Learn More
        <span style={{ fontSize: 16 }}>→</span>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicePage() {
  const router = useRouter();

  return (
    <SierpinLayout title="Services — Sierpin Lab">
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
            <SectionLabel>What We Do</SectionLabel>
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
              Our Core Services
            </h1>
            <p
              style={{
                fontFamily: S.FONT_BODY,
                fontSize: "clamp(14px, 1.3vw, 17px)",
                fontWeight: 400,
                color: S.TEXT_60,
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              End-to-end solutions for Web3 brands at every stage of growth
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 2vw, 28px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: "center", marginTop: "clamp(48px, 6vw, 80px)" }}>
            <p
              style={{
                fontFamily: S.FONT_BODY,
                fontSize: 16,
                color: S.TEXT_60,
                marginBottom: 24,
              }}
            >
              Ready to accelerate your brand?
            </p>
            <button
              onClick={() => router.push("/sierpin/contact")}
              className="transition-all duration-150 active:scale-95"
              style={{
                padding: "14px 48px",
                borderRadius: 999,
                background: S.BTN_BG,
                color: S.BTN_TEXT,
                fontSize: 16,
                fontWeight: 600,
                fontFamily: S.FONT_BODY,
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
