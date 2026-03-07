import { useState } from "react";
import StatusBar from "@/components/StatusBar";
import TabBar from "@/components/TabBar";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function SettingsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.9 1.9 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85A1.9 1.9 0 0 1 2 12.88Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BitcoinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.4 9.8c.4-.8.2-1.7-.5-2.2.5-.7.6-1.6.1-2.3C14.1 4 12.8 4 11 4H7v14h4.5c2 0 4-.8 4-3 0-1.1-.4-2-.9-2.6l-.2-.6zM9.5 6.5h1.6c.9 0 2 .2 2 1.2 0 1-.9 1.3-1.8 1.3H9.5V6.5zm2.2 9H9.5v-3h2.2c1.1 0 2.2.4 2.2 1.5s-1.1 1.5-2.2 1.5z"
        fill="white"
      />
      <path
        d="M10 4V2M12 4V2M10 20v-2M12 20v-2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Chart Data (Figma node 1:126 — Group 5) ──────────────────────────────────

// SVG paths within 295×140 viewBox, extracted from Figma frame at (47, 305)
const CHART_LINE =
  "M 7,112 C 20,108 33,90 46,84 C 59,78 68,53 82,47 C 96,41 108,69 120,65 C 132,61 145,42 158,38 C 171,34 181,23 194,19 C 207,15 219,32 231,28 C 243,24 253,13 266,9";
const CHART_AREA = `${CHART_LINE} L 266,140 L 7,140 Z`;

// ─── Static Data (from Figma node 1:126) ──────────────────────────────────────

const TOKEN_TABS = [
  { name: "BTC", x: 24, barWidth: 27 },
  { name: "ETH", x: 107, barWidth: 23 },
  { name: "LTC", x: 186, barWidth: 23 },
  { name: "XRP", x: 265, barWidth: 25 },
  { name: "EOS", x: 346, barWidth: 26 },
];

const Y_AXIS = [
  { label: "15k", relTop: 0 },
  { label: "12k", relTop: 34 },
  { label: "9k",  relTop: 71 },
  { label: "6k",  relTop: 108 },
  { label: "3k",  relTop: 145 },
  { label: "0k",  relTop: 182 },
];

