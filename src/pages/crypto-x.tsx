/* eslint-disable @next/next/no-img-element */
// Figma: Crypto wallet - Mobile app (Community) — node 1:52 (Homepage)
// Frame: 375×812, bg #070707 — MCP-parsed: 2026-03-08

import Head from "next/head";

// ─── Figma MCP asset URLs ──────────────────────────────────────────────────────
const imgMeshGradient = "https://www.figma.com/api/mcp/asset/6672b415-f2a3-421e-92e7-65f7cc7be4cd";
const imgAvatar = "https://www.figma.com/api/mcp/asset/279a1b33-da5e-4cb2-9e72-c6a6a9e969b6";

// ─── Colors ───────────────────────────────────────────────────────────────────
const BG = "#070707";
const ACCENT = "#6552fe";
const TEXT_MUTED = "#6c7580";
const ICON_BG = "#212125";
const TAB_BG = "#121212";
const SPARKLINE_GREEN = "#48d49e";
const SPARKLINE_RED = "#ff8266";

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

// Ethereum diamond icon — pure SVG vectors matching Figma white shapes
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

// Bitcoin icon — white B on orange circle
function BtcIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.5 10.5c.2-1.4-.9-2.1-2.4-2.6l.5-2.1-1.3-.3-.5 2-.9-.2.5-2-1.3-.3-.5 2c-.3-.1-.5-.1-.8-.2l-1.7-.4-.3 1.4s.9.2.9.2c.5.1.6.5.6.8l-.7 2.7c0 0 .1 0 .1 0s-.1 0-.1 0l-.9 3.5c-.1.2-.3.5-.7.4L7 15.1l-.7 1.5 1.6.4c.3.1.6.1.9.2l-.5 2.1 1.3.3.5-2.1c.3.1.7.2 1 .2l-.5 2 1.3.3.5-2.1c2.4.4 4.2.2 5-2 .6-1.8 0-2.8-1.4-3.5.9-.2 1.7-.9 1.2-1.9zm-2.4 3.7c-.5 1.8-3.3.8-4.2.6l.7-2.9c.9.2 4 .6 3.5 2.3zm.5-3.7c-.4 1.6-2.8.8-3.5.6l.7-2.6c.8.2 3.3.4 2.8 2z"
        fill="white"
      />
    </svg>
  );
}

// Litecoin icon — white L on blue circle
function LtcIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M13 4.5h-2.5L8 12.5h3l-.8 3.5H17l.5-2h-5.5l.8-3.5h3l.5-2h-3L13 4.5z"
        fill="white"
      />
    </svg>
  );
}

// XRP icon — white X shape
function XrpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M15.5 5h2.5l-4.5 4.5c-1.1 1.1-3 1.1-4.1 0L5.9 5H8.5L11.4 8c.3.3.9.3 1.2 0L15.5 5z"
        fill="white"
      />
      <path
        d="M8.5 17h-2.5l4.5-4.5c1.1-1.1 3-1.1 4.1 0l4.5 4.5H16.5L13.6 14c-.3-.3-.9-.3-1.2 0L9.5 17z"
        fill="white"
      />
    </svg>
  );
}

// Tab bar icons
function HomeTabIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
      <path
        d="M2 9.5L11 2.5L20 9.5V20H14.5V14H7.5V20H2V9.5Z"
        fill={active ? ACCENT : "rgba(255,255,255,0.35)"}
      />
    </svg>
  );
}

