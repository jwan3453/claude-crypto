/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Price Alerts — Figma: Price Alert
import { useRouter } from "next/router";
import { useState } from "react";
import RoboLiveLayout, { L, BackButton } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgCoinBitcoin = "https://www.figma.com/api/mcp/asset/072a915c-b098-4502-9d95-9f4707e14c54";
const imgCoinEth = "https://www.figma.com/api/mcp/asset/8d24a377-4784-4891-a9ab-350da6bdcacd";

// ── Toggle Component ───────────────────────────────────────────────────────
function Toggle({ active, onChange }: { active: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="transition-all duration-200 active:scale-90"
      style={{
        width: 40,
        height: 22,
        borderRadius: 11,
        background: active ? L.PRIMARY : L.TEXT_INACTIVE,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 2,
          left: active ? 20 : 2,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 0.2s ease",
          boxShadow: "0px 1px 4px rgba(0,0,0,0.15)",
        }}
      />
    </button>
  );
}

// ── Alert Row ──────────────────────────────────────────────────────────────
function AlertRow({
  icon,
  label,
  time,
  active,
  onToggle,
  separator,
}: {
  icon: "up" | "down";
  label: string;
  time: string;
  active: boolean;
  onToggle: () => void;
  separator?: boolean;
}) {
  const iconBg = icon === "up" ? L.GREEN_SOFT : L.RED_SOFT;
  const iconColor = icon === "up" ? L.GREEN : L.RED;

  return (
    <>
      <div className="flex items-center gap-3" style={{ padding: "14px 16px" }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            {icon === "up" ? (
              <path d="M7 17L17 7M17 7H10M17 7v7" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M7 7L17 17M17 17H10M17 17v-7" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 14, fontWeight: 500, color: L.TEXT, margin: 0 }}>{label}</p>
          <p style={{ fontSize: 12, fontWeight: 400, color: L.TEXT3, margin: 0 }}>{time}</p>
        </div>
        <Toggle active={active} onChange={onToggle} />
      </div>
      {separator && <div style={{ height: 1, background: L.BG, marginLeft: 16, marginRight: 16 }} />}
    </>
  );
}

// ── Alert Section ──────────────────────────────────────────────────────────
function AlertSection({
  coinSrc,
  coinName,
  alerts,
  onToggle,
}: {
  coinSrc: string;
  coinName: string;
  alerts: { id: string; icon: "up" | "down"; label: string; time: string; active: boolean }[];
  onToggle: (id: string) => void;
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      {/* Coin Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
        <div className="flex items-center gap-3">
          <img src={coinSrc} alt="" style={{ width: 40, height: 40, objectFit: "cover", borderRadius: "50%" }} />
          <span style={{ fontSize: 15, fontWeight: 500, color: L.TEXT2 }}>{coinName}</span>
        </div>
        <button
          className="flex items-center justify-center transition-all active:scale-90"
          style={{ width: 28, height: 28 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke={L.PRIMARY} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Alert list card */}
      <div
        style={{
          background: L.CARD_GLASS,
          borderRadius: L.RADIUS_LG,
          overflow: "hidden",
          boxShadow: "0px 4px 24px rgba(55,62,125,0.05)",
        }}
      >
        {alerts.map((alert, i) => (
          <AlertRow
            key={alert.id}
            icon={alert.icon}
            label={alert.label}
            time={alert.time}
            active={alert.active}
            onToggle={() => onToggle(alert.id)}
            separator={i < alerts.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
const initialAlerts = {
  bitcoin: [
    { id: "btc-1", icon: "up" as const, label: "Above $ 1100,000", time: "3 mins ago", active: true },
    { id: "btc-2", icon: "down" as const, label: "Below $48,000", time: "1 hour ago", active: false },
    { id: "btc-3", icon: "down" as const, label: "Below $32000", time: "9 hours ago", active: false },
  ],
  ethereum: [
    { id: "eth-1", icon: "up" as const, label: "Above $ 1100,000", time: "3 mins ago", active: true },
    { id: "eth-2", icon: "down" as const, label: "Below $48,000", time: "1 hour ago", active: false },
    { id: "eth-3", icon: "down" as const, label: "Below $32000", time: "9 hours ago", active: false },
  ],
};

export default function RoboLiveAlerts() {
  const router = useRouter();
  const [alerts, setAlerts] = useState(initialAlerts);

  function toggleAlert(coin: "bitcoin" | "ethereum", id: string) {
    setAlerts(prev => ({
      ...prev,
      [coin]: prev[coin].map(a => a.id === id ? { ...a, active: !a.active } : a),
    }));
  }

  return (
    <RoboLiveLayout title="Price Alerts — E-Robo Wallet" hideTabBar>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -129, right: -50, width: 500, height: 500, background: "radial-gradient(ellipse at 60% 30%, rgba(159,157,243,0.15) 0%, transparent 60%)", filter: "blur(50px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ padding: "24px 25px 0" }}>
          <BackButton onClick={() => router.back()} />
        </div>

        {/* White card base */}
        <div style={{ margin: "20px 0 0", background: "rgba(255,255,255,0.6)", borderRadius: "40px 40px 0 0", minHeight: "calc(100vh - 100px)", padding: "28px 25px 32px" }}>
          <h1 style={{ fontSize: 22, fontWeight: 600, color: L.TEXT2, margin: "0 0 24px" }}>Price Alerts</h1>

          <AlertSection
            coinSrc={imgCoinBitcoin}
            coinName="Bitcoin BTC"
            alerts={alerts.bitcoin}
            onToggle={(id) => toggleAlert("bitcoin", id)}
          />

          <AlertSection
            coinSrc={imgCoinEth}
            coinName="Etherium ETH"
            alerts={alerts.ethereum}
            onToggle={(id) => toggleAlert("ethereum", id)}
          />
        </div>
      </div>
    </RoboLiveLayout>
  );
}
