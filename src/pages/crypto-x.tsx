/* eslint-disable @next/next/no-img-element */
// Figma: Crypto wallet - Mobile app (Community) — node 1:52 (Homepage)
// Frame: 375×812, bg #070707 — MCP-parsed: 2026-03-08

import Head from "next/head";

// ─── Colors ───────────────────────────────────────────────────────────────────
const BG = "#070707";
const ACCENT = "#6552fe";
const VIOLET = "#9c4fff";
const TEXT_MUTED = "#6c757d";
const ICON_BG = "#212125";
const TAB_BG = "#121212";
const SPARKLINE_GREEN = "#48d49e";
const SPARKLINE_RED = "#ff8265";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function SettingsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M5 8V2M2.5 4.5L5 2l2.5 2.5"
        stroke={ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EthIcon() {
  return (
    <svg width="22" height="30" viewBox="0 0 22 30" fill="none">
      <path d="M11 0L0.5 15.3L11 20.7L21.5 15.3L11 0Z" fill="white" fillOpacity="0.9" />
      <path d="M11 0L0.5 15.3L11 11V0Z" fill="white" fillOpacity="0.45" />
      <path d="M11 22.6L0.5 17L11 30L21.5 17L11 22.6Z" fill="white" fillOpacity="0.9" />
      <path d="M11 22.6L0.5 17L11 20.7V22.6Z" fill="white" fillOpacity="0.45" />
    </svg>
  );
}

function BtcIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#F7931A" />
      <path
        d="M16.5 10.5c.2-1.4-.9-2.1-2.4-2.6l.5-2.1-1.3-.3-.5 2-.9-.2.5-2-1.3-.3-.5 2c-.3-.1-.5-.1-.8-.2l-1.7-.4-.3 1.4s.9.2.9.2c.5.1.6.5.6.8l-.7 2.7c0 0 .1 0 .1 0s-.1 0-.1 0l-.9 3.5c-.1.2-.3.5-.7.4L7 15.1l-.7 1.5 1.6.4c.3.1.6.1.9.2l-.5 2.1 1.3.3.5-2.1c.3.1.7.2 1 .2l-.5 2 1.3.3.5-2.1c2.4.4 4.2.2 5-2 .6-1.8 0-2.8-1.4-3.5.9-.2 1.7-.9 1.2-1.9zm-2.4 3.7c-.5 1.8-3.3.8-4.2.6l.7-2.9c.9.2 4 .6 3.5 2.3zm.5-3.7c-.4 1.6-2.8.8-3.5.6l.7-2.6c.8.2 3.3.4 2.8 2z"
        fill="white"
      />
    </svg>
  );
}

function LtcIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#345D9D" />
      <path
        d="M13 5.5h-2.5L8 13.5h3l-.8 3.5H17l.5-2h-5.5l.8-3.5h3l.5-2h-3L13 5.5z"
        fill="white"
      />
    </svg>
  );
}

function XrpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#346AA9" />
      <path
        d="M16.5 6h2.5l-4.5 4.5c-1.1 1.1-3 1.1-4.1 0L5.9 6H8.5L11.4 9c.3.3.9.3 1.2 0L15.5 6z"
        fill="white"
      />
      <path
        d="M8.5 18h-2.5l4.5-4.5c1.1-1.1 3-1.1 4.1 0l4.5 4.5H16.5L13.6 15c-.3-.3-.9-.3-1.2 0L9.5 18z"
        fill="white"
      />
    </svg>
  );
}

function HomeTabIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M2 9.5L11 2.5L20 9.5V20H14.5V14H7.5V20H2V9.5Z"
        fill={active ? "white" : "rgba(255,255,255,0.35)"}
      />
    </svg>
  );
}

function ExchangeTabIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4 7H18M18 7L15 4M18 7L15 10"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 15H4M4 15L7 12M4 15L7 18"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileTabIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="7.5" r="4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" />
      <path
        d="M3 20.5C3 17 6.6 14 11 14C15.4 14 19 17 19 20.5"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Sparkline ────────────────────────────────────────────────────────────────
