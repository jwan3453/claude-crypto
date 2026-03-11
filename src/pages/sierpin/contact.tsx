/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — Contact page (Bitget dark theme)
import { useState } from "react";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── Assets ───────────────────────────────────────────────────────────────────
const IMG_PALETTE  = "https://www.figma.com/api/mcp/asset/fafbd747-bbf0-41b8-a6d1-684578d8c9ec";
const IMG_TELEGRAM = "https://www.figma.com/api/mcp/asset/2bb18c7e-2d4a-475d-ab07-6d0b8ffe6e32";
const IMG_WECHAT   = "https://www.figma.com/api/mcp/asset/14000dc5-5aa5-4f64-869e-82eee4b0fdac";
const IMG_X        = "https://www.figma.com/api/mcp/asset/cc0b2536-fc83-41f7-8541-e7eeaa4ae26b";
const IMG_LINKEDIN = "https://www.figma.com/api/mcp/asset/8e88b3b0-34f8-4f7f-9924-942397eec9e1";

const SOCIAL_LINKS = [
  { href: "#", img: IMG_TELEGRAM, alt: "Telegram" },
  { href: "#", img: IMG_WECHAT,   alt: "WeChat" },
  { href: "#", img: IMG_X,        alt: "X (Twitter)" },
  { href: "#", img: IMG_LINKEDIN, alt: "LinkedIn" },
];

// ── Social Icon ───────────────────────────────────────────────────────────────
function SocialIcon({ href, img, alt }: { href: string; img: string; alt: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.opacity = "0.7";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }}
      className="transition-all duration-150 active:scale-90"
    >
      <img
        src={img}
        alt={alt}
        style={{
          width: 44,
          height: 44,
          objectFit: "contain",
          borderRadius: "50%",
        }}
      />
    </a>
  );
}

// ── Contact Form ───────────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const inputStyle = {
    width: "100%",
    padding: "14px 20px",
    borderRadius: 12,
    background: S.BG_CARD,
    color: S.TEXT,
    fontSize: 15,
    fontFamily: S.FONT_BODY,
    border: "none",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: "40px 32px",
          borderRadius: 20,
          background: S.BG_CARD,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(0,240,255,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: 24,
          }}
        >
          ✓
        </div>
        <h3
          style={{
            fontFamily: S.FONT_HEADING,
            fontSize: 22,
            fontWeight: 700,
            color: S.TEXT,
            margin: "0 0 10px",
          }}
        >
          Message Sent!
        </h3>
        <p style={{ fontFamily: S.FONT_BODY, fontSize: 15, color: S.TEXT_60, margin: 0 }}>
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "32px",
        borderRadius: 20,
        background: S.BG_CARD,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <h3
        style={{
          fontFamily: S.FONT_HEADING,
          fontSize: 20,
          fontWeight: 700,
          color: S.TEXT,
          margin: "0 0 4px",
        }}
      >
        Send a Message
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={inputStyle}
        onFocus={(e) => { (e.target as HTMLInputElement).style.background = S.BG_CARD_HOVER; }}
        onBlur={(e) => { (e.target as HTMLInputElement).style.background = S.BG_CARD; }}
      />

      <input
        type="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={inputStyle}
        onFocus={(e) => { (e.target as HTMLInputElement).style.background = S.BG_CARD_HOVER; }}
        onBlur={(e) => { (e.target as HTMLInputElement).style.background = S.BG_CARD; }}
      />

      <textarea
        placeholder="Tell us about your project..."
        required
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
        onFocus={(e) => { (e.target as HTMLTextAreaElement).style.background = S.BG_CARD_HOVER; }}
        onBlur={(e) => { (e.target as HTMLTextAreaElement).style.background = S.BG_CARD; }}
      />

      <button
        type="submit"
        className="transition-all duration-150 active:scale-95"
        style={{
          padding: "14px",
          borderRadius: 999,
          background: S.BTN_BG,
          color: S.BTN_TEXT,
          fontSize: 15,
          fontWeight: 600,
          fontFamily: S.FONT_BODY,
          border: "none",
          cursor: "pointer",
          marginTop: 4,
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
        Send Message
      </button>
    </form>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <SierpinLayout title="Contact Us — Sierpin Lab">
      <div
        style={{
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px clamp(24px, 8vw, 160px) 60px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(40px, 8vw, 100px)",
              flexWrap: "wrap",
            }}
          >
            {/* Left: contact info */}
            <div style={{ flex: 1, minWidth: "clamp(280px, 40vw, 540px)" }}>
              <SectionLabel>Contact Us Now</SectionLabel>

              <h1
                style={{
                  fontFamily: S.FONT_HEADING,
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: S.TEXT,
                  margin: "24px 0 40px",
                  letterSpacing: "-1.5px",
                  maxWidth: 520,
                }}
              >
                Now it&apos;s time to{" "}
                <span style={{ color: S.ACCENT }}>Elevate.</span>
              </h1>

              {/* Phone */}
              <div style={{ marginBottom: 32 }}>
                <span
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: 17,
                    fontWeight: 500,
                    color: S.ACCENT,
                    background: "rgba(0,240,255,0.08)",
                    borderRadius: 999,
                    padding: "10px 24px",
                    display: "inline-block",
                  }}
                >
                  150658500
                </span>
              </div>

              {/* Social links */}
              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: S.FONT_BODY,
                      fontSize: "clamp(15px, 1.3vw, 18px)",
                      fontWeight: 600,
                      color: S.TEXT_80,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Social Medias:
                  </span>
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    {SOCIAL_LINKS.map((s) => (
                      <SocialIcon key={s.alt} href={s.href} img={s.img} alt={s.alt} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: "clamp(15px, 1.3vw, 18px)",
                    fontWeight: 600,
                    color: S.TEXT_80,
                    whiteSpace: "nowrap",
                  }}
                >
                  Email:
                </span>
                <a
                  href="mailto:BD@sierpin.com"
                  style={{
                    fontFamily: S.FONT_BODY,
                    fontSize: "clamp(15px, 1.3vw, 18px)",
                    fontWeight: 600,
                    color: S.ACCENT,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  className="transition-opacity"
                >
                  BD@sierpin.com
                </a>
              </div>
            </div>

            {/* Right: form + illustration */}
            <div
              style={{
                flex: 1,
                minWidth: "clamp(280px, 36vw, 480px)",
                maxWidth: 480,
              }}
            >
              {/* 3D illustration */}
              <div className="hidden md:block" style={{ marginBottom: 28 }}>
                <img
                  src={IMG_PALETTE}
                  alt="Contact Sierpin Lab"
                  style={{
                    width: "100%",
                    maxWidth: 280,
                    aspectRatio: "1",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>

              <ContactForm />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(40px, 6vw, 72px)",
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