const X_AXIS = [
  { day: "Mon", date: "15", svgX: 5 },
  { day: "Tue", date: "16", svgX: 44 },
  { day: "Wed", date: "17", svgX: 79 },
  { day: "Thu", date: "18", svgX: 118 },
  { day: "Fri", date: "19", svgX: 158 },
  { day: "Sat", date: "20", svgX: 193 },
  { day: "Sun", date: "21", svgX: 229 },
  { day: "Mon", date: "22", svgX: 264 },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ModernCrypto() {
  const [activeTab, setActiveTab] = useState("BTC");

  return (
    <div className="min-h-screen bg-[#070707] flex items-start justify-center">
      {/* Mobile container: 375 × 812 px */}
      <div
        className="relative bg-[#070707] overflow-hidden"
        style={{ width: 375, minHeight: 812 }}
      >
        {/* ── Status Bar ──────────────────────────────────────────────── */}
        <StatusBar />

        {/* ── Title: "Trading" ────────────────────────────────────────── */}
        <div className="absolute" style={{ left: 24, top: 76 }}>
          <p
            className="font-poppins text-white"
            style={{ fontSize: 28, fontWeight: 500, lineHeight: "42px" }}
          >
            Trading
          </p>
        </div>

        {/* ── Settings Icon ───────────────────────────────────────────── */}
        <div className="absolute" style={{ right: 32, top: 85, width: 24, height: 24 }}>
          <SettingsIcon />
        </div>

        {/* ── Token Tabs ──────────────────────────────────────────────── */}
        {TOKEN_TABS.map(({ name, x, barWidth }) => {
          const isActive = activeTab === name;
          return (
            <button
              key={name}
              className="absolute font-poppins text-white bg-transparent border-0 p-0 cursor-pointer"
              style={{
                left: x,
                top: 136,
                fontSize: 12,
                fontWeight: isActive ? 700 : 400,
              }}
              onClick={() => setActiveTab(name)}
            >
              {name}
              {isActive && (
                <span
                  className="absolute bottom-[-6px] left-0 bg-[#6552FE]"
                  style={{ width: barWidth, height: 2, display: "block" }}
                />
              )}
            </button>
          );
        })}

        {/* ── Coin Info Row ───────────────────────────────────────────── */}
        {/* BTC Icon */}
        <div
          className="absolute flex items-center justify-center rounded-[6px]"
          style={{ left: 24, top: 181, width: 48, height: 45, backgroundColor: "#212125" }}
        >
          <BitcoinIcon />
        </div>

        {/* Coin Name + Ticker */}
        <div className="absolute" style={{ left: 86, top: 184 }}>
          <p
            className="font-poppins text-white"
            style={{ fontSize: 16, fontWeight: 700, lineHeight: "24px" }}
          >
            Bitcoin
          </p>
          <p
            className="font-poppins"
            style={{ fontSize: 14, fontWeight: 400, color: "#6C757D", lineHeight: "21px" }}
          >
            BTC
          </p>
        </div>

        {/* Price + Amount (right-aligned) */}
        <div
          className="absolute flex flex-col items-end"
          style={{ right: 24, top: 184 }}
        >
          <p
            className="font-poppins text-white"
            style={{ fontSize: 16, fontWeight: 700, lineHeight: "24px" }}
          >
            $26927
          </p>
          <p
            className="font-poppins"
            style={{ fontSize: 10, fontWeight: 700, color: "#6C757D", lineHeight: "15px" }}
          >
            2.05 BTC
          </p>
        </div>

        {/* ── Y-Axis Labels ───────────────────────────────────────────── */}
        {Y_AXIS.map(({ label, relTop }) => (
          <div
            key={label}
            className="absolute font-poppins"
            style={{
              left: 24,
              top: 255 + relTop,
              fontSize: 9,
              fontWeight: 400,
              color: "#EFEFEF",
              lineHeight: "16px",
            }}
          >
            {label}
          </div>
        ))}

        {/* ── Chart SVG ───────────────────────────────────────────────── */}
        <div className="absolute" style={{ left: 47, top: 305 }}>
          <svg
            width="295"
            height="140"
            viewBox="0 0 295 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#6552FE" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#6552FE" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Area fill */}
            <path d={CHART_AREA} fill="url(#chartGradient)" />
            {/* Line */}
            <path
              d={CHART_LINE}
              stroke="#6552FE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Highlight dot at peak */}
            <circle cx="266" cy="9" r="3.5" fill="#6552FE" />
            <circle cx="266" cy="9" r="6" fill="#6552FE" fillOpacity="0.25" />
          </svg>
        </div>

        {/* ── X-Axis Labels ───────────────────────────────────────────── */}
        {X_AXIS.map(({ day, date, svgX }, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center font-poppins"
            style={{ left: 47 + svgX - 10, top: 456, width: 20 }}
          >
            <span style={{ fontSize: 9, fontWeight: 400, color: "#B9C1D9", lineHeight: "11px" }}>
              {day}
            </span>
            <span style={{ fontSize: 12, fontWeight: 400, color: "#EFEFEF", lineHeight: "13px" }}>
              {date}
            </span>
          </div>
        ))}

        {/* ── Buy / Sell Buttons ──────────────────────────────────────── */}
        <button
          className="absolute font-poppins text-white flex items-center justify-center"
          style={{
            left: 24,
            top: 507,
            width: 154,
            height: 38,
            backgroundColor: "#6552FE",
            borderRadius: 16,
            border: "none",
            fontSize: 16,
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          Buy
        </button>
        <button
          className="absolute font-poppins text-white flex items-center justify-center"
          style={{
            left: 195,
            top: 507,
            width: 155,
            height: 38,
            backgroundColor: "transparent",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.6)",
            fontSize: 16,
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          Sell
        </button>

        {/* ── At Price Input ──────────────────────────────────────────── */}
        <div
          className="absolute"
          style={{ left: 24, top: 566, width: 327, height: 55 }}
        >
          <p
            className="font-poppins"
            style={{ fontSize: 13, fontWeight: 400, color: "#B9C1D9", lineHeight: "18px" }}
          >
            At Price | USD
          </p>
          <p
            className="font-poppins text-white"
            style={{ fontSize: 16, fontWeight: 400, lineHeight: "21px", marginTop: 4 }}
          >
            0.031
          </p>
          {/* Active underline */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-[#6552FE]"
            style={{ height: 2 }}
          />
        </div>

        {/* ── Amount Input ────────────────────────────────────────────── */}
        <div
          className="absolute"
          style={{ left: 24, top: 637, width: 327, height: 55 }}
        >
          <p
            className="font-poppins"
            style={{ fontSize: 13, fontWeight: 400, color: "#B9C1D9", lineHeight: "18px" }}
          >
            Amount
          </p>
          <div
            className="flex items-center justify-between"
            style={{ marginTop: 4 }}
          >
            <p
              className="font-poppins text-white"
              style={{ fontSize: 16, fontWeight: 400, lineHeight: "21px" }}
            >
              345 USD
            </p>
            {/* Quick-select percentages */}
            <div className="flex gap-[16px]">
              {["25%", "50%", "100%"].map((pct, i) => (
                <span
                  key={pct}
                  className="font-poppins"
                  style={{
                    fontSize: 11,
                    fontWeight: i === 0 ? 600 : 400,
                    color: i === 0 ? "#FFFFFF" : "#B9C1D9",
                  }}
                >
                  {pct}
                </span>
              ))}
            </div>
          </div>
          {/* Divider */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: 2, backgroundColor: "rgba(185,193,217,0.25)" }}
          />
        </div>

        {/* ── Tab Bar ─────────────────────────────────────────────────── */}
        <TabBar />
      </div>
    </div>
  );
}
