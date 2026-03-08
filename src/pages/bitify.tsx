/* eslint-disable @next/next/no-img-element */

// ─── Coin data ───────────────────────────────────────────────────────────────
const coins = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$43,250.80",
    change: "+2.45%",
    up: true,
    vol: "$28.4B",
    color: "#F7931A",
    sparkline: "M0,30 C10,28 20,22 30,20 C40,18 50,24 60,18 C70,12 80,10 90,8 C95,7 98,6 100,4",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,318.44",
    change: "+1.82%",
    up: true,
    vol: "$14.2B",
    color: "#627EEA",
    sparkline: "M0,28 C10,26 20,20 30,22 C40,24 50,16 60,14 C70,12 80,8 90,10 C95,9 98,7 100,5",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$98.72",
    change: "-0.94%",
    up: false,
    vol: "$3.8B",
    color: "#9945FF",
    sparkline: "M0,10 C10,12 20,16 30,14 C40,12 50,18 60,22 C70,24 80,26 90,24 C95,23 98,25 100,28",
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: "$312.15",
    change: "+0.57%",
    up: true,
    vol: "$1.9B",
    color: "#F3BA2F",
    sparkline: "M0,22 C10,20 20,18 30,16 C40,15 50,14 60,13 C70,12 80,11 90,10 C95,9 98,8 100,7",
  },
  {
    symbol: "XRP",
    name: "Ripple",
    price: "$0.6234",
    change: "-1.20%",
    up: false,
    vol: "$1.4B",
    color: "#00AAE4",
    sparkline: "M0,12 C10,14 20,18 30,16 C40,14 50,20 60,22 C70,24 80,22 90,26 C95,27 98,28 100,30",
  },
];

// ─── Chart path (BTC 24h simulated) ──────────────────────────────────────────
const chartPath =
  "M0,80 C15,75 25,72 35,65 C45,58 50,60 60,52 C70,44 75,48 85,38 C95,28 105,30 115,22 C125,14 135,18 145,12 C155,6 165,8 175,4 C185,0 195,2 210,5 C225,8 235,6 250,10 C260,13 268,11 280,8 C290,5 298,4 300,3";

// ─── Tab bar icons ────────────────────────────────────────────────────────────
function HomeIcon({ active }: { active: boolean }) {
  const c = active ? "#00C896" : "#4A5568";
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 9L11 2L19 9V19C19 19.55 18.55 20 18 20H14V15H8V20H4C3.45 20 3 19.55 3 19V9Z" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function MarketIcon({ active }: { active: boolean }) {
  const c = active ? "#00C896" : "#4A5568";
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="14" width="3" height="5" rx="1" fill={c} />
      <rect x="9.5" y="9" width="3" height="10" rx="1" fill={c} />
      <rect x="16" y="4" width="3" height="15" rx="1" fill={c} />
    </svg>
  );
}
function TradeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="url(#tg)" />
      <path d="M9 14H19M15 10L19 14L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="tg" x1="0" y1="0" x2="28" y2="28">
          <stop stopColor="#00C896" />
          <stop offset="1" stopColor="#0086D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
