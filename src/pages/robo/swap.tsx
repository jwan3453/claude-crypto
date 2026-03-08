/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Swap Screen

import { useState } from "react";
import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

const COINS = [
  { ticker: "BTC", name: "Bitcoin", balance: 0.52, price: 43250, color: "#F7931A" },
  { ticker: "ETH", name: "Ethereum", balance: 2.4, price: 2840, color: "#627EEA" },
  { ticker: "SOL", name: "Solana", balance: 12, price: 98.5, color: "#9945FF" },
  { ticker: "BNB", name: "BNB", balance: 0.8, price: 312.5, color: "#F3BA2F" },
  { ticker: "ADA", name: "Cardano", balance: 500, price: 0.62, color: "#0033AD" },
];

function BackIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke={R.TEXT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SwapArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 16V4M7 4L4 7M7 4l3 3" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8v12M17 20l3-3M17 20l-3-3" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoinSelect({ label, coin, onSelect, allCoins, excludeTicker }: { label: string; coin: typeof COINS[0]; onSelect: (c: typeof COINS[0]) => void; allCoins: typeof COINS; excludeTicker: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 6, display: "block" }}>{label}</label>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "12px 14px", border: `1px solid ${open ? R.ACCENT + "44" : "rgba(255,255,255,0.08)"}`, display: "flex", alignItems: "center", gap: 10, transition: "all 0.15s" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${coin.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: coin.color, fontSize: 9, fontWeight: 700 }}>{coin.ticker.slice(0, 3)}</span>
        </div>
        <span style={{ color: R.TEXT, fontSize: 14, fontWeight: 600, flex: 1, textAlign: "left" }}>{coin.ticker}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke={R.TEXT2} strokeWidth="1.5" strokeLinecap="round" /></svg>
      </button>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, background: R.BG2, borderRadius: R.RADIUS_MD, border: "1px solid rgba(255,255,255,0.1)", zIndex: 10, overflow: "hidden" }}>
          {allCoins.filter((c) => c.ticker !== excludeTicker).map((c) => (
            <button key={c.ticker} onClick={() => { onSelect(c); setOpen(false); }} style={{ width: "100%", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, textAlign: "left", background: c.ticker === coin.ticker ? `${c.color}11` : "transparent", transition: "background 0.15s" }} className="hover:bg-[rgba(255,255,255,0.05)]">
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${c.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: c.color, fontSize: 8, fontWeight: 700 }}>{c.ticker.slice(0, 3)}</span>
              </div>
              <span style={{ color: R.TEXT, fontSize: 13, fontWeight: 600 }}>{c.ticker}</span>
              <span style={{ color: R.TEXT2, fontSize: 12, flex: 1, textAlign: "right" }}>{c.balance} available</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RoboSwap() {
  const router = useRouter();
  const [from, setFrom] = useState(COINS[0]);
  const [to, setTo] = useState(COINS[1]);
  const [amount, setAmount] = useState("");
  const [slippage] = useState("0.5");

  const flipCoins = () => {
    const tmp = from;
    setFrom(to);
    setTo(tmp);
    setAmount("");
  };

  const outputAmount = amount ? ((parseFloat(amount) * from.price) / to.price).toFixed(6) : "0.000000";
  const rate = `1 ${from.ticker} = ${(from.price / to.price).toFixed(4)} ${to.ticker}`;
  const impact = amount ? Math.abs(Math.random() * 0.3).toFixed(2) : "0.00";

  return (
    <RoboLayout title="Swap — E-Robo" hideTabBar>
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-6">
        <button onClick={() => router.back()} className="hover:opacity-70 transition-opacity active:opacity-50"><BackIcon /></button>
        <h1 style={{ color: R.TEXT, fontSize: 18, fontWeight: 700 }}>Swap</h1>
        <button style={{ color: R.TEXT2, fontSize: 12, background: R.GLASS, borderRadius: 999, padding: "4px 12px", border: "1px solid rgba(255,255,255,0.06)" }}>History</button>
      </div>

      <div className="px-5">
        {/* From Panel */}
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "16px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 4 }}>
          <div className="flex items-center justify-between mb-3">
            <span style={{ color: R.TEXT2, fontSize: 12 }}>From</span>
            <span style={{ color: R.TEXT3, fontSize: 11 }}>Balance: {from.balance} {from.ticker}</span>
          </div>
          <CoinSelect label="" coin={from} onSelect={setFrom} allCoins={COINS} excludeTicker={to.ticker} />
          <div className="flex items-center justify-between mt-3">
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              type="number"
              style={{ background: "transparent", border: "none", outline: "none", color: R.TEXT, fontSize: 28, fontWeight: 700, flex: 1, fontFamily: "var(--font-poppins), sans-serif" }}
            />
            <div className="flex flex-col items-end gap-1">
              <button onClick={() => setAmount(String(from.balance))} style={{ color: R.ACCENT, fontSize: 12, fontWeight: 600, background: `${R.ACCENT}22`, borderRadius: 999, padding: "2px 10px" }}>MAX</button>
              <span style={{ color: R.TEXT3, fontSize: 11 }}>{amount ? `$${(parseFloat(amount) * from.price).toLocaleString()}` : "$0.00"}</span>
            </div>
          </div>
        </div>

        {/* Swap Direction Button */}
        <div style={{ display: "flex", justifyContent: "center", margin: "8px 0", position: "relative", zIndex: 5 }}>
          <button
            onClick={flipCoins}
            style={{ width: 44, height: 44, borderRadius: "50%", background: R.BG2, border: `2px solid rgba(255,255,255,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
            className="hover:border-[rgba(0,240,255,0.4)] active:scale-90"
          >
            <SwapArrowIcon />
          </button>
        </div>

        {/* To Panel */}
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "16px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 20 }}>
          <div className="flex items-center justify-between mb-3">
            <span style={{ color: R.TEXT2, fontSize: 12 }}>To</span>
            <span style={{ color: R.TEXT3, fontSize: 11 }}>Balance: {to.balance} {to.ticker}</span>
          </div>
          <CoinSelect label="" coin={to} onSelect={setTo} allCoins={COINS} excludeTicker={from.ticker} />
          <div className="flex items-center justify-between mt-3">
            <span style={{ color: R.TEXT, fontSize: 28, fontWeight: 700 }}>{outputAmount}</span>
            <span style={{ color: R.TEXT3, fontSize: 11 }}>${amount ? (parseFloat(amount) * from.price).toLocaleString() : "0.00"}</span>
          </div>
        </div>

        {/* Swap Details */}
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.05)", marginBottom: 20 }}>
          {[
            { label: "Exchange Rate", value: rate },
            { label: "Slippage Tolerance", value: `${slippage}%` },
            { label: "Price Impact", value: `~${impact}%` },
            { label: "Network Fee", value: "~$2.40" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between" style={{ padding: "7px 0" }}>
              <span style={{ color: R.TEXT2, fontSize: 12 }}>{label}</span>
              <span style={{ color: R.TEXT, fontSize: 12, fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>

        <button
          style={{ width: "100%", background: amount ? R.ACCENT : "rgba(255,255,255,0.1)", color: amount ? "#03313A" : R.TEXT3, borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700, transition: "all 0.15s" }}
          disabled={!amount}
          className="hover:opacity-85 active:opacity-70"
        >
          {amount ? `Swap ${amount} ${from.ticker} → ${to.ticker}` : "Enter Amount"}
        </button>
      </div>

      <div style={{ height: 20 }} />
    </RoboLayout>
  );
}
