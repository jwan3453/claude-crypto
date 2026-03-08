/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Price Alerts Screen

import { useState } from "react";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

type Alert = { id: number; coin: string; ticker: string; type: "Above" | "Below"; target: string; current: string; up: boolean; active: boolean; color: string };

const INITIAL_ALERTS: Alert[] = [
  { id: 1, coin: "Bitcoin", ticker: "BTC", type: "Above", target: "$45,000", current: "$43,250", up: true, active: true, color: "#F7931A" },
  { id: 2, coin: "Ethereum", ticker: "ETH", type: "Below", target: "$2,500", current: "$2,840", up: false, active: true, color: "#627EEA" },
  { id: 3, coin: "Solana", ticker: "SOL", type: "Above", target: "$120", current: "$98.50", up: true, active: false, color: "#9945FF" },
  { id: 4, coin: "Cardano", ticker: "ADA", type: "Below", target: "$0.50", current: "$0.62", up: false, active: true, color: "#0033AD" },
];

function PlusIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={R.ACCENT} strokeWidth="1.5" /><path d="M12 7v10M7 12h10" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

function CoinAvatar({ ticker, color }: { ticker: string; color: string }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${color}33` }}>
      <span style={{ color, fontSize: 10, fontWeight: 700 }}>{ticker.slice(0, 3)}</span>
    </div>
  );
}

// Toggle Switch
function Toggle({ active, onChange }: { active: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!active)}
      style={{
        width: 44,
        height: 24,
        borderRadius: 999,
        background: active ? R.ACCENT : "rgba(255,255,255,0.15)",
        position: "relative",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute",
        top: 3,
        left: active ? 22 : 3,
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: active ? "#03313A" : "white",
        transition: "left 0.2s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
      }} />
    </button>
  );
}

// Add Alert Modal
function AddAlertModal({ onClose, onAdd }: { onClose: () => void; onAdd: (a: Alert) => void }) {
  const [coin, setCoin] = useState("Bitcoin");
  const [type, setType] = useState<"Above" | "Below">("Above");
  const [target, setTarget] = useState("");

  const COINS_OPT = [
    { name: "Bitcoin", ticker: "BTC", color: "#F7931A" },
    { name: "Ethereum", ticker: "ETH", color: "#627EEA" },
    { name: "Solana", ticker: "SOL", color: "#9945FF" },
    { name: "BNB", ticker: "BNB", color: "#F3BA2F" },
  ];

  const selected = COINS_OPT.find((c) => c.name === coin) || COINS_OPT[0];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={{ background: R.BG2, borderRadius: `${R.RADIUS_LG} ${R.RADIUS_LG} 0 0`, padding: "24px", width: "100%", maxWidth: 390, border: "1px solid rgba(255,255,255,0.08)", borderBottom: "none" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ color: R.TEXT, fontSize: 18, fontWeight: 700 }}>Set Price Alert</h2>
          <button onClick={onClose} style={{ color: R.TEXT2, fontSize: 20, lineHeight: 1 }}>×</button>
        </div>

        {/* Coin Selector */}
        <div className="mb-4">
          <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 8, display: "block" }}>Select Coin</label>
          <div className="flex gap-2">
            {COINS_OPT.map((c) => (
              <button key={c.name} onClick={() => setCoin(c.name)} style={{ flex: 1, padding: "8px", borderRadius: R.RADIUS_SM, background: coin === c.name ? `${c.color}33` : R.GLASS, border: `1px solid ${coin === c.name ? c.color + "66" : "rgba(255,255,255,0.06)"}`, color: coin === c.name ? c.color : R.TEXT2, fontSize: 12, fontWeight: coin === c.name ? 600 : 400, transition: "all 0.15s" }}>
                {c.ticker}
              </button>
            ))}
          </div>
        </div>

        {/* Alert Type */}
        <div className="mb-4">
          <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 8, display: "block" }}>Alert Type</label>
          <div className="flex gap-2">
            {(["Above", "Below"] as const).map((t) => (
              <button key={t} onClick={() => setType(t)} style={{ flex: 1, padding: "10px", borderRadius: R.RADIUS_MD, background: type === t ? `${R.ACCENT}22` : R.GLASS, border: `1px solid ${type === t ? R.ACCENT + "44" : "rgba(255,255,255,0.06)"}`, color: type === t ? R.ACCENT : R.TEXT2, fontSize: 14, fontWeight: type === t ? 600 : 400, transition: "all 0.15s" }}>
                {t === "Above" ? "↑ Price Above" : "↓ Price Below"}
              </button>
            ))}
          </div>
        </div>

        {/* Target Price */}
        <div className="mb-6">
          <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 8, display: "block" }}>Target Price (USD)</label>
          <div style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "12px 16px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: R.TEXT2, fontSize: 16 }}>$</span>
            <input
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="0.00"
              type="number"
              style={{ background: "transparent", border: "none", outline: "none", color: R.TEXT, fontSize: 18, fontWeight: 600, flex: 1, fontFamily: "var(--font-poppins), sans-serif" }}
            />
          </div>
        </div>

        <button
          onClick={() => {
            if (!target) return;
            onAdd({ id: Date.now(), coin: selected.name, ticker: selected.ticker, type, target: `$${target}`, current: "$0", up: type === "Above", active: true, color: selected.color });
            onClose();
          }}
          style={{ width: "100%", background: R.ACCENT, color: "#03313A", borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700, transition: "opacity 0.15s" }}
          className="hover:opacity-85 active:opacity-70"
        >
          Set Alert
        </button>
      </div>
    </div>
  );
}

export default function RoboAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>(INITIAL_ALERTS);
  const [showModal, setShowModal] = useState(false);

  const toggle = (id: number) => {
    setAlerts((prev) => prev.map((a) => a.id === id ? { ...a, active: !a.active } : a));
  };
  const remove = (id: number) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <RoboLayout title="E-Robo Wallet — Alerts">
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-4">
        <h1 style={{ color: R.TEXT, fontSize: 22, fontWeight: 700 }}>Price Alerts</h1>
        <button onClick={() => setShowModal(true)} className="flex items-center gap-1.5 transition-opacity hover:opacity-70 active:opacity-50">
          <PlusIcon />
          <span style={{ color: R.ACCENT, fontSize: 14, fontWeight: 600 }}>Add</span>
        </button>
      </div>

      {/* Summary */}
      <div className="px-5 pb-4 flex gap-3">
        <div style={{ flex: 1, background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ color: R.TEXT2, fontSize: 11 }}>Active</p>
          <p style={{ color: R.ACCENT, fontSize: 20, fontWeight: 700 }}>{alerts.filter((a) => a.active).length}</p>
        </div>
        <div style={{ flex: 1, background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ color: R.TEXT2, fontSize: 11 }}>Total Set</p>
          <p style={{ color: R.TEXT, fontSize: 20, fontWeight: 700 }}>{alerts.length}</p>
        </div>
        <div style={{ flex: 1, background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ color: R.TEXT2, fontSize: 11 }}>Triggered</p>
          <p style={{ color: R.GREEN, fontSize: 20, fontWeight: 700 }}>0</p>
        </div>
      </div>

      {/* Alerts List */}
      <div className="px-5">
        <p style={{ color: R.TEXT2, fontSize: 13, marginBottom: 12 }}>Tap an alert to edit · Swipe to delete</p>
        <div className="flex flex-col gap-3">
          {alerts.map((alert) => (
            <div key={alert.id} style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "16px", border: "1px solid rgba(255,255,255,0.05)", opacity: alert.active ? 1 : 0.5, transition: "opacity 0.2s" }}>
              <div className="flex items-center gap-3">
                <CoinAvatar ticker={alert.ticker} color={alert.color} />
                <div style={{ flex: 1 }}>
                  <div className="flex items-center gap-2">
                    <span style={{ color: R.TEXT, fontSize: 14, fontWeight: 600 }}>{alert.coin}</span>
                    <span style={{ background: alert.type === "Above" ? `${R.GREEN}22` : `${R.RED}22`, color: alert.type === "Above" ? R.GREEN : R.RED, borderRadius: 999, fontSize: 11, fontWeight: 600, padding: "1px 7px" }}>
                      {alert.type === "Above" ? "↑" : "↓"} {alert.type}
                    </span>
                  </div>
                  <p style={{ color: R.TEXT2, fontSize: 12, marginTop: 2 }}>
                    Target: <span style={{ color: R.TEXT, fontWeight: 600 }}>{alert.target}</span>
                    <span style={{ color: R.TEXT3, marginLeft: 8 }}>Current: {alert.current}</span>
                  </p>
                </div>
                <Toggle active={alert.active} onChange={() => toggle(alert.id)} />
              </div>
              <div className="flex justify-end mt-3">
                <button onClick={() => remove(alert.id)} style={{ color: R.RED, fontSize: 12, opacity: 0.7 }} className="hover:opacity-100 transition-opacity">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {alerts.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔔</div>
            <p style={{ color: R.TEXT, fontSize: 16, fontWeight: 600, marginBottom: 6 }}>No Alerts Set</p>
            <p style={{ color: R.TEXT3, fontSize: 13, marginBottom: 20 }}>Add price alerts to stay on top of market moves</p>
            <button onClick={() => setShowModal(true)} style={{ background: R.ACCENT, color: "#03313A", borderRadius: 999, padding: "12px 28px", fontSize: 14, fontWeight: 700 }}>
              Add First Alert
            </button>
          </div>
        )}
      </div>

      <div style={{ height: 20 }} />

      {showModal && <AddAlertModal onClose={() => setShowModal(false)} onAdd={(a) => setAlerts((prev) => [a, ...prev])} />}
    </RoboLayout>
  );
}
