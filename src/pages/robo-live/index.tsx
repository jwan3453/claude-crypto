/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Home (Light Theme) — Figma: Home 02
import { useRouter } from "next/router";
import { useState } from "react";
import RoboLiveLayout, { L, ChangeBadge } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgRobot = "https://www.figma.com/api/mcp/asset/d83c6618-4fd6-4635-b88a-ec30de9e0e1d";
const imgEth = "https://www.figma.com/api/mcp/asset/182fea63-c54f-471a-a49f-5b3cf86ee9ee";
const imgBtc = "https://www.figma.com/api/mcp/asset/de418eac-2f1f-4f49-aa15-3f4b7b63092b";
const imgCoinBitcoin = "https://www.figma.com/api/mcp/asset/072a915c-b098-4502-9d95-9f4707e14c54";
const imgCoinBytecoin = "https://www.figma.com/api/mcp/asset/5083f6ea-39d5-45cf-ae53-93b826b763ef";
const imgCoinVitae = "https://www.figma.com/api/mcp/asset/8625aedf-ca1a-43a9-9245-42e112795357";

// ── Data ───────────────────────────────────────────────────────────────────
const PRICE_ALERTS = [
  {
    id: "btc",
    coin: imgCoinBitcoin,
    title: "BTCUSDT just went above 30123.232",
    subtitle: "2 mins ago",
    actions: ["Buy", "Sell", "More"],
    expanded: true,
  },
  {
    id: "bcn",
    coin: imgCoinBytecoin,
    title: "BCNUSDT just went above 30123.232",
    subtitle: "5 mins ago",
    expanded: false,
  },
];

const TRENDING = [
  { id: "vitae", coin: imgCoinVitae, name: "Vitae", ticker: "VITAE", price: "$28,312.22", change: "2.2%", up: true },
];

// ── Alert Card ─────────────────────────────────────────────────────────────
function AlertCard({ alert, onToggle }: { alert: typeof PRICE_ALERTS[0]; onToggle: () => void }) {
  return (
    <div
      className="transition-all duration-200"
      style={{
        background: L.CARD_GLASS,
        borderRadius: L.RADIUS_LG,
        boxShadow: "0px 20px 60px 0px rgba(55,62,125,0.05)",
        overflow: "hidden",
        marginBottom: 12,
      }}
    >
      <div className="flex items-center gap-3 p-4">
        <img src={alert.coin} alt="" style={{ width: 40, height: 40, objectFit: "cover", borderRadius: "50%", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>{alert.title}</p>
        </div>
        <button
          onClick={onToggle}
          className="transition-transform duration-200 active:scale-90"
          style={{ flexShrink: 0 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: alert.expanded ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          >
            <path d="M9 18l6-6-6-6" stroke={L.YELLOW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {alert.expanded && alert.actions && (
        <>
          <div style={{ height: 1, background: L.BG, marginLeft: 16, marginRight: 16 }} />
          <div className="flex items-center justify-around py-3">
            {alert.actions.map((action, i) => (
              <button
                key={action}
                className="transition-all duration-150 active:scale-95 hover:opacity-80"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: i === 0 ? L.PRIMARY : L.TEXT3,
                  padding: "4px 16px",
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function RoboLiveHome() {
  const router = useRouter();
  const [alerts, setAlerts] = useState(PRICE_ALERTS);

  function toggleAlert(id: string) {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, expanded: !a.expanded } : a));
  }

  return (
    <RoboLiveLayout title="Home — E-Robo Wallet">
      {/* Blur background accents */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: 131, left: -153, width: 629, height: 668, background: "radial-gradient(ellipse at 40% 40%, rgba(159,157,243,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "32px 25px 0" }}>
        {/* Header */}
        <div className="flex items-start justify-between">
          <h1 style={{ fontSize: 32, fontWeight: 600, color: L.TEXT2, margin: 0 }}>Home</h1>
        </div>

        {/* Promo Banner */}
        <div
          style={{
            marginTop: 24,
            borderRadius: L.RADIUS_LG,
            background: L.PURPLE,
            overflow: "hidden",
            position: "relative",
            height: 140,
          }}
        >
          {/* Text */}
          <div style={{ position: "absolute", left: 20, top: 20, zIndex: 2, maxWidth: 182 }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#fff", lineHeight: 1.35, margin: 0 }}>
              Try our AI for avoid huge loss
            </p>
            <button
              onClick={() => router.push("/robo-live/home04")}
              className="transition-all duration-150 active:scale-95 hover:opacity-90 mt-4"
              style={{
                background: "#fafbfb",
                color: L.TEXT2,
                fontSize: 14,
                fontWeight: 600,
                padding: "7px 23px",
                borderRadius: 40,
                display: "block",
              }}
            >
              Try Now
            </button>
          </div>
          {/* Illustration */}
          <div style={{ position: "absolute", right: -10, top: -30, width: 165, height: 179, zIndex: 1 }}>
            <img src={imgRobot} alt="" style={{ position: "absolute", left: 28, top: 42, width: 137, height: 137, objectFit: "cover" }} />
            <img src={imgEth} alt="" style={{ position: "absolute", left: 97, top: 0, width: 66, height: 66, objectFit: "cover" }} />
            <img src={imgBtc} alt="" style={{ position: "absolute", left: 0, top: 118, width: 56, height: 56, objectFit: "cover" }} />
          </div>
        </div>

        {/* Price Alerts */}
        <div style={{ marginTop: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 500, color: L.TEXT, marginBottom: 16 }}>Price Alerts</h2>

          {/* Stacked card effect for collapsed alerts */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -8, left: 24, right: 24, height: 60, background: "rgba(255,255,255,0.4)", borderRadius: L.RADIUS_LG, zIndex: 0 }} />
            <div style={{ position: "absolute", top: -14, left: 40, right: 40, height: 60, background: "rgba(255,255,255,0.25)", borderRadius: L.RADIUS_LG, zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              {alerts.map(alert => (
                <AlertCard key={alert.id} alert={alert} onToggle={() => toggleAlert(alert.id)} />
              ))}
            </div>
          </div>
        </div>

        {/* Trending */}
        <div style={{ marginTop: 8 }}>
          <div
            style={{
              background: "rgba(255,255,255,0.8)",
              borderRadius: "40px 40px 0 0",
              padding: "24px 0 16px",
              marginLeft: -25,
              marginRight: -25,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 500, color: L.TEXT2, marginBottom: 16 }}>Trending</h2>
            {TRENDING.map(coin => (
              <button
                key={coin.id}
                onClick={() => router.push(`/robo-live/coin/${coin.id}`)}
                className="w-full flex items-center transition-all duration-150 active:scale-[0.99] hover:opacity-80"
                style={{ padding: "8px 0", gap: 12 }}
              >
                <img src={coin.coin} alt="" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "50%", flexShrink: 0 }} />
                <div style={{ flex: 1, textAlign: "left" }}>
                  <p style={{ fontSize: 18, fontWeight: 500, color: L.TEXT2, margin: 0 }}>{coin.name}</p>
                  <p style={{ fontSize: 14, fontWeight: 500, color: L.TEXT3, margin: 0 }}>{coin.ticker}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 18, fontWeight: 500, color: L.TEXT2, margin: 0 }}>{coin.price}</p>
                  <ChangeBadge value={coin.change} up={coin.up} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </RoboLiveLayout>
  );
}
