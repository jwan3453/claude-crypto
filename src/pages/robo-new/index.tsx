/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Home (Light Theme)
// Figma: Home 02

import { useRouter } from "next/router";
import RoboNewLayout, { L } from "@/components/robo-new/RoboNewLayout";

// ── Asset URLs from Figma ─────────────────────────────────────────────────────
const imgIllustrationRobot3 = "https://www.figma.com/api/mcp/asset/62b329ff-3ffa-48af-8982-393984718c80";
const imgIllustrationEth3 = "https://www.figma.com/api/mcp/asset/5a01b4ff-7e57-4174-83c9-0a5717a44f06";
const imgIllustrationBtc3 = "https://www.figma.com/api/mcp/asset/be35e067-4ecd-43c3-ac79-4ab13406044b";
const imgCoin40PxLightBitcoin = "https://www.figma.com/api/mcp/asset/f5921df7-b929-47bd-a70c-487eec6d54b9";
const imgCoin40PxLightBytecoin = "https://www.figma.com/api/mcp/asset/28921c05-adba-4b4c-9574-1382737164ce";

// ── Trending coin data ────────────────────────────────────────────────────────
const TRENDING = [
  { id: "bitcoin", name: "Bitcoin", ticker: "BTC", price: "$32,128.80", change: "+2.5%", up: true, coin: imgCoin40PxLightBitcoin },
  { id: "bytecoin", name: "Bytecoin", ticker: "BCN", price: "$15,313.81", change: "+2.2%", up: true, coin: imgCoin40PxLightBytecoin },
];