function WalletIcon({ active }: { active: boolean }) {
  const c = active ? "#00C896" : "#4A5568";
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="6" width="18" height="13" rx="2" stroke={c} strokeWidth="1.8" />
      <path d="M2 10H20" stroke={c} strokeWidth="1.8" />
      <circle cx="16" cy="14" r="1.5" fill={c} />
    </svg>
  );
}
function ProfileIcon({ active }: { active: boolean }) {
  const c = active ? "#00C896" : "#4A5568";
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="7" r="4" stroke={c} strokeWidth="1.8" />
      <path d="M2 19C2 15.69 6.03 13 11 13C15.97 13 20 15.69 20 19" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ─── Sparkline mini chart ─────────────────────────────────────────────────────
function Spark({ path, up }: { path: string; up: boolean }) {
  return (
    <svg width="60" height="32" viewBox="0 0 100 36" fill="none">
      <path d={path} stroke={up ? "#00C896" : "#FF5B5B"} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Bitify() {
  return (
    <div className="min-h-screen bg-[#0D1117] flex items-start justify-center py-0">
      {/* Mobile frame 375 × 812 */}
      <div className="relative bg-[#0D1117] overflow-hidden" style={{ width: 375, minHeight: 812 }}>

        {/* ── Status bar ────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 pt-4 pb-0">
          <span className="text-white text-[13px] font-semibold">9:41</span>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
              <rect x="0" y="4" width="3" height="7" rx="0.5" />
              <rect x="4.5" y="2.5" width="3" height="8.5" rx="0.5" />
              <rect x="9" y="0.5" width="3" height="10.5" rx="0.5" />
              <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" opacity="0.3" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 2.4C10.6 2.4 12.9 3.5 14.5 5.3L16 3.7C14 1.4 11.2 0 8 0C4.8 0 2 1.4 0 3.7L1.5 5.3C3.1 3.5 5.4 2.4 8 2.4Z" fill="white" />
              <path d="M8 5.4C9.8 5.4 11.4 6.2 12.6 7.4L14.1 5.8C12.5 4.2 10.4 3.2 8 3.2C5.6 3.2 3.5 4.2 1.9 5.8L3.4 7.4C4.6 6.2 6.2 5.4 8 5.4Z" fill="white" />
              <circle cx="8" cy="10" r="2" fill="white" />
            </svg>
            <div className="flex items-center gap-0.5">
              <div className="w-[22px] h-[11px] rounded-[2.5px] border border-white/50 flex items-center p-[1.5px]">
                <div className="h-full bg-white rounded-[1px]" style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Header ────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 pt-5 pb-0">
          <div>
            <p className="text-[#7B8FA3] text-[13px] font-medium">Good morning</p>
            <h1 className="text-white text-[20px] font-bold leading-snug">Alex Morgan 👋</h1>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C896] to-[#0086D4] flex items-center justify-center">
              <span className="text-white text-[15px] font-bold">AM</span>
            </div>
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#00C896] rounded-full border-2 border-[#0D1117]" />
          </div>
        </div>

        {/* ── Portfolio Card ─────────────────────────────────────── */}
        <div className="mx-5 mt-5 rounded-[20px] overflow-hidden" style={{
          background: "linear-gradient(135deg, #0A3D2E 0%, #062A42 50%, #0E1A3A 100%)",
          border: "1px solid rgba(0,200,150,0.2)",
        }}>
          {/* Glow circles */}
          <div className="absolute w-[180px] h-[180px] rounded-full" style={{
            background: "radial-gradient(circle, rgba(0,200,150,0.15) 0%, transparent 70%)",
            left: 20, top: 220, pointerEvents: "none",
          }} />

          <div className="px-5 pt-5 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00C896]" />
                <span className="text-[#00C896] text-[12px] font-semibold tracking-wide">TOTAL PORTFOLIO</span>
              </div>
              <button className="bg-white/10 rounded-full px-3 py-1 text-[11px] text-white/70 font-medium">24h ▾</button>
            </div>

            <p className="text-white text-[34px] font-bold leading-none tracking-tight">
              $84,320<span className="text-[22px]">.58</span>
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#00C896] text-[13px] font-semibold">▲ +$1,842.30</span>
              <span className="text-[#00C896]/70 text-[13px]">(+2.23%) today</span>
            </div>

            {/* Mini chart */}
            <div className="mt-4 relative">
              <svg className="w-full" viewBox="0 0 300 90" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00C896" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`${chartPath} L300,90 L0,90 Z`}
                  fill="url(#chartFill)"
                />
                <path d={chartPath} stroke="#00C896" strokeWidth="2" strokeLinecap="round" fill="none" />
                <circle cx="300" cy="3" r="4" fill="#00C896" />
                <circle cx="300" cy="3" r="7" fill="#00C896" fillOpacity="0.25" />
              </svg>

              {/* Price tooltip */}
              <div className="absolute top-0 right-0 bg-[#00C896] rounded-lg px-2.5 py-1.5 -translate-y-1">
                <span className="text-[#0D1117] text-[11px] font-bold">$43,250</span>
              </div>
            </div>

            {/* Time tabs */}
            <div className="flex gap-1 mt-3">
              {["1H", "24H", "1W", "1M", "1Y"].map((t) => (
                <button
                  key={t}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                    t === "24H"
                      ? "bg-[#00C896] text-[#0D1117]"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
            {[
              { label: "Profit", value: "+$6,420", color: "#00C896" },
              { label: "Loss", value: "-$1,230", color: "#FF5B5B" },
              { label: "Assets", value: "12", color: "white" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center py-3">
                <span className="text-[10px] text-white/40 font-medium">{s.label}</span>
                <span className="text-[13px] font-bold mt-0.5" style={{ color: s.color }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Action Buttons ─────────────────────────────────────── */}
        <div className="flex gap-3 px-5 mt-5">
          {[
            { label: "Buy", icon: "↑", primary: true },
            { label: "Sell", icon: "↓", primary: false },
            { label: "Swap", icon: "⇌", primary: false },
            { label: "Transfer", icon: "→", primary: false },
          ].map((btn) => (
            <button
              key={btn.label}
              className="flex-1 flex flex-col items-center gap-1.5 py-3 rounded-2xl text-[11px] font-semibold transition-all"
              style={{
                background: btn.primary
                  ? "linear-gradient(135deg, #00C896, #0086D4)"
                  : "rgba(255,255,255,0.06)",
                color: btn.primary ? "#0D1117" : "rgba(255,255,255,0.7)",
                border: btn.primary ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="text-[16px] font-bold">{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </div>

        {/* ── Market Section ─────────────────────────────────────── */}
        <div className="px-5 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-[17px] font-bold">Market</h2>
            <button className="text-[#00C896] text-[13px] font-semibold">See All</button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
            {["All", "Top Gainers", "Top Losers", "New Listing"].map((tab) => (
              <button
                key={tab}
                className="shrink-0 px-3 py-1.5 rounded-full text-[12px] font-semibold"
                style={{
                  background: tab === "All" ? "rgba(0,200,150,0.15)" : "rgba(255,255,255,0.05)",
                  color: tab === "All" ? "#00C896" : "rgba(255,255,255,0.4)",
                  border: tab === "All" ? "1px solid rgba(0,200,150,0.3)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Coin list */}
          <div className="flex flex-col gap-2">
            {coins.map((coin) => (
              <div
                key={coin.symbol}
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Icon + name */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white"
                    style={{ background: `${coin.color}22`, border: `1.5px solid ${coin.color}55` }}
                  >
                    <span style={{ color: coin.color }}>{coin.symbol[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-semibold leading-tight">{coin.symbol}</p>
                    <p className="text-[#7B8FA3] text-[11px] mt-0.5">{coin.name}</p>
                  </div>
                </div>

                {/* Sparkline */}
                <Spark path={coin.sparkline} up={coin.up} />

                {/* Price + change */}
                <div className="text-right">
                  <p className="text-white text-[14px] font-semibold">{coin.price}</p>
                  <p
                    className="text-[12px] font-semibold mt-0.5"
                    style={{ color: coin.up ? "#00C896" : "#FF5B5B" }}
                  >
                    {coin.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom spacer for tab bar ──────────────────────────── */}
        <div className="h-24" />

        {/* ── Tab Bar ───────────────────────────────────────────── */}
        <div
          className="fixed flex items-end justify-around px-4 pb-4 pt-3"
          style={{
            bottom: 0,
            width: 375,
            background: "linear-gradient(to top, #0D1117 80%, transparent)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            { icon: <HomeIcon active={true} />, label: "Home", active: true },
            { icon: <MarketIcon active={false} />, label: "Market", active: false },
            { icon: <TradeIcon />, label: "", trade: true },
            { icon: <WalletIcon active={false} />, label: "Wallet", active: false },
            { icon: <ProfileIcon active={false} />, label: "Profile", active: false },
          ].map((tab, i) =>
            tab.trade ? (
              <button key={i} className="-mt-5 flex flex-col items-center gap-1">
                {tab.icon}
              </button>
            ) : (
              <button key={i} className="flex flex-col items-center gap-1">
                {tab.icon}
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: tab.active ? "#00C896" : "#4A5568" }}
                >
                  {tab.label}
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
