/* eslint-disable @next/next/no-img-element */

// ─── Figma source: BITIFY TRADING APP (Community) - node 2:265 (BITIFY_3) ───
// Frame: 360×800, bg #040313, accent #FF2CDF, purple #704EF4

const PINK = "#FF2CDF";
const PURPLE = "#704EF4";
const BG = "#040313";
const CARD_BG = "#221F3A";
const NAV_BG = "#393A65";
const TEXT_SECONDARY = "#B9C1D9";
const TEXT_GRAY = "#6C757D";

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

// Y-axis labels
const yLabels = ["15k", "12k", "9k", "6k", "3k", "0k"];

// ─── SVG area chart path ───────────────────────────────────────────────────────
const areaLinePath =
  "M0,110 C20,105 35,98 55,90 C75,82 90,88 110,75 C130,62 145,65 165,52 C185,39 200,44 220,30 C240,16 255,20 280,8 C290,4 295,3 300,2";
const areaFillPath = `${areaLinePath} L300,130 L0,130 Z`;

// Sparkline for BTC header
const sparklinePath = "M0,18 C8,16 15,14 22,12 C29,10 36,13 43,10 C50,7 57,5 64,3";

// Bar chart bars (left mini chart)
const barHeights = [17, 27, 20, 30, 33, 42, 44, 51];

// Line chart (right mini chart)
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
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
      <path
        d="M10 0C10 0 4 3.5 4 10V16L2 18H18L16 16V10C16 3.5 10 0 10 0Z"
        fill={PINK}
        fillOpacity="0.9"
      />
      <path d="M8 18C8 19.1 8.9 20 10 20C11.1 20 12 19.1 12 18" stroke="white" strokeWidth="1.5" />
      <circle cx="15" cy="3" r="3" fill={PINK} />
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

function BackArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke="#D3D3D3" strokeWidth="1.8" />
      <path d="M13.5 13.5L17 17" stroke="#D3D3D3" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="4" cy="10" r="1.5" fill="#D3D3D3" />
      <circle cx="10" cy="10" r="1.5" fill="#D3D3D3" />
      <circle cx="16" cy="10" r="1.5" fill="#D3D3D3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1L9.8 6H15L10.6 9.1L12.4 14L8 10.9L3.6 14L5.4 9.1L1 6H6.2L8 1Z"
        fill="white"
      />
    </svg>
  );
}

