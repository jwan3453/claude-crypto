/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Market (Light Theme)
// Figma: Market 02

import { useState } from "react";
import { useRouter } from "next/router";
import RoboNewLayout, { L } from "@/components/robo-new/RoboNewLayout";

// ── Asset URLs from Figma ─────────────────────────────────────────────────────
const imgCoin50PxLightVechain = "https://www.figma.com/api/mcp/asset/a5e7c79f-391a-4021-a69a-6d8fb39abb03";
const imgCoin50PxLightVitae = "https://www.figma.com/api/mcp/asset/75824a9c-2f15-43b3-9e97-e89c8410a09e";
const imgCoin50PxLightBytecoin = "https://www.figma.com/api/mcp/asset/4df9dfbe-02f2-4d7d-a45e-2cb057f5a3b9";
const imgCoin50PxLightAchain = "https://www.figma.com/api/mcp/asset/3e91bad2-3974-40cf-a701-73f5c183e918";
const imgCoin50PxLightBitcoin = "https://www.figma.com/api/mcp/asset/a81f6486-ee13-4e56-8dd4-dc2818ebc623";
const imgIcon32PxWatchlists = "https://www.figma.com/api/mcp/asset/62c9f6d5-395b-4fdc-9cd7-4f35cd08fa76";
const imgIcon32PxCompare = "https://www.figma.com/api/mcp/asset/d6729b51-bd4e-4d90-9f43-237820570923";
const imgIcon32PxConvert = "https://www.figma.com/api/mcp/asset/c12c205d-0b8e-45e2-8ff0-57011a98eb51";

// ── Coin market data ──────────────────────────────────────────────────────────
const COINS = [
  { id: "vechain", name: "Vechain", ticker: "VEN", price: "$14,112.86", change: "2.1%", up: false, mcap: "MCap $893.43 Bn", coin: imgCoin50PxLightVechain },
  { id: "bitcoin", name: "Bitcoin", ticker: "BTC", price: "$32,128.80", change: "2.5%", up: true, mcap: "MCap $893.43 Bn", coin: imgCoin50PxLightBitcoin },
  { id: "achain", name: "Achain", ticker: "ACT", price: "$28,312.22", change: "2.2%", up: false, mcap: "MCap $893.43 Bn", coin: imgCoin50PxLightAchain },
  { id: "bytecoin", name: "Bytecoin", ticker: "BCN", price: "$15,313.81", change: "2.2%", up: true, mcap: "MCap $893.43 Bn", coin: imgCoin50PxLightBytecoin },
  { id: "vitae", name: "Vitae", ticker: "VITAE", price: "$14,112.86", change: "2.1%", up: false, mcap: "MCap $893.43 Bn", coin: imgCoin50PxLightVitae },
];

const CATEGORIES = [
  { key: "watchlist", label: "Watchlists", icon: imgIcon32PxWatchlists },
  { key: "trending", label: "Trending", icon: imgIcon32PxCompare },
  { key: "bestvalue", label: "Best value", icon: imgIcon32PxConvert },
];

// ── Sparkline SVG ─────────────────────────────────────────────────────────────
function Sparkline({ up }: { up: boolean }) {
  const color = up ? L.GREEN : L.PINK;
  const path = up
    ? "M0 20 L8 16 L16 18 L24 12 L32 14 L40 8 L48 5"
    : "M0 5 L8 8 L16 6 L24 12 L32 10 L40 16 L48 18";
  return (
    <svg width="60" height="30" viewBox="0 0 48 24" fill="none">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Coin Row ──────────────────────────────────────────────────────────────────
function CoinRow({ coin }: { coin: typeof COINS[0] }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/robo-new/coin/${coin.id}`)}
      className="flex items-center w-full text-left transition-all duration-150 active:scale-[0.98] hover:bg-white/50"
      style={{ padding: "0 25px", height: 70 }}
    >
      <img src={coin.coin} alt={coin.name} style={{ width: 50, height: 50, objectFit: "cover", flexShrink: 0 }} />
      <div style={{ marginLeft: 10, flex: 1 }}>
        <p style={{ color: L.TEXT2, fontSize: 18, fontWeight: 500 }}>{coin.name}</p>
        <div className="flex items-center gap-1">
          {coin.up ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 8V2M2.5 4.5L5 2l2.5 2.5" stroke={L.GREEN} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 2v6M2.5 5.5L5 8l2.5-2.5" stroke={L.PINK} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          <p style={{ color: L.TEXT3, fontSize: 14 }}>{coin.change}</p>
        </div>
      </div>
      <Sparkline up={coin.up} />
      <div style={{ textAlign: "right", minWidth: 110 }}>
        <p style={{ color: L.TEXT2, fontSize: 18, fontWeight: 500 }}>{coin.price}</p>
        <p style={{ color: L.TEXT3, fontSize: 12 }}>{coin.mcap}</p>
      </div>
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboNewMarket() {
  const [activeCategory, setActiveCategory] = useState("watchlist");
  const [search, setSearch] = useState("");

  const filtered = COINS.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.ticker.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <RoboNewLayout title="E-Robo Wallet — Market">
      {/* Header */}
      <div className="px-6 pt-8 pb-3">
        <p style={{ color: L.TEXT, fontSize: 32, fontWeight: 600 }}>Market</p>
      </div>

      {/* Search */}
      <div className="px-6 mb-4">
        <div
          style={{
            background: L.CARD,
            borderRadius: L.RADIUS_LG,
            height: 55,
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: 10,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke={L.TEXT3} strokeWidth="1.5" />
            <path d="M21 21l-4.35-4.35" stroke={L.TEXT3} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              color: L.TEXT2,
              fontSize: 15,
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h10M4 18h6" stroke={L.TEXT3} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-4 flex gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className="flex flex-col items-center transition-all duration-150 active:scale-95"
            style={{
              flex: 1,
              background: activeCategory === cat.key ? "rgba(255,255,255,0.9)" : L.CARD_GLASS2,
              borderRadius: L.RADIUS_LG,
              padding: "18px 10px 12px",
              boxShadow: activeCategory === cat.key ? "0px 10px 30px rgba(55,62,125,0.08)" : "none",
            }}
          >
            <img src={cat.icon} alt={cat.label} style={{ width: 32, height: 32 }} />
            <p style={{ color: L.TEXT, fontSize: 12, fontWeight: 500, marginTop: 8 }}>{cat.label}</p>
          </button>
        ))}
      </div>

      {/* Coin List */}
      <div>
        {filtered.map((coin) => (
          <CoinRow key={coin.id} coin={coin} />
        ))}
      </div>
    </RoboNewLayout>
  );
}
