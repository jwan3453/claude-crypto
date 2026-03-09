/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Market Coin Detail — Figma: Market - Coin detail 02
import { useRouter } from "next/router";
import { useState } from "react";
import RoboLiveLayout, { L, BackButton, MoreButton } from "@/components/robo-live/RoboLiveLayout";

const TIME_TABS = ["24H", "1W", "1Y", "ALL", "Point"];

// ── Pink Wave Chart (SVG) ──────────────────────────────────────────────────
function PinkChart() {
  return (
    <svg width="100%" height="224" viewBox="0 0 325 224" fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f04086" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f04086" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fill area */}
      <path
        d="M0,180 C20,170 30,140 55,120 C80,100 95,130 120,110 C145,90 155,60 180,75 C205,90 215,115 240,95 C260,80 275,110 295,130 L325,150 L325,224 L0,224 Z"
        fill="url(#chartGrad)"
      />
      {/* Line */}
      <path
        d="M0,180 C20,170 30,140 55,120 C80,100 95,130 120,110 C145,90 155,60 180,75 C205,90 215,115 240,95 C260,80 275,110 295,130 L325,150"
        stroke="#f04086"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dot at end */}
      <circle cx="325" cy="150" r="4" fill="#f04086" />
    </svg>
  );
}

export default function RoboLiveCoinDetail() {
  const router = useRouter();
  const [activeTime, setActiveTime] = useState("24H");

  // In real app this would use router.query.id to fetch data
  const coin = {
    name: "Etherium (ETH)",
    price: "$32,128.80",
    change: "2.5%",
    up: true,
    mcapLabel: "Market capitalization",
    mcapValue: "$231,233",
    supplyLabel: "Circulating Suply",
    supplyValue: "114.211 ETH",
  };

  return (
    <RoboLiveLayout title={coin.name} hideTabBar>
      {/* Background blurs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -124, left: -119, width: 526, height: 723, background: "radial-gradient(ellipse at 70% 10%, rgba(240,64,134,0.08) 0%, transparent 55%)", filter: "blur(50px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="flex items-center justify-between" style={{ padding: "24px 25px 0" }}>
          <BackButton onClick={() => router.back()} />
          <p style={{ fontSize: 16, fontWeight: 500, color: L.TEXT2 }}>{coin.name}</p>
          <MoreButton />
        </div>

        {/* Price */}
        <div className="text-center" style={{ marginTop: 16, padding: "0 25px" }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: L.TEXT, margin: 0 }}>{coin.price}</h2>
          <div className="flex items-center justify-center gap-1 mt-1">
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path d="M5 2L8 7H2L5 2Z" fill={L.GREEN} />
            </svg>
            <span style={{ fontSize: 16, fontWeight: 500, color: L.GREEN }}>{coin.change}</span>
          </div>
        </div>

        {/* Time Tabs */}
        <div style={{ padding: "20px 25px 0" }}>
          <div
            className="flex items-center"
            style={{ background: L.CARD_GLASS, borderRadius: 40, padding: 4 }}
          >
            {TIME_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTime(tab)}
                className="flex-1 transition-all duration-150 active:scale-95"
                style={{
                  padding: "10px 4px",
                  borderRadius: 36,
                  background: activeTime === tab ? L.CARD : "transparent",
                  boxShadow: activeTime === tab ? "0px 4px 12px rgba(55,62,125,0.1)" : "none",
                  fontSize: 13,
                  fontWeight: activeTime === tab ? 600 : 400,
                  color: activeTime === tab ? L.TEXT : L.TEXT3,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div style={{ padding: "24px 25px 0" }}>
          <PinkChart />
        </div>

        {/* Buy / Set Alert Buttons */}
        <div className="flex gap-4" style={{ padding: "24px 25px 0" }}>
          <button
            onClick={() => router.push("/robo-live/alerts")}
            className="flex-1 transition-all duration-150 active:scale-95 hover:opacity-90"
            style={{
              padding: "15px",
              borderRadius: L.RADIUS_LG,
              background: L.CARD,
              color: L.PRIMARY,
              fontSize: 16,
              fontWeight: 600,
              boxShadow: "0px 4px 20px rgba(55,62,125,0.08)",
            }}
          >
            Set Alert
          </button>
          <button
            onClick={() => router.push("/robo-live/converter")}
            className="flex-1 transition-all duration-150 active:scale-95 hover:opacity-90"
            style={{
              padding: "15px",
              borderRadius: L.RADIUS_LG,
              background: L.TEXT,
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Buy Now
          </button>
        </div>

        {/* Market Statistics */}
        <div style={{ margin: "24px 0 0", background: "#fff", borderRadius: "40px 40px 0 0", padding: "28px 25px" }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: L.TEXT, marginBottom: 20 }}>Market Statistic</h3>
          <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 15, fontWeight: 400, color: L.TEXT3 }}>{coin.mcapLabel}</span>
            <span style={{ fontSize: 15, fontWeight: 500, color: L.TEXT }}>{coin.mcapValue}</span>
          </div>
          <div style={{ height: 1, background: L.BG, marginBottom: 14 }} />
          <div className="flex items-center justify-between">
            <span style={{ fontSize: 15, fontWeight: 400, color: L.TEXT3 }}>{coin.supplyLabel}</span>
            <span style={{ fontSize: 15, fontWeight: 500, color: L.TEXT }}>{coin.supplyValue}</span>
          </div>
        </div>
      </div>
    </RoboLiveLayout>
  );
}
