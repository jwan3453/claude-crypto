import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const coins = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,245.80", change: "+3.24%", up: true, color: "#F7931A" },
  { name: "Ethereum", symbol: "ETH", price: "$3,521.40", change: "+2.18%", up: true, color: "#627EEA" },
  { name: "Solana", symbol: "SOL", price: "$178.92", change: "+5.67%", up: true, color: "#9945FF" },
  { name: "BNB", symbol: "BNB", price: "$612.30", change: "-0.42%", up: false, color: "#F3BA2F" },
  { name: "Cardano", symbol: "ADA", price: "$0.6821", change: "+1.85%", up: true, color: "#0033AD" },
  { name: "Ripple", symbol: "XRP", price: "$0.6234", change: "+0.93%", up: true, color: "#23292F" },
];

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Execute trades in milliseconds with our high-performance matching engine.",
  },
  {
    icon: "🔐",
    title: "Bank-Grade Security",
    desc: "Multi-layer encryption, cold storage, and 2FA keep your assets safe.",
  },
  {
    icon: "💰",
    title: "Lowest Fees",
    desc: "Industry-leading 0.1% trading fee with volume-based discounts.",
  },
  {
    icon: "🌐",
    title: "300+ Pairs",
    desc: "Trade hundreds of crypto pairs across multiple blockchain networks.",
  },
  {
    icon: "📊",
    title: "Advanced Charts",
    desc: "Professional-grade TradingView charts with 100+ technical indicators.",
  },
  {
    icon: "🤝",
    title: "24/7 Support",
    desc: "Round-the-clock customer support via live chat, email, and phone.",
  },
];

const steps = [
  { num: "01", title: "Create Account", desc: "Sign up in under 60 seconds with just your email address." },
  { num: "02", title: "Verify Identity", desc: "Complete KYC verification to unlock full trading features." },
  { num: "03", title: "Deposit Funds", desc: "Add crypto or fiat via bank transfer, card, or P2P trading." },
  { num: "04", title: "Start Trading", desc: "Buy, sell, and swap crypto instantly at the best market prices." },
];

const stats = [
  { value: "$4.2B+", label: "24h Trading Volume" },
  { value: "12M+", label: "Active Users" },
  { value: "300+", label: "Cryptocurrencies" },
  { value: "99.99%", label: "Uptime SLA" },
];

