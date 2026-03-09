/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Wallet History — Figma: Wallet 01 - History
import { useState } from "react";
import RoboLiveLayout, { L } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgCoinBitcoin = "https://www.figma.com/api/mcp/asset/072a915c-b098-4502-9d95-9f4707e14c54";
const imgCoinAchain = "https://www.figma.com/api/mcp/asset/777a90ba-990c-43d0-820b-18a8557b0afc";
const imgCoinBytecoin = "https://www.figma.com/api/mcp/asset/5083f6ea-39d5-45cf-ae53-93b826b763ef";

const HISTORY = {
  "12 June 2021": [
    { id: 1, icon: imgCoinBitcoin, name: "Bitcoin", time: "11:34 AM", coinAmount: "+ BTC 0.0056", usdAmount: "- $950.50", coinUp: true, usdUp: false, type: "coin" },
    { id: 2, icon: null, name: "Withdraw", time: "10:12 AM", coinAmount: null, usdAmount: "- $2,700.00", coinUp: false, usdUp: false, type: "withdraw" },
  ],
  "10 June 2021": [
    { id: 3, icon: imgCoinAchain, name: "Achain", time: "12:30 PM", coinAmount: "+ ACH 1.3000", usdAmount: "- $1,223.00", coinUp: true, usdUp: false, type: "coin" },
    { id: 4, icon: null, name: "Deposit", time: "08:30 AM", coinAmount: null, usdAmount: "+ $250.00", coinUp: false, usdUp: true, type: "deposit" },
    { id: 5, icon: imgCoinBytecoin, name: "Bytecoin", time: "07:13 AM", coinAmount: "+ BCN 2.5400", usdAmount: "- $340.00", coinUp: true, usdUp: false, type: "coin" },
  ],
};

function TransactionIcon({ type, coinSrc }: { type: string; coinSrc: string | null }) {
  if (type === "coin" && coinSrc) {
    return <img src={coinSrc} alt="" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "50%" }} />;
  }
  if (type === "withdraw") {
    return (
      <div style={{ width: 50, height: 50, borderRadius: "50%", background: L.BG, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 16V4M12 16l-4-4M12 16l4-4" stroke={L.PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 20h16" stroke={L.PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div style={{ width: 50, height: 50, borderRadius: "50%", background: L.GREEN_SOFT, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 8V20M12 8l-4 4M12 8l4 4" stroke={L.GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4h16" stroke={L.GREEN} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function RoboLiveWallet() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "history">("history");

  return (
    <RoboLiveLayout title="Wallet — E-Robo Wallet">
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -177, left: -191, width: 637, height: 982, background: "radial-gradient(ellipse at 50% 20%, rgba(159,157,243,0.15) 0%, transparent 60%)", filter: "blur(50px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "32px 25px 0" }}>
        {/* Total Value */}
        <p style={{ fontSize: 16, fontWeight: 500, color: L.TEXT3, margin: 0 }}>Total Wallet Value</p>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: L.TEXT2, margin: "8px 0 24px" }}>$29,100.50</h1>

        {/* Portfolio / History Tab */}
        <div
          className="flex items-center"
          style={{ background: L.CARD_GLASS, borderRadius: 40, padding: 4 }}
        >
          {(["portfolio", "history"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 transition-all duration-150 active:scale-95"
              style={{
                padding: "12px",
                borderRadius: 36,
                background: activeTab === tab ? L.CARD : "transparent",
                boxShadow: activeTab === tab ? "0px 4px 12px rgba(55,62,125,0.1)" : "none",
                fontSize: 14,
                fontWeight: activeTab === tab ? 600 : 400,
                color: activeTab === tab ? L.TEXT : L.TEXT3,
                textTransform: "capitalize",
              }}
            >
              {tab === "portfolio" ? "Porfolio" : "History"}
            </button>
          ))}
        </div>

        {/* Transaction History */}
        {activeTab === "history" && (
          <div style={{ marginTop: 24 }}>
            {Object.entries(HISTORY).map(([date, txns]) => (
              <div key={date}>
                <p style={{ fontSize: 18, fontWeight: 600, color: L.TEXT2, margin: "0 0 12px" }}>{date}</p>
                {txns.map(tx => (
                  <div
                    key={tx.id}
                    className="flex items-center gap-3"
                    style={{ marginBottom: 12 }}
                  >
                    <TransactionIcon type={tx.type} coinSrc={tx.icon} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 16, fontWeight: 500, color: L.TEXT2, margin: 0 }}>{tx.name}</p>
                      <p style={{ fontSize: 13, fontWeight: 400, color: L.TEXT3, margin: 0 }}>{tx.time}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      {tx.coinAmount && (
                        <p style={{ fontSize: 14, fontWeight: 500, color: tx.coinUp ? L.GREEN : L.RED, margin: 0 }}>{tx.coinAmount}</p>
                      )}
                      <p style={{ fontSize: 14, fontWeight: 500, color: tx.usdUp ? L.GREEN : L.RED, margin: 0 }}>{tx.usdAmount}</p>
                    </div>
                  </div>
                ))}
                <div style={{ height: 20 }} />
              </div>
            ))}
          </div>
        )}

        {/* Portfolio (placeholder) */}
        {activeTab === "portfolio" && (
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ margin: "0 auto 16px" }}>
              <circle cx="40" cy="40" r="36" fill={L.PRIMARY_SOFT} />
              <path d="M24 52L32 36l12 10 8-16 12 22" stroke={L.PRIMARY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <p style={{ color: L.TEXT3, fontSize: 15 }}>Portfolio view coming soon</p>
          </div>
        )}
      </div>
    </RoboLiveLayout>
  );
}
