/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Insights Screen

import { useState } from "react";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

const PERIODS = ["1W", "1M", "3M", "1Y"] as const;
type Period = (typeof PERIODS)[number];

// ── Portfolio chart data (simple area chart) ──────────────────────────────────
const CHART_POINTS_1W = [42, 38, 45, 41, 48, 44, 52, 56, 50, 58, 61, 57, 65, 68];
const CHART_POINTS_1M = [30, 35, 28, 40, 45, 38, 50, 48, 55, 52, 60, 58, 65, 68];
const CHART_POINTS_3M = [20, 28, 35, 32, 42, 38, 50, 55, 48, 60, 58, 65, 70, 68];
const CHART_POINTS_1Y = [10, 15, 20, 28, 22, 35, 40, 38, 45, 52, 58, 62, 65, 68];

function portfolioPoints(period: Period) {
  const map = { "1W": CHART_POINTS_1W, "1M": CHART_POINTS_1M, "3M": CHART_POINTS_3M, "1Y": CHART_POINTS_1Y };
  return map[period];
}

function PortfolioChart({ period }: { period: Period }) {
  const pts = portfolioPoints(period);
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const W = 330;
  const H = 120;
  const padY = 8;
  const usableH = H - padY * 2;
  const stepX = W / (pts.length - 1);

  const coords = pts.map((v, i) => ({ x: i * stepX, y: padY + usableH - ((v - min) / (max - min)) * usableH }));
  const linePath = coords.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W} ${H} L0 ${H} Z`;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="cgrd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={R.ACCENT} stopOpacity="0.25" />
          <stop offset="100%" stopColor={R.ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#cgrd)" />
      <path d={linePath} stroke={R.ACCENT} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Last point dot */}
      <circle cx={coords[coords.length - 1].x} cy={coords[coords.length - 1].y} r="4" fill={R.ACCENT} />
      <circle cx={coords[coords.length - 1].x} cy={coords[coords.length - 1].y} r="8" fill={R.ACCENT} fillOpacity="0.2" />
    </svg>
  );
}

// ── Donut chart for allocation ─────────────────────────────────────────────────
const ALLOC = [
  { name: "Bitcoin", pct: 73, color: "#F7931A" },
  { name: "Ethereum", pct: 22, color: "#627EEA" },
  { name: "Solana", pct: 4, color: "#9945FF" },
  { name: "Cardano", pct: 1, color: "#0033AD" },
];

function DonutChart() {
  const r = 44;
  const stroke = 16;
  const circ = 2 * Math.PI * r;
  let cumOffset = 0;

  return (
    <svg width="110" height="110" viewBox="0 0 110 110">
      <circle cx="55" cy="55" r={r} fill="none" stroke={R.GLASS} strokeWidth={stroke} />
      {ALLOC.map((seg, i) => {
        const dash = (seg.pct / 100) * circ;
        const offset = circ - dash;
        const rotation = (cumOffset / 100) * 360 - 90;
        cumOffset += seg.pct;
        return (
          <circle
            key={i}
            cx="55" cy="55" r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeDashoffset={-((cumOffset - seg.pct) / 100) * circ}
            strokeLinecap="round"
            transform={`rotate(-90, 55, 55)`}
            style={{ transition: "all 0.5s ease" }}
          />
        );
      })}
      <text x="55" y="51" textAnchor="middle" fill={R.TEXT} fontSize="12" fontWeight="700">BTC</text>
      <text x="55" y="65" textAnchor="middle" fill={R.TEXT2} fontSize="11">73%</text>
    </svg>
  );
}

// ── News Feed ─────────────────────────────────────────────────────────────────
const NEWS = [
  { title: "Bitcoin reaches $43K amid ETF inflow surge", source: "CoinDesk", time: "2h ago", sentiment: "Bullish" },
  { title: "Ethereum staking rewards hit 6-month high", source: "Decrypt", time: "5h ago", sentiment: "Bullish" },
  { title: "Solana DeFi TVL surpasses $8B milestone", source: "The Block", time: "8h ago", sentiment: "Bullish" },
  { title: "Fed signals potential rate cut in Q2 2025", source: "Bloomberg", time: "12h ago", sentiment: "Neutral" },
];

function SentimentBadge({ label }: { label: string }) {
  const colors: Record<string, string> = { Bullish: R.GREEN, Bearish: R.RED, Neutral: R.TEXT2 };
  const c = colors[label] || R.TEXT2;
  return (
    <span style={{ background: `${c}22`, color: c, borderRadius: 999, fontSize: 11, fontWeight: 600, padding: "2px 8px" }}>
      {label}
    </span>
  );
}

export default function RoboInsights() {
  const [period, setPeriod] = useState<Period>("1M");

  return (
    <RoboLayout title="E-Robo Wallet — Insights">
      <RoboStatusBar />

      {/* Header */}
      <div className="px-5 pb-4">
        <h1 style={{ color: R.TEXT, fontSize: 22, fontWeight: 700 }}>Insights</h1>
      </div>

      {/* Portfolio Chart Card */}
      <div className="px-5 pb-5">
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "20px", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p style={{ color: R.TEXT2, fontSize: 12, marginBottom: 2 }}>Portfolio Value</p>
              <p style={{ color: R.TEXT, fontSize: 24, fontWeight: 700 }}>$30,798</p>
              <p style={{ color: R.GREEN, fontSize: 13, fontWeight: 500 }}>+$724 (+2.4%) today</p>
            </div>
            <div className="flex gap-1">
              {PERIODS.map((p) => {
                const active = p === period;
                return (
                  <button key={p} onClick={() => setPeriod(p)} style={{ padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: active ? 600 : 400, background: active ? `${R.ACCENT}22` : "transparent", color: active ? R.ACCENT : R.TEXT3, transition: "all 0.15s" }}>
                    {p}
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <PortfolioChart period={period} />
          </div>
        </div>
      </div>

      {/* Allocation */}
      <div className="px-5 pb-5">
        <p style={{ color: R.TEXT, fontSize: 16, fontWeight: 600, marginBottom: 14 }}>Asset Allocation</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "20px", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-6">
            <DonutChart />
            <div className="flex flex-col gap-2 flex-1">
              {ALLOC.map((a) => (
                <div key={a.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.color, flexShrink: 0 }} />
                    <span style={{ color: R.TEXT2, fontSize: 12 }}>{a.name}</span>
                  </div>
                  <span style={{ color: R.TEXT, fontSize: 13, fontWeight: 600 }}>{a.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Market Sentiment */}
      <div className="px-5 pb-5">
        <p style={{ color: R.TEXT, fontSize: 16, fontWeight: 600, marginBottom: 14 }}>Market Sentiment</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "20px", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center justify-between mb-3">
            <span style={{ color: R.TEXT2, fontSize: 13 }}>Fear & Greed Index</span>
            <span style={{ color: R.GREEN, fontSize: 13, fontWeight: 700 }}>72 — Greed</span>
          </div>
          {/* Gauge */}
          <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ width: "72%", height: "100%", background: `linear-gradient(90deg, ${R.RED} 0%, #F7931A 40%, ${R.GREEN} 100%)`, borderRadius: 4, transition: "width 0.5s ease" }} />
          </div>
          <div className="flex justify-between mt-1">
            <span style={{ color: R.RED, fontSize: 10 }}>Extreme Fear</span>
            <span style={{ color: R.GREEN, fontSize: 10 }}>Extreme Greed</span>
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="px-5 pb-5">
        <div className="flex items-center justify-between mb-4">
          <p style={{ color: R.TEXT, fontSize: 16, fontWeight: 600 }}>Market News</p>
          <button style={{ color: R.ACCENT, fontSize: 13 }} className="hover:opacity-70 transition-opacity">See All</button>
        </div>
        <div className="flex flex-col gap-3">
          {NEWS.map((n, i) => (
            <div key={i} style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.05)", cursor: "pointer", transition: "background 0.15s" }} className="hover:bg-[rgba(255,255,255,0.07)]">
              <div className="flex items-start justify-between gap-3">
                <p style={{ color: R.TEXT, fontSize: 13, fontWeight: 500, lineHeight: 1.4, flex: 1 }}>{n.title}</p>
                <SentimentBadge label={n.sentiment} />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span style={{ color: R.TEXT3, fontSize: 11 }}>{n.source}</span>
                <span style={{ color: R.TEXT3, fontSize: 11 }}>·</span>
                <span style={{ color: R.TEXT3, fontSize: 11 }}>{n.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 20 }} />
    </RoboLayout>
  );
}
