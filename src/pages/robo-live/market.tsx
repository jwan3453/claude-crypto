/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Market — Figma: Market 02
import { useRouter } from "next/router";
import { useState } from "react";
import RoboLiveLayout, { L, ChangeBadge } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgCoinVechain = "https://www.figma.com/api/mcp/asset/58272319-676a-4941-bf1d-1c54808a9ed4";
const imgCoinBitcoin = "https://www.figma.com/api/mcp/asset/072a915c-b098-4502-9d95-9f4707e14c54";
const imgCoinAchain = "https://www.figma.com/api/mcp/asset/777a90ba-990c-43d0-820b-18a8557b0afc";
const imgCoinBytecoin = "https://www.figma.com/api/mcp/asset/5083f6ea-39d5-45cf-ae53-93b826b763ef";
const imgCoinVitae = "https://www.figma.com/api/mcp/asset/8625aedf-ca1a-43a9-9245-42e112795357";

// ── Mini chart SVG paths (decorative) ─────────────────────────────────────
const CHARTS = {
  up_pink: "M0,20 L10,15 L20,18 L30,10 L40,14 L50,8 L60,12 L70,6",
  up_green: "M0,18 L10,14 L20,16 L30,10 L40,13 L50,7 L60,10 L70,5",
  down_pink: "M0,5 L10,8 L20,6 L30,12 L40,9 L50,15 L60,11 L70,18",
};

const MARKET_DATA = [
  { id: "vechain", coin: imgCoinVechain, name: "Vechain", ticker: "VEN", price: "$14,112.86", change: "2.1%", up: true, mcap: "$893.43 Bn", chart: CHARTS.down_pink, chartColor: "#f04086" },
  { id: "bitcoin", coin: imgCoinBitcoin, name: "Bitcoin", ticker: "BTC", price: "$32,128.80", change: "2.5%", up: true, mcap: "$893.43 Bn", chart: CHARTS.up_green, chartColor: "#5fc88f" },
  { id: "achain", coin: imgCoinAchain, name: "Achain", ticker: "ACT", price: "$28,312.22", change: "2.2%", up: true, mcap: "$893.43 Bn", chart: CHARTS.down_pink, chartColor: "#f04086" },
  { id: "bytecoin", coin: imgCoinBytecoin, name: "Bytecoin", ticker: "BCN", price: "$15,313.81", change: "2.2%", up: true, mcap: "$893.43 Bn", chart: CHARTS.up_green, chartColor: "#5fc88f" },
  { id: "vitae", coin: imgCoinVitae, name: "Vitae", ticker: "VITAE", price: "$14,112.86", change: "2.1%", up: true, mcap: "$893.43 Bn", chart: CHARTS.down_pink, chartColor: "#f04086" },
];

const FILTER_TABS = ["Watchlists", "Trending", "Best value"];

// ── Filter Icon ────────────────────────────────────────────────────────────
function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18M7 12h10M11 18h2" stroke={L.TEXT3} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Mini Chart ─────────────────────────────────────────────────────────────
function MiniChart({ path, color }: { path: string; color: string }) {
  return (
    <svg width="70" height="24" viewBox="0 0 70 24" fill="none">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function RoboLiveMarket() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const filtered = MARKET_DATA.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.ticker.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <RoboLiveLayout title="Market — E-Robo Wallet">
      {/* Background blur */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -51, left: -191, width: 381, height: 758, background: "radial-gradient(ellipse at 60% 20%, rgba(159,157,243,0.15) 0%, transparent 60%)", filter: "blur(40px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "32px 25px 0" }}>
        {/* Header */}
        <h1 style={{ fontSize: 32, fontWeight: 600, color: L.TEXT2, margin: 0 }}>Market</h1>

        {/* Search */}
        <div
          className="flex items-center gap-3"
          style={{
            marginTop: 24,
            background: L.CARD_GLASS,
            borderRadius: L.RADIUS_LG,
            padding: "14px 18px",
            boxShadow: "0px 4px 20px rgba(55,62,125,0.06)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke={L.TEXT3} strokeWidth="1.5" />
            <path d="M16.5 16.5L21 21" stroke={L.TEXT3} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 16,
              color: L.TEXT2,
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          />
          <button onClick={() => setSearch("")} className="transition-all active:scale-90">
            <FilterIcon />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="grid grid-cols-3 gap-3" style={{ marginTop: 16 }}>
          {FILTER_TABS.map((tab, i) => {
            const icons = [
              <svg key="w" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke={L.GREEN} strokeWidth="1.5" fill={`${L.GREEN}20`} /></svg>,
              <svg key="t" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H10M17 7v7" stroke={L.BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
              <svg key="b" width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={L.YELLOW} strokeWidth="1.5" fill={`${L.YELLOW}15`} /><path d="M12 8v8M9 11h6M9 14h6" stroke={L.YELLOW} strokeWidth="1.5" strokeLinecap="round" /></svg>,
            ];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="flex flex-col items-center gap-2 transition-all duration-150 active:scale-95"
                style={{
                  background: activeTab === i ? L.CARD : L.CARD_GLASS,
                  borderRadius: L.RADIUS_MD,
                  padding: "18px 8px 14px",
                  boxShadow: activeTab === i ? "0px 8px 24px rgba(55,62,125,0.1)" : "0px 2px 8px rgba(55,62,125,0.04)",
                }}
              >
                {icons[i]}
                <span style={{ fontSize: 12, fontWeight: activeTab === i ? 600 : 400, color: activeTab === i ? L.TEXT : L.TEXT3 }}>
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* Coin List */}
        <div style={{ marginTop: 20 }}>
          {filtered.map(coin => (
            <button
              key={coin.id}
              onClick={() => router.push(`/robo-live/coin/${coin.id}`)}
              className="w-full flex items-center transition-all duration-150 active:scale-[0.99] hover:opacity-80"
              style={{ padding: "12px 0", gap: 12 }}
            >
              <img src={coin.coin} alt="" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "50%", flexShrink: 0 }} />
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{ fontSize: 17, fontWeight: 500, color: L.TEXT2, margin: 0 }}>{coin.name}</p>
                <ChangeBadge value={coin.change} up={coin.up} />
              </div>
              <MiniChart path={coin.chart} color={coin.chartColor} />
              <div style={{ textAlign: "right", minWidth: 100 }}>
                <p style={{ fontSize: 17, fontWeight: 500, color: L.TEXT2, margin: 0 }}>{coin.price}</p>
                <p style={{ fontSize: 12, fontWeight: 400, color: L.TEXT3, margin: 0 }}>MCap {coin.mcap}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </RoboLiveLayout>
  );
}
