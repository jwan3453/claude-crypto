/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Head from "next/head";

// ── Design tokens (Bitget dark × E-Robo Wallet fusion) ──────────────────────
export const R = {
  BG: "#080c14",
  BG2: "#0f1623",
  BG3: "#1a2235",
  GLASS: "rgba(255,255,255,0.04)",
  GLASS_HOVER: "rgba(255,255,255,0.07)",
  ACCENT: "#00F0FF",
  ACCENT_DIM: "#00C4D4",
  ACCENT_GLOW: "rgba(0,240,255,0.15)",
  PURPLE: "#7473DB",
  PURPLE_LIGHT: "#9589DC",
  TEXT: "#FFFFFF",
  TEXT2: "#91A0A1",
  TEXT3: "#718384",
  GREEN: "#48d49e",
  RED: "#FF3881",
  RADIUS_SM: "8px",
  RADIUS_MD: "14px",
  RADIUS_LG: "20px",
};

// ── Icons ─────────────────────────────────────────────────────────────────────
export function HomeIcon({ active }: { active?: boolean }) {
  const c = active ? R.ACCENT : R.TEXT3;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" fill={active ? `${R.ACCENT}22` : "none"} />
      <path d="M9 21V12h6v9" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MarketIcon({ active }: { active?: boolean }) {
  const c = active ? R.ACCENT : R.TEXT3;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h10M4 18h7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="15" r="3.5" stroke={c} strokeWidth="1.5" />
      <path d="M20.5 17.5L23 20" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WalletIcon({ active }: { active?: boolean }) {
  const c = active ? R.ACCENT : R.TEXT3;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="14" rx="2" stroke={c} strokeWidth="1.5" fill={active ? `${R.ACCENT}11` : "none"} />
      <path d="M16 13a1 1 0 100 2 1 1 0 000-2z" fill={c} />
      <path d="M2 10h20" stroke={c} strokeWidth="1.5" />
      <path d="M6 2h12" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function InsightsIcon({ active }: { active?: boolean }) {
  const c = active ? R.ACCENT : R.TEXT3;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 17l5-5 4 4 9-9" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7h4v4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AlertsIcon({ active }: { active?: boolean }) {
  const c = active ? R.ACCENT : R.TEXT3;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={active ? `${R.ACCENT}11` : "none"} />
      <path d="M13.73 21a2 2 0 01-3.46 0" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Status Bar ────────────────────────────────────────────────────────────────
export function RoboStatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-2" style={{ height: 44 }}>
      <span style={{ color: R.TEXT, fontSize: 15, fontWeight: 600, letterSpacing: "-0.3px", fontFamily: "var(--font-poppins), sans-serif" }}>09:41</span>
      <div className="flex items-center gap-1.5">
        {/* Cellular */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.5" fill={R.TEXT} />
          <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" fill={R.TEXT} />
          <rect x="9" y="2" width="3" height="10" rx="0.5" fill={R.TEXT} />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill={R.TEXT} fillOpacity="0.35" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5a1 1 0 100 2 1 1 0 000-2z" fill={R.TEXT} />
          <path d="M4.5 7C5.5 5.8 6.7 5 8 5s2.5.8 3.5 2" stroke={R.TEXT} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 4.5C3.5 2.8 5.6 1.5 8 1.5s4.5 1.3 6 3" stroke={R.TEXT} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={R.TEXT} strokeOpacity="0.35" />
          <rect x="2" y="2" width="16" height="8" rx="1.5" fill={R.TEXT} />
          <path d="M23 4v4" stroke={R.TEXT} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// ── Bottom Tab Bar ─────────────────────────────────────────────────────────────
const TABS = [
  { label: "Home", path: "/robo", icon: HomeIcon },
  { label: "Market", path: "/robo/market", icon: MarketIcon },
  { label: "Wallet", path: "/robo/wallet", icon: WalletIcon },
  { label: "Insights", path: "/robo/insights", icon: InsightsIcon },
  { label: "Alerts", path: "/robo/alerts", icon: AlertsIcon },
];

function RoboTabBar() {
  const router = useRouter();
  const current = router.pathname;

  return (
    <div
      style={{
        background: `${R.BG2}ee`,
        backdropFilter: "blur(20px)",
        borderTop: `1px solid rgba(255,255,255,0.07)`,
        paddingBottom: 20,
        paddingTop: 8,
      }}
      className="flex items-start justify-around"
    >
      {TABS.map(({ label, path, icon: Icon }) => {
        const active = current === path || (path !== "/robo" && current.startsWith(path));
        return (
          <button
            key={path}
            onClick={() => router.push(path)}
            className="flex flex-col items-center gap-1 px-3 transition-opacity"
            style={{ opacity: active ? 1 : 0.6, minWidth: 48 }}
          >
            <Icon active={active} />
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400, color: active ? R.ACCENT : R.TEXT3, fontFamily: "var(--font-poppins), sans-serif", letterSpacing: "0.3px" }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Main Layout ───────────────────────────────────────────────────────────────
interface RoboLayoutProps {
  title?: string;
  children: React.ReactNode;
  hideTabBar?: boolean;
}

export default function RoboLayout({ title = "E-Robo Wallet", children, hideTabBar = false }: RoboLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Full-page dark bg */}
      <div style={{ background: R.BG, minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        {/* Mobile frame */}
        <div
          style={{
            width: "100%",
            maxWidth: 390,
            minHeight: "100vh",
            background: R.BG,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            fontFamily: "var(--font-poppins), sans-serif",
            overflowX: "hidden",
          }}
        >
          {/* Ambient glow */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 300,
              height: 300,
              background: `radial-gradient(circle, ${R.ACCENT_GLOW} 0%, transparent 70%)`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Content area */}
          <div style={{ flex: 1, position: "relative", zIndex: 1, overflowY: "auto", paddingBottom: hideTabBar ? 0 : 80 }}>
            {children}
          </div>

          {/* Tab bar - fixed at bottom */}
          {!hideTabBar && (
            <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, zIndex: 50 }}>
              <RoboTabBar />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