function ExchangeTabIcon() {
  return (
    <svg width="21" height="20" viewBox="0 0 22 22" fill="none">
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
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
      <circle cx="8" cy="6" r="5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" />
      <path
        d="M1 20C1 16.69 4.13 14 8 14C11.87 14 15 16.69 15 20"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Sparkline chart ───────────────────────────────────────────────────────────
function Sparkline({ color, up }: { color: string; up: boolean }) {
  // Up-trending: smooth curve rising right; Down-trending: descending
  const upPath = "M0,20 C10,17 20,14 30,9 C38,5 46,8 54,3 C58,1 62,0 68,0";
  const downPath = "M0,2 C10,4 18,7 28,12 C38,17 46,13 54,18 C59,20 63,21 68,22";
  const path = up ? upPath : downPath;
  return (
    <svg width="68" height="24" viewBox="0 0 68 24" fill="none">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
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
  iconBg,
}: {
  name: string;
  ticker: string;
  value: string;
  amount: string;
  sparkColor: string;
  sparkUp: boolean;
  icon: React.ReactNode;
  iconBlur?: boolean;
  iconBg?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 45,
        width: "100%",
      }}
    >
      {/* Coin icon container — 48×45 per Figma */}
      <div
        style={{
          flexShrink: 0,
          width: 48,
          height: 45,
          borderRadius: 6,
          background: iconBlur
            ? "rgba(255,255,255,0.10)"
            : iconBg ?? ICON_BG,
          backdropFilter: iconBlur ? "blur(13px)" : undefined,
          WebkitBackdropFilter: iconBlur ? "blur(13px)" : undefined,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 13,
        }}
      >
        {icon}
      </div>

      {/* Name + ticker */}
      <div style={{ width: 80 }}>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "24px",
            whiteSpace: "nowrap",
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

      {/* Sparkline — centered */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Sparkline color={sparkColor} up={sparkUp} />
      </div>

      {/* Value + amount — right aligned */}
      <div style={{ textAlign: "right" }}>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "24px",
            whiteSpace: "nowrap",
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
            whiteSpace: "nowrap",
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

      {/* Outer wrapper */}
      <div
        style={{
          minHeight: "100vh",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* ── Mobile frame 375×812 ──────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            width: 375,
            minHeight: 812,
            background: BG,
            overflow: "hidden",
          }}
        >
          {/* ── Mesh gradient behind balance card — x=24, y=170, 327×100 ─ */}
          <img
            src={imgMeshGradient}
            alt=""
            style={{
              position: "absolute",
              left: 24,
              top: 170,
              width: 327,
              height: 100,
              borderRadius: 16,
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />

          {/* ── Decorative wave lines (Group 48095464) ───────────────────
              Figma: x=-41, y=88, 450×257, opacity=0.5
              Three colored stroke waves: gold / teal / blue               */}
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
            {/* Gold wave — Vector 9 (#F2AF1A) */}
            <path
              d="M0,185 C40,162 80,205 130,172 C180,138 220,185 272,155 C324,124 375,162 450,132"
              stroke="#f2af1a"
              strokeWidth="1"
              fill="none"
            />
            {/* Teal wave — Vector 10 (#48D4A5) */}
            <path
              d="M0,205 C45,178 88,218 138,188 C188,158 228,198 282,168 C336,138 388,174 450,148"
              stroke="#48d4a5"
              strokeWidth="1"
              fill="none"
            />
            {/* Blue wave — Vector 11 (#326CFA) */}
            <path
              d="M0,224 C50,198 92,235 144,206 C196,177 235,213 290,184 C344,154 396,190 450,165"
              stroke="#326cfa"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* ── Status Bar — y=0, h=44 ───────────────────────────────────
              Poppins SemiBold 600, 15px, #fff, letter-spacing -0.3px       */}
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
              paddingLeft: 21,
              paddingRight: 14,
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
                lineHeight: "22.5px",
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
              Figma: unsplash:pAtA8xe_iVM, imageRef: de000380c5...         */}
          <img
            src={imgAvatar}
            alt="Alex"
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

          {/* ── Settings icon — right:24, top:76, 24×24 ──────────────────
              Figma: settings-3-line, fill white                            */}
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

          {/* ── Greeting text — x=24, y=128, 24px ────────────────────────
              "Hello " Regular 400, "Alex" Medium 500 — both #FFFFFF        */}
          <p
            style={{
              position: "absolute",
              left: 24,
              top: 128,
              margin: 0,
              fontSize: 24,
              fontWeight: 400,
              color: "#ffffff",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "36px",
            }}
          >
            Hello{" "}
            <span style={{ fontWeight: 500 }}>Alex</span>
          </p>

          {/* ── Balance Card — x=24, y=170, 327×100, radius 16 ───────────
              Frosted glass: rgba(255,255,255,0.24) + backdropFilter blur 20px
              Mesh gradient image sits behind (rendered above)              */}
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
            {/* Glassmorphism overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,255,255,0.24)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            />
            {/* Card text content */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "12px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* "Current Balance" — Poppins Regular 16px #272727, y:182 (top:12) */}
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
              {/* Amount row — "$87,430.12" + 10.2% badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {/* Poppins Bold 700, 24px, #1d1d1d */}
                <p
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#1d1d1d",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: "36px",
                    whiteSpace: "nowrap",
                  }}
                >
                  $87,430.12
                </p>
                {/* 10.2% badge — Inter Bold ~14.8px #6552fe */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <ArrowUpIcon />
                  <span
                    style={{
                      fontSize: 14.819,
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
              Poppins Regular 400, 16px, white, line-height 18px            */}
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
              "Holdings": Poppins Bold 700, 20px, white, line-height 20px
              "See All": Poppins Medium 500, 14px, white, underline        */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 366,
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
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              See All
            </span>
          </div>

          {/* ── Holdings rows ─────────────────────────────────────────────
              Figma: ETH y=418, BTC y=495, LTC y=572, XRP y=649
              Each row 45px tall, 77px pitch                               */}
          <div
            style={{
              position: "absolute",
              left: 24,
              right: 24,
              top: 418,
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            {/* Row 1 — Ethereum — ETH icon: white diamond on blurred bg */}
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
            {/* Row 2 — Bitcoin — BTC icon: white B on dark bg */}
            <CoinRow
              name="Bitcoin"
              ticker="BTC"
              value="$26927"
              amount="2.05 BTC"
              sparkColor={SPARKLINE_RED}
              sparkUp={false}
              icon={<BtcIcon />}
              iconBg={ICON_BG}
            />
            {/* Row 3 — Litecoin — LTC icon: white L on dark bg */}
            <CoinRow
              name="Litecoin"
              ticker="LTC"
              value="$6927"
              amount="2.05 LTC"
              sparkColor={SPARKLINE_GREEN}
              sparkUp={true}
              icon={<LtcIcon />}
              iconBg={ICON_BG}
            />
            {/* Row 4 — Ripple/XRP — XRP icon: white X on dark bg */}
            <CoinRow
              name="Ripple"
              ticker="XRP"
              value="$4637"
              amount="2.05 XRP"
              sparkColor={SPARKLINE_GREEN}
              sparkUp={true}
              icon={<XrpIcon />}
              iconBg={ICON_BG}
            />
          </div>

          {/* ── Tab Bar — y=729 (bottom:0), h=83, bg #121212 ─────────────
              Top border: rgba(133,157,186,0.2) per Figma #849DBA 20%
              3 tabs: Dashboard (active, #6552FE), Exchange, Profile        */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 83,
              background: TAB_BG,
              borderTop: "1px solid rgba(132,157,186,0.2)",
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
              {/* Tab 1 — Dashboard (active) */}
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
                  width: "33.33%",
                }}
              >
                <HomeTabIcon active={true} />
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
                  width: "33.33%",
                }}
              >
                <ExchangeTabIcon />
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
                  width: "33.33%",
                }}
              >
                <ProfileTabIcon />
              </button>
            </div>

            {/* Home indicator pill — 134×5, #B9C1D9 at 50% opacity, radius 100 */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              <div
                style={{
                  width: 134,
                  height: 5,
                  background: "rgba(185,193,217,0.5)",
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
