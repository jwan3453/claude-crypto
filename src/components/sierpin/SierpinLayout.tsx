/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

// ── Brand assets ────────────────────────────────────────────────────────────
const LOGO_MARK = "https://www.figma.com/api/mcp/asset/0d1a54ea-465f-4d4c-a7f9-6a5717165bb3";
const LOGO_TEXT = "https://www.figma.com/api/mcp/asset/af0e5244-5bc3-48c2-8fc5-7f27ddc77b30";

// ── Design tokens ────────────────────────────────────────────────────────────
export const S = {
  NAVY: "#013a95",
  NAVY_SHADOW: "rgba(1,58,149,0.3)",
  TEXT: "#1d1e20",
  TEXT_80: "rgba(29,30,32,0.8)",
  TEXT_60: "rgba(29,30,32,0.6)",
  TEXT_40: "rgba(0,0,0,0.4)",
  BG: "#e5f2ff",
  FONT_HEADING: "'Kanit', sans-serif",
  FONT_BODY: "'Inter', sans-serif",
};

// ── Navigation config ────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "About", href: "/sierpin" },
  { label: "Service", href: "/sierpin/service" },
  { label: "Our Work", href: "/sierpin/our-work" },
  { label: "Team", href: "/sierpin/team" },
  { label: "FAQ", href: "/sierpin/faq" },
];

