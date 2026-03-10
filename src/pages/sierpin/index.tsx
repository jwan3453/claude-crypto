/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — About page
import { useRouter } from "next/router";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_ILLUSTRATION = "https://www.figma.com/api/mcp/asset/40bec599-e752-40e9-ac6a-07ef02d2e4b9";
const IMG_META = "https://www.figma.com/api/mcp/asset/50cf161b-6bf9-40dd-9bf4-7e2879eaff1e";
const IMG_TENCENT = "https://www.figma.com/api/mcp/asset/72f5dcfa-e9a5-4b12-b0a7-867769da9012";
const IMG_POLYGON_MASK = "https://www.figma.com/api/mcp/asset/a9657e97-8a20-4ea4-bffe-e5215cd8100d";
const IMG_POLYGON_BG = "https://www.figma.com/api/mcp/asset/100cbadf-e5f2-4a69-80ff-b4afc3aa0afd";
const IMG_NEO = "https://www.figma.com/api/mcp/asset/d5a05ae6-4169-4198-b143-c279150e31f0";

const PARTNERS = [
  { src: IMG_META, alt: "Meta", width: 100, height: 20 },
  { src: IMG_TENCENT, alt: "Tencent 腾讯", width: 157, height: 20 },
  { src: IMG_NEO, alt: "Neo", width: 52, height: 20 },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const router = useRouter();

  return (
    <SierpinLayout title="About Us — Sierpin Lab">
      <div
        style={{
          minHeight: "calc(100vh - 88px)",
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
          {/* Left: 3D illustration */}
          <div
            className="hidden md:block"
            style={{ flexShrink: 0, width: "clamp(320px, 35vw, 520px)" }}
          >
            <img
              src={IMG_ILLUSTRATION}
              alt="About Sierpin Lab"
              style={{
                width: "100%",
                aspectRatio: "1",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Right: Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <SectionLabel>About Us</SectionLabel>

            <h1
              style={{
                fontFamily: S.FONT_HEADING,
                fontSize: "clamp(52px, 6vw, 80px)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#000",
                margin: "32px 0 28px",
                letterSpacing: "-1px",
              }}
            >
              Where Ideas Elevates.
            </h1>

            <p
              style={{
                fontFamily: S.FONT_BODY,
                fontSize: "clamp(16px, 1.6vw, 22px)",
                fontWeight: 400,
                lineHeight: "32px",
                color: S.TEXT,
                maxWidth: 574,
                margin: 0,
              }}
            >
              We craft standout brands through strategic storytelling, immersive
              design, and precision-targeted growth channels, where your voice
              elevates in the tech revolution.
            </p>

            {/* CTA */}
            <button
              onClick={() => router.push("/sierpin/service")}
              className="transition-all duration-150 hover:opacity-80 active:scale-95"
              style={{
                marginTop: 48,
                padding: "14px 40px",
                borderRadius: 49,
                background: S.NAVY,
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                fontFamily: S.FONT_BODY,
                border: "1px solid #fff",
                boxShadow: `0 2px 12px ${S.NAVY_SHADOW}`,
                cursor: "pointer",
                letterSpacing: "-0.1px",
              }}
            >
              Explore Our Services →
            </button>
          </div>
        </div>

        {/* Partners row */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(24px, 5vh, 60px)",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: S.FONT_BODY,
              fontSize: 16,
              fontWeight: 400,
              color: "rgba(0,0,0,0.6)",
              marginBottom: 20,
            }}
          >
            Trusted by Prominent Partners
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
              flexWrap: "wrap",
              padding: "0 16px",
            }}
          >
            {PARTNERS.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                style={{ height: p.height, width: "auto", objectFit: "contain", opacity: 0.8 }}
              />
            ))}
            {/* Polygon with mask */}
            <div style={{ position: "relative", height: 20, width: 87 }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  maskImage: `url('${IMG_POLYGON_MASK}')`,
                  WebkitMaskImage: `url('${IMG_POLYGON_MASK}')`,
                  maskSize: "87px 20px",
                  WebkitMaskSize: "87px 20px",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              >
                <img src={IMG_POLYGON_BG} alt="Polygon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
