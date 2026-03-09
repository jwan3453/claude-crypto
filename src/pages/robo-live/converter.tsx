/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Converter — Figma: Converter 01 + Converter 02
import { useRouter } from "next/router";
import { useState } from "react";
import RoboLiveLayout, { L, BackButton } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgCoinBitcoin = "https://www.figma.com/api/mcp/asset/072a915c-b098-4502-9d95-9f4707e14c54";
const imgCoinEth = "https://www.figma.com/api/mcp/asset/8d24a377-4784-4891-a9ab-350da6bdcacd";

const COINS = [
  { id: "btc", symbol: "BTC", name: "Bitcoin", icon: imgCoinBitcoin, rate: 1 },
  { id: "eth", symbol: "ETH", name: "Etherium", icon: imgCoinEth, rate: 15.2 },
];

// ── Number Pad ─────────────────────────────────────────────────────────────
const PAD_KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "⌫"];

function NumPad({ onKey }: { onKey: (k: string) => void }) {
  return (
    <div className="grid grid-cols-3" style={{ gap: 0 }}>
      {PAD_KEYS.map(key => (
        <button
          key={key}
          onClick={() => onKey(key)}
          className="flex items-center justify-center transition-all duration-100 active:scale-95 active:bg-opacity-80"
          style={{
            height: 81,
            fontSize: key === "⌫" ? 22 : 28,
            fontWeight: 500,
            color: key === "*" ? L.TEXT3 : L.TEXT,
            background: "transparent",
          }}
        >
          {key === "⌫" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 7H7.5a1 1 0 00-.76.35L2 12l4.74 4.65a1 1 0 00.76.35H21a1 1 0 001-1V8a1 1 0 00-1-1z" stroke={L.TEXT} strokeWidth="1.5" />
              <path d="M16 10l-4 4M12 10l4 4" stroke={L.TEXT} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : key}
        </button>
      ))}
    </div>
  );
}

// ── Coin Row ───────────────────────────────────────────────────────────────
function CoinRow({ coin, value, active, onClick }: { coin: typeof COINS[0]; value: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 transition-all active:scale-[0.99]"
      style={{ padding: "16px 0" }}
    >
      <img src={coin.icon} alt="" style={{ width: 44, height: 44, objectFit: "cover", borderRadius: "50%", flexShrink: 0 }} />
      <div style={{ flex: 1, textAlign: "left" }}>
        <div className="flex items-center gap-1">
          <span style={{ fontSize: 16, fontWeight: 600, color: L.TEXT }}>{coin.symbol}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke={L.GREEN} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span style={{ fontSize: 13, color: L.TEXT3 }}>{coin.name}</span>
      </div>
      <span
        style={{
          fontSize: 20,
          fontWeight: active ? 500 : 400,
          color: active ? L.TEXT : L.TEXT3,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
        {active && <span style={{ color: L.TEXT, opacity: 0.5 }}>|</span>}
      </span>
    </button>
  );
}

export default function RoboLiveConverter() {
  const router = useRouter();
  const [activeInput, setActiveInput] = useState(0); // 0 = from, 1 = to
  const [values, setValues] = useState(["0,001502", "1,2000"]);
  const [showResult, setShowResult] = useState(false);

  function handleKey(k: string) {
    const newVals = [...values];
    const current = newVals[activeInput];

    if (k === "⌫") {
      newVals[activeInput] = current.length > 1 ? current.slice(0, -1) : "0";
    } else if (k === "*") {
      newVals[activeInput] = current + ".";
    } else {
      newVals[activeInput] = current === "0" ? k : current + k;
    }
    setValues(newVals);
  }

  return (
    <RoboLiveLayout title="Converter — E-Robo Wallet" hideTabBar>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -80, right: -60, width: 400, height: 400, background: "radial-gradient(ellipse, rgba(240,64,134,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", top: 100, left: -80, width: 350, height: 350, background: "radial-gradient(ellipse, rgba(159,157,243,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Header */}
        <div className="flex items-center" style={{ padding: "24px 25px 0" }}>
          <BackButton onClick={() => router.back()} />
        </div>

        {showResult ? (
          /* Converter 02 — Result view */
          <>
            <div className="text-center" style={{ padding: "16px 25px 0" }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: L.TEXT2, margin: 0 }}>Converter</h2>
            </div>

            {/* Convert card */}
            <div style={{ padding: "24px 25px 0" }}>
              <div
                style={{
                  background: L.CARD,
                  borderRadius: L.RADIUS_LG,
                  overflow: "hidden",
                  boxShadow: "0px 8px 32px rgba(55,62,125,0.08)",
                }}
              >
                <div style={{ borderBottom: `1px solid ${L.BG}` }}>
                  <CoinRow coin={COINS[0]} value={values[0]} active={activeInput === 0} onClick={() => { setActiveInput(0); setShowResult(false); }} />
                </div>
                <div>
                  <CoinRow coin={COINS[1]} value={values[1]} active={activeInput === 1} onClick={() => { setActiveInput(1); setShowResult(false); }} />
                </div>
              </div>
            </div>

            {/* Numpad */}
            <div style={{ background: L.CARD, borderRadius: "40px 40px 0 0", marginTop: "auto", padding: "8px 0" }}>
              <NumPad onKey={handleKey} />
            </div>
          </>
        ) : (
          /* Converter 01 — Input view */
          <>
            <div style={{ padding: "16px 25px 0" }}>
              <h1 style={{ fontSize: 36, fontWeight: 700, color: L.TEXT2, margin: 0 }}>Converter</h1>
            </div>

            {/* Coin rows */}
            <div style={{ padding: "24px 25px 0" }}>
              <CoinRow
                coin={COINS[0]}
                value={values[0]}
                active={activeInput === 0}
                onClick={() => setActiveInput(0)}
              />
              <div style={{ height: 1, background: L.BG, margin: "4px 0" }} />
              <CoinRow
                coin={COINS[1]}
                value={values[1]}
                active={activeInput === 1}
                onClick={() => setActiveInput(1)}
              />
            </div>

            {/* Convert button */}
            <div style={{ padding: "0 25px 12px" }}>
              <button
                onClick={() => setShowResult(true)}
                className="w-full transition-all duration-150 active:scale-[0.98]"
                style={{
                  background: L.TEXT,
                  color: "#fff",
                  borderRadius: L.RADIUS_LG,
                  padding: "14px",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                Convert
              </button>
            </div>

            {/* Numpad */}
            <div style={{ background: L.CARD, borderRadius: "40px 40px 0 0", marginTop: "auto", padding: "8px 0" }}>
              <NumPad onKey={handleKey} />
            </div>
          </>
        )}
      </div>
    </RoboLiveLayout>
  );
}
