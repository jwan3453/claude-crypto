/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Wallet History (Light Theme)
// Figma: Wallet 01 - History

import { useState } from "react";
import RoboNewLayout, { L } from "@/components/robo-new/RoboNewLayout";

// ── Asset URLs from Figma ─────────────────────────────────────────────────────
const imgCoin50PxLightBitcoin = "https://www.figma.com/api/mcp/asset/edd95650-e2f4-4428-b67f-1c2d77ea1054";
const imgCoin50PxLightAchain = "https://www.figma.com/api/mcp/asset/c469ed04-7824-460a-81cb-f8fbe9226419";
const imgCoin50PxLightBytecoin = "https://www.figma.com/api/mcp/asset/9657875c-b5bb-4685-901b-1fdf7c363747";

// ── Transaction data ──────────────────────────────────────────────────────────
const TRANSACTIONS = [
  {
    date: "12 June 2021",
    items: [
      { type: "coin", name: "Bitcoin", time: "11:34 AM", amount: "+ BTC 0.0056", usd: "- $950.50", coin: imgCoin50PxLightBitcoin },
      { type: "withdraw", name: "Withdraw", time: "10:12 AM", amount: "", usd: "- $2,700.00", isWithdraw: true },
    ],
  },
  {
    date: "10 June 2021",
    items: [
      { type: "coin", name: "Achain", time: "12:30 PM", amount: "+ ACH 1.3000", usd: "- $1,223.00", coin: imgCoin50PxLightAchain },
      { type: "deposit", name: "Deposit", time: "08:30 AM", amount: "", usd: "+ $250.00", isDeposit: true },
      { type: "coin", name: "Bytecoin", time: "07:13 AM", amount: "+ BCN 2.5400", usd: "- $340.00", coin: imgCoin50PxLightBytecoin },
    ],
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
function WithdrawIcon() {
  return (
    <div style={{ width: 50, height: 50, borderRadius: "50%", background: L.PRIMARY_SOFT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12l7 7 7-7" stroke={L.PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
function DepositIcon() {
  return (
    <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#def5e9", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke={L.GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ── Transaction row ───────────────────────────────────────────────────────────
function TxRow({ item }: { item: (typeof TRANSACTIONS[0]["items"])[0] }) {
  const isDeposit = "isDeposit" in item && item.isDeposit;
  const isWithdraw = "isWithdraw" in item && item.isWithdraw;
  const usdColor = item.usd.startsWith("+") ? L.GREEN : L.PINK;

  return (
    <div className="flex items-center" style={{ height: 70, padding: "0 25px" }}>
      {isDeposit ? (
        <DepositIcon />
      ) : isWithdraw ? (
        <WithdrawIcon />
      ) : (
        <img src={(item as { coin: string }).coin} alt={item.name} style={{ width: 50, height: 50, objectFit: "cover", flexShrink: 0 }} />
      )}
      <div style={{ marginLeft: 10, flex: 1 }}>
        <p style={{ color: L.TEXT2, fontSize: 18, fontWeight: 500 }}>{item.name}</p>
        <p style={{ color: L.TEXT3, fontSize: 14 }}>{item.time}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        {item.amount && (
          <p style={{ fontSize: 18, fontWeight: 500 }}>
            <span style={{ color: L.GREEN }}>{item.amount.split(" ")[0]}</span>
            <span style={{ color: L.TEXT2 }}> {item.amount.slice(2)}</span>
          </p>
        )}
        <p style={{ fontSize: isDeposit ? 18 : 14, fontWeight: isDeposit ? 500 : 400, color: usdColor }}>
          {item.usd.split(" ")[0]} <span style={{ color: L.TEXT2 }}>{item.usd.split(" ").slice(1).join(" ")}</span>
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboNewWallet() {
  const [activeTab, setActiveTab] = useState<"history" | "portfolio">("history");

  return (
    <RoboNewLayout title="E-Robo Wallet — Wallet">
      {/* Header */}
      <div className="px-6 pt-8 pb-2">
        <p style={{ color: L.TEXT, fontSize: 20, fontWeight: 500 }}>Total Wallet Value</p>
        <p style={{ color: L.TEXT2, fontSize: 32, fontWeight: 600, marginTop: 8 }}>$29,100.50</p>
      </div>

      {/* Tab Switch */}
      <div className="px-6 mb-5">
        <div
          style={{
            background: "#ebeff1",
            borderRadius: 30,
            padding: 4,
            display: "flex",
            position: "relative",
          }}
        >
          {(["portfolio", "history"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 transition-all duration-200"
              style={{
                padding: "10px",
                borderRadius: 25,
                background: activeTab === tab ? "rgba(255,255,255,0.8)" : "transparent",
                boxShadow: activeTab === tab ? "0px 20px 40px 0px rgba(55,62,125,0.1)" : "none",
                color: activeTab === tab ? L.TEXT : L.TEXT3,
                fontSize: 14,
                fontWeight: activeTab === tab ? 600 : 500,
                textTransform: "capitalize",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction List */}
      <div>
        {TRANSACTIONS.map((group) => (
          <div key={group.date}>
            <p style={{ color: L.TEXT3, fontSize: 18, padding: "16px 25px 4px" }}>{group.date}</p>
            {group.items.map((item, idx) => (
              <TxRow key={idx} item={item} />
            ))}
          </div>
        ))}
      </div>
    </RoboNewLayout>
  );
}
