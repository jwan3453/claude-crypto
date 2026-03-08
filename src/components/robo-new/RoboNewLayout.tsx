/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Head from "next/head";

// ── Design tokens (E-Robo Light theme) ──────────────────────────────────────
export const L = {
  BG: "#f3f5f6",
  BG2: "#f7f7fa",
  CARD: "#ffffff",
  CARD_GLASS: "rgba(255,255,255,0.8)",
  CARD_GLASS2: "rgba(255,255,255,0.4)",
  PRIMARY: "#767dff",
  PRIMARY_SOFT: "#e0e2ff",
  PURPLE: "#9f9df3",
  PURPLE_SOFT: "#ebecff",
  TEXT: "#191c32",
  TEXT2: "#26273c",
  TEXT3: "#9395a4",
  TEXT_INACTIVE: "#ced0de",
  GREEN: "#5fc88f",
  GREEN_SOFT: "#def5e9",
  RED: "#ff6464",
  RED_SOFT: "#ffdbdb",
  PINK: "#f04086",
  YELLOW: "#f7931a",
  YELLOW_SOFT: "#ffe4c3",
  RADIUS_SM: "8px",
  RADIUS_MD: "16px",
  RADIUS_LG: "25px",
  RADIUS_XL: "40px",
};

// ── Tab Icons ─────────────────────────────────────────────────────────────────
export function HomeIcon({ active }: { active?: boolean }) {
  const c = active ? L.PRIMARY : L.TEXT_INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" fill={active ? `${L.PRIMARY}22` : "none"} />
      <path d="M9 21V12h6v9" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
export function MarketIcon({ active }: { active?: boolean }) {
  const c = active ? L.PRIMARY : L.TEXT_INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="14" width="4" height="7" rx="1" stroke={c} strokeWidth="1.5" fill={active ? `${L.PRIMARY}22` : "none"} />
      <rect x="10" y="9" width="4" height="12" rx="1" stroke={c} strokeWidth="1.5" fill={active ? `${L.PRIMARY}22` : "none"} />
      <rect x="17" y="3" width="4" height="18" rx="1" stroke={c} strokeWidth="1.5" fill={active ? `${L.PRIMARY}22` : "none"} />
    </svg>
  );
}
export function WalletIcon({ active }: { active?: boolean }) {
  const c = active ? L.PRIMARY : L.TEXT_INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="14" rx="2" stroke={c} strokeWidth="1.5" fill={active ? `${L.PRIMARY}11` : "none"} />
      <circle cx="16" cy="13" r="1.5" fill={c} />
      <path d="M2 10h20" stroke={c} strokeWidth="1.5" />
      <path d="M6 2h12" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
export function InsightsIcon({ active }: { active?: boolean }) {
  const c = active ? L.PRIMARY : L.TEXT_INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke={c} strokeWidth="1.5" fill={active ? `${L.PRIMARY}11` : "none"} />
      <path d="M8 7h8M8 11h8M8 15h5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
export function ProfileIcon({ active }: { active?: boolean }) {
  const c = active ? L.PRIMARY : L.TEXT_INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.5" fill={active ? `${L.PRIMARY}22` : "none"} />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Bottom Tab Bar ─────────────────────────────────────────────────────────────
const TABS = [
  { label: "Home", path: "/robo-new", icon: HomeIcon },
  { label: "Market", path: "/robo-new/market", icon: MarketIcon },
  { label: "Wallet", path: "/robo-new/wallet", icon: WalletIcon },
  { label: "Insights", path: "/robo-new/insights", icon: InsightsIcon },
  { label: "Alerts", path: "/robo-new/alerts", icon: ProfileIcon },
];

function RoboNewTabBar() {
  const router = useRouter();
  const current = router.pathname;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        borderRadius: "40px 40px 0 0",
        boxShadow: "0px 0px 80px 0px rgba(55,62,125,0.05)",
        paddingBottom: 20,
        paddingTop: 10,
      }}
      className="flex items-start justify-around"
    >
      {TABS.map(({ label, path, icon: Icon }) => {
        const active = current === path || (path !== "/robo-new" && current.startsWith(path));
        return (
          <button
            key={path}
            onClick={() => router.push(path)}
            className="flex flex-col items-center gap-1 px-3 transition-all duration-150 active:scale-95"
            style={{ minWidth: 48 }}
          >
            <Icon active={active} />
            <span
              style={{
                fontSize: 10,
                fontWeight: active ? 600 : 400,
                color: active ? L.PRIMARY : L.TEXT_INACTIVE,
                fontFamily: "var(--font-poppins), sans-serif",
                letterSpacing: "0.3px",
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Main Layout ───────────────────────────────────────────────────────────────
interface RoboNewLayoutProps {
  title?: string;
  children: React.ReactNode;
  hideTabBar?: boolean;
}

export default function RoboNewLayout({ title = "E-Robo Wallet", children, hideTabBar = false }: RoboNewLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div style={{ background: L.BG, minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 390,
            minHeight: "100vh",
            background: L.BG,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            fontFamily: "var(--font-poppins), sans-serif",
            overflowX: "hidden",
          }}
        >
          {/* Content area */}
          <div style={{ flex: 1, position: "relative", zIndex: 1, overflowY: "auto", paddingBottom: hideTabBar ? 0 : 100 }}>
            {children}
          </div>

          {/* Tab bar */}
          {!hideTabBar && (
            <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, zIndex: 50 }}>
              <RoboNewTabBar />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ── Back Button ────────────────────────────────────────────────────────────────
export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center transition-all duration-150 active:scale-95 hover:opacity-70"
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: L.CARD,
        boxShadow: "0px 4px 20px rgba(55,62,125,0.08)",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke={L.TEXT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
