/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — About / Hero page (Bitget dark theme)
import { useRouter } from "next/router";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_ILLUSTRATION = "https://www.figma.com/api/mcp/asset/40bec599-e752-40e9-ac6a-07ef02d2e4b9";
const IMG_META        = "https://www.figma.com/api/mcp/asset/50cf161b-6bf9-40dd-9bf4-7e2879eaff1e";
const IMG_TENCENT     = "https://www.figma.com/api/mcp/asset/72f5dcfa-e9a5-4b12-b0a7-867769da9012";
const IMG_POLYGON_BG  = "https://www.figma.com/api/mcp/asset/100cbadf-e5f2-4a69-80ff-b4afc3aa0afd";
const IMG_NEO         = "https://www.figma.com/api/mcp/asset/d5a05ae6-4169-4198-b143-c279150e31f0";

const PARTNERS = [
  { src: IMG_META,    alt: "Meta",       width: 100, height: 20 },
  { src: IMG_TENCENT, alt: "Tencent 腾讯", width: 157, height: 20 },
  { src: IMG_NEO,     alt: "Neo",         width: 52,  height: 20 },
];

// ── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "50+",  label: "Global Events" },
  { value: "30+",  label: "Team Experts" },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const router = useRouter();

  return (
    <SierpinLayout title="About Us — Sierpin Lab">
      <div
        style={{
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(24px, 8vw, 160px)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(40px, 8vw, 120px)",
            maxWidth: 1440,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Left: copy */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <SectionLabel>Web3 Growth Agency</SectionLabel>

            <h1
              style={{
                fontFamily: S.FONT_HEADING,
                fontSize: "clamp(40px, 5.5vw, 80px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: S.TEXT,
                margin: "24px 0 28px",
                letterSpacing: "-1.5px",
                maxWidth: 620,
              }}
            >
              We Scale{" "}
              <span style={{ color: S.ACCENT }}>Web3</span>
              {" "}Brands Globally
            </h1>

            <p
              style={{
                fontFamily: S.FONT_BODY,
                fontSize: "clamp(15px, 1.4vw, 18px)",
                fontWeight: 400,
                color: S.TEXT_60,
                lineHeight: 1.65,
                maxWidth: 480,
                margin: "0 0 40px",
              }}
            >
              Sierpin Lab is a full-spectrum Web3 growth agency specializing in
              growth strategy, offline events, and vision design for blockchain
              and decentralized brands.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={() => router.push("/sierpin/service")}
                className="transition-all duration-150 active:scale-95"
                style={{
                  padding: "14px 36px",
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
                Our Services
              </button>

              <button
                onClick={() => router.push("/sierpin/contact")}
                className="transition-all duration-150 active:scale-95"
                style={{
                  padding: "14px 36px",
                  borderRadius: 999,
                  background: S.BTN_SEC_BG,
                  color: S.BTN_SEC_TEXT,
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
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "clamp(24px, 4vw, 56px)",
                marginTop: "clamp(40px, 6vw, 64px)",
                flexWrap: "wrap",
              }}
            >
              {STATS.map((s) => (
                <div key={s.value}>
                  <div
                    style={{
                      fontFamily: S.FONT_BODY,
                      fontSize: "clamp(24px, 2.5vw, 36px)",
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
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D illustration */}
          <div
            className="hidden md:block"
            style={{ flexShrink: 0, width: "clamp(300px, 38vw, 560px)", position: "relative" }}
          >
            {/* Glow behind illustration */}
            <div
              style={{
                position: "absolute",
                inset: "10%",
                background: "radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)",
                zIndex: 0,
              }}
            />
            <img
              src={IMG_ILLUSTRATION}
              alt="Sierpin Lab"
              style={{
                width: "100%",
                aspectRatio: "1",
                objectFit: "contain",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
        </div>

        {/* Partner logos */}
        <div
          style={{
            marginTop: "clamp(48px, 8vw, 96px)",
            maxWidth: 1440,
            margin: "clamp(48px, 8vw, 96px) auto 0",
            width: "100%",
          }}
        >
          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              marginBottom: 32,
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(24px, 5vw, 64px)",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: S.FONT_BODY,
                fontSize: 13,
                fontWeight: 500,
                color: S.TEXT_40,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Partners
            </span>
            {PARTNERS.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                style={{
                  height: p.height,
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.45,
                }}
              />
            ))}
            <img
              src={IMG_POLYGON_BG}
              alt="Polygon"
              style={{
                height: 20,
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                opacity: 0.45,
              }}
            />
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            paddingBottom: 24,
            paddingTop: 24,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          <p
            style={{
              fontFamily: S.FONT_BODY,
              fontSize: 13,
              fontWeight: 400,
              color: S.TEXT_40,
              margin: 0,
            }}
          >
            Copyright 2025 © Sierpin Lab
          </p>
        </div>
      </div>
    </SierpinLayout>
  );
}
