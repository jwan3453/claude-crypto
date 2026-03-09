/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Home 04 — Affiliate Program + Quick Actions
import { useRouter } from "next/router";
import RoboLiveLayout, { L, ChangeBadge } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgOther5 = "https://www.figma.com/api/mcp/asset/b070a22d-4122-4568-9105-23c6e17f18e7";
const imgCoinBitcoin = "https://www.figma.com/api/mcp/asset/072a915c-b098-4502-9d95-9f4707e14c54";
const imgCoinNeo = "https://www.figma.com/api/mcp/asset/0be11f5b-dd7c-4d97-a5fc-9bd6d0932d51";
const imgCoinAchain = "https://www.figma.com/api/mcp/asset/777a90ba-990c-43d0-820b-18a8557b0afc";

// ── Quick Action Icons ─────────────────────────────────────────────────────
function CalculatorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke={L.PINK} strokeWidth="1.5" fill={`${L.PINK}15`} />
      <path d="M8 7h8M8 12h2m4 0h2M8 16h2m4 0h2" stroke={L.PINK} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function CompareIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="9" height="9" rx="1.5" stroke={L.BLUE} strokeWidth="1.5" fill={`${L.BLUE}15`} />
      <rect x="13" y="11" width="9" height="9" rx="1.5" stroke={L.BLUE} strokeWidth="1.5" fill={`${L.BLUE}15`} />
      <path d="M8 13v4m-2-2h4M16 7V3m-2 2h4" stroke={L.BLUE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function ConvertIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M7 16H17M17 16l-3-3m3 3l-3 3M17 8H7M7 8l3-3M7 8l3 3" stroke={L.YELLOW} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PriceAlertIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill={`${L.PRIMARY}20`} stroke={L.PRIMARY} strokeWidth="1.3" />
    </svg>
  );
}

const QUICK_ACTIONS = [
  { label: "Calculator", icon: CalculatorIcon, path: "/robo-live/converter", bg: `${L.PINK}12` },
  { label: "Compare", icon: CompareIcon, path: "/robo-live/market", bg: `${L.BLUE}12` },
  { label: "Convert", icon: ConvertIcon, path: "/robo-live/converter", bg: `${L.YELLOW}12` },
  { label: "Price Alert", icon: PriceAlertIcon, path: "/robo-live/alerts", bg: `${L.PRIMARY}12` },
];

const TRENDING = [
  { id: "bitcoin", coin: imgCoinBitcoin, name: "Bitcoin", ticker: "BTC", price: "$32,128.80", change: "2.5%", up: true },
  { id: "neo", coin: imgCoinNeo, name: "Neo", ticker: "NEO", price: "$13,221.55", change: "2.2%", up: true },
  { id: "achain", coin: imgCoinAchain, name: "Achain", ticker: "ACT", price: "$28,312.22", change: "2.2%", up: false },
];

export default function RoboLiveHome04() {
  const router = useRouter();

  return (
    <RoboLiveLayout title="Home — E-Robo Wallet">
      {/* Pink/gradient background for top hero section */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 280, background: "linear-gradient(160deg, #ffb5c8 0%, #ffd6e0 40%, #f8e8f0 100%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="flex items-center justify-between" style={{ padding: "32px 25px 0" }}>
          <h1 style={{ fontSize: 32, fontWeight: 600, color: L.TEXT2, margin: 0 }}>Home</h1>
          <button
            className="flex items-center justify-center transition-all duration-150 active:scale-95"
            style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.9)", boxShadow: "0px 4px 20px rgba(55,62,125,0.08)" }}
          >
            <svg width="20" height="4" viewBox="0 0 20 4" fill="none">
              <circle cx="2" cy="2" r="2" fill={L.TEXT3} />
              <circle cx="10" cy="2" r="2" fill={L.TEXT3} />
              <circle cx="18" cy="2" r="2" fill={L.TEXT3} />
            </svg>
          </button>
        </div>

        {/* Affiliate Banner */}
        <div style={{ padding: "20px 25px 0", position: "relative" }}>
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 20, fontWeight: 600, color: L.TEXT, margin: 0, marginBottom: 6 }}>Affiliate program</p>
            <button
              onClick={() => router.push("/robo-live")}
              className="transition-all duration-150 active:scale-95 hover:opacity-90"
              style={{
                background: "#fff",
                color: L.TEXT2,
                fontSize: 14,
                fontWeight: 600,
                padding: "8px 28px",
                borderRadius: 40,
                display: "inline-block",
                boxShadow: "0px 4px 16px rgba(55,62,125,0.1)",
              }}
            >
              Learn more
            </button>
            {/* Illustration */}
            <div style={{ position: "absolute", right: 0, top: -20, width: 140, height: 140, pointerEvents: "none" }}>
              <img src={imgOther5} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
        </div>

        {/* White card base */}
        <div style={{ marginTop: 40, background: L.CARD, borderRadius: "40px 40px 0 0", minHeight: "calc(100vh - 200px)" }}>
          <div style={{ padding: "28px 25px" }}>
            {/* Quick Action Grid */}
            <div className="grid grid-cols-2 gap-3">
              {QUICK_ACTIONS.map(({ label, icon: Icon, path, bg }) => (
                <button
                  key={label}
                  onClick={() => router.push(path)}
                  className="flex items-center gap-3 transition-all duration-150 active:scale-95 hover:opacity-90"
                  style={{
                    background: L.BG,
                    borderRadius: L.RADIUS_LG,
                    padding: "16px 18px",
                    boxShadow: "0px 4px 20px rgba(55,62,125,0.04)",
                  }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: L.RADIUS_MD, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: L.TEXT2 }}>{label}</span>
                </button>
              ))}
            </div>

            {/* Trending */}
            <h2 style={{ fontSize: 20, fontWeight: 500, color: L.TEXT2, marginTop: 28, marginBottom: 12 }}>Trending</h2>
            <div>
              {TRENDING.map(coin => (
                <button
                  key={coin.id}
                  onClick={() => router.push(`/robo-live/coin/${coin.id}`)}
                  className="w-full flex items-center transition-all duration-150 active:scale-[0.99] hover:opacity-80"
                  style={{ padding: "10px 0", gap: 12 }}
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
      </div>
    </RoboLiveLayout>
  );
}
