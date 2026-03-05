import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Aggregator() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(32px)";
      (el as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Bitget Wallet Aggregator</title>
        <meta name="description" content="High-performance same-chain swap aggregation powered by proprietary pricing algorithms." />
      </Head>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes bar-fill {
          from { width: 0; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-text {
          background: linear-gradient(135deg, #00d4aa, #00b4d8, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .btn-primary {
          background: linear-gradient(135deg, #00d4aa, #00b4d8, #6366f1);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 212, 170, 0.35);
        }
        .btn-outline {
          border: 1px solid rgba(0, 212, 170, 0.4);
          color: #00d4aa;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          background: rgba(0, 212, 170, 0.1);
          border-color: #00d4aa;
          transform: translateY(-2px);
        }
        .card {
          background: #151d2e;
          border: 1px solid #1e293b;
          border-radius: 16px;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 212, 170, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .chain-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #e2e8f0;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00d4aa;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .bar-bg {
          height: 10px;
          border-radius: 5px;
          background: #1e293b;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 5px;
          background: linear-gradient(90deg, #00d4aa, #6366f1);
          animation: bar-fill 1.2s ease forwards;
        }
        .winner-badge {
          background: rgba(0, 212, 170, 0.15);
          border: 1px solid rgba(0, 212, 170, 0.4);
          color: #00d4aa;
          border-radius: 6px;
          padding: 2px 10px;
          font-size: 12px;
          font-weight: 600;
        }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00d4aa;
        }
        table { border-collapse: collapse; }
        th, td { border: 1px solid #1e293b; padding: 14px 20px; text-align: left; }
        th { background: rgba(0,212,170,0.06); color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
        td { color: #e2e8f0; font-size: 14px; }
        tr:hover td { background: rgba(255,255,255,0.02); }
      `}</style>

      <div style={{ background: "#0a0e17", minHeight: "100vh", color: "#e2e8f0", fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>

        {/* Nav */}
        <nav style={{ borderBottom: "1px solid #1e293b", padding: "20px 0", position: "sticky", top: 0, background: "rgba(10,14,23,0.9)", backdropFilter: "blur(12px)", zIndex: 100 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #00d4aa, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff" }}>B</div>
              <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>Bitget Wallet Aggregator</span>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#cta" className="btn-primary" style={{ padding: "10px 22px", borderRadius: 10, fontWeight: 600, fontSize: 14, color: "#fff", textDecoration: "none" }}>Get Started</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ padding: "100px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,170,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <div className="fade-up" style={{ marginBottom: 20 }}>
              <span className="section-label">Same-chain Swap Aggregation</span>
            </div>
            <h1 className="fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", marginBottom: 24 }}>
              High-performance swap aggregation powered by{" "}
              <span className="gradient-text">proprietary pricing algorithms</span>
            </h1>
            <p className="fade-up" style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 48, maxWidth: 640, margin: "0 auto 48px" }}>
              Consistently better execution prices, higher success rates, and deeper liquidity across all major chains.
            </p>
            <div className="fade-up" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 72 }}>
              <a href="#cta" className="btn-primary" style={{ padding: "14px 32px", borderRadius: 12, fontWeight: 700, fontSize: 16, color: "#fff", textDecoration: "none" }}>Get Started</a>
              <a href="#performance" className="btn-outline" style={{ padding: "14px 32px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Learn More ↓</a>
            </div>
            {/* Stats */}
            <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, maxWidth: 720, margin: "0 auto" }}>
              {[
                { value: "99.91%", label: "Peak Success Rate (ETH)" },
                { value: "13+", label: "DEX Protocols" },
                { value: "7", label: "Supported Chains" },
                { value: "15.4%", label: "Better Pricing vs Traditional" },
              ].map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1e293b", borderRadius: 14, padding: "20px 16px" }}>
                  <div className="gradient-text" style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Networks */}
        <section style={{ padding: "80px 24px", background: "rgba(17,24,39,0.5)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Blockchain Networks</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Multi-Chain Coverage</h2>
              <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto" }}>Supporting seven major mainnets with continuous expansion planned across additional networks.</p>
            </div>
            <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {[
                { name: "Ethereum", color: "#627eea" },
                { name: "Solana", color: "#9945ff" },
                { name: "BNB Chain", color: "#f3ba2f" },
                { name: "Base", color: "#0052ff" },
                { name: "Arbitrum", color: "#12aaff" },
                { name: "Morph", color: "#00d4aa" },
                { name: "Polygon", color: "#8247e5" },
              ].map((chain) => (
                <div key={chain.name} className="chain-badge">
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: chain.color, display: "inline-block", flexShrink: 0 }} />
                  {chain.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance */}
        <section id="performance" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Real Transaction Data</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Industry-Leading Success Rates</h2>
              <p style={{ color: "#94a3b8", maxWidth: 600, margin: "0 auto" }}>Based on real transaction data over the past 30 days under identical asset, volume and market conditions.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { chain: "Ethereum", range: "94.04% – 99.91%", note: "Consistently stable around 99%", pct: 99, color: "#627eea" },
                { chain: "Solana", range: "80% – 92%", note: "High throughput chain with volatile conditions", pct: 86, color: "#9945ff" },
                { chain: "BNB Chain", range: "94.33% – 97.6%", note: "Significantly outperforms on BNB Chain", pct: 96, color: "#f3ba2f" },
                { chain: "Base", range: "98.5% – 99.31%", note: "Stable and predictable execution", pct: 99, color: "#0052ff" },
              ].map((item) => (
                <div key={item.chain} className="card fade-up" style={{ padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color }} />
                    <span style={{ fontWeight: 600, color: "#fff", fontSize: 16 }}>{item.chain}</span>
                  </div>
                  <div className="gradient-text" style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>{item.range}</div>
                  <div className="bar-bg" style={{ marginBottom: 12 }}>
                    <div className="bar-fill" style={{ width: `${item.pct}%` }} />
                  </div>
                  <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section style={{ padding: "80px 24px", background: "rgba(17,24,39,0.5)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Quote Comparison</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Higher Quote Win Rate</h2>
              <p style={{ color: "#94a3b8", maxWidth: 600, margin: "0 auto" }}>Across major chains and common trading ranges, consistently capturing better optimal prices.</p>
            </div>
            <div className="fade-up" style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #1e293b" }}>
              <table style={{ width: "100%", minWidth: 600 }}>
                <thead>
                  <tr>
                    <th>Chain</th>
                    <th>Order Size</th>
                    <th>Win Rate</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#627eea", display: "inline-block" }} />
                        Ethereum
                      </span>
                    </td>
                    <td style={{ color: "#94a3b8" }}>All ranges</td>
                    <td>Outperforms across key quote ranges</td>
                    <td><span className="winner-badge">Winner</span></td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f3ba2f", display: "inline-block" }} />
                        BNB Chain
                      </span>
                    </td>
                    <td style={{ color: "#94a3b8" }}>$0 – $1,000</td>
                    <td className="gradient-text" style={{ fontWeight: 700, fontSize: 16 }}>~71.9%</td>
                    <td><span className="winner-badge">Winner</span></td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f3ba2f", display: "inline-block" }} />
                        BNB Chain
                      </span>
                    </td>
                    <td style={{ color: "#94a3b8" }}>&gt; $1,000</td>
                    <td style={{ color: "#94a3b8" }}>~40%</td>
                    <td><span style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.4)", color: "#818cf8", borderRadius: 6, padding: "2px 10px", fontSize: 12, fontWeight: 600 }}>Competitive</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Core Technology</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Proprietary Pricing Algorithm</h2>
              <p style={{ color: "#94a3b8", maxWidth: 640, margin: "0 auto" }}>Optimizes liquidity selection across complex conditions — multi-hop routing, market volatility — to improve pricing competitiveness.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {/* Traditional */}
              <div className="card fade-up" style={{ padding: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(100,116,139,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⚖️</div>
                  <h3 style={{ fontWeight: 600, fontSize: 16, color: "#94a3b8", margin: 0 }}>Traditional Quoting Model</h3>
                </div>
                <p style={{ color: "#64748b", lineHeight: 1.7, margin: 0 }}>Standard aggregation with basic routing. Single-path price discovery with limited optimization.</p>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Basic routing logic", "Single-path discovery", "Limited optimization", "Static pricing"].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#475569", fontSize: 16 }}>—</span>
                      <span style={{ fontSize: 14, color: "#64748b" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* BW Model */}
              <div className="fade-up" style={{ position: "relative", background: "linear-gradient(135deg, rgba(0,212,170,0.08), rgba(99,102,241,0.08))", border: "1px solid rgba(0,212,170,0.25)", borderRadius: 16, padding: 32, overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 16, right: 16 }}>
                  <span style={{ background: "linear-gradient(135deg, #00d4aa, #6366f1)", color: "#fff", borderRadius: 8, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>+15.4% Better</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,212,170,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⚡</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", margin: 0 }}>BW Quoting Model</h3>
                </div>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>Multi-source optimization with dynamic routing. Captures superior pricing up to <strong style={{ color: "#00d4aa" }}>70% improvement</strong>.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Multi-source optimization", "Dynamic routing paths", "Real-time price discovery", "Adaptive algorithms"].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#00d4aa", fontSize: 14 }}>✓</span>
                      <span style={{ fontSize: 14, color: "#e2e8f0" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liquidity */}
        <section style={{ padding: "80px 24px", background: "rgba(17,24,39,0.5)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Liquidity Sources</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Multi-Source Liquidity Aggregation</h2>
              <p style={{ color: "#94a3b8", maxWidth: 600, margin: "0 auto" }}>Integrating diverse liquidity sources to support all order sizes and trading pair needs.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              {[
                {
                  icon: "🏊",
                  iconBg: "rgba(0,212,170,0.12)",
                  title: "AMM Pools",
                  desc: "Aggregating AMM pool liquidity from multiple mainstream DEXs across 13 protocols on 7 networks.",
                  partners: ["Uniswap", "PancakeSwap", "Raydium", "Curve", "+9 more"],
                  partnerColor: "rgba(0,212,170,0.12)",
                  borderColor: "rgba(0,212,170,0.15)",
                },
                {
                  icon: "🌑",
                  iconBg: "rgba(99,102,241,0.12)",
                  title: "Dark Pool / OTC",
                  desc: "Professional-grade AMMs enhancing liquidity depth for large and high-frequency trades.",
                  partners: ["0x", "OKX/GTR", "SushiXL", "Tokenlon", "Uniswap V3"],
                  partnerColor: "rgba(99,102,241,0.12)",
                  borderColor: "rgba(99,102,241,0.15)",
                },
                {
                  icon: "🤝",
                  iconBg: "rgba(0,180,216,0.12)",
                  title: "RFQ Integration",
                  desc: "Request for Quote system for optimal direct fills from professional market makers.",
                  partners: ["RFQ Live ✓", "Bebop (in progress)"],
                  partnerColor: "rgba(0,180,216,0.12)",
                  borderColor: "rgba(0,180,216,0.15)",
                },
              ].map((item) => (
                <div key={item.title} className="card fade-up" style={{ padding: 28 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>{item.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {item.partners.map((p) => (
                      <span key={p} style={{ background: item.partnerColor, border: `1px solid ${item.borderColor}`, borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 500, color: "#e2e8f0" }}>{p}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Enterprise Grade</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 8 }}>Security, Compliance & Infrastructure</h2>
              <p style={{ color: "#94a3b8", maxWidth: 560, margin: "0 auto" }}>Comprehensive guarantees across efficiency, stability, and security.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 32 }}>
              {[
                { icon: "🛡️", iconBg: "rgba(0,212,170,0.12)", title: "MEV Protection", desc: "Transactions routed through MEV-protected channels. Supports DTS, Merkle, and Flashbots protection modes." },
                { icon: "🌐", iconBg: "rgba(0,180,216,0.12)", title: "CDN & Global Availability", desc: "All endpoints deployed via CDN with global acceleration, supporting high-frequency and production-grade workloads." },
                { icon: "🔍", iconBg: "rgba(99,102,241,0.12)", title: "Multi-Firm Audited", desc: "Core and cross-chain contracts audited by SlowMist, Go+, and Certik. Reports available upon request." },
                { icon: "💎", iconBg: "rgba(248,113,113,0.12)", title: "Transparent Fee Structure", desc: "Clear, predictable pricing with no hidden fees. Full transparency on routing and execution costs." },
              ].map((item) => (
                <div key={item.title} className="card fade-up" style={{ padding: 28 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Sentinel */}
            <div className="fade-up" style={{ background: "linear-gradient(135deg, rgba(0,212,170,0.06), rgba(99,102,241,0.06))", border: "1px solid rgba(0,212,170,0.2)", borderRadius: 20, padding: 40 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 22 }}>🤖</span>
                    <h3 style={{ fontWeight: 800, fontSize: 20, color: "#fff", margin: 0 }}>Sentinel — Automated Protection System</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", borderRadius: 20, padding: "3px 12px" }}>
                      <div className="pulse-dot" />
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#00d4aa" }}>LIVE</span>
                    </div>
                  </div>
                  <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.7, maxWidth: 700 }}>Continuous monitoring suite that tracks on-chain slippage, gas cost, and execution status in real-time. Anomaly detection triggers automatic adjustments to routing and pricing paths.</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {["Real-time slippage monitoring", "Dynamic gas optimization", "Execution status tracking", "Auto-adjusting routes", "Failed TX cost reduction", "Competitive success rates"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#00d4aa", fontSize: 14, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "#94a3b8" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* APIs */}
        <section style={{ padding: "80px 24px", background: "rgba(17,24,39,0.5)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>Developer Tools</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>Beyond Aggregation</h2>
              <p style={{ color: "#94a3b8", maxWidth: 560, margin: "0 auto" }}>Complementary APIs to expand your crypto product capabilities with fewer technical costs.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {[
                { icon: "🔗", iconBg: "rgba(0,212,170,0.12)", title: "Cross-Chain Swap API", desc: "Seamless cross-chain transactions with optimized routing and multi-bridge support.", tag: "Available" },
                { icon: "👛", iconBg: "rgba(99,102,241,0.12)", title: "Wallet Clone API", desc: "Rapidly deploy wallet infrastructure with pre-built on-chain data and security detection.", tag: "Available" },
                { icon: "🔒", iconBg: "rgba(248,113,113,0.12)", title: "Security Detection", desc: "Real-time token and contract security analysis integrated into your product flow.", tag: "Available" },
              ].map((item) => (
                <div key={item.title} className="card fade-up" style={{ padding: 32 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{item.icon}</div>
                    <span style={{ background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00d4aa", borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>{item.tag}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: "#fff", marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" style={{ padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div className="fade-up" style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Get Started Today</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>Ready to Integrate?</h2>
            <p style={{ color: "#94a3b8", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>Start building with the Bitget Wallet Aggregator today.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#" className="btn-primary" style={{ padding: "16px 36px", borderRadius: 12, fontWeight: 700, fontSize: 16, color: "#fff", textDecoration: "none" }}>View Documentation</a>
              <a href="#" className="btn-outline" style={{ padding: "16px 36px", borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Contact Us</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid #1e293b", padding: "28px 24px", textAlign: "center" }}>
          <p style={{ color: "#475569", fontSize: 13, margin: 0 }}>© 2026 Bitget Wallet. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}
