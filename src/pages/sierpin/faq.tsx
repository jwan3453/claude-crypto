/* eslint-disable @next/next/no-img-element */
// Sierpin Lab — FAQ page
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
function FAQItem({ faq, isOpen, onToggle }: {
  faq: typeof FAQS[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderRadius: 16,
        background: isOpen ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        marginBottom: 12,
        overflow: "hidden",
        transition: "background 0.2s ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left transition-opacity hover:opacity-80"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 28px",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: S.FONT_BODY,
            fontSize: "clamp(15px, 1.3vw, 18px)",
            fontWeight: 600,
            color: S.TEXT,
            lineHeight: 1.4,
          }}
        >
          {faq.q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isOpen ? S.NAVY : "rgba(1,58,149,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d={isOpen ? "M2 9l5-5 5 5" : "M2 5l5 5 5-5"}
              stroke={isOpen ? "#fff" : S.NAVY}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: "0 28px 20px" }}>
          <p
            style={{
              fontFamily: S.FONT_BODY,
              fontSize: "clamp(14px, 1.1vw, 16px)",
              fontWeight: 400,
              color: S.TEXT_80,
              lineHeight: "26px",
              margin: 0,
            }}
          >
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function FAQPage() {
  const router = useRouter();
  const [openId, setOpenId] = useState<string | null>("process");

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <SierpinLayout title="FAQ — Sierpin Lab">
      <div
        style={{
          minHeight: "calc(100vh - 88px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px clamp(24px, 8vw, 160px)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Label */}
          <div style={{ marginBottom: 40 }}>
            <SectionLabel>FAQ</SectionLabel>
            <h2
              style={{
                fontFamily: S.FONT_HEADING,
                fontSize: "clamp(40px, 4.5vw, 72px)",
                fontWeight: 600,
                color: "#000",
                margin: "20px 0 0",
                letterSpacing: "-1px",
                lineHeight: 1.1,
              }}
            >
              Questions & Answers.
            </h2>
          </div>

          {/* FAQ list */}
          <div>
            {FAQS.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <p style={{ fontFamily: S.FONT_BODY, fontSize: 16, color: S.TEXT_80, marginBottom: 16 }}>
              Still have questions?
            </p>
            <button
              onClick={() => router.push("/sierpin/contact")}
              className="transition-all duration-150 hover:opacity-80 active:scale-95"
              style={{
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
              }}
            >
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </SierpinLayout>
  );
}
