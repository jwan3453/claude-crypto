/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Service page
import { useRouter } from "next/router";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_GROWTH = "https://www.figma.com/api/mcp/asset/fd38a9cf-5855-41e1-a13f-d8b2fb853682";
const IMG_OFFLINE = "https://www.figma.com/api/mcp/asset/6eb854d6-6cf0-4c42-b11a-45d42b535190";
const IMG_VISION = "https://www.figma.com/api/mcp/asset/45243bd2-520f-40a7-906a-684afa1a43ee";

const SERVICES = [
  {
    id: "growth",
    img: IMG_GROWTH,
    title: "GROWTH STRATEGY",
    desc: "Accelerate scalable growth through product-market fit, SEO optimization and targeted campaigns, powered by data-driven insights.",
  },
  {
    id: "offline",
    img: IMG_OFFLINE,
    title: "OFFLINE EVENT",
    desc: "Deliver full-spectrum event production by integrating custom AV stages, and professional media creation to form narrative brand legacies.",
  },
  {
    id: "vision",
    img: IMG_VISION,
    title: "VISION DESIGN",
    desc: "Build a unified brand identity across all channels and product lines, crafting immersive value via visual consistency.",
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
        padding: "clamp(16px, 2vw, 28px)",
        borderRadius: 20,
        background: "rgba(255,255,255,0.35)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.35)";
      }}
    >
      <img
        src={service.img}
        alt={service.title}
        style={{ width: "100%", maxWidth: 290, aspectRatio: "1", objectFit: "contain", display: "block", margin: "0 auto 28px" }}
      />
      <h2
        style={{
          fontFamily: S.FONT_HEADING,
          fontSize: "clamp(28px, 2.8vw, 48px)",
          fontWeight: 700,
          color: S.TEXT,
          margin: "0 0 16px",
          letterSpacing: "-0.5px",
          lineHeight: 1.1,
        }}
      >
        {service.title}
      </h2>
      <ul style={{ paddingLeft: 20, margin: 0 }}>
        <li
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: "clamp(14px, 1.4vw, 18px)",
            fontWeight: 400,
            color: S.TEXT,
            lineHeight: "28px",
          }}
        >
          {service.desc}
        </li>
      </ul>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServicePage() {
  return (
    <SierpinLayout title="Service — Sierpin Lab">
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
          <div style={{ marginBottom: 40 }}>
            <SectionLabel>How We Elevate</SectionLabel>
          </div>

          {/* Services grid */}
          <div
            style={{
              display: "flex",
              gap: "clamp(16px, 3vw, 48px)",
              flexWrap: "wrap",
            }}
          >
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
