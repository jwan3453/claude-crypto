/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Market Screen

import { useState } from "react";
import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

const FILTERS = ["All", "Gainers", "Losers", "New"] as const;
type Filter = (typeof FILTERS)[number];

const ALL_COINS = [
  { id: "bitcoin", rank: 1, name: "Bitcoin", ticker: "BTC", price: "$43,250.00", change: "+3.2%", up: true, mcap: "$843B", color: "#F7931A" },
  { id: "ethereum", rank: 2, name: "Ethereum", ticker: "ETH", price: "$2,840.00", change: "-1.1%", up: false, mcap: "$341B", color: "#627EEA" },
  { id: "bnb", rank: 3, name: "BNB", ticker: "BNB", price: "$312.50", change: "+2.8%", up: true, mcap: "$48B", color: "#F3BA2F" },
  { id: "solana", rank: 4, name: "Solana", ticker: "SOL", price: "$98.50", change: "+5.6%", up: true, mcap: "$43B", color: "#9945FF" },
  { id: "cardano", rank: 5, name: "Cardano", ticker: "ADA", price: "$0.62", change: "+0.8%", up: true, mcap: "$22B", color: "#0033AD" },
  { id: "xrp", rank: 6, name: "XRP", ticker: "XRP", price: "$0.54", change: "-0.4%", up: false, mcap: "$29B", color: "#00AAE4" },
  { id: "doge", rank: 7, name: "Dogecoin", ticker: "DOGE", price: "$0.083", change: "+1.9%", up: true, mcap: "$11B", color: "#C2A633" },
  { id: "dot", rank: 8, name: "Polkadot", ticker: "DOT", price: "$7.20", change: "-2.3%", up: false, mcap: "$9B", color: "#E6007A" },
  { id: "link", rank: 9, name: "Chainlink", ticker: "LINK", price: "$14.50", change: "+4.1%", up: true, mcap: "$8B", color: "#2A5ADA" },
  { id: "avax", rank: 10, name: "Avalanche", ticker: "AVAX", price: "$36.80", change: "-0.7%", up: false, mcap: "$14B", color: "#E84142" },
];

function Sparkline({ up }: { up: boolean }) {
  const color = up ? R.GREEN : R.RED;
  const pts = up
    ? [[0, 18], [8, 14], [18, 16], [26, 10], [36, 12], [44, 7], [52, 9], [60, 4]]
    : [[0, 4], [8, 8], [18, 6], [26, 13], [36, 11], [44, 16], [52, 14], [60, 19]];
  const d = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
  return (
    <svg width="60" height="22" viewBox="0 0 60 22" fill="none">
      <path d={d} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoinAvatar({ ticker, color }: { ticker: string; color: string }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${color}33` }}>
      <span style={{ color, fontSize: 10, fontWeight: 700 }}>{ticker.slice(0, 3)}</span>
    </div>
  );
}

function SearchIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={R.TEXT3} strokeWidth="1.5" /><path d="M16.5 16.5L21 21" stroke={R.TEXT3} strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export default function RoboMarket() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");

  const filtered = ALL_COINS.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.ticker.toLowerCase().includes(search.toLowerCase());
    if (!matchSearch) return false;
    if (filter === "Gainers") return c.up;
    if (filter === "Losers") return !c.up;
    return true;
  });

  return (
    <RoboLayout title="E-Robo Wallet — Market">
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-4">
        <h1 style={{ color: R.TEXT, fontSize: 22, fontWeight: 700 }}>Market</h1>
        <button style={{ background: R.GLASS, borderRadius: 999, padding: "6px 14px", color: R.ACCENT, fontSize: 12, fontWeight: 600, border: `1px solid ${R.ACCENT}33` }}>
          Live
        </button>
      </div>

      {/* Search */}
      <div className="px-5 pb-4">
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
          <SearchIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search coins..."
            style={{ background: "transparent", border: "none", outline: "none", color: R.TEXT, fontSize: 14, flex: 1, fontFamily: "var(--font-poppins), sans-serif" }}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-5 pb-4 flex gap-2">
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                background: active ? R.ACCENT : R.GLASS,
                color: active ? "#03313A" : R.TEXT2,
                border: active ? "none" : "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.15s",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Column Headers */}
      <div className="px-5 pb-2 flex items-center">
        <span style={{ color: R.TEXT3, fontSize: 11, width: 24 }}>#</span>
        <span style={{ color: R.TEXT3, fontSize: 11, flex: 1 }}>Coin</span>
        <span style={{ color: R.TEXT3, fontSize: 11, width: 60 }}>7D</span>
        <span style={{ color: R.TEXT3, fontSize: 11, textAlign: "right", minWidth: 90 }}>Price / 24h</span>
      </div>

      {/* Coin List */}
      <div className="px-5 flex flex-col gap-1 pb-4">
        {filtered.map((coin) => (
          <button
            key={coin.id}
            onClick={() => router.push(`/robo/coin/${coin.id}`)}
            className="flex items-center gap-3 w-full text-left transition-all duration-150 active:scale-[0.98]"
            style={{
              background: "transparent",
              borderRadius: R.RADIUS_MD,
              padding: "12px 10px",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <span style={{ color: R.TEXT3, fontSize: 12, width: 20, flexShrink: 0 }}>{coin.rank}</span>
            <CoinAvatar ticker={coin.ticker} color={coin.color} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: R.TEXT, fontSize: 14, fontWeight: 600 }}>{coin.ticker}</p>
              <p style={{ color: R.TEXT2, fontSize: 11 }}>{coin.mcap}</p>
            </div>
            <Sparkline up={coin.up} />
            <div style={{ textAlign: "right", minWidth: 80 }}>
              <p style={{ color: R.TEXT, fontSize: 13, fontWeight: 600 }}>{coin.price}</p>
              <p style={{ color: coin.up ? R.GREEN : R.RED, fontSize: 12, fontWeight: 500 }}>{coin.change}</p>
            </div>
          </button>
        ))}
      </div>
    </RoboLayout>
  );
}
