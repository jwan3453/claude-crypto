/* eslint-disable @next/next/no-img-element */

// ─── Figma source: BITIFY TRADING APP (Community) - node 2:265 (BITIFY_3) ───
// Frame: 360×800, bg #030313, accent #FF2CDF, purple #704EF4
// MCP-parsed: 2026-03-08

import Head from "next/head";

const PINK = "#FF2CDF";
const PURPLE = "#704EF4";
const BG = "#030313";
const CARD_BG = "#221F3A";
const NAV_BG = "#393A65";
const TEXT_SECONDARY = "#B9C1D9";
const TEXT_GRAY = "#6C757D";
const ICON_BG = "#212125";

// ─── Coin tabs ────────────────────────────────────────────────────────────────
const tabs = ["BTC", "ETH", "LTC", "XRP", "EOS"];

// ─── Chart data (weekly Mon-Sun) ──────────────────────────────────────────────
const days = [
  { day: "Mon", date: "15" },
  { day: "Tue", date: "16" },
  { day: "Wed", date: "17" },
  { day: "Thu", date: "18" },
  { day: "Fri", date: "19" },
  { day: "Sat", date: "20" },
  { day: "Sun", date: "21" },
  { day: "Mon", date: "22" },
];

const yLabels = ["15k", "12k", "9k", "6k", "3k", "0k"];

// ─── SVG paths ────────────────────────────────────────────────────────────────
const areaLinePath =
  "M0,110 C20,105 35,98 55,90 C75,82 90,88 110,75 C130,62 145,65 165,52 C185,39 200,44 220,30 C240,16 255,20 280,8 C290,4 295,3 300,2";
const areaFillPath = `${areaLinePath} L300,130 L0,130 Z`;
const sparklinePath = "M0,18 C8,16 15,14 22,12 C29,10 36,13 43,10 C50,7 57,5 64,3";
const barHeights = [17, 27, 20, 30, 33, 42, 44, 51];
const lineChartPath = "M0,54 C15,48 25,42 40,35 C55,28 65,32 80,22 C95,12 110,15 130,8";

// ─── Icons ────────────────────────────────────────────────────────────────────
function HamburgerIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
      <rect y="0" width="22" height="2.5" rx="1.25" fill="white" />
      <rect y="6.75" width="15" height="2.5" rx="1.25" fill="white" />
      <rect y="13.5" width="22" height="2.5" rx="1.25" fill="white" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="19" height="24" viewBox="0 0 19 24" fill="none">
      <path
        d="M9.5 0C9.5 0 3 3.8 3 11V18L1 20H18L16 18V11C16 3.8 9.5 0 9.5 0Z"
        fill={PINK}
        fillOpacity="0.92"
      />
      <path d="M7 20C7 21.38 8.12 22.5 9.5 22.5C10.88 22.5 12 21.38 12 20" stroke="white" strokeWidth="1.4" />
      <circle cx="15" cy="3.5" r="3.5" fill={PINK} />
    </svg>
  );
}

function BitcoinLogo() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path
        d="M20.7 13.1C19.4 18.3 14.1 21.5 8.9 20.2C3.7 18.9 0.5 13.6 1.8 8.4C3.1 3.2 8.4 0 13.6 1.3C18.8 2.6 22 7.9 20.7 13.1Z"
        fill="#F7931A"
      />
      <path
        d="M15.2 9.2C15.4 7.9 14.4 7.2 13 6.9L13.5 4.9L12.3 4.6L11.8 6.5C11.5 6.4 11.1 6.3 10.8 6.3L11.3 4.3L10.1 4L9.6 6C9.3 5.9 9.1 5.9 8.8 5.8L8.8 5.8L7.2 5.4L6.9 6.7C6.9 6.7 7.8 6.9 7.8 6.9C8.3 7 8.4 7.4 8.4 7.7L7.8 10C7.8 10 7.9 10 7.9 10C7.9 10 7.8 10 7.8 10L7 12.8C6.9 13 6.7 13.2 6.4 13.1C6.4 13.2 5.5 12.9 5.5 12.9L4.9 14.3L6.4 14.7C6.7 14.8 7 14.8 7.3 14.9L6.8 16.9L8 17.2L8.5 15.2C8.8 15.3 9.2 15.4 9.5 15.4L9 17.4L10.2 17.7L10.7 15.7C13 16.1 14.7 15.9 15.4 13.8C16 12.1 15.4 11.1 14.1 10.5C15 10.3 15.7 9.7 15.2 9.2ZM12.9 12.8C12.4 14.5 9.7 13.6 8.9 13.4L9.6 10.7C10.4 10.9 13.5 11.1 12.9 12.8ZM13.4 9.2C13 10.7 10.7 10 10 9.8L10.7 7.3C11.4 7.5 13.9 7.6 13.4 9.2Z"
        fill="white"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none">
      <circle cx="8.5" cy="8.5" r="6.5" stroke="#D3D3D3" strokeWidth="1.8" />
      <path d="M13.5 13.5L17.5 17.5" stroke="#D3D3D3" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <circle cx="8" cy="5" r="1.8" fill="#D3D3D3" />
      <circle cx="8" cy="10" r="1.8" fill="#D3D3D3" />
      <circle cx="8" cy="15" r="1.8" fill="#D3D3D3" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5V19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 8L10 2L18 8V18H13V13H7V18H2V8Z" fill="white" />
    </svg>
  );
}

function ExchangeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 6H16M16 6L13 3M16 6L13 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14H4M4 14L7 11M4 14L7 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Mini bar chart ───────────────────────────────────────────────────────────
function BarChart() {
  const maxH = 54;
  return (
    <div
      className="rounded-xl overflow-hidden relative flex-shrink-0"
      style={{ background: `rgba(34,31,58,0.7)`, width: 134, height: 101 }}
    >
      {/* Grid lines */}
      <svg className="absolute inset-0" width="134" height="101" fill="none">
        {[20, 35, 50, 65, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="134" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        {[25, 50, 75, 100, 125].map((x) => (
          <line key={x} x1={x} y1="10" x2={x} y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
      </svg>
      {/* Bars */}
      <div className="absolute bottom-[14px] left-[16px] flex items-end gap-[6px]">
        {barHeights.map((h, i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: (h / maxH) * 55,
              background:
                i >= 4
                  ? `linear-gradient(to top, ${PINK}, rgba(255,44,223,0.4))`
                  : `linear-gradient(to top, ${PURPLE}, rgba(112,78,244,0.4))`,
              borderRadius: 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Mini line chart ──────────────────────────────────────────────────────────
function LineChart() {
  return (
    <div
      className="rounded-xl overflow-hidden relative flex-shrink-0"
      style={{ background: `rgba(34,31,58,0.7)`, width: 131, height: 101 }}
    >
      {/* Price label — Livvic 600 12px #FFCDEA */}
      <div className="absolute top-[8px] left-[8px]">
        <span
          style={{
            fontFamily: "'Livvic', sans-serif",
            fontWeight: 600,
            fontSize: 12,
            color: "#FFCDEA",
            letterSpacing: "0.01em",
          }}
        >
          $6,500
        </span>
      </div>
      {/* Grid */}
      <svg className="absolute inset-0" width="131" height="101" fill="none">
        {[30, 45, 60, 75].map((y) => (
          <line key={y} x1="0" y1={y} x2="131" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        {[20, 45, 70, 95, 120].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
      </svg>
      {/* Line + area fill */}
      <svg
        className="absolute"
        style={{ left: 0, top: 28 }}
        width="131"
        height="65"
        viewBox="0 0 130 65"
        fill="none"
      >
        <defs>
          <linearGradient id="lineFill2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={PINK} stopOpacity="0.3" />
            <stop offset="100%" stopColor={PINK} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${lineChartPath} L130,65 L0,65 Z`} fill="url(#lineFill2)" />
        <path d={lineChartPath} stroke={PINK} strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function BitifyTest() {
  return (
    <>
      <Head>
        <title>Bitify Trading</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Livvic:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="min-h-screen flex items-start justify-center"
        style={{ background: "#08081a", fontFamily: "'Poppins', sans-serif" }}
      >
        {/* ── Mobile frame 360×800 ──────────────────────────────────── */}
        <div
          className="relative overflow-hidden"
          style={{
            width: 360,
            minHeight: 800,
            background: BG,
            borderRadius: 30,
          }}
        >
          {/* ── Background gradient blobs ───────────────────────────── */}
          {/* Blue blob — Vector 14: 214×137, blur ~205px */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 214,
              height: 137,
              borderRadius: "50%",
              background: "rgba(0,20,255,0.55)",
              top: -50,
              left: -60,
              filter: "blur(90px)",
            }}
          />
          {/* Purple blob — Vector 15: 177×116 */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 177,
              height: 116,
              borderRadius: "50%",
              background: "rgba(128,32,239,0.5)",
              top: -20,
              left: 30,
              filter: "blur(80px)",
            }}
          />
          {/* Pink blob — Vector 16: 84×63 */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 84,
              height: 63,
              borderRadius: "50%",
              background: "rgba(255,44,223,0.55)",
              top: 40,
              left: 100,
              filter: "blur(50px)",
            }}
          />
          {/* Top-right decorative gradient */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(0,20,255,0.3), rgba(255,43,224,0.3))",
              top: -30,
              right: -20,
              filter: "blur(40px)",
            }}
          />

          {/* ── Status bar ─────────────────────────────────────────── */}
          <div className="flex items-center justify-between px-6 pt-3 pb-0">
            <span
              style={{
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              09:41
            </span>
            <div className="flex items-center gap-[6px]">
              {/* Cellular */}
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <rect x="0" y="4" width="3" height="7" rx="0.5" />
                <rect x="4.5" y="2.5" width="3" height="8.5" rx="0.5" />
                <rect x="9" y="0.5" width="3" height="10.5" rx="0.5" />
                <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" opacity="0.35" />
              </svg>
              {/* WiFi */}
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                <path d="M7.5 2.2C9.8 2.2 11.9 3.2 13.3 4.8L14.6 3.4C12.8 1.3 10.3 0 7.5 0C4.7 0 2.2 1.3 0.4 3.4L1.7 4.8C3.1 3.2 5.2 2.2 7.5 2.2Z" fill="white" />
                <path d="M7.5 5C9.1 5 10.5 5.7 11.5 6.8L12.8 5.4C11.4 3.9 9.5 3 7.5 3C5.5 3 3.6 3.9 2.2 5.4L3.5 6.8C4.5 5.7 5.9 5 7.5 5Z" fill="white" />
                <circle cx="7.5" cy="9.5" r="1.8" fill="white" />
              </svg>
              {/* Battery */}
              <div className="flex items-center">
                <div
                  className="flex items-center p-[1.5px]"
                  style={{
                    width: 22,
                    height: 11,
                    borderRadius: 2.67,
                    border: "1px solid rgba(255,255,255,0.35)",
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

          {/* ── Top nav: hamburger + bell ───────────────────────────── */}
          <div className="flex items-center justify-between px-5 pt-3">
            <button
              className="flex items-center justify-center"
              style={{ width: 36, height: 36 }}
            >
              <HamburgerIcon />
            </button>
            <button
              className="flex items-center justify-center"
              style={{ width: 36, height: 36 }}
            >
              <BellIcon />
            </button>
          </div>

          {/* ── Title "Trading" ─────────────────────────────────────── */}
          <div className="px-5 pt-2">
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                margin: 0,
              }}
            >
              Trading
            </h1>
          </div>

          {/* ── Coin tabs ───────────────────────────────────────────── */}
          <div className="flex items-center gap-7 px-5 pt-3">
            {tabs.map((tab) => {
              const active = tab === "BTC";
              return (
                <div key={tab} className="flex flex-col items-center gap-[5px]">
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      fontWeight: active ? 700 : 400,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {tab}
                  </span>
                  {active && (
                    <div
                      style={{
                        width: 27,
                        height: 2,
                        background: PINK,
                        borderRadius: 1,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* ── BTC info row ────────────────────────────────────────── */}
          <div className="flex items-center justify-between px-5 pt-4">
            {/* Left: icon + name */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 45,
                  height: 38,
                  borderRadius: 6,
                  background: ICON_BG,
                }}
              >
                <BitcoinLogo />
              </div>
              <div>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Bitcoin
                </p>
                <p
                  style={{
                    color: TEXT_GRAY,
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "'Poppins', sans-serif",
                    margin: "2px 0 0",
                  }}
                >
                  BTC
                </p>
              </div>
            </div>

            {/* Center: sparkline */}
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
              <defs>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={PINK} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={PINK} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${sparklinePath} L64,24 L0,24 Z`} fill="url(#sparkGrad)" />
              <path
                d={sparklinePath}
                stroke={PINK}
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Right: price + quantity */}
            <div className="text-right">
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif",
                  margin: 0,
                }}
              >
                $26927
              </p>
              <p
                style={{
                  color: TEXT_GRAY,
                  fontSize: 9,
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif",
                  margin: "3px 0 0",
                }}
              >
                2.05 BTC
              </p>
            </div>
          </div>

          {/* ── Main area chart ─────────────────────────────────────── */}
          <div className="flex mt-4 px-4">
            {/* Y-axis */}
            <div
              className="flex flex-col justify-between pr-2 pb-6"
              style={{ height: 180 }}
            >
              {yLabels.map((label) => (
                <span
                  key={label}
                  style={{
                    color: "#EFEFEF",
                    fontSize: 9,
                    fontWeight: 400,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Chart */}
            <div className="flex-1 relative" style={{ height: 180 }}>
              {/* $6,500 tooltip on chart */}
              <div
                className="absolute z-10"
                style={{
                  left: "52%",
                  top: 22,
                  transform: "translateX(-50%)",
                  background: "rgba(255,44,223,0.15)",
                  border: `1px solid rgba(255,44,223,0.4)`,
                  borderRadius: 8,
                  padding: "3px 8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Livvic', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    color: "#FFCDEA",
                  }}
                >
                  $6,500
                </span>
              </div>

              <svg
                className="w-full"
                viewBox="0 0 300 130"
                fill="none"
                preserveAspectRatio="none"
                style={{ height: 145 }}
              >
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FEF0EE" stopOpacity="0.38" />
                    <stop offset="100%" stopColor="#FEF0EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Horizontal grid lines */}
                {[0, 26, 52, 78, 104, 130].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="300"
                    y2={y}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                ))}
                {/* Area fill */}
                <path d={areaFillPath} fill="url(#areaFill)" />
                {/* Line stroke */}
                <path
                  d={areaLinePath}
                  stroke="rgba(255,220,230,0.92)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* End dot */}
                <circle cx="300" cy="2" r="3" fill={PINK} />
                <circle cx="300" cy="2" r="6" fill={PINK} fillOpacity="0.22" />
              </svg>

              {/* X-axis */}
              <div className="flex justify-between mt-1 px-0">
                {days.map((d) => (
                  <div key={d.date} className="flex flex-col items-center">
                    <span
                      style={{
                        color: TEXT_SECONDARY,
                        fontSize: 7,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {d.day}
                    </span>
                    <span
                      style={{
                        color: "#EFEFEF",
                        fontSize: 9,
                        fontWeight: 400,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {d.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mini charts row ─────────────────────────────────────── */}
          <div className="flex gap-[11px] px-5 mt-4">
            <BarChart />
            <LineChart />
          </div>

          {/* ── Buy / Sell buttons ──────────────────────────────────── */}
          {/* Figma: Buy 132×38 #FF2CDF radius16; Sell 131×38 transparent radius16 */}
          <div className="flex gap-4 px-5 mt-5">
            <button
              style={{
                flex: 1,
                height: 38,
                background: PINK,
                borderRadius: 16,
                border: "none",
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
            <button
              style={{
                flex: 1,
                height: 38,
                background: "transparent",
                borderRadius: 16,
                border: "1.5px solid rgba(255,255,255,0.22)",
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
              }}
            >
              Sell
            </button>
          </div>

          {/* ── Spacer ─────────────────────────────────────────────── */}
          <div style={{ height: 90 }} />

          {/* ── Bottom navigation bar ──────────────────────────────── */}
          {/* Figma: Vector 12 = 361×100, fill #393A65 */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: 111,
              background: NAV_BG,
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
            }}
          >
            {/* Nav icons row */}
            <div
              className="flex items-center justify-between"
              style={{ paddingLeft: 28, paddingRight: 28, paddingTop: 20 }}
            >
              {/* Left pair: home + exchange */}
              <div className="flex items-center gap-10">
                <button>
                  <HomeIcon />
                </button>
                <button>
                  <ExchangeIcon />
                </button>
              </div>

              {/* Center FAB: 61×63 ellipse #704EF4 */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: 61,
                  height: 61,
                  borderRadius: "50%",
                  background: PURPLE,
                  marginTop: -38,
                  boxShadow: `0 4px 20px rgba(112,78,244,0.55)`,
                }}
              >
                <PlusIcon />
              </div>

              {/* Right pair: search + more */}
              <div className="flex items-center gap-10">
                <button>
                  <SearchIcon />
                </button>
                <button>
                  <MoreIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
