/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Coin Detail (Light Theme)
// Figma: Market - Coin detail 02

import { useState } from "react";
import { useRouter } from "next/router";
import RoboNewLayout, { BackButton, L } from "@/components/robo-new/RoboNewLayout";

// ── Asset URLs from Figma ─────────────────────────────────────────────────────
const imgGraphPink = "https://www.figma.com/api/mcp/asset/01f22b6b-e834-4783-be65-eb88a6de87a8";

// ── Coin data ─────────────────────────────────────────────────────────────────
const COINS: Record<string, { name: string; ticker: string; price: string; change: string; up: boolean; mcap: string; supply: string }> = {
  bitcoin: { name: "Bitcoin", ticker: "BTC", price: "$32,128.80", change: "2.5%", up: true, mcap: "$231,233", supply: "19.5M BTC" },
  ethereum: { name: "Etherium", ticker: "ETH", price: "$32,128.80", change: "2.5%", up: true, mcap: "$231,233", supply: "114.211 ETH" },
  solana: { name: "Solana", ticker: "SOL", price: "$98.50", change: "5.6%", up: true, mcap: "$42,100", supply: "550M SOL" },
  cardano: { name: "Cardano", ticker: "ADA", price: "$0.62", change: "0.8%", up: true, mcap: "$22,100", supply: "35B ADA" },
  vechain: { name: "Vechain", ticker: "VEN", price: "$14,112.86", change: "2.1%", up: false, mcap: "$8,900", supply: "85B VEN" },
  achain: { name: "Achain", ticker: "ACT", price: "$28,312.22", change: "2.2%", up: false, mcap: "$10,200", supply: "1B ACT" },
  bytecoin: { name: "Bytecoin", ticker: "BCN", price: "$15,313.81", change: "2.2%", up: true, mcap: "$5,400", supply: "184B BCN" },
  vitae: { name: "Vitae", ticker: "VITAE", price: "$14,112.86", change: "2.1%", up: false, mcap: "$3,200", supply: "50M VITAE" },
};

const TIME_TABS = ["24H", "1W", "1Y", "ALL", "Point"];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboNewCoinDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState(0);

  const coin = COINS[String(id)] ?? COINS.ethereum;

  return (
    <RoboNewLayout title={`E-Robo Wallet — ${coin.name}`} hideTabBar>
      {/* Back & More */}
      <div className="flex items-center justify-between px-6 pt-8 pb-3">
        <BackButton onClick={() => router.back()} />
        <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500 }}>
          {coin.name} ({coin.ticker})
        </p>
        <button
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: L.CARD,
            boxShadow: "0px 4px 20px rgba(55,62,125,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="transition-opacity hover:opacity-70 active:opacity-50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="2" fill={L.TEXT2} />
            <circle cx="12" cy="12" r="2" fill={L.TEXT2} />
            <circle cx="19" cy="12" r="2" fill={L.TEXT2} />
          </svg>
        </button>
      </div>

      {/* Price */}
      <div style={{ textAlign: "center", padding: "10px 25px" }}>
        <p style={{ color: L.TEXT, fontSize: 28, fontWeight: 500 }}>{coin.price}</p>
        <div className="flex items-center justify-center gap-1 mt-1">
          {coin.up ? (
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path d="M5 8V2M2.5 4.5L5 2l2.5 2.5" stroke={L.GREEN} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path d="M5 2v6M2.5 5.5L5 8l2.5-2.5" stroke={L.PINK} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          <p style={{ color: L.TEXT3, fontSize: 14 }}>{coin.change}</p>
        </div>
      </div>

      {/* Time selector */}
      <div className="px-6 mb-4">
        <div
          style={{
            background: "#ebeff1",
            borderRadius: 30,
            padding: 4,
            display: "flex",
            gap: 2,
          }}
        >
          {TIME_TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="flex-1 transition-all duration-200"
              style={{
                padding: "8px 4px",
                borderRadius: 25,
                background: activeTab === i ? "rgba(255,255,255,0.8)" : "transparent",
                boxShadow: activeTab === i ? "0px 20px 40px 0px rgba(55,62,125,0.1)" : "none",
                color: activeTab === i ? L.TEXT : L.TEXT3,
                fontSize: 14,
                fontWeight: activeTab === i ? 600 : 500,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="px-6 mb-5">
        <div style={{ height: 224, borderRadius: L.RADIUS_LG, overflow: "hidden", position: "relative" }}>
          <img src={imgGraphPink} alt="Chart" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 px-6 mb-5">
        <button
          onClick={() => router.push("/robo-new/alerts")}
          style={{
            flex: 1,
            background: "#fafbfb",
            color: L.PRIMARY,
            fontSize: 15,
            fontWeight: 600,
            padding: "16px",
            borderRadius: 40,
            boxShadow: "0px 20px 30px 0px rgba(25,28,50,0.1)",
          }}
          className="transition-all duration-150 active:scale-[0.97] hover:opacity-90"
        >
          Set Alert
        </button>
        <button
          style={{
            flex: 1,
            background: L.TEXT,
            color: "white",
            fontSize: 15,
            fontWeight: 600,
            padding: "16px",
            borderRadius: 40,
            boxShadow: "0px 20px 30px 0px rgba(25,28,50,0.1)",
          }}
          className="transition-all duration-150 active:scale-[0.97] hover:opacity-90"
        >
          Buy Now
        </button>
      </div>

      {/* Market Statistics */}
      <div
        style={{
          background: "rgba(255,255,255,0.8)",
          borderRadius: "40px 40px 0 0",
          padding: "25px 25px 100px",
        }}
      >
        <p style={{ color: L.TEXT, fontSize: 20, fontWeight: 500, marginBottom: 20 }}>Market Statistic</p>
        <div className="flex items-center justify-between mb-4">
          <p style={{ color: L.TEXT3, fontSize: 14 }}>Market capitalization</p>
          <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 600 }}>{coin.mcap}</p>
        </div>
        <div className="flex items-center justify-between">
          <p style={{ color: L.TEXT3, fontSize: 14 }}>Circulating Supply</p>
          <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 600 }}>{coin.supply}</p>
        </div>
      </div>
    </RoboNewLayout>
  );
}