// ─── Mini bar chart ───────────────────────────────────────────────────────────
function BarChart() {
  const maxH = 54;
  return (
    <div className="rounded-xl overflow-hidden relative" style={{ background: CARD_BG, width: 134, height: 101 }}>
      {/* Grid lines */}
      <svg className="absolute inset-0" width="134" height="101" fill="none">
        {[20, 35, 50, 65, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="134" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        {[25, 50, 75, 100, 125].map((x) => (
          <line key={x} x1={x} y1="10" x2={x} y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
      </svg>
      {/* Bars */}
      <div className="absolute bottom-[16px] left-[18px] flex items-end gap-[6px]">
        {barHeights.map((h, i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: (h / maxH) * 55,
              background: i >= 4
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
    <div className="rounded-xl overflow-hidden relative" style={{ background: CARD_BG, width: 131, height: 101 }}>
      {/* Price label */}
      <div className="absolute top-[8px] left-[8px]">
        <span className="text-[10px] font-semibold" style={{ color: "#FFCDE1" }}>$6,500</span>
      </div>
      {/* Grid */}
      <svg className="absolute inset-0" width="131" height="101" fill="none">
        {[30, 45, 60, 75].map((y) => (
          <line key={y} x1="0" y1={y} x2="131" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        {[20, 40, 60, 80, 100, 120].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="85" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
      </svg>
      {/* Line + fill */}
      <svg className="absolute" style={{ left: 0, top: 30 }} width="131" height="60" viewBox="0 0 130 60" fill="none">
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={PINK} stopOpacity="0.35" />
            <stop offset="100%" stopColor={PINK} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${lineChartPath} L130,60 L0,60 Z`} fill="url(#lineFill)" />
        <path d={lineChartPath} stroke={PINK} strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function BitifyNew() {
  return (
    <div className="min-h-screen flex items-start justify-center py-0" style={{ background: "#0a0a12" }}>
      {/* Mobile frame 360×800 */}
      <div
        className="relative overflow-hidden"
        style={{ width: 360, minHeight: 800, background: BG }}
      >
        {/* ── Background gradient blobs ─────────────────────────────── */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,20,255,0.5) 0%, transparent 70%)",
            top: -80,
            left: -60,
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(128,32,239,0.45) 0%, transparent 70%)",
            top: -40,
            left: 20,
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,44,223,0.4) 0%, transparent 70%)",
            top: 20,
            left: 80,
            filter: "blur(50px)",
          }}
        />

        {/* ── Status bar ───────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-5 pt-3 pb-0">
          <span className="text-white text-[15px] font-semibold">09:41</span>
          <div className="flex items-center gap-1.5">
            {/* Signal bars */}
            <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
              <rect x="0" y="4" width="3" height="7" rx="0.5" />
              <rect x="4.5" y="2.5" width="3" height="8.5" rx="0.5" />
              <rect x="9" y="0.5" width="3" height="10.5" rx="0.5" />
              <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" opacity="0.3" />
            </svg>
            {/* WiFi */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 2.4C10.6 2.4 12.9 3.5 14.5 5.3L16 3.7C14 1.4 11.2 0 8 0C4.8 0 2 1.4 0 3.7L1.5 5.3C3.1 3.5 5.4 2.4 8 2.4Z" fill="white" />
              <path d="M8 5.4C9.8 5.4 11.4 6.2 12.6 7.4L14.1 5.8C12.5 4.2 10.4 3.2 8 3.2C5.6 3.2 3.5 4.2 1.9 5.8L3.4 7.4C4.6 6.2 6.2 5.4 8 5.4Z" fill="white" />
              <circle cx="8" cy="10" r="2" fill="white" />
            </svg>
            {/* Battery */}
            <div className="flex items-center gap-0.5">
              <div className="w-[22px] h-[11px] rounded-[2.5px] border border-white/50 flex items-center p-[1.5px]">
                <div className="h-full bg-white rounded-[1px]" style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Top navigation ─────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-5 pt-4 pb-0">
          <button className="flex items-center justify-center w-9 h-9">
            <HamburgerIcon />
          </button>
          <button className="flex items-center justify-center w-9 h-9">
            <BellIcon />
          </button>
        </div>

        {/* ── Title ────────────────────────────────────────────────────── */}
        <div className="px-5 pt-3 pb-0">
          <h1 className="text-white text-[20px] font-semibold">Trading</h1>
        </div>

        {/* ── Coin tabs ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-6 px-5 pt-3 pb-0">
          {tabs.map((tab) => {
            const active = tab === "BTC";
            return (
              <div key={tab} className="flex flex-col items-center gap-1">
                <span
                  className="text-[12px]"
                  style={{
                    color: "white",
                    fontWeight: active ? 700 : 400,
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

        {/* ── BTC info card ─────────────────────────────────────────────── */}
        <div
          className="mx-5 mt-4 rounded-2xl px-4 py-3 flex items-center justify-between"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Left: icon + name */}
          <div className="flex items-center gap-3">
            <div
              className="w-[45px] h-[38px] rounded-xl flex items-center justify-center"
              style={{ background: "#21212 5" }}
            >
              <BitcoinLogo />
            </div>
            <div>
              <p className="text-white text-[16px] font-bold leading-tight">Bitcoin</p>
              <p className="text-[14px] mt-0.5" style={{ color: TEXT_GRAY }}>BTC</p>
            </div>
          </div>

          {/* Center: sparkline */}
          <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PINK} stopOpacity="0.4" />
                <stop offset="100%" stopColor={PINK} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${sparklinePath} L64,24 L0,24 Z`}
              fill="url(#sparkGrad)"
            />
            <path d={sparklinePath} stroke={PINK} strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </svg>

          {/* Right: price */}
          <div className="text-right">
            <p className="text-white text-[15px] font-bold">$26,927</p>
            <p className="text-[9px] font-bold mt-0.5" style={{ color: TEXT_GRAY }}>2.05 BTC</p>
          </div>
        </div>

        {/* ── Large chart ────────────────────────────────────────────────── */}
        <div className="flex mt-4 px-4">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between pr-2 pb-6" style={{ height: 180 }}>
            {yLabels.map((label) => (
              <span key={label} className="text-[9px]" style={{ color: "#EFEFEF" }}>
                {label}
              </span>
            ))}
          </div>

          {/* Chart area */}
          <div className="flex-1 relative" style={{ height: 180 }}>
            {/* Price tooltip */}
            <div
              className="absolute left-[50%] top-[28px] -translate-x-1/2 px-2 py-1 rounded-lg"
              style={{ background: "rgba(255,44,223,0.18)", border: `1px solid ${PINK}55` }}
            >
              <span className="text-[10px] font-semibold" style={{ color: "#FFCDE1" }}>$6,500</span>
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
                  <stop offset="0%" stopColor="#FEF0EF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FEF0EF" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Horizontal grid lines */}
              {[0, 26, 52, 78, 104, 130].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              ))}
              {/* Area fill */}
              <path d={areaFillPath} fill="url(#areaFill)" />
              {/* Line */}
              <path d={areaLinePath} stroke="rgba(255,220,230,0.9)" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Dot at current price */}
              <circle cx="300" cy="2" r="3" fill={PINK} />
              <circle cx="300" cy="2" r="6" fill={PINK} fillOpacity="0.25" />
            </svg>

            {/* X-axis dates */}
            <div className="flex justify-between mt-1">
              {days.map((d) => (
                <div key={d.date} className="flex flex-col items-center">
                  <span className="text-[7px]" style={{ color: TEXT_SECONDARY }}>{d.day}</span>
                  <span className="text-[9px] font-medium" style={{ color: "#EFEFEF" }}>{d.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mini charts row ────────────────────────────────────────────── */}
        <div className="flex gap-3 px-5 mt-4">
          <BarChart />
          <LineChart />
        </div>

        {/* ── Buy / Sell buttons ─────────────────────────────────────────── */}
        <div className="flex gap-4 px-5 mt-5">
          <button
            className="flex-1 flex items-center justify-center py-3 rounded-xl text-white text-[16px] font-semibold"
            style={{ background: PINK }}
          >
            Buy
          </button>
          <button
            className="flex-1 flex items-center justify-center py-3 rounded-xl text-white text-[16px] font-semibold"
            style={{
              background: "transparent",
              border: `1.5px solid rgba(255,255,255,0.2)`,
            }}
          >
            Sell
          </button>
        </div>

        {/* ── Bottom navigation bar ──────────────────────────────────────── */}
        <div className="h-6" />
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 pb-4 pt-3"
          style={{
            background: `linear-gradient(to top, ${NAV_BG} 60%, transparent)`,
          }}
        >
          {/* Left: back + search */}
          <div className="flex items-center gap-4">
            <button><BackArrow /></button>
            <button><SearchIcon /></button>
          </div>

          {/* Center: purple circle with star */}
          <div
            className="w-[60px] h-[60px] rounded-full flex items-center justify-center -mt-6 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${PURPLE}, #9060FF)`,
              boxShadow: `0 4px 20px rgba(112,78,244,0.5)`,
            }}
          >
            <StarIcon />
          </div>

          {/* Right: more */}
          <div className="flex items-center gap-4">
            <button><MoreIcon /></button>
            <button>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                style={{ background: PURPLE }}
              >
                JD
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
