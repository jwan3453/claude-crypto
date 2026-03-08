/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Wallet Screen

import { useState } from "react";
import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

const ASSETS = [
  { id: "bitcoin", name: "Bitcoin", ticker: "BTC", amount: "0.52 BTC", usd: "$22,490", change: "+3.2%", up: true, color: "#F7931A" },
  { id: "ethereum", name: "Ethereum", ticker: "ETH", amount: "2.4 ETH", usd: "$6,816", change: "-1.1%", up: false, color: "#627EEA" },
  { id: "solana", name: "Solana", ticker: "SOL", amount: "12 SOL", usd: "$1,182", change: "+5.6%", up: true, color: "#9945FF" },
  { id: "cardano", name: "Cardano", ticker: "ADA", amount: "500 ADA", usd: "$310", change: "+0.8%", up: true, color: "#0033AD" },
];

const TRANSACTIONS = [
  { type: "Received", coin: "Bitcoin", amount: "+0.05 BTC", usd: "+$2,162", date: "Today, 14:32", up: true },
  { type: "Sent", coin: "Ethereum", amount: "-0.5 ETH", usd: "-$1,420", date: "Yesterday, 09:15", up: false },
  { type: "Swap", coin: "BTC → SOL", amount: "+5 SOL", usd: "+$492", date: "Mar 7, 18:40", up: true },
  { type: "Received", coin: "Cardano", amount: "+200 ADA", usd: "+$124", date: "Mar 6, 11:22", up: true },
  { type: "Sent", coin: "Solana", amount: "-3 SOL", usd: "-$295", date: "Mar 5, 20:07", up: false },
];

type WalletTab = "Crypto" | "NFT" | "History";

function CoinAvatar({ ticker, color }: { ticker: string; color: string }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: `1px solid ${color}33` }}>
      <span style={{ color, fontSize: 10, fontWeight: 700 }}>{ticker.slice(0, 3)}</span>
    </div>
  );
}

function TxIcon({ up }: { up: boolean }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "50%", background: up ? `${R.GREEN}22` : `${R.RED}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d={up ? "M12 19V5M5 12l7-7 7 7" : "M12 5v14M5 12l7 7 7-7"} stroke={up ? R.GREEN : R.RED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function QrIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke={R.TEXT2} strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1" stroke={R.TEXT2} strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1" stroke={R.TEXT2} strokeWidth="1.5" /><path d="M14 14h2v2h-2zM18 14h3M14 18v3M18 18h3v3h-3z" stroke={R.TEXT2} strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export default function RoboWallet() {
  const router = useRouter();
  const [tab, setTab] = useState<WalletTab>("Crypto");

  return (
    <RoboLayout title="E-Robo Wallet — Wallet">
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-4">
        <h1 style={{ color: R.TEXT, fontSize: 22, fontWeight: 700 }}>My Wallet</h1>
        <button className="hover:opacity-70 transition-opacity active:opacity-50">
          <QrIcon />
        </button>
      </div>

      {/* Balance Card */}
      <div className="px-5 pb-5">
        <div style={{ borderRadius: R.RADIUS_LG, background: `linear-gradient(135deg, ${R.PURPLE}cc 0%, #5B5BD0 40%, ${R.ACCENT}44 100%)`, padding: "20px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: `${R.ACCENT}22`, filter: "blur(30px)" }} />
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 4 }}>Total Portfolio</p>
          <p style={{ color: "white", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}>$30,798.00</p>
          <div className="flex gap-4 mt-3">
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>24h Change</p>
              <p style={{ color: R.GREEN, fontSize: 13, fontWeight: 600 }}>+$724 (+2.4%)</p>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>All Time</p>
              <p style={{ color: R.GREEN, fontSize: 13, fontWeight: 600 }}>+$8,230 (+36.5%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 pb-5 flex gap-3">
        <button onClick={() => router.push("/robo/send")} style={{ flex: 1, background: R.ACCENT, color: "#03313A", borderRadius: 999, padding: "12px", fontSize: 14, fontWeight: 600, transition: "opacity 0.15s" }} className="hover:opacity-85 active:opacity-70">Send</button>
        <button onClick={() => router.push("/robo/receive")} style={{ flex: 1, background: R.GLASS, color: R.ACCENT, borderRadius: 999, padding: "12px", fontSize: 14, fontWeight: 600, border: `1px solid ${R.ACCENT}44`, transition: "opacity 0.15s" }} className="hover:opacity-85 active:opacity-70">Receive</button>
        <button onClick={() => router.push("/robo/swap")} style={{ flex: 1, background: R.GLASS, color: R.TEXT2, borderRadius: 999, padding: "12px", fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.08)", transition: "opacity 0.15s" }} className="hover:opacity-85 active:opacity-70">Swap</button>
      </div>

      {/* Tabs */}
      <div className="px-5 pb-4 flex gap-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {(["Crypto", "NFT", "History"] as WalletTab[]).map((t) => {
          const active = tab === t;
          return (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "8px 18px", borderRadius: 999, fontSize: 13, fontWeight: active ? 600 : 400, background: active ? `${R.ACCENT}22` : "transparent", color: active ? R.ACCENT : R.TEXT3, transition: "all 0.15s" }}>
              {t}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="px-5 pt-4">
        {tab === "Crypto" && (
          <div className="flex flex-col gap-2">
            {ASSETS.map((a) => (
              <button key={a.id} onClick={() => router.push(`/robo/coin/${a.id}`)} className="flex items-center gap-3 w-full text-left transition-all duration-150 active:scale-[0.98]" style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <CoinAvatar ticker={a.ticker} color={a.color} />
                <div style={{ flex: 1 }}>
                  <p style={{ color: R.TEXT, fontSize: 14, fontWeight: 600 }}>{a.name}</p>
                  <p style={{ color: R.TEXT2, fontSize: 12 }}>{a.amount}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: R.TEXT, fontSize: 14, fontWeight: 600 }}>{a.usd}</p>
                  <p style={{ color: a.up ? R.GREEN : R.RED, fontSize: 12, fontWeight: 500 }}>{a.change}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {tab === "NFT" && (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🖼️</div>
            <p style={{ color: R.TEXT, fontSize: 16, fontWeight: 600, marginBottom: 6 }}>No NFTs Yet</p>
            <p style={{ color: R.TEXT3, fontSize: 13 }}>Your NFT collection will appear here</p>
          </div>
        )}

        {tab === "History" && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between pb-3">
              <span style={{ color: R.TEXT, fontSize: 16, fontWeight: 600 }}>Recent Transactions</span>
              <button style={{ color: R.ACCENT, fontSize: 13 }} className="hover:opacity-70 transition-opacity">See All</button>
            </div>
            {TRANSACTIONS.map((tx, i) => (
              <div key={i} className="flex items-center gap-3" style={{ padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <TxIcon up={tx.up} />
                <div style={{ flex: 1 }}>
                  <p style={{ color: R.TEXT, fontSize: 14, fontWeight: 600 }}>{tx.type}</p>
                  <p style={{ color: R.TEXT2, fontSize: 12 }}>{tx.coin} · {tx.date}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: tx.up ? R.GREEN : R.RED, fontSize: 14, fontWeight: 600 }}>{tx.amount}</p>
                  <p style={{ color: R.TEXT3, fontSize: 12 }}>{tx.usd}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ height: 20 }} />
    </RoboLayout>
  );
}