// Stepper order (matches page index in NAV_ITEMS + contact)
const STEPPER_PAGES = [
  "/sierpin",
  "/sierpin/service",
  "/sierpin/our-work",
  "/sierpin/team",
  "/sierpin/faq",
  "/sierpin/contact",
];

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const router = useRouter();
  const current = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return current === href;
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(229,242,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        height: 88,
      }}
    >
      <div
        style={{
          maxWidth: 1920,
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(24px, 8vw, 160px)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => router.push("/sierpin")}
          className="transition-opacity duration-150 hover:opacity-80 active:opacity-60"
          style={{ display: "flex", alignItems: "flex-end", gap: 0, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div style={{ position: "relative", width: 58, height: 48 }}>
            <img src={LOGO_MARK} alt="Sierpin Lab" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ position: "relative", width: 130, height: 20, marginLeft: 14, marginBottom: 4 }}>
            <img src={LOGO_TEXT} alt="SIERPIN LAB" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center" style={{ gap: 4 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className="transition-all duration-150 active:scale-95"
              style={{
                padding: "12px 28px",
                borderRadius: 39,
                background: isActive(item.href) ? S.NAVY : "transparent",
                color: isActive(item.href) ? "#fff" : S.TEXT_80,
                fontSize: 16,
                fontWeight: 500,
                fontFamily: S.FONT_BODY,
                border: isActive(item.href) ? "1px solid #fff" : "none",
                boxShadow: isActive(item.href) ? `0 2px 12px ${S.NAVY_SHADOW}` : "none",
                cursor: "pointer",
                letterSpacing: "-0.1px",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </button>
          ))}

          {/* Contact Us */}
          <div style={{ padding: "0 12px" }}>
            <button
              onClick={() => router.push("/sierpin/contact")}
              className="transition-all duration-150 hover:opacity-80 active:scale-95"
              style={{
                padding: "12px 32px",
                borderRadius: 49,
                background: current === "/sierpin/contact" ? S.NAVY : "transparent",
                color: current === "/sierpin/contact" ? "#fff" : S.NAVY,
                fontSize: 16,
                fontWeight: 500,
                fontFamily: S.FONT_BODY,
                border: `1px solid ${S.NAVY}`,
                cursor: "pointer",
                letterSpacing: "-0.1px",
                whiteSpace: "nowrap",
                ...(current === "/sierpin/contact" ? { boxShadow: `0 2px 12px ${S.NAVY_SHADOW}` } : {}),
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Language */}
          <span style={{ fontSize: 16, fontWeight: 500, fontFamily: S.FONT_BODY, color: S.TEXT_60, padding: "12px 16px", cursor: "default" }}>
            English
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-opacity hover:opacity-70 active:opacity-50"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          aria-label="Menu"
        >
          <div style={{ width: 24, height: 2, background: S.TEXT, marginBottom: 5, borderRadius: 2, transition: "transform 0.2s" }} />
          <div style={{ width: 24, height: 2, background: S.TEXT, marginBottom: 5, borderRadius: 2 }} />
          <div style={{ width: 24, height: 2, background: S.TEXT, borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 88,
            left: 0,
            right: 0,
            background: "rgba(229,242,255,0.97)",
            backdropFilter: "blur(20px)",
            padding: "16px 24px 24px",
            borderTop: "1px solid rgba(1,58,149,0.1)",
          }}
        >
          {[...NAV_ITEMS, { label: "Contact Us", href: "/sierpin/contact" }].map((item) => (
            <button
              key={item.href}
              onClick={() => { router.push(item.href); setMenuOpen(false); }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "12px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 18,
                fontWeight: isActive(item.href) ? 600 : 400,
                fontFamily: S.FONT_BODY,
                color: isActive(item.href) ? S.NAVY : S.TEXT,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Page Stepper ─────────────────────────────────────────────────────────────
function PageStepper() {
  const router = useRouter();
  const current = router.pathname;
  const activeIdx = STEPPER_PAGES.indexOf(current);

  return (
    <div
      style={{
        position: "fixed",
        right: "clamp(16px, 3vw, 60px)",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
        zIndex: 50,
      }}
    >
      {STEPPER_PAGES.map((page, i) => (
        <button
          key={page}
          onClick={() => router.push(page)}
          className="transition-all duration-200 hover:opacity-80"
          style={{
            width: i === activeIdx ? 16 : 8,
            height: i === activeIdx ? 16 : 8,
            borderRadius: i === activeIdx ? 3 : 2,
            background: i === activeIdx ? S.NAVY : "rgba(1,58,149,0.15)",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
          aria-label={`Go to ${STEPPER_PAGES[i]}`}
        />
      ))}
    </div>
  );
}

// ── Background ───────────────────────────────────────────────────────────────
export function SierpinBg() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: S.BG }}>
      {/* Left gradient layer */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(119.5deg, rgba(120,198,255,0.7) 0%, rgba(255,255,255,0) 50%)",
      }} />
      {/* Purple overlay blend */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(95,92,255,0.08)",
        mixBlendMode: "overlay",
      }} />
      {/* Bottom-left teal blob */}
      <div style={{
        position: "absolute",
        bottom: -100, left: -80,
        width: 600, height: 500,
        background: "radial-gradient(ellipse at 40% 60%, rgba(0,180,220,0.25) 0%, transparent 70%)",
        filter: "blur(40px)",
      }} />
      {/* Top-right decorative shape */}
      <div style={{
        position: "absolute",
        top: 80, right: 120,
        width: 200, height: 180,
        background: "rgba(120,198,255,0.3)",
        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
        opacity: 0.6,
      }} />
    </div>
  );
}

// ── Sparkle icon ─────────────────────────────────────────────────────────────
const SPARKLE_ICON = "https://www.figma.com/api/mcp/asset/d4f077e8-07b7-410e-9719-48f62a2079ea";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <img src={SPARKLE_ICON} alt="" style={{ width: 28, height: 28, objectFit: "contain" }} />
      <span style={{ fontSize: 20, fontWeight: 500, fontFamily: S.FONT_BODY, color: S.TEXT }}>{children}</span>
    </div>
  );
}

// ── Layout ───────────────────────────────────────────────────────────────────
interface SierpinLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function SierpinLayout({ title = "Sierpin Lab", children }: SierpinLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SierpinBg />
      <Navbar />
      <PageStepper />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          paddingTop: 88,
        }}
      >
        {children}
      </main>
    </>
  );
}
