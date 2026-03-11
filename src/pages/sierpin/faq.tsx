/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — FAQ page (Bitget dark theme)
import { useState } from "react";
import { useRouter } from "next/router";
import SierpinLayout, { S, SectionLabel } from "@/components/sierpin/SierpinLayout";

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    id: "process",
    q: "What is the typical process for starting a collaboration?",
    a: "We begin with a free 1-hour consultation to understand your goals. Next, we draft a tailored proposal with timelines, deliverables, and cost estimates. Upon approval, our project manager will onboard your team and kick off within 48 hours.",
  },
  {
    id: "scale",
    q: "What if we need to scale up services mid-project?",
    a: "No problem. Our flexible team structure allows us to allocate additional specialists at any stage. Simply flag your needs to the project manager and we'll adjust resources within 24–48 hours, keeping the project on track.",
  },
  {
    id: "deadlines",
    q: "How do you ensure project deadlines are met?",
    a: "We use agile sprint cycles with weekly milestone reviews. Every project has a dedicated PM who monitors progress daily and proactively resolves blockers. We maintain a 95%+ on-time delivery rate across all engagements.",
  },
  {
    id: "industries",
    q: "What industries do you specialize in?",
    a: "We primarily serve Web3, blockchain, fintech, and consumer tech brands. Our team has deep experience navigating regulatory environments, tokenomics, community-driven marketing, and the nuances of decentralized ecosystems.",
  },
  {
    id: "pricing",
    q: "How is pricing structured?",
    a: "We offer both project-based and retainer pricing models. After the initial consultation, we provide a transparent quote covering all deliverables, revisions, and communication time. No hidden fees.",
  },
];

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: typeof FAQS[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        background: isOpen ? S.BG_CARD_HOVER : S.BG_CARD,
        marginBottom: 10,
        overflow: "hidden",
        transition: "background 0.2s ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 28px",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: 16,
          width: "100%",
        }}
      >
        {/* Number */}
        <span
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: 13,
            fontWeight: 600,
            color: isOpen ? S.ACCENT : S.TEXT_40,
            minWidth: 28,
            transition: "color 0.2s ease",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          style={{
            flex: 1,
            fontFamily: S.FONT_BODY,
            fontSize: "clamp(14px, 1.3vw, 17px)",
            fontWeight: 600,
            color: isOpen ? S.TEXT : S.TEXT_80,
            lineHeight: 1.4,
            textAlign: "left",
            transition: "color 0.2s ease",
          }}
        >
          {faq.q}
        </span>

        {/* Toggle icon */}
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isOpen ? S.ACCENT_GLOW : "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
        >
          <span
            style={{
              color: isOpen ? S.ACCENT : S.TEXT_60,
              fontSize: 18,
              lineHeight: 1,
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              display: "block",
              transition: "transform 0.2s ease",
            }}
          >
            +
          </span>
        </span>
      </button>

      {/* Answer */}
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div
          style={{
            padding: "0 28px 24px 70px",
            fontFamily: S.FONT_BODY,
            fontSize: "clamp(13px, 1.2vw, 15px)",
            fontWeight: 400,
            color: S.TEXT_60,
            lineHeight: 1.7,
          }}
        >
          {faq.a}
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("process");
  const router = useRouter();

  return (
    <SierpinLayout title="FAQ — Sierpin Lab">
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
          <div
            style={{
              display: "flex",
              gap: "clamp(40px, 8vw, 120px)",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* Left: heading + CTA */}
            <div
              style={{
                flex: "0 0 clamp(240px, 28vw, 380px)",
                position: "sticky",
                top: 112,
              }}
            >
              <SectionLabel>FAQ</SectionLabel>
              <h1
                style={{
                  fontFamily: S.FONT_HEADING,
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 800,
                  color: S.TEXT,
                  margin: "20px 0 20px",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                }}
              >
                Frequently{"\n"}
                <span style={{ color: S.ACCENT }}>Asked</span>
              </h1>
              <p
                style={{
                  fontFamily: S.FONT_BODY,
                  fontSize: 15,
                  color: S.TEXT_60,
                  lineHeight: 1.6,
                  marginBottom: 32,
                }}
              >
                Have more questions? We&apos;re always happy to chat.
              </p>
              <button
                onClick={() => router.push("/sierpin/contact")}
                className="transition-all duration-150 active:scale-95"
                style={{
                  padding: "13px 32px",
                  borderRadius: 999,
                  background: S.BTN_BG,
                  color: S.BTN_TEXT,
                  fontSize: 15,
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

            {/* Right: FAQ list */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  index={i}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
