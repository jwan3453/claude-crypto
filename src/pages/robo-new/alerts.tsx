/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Price Alerts (Light Theme)
// Figma: Price Alert

import { useState } from "react";
import { useRouter } from "next/router";
import RoboNewLayout, { BackButton, L } from "@/components/robo-new/RoboNewLayout";

// ── Asset URLs from Figma ─────────────────────────────────────────────────────
const imgCoin40PxLightBitcoin = "https://www.figma.com/api/mcp/asset/c8e194b5-6596-4e65-ba58-980842cb87ae";
const imgCoin40PxLightEtherium = "https://www.figma.com/api/mcp/asset/a99ce10f-574b-4c90-b4e1-533eead6e4ca";
const imgIcon32PxUp = "https://www.figma.com/api/mcp/asset/054ec472-760a-4832-80c7-11f478574e82";
const imgIcon32PxDown = "https://www.figma.com/api/mcp/asset/1bda0caf-644f-4aca-8798-d55156e32d9a";

// ── Alert data ────────────────────────────────────────────────────────────────
const ALERT_GROUPS = [
  {
    coin: "Bitcoin BTC",
    icon: imgCoin40PxLightBitcoin,
    alerts: [
      { label: "Above $ 1100,000", time: "3 mins ago", active: true, up: true },
      { label: "Below $48,000", time: "1 hour ago", active: false, up: false },
      { label: "Below $32000", time: "9 hours ago", active: false, up: false },
    ],
  },
  {
    coin: "Etherium ETH",
    icon: imgCoin40PxLightEtherium,
    alerts: [
      { label: "Above $ 1100,000", time: "3 mins ago", active: true, up: true },
      { label: "Below $48,000", time: "1 hour ago", active: false, up: false },
      { label: "Below $32000", time: "9 hours ago", active: false, up: false },
    ],
  },
];

// ── Toggle ────────────────────────────────────────────────────────────────────
function Toggle({ active, onToggle }: { active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      style={{
        width: 40,
        height: 22,
        borderRadius: 23,
        background: active ? L.PRIMARY : L.PRIMARY_SOFT,
        position: "relative",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
      className="active:scale-95"
    >
      <div
        style={{
          position: "absolute",
          top: 2,
          left: active ? "calc(100% - 20px)" : 2,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "white",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      />
    </button>
  );
}

// ── Alert Card ────────────────────────────────────────────────────────────────
function AlertCard({ group }: { group: typeof ALERT_GROUPS[0] }) {
  const [toggles, setToggles] = useState(group.alerts.map((a) => a.active));

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Coin header */}
      <div className="flex items-center px-6 mb-3">
        <img src={group.icon} alt={group.coin} style={{ width: 40, height: 40, objectFit: "cover", flexShrink: 0 }} />
        <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500, flex: 1, marginLeft: 10 }}>{group.coin}</p>
        <button
          style={{
            width: 20,
            height: 20,
            color: L.PRIMARY,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="hover:opacity-70 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke={L.PRIMARY} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Alerts list */}
      <div
        className="mx-6"
        style={{
          background: L.CARD,
          borderRadius: L.RADIUS_LG,
          overflow: "hidden",
        }}
      >
        {group.alerts.map((alert, idx) => (
          <div key={idx}>
            {idx > 0 && (
              <div style={{ height: 1, background: L.BG, margin: "0 15px" }} />
            )}
            <div className="flex items-center" style={{ padding: "16px 15px", minHeight: 70 }}>
              <img
                src={alert.up ? imgIcon32PxUp : imgIcon32PxDown}
                alt=""
                style={{ width: 32, height: 32, flexShrink: 0 }}
              />
              <div style={{ flex: 1, marginLeft: 10 }}>
                <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500 }}>{alert.label}</p>
                <p style={{ color: L.TEXT3, fontSize: 12, marginTop: 2 }}>{alert.time}</p>
              </div>
              <Toggle
                active={toggles[idx]}
                onToggle={() => {
                  const next = [...toggles];
                  next[idx] = !next[idx];
                  setToggles(next);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboNewAlerts() {
  const router = useRouter();

  return (
    <RoboNewLayout title="E-Robo Wallet — Price Alerts">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-8 pb-5">
        <BackButton onClick={() => router.back()} />
      </div>

      <p style={{ color: L.TEXT, fontSize: 20, fontWeight: 500, padding: "0 25px 20px" }}>Price Alerts</p>

      {/* Background panel */}
      <div
        style={{
          background: L.BG2,
          borderRadius: "40px 40px 0 0",
          paddingTop: 8,
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <div style={{ paddingTop: 16 }}>
          {ALERT_GROUPS.map((group, i) => (
            <AlertCard key={i} group={group} />
          ))}
        </div>
      </div>
    </RoboNewLayout>
  );
}
