/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Send Screen

import { useState } from "react";
import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

const COINS = [
  { ticker: "BTC", name: "Bitcoin", balance: "0.52 BTC", balanceUSD: "$22,490", color: "#F7931A" },
  { ticker: "ETH", name: "Ethereum", balance: "2.4 ETH", balanceUSD: "$6,816", color: "#627EEA" },
  { ticker: "SOL", name: "Solana", balance: "12 SOL", balanceUSD: "$1,182", color: "#9945FF" },
];

const RECENT_CONTACTS = [
  { name: "Alice", address: "0x1a2b...3c4d" },
  { name: "Bob", address: "0x5e6f...7g8h" },
  { name: "Carol", address: "0x9i0j...1k2l" },
];

type Step = "form" | "confirm" | "success";

function BackIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke={R.TEXT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function QrScanIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke={R.TEXT2} strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1" stroke={R.TEXT2} strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1" stroke={R.TEXT2} strokeWidth="1.5" /><path d="M14 14h2v2h-2zM18 14h3M14 18v3M18 18h3v3h-3z" stroke={R.TEXT2} strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export default function RoboSend() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("form");
  const [selectedCoin, setSelectedCoin] = useState(COINS[0]);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [speed, setSpeed] = useState<"Slow" | "Average" | "Fast">("Average");

  const usdAmount = amount ? `≈ $${(parseFloat(amount) * 43250).toLocaleString()}` : "≈ $0.00";
  const fees = { Slow: "~$1.20 (10 min)", Average: "~$2.40 (3 min)", Fast: "~$5.80 (30 sec)" };

  if (step === "success") {
    return (
      <RoboLayout title="Send — Success" hideTabBar>
        <RoboStatusBar />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", padding: "0 32px", textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: `${R.GREEN}22`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, border: `2px solid ${R.GREEN}` }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-9" stroke={R.GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <h2 style={{ color: R.TEXT, fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Transaction Sent!</h2>
          <p style={{ color: R.TEXT2, fontSize: 14, marginBottom: 4 }}>Amount: <span style={{ color: R.TEXT, fontWeight: 600 }}>{amount} {selectedCoin.ticker}</span></p>
          <p style={{ color: R.TEXT2, fontSize: 14, marginBottom: 32 }}>To: <span style={{ color: R.TEXT, fontWeight: 600 }}>{address.slice(0, 10)}...</span></p>
          <button onClick={() => router.push("/robo")} style={{ width: "100%", background: R.ACCENT, color: "#03313A", borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700 }} className="hover:opacity-85 active:opacity-70">
            Back to Home
          </button>
        </div>
      </RoboLayout>
    );
  }

  if (step === "confirm") {
    return (
      <RoboLayout title="Confirm Send" hideTabBar>
        <RoboStatusBar />
        <div className="flex items-center justify-between px-5 pb-6">
          <button onClick={() => setStep("form")} className="hover:opacity-70 transition-opacity active:opacity-50"><BackIcon /></button>
          <h1 style={{ color: R.TEXT, fontSize: 18, fontWeight: 700 }}>Confirm Send</h1>
          <div style={{ width: 24 }} />
        </div>

        <div className="px-5">
          <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "20px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 16 }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <p style={{ color: R.TEXT2, fontSize: 13 }}>You are sending</p>
              <p style={{ color: R.TEXT, fontSize: 32, fontWeight: 700, marginTop: 4 }}>{amount} {selectedCoin.ticker}</p>
              <p style={{ color: R.TEXT2, fontSize: 14 }}>{usdAmount}</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
              {[
                { label: "To", value: `${address.slice(0, 14)}...${address.slice(-6)}` },
                { label: "Network Fee", value: fees[speed].split(" ")[0] },
                { label: "Speed", value: speed },
                { label: "Total", value: `${amount} ${selectedCoin.ticker} + fee` },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between" style={{ padding: "8px 0" }}>
                  <span style={{ color: R.TEXT2, fontSize: 13 }}>{label}</span>
                  <span style={{ color: R.TEXT, fontSize: 13, fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => setStep("success")} style={{ width: "100%", background: R.ACCENT, color: "#03313A", borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700, marginBottom: 12 }} className="hover:opacity-85 active:opacity-70">
            Confirm & Send
          </button>
          <button onClick={() => setStep("form")} style={{ width: "100%", background: "transparent", color: R.TEXT2, borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 500 }} className="hover:opacity-70">
            Cancel
          </button>
        </div>
      </RoboLayout>
    );
  }

  return (
    <RoboLayout title="Send Crypto" hideTabBar>
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-6">
        <button onClick={() => router.back()} className="hover:opacity-70 transition-opacity active:opacity-50"><BackIcon /></button>
        <h1 style={{ color: R.TEXT, fontSize: 18, fontWeight: 700 }}>Send</h1>
        <div style={{ width: 24 }} />
      </div>

      <div className="px-5">
        {/* Coin Selector */}
        <div className="mb-4">
          <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 8, display: "block" }}>Select Coin</label>
          <div className="flex gap-2">
            {COINS.map((c) => (
              <button key={c.ticker} onClick={() => setSelectedCoin(c)} style={{ flex: 1, padding: "10px 6px", borderRadius: R.RADIUS_MD, background: selectedCoin.ticker === c.ticker ? `${c.color}22` : R.GLASS, border: `1px solid ${selectedCoin.ticker === c.ticker ? c.color + "55" : "rgba(255,255,255,0.06)"}`, color: selectedCoin.ticker === c.ticker ? c.color : R.TEXT2, fontSize: 13, fontWeight: selectedCoin.ticker === c.ticker ? 700 : 400, transition: "all 0.15s" }}>
                {c.ticker}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span style={{ color: R.TEXT3, fontSize: 11 }}>Available</span>
            <span style={{ color: R.TEXT2, fontSize: 11 }}>{selectedCoin.balance} ({selectedCoin.balanceUSD})</span>
          </div>
        </div>

        {/* To Address */}
        <div className="mb-4">
          <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 8, display: "block" }}>Recipient Address</label>
          <div style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x... or paste address"
              style={{ background: "transparent", border: "none", outline: "none", color: R.TEXT, fontSize: 13, flex: 1, fontFamily: "var(--font-poppins), sans-serif" }}
            />
            <button className="hover:opacity-70 transition-opacity"><QrScanIcon /></button>
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="mb-4">
          <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 8, display: "block" }}>Recent Contacts</label>
          <div className="flex gap-3">
            {RECENT_CONTACTS.map((c) => (
              <button key={c.name} onClick={() => setAddress(c.address)} style={{ flex: 1, background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "10px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center", transition: "all 0.15s" }} className="hover:border-[rgba(0,240,255,0.3)] active:scale-95">
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${R.PURPLE}44`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 4px" }}>
                  <span style={{ color: R.ACCENT, fontSize: 13, fontWeight: 700 }}>{c.name[0]}</span>
                </div>
                <p style={{ color: R.TEXT, fontSize: 12, fontWeight: 600 }}>{c.name}</p>
                <p style={{ color: R.TEXT3, fontSize: 10 }}>{c.address}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label style={{ color: R.TEXT2, fontSize: 12 }}>Amount</label>
            <button onClick={() => setAmount("0.52")} style={{ color: R.ACCENT, fontSize: 12, fontWeight: 600 }}>MAX</button>
          </div>
          <div style={{ background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "16px", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
            <div className="flex items-center justify-center gap-2">
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                type="number"
                style={{ background: "transparent", border: "none", outline: "none", color: R.TEXT, fontSize: 32, fontWeight: 700, textAlign: "center", width: "180px", fontFamily: "var(--font-poppins), sans-serif" }}
              />
              <span style={{ color: selectedCoin.color, fontSize: 16, fontWeight: 700 }}>{selectedCoin.ticker}</span>
            </div>
            <p style={{ color: R.TEXT2, fontSize: 13, marginTop: 4 }}>{usdAmount}</p>
          </div>
        </div>

        {/* Speed / Fee */}
        <div className="mb-6">
          <label style={{ color: R.TEXT2, fontSize: 12, marginBottom: 8, display: "block" }}>Transaction Speed</label>
          <div className="flex gap-2">
            {(["Slow", "Average", "Fast"] as const).map((s) => (
              <button key={s} onClick={() => setSpeed(s)} style={{ flex: 1, padding: "10px 8px", borderRadius: R.RADIUS_MD, background: speed === s ? `${R.ACCENT}22` : R.GLASS, border: `1px solid ${speed === s ? R.ACCENT + "44" : "rgba(255,255,255,0.06)"}`, color: speed === s ? R.ACCENT : R.TEXT2, fontSize: 12, fontWeight: speed === s ? 600 : 400, transition: "all 0.15s" }}>
                <p>{s}</p>
                <p style={{ color: R.TEXT3, fontSize: 10, marginTop: 2 }}>{fees[s].split(" ")[0]}</p>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => { if (address && amount) setStep("confirm"); }}
          style={{ width: "100%", background: address && amount ? R.ACCENT : "rgba(255,255,255,0.1)", color: address && amount ? "#03313A" : R.TEXT3, borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700, transition: "all 0.15s" }}
          disabled={!address || !amount}
          className="hover:opacity-85 active:opacity-70"
        >
          Review Transaction
        </button>
      </div>

      <div style={{ height: 20 }} />
    </RoboLayout>
  );
}
