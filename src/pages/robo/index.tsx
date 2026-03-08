/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Home Screen
// Figma: E-Robo Wallet Mobile App (Community) — Home
// Style: Bitget Wallet dark theme × E-Robo design

import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

// ── Coin Data ──────────────────────────────────────────────────────────────────
const COINS = [
  { id: "bitcoin", name: "Bitcoin", ticker: "BTC", price: "$43,250", change: "+3.2%", up: true, amount: "0.52 BTC", usd: "$22,490", color: "#F7931A", abbr: "BTC" },
  { id: "ethereum", name: "Ethereum", ticker: "ETH", price: "$2,840", change: "-1.1%", up: false, amount: "2.4 ETH", usd: "$6,816", color: "#627EEA", abbr: "ETH" },
  { id: "solana", name: "Solana", ticker: "SOL", price: "$98.50", change: "+5.6%", up: true, amount: "12 SOL", usd: "$1,182", color: "#9945FF", abbr: "SOL" },
  { id: "cardano", name: "Cardano", ticker: "ADA", price: "$0.62", change: "+0.8%", up: true, amount: "500 ADA", usd: "$310", color: "#0033AD", abbr: "ADA" },
];

// ── Sparkline SVG ─────────────────────────────────────────────────────────────
function Sparkline({ up }: { up: boolean }) {
  const color = up ? R.GREEN : R.RED;
  const path = up
    ? "M0 20 L8 16 L16 18 L24 12 L32 14 L40 8 L48 5 L56 10 L64 4"
    : "M0 4 L8 8 L16 6 L24 12 L32 10 L40 16 L48 14 L56 18 L64 20";
  return (
    <svg width="64" height="24" viewBox="0 0 64 24" fill="none">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id={`sg-${up}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L64 24 L0 24 Z`} fill={`url(#sg-${up})`} />
    </svg>
  );
}

// ── Coin Avatar ────────────────────────────────────────────────────────────────
function CoinAvatar({ abbr, color }: { abbr: string; color: string }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${color}33` }}>
      <span style={{ color, fontSize: 11, fontWeight: 700 }}>{abbr}</span>
    </div>
  );
}

// ── Quick Action Button ────────────────────────────────────────────────────────
function QuickAction({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 transition-all duration-150 active:scale-95"
      style={{ flex: 1 }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: R.GLASS,
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid rgba(255,255,255,0.08)`,
          transition: "background 0.15s",
        }}
        className="hover:bg-[rgba(0,240,255,0.1)]"
      >
        {icon}
      </div>
      <span style={{ color: R.TEXT2, fontSize: 11, fontWeight: 500 }}>{label}</span>
    </button>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
function SendIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" /><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke={R.ACCENT} strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}
function ReceiveIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function SwapIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 16V4m0 0L4 7m3-3l3 3" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 8v12m0 0l3-3m-3 3l-3-3" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function BuyIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={R.ACCENT} strokeWidth="1.5" /><path d="M12 7v10M7 12h10" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function BellIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={R.TEXT2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.73 21a2 2 0 01-3.46 0" stroke={R.TEXT2} strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

// ── Robot SVG mascot ──────────────────────────────────────────────────────────
function RoboMascot() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.6">
      {/* Body */}
      <rect x="20" y="30" width="40" height="35" rx="8" fill={R.ACCENT} fillOpacity="0.15" stroke={R.ACCENT} strokeWidth="1" strokeOpacity="0.5" />
      {/* Head */}
      <rect x="25" y="12" width="30" height="24" rx="6" fill={R.ACCENT} fillOpacity="0.2" stroke={R.ACCENT} strokeWidth="1" strokeOpacity="0.6" />
      {/* Eyes */}
      <circle cx="33" cy="22" r="4" fill={R.ACCENT} fillOpacity="0.8" />
      <circle cx="47" cy="22" r="4" fill={R.ACCENT} fillOpacity="0.8" />
      <circle cx="33" cy="22" r="2" fill="white" />
      <circle cx="47" cy="22" r="2" fill="white" />
      {/* Antenna */}
      <line x1="40" y1="12" x2="40" y2="4" stroke={R.ACCENT} strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="40" cy="3" r="2" fill={R.ACCENT} fillOpacity="0.8" />
      {/* Arms */}
      <rect x="8" y="34" width="12" height="6" rx="3" fill={R.ACCENT} fillOpacity="0.2" stroke={R.ACCENT} strokeWidth="1" strokeOpacity="0.4" />
      <rect x="60" y="34" width="12" height="6" rx="3" fill={R.ACCENT} fillOpacity="0.2" stroke={R.ACCENT} strokeWidth="1" strokeOpacity="0.4" />
      {/* Chest panel */}
      <rect x="28" y="38" width="24" height="16" rx="4" fill={R.ACCENT} fillOpacity="0.1" stroke={R.ACCENT} strokeWidth="0.5" strokeOpacity="0.4" />
      <rect x="32" y="42" width="6" height="4" rx="1" fill={R.ACCENT} fillOpacity="0.4" />
      <rect x="42" y="42" width="6" height="4" rx="1" fill={R.ACCENT} fillOpacity="0.4" />
      {/* Legs */}
      <rect x="27" y="65" width="10" height="10" rx="3" fill={R.ACCENT} fillOpacity="0.15" stroke={R.ACCENT} strokeWidth="1" strokeOpacity="0.4" />
      <rect x="43" y="65" width="10" height="10" rx="3" fill={R.ACCENT} fillOpacity="0.15" stroke={R.ACCENT} strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboHome() {
  const router = useRouter();

  return (
    <RoboLayout title="E-Robo Wallet — Home">
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-3">
        <div className="flex items-center gap-3">
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${R.PURPLE} 0%, ${R.ACCENT} 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 16 }}>👤</span>
          </div>
          <div>
            <p style={{ color: R.TEXT2, fontSize: 12 }}>Good Morning,</p>
            <p style={{ color: R.TEXT, fontSize: 15, fontWeight: 600 }}>Alex Carter</p>
          </div>
        </div>
        <button onClick={() => router.push("/robo/alerts")} className="transition-opacity hover:opacity-70 active:opacity-50">
          <BellIcon />
        </button>
      </div>

      {/* Balance Card */}
      <div className="px-5 pb-5">
        <div
          style={{
            borderRadius: R.RADIUS_LG,
            background: `linear-gradient(135deg, ${R.PURPLE}cc 0%, #5B5BD0 40%, ${R.ACCENT}44 100%)`,
            padding: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow orbs */}
          <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: `${R.ACCENT}22`, filter: "blur(30px)" }} />
          <div style={{ position: "absolute", bottom: -30, left: 20, width: 100, height: 100, borderRadius: "50%", background: `${R.PURPLE}33`, filter: "blur(25px)" }} />

          {/* Robot mascot */}
          <div style={{ position: "absolute", right: 12, bottom: 0, opacity: 0.7 }}>
            <RoboMascot />
          </div>

          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 6 }}>Total Balance</p>
          <p style={{ color: "white", fontSize: 32, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.1 }}>$30,798.00</p>
          <div className="flex items-center gap-1.5 mt-2">
            <div style={{ background: "rgba(72,212,158,0.2)", borderRadius: 999, padding: "2px 8px" }} className="flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 8V2M2.5 4.5L5 2l2.5 2.5" stroke={R.GREEN} strokeWidth="1.5" strokeLinecap="round" /></svg>
              <span style={{ color: R.GREEN, fontSize: 12, fontWeight: 600 }}>+2.4%</span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>Today</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 pb-6">
        <div className="flex items-center justify-around">
          <QuickAction icon={<SendIcon />} label="Send" onClick={() => router.push("/robo/send")} />
          <QuickAction icon={<ReceiveIcon />} label="Receive" onClick={() => router.push("/robo/receive")} />
          <QuickAction icon={<SwapIcon />} label="Swap" onClick={() => router.push("/robo/swap")} />
          <QuickAction icon={<BuyIcon />} label="Buy" onClick={() => router.push("/robo/market")} />
        </div>
      </div>

      {/* My Assets */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-4">
          <span style={{ color: R.TEXT, fontSize: 17, fontWeight: 600 }}>My Assets</span>
          <button onClick={() => router.push("/robo/wallet")} style={{ color: R.ACCENT, fontSize: 13, fontWeight: 500 }} className="hover:opacity-70 transition-opacity">See All</button>
        </div>

        <div className="flex flex-col gap-3">
          {COINS.map((coin) => (
            <button
              key={coin.id}
              onClick={() => router.push(`/robo/coin/${coin.id}`)}
              className="flex items-center gap-3 w-full text-left transition-all duration-150 active:scale-[0.98]"
              style={{
                background: R.GLASS,
                borderRadius: R.RADIUS_MD,
                padding: "14px 16px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <CoinAvatar abbr={coin.abbr} color={coin.color} />
              <div style={{ flex: 1 }}>
                <p style={{ color: R.TEXT, fontSize: 15, fontWeight: 600 }}>{coin.name}</p>
                <p style={{ color: R.TEXT2, fontSize: 12 }}>{coin.ticker}</p>
              </div>
              <Sparkline up={coin.up} />
              <div style={{ textAlign: "right", minWidth: 80 }}>
                <p style={{ color: R.TEXT, fontSize: 14, fontWeight: 600 }}>{coin.usd}</p>
                <p style={{ color: coin.up ? R.GREEN : R.RED, fontSize: 12, fontWeight: 500 }}>{coin.change}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom padding */}
      <div style={{ height: 20 }} />
    </RoboLayout>
  );
}
