/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Receive Screen

import { useState } from "react";
import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

const COINS = [
  { ticker: "BTC", name: "Bitcoin", address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", color: "#F7931A", network: "Bitcoin Network" },
  { ticker: "ETH", name: "Ethereum", address: "0x742d35Cc6634C0532925a3b8D4C9C6Cd8a5b2D8", color: "#627EEA", network: "ERC-20" },
  { ticker: "SOL", name: "Solana", address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgHkd", color: "#9945FF", network: "Solana Network" },
];

function BackIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke={R.TEXT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CopyIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke={R.ACCENT} strokeWidth="1.5" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke={R.ACCENT} strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

function ShareIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" stroke={R.TEXT2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

// QR Code as SVG placeholder (stylized)
function QRCode({ address, color }: { address: string; color: string }) {
  const seed = address.charCodeAt(0) + address.charCodeAt(5);

  // Generate a grid of "pixels" to simulate QR code
  const cells: { x: number; y: number; fill: boolean }[] = [];
  const size = 21;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      // Position detection patterns (corners)
      const inCorner = (
        (row < 7 && col < 7) ||
        (row < 7 && col >= size - 7) ||
        (row >= size - 7 && col < 7)
      );
      if (inCorner) {
        const isOuterBorder = row === 0 || row === 6 || col === 0 || col === 6 ||
          (row < 7 && col >= size - 7 && (col === size - 7 || col === size - 1 || row === 0 || row === 6)) ||
          (row >= size - 7 && col < 7 && (col === 0 || col === 6 || row === size - 7 || row === size - 1));
        const isInnerFill = (row >= 2 && row <= 4 && col >= 2 && col <= 4) ||
          (row >= 2 && row <= 4 && col >= size - 5 && col <= size - 3) ||
          (row >= size - 5 && row <= size - 3 && col >= 2 && col <= 4);
        cells.push({ x: col, y: row, fill: isOuterBorder || isInnerFill });
      } else {
        // Data cells — pseudo-random based on seed
        const h = (row * size + col + seed) % 7;
        cells.push({ x: col, y: row, fill: h < 3 });
      }
    }
  }

  const cellSize = 8;
  const padding = 16;
  const total = size * cellSize + padding * 2;

  return (
    <div style={{ background: "white", borderRadius: R.RADIUS_LG, padding: padding, display: "inline-block" }}>
      <svg width={total - padding * 2} height={total - padding * 2} viewBox={`0 0 ${size * cellSize} ${size * cellSize}`}>
        {cells.map(({ x, y, fill }) => fill && (
          <rect key={`${x}-${y}`} x={x * cellSize} y={y * cellSize} width={cellSize} height={cellSize} fill="#000000" />
        ))}
        {/* Center logo overlay */}
        <rect x={(size / 2 - 2.5) * cellSize} y={(size / 2 - 2.5) * cellSize} width={5 * cellSize} height={5 * cellSize} fill="white" rx="4" />
        <rect x={(size / 2 - 1.5) * cellSize} y={(size / 2 - 1.5) * cellSize} width={3 * cellSize} height={3 * cellSize} fill={color} rx="3" />
      </svg>
    </div>
  );
}

export default function RoboReceive() {
  const router = useRouter();
  const [selected, setSelected] = useState(COINS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(selected.address).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shortAddr = `${selected.address.slice(0, 8)}...${selected.address.slice(-6)}`;

  return (
    <RoboLayout title="Receive Crypto" hideTabBar>
      <RoboStatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-6">
        <button onClick={() => router.back()} className="hover:opacity-70 transition-opacity active:opacity-50"><BackIcon /></button>
        <h1 style={{ color: R.TEXT, fontSize: 18, fontWeight: 700 }}>Receive</h1>
        <div style={{ width: 24 }} />
      </div>

      {/* Coin Selector */}
      <div className="px-5 mb-6">
        <div className="flex gap-2">
          {COINS.map((c) => (
            <button key={c.ticker} onClick={() => setSelected(c)} style={{ flex: 1, padding: "10px 6px", borderRadius: R.RADIUS_MD, background: selected.ticker === c.ticker ? `${c.color}22` : R.GLASS, border: `1px solid ${selected.ticker === c.ticker ? c.color + "55" : "rgba(255,255,255,0.06)"}`, color: selected.ticker === c.ticker ? c.color : R.TEXT2, fontSize: 13, fontWeight: selected.ticker === c.ticker ? 700 : 400, transition: "all 0.15s" }}>
              {c.ticker}
            </button>
          ))}
        </div>
      </div>

      {/* QR Code */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px" }}>
        <QRCode address={selected.address} color={selected.color} />

        {/* Network badge */}
        <div style={{ marginTop: 16, background: `${selected.color}22`, borderRadius: 999, padding: "4px 16px", border: `1px solid ${selected.color}33` }}>
          <span style={{ color: selected.color, fontSize: 12, fontWeight: 600 }}>{selected.network}</span>
        </div>

        {/* Address */}
        <div style={{ marginTop: 16, background: R.GLASS, borderRadius: R.RADIUS_MD, padding: "12px 16px", width: "100%", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
          <p style={{ color: R.TEXT2, fontSize: 11, marginBottom: 4 }}>Wallet Address</p>
          <p style={{ color: R.TEXT, fontSize: 13, fontWeight: 500, fontFamily: "monospace", wordBreak: "break-all" }}>{shortAddr}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 w-full">
          <button
            onClick={handleCopy}
            style={{ flex: 1, background: copied ? `${R.GREEN}22` : `${R.ACCENT}22`, color: copied ? R.GREEN : R.ACCENT, borderRadius: 999, padding: "12px", fontSize: 14, fontWeight: 600, border: `1px solid ${copied ? R.GREEN + "44" : R.ACCENT + "44"}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s" }}
            className="hover:opacity-85 active:opacity-70"
          >
            <CopyIcon />
            {copied ? "Copied!" : "Copy Address"}
          </button>
          <button
            style={{ flex: 1, background: R.GLASS, color: R.TEXT2, borderRadius: 999, padding: "12px", fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.15s" }}
            className="hover:opacity-85 active:opacity-70"
          >
            <ShareIcon />
            Share
          </button>
        </div>
      </div>

      {/* Warning */}
      <div className="px-5 mt-6">
        <div style={{ background: "rgba(250,137,0,0.08)", borderRadius: R.RADIUS_MD, padding: "14px 16px", border: "1px solid rgba(250,137,0,0.2)" }}>
          <div className="flex gap-3">
            <span style={{ fontSize: 16 }}>⚠️</span>
            <p style={{ color: "rgba(250,137,0,0.9)", fontSize: 12, lineHeight: 1.5 }}>
              Only send <strong>{selected.ticker}</strong> to this address. Sending other assets may result in permanent loss of funds. Always verify the network before sending.
            </p>
          </div>
        </div>
      </div>

      <div style={{ height: 32 }} />
    </RoboLayout>
  );
}
