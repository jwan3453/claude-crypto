/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Contact Us page
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_PALETTE = "https://www.figma.com/api/mcp/asset/fafbd747-bbf0-41b8-a6d1-684578d8c9ec";
const IMG_TELEGRAM = "https://www.figma.com/api/mcp/asset/2bb18c7e-2d4a-475d-ab07-6d0b8ffe6e32";
const IMG_WECHAT = "https://www.figma.com/api/mcp/asset/14000dc5-5aa5-4f64-869e-82eee4b0fdac";
const IMG_X = "https://www.figma.com/api/mcp/asset/cc0b2536-fc83-41f7-8541-e7eeaa4ae26b";
const IMG_LINKEDIN = "https://www.figma.com/api/mcp/asset/8e88b3b0-34f8-4f7f-9924-942397eec9e1";

const SOCIAL_LINKS = [
  { href: "#", img: IMG_TELEGRAM, alt: "Telegram" },
  { href: "#", img: IMG_WECHAT, alt: "WeChat" },
  { href: "#", img: IMG_X, alt: "X (Twitter)" },
  { href: "#", img: IMG_LINKEDIN, alt: "LinkedIn" },
];

// ── Social Icon ───────────────────────────────────────────────────────────────
function SocialIcon({ href, img, alt }: { href: string; img: string; alt: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-150 active:scale-90"
      style={{ display: "block" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7";
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
      }}
    >
      <img src={img} alt={alt} style={{ width: 44, height: 44, objectFit: "contain", borderRadius: "50%" }} />
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <SierpinLayout title="Contact Us — Sierpin Lab">
      <div
        style={{
          minHeight: "calc(100vh - 88px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px clamp(24px, 8vw, 160px)",
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
          {/* Left: Contact info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <SectionLabel>Contact Us Now</SectionLabel>

            <h1
              style={{
                fontFamily: S.FONT_HEADING,
                fontSize: "clamp(48px, 6vw, 80px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#000",
                margin: "32px 0 48px",
                letterSpacing: "-1px",
                maxWidth: 543,
              }}
            >
              Now it&apos;s time to{"\n"}Elevate.
            </h1>

            {/* Phone */}
            <div style={{ position: "relative", display: "inline-block", marginBottom: 32 }}>
              <span
                style={{
                  fontFamily: S.FONT_BODY,
                  fontSize: 18,
                  fontWeight: 500,
                  color: S.NAVY,
                  background: "rgba(255,255,255,0.8)",
                  border: `1.5px solid rgba(1,58,149,0.3)`,
                  borderRadius: 30,
                  padding: "10px 24px",
                  display: "inline-block",
                }}
              >
                150658500
              </span>
            </div>

            {/* Social Media */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 28,
                  marginBottom: 24,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: "clamp(16px, 1.4vw, 22px)",
                    fontWeight: 600,
                    color: S.TEXT,
                    whiteSpace: "nowrap",
                  }}
                >
                  Social Medias:
                </span>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  {SOCIAL_LINKS.map((s) => (
                    <SocialIcon key={s.alt} href={s.href} img={s.img} alt={s.alt} />
                  ))}
                </div>
              </div>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 28,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: "clamp(16px, 1.4vw, 22px)",
                    fontWeight: 600,
                    color: S.TEXT,
                    whiteSpace: "nowrap",
                  }}
                >
                  Email:
                </span>
                <a
                  href="mailto:BD@sierpin.com"
                  className="transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: "clamp(16px, 1.4vw, 22px)",
                    fontWeight: 600,
                    color: S.NAVY,
                    textDecoration: "none",
                    opacity: 0.7,
                  }}
                >
                  BD@sierpin.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: 3D illustration */}
          <div
            className="hidden md:block"
            style={{ flexShrink: 0, width: "clamp(280px, 32vw, 500px)" }}
          >
            <img
              src={IMG_PALETTE}
              alt="Contact Sierpin Lab"
              style={{ width: "100%", aspectRatio: "1", objectFit: "contain", display: "block" }}
            />
          </div>
        </div>

        {/* Copyright footer */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: S.FONT_BODY,
              fontSize: 16,
              fontWeight: 400,
              color: "rgba(0,0,0,0.4)",
              margin: 0,
            }}
          >
            Copyright 2025 @sierpin Lab
          </p>
        </div>
      </div>
    </SierpinLayout>
  );
}
