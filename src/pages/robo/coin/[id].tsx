/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Coin Detail Screen

import { useState } from "react";
import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

const COIN_DATA: Record<string, {
  name: string; ticker: string; price: string; change: string; up: boolean; color: string;
  mcap: string; vol: string; supply: string; ath: string; atl: string;
}> = {
  bitcoin: { name: "Bitcoin", ticker: "BTC", price: "$43,250.00", change: "+3.2%", up: true, color: "#F7931A", mcap: "$843B", vol: "$28.4B", supply: "19.6M BTC", ath: "$69,044", atl: "$67.81" },
  ethereum: { name: "Ethereum", ticker: "ETH", price: "$2,840.00", change: "-1.1%", up: false, color: "#627EEA", mcap: "$341B", vol: "$14.2B", supply: "120.2M ETH", ath: "$4,878", atl: "$0.43" },
  bnb: { name: "BNB", ticker: "BNB", price: "$312.50", change: "+2.8%", up: true, color: "#F3BA2F", mcap: "$48B", vol: "$1.8B", supply: "153.9M BNB", ath: "$686.31", atl: "$0.096" },
  solana: { name: "Solana", ticker: "SOL", price: "$98.50", change: "+5.6%", up: true, color: "#9945FF", mcap: "$43B", vol: "$3.2B", supply: "437M SOL", ath: "$259.96", atl: "$0.50" },
  cardano: { name: "Cardano", ticker: "ADA", price: "$0.62", change: "+0.8%", up: true, color: "#0033AD", mcap: "$22B", vol: "$520M", supply: "35.4B ADA", ath: "$3.10", atl: "$0.017" },
  xrp: { name: "XRP", ticker: "XRP", price: "$0.54", change: "-0.4%", up: false, color: "#00AAE4", mcap: "$29B", vol: "$1.1B", supply: "54.1B XRP", ath: "$3.84", atl: "$0.0028" },
  doge: { name: "Dogecoin", ticker: "DOGE", price: "$0.083", change: "+1.9%", up: true, color: "#C2A633", mcap: "$11B", vol: "$480M", supply: "142.9B DOGE", ath: "$0.73", atl: "$0.00008" },
  dot: { name: "Polkadot", ticker: "DOT", price: "$7.20", change: "-2.3%", up: false, color: "#E6007A", mcap: "$9B", vol: "$310M", supply: "1.3B DOT", ath: "$54.98", atl: "$2.69" },
  link: { name: "Chainlink", ticker: "LINK", price: "$14.50", change: "+4.1%", up: true, color: "#2A5ADA", mcap: "$8B", vol: "$620M", supply: "556M LINK", ath: "$52.88", atl: "$0.14" },
  avax: { name: "Avalanche", ticker: "AVAX", price: "$36.80", change: "-0.7%", up: false, color: "#E84142", mcap: "$14B", vol: "$740M", supply: "389M AVAX", ath: "$144.96", atl: "$2.79" },
};

const PERIODS = ["1H", "1D", "1W", "1M", "3M", "1Y"] as const;
type Period = (typeof PERIODS)[number];

// Generate chart path for different periods
function genPoints(seed: number, up: boolean, count = 50) {
  const pts = [];
  let val = 50 + (seed % 20);
  for (let i = 0; i < count; i++) {
    const delta = (Math.sin(i * 0.4 + seed) * 8) + (up ? i * 0.3 : -i * 0.2) + (Math.random() * 6 - 3);
    val = Math.max(10, Math.min(90, val + delta * 0.5));
    pts.push(val);
  }
  return pts;
}

function CoinChart({ up, seed }: { up: boolean; seed: number }) {
  const pts = genPoints(seed, up, 40);
  const W = 340;
  const H = 140;
  const padY = 10;
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const stepX = W / (pts.length - 1);
  const usableH = H - padY * 2;

  const coords = pts.map((v, i) => ({ x: i * stepX, y: padY + usableH - ((v - min) / (max - min + 0.01)) * usableH }));
  const d = coords.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const area = `${d} L${W} ${H} L0 ${H} Z`;
  const color = up ? R.GREEN : R.RED;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <defs>
        <linearGradient id={`cg-${up}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#cg-${up})`} />
      <path d={d} stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={coords[coords.length - 1].x} cy={coords[coords.length - 1].y} r="4" fill={color} />
    </svg>
  );
}

function BackIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke={R.TEXT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function StarIcon({ filled }: { filled: boolean }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? "#F7931A" : "none"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#F7931A" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between" style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <span style={{ color: R.TEXT2, fontSize: 13 }}>{label}</span>
      <span style={{ color: R.TEXT, fontSize: 13, fontWeight: 600 }}>{value}</span>
    </div>
  );
}

export default function RoboCoinDetail() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [period, setPeriod] = useState<Period>("1D");
  const [starred, setStarred] = useState(false);

  const coin = COIN_DATA[id] || COIN_DATA.bitcoin;
  const seed = id ? id.charCodeAt(0) : 42;

  return (
    <RoboLayout title={`${coin.name} — E-Robo`} hideTabBar={false}>
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-2">
        <button onClick={() => router.back()} className="hover:opacity-70 transition-opacity active:opacity-50">
          <BackIcon />
        </button>
        <div className="flex items-center gap-2">
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${coin.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: coin.color, fontSize: 9, fontWeight: 700 }}>{coin.ticker.slice(0, 3)}</span>
          </div>
          <span style={{ color: R.TEXT, fontSize: 16, fontWeight: 600 }}>{coin.name}</span>
          <span style={{ color: R.TEXT3, fontSize: 13 }}>{coin.ticker}</span>
        </div>
        <button onClick={() => setStarred(!starred)} className="hover:opacity-70 transition-opacity active:opacity-50">
          <StarIcon filled={starred} />
        </button>
      </div>

      {/* Price */}
      <div className="px-5 pb-2">
        <p style={{ color: R.TEXT, fontSize: 34, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.1 }}>{coin.price}</p>
        <div className="flex items-center gap-2 mt-1">
          <div style={{ background: coin.up ? `${R.GREEN}22` : `${R.RED}22`, borderRadius: 999, padding: "3px 10px", display: "inline-flex", alignItems: "center", gap: 4 }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d={coin.up ? "M5 8V2M2.5 4.5L5 2l2.5 2.5" : "M5 2v6M2.5 5.5L5 8l2.5-2.5"} stroke={coin.up ? R.GREEN : R.RED} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ color: coin.up ? R.GREEN : R.RED, fontSize: 13, fontWeight: 600 }}>{coin.change}</span>
          </div>
          <span style={{ color: R.TEXT3, fontSize: 13 }}>24h</span>
        </div>
      </div>

      {/* Chart */}
      <div className="px-5 pb-4" style={{ overflow: "hidden" }}>
        <CoinChart up={coin.up} seed={seed} />
      </div>

      {/* Period Selector */}
      <div className="px-5 pb-4 flex gap-1 justify-center">
        {PERIODS.map((p) => {
          const active = p === period;
          return (
            <button key={p} onClick={() => setPeriod(p)} style={{ padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: active ? 700 : 400, background: active ? R.ACCENT : "transparent", color: active ? "#03313A" : R.TEXT2, transition: "all 0.15s" }}>
              {p}
            </button>
          );
        })}
      </div>

      {/* Market Stats */}
      <div className="px-5 pb-5">
        <p style={{ color: R.TEXT, fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Market Statistics</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "4px 16px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <StatRow label="Market Cap" value={coin.mcap} />
          <StatRow label="24h Volume" value={coin.vol} />
          <StatRow label="Circulating Supply" value={coin.supply} />
          <StatRow label="All-Time High" value={coin.ath} />
          <StatRow label="All-Time Low" value={coin.atl} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 pb-5 flex gap-3">
        <button
          onClick={() => router.push("/robo/send")}
          style={{ flex: 1, background: R.ACCENT, color: "#03313A", borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700, transition: "opacity 0.15s" }}
          className="hover:opacity-85 active:opacity-70"
        >
          Buy
        </button>
        <button
          onClick={() => router.push("/robo/send")}
          style={{ flex: 1, background: R.GLASS, color: R.RED, borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700, border: `1px solid ${R.RED}44`, transition: "opacity 0.15s" }}
          className="hover:opacity-85 active:opacity-70"
        >
          Sell
        </button>
      </div>
    </RoboLayout>
  );
}
