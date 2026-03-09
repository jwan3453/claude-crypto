/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Insights — Figma: Insights 01
import RoboLiveLayout, { L } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgRobot = "https://www.figma.com/api/mcp/asset/d83c6618-4fd6-4635-b88a-ec30de9e0e1d";
const imgBtcIllustration = "https://www.figma.com/api/mcp/asset/de418eac-2f1f-4f49-aa15-3f4b7b63092b";
const imgCoinAchain = "https://www.figma.com/api/mcp/asset/777a90ba-990c-43d0-820b-18a8557b0afc";
const imgCoinBitcoin = "https://www.figma.com/api/mcp/asset/072a915c-b098-4502-9d95-9f4707e14c54";

const NEWS_SMALL = [
  {
    id: 1,
    bg: "#6c63ff",
    title: "Participate in the Corra Finance Airdrop on CoinMarketCap",
    time: "3 days ago",
    imgSrc: imgBtcIllustration,
    bgColor: "#4b3fa0",
  },
  {
    id: 2,
    bg: "#5fc88f",
    title: "Participate in the Corra Finance Airdrop on CoinMarketCap",
    time: "3 days ago",
    imgSrc: imgRobot,
    bgColor: "#3a7a58",
  },
];

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={L.TEXT3} strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke={L.TEXT3} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function RoboLiveInsights() {
  return (
    <RoboLiveLayout title="Insights — E-Robo Wallet">
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -126, right: 0, width: 330, height: 334, background: "radial-gradient(ellipse at 60% 30%, rgba(159,157,243,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "32px 25px 0" }}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 style={{ fontSize: 32, fontWeight: 600, color: L.TEXT2, margin: 0 }}>Insights</h1>
          <button
            className="flex items-center justify-center transition-all duration-150 active:scale-95"
            style={{ width: 48, height: 48, borderRadius: "50%", background: L.CARD, boxShadow: "0px 4px 20px rgba(55,62,125,0.08)" }}
          >
            <svg width="20" height="4" viewBox="0 0 20 4" fill="none">
              <circle cx="2" cy="2" r="2" fill={L.TEXT3} />
              <circle cx="10" cy="2" r="2" fill={L.TEXT3} />
              <circle cx="18" cy="2" r="2" fill={L.TEXT3} />
            </svg>
          </button>
        </div>

        {/* Achain news section */}
        <div style={{ marginTop: 24 }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
            <div className="flex items-center gap-2">
              <img src={imgCoinAchain} alt="" style={{ width: 40, height: 40, objectFit: "cover", borderRadius: "50%" }} />
              <span style={{ fontSize: 16, fontWeight: 500, color: L.TEXT2 }}>Achain news</span>
            </div>
            <button
              onClick={() => {}}
              className="transition-all active:opacity-70"
              style={{ fontSize: 14, fontWeight: 500, color: L.PRIMARY }}
            >
              See All
            </button>
          </div>

          {/* Big News Card */}
          <button
            onClick={() => {}}
            className="w-full transition-all duration-150 active:scale-[0.99] hover:opacity-90 text-left"
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                height: 190,
                borderRadius: L.RADIUS_LG,
                overflow: "hidden",
                background: "linear-gradient(135deg, #ff9eb5 0%, #c4b5fd 50%, #93c5fd 100%)",
                position: "relative",
                marginBottom: 12,
              }}
            >
              <img
                src={imgRobot}
                alt=""
                style={{ position: "absolute", right: -10, bottom: -10, width: 200, height: 200, objectFit: "contain" }}
              />
              <img
                src={imgBtcIllustration}
                alt=""
                style={{ position: "absolute", left: 20, bottom: 20, width: 80, height: 80, objectFit: "contain" }}
              />
            </div>
            <p style={{ fontSize: 16, fontWeight: 600, color: L.TEXT, lineHeight: 1.4, margin: 0 }}>
              Participate in the Corra Finance Airdrop on CoinMarketCap
            </p>
            <div className="flex items-center gap-1" style={{ marginTop: 8 }}>
              <ClockIcon />
              <span style={{ fontSize: 14, color: L.TEXT3 }}>3 days ago</span>
            </div>
          </button>
        </div>

        {/* Bitcoin news section */}
        <div style={{ marginTop: 28 }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
            <div className="flex items-center gap-2">
              <img src={imgCoinBitcoin} alt="" style={{ width: 40, height: 40, objectFit: "cover", borderRadius: "50%" }} />
              <span style={{ fontSize: 16, fontWeight: 500, color: L.TEXT2 }}>Bitcoin news</span>
            </div>
            <button
              onClick={() => {}}
              className="transition-all active:opacity-70"
              style={{ fontSize: 14, fontWeight: 500, color: L.PRIMARY }}
            >
              See All
            </button>
          </div>

          {/* Small news items */}
          <div className="flex flex-col gap-4">
            {NEWS_SMALL.map(news => (
              <button
                key={news.id}
                onClick={() => {}}
                className="w-full flex gap-4 transition-all duration-150 active:scale-[0.99] hover:opacity-90 text-left"
              >
                {/* Thumbnail */}
                <div
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: L.RADIUS_MD,
                    background: `linear-gradient(135deg, ${news.bgColor}cc, ${news.bgColor}66)`,
                    overflow: "hidden",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <img
                    src={news.imgSrc}
                    alt=""
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                  />
                </div>
                {/* Text */}
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: L.TEXT, lineHeight: 1.45, margin: 0 }}>
                    {news.title}
                  </p>
                  <div className="flex items-center gap-1" style={{ marginTop: 8 }}>
                    <ClockIcon />
                    <span style={{ fontSize: 13, color: L.TEXT3 }}>{news.time}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: 24 }} />
      </div>
    </RoboLiveLayout>
  );
}
