/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Insights (Light Theme)
// Figma: Insights 01

import RoboNewLayout, { L } from "@/components/robo-new/RoboNewLayout";

// ── Asset URLs from Figma ─────────────────────────────────────────────────────
const imgIllustrationRobot3 = "https://www.figma.com/api/mcp/asset/e5345e0a-0929-409d-a302-3011dbaf61e4";
const imgIllustrationBtc3 = "https://www.figma.com/api/mcp/asset/23c53ee4-996e-4604-81e7-854031ec2902";
const imgIllustrationOther1 = "https://www.figma.com/api/mcp/asset/e79dd024-eea4-40b2-8ab0-45692380ca7e";
const imgIllustrationOther7 = "https://www.figma.com/api/mcp/asset/10fac581-a7a7-4ccd-b443-4c80c91e7177";
const imgCoin40PxLightBitcoin = "https://www.figma.com/api/mcp/asset/60ac3acb-9913-40e4-b4ad-d928b0686889";
const imgCoin40PxLightAchain = "https://www.figma.com/api/mcp/asset/00d85819-43ac-4976-aa5b-fd01976d48c9";

// ── News data ─────────────────────────────────────────────────────────────────
const SMALL_NEWS = [
  {
    title: "Participate in the Corra Finance Airdrop on CoinMarketCap",
    time: "3 days ago",
    bg: L.PURPLE,
    img: imgIllustrationOther7,
  },
  {
    title: "Participate in the Corra Finance Airdrop on CoinMarketCap",
    time: "3 days ago",
    bg: L.GREEN,
    img: imgIllustrationOther1,
  },
];

// ── Clock Icon ────────────────────────────────────────────────────────────────
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={L.TEXT3} strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke={L.TEXT3} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Small News Card ───────────────────────────────────────────────────────────
function SmallNewsCard({ item }: { item: typeof SMALL_NEWS[0] }) {
  return (
    <div
      className="flex gap-3 transition-all duration-150 hover:opacity-80 cursor-pointer active:scale-[0.98]"
      style={{ padding: "0 25px", marginBottom: 12 }}
    >
      {/* Image thumbnail */}
      <div
        style={{
          width: 110,
          height: 110,
          borderRadius: L.RADIUS_LG,
          background: item.bg,
          overflow: "hidden",
          flexShrink: 0,
          position: "relative",
        }}
      >
        <img
          src={item.img}
          alt=""
          style={{ position: "absolute", top: -6, left: -17, width: 140, height: 140, objectFit: "cover" }}
        />
      </div>
      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500, lineHeight: 1.5, marginBottom: 8 }}>
          {item.title}
        </p>
        <div className="flex items-center gap-1">
          <ClockIcon />
          <p style={{ color: L.TEXT3, fontSize: 14 }}>{item.time}</p>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboNewInsights() {
  return (
    <RoboNewLayout title="E-Robo Wallet — Insights">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-8 pb-4">
        <p style={{ color: L.TEXT, fontSize: 32, fontWeight: 600 }}>Insights</p>
        <button
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: L.CARD,
            boxShadow: "0px 4px 20px rgba(55,62,125,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="transition-opacity hover:opacity-70 active:opacity-50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="2" fill={L.TEXT2} />
            <circle cx="12" cy="12" r="2" fill={L.TEXT2} />
            <circle cx="19" cy="12" r="2" fill={L.TEXT2} />
          </svg>
        </button>
      </div>

      {/* Big News section - Achain */}
      <div className="px-6 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <img src={imgCoin40PxLightAchain} alt="Achain" style={{ width: 40, height: 40, objectFit: "cover" }} />
          <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500, flex: 1 }}>Achain news</p>
          <button style={{ color: L.PRIMARY, fontSize: 14, fontWeight: 500 }} className="hover:opacity-70 transition-opacity">
            See All
          </button>
        </div>
        {/* Hero image */}
        <div
          style={{
            borderRadius: L.RADIUS_LG,
            background: "#ff9bb3",
            height: 190,
            position: "relative",
            overflow: "hidden",
            marginBottom: 12,
          }}
          className="cursor-pointer transition-opacity hover:opacity-90 active:scale-[0.99]"
        >
          <img src={imgIllustrationRobot3} alt="" style={{ position: "absolute", right: -10, top: -10, width: 213, height: 213, objectFit: "cover" }} />
          <img src={imgIllustrationBtc3} alt="" style={{ position: "absolute", left: 40, top: 0, width: 86, height: 86, objectFit: "cover" }} />
          <img src={imgIllustrationOther1} alt="" style={{ position: "absolute", left: -37, bottom: -40, width: 150, height: 150, objectFit: "cover", opacity: 0.7 }} />
        </div>
        <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500, lineHeight: 1.5, marginBottom: 6 }}>
          Participate in the Corra Finance Airdrop on CoinMarketCap
        </p>
        <div className="flex items-center gap-1">
          <ClockIcon />
          <p style={{ color: L.TEXT3, fontSize: 14 }}>3 days ago</p>
        </div>
      </div>

      {/* Bitcoin news section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 px-6 mb-3">
          <img src={imgCoin40PxLightBitcoin} alt="Bitcoin" style={{ width: 40, height: 40, objectFit: "cover" }} />
          <p style={{ color: L.TEXT, fontSize: 14, fontWeight: 500, flex: 1 }}>Bitcoin news</p>
          <button style={{ color: L.PRIMARY, fontSize: 14, fontWeight: 500 }} className="hover:opacity-70 transition-opacity">
            See All
          </button>
        </div>
        {SMALL_NEWS.map((item, i) => (
          <SmallNewsCard key={i} item={item} />
        ))}
      </div>
    </RoboNewLayout>
  );
}