// ── Price Alert Card ──────────────────────────────────────────────────────────
function AlertCard({ title, subtitle, coin, actions }: { title: string; subtitle: string; coin: string; actions?: string[] }) {
  return (
    <div
      style={{
        background: L.CARD_GLASS,
        borderRadius: L.RADIUS_LG,
        boxShadow: "0px 20px 60px 0px rgba(55,62,125,0.05)",
        padding: "16px",
        position: "relative",
      }}
    >
      <div className="flex items-start gap-3">
        <div style={{ width: 40, height: 40, flexShrink: 0, position: "relative" }}>
          <img src={coin} alt="" style={{ width: 40, height: 40, objectFit: "cover" }} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500 }}>{title}</p>
          <p style={{ color: L.TEXT3, fontSize: 12, marginTop: 2 }}>{subtitle}</p>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke={L.TEXT3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {actions && (
        <>
          <div style={{ height: 1, background: L.BG, margin: "12px 0" }} />
          <div className="flex items-center justify-around">
            {actions.map((a, i) => (
              <button
                key={a}
                style={{ color: i === 0 ? L.PRIMARY : L.TEXT3, fontSize: 15, fontWeight: 500 }}
                className="hover:opacity-70 transition-opacity"
              >
                {a}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Quick pill button ─────────────────────────────────────────────────────────
function Pill({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div
      style={{
        background: L.CARD_GLASS,
        borderRadius: L.RADIUS_LG,
        boxShadow: "0px 20px 60px 0px rgba(55,62,125,0.05)",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        flex: 1,
        cursor: "pointer",
      }}
      className="hover:opacity-80 active:scale-[0.97] transition-all duration-150"
    >
      {icon}
      <span style={{ color: L.TEXT2, fontSize: 14, fontWeight: 500 }}>{label}</span>
    </div>
  );
}

// ── Coin row ──────────────────────────────────────────────────────────────────
function TrendingRow({ coin }: { coin: typeof TRENDING[0] }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/robo-new/coin/${coin.id}`)}
      className="flex items-center w-full text-left transition-all duration-150 active:scale-[0.98]"
      style={{ padding: "10px 25px" }}
    >
      <img src={coin.coin} alt={coin.name} style={{ width: 50, height: 50, objectFit: "cover" }} />
      <div style={{ marginLeft: 10, flex: 1 }}>
        <p style={{ color: L.TEXT2, fontSize: 18, fontWeight: 500 }}>{coin.name}</p>
        <p style={{ color: L.TEXT3, fontSize: 14 }}>{coin.ticker}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ color: L.TEXT2, fontSize: 18, fontWeight: 500 }}>{coin.price}</p>
        <p style={{ color: coin.up ? L.GREEN : L.RED, fontSize: 14, fontWeight: 500 }}>{coin.change}</p>
      </div>
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboNewHome() {
  const router = useRouter();

  return (
    <RoboNewLayout title="E-Robo Wallet — Home">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-8 pb-4">
        <p style={{ color: L.TEXT, fontSize: 32, fontWeight: 600, fontFamily: "var(--font-poppins), sans-serif" }}>Home</p>
        <button className="transition-opacity hover:opacity-70 active:opacity-50">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="2" fill={L.TEXT2} />
            <circle cx="12" cy="12" r="2" fill={L.TEXT2} />
            <circle cx="19" cy="12" r="2" fill={L.TEXT2} />
          </svg>
        </button>
      </div>

      {/* Promo Banner */}
      <div className="px-6 mb-5">
        <div
          style={{
            borderRadius: L.RADIUS_LG,
            background: "linear-gradient(135deg, #9f9df3 0%, #767dff 100%)",
            padding: "20px 20px 20px 20px",
            position: "relative",
            overflow: "hidden",
            minHeight: 140,
          }}
        >
          {/* Illustration */}
          <div style={{ position: "absolute", right: -10, top: -10, width: 165, height: 179, pointerEvents: "none" }}>
            <img src={imgIllustrationRobot3} alt="" style={{ position: "absolute", left: 28, top: 42, width: 137, height: 137, objectFit: "cover" }} />
            <img src={imgIllustrationEth3} alt="" style={{ position: "absolute", right: 0, top: 0, width: 66, height: 66, objectFit: "cover" }} />
            <img src={imgIllustrationBtc3} alt="" style={{ position: "absolute", left: 0, bottom: 0, width: 56, height: 56, objectFit: "cover" }} />
          </div>
          <p style={{ color: "white", fontSize: 18, fontWeight: 600, lineHeight: 1.33, maxWidth: 180 }}>
            Try our AI for avoid huge loss
          </p>
          <button
            onClick={() => router.push("/robo-new/market")}
            style={{
              marginTop: 20,
              background: "rgba(255,255,255,0.95)",
              color: L.TEXT2,
              fontSize: 14,
              fontWeight: 600,
              padding: "8px 22px",
              borderRadius: 40,
              display: "inline-block",
            }}
            className="transition-all duration-150 active:scale-95 hover:opacity-90"
          >
            Try Now
          </button>
        </div>
      </div>

      {/* Quick Pills */}
      <div className="px-6 mb-5">
        <div className="flex gap-3 mb-3">
          <Pill label="Calculator" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke={L.PRIMARY} strokeWidth="1.5"/><path d="M8 7h8M8 11h2M12 11h2M16 11h-0.01M8 15h2M12 15h2M16 15h-0.01M8 19h2M12 19h2M16 19h-0.01" stroke={L.PRIMARY} strokeWidth="1.5" strokeLinecap="round"/></svg>} />
          <Pill label="Compare" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 16V4m0 0L4 7m3-3l3 3M17 8v12m0 0l3-3m-3 3l-3-3" stroke={L.YELLOW} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} />
        </div>
        <div className="flex gap-3">
          <Pill label="Convert" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 8h12M16 8l-4-4M4 16h12M4 16l4 4" stroke={L.GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} />
          <Pill label="Price Alert" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={L.PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke={L.PINK} strokeWidth="1.5" strokeLinecap="round"/></svg>} />
        </div>
      </div>

      {/* Price Alerts Section */}
      <div className="px-6 mb-5">
        <p style={{ color: L.TEXT, fontSize: 20, fontWeight: 500, marginBottom: 14 }}>Price Alerts</p>
        <div className="flex flex-col gap-3">
          <AlertCard
            title="BTCUSDT just went above 30123.232"
            subtitle=""
            coin={imgCoin40PxLightBitcoin}
            actions={["Buy", "Sell", "More"]}
          />
          <AlertCard
            title="BCNUSDT just went above 30123.232"
            subtitle=""
            coin={imgCoin40PxLightBytecoin}
          />
        </div>
      </div>

      {/* Trending Section */}
      <div>
        <div
          style={{
            background: L.CARD_GLASS,
            borderRadius: "40px 40px 0 0",
            paddingTop: 20,
          }}
        >
          <p style={{ color: L.TEXT2, fontSize: 20, fontWeight: 500, padding: "0 25px 10px" }}>Trending</p>
          {TRENDING.map((coin) => (
            <TrendingRow key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </RoboNewLayout>
  );
}