export default function ModernCC() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");

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
      (el as HTMLElement).style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Modern Crypto — Buy, Sell & Trade Cryptocurrency</title>
        <meta name="description" content="The most trusted platform to buy, sell, and trade Bitcoin, Ethereum, and 300+ cryptocurrencies. Start trading today." />
      </Head>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(101, 82, 254, 0.3); }
          50% { box-shadow: 0 0 40px rgba(101, 82, 254, 0.6); }
        }
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-gradient {
          background: linear-gradient(135deg, #6552FE, #8B5CF6, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .btn-primary {
          background: linear-gradient(135deg, #6552FE, #8B5CF6);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(101, 82, 254, 0.4);
        }
        .btn-outline {
          border: 1px solid rgba(101, 82, 254, 0.5);
          color: #8B5CF6;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          background: rgba(101, 82, 254, 0.1);
          border-color: #6552FE;
          transform: translateY(-2px);
        }
        .card-hover {
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(101, 82, 254, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ticker-wrap {
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-track {
          display: inline-flex;
          animation: ticker 30s linear infinite;
        }
        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8B5CF6;
        }
      `}</style>

      <div style={{ background: "#070707", minHeight: "100vh", color: "#e2e8f0", fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>

        {/* Navbar */}
        <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0", position: "sticky", top: 0, background: "rgba(7,7,7,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", zIndex: 100 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #6552FE, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "#fff" }}>C</div>
              <span style={{ fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>CryptoX</span>
            </div>
            <div style={{ display: "none" }} className="md:!flex" />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {["Markets", "Trade", "Earn", "NFT"].map((item) => (
                <a key={item} href="#" style={{ color: "#94a3b8", fontSize: 14, fontWeight: 500, textDecoration: "none", padding: "8px 16px", borderRadius: 8, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                >{item}</a>
              ))}
              <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 8px" }} />
              <a href="#" style={{ color: "#8B5CF6", fontSize: 14, fontWeight: 600, textDecoration: "none", padding: "8px 16px" }}>Log In</a>
              <a href="#cta" className="btn-primary" style={{ padding: "10px 24px", borderRadius: 10, fontWeight: 600, fontSize: 14, color: "#fff", textDecoration: "none" }}>Get Started</a>
            </div>
          </div>
        </nav>

        {/* Ticker Bar */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "10px 0", background: "rgba(255,255,255,0.02)" }}>
          <div className="ticker-wrap">
            <div className="ticker-track">
              {[...coins, ...coins].map((coin, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0 24px", fontSize: 13, fontWeight: 500 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: coin.color, display: "inline-block" }} />
                  <span style={{ color: "#fff" }}>{coin.symbol}</span>
                  <span style={{ color: "#64748b" }}>{coin.price}</span>
                  <span style={{ color: coin.up ? "#10B981" : "#EF4444" }}>{coin.change}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero */}
        <section style={{ padding: "100px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          {/* Background decoration */}
          <div style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: "120%", height: "100%", background: "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(101,82,254,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "10%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", pointerEvents: "none", animation: "float 6s ease-in-out infinite" }} />
          <div style={{ position: "absolute", top: "20%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", pointerEvents: "none", animation: "float 8s ease-in-out infinite 2s" }} />

          <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
            <div className="fade-up" style={{ marginBottom: 24 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(101,82,254,0.1)", border: "1px solid rgba(101,82,254,0.25)", borderRadius: 999, padding: "6px 18px", fontSize: 13, fontWeight: 600, color: "#8B5CF6" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                Live Trading — 300+ Cryptocurrencies
              </span>
            </div>
            <h1 className="fade-up" style={{ fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff", marginBottom: 24 }}>
              Buy & Sell Crypto<br />
              <span className="hero-gradient">Instantly & Securely</span>
            </h1>
            <p className="fade-up" style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 48, maxWidth: 580, margin: "0 auto 48px" }}>
              The most trusted platform for trading digital assets. Low fees, deep liquidity, and enterprise-grade security for everyone.
            </p>
            <div className="fade-up" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }}>
              <a href="#cta" className="btn-primary" style={{ padding: "16px 40px", borderRadius: 14, fontWeight: 700, fontSize: 16, color: "#fff", textDecoration: "none" }}>Start Trading</a>
              <a href="#features" className="btn-outline" style={{ padding: "16px 40px", borderRadius: 14, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>Explore Features</a>
            </div>

            {/* Stats */}
            <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, maxWidth: 760, margin: "0 auto" }}>
              {stats.map((s) => (
                <div key={s.label} className="glass" style={{ borderRadius: 16, padding: "24px 16px" }}>
                  <div className="hero-gradient" style={{ fontSize: 30, fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Market */}
        <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.015)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="section-label" style={{ marginBottom: 12, display: "block" }}>Live Market</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>Today&apos;s Crypto Prices</h2>
              <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto" }}>Real-time prices across the top digital assets. Click any coin to start trading.</p>
            </div>
            <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
              {coins.map((coin) => (
                <div key={coin.symbol} className="card-hover" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${coin.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: coin.color }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>{coin.name}</div>
                      <div style={{ fontSize: 13, color: "#64748b" }}>{coin.symbol}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>{coin.price}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: coin.up ? "#10B981" : "#EF4444" }}>{coin.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade Widget */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }} className="lg:!grid-cols-2">
            <div className="fade-up">
              <span className="section-label" style={{ marginBottom: 12, display: "block" }}>Simple Trading</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.15 }}>
                Trade Crypto in<br /><span className="hero-gradient">Three Easy Steps</span>
              </h2>
              <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                Our intuitive interface makes buying and selling cryptocurrency as simple as online shopping. No complex order books or confusing charts.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {steps.map((step) => (
                  <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(101,82,254,0.1)", border: "1px solid rgba(101,82,254,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#8B5CF6", fontSize: 14, flexShrink: 0 }}>{step.num}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#fff", fontSize: 15, marginBottom: 4 }}>{step.title}</div>
                      <div style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trade Card */}
            <div className="fade-up" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%", maxWidth: 420, background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: 32, boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}>
                <div style={{ display: "flex", background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: 4, marginBottom: 28 }}>
                  {(["buy", "sell"] as const).map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer", transition: "all 0.2s", background: activeTab === tab ? (tab === "buy" ? "#6552FE" : "#EF4444") : "transparent", color: activeTab === tab ? "#fff" : "#64748b" }}>{tab === "buy" ? "Buy" : "Sell"}</button>
                  ))}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, marginBottom: 8, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>You Pay</label>
                  <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "14px 16px" }}>
                    <input type="text" defaultValue="1,000" readOnly style={{ background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 22, fontWeight: 700, width: "100%", fontFamily: "inherit" }} />
                    <span style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "6px 14px", fontWeight: 600, fontSize: 14, color: "#fff", whiteSpace: "nowrap" }}>USD</span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", margin: "4px 0" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(101,82,254,0.15)", border: "1px solid rgba(101,82,254,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#8B5CF6" }}>↕</div>
                </div>

                <div style={{ marginBottom: 28, marginTop: 4 }}>
                  <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, marginBottom: 8, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>You Receive</label>
                  <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "14px 16px" }}>
                    <input type="text" defaultValue="0.01487" readOnly style={{ background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 22, fontWeight: 700, width: "100%", fontFamily: "inherit" }} />
                    <span style={{ background: "rgba(247,147,26,0.12)", borderRadius: 8, padding: "6px 14px", fontWeight: 600, fontSize: 14, color: "#F7931A", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#F7931A", display: "inline-block" }} />
                      BTC
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, fontSize: 13, color: "#64748b" }}>
                  <span>Rate</span>
                  <span style={{ color: "#94a3b8" }}>1 BTC = $67,245.80</span>
                </div>

                <button className="btn-primary" style={{ width: "100%", padding: "16px 0", borderRadius: 14, fontWeight: 700, fontSize: 16, color: "#fff", border: "none", cursor: "pointer" }}>
                  {activeTab === "buy" ? "Buy Bitcoin" : "Sell Bitcoin"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.015)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="section-label" style={{ marginBottom: 12, display: "block" }}>Why Choose Us</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>Built for Traders,<br /><span className="hero-gradient">By Traders</span></h2>
              <p style={{ color: "#94a3b8", maxWidth: 520, margin: "0 auto" }}>Everything you need to trade crypto with confidence, all in one powerful platform.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
              {features.map((f) => (
                <div key={f.title} className="card-hover fade-up" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 32 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(101,82,254,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Banner */}
        <section style={{ padding: "80px 24px" }}>
          <div className="fade-up" style={{ maxWidth: 1200, margin: "0 auto", background: "linear-gradient(135deg, rgba(101,82,254,0.08), rgba(6,182,212,0.08))", border: "1px solid rgba(101,82,254,0.2)", borderRadius: 24, padding: "56px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(101,82,254,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr", gap: 40 }} className="lg:!grid-cols-2">
              <div>
                <span className="section-label" style={{ marginBottom: 12, display: "block" }}>Security First</span>
                <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.15 }}>Your Assets Are<br /><span className="hero-gradient">Always Protected</span></h2>
                <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7 }}>We store 95% of all digital assets in air-gapped cold storage. Our multi-signature technology and insurance fund ensure your crypto is always safe.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: "🛡️", title: "Insurance Fund", desc: "$300M coverage" },
                  { icon: "❄️", title: "Cold Storage", desc: "95% assets offline" },
                  { icon: "🔑", title: "Multi-Sig", desc: "3-of-5 key threshold" },
                  { icon: "🔍", title: "Audited", desc: "SOC 2 Type II certified" },
                ].map((item) => (
                  <div key={item.title} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: 20, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 24, marginBottom: 10 }}>{item.icon}</div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "#64748b" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.015)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="section-label" style={{ marginBottom: 12, display: "block" }}>Trade Anywhere</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>Available on All Devices</h2>
              <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto" }}>Download our app for iOS, Android, or trade directly from your browser.</p>
            </div>
            <div className="fade-up" style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              {[
                { name: "iOS App", icon: "📱", desc: "iPhone & iPad" },
                { name: "Android App", icon: "🤖", desc: "Google Play" },
                { name: "Web Platform", icon: "🌐", desc: "Any Browser" },
                { name: "Desktop App", icon: "💻", desc: "Mac & Windows" },
                { name: "API Access", icon: "🔗", desc: "REST & WebSocket" },
              ].map((p) => (
                <div key={p.name} className="card-hover" style={{ background: "#0f0f12", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 32px", textAlign: "center", width: 200 }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                  <div style={{ fontWeight: 600, color: "#fff", fontSize: 14, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" style={{ padding: "100px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(101,82,254,0.18) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 50% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div className="fade-up" style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <span className="section-label" style={{ marginBottom: 16, display: "block" }}>Get Started Today</span>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Ready to Start<br /><span className="hero-gradient">Your Crypto Journey?</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>Join 12 million+ users already trading on the most trusted crypto platform. Sign up today and get $50 in free Bitcoin.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#" className="btn-primary" style={{ padding: "18px 44px", borderRadius: 14, fontWeight: 700, fontSize: 16, color: "#fff", textDecoration: "none" }}>Create Free Account</a>
              <a href="#" className="btn-outline" style={{ padding: "18px 44px", borderRadius: 14, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>View Documentation</a>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, color: "#475569" }}>No credit card required. Start trading in under 60 seconds.</p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 40 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #6552FE, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff" }}>C</div>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#fff" }}>CryptoX</span>
                </div>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>The most trusted platform for buying, selling, and trading cryptocurrency.</p>
              </div>
              {[
                { title: "Products", links: ["Spot Trading", "Futures", "Earn", "NFT Marketplace"] },
                { title: "Resources", links: ["Help Center", "Blog", "API Docs", "Fee Schedule"] },
                { title: "Company", links: ["About Us", "Careers", "Press", "Legal"] },
              ].map((col) => (
                <div key={col.title}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#fff", marginBottom: 16 }}>{col.title}</div>
                  {col.links.map((link) => (
                    <a key={link} href="#" style={{ display: "block", color: "#475569", fontSize: 13, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                    >{link}</a>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <p style={{ color: "#333", fontSize: 13, margin: 0 }}>&copy; 2026 CryptoX. All rights reserved.</p>
              <div style={{ display: "flex", gap: 20 }}>
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                  <a key={link} href="#" style={{ color: "#333", fontSize: 13, textDecoration: "none" }}>{link}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
