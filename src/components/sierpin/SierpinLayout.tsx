/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

// ── Brand assets ────────────────────────────────────────────────────────────
const LOGO_MARK = "https://www.figma.com/api/mcp/asset/0d1a54ea-465f-4d4c-a7f9-6a5717165bb3";
const LOGO_TEXT = "https://www.figma.com/api/mcp/asset/af0e5244-5bc3-48c2-8fc5-7f27ddc77b30";

// ── Bitget Wallet Dark Design Tokens ────────────────────────────────────────
export const S = {
  // Backgrounds
  BG_PRIMARY:   "#080c14",
  BG_SECONDARY: "#0f1623",
  BG_TERTIARY:  "#1a2235",
  BG_CARD:      "rgba(255,255,255,0.035)",
  BG_CARD_HOVER:"rgba(255,255,255,0.06)",
  // Brand accent
  ACCENT:       "#00F0FF",
  ACCENT_HOVER: "#33F5FF",
  ACCENT_DIM:   "#00C4D4",
  ACCENT_GLOW:  "rgba(0,240,255,0.18)",
  // Button
  BTN_BG:       "#00E6F5",
  BTN_TEXT:     "#03313A",
  BTN_SEC_BG:   "#03313A",
  BTN_SEC_TEXT: "#99F1FF",
  // Text
  TEXT:         "#FFFFFF",
  TEXT_80:      "rgba(255,255,255,0.8)",
  TEXT_60:      "rgba(255,255,255,0.6)",
  TEXT_40:      "rgba(255,255,255,0.4)",
  TEXT_MUTED:   "#91A0A1",
  // Typography
  FONT_HEADING: "'Inter', sans-serif",
  FONT_BODY:    "'Inter', sans-serif",
  // Radii
  RADIUS_SM: "8px",
  RADIUS_MD: "14px",
  RADIUS_LG: "20px",
};

// ── Navigation config ────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "About",    href: "/sierpin" },
  { label: "Service",  href: "/sierpin/service" },
  { label: "Our Work", href: "/sierpin/our-work" },
  { label: "Team",     href: "/sierpin/team" },
  { label: "FAQ",      href: "/sierpin/faq" },
];

const STEPPER_PAGES = [
  "/sierpin",
  "/sierpin/service",
  "/sierpin/our-work",
  "/sierpin/team",
  "/sierpin/faq",
  "/sierpin/contact",
];

// ── Section Label ────────────────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 16px",
        borderRadius: 999,
        background: "rgba(0,240,255,0.10)",
        marginBottom: 16,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: S.ACCENT,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: S.FONT_BODY,
          fontSize: 13,
          fontWeight: 600,
          color: S.ACCENT,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

// ── Stepper ──────────────────────────────────────────────────────────────────
function Stepper({ current }: { current: string }) {
  const idx = STEPPER_PAGES.indexOf(current);
  return (
    <div
      style={{
        position: "fixed",
        right: "clamp(16px, 3vw, 40px)",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 50,
      }}
    >
      {STEPPER_PAGES.map((_, i) => (
        <div
          key={i}
          style={{
            width: i === idx ? 4 : 3,
            height: i === idx ? 28 : 16,
            borderRadius: 999,
            background: i === idx ? S.ACCENT : "rgba(255,255,255,0.2)",
            transition: "all 0.25s ease",
          }}
        />
      ))}
    </div>
  );
}

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const router = useRouter();
  const current = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(8,12,20,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        height: 72,
      }}
    >
      {/* Thin cyan accent line at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${S.ACCENT_GLOW}, transparent)`,
        }}
      />

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(24px, 6vw, 120px)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => router.push("/sierpin")}
          className="transition-opacity duration-150 hover:opacity-80 active:opacity-60"
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div style={{ position: "relative", width: 48, height: 40 }}>
            <img
              src={LOGO_MARK}
              alt="Sierpin Lab"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: 110,
              height: 18,
              marginLeft: 12,
              marginBottom: 3,
            }}
          >
            <img
              src={LOGO_TEXT}
              alt="SIERPIN LAB"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: 2 }}>
          {NAV_ITEMS.map((item) => {
            const active = current === item.href;
            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className="transition-all duration-150 active:scale-95"
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: active ? S.ACCENT_GLOW : "transparent",
                  color: active ? S.ACCENT : S.TEXT_60,
                  fontSize: 15,
                  fontWeight: active ? 600 : 400,
                  fontFamily: S.FONT_BODY,
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "-0.1px",
                  whiteSpace: "nowrap",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = S.TEXT;
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = S.TEXT_60;
                }}
              >
                {item.label}
              </button>
            );
          })}

          {/* Contact Us */}
          <div style={{ paddingLeft: 12 }}>
            <button
              onClick={() => router.push("/sierpin/contact")}
              className="transition-all duration-150 hover:opacity-88 active:scale-95"
              style={{
                padding: "10px 28px",
                borderRadius: 999,
                background: current === "/sierpin/contact" ? S.BTN_BG : "transparent",
                color: current === "/sierpin/contact" ? S.BTN_TEXT : S.ACCENT,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: S.FONT_BODY,
                border: `1.5px solid ${S.ACCENT}`,
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </div>

          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: S.FONT_BODY,
              color: S.TEXT_40,
              padding: "10px 16px",
              cursor: "default",
            }}
          >
            EN
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: menuOpen && i === 1 ? "transparent" : S.TEXT,
                transition: "all 0.2s ease",
                transform:
                  menuOpen && i === 0 ? "translateY(7px) rotate(45deg)" :
                  menuOpen && i === 2 ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            background: "rgba(8,12,20,0.97)",
            backdropFilter: "blur(20px)",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => { router.push(item.href); setMenuOpen(false); }}
              style={{
                padding: "14px 20px",
                borderRadius: 12,
                background: current === item.href ? S.ACCENT_GLOW : "transparent",
                color: current === item.href ? S.ACCENT : S.TEXT_80,
                fontSize: 16,
                fontWeight: current === item.href ? 600 : 400,
                fontFamily: S.FONT_BODY,
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "8px 0" }} />
          <button
            onClick={() => { router.push("/sierpin/contact"); setMenuOpen(false); }}
            style={{
              padding: "14px 20px",
              borderRadius: 999,
              background: S.BTN_BG,
              color: S.BTN_TEXT,
              fontSize: 16,
              fontWeight: 600,
              fontFamily: S.FONT_BODY,
              border: "none",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

// ── Layout ───────────────────────────────────────────────────────────────────
export default function SierpinLayout({
  children,
  title = "Sierpin Lab",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Ambient glow background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: S.BG_PRIMARY,
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "-20%",
          left: "30%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <Navbar />
      <Stepper current={router.pathname} />

      <main
        style={{
          paddingTop: 72,
          minHeight: "100vh",
          fontFamily: S.FONT_BODY,
          color: S.TEXT,
        }}
      >
        {children}
      </main>
    </>
  );
}