function Sparkline({ color, up }: { color: string; up: boolean }) {
  const upPath = "M0,20 C10,17 20,14 30,9 C38,5 46,8 54,3 C58,1 62,0 68,0";
  const downPath = "M0,2 C10,4 18,7 28,12 C38,17 46,13 54,18 C59,20 63,21 68,22";
  const path = up ? upPath : downPath;
  const viewH = up ? 22 : 24;
  return (
    <svg width="68" height={viewH} viewBox={`0 0 68 ${viewH}`} fill="none">
      <path d={path} stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// ─── Coin Row ─────────────────────────────────────────────────────────────────
function CoinRow({
  name,
  ticker,
  value,
  amount,
  sparkColor,
  sparkUp,
  icon,
  iconBlur,
}: {
  name: string;
  ticker: string;
  value: string;
  amount: string;
  sparkColor: string;
  sparkUp: boolean;
  icon: React.ReactNode;
  iconBlur?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 45,
        marginBottom: 30,
      }}
    >
      {/* Coin icon */}
      <div
        style={{
          flexShrink: 0,
          width: 45,
          height: 45,
          borderRadius: 6,
          background: iconBlur ? "rgba(255,255,255,0.10)" : ICON_BG,
          backdropFilter: iconBlur ? "blur(13px)" : undefined,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
      >
        {icon}
      </div>

      {/* Name + ticker */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "24px",
          }}
        >
          {name}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 400,
            color: TEXT_MUTED,
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "21px",
          }}
        >
          {ticker}
        </p>
      </div>

      {/* Sparkline */}
      <div style={{ marginRight: 14 }}>
        <Sparkline color={sparkColor} up={sparkUp} />
      </div>

      {/* Value + amount */}
      <div style={{ textAlign: "right" }}>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "24px",
          }}
        >
          {value}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 10,
            fontWeight: 700,
            color: TEXT_MUTED,
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "15px",
          }}
        >
          {amount}
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CryptoX() {
  return (
    <>
      <Head>
        <title>Crypto X — Wallet</title>
      </Head>

      {/* Outer wrapper — dark page background */}
      <div
        style={{
          minHeight: "100vh",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          fontFamily: "'Poppins', sans-serif",
          paddingTop: 0,
        }}
      >
        {/* ── Mobile frame 375×812 ─────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            width: 375,
            minHeight: 812,
            background: BG,
            overflow: "hidden",
          }}
        >
          {/* ── Decorative wave lines (Group 48095464) ───────────────────
              Figma: x=-41, y=88, 450×257, opacity=0.5
              Three sinuous colored strokes: gold / teal / blue            */}
          <svg
            style={{
              position: "absolute",
              left: -41,
              top: 88,
              opacity: 0.5,
              pointerEvents: "none",
            }}
            width="450"
            height="257"
            viewBox="0 0 450 257"
            fill="none"
          >
            {/* Gold wave — Vector 9 */}
            <path
              d="M0,185 C40,162 80,205 130,172 C180,138 220,185 272,155 C324,124 375,162 450,132"
              stroke="#f2af1a"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Teal wave — Vector 10 */}
            <path
              d="M0,205 C45,178 88,218 138,188 C188,158 228,198 282,168 C336,138 388,174 450,148"
              stroke="#48d4a5"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Blue wave — Vector 11 */}
            <path
              d="M0,224 C50,198 92,235 144,206 C196,177 235,213 290,184 C344,154 396,190 450,165"
              stroke="#326cf9"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          {/* ── Status Bar — y=0, h=44 ───────────────────────────────────
              Poppins SemiBold 600, 15px, #fff, letter-spacing -0.3px      */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 14,
            }}
          >
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#ffffff",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-0.3px",
              }}
            >
              09:41
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {/* Cellular bars */}
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <rect x="0" y="4" width="3" height="7" rx="0.5" />
                <rect x="4.5" y="2.5" width="3" height="8.5" rx="0.5" />
                <rect x="9" y="0.5" width="3" height="10.5" rx="0.5" />
                <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" opacity="0.35" />
              </svg>
              {/* WiFi */}
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                <path
                  d="M7.5 2.2C9.8 2.2 11.9 3.2 13.3 4.8L14.6 3.4C12.8 1.3 10.3 0 7.5 0C4.7 0 2.2 1.3 0.4 3.4L1.7 4.8C3.1 3.2 5.2 2.2 7.5 2.2Z"
                  fill="white"
                />
                <path
                  d="M7.5 5C9.1 5 10.5 5.7 11.5 6.8L12.8 5.4C11.4 3.9 9.5 3 7.5 3C5.5 3 3.6 3.9 2.2 5.4L3.5 6.8C4.5 5.7 5.9 5 7.5 5Z"
                  fill="white"
                />
                <circle cx="7.5" cy="9.5" r="1.8" fill="white" />
              </svg>
              {/* Battery */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 22,
                    height: 11,
                    borderRadius: 2.67,
                    border: "1px solid rgba(255,255,255,0.35)",
                    padding: "1.5px",
                    display: "flex",
                    alignItems: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      width: "75%",
                      height: "100%",
                      background: "white",
                      borderRadius: 1.33,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 1,
                    height: 4,
                    background: "white",
                    marginLeft: 1,
                    borderRadius: "0 1px 1px 0",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── User avatar — x=24, y=64, 48×48, circle ─────────────────
              Figma image: unsplash:pAtA8xe_iVM                            */}
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28110822-924e-4904-94d8-17af4750bc6c"
            alt="User avatar"
            style={{
              position: "absolute",
              left: 24,
              top: 64,
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          {/* ── Settings icon — x=327, y=76, 24×24 ──────────────────────
              Figma: settings-3-line, fill white                           */}
          <button
            style={{
              position: "absolute",
              right: 24,
              top: 76,
              width: 24,
              height: 24,
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <SettingsIcon />
          </button>

          {/* ── Greeting text — x=24, y=128 ──────────────────────────────
              Poppins Regular 400, 24px, #9c4fff, line-height 36px         */}
          <p
            style={{
              position: "absolute",
              left: 24,
              top: 128,
              margin: 0,
              fontSize: 24,
              fontWeight: 400,
              color: VIOLET,
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "36px",
            }}
          >
            Hello Alex
          </p>

          {/* ── Balance Card — x=24, y=170, 327×100, radius 16 ───────────
              White fill + mesh gradient overlay image                     */}
          <div
            style={{
              position: "absolute",
              left: 24,
              top: 170,
              width: 327,
              height: 100,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {/* White base */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "#ffffff",
              }}
            />
            {/* Mesh gradient texture overlay */}
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/612ad878-d196-4c5b-8f9e-3e5ff7a7d6b1"
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mixBlendMode: "overlay",
                opacity: 0.7,
              }}
            />
            {/* Card text content */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "14px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* "Current Balance" — Poppins Regular 16px #272727 */}
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#272727",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "24px",
                }}
              >
                Current Balance
              </p>
              {/* Amount row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 2,
                }}
              >
                {/* "$87,430.12" — Poppins Bold 700 24px #1d1d1d */}
                <p
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#1d1d1d",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: "36px",
                  }}
                >
                  $87,430.12
                </p>
                {/* 10.2% badge — Inter Bold 700 ~15px #6552fe */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    background: "rgba(101,82,254,0.08)",
                    borderRadius: 6,
                    padding: "2px 7px 2px 5px",
                  }}
                >
                  <ArrowUpIcon />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: ACCENT,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    10.2%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Deposit button — x=26, y=288, 154×38, #6552fe, radius 16 ─
              Poppins Regular 400, 16px, white                             */}
          <button
            style={{
              position: "absolute",
              left: 26,
              top: 288,
              width: 154,
              height: 38,
              background: ACCENT,
              borderRadius: 16,
              border: "none",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
              lineHeight: "18px",
            }}
          >
            Deposit
          </button>

          {/* ── Withdraw button — x=196, y=288, 155×38, transparent, white border */}
          <button
            style={{
              position: "absolute",
              left: 196,
              top: 288,
              width: 155,
              height: 38,
              background: "transparent",
              borderRadius: 16,
              border: "1px solid #ffffff",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
              lineHeight: "18px",
            }}
          >
            Withdraw
          </button>

          {/* ── Holdings section header — y=366 ──────────────────────────
              "Holdings": Poppins Bold 700, 20px, white
              "See All": Poppins Medium 500, 14px, white                  */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 354,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 24,
              paddingRight: 24,
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "20px",
              }}
            >
              Holdings
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#ffffff",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "16px",
                cursor: "pointer",
              }}
            >
              See All
            </span>
          </div>

          {/* ── Holdings rows ─────────────────────────────────────────────
              Figma: ETH y=418, BTC y=495, LTC y=572, XRP y=649
              Each row: 45px tall, 77px pitch                             */}
          <div
            style={{
              position: "absolute",
              left: 24,
              right: 24,
              top: 400,
            }}
          >
            {/* Row 1 — Ethereum */}
            <CoinRow
              name="Ethereum"
              ticker="ETH"
              value="$503.12"
              amount="50 ETH"
              sparkColor={SPARKLINE_GREEN}
              sparkUp={true}
              icon={<EthIcon />}
              iconBlur={true}
            />
            {/* Row 2 — Bitcoin */}
            <CoinRow
              name="Bitcoin"
              ticker="BTC"
              value="$26927"
              amount="2.05 BTC"
              sparkColor={SPARKLINE_RED}
              sparkUp={false}
              icon={<BtcIcon />}
            />
            {/* Row 3 — Litecoin */}
            <CoinRow
              name="Litecoin"
              ticker="LTC"
              value="$6927"
              amount="2.05 LTC"
              sparkColor={SPARKLINE_GREEN}
              sparkUp={true}
              icon={<LtcIcon />}
            />
            {/* Row 4 — Ripple/XRP */}
            <CoinRow
              name="Ripple"
              ticker="XRP"
              value="$4637"
              amount="2.05 XRP"
              sparkColor={SPARKLINE_GREEN}
              sparkUp={true}
              icon={<XrpIcon />}
            />
          </div>

          {/* ── Tab Bar — y=729, h=83, bg #121212 ────────────────────────
              Top border: rgba(255,255,255,0.20)
              3 tabs: Home (active), Exchange, Profile                    */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 83,
              background: TAB_BG,
              borderTop: "1px solid rgba(255,255,255,0.20)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-around",
                paddingTop: 14,
              }}
            >
              {/* Tab 1 — Home (active) */}
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
              >
                <HomeTabIcon active={true} />
                <span
                  style={{
                    fontSize: 10,
                    color: "white",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Home
                </span>
              </button>
              {/* Tab 2 — Exchange */}
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
              >
                <ExchangeTabIcon />
                <span
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Exchange
                </span>
              </button>
              {/* Tab 3 — Profile */}
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: 0,
                }}
              >
                <ProfileTabIcon />
                <span
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Profile
                </span>
              </button>
            </div>

            {/* Home indicator pill — 134×5, #b9c1d9, radius 100 */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  width: 134,
                  height: 5,
                  background: "#b9c1d9",
                  borderRadius: 100,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
