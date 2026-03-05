import StatusBar from "@/components/StatusBar";
import BalanceCard from "@/components/BalanceCard";
import HoldingItem from "@/components/HoldingItem";
import TabBar from "@/components/TabBar";

// Figma asset URLs
const imgDecorativeLines = "https://www.figma.com/api/mcp/asset/bf248c80-d280-4f0d-b39b-0d22ca3ba9a2";
const imgUserAvatar = "https://www.figma.com/api/mcp/asset/279a1b33-da5e-4cb2-9e72-c6a6a9e969b6";
const imgSettings = "https://www.figma.com/api/mcp/asset/146a9d7f-57d7-4155-ad11-fba72a689bab";
const imgEthIcon = "https://www.figma.com/api/mcp/asset/223b23ee-d4df-4ecf-8f51-96fbdd64fcc9";
const imgGraphEth = "https://www.figma.com/api/mcp/asset/ce78c2bb-f055-4cf7-a93f-92b5e1c48ad8";
const imgGraphBtc = "https://www.figma.com/api/mcp/asset/0d256559-1172-40bd-9e0d-682959e9bff3";
const imgBtcLogo = "https://www.figma.com/api/mcp/asset/b1dbb0c5-0891-4c40-b096-7cb59018a120";
const imgLtcLogo = "https://www.figma.com/api/mcp/asset/b2d126fb-ac8a-4bb0-916c-6325c4ec477c";
const imgXrpLogo = "https://www.figma.com/api/mcp/asset/090a1781-a346-47b1-a6b6-7b28500d1938";

const holdings = [
  {
    name: "Ethereum",
    ticker: "ETH",
    usdValue: "$503.12",
    cryptoAmount: "50 ETH",
    iconSrc: imgEthIcon,
    graphSrc: imgGraphEth,
    graphDown: false,
    iconBg: false,
  },
  {
    name: "Bitcoin",
    ticker: "BTC",
    usdValue: "$26927",
    cryptoAmount: "2.05 BTC",
    iconSrc: imgBtcLogo,
    graphSrc: imgGraphBtc,
    graphDown: true,
    iconBg: true,
    iconLogoSrc: imgBtcLogo,
  },
  {
    name: "Litecoin",
    ticker: "LTC",
    usdValue: "$6927",
    cryptoAmount: "2.05 LTC",
    iconSrc: imgLtcLogo,
    graphSrc: imgGraphEth,
    graphDown: false,
    iconBg: true,
    iconLogoSrc: imgLtcLogo,
  },
  {
    name: "Ripple",
    ticker: "XRP",
    usdValue: "$4637",
    cryptoAmount: "2.05 LTC",
    iconSrc: imgXrpLogo,
    graphSrc: imgGraphEth,
    graphDown: false,
    iconBg: true,
    iconLogoSrc: imgXrpLogo,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070707] flex items-start justify-center">
      {/* Mobile container: 375 × 812px */}
      <div
        className="relative bg-[#070707] overflow-hidden"
        style={{ width: 375, minHeight: 812 }}
      >
        {/* Decorative background lines */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            left: -41.41,
            top: 88.1,
            width: 449.998,
            height: 256.759,
            transform: "rotate(-17.72deg)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgDecorativeLines}
            alt=""
            className="block w-full h-full object-contain"
          />
        </div>

        {/* Status Bar */}
        <StatusBar />

        {/* User Avatar */}
        <div className="absolute" style={{ left: 24, top: 64, width: 48, height: 48 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgUserAvatar}
            alt="Alex"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Settings Icon */}
        <div className="absolute" style={{ right: 24, top: 76, width: 24, height: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSettings} alt="Settings" className="w-full h-full object-contain" />
        </div>

        {/* Greeting */}
        <div className="absolute" style={{ left: 24, top: 136 }}>
          <p className="font-poppins text-[24px] text-white leading-normal">
            Hello{" "}
            <span className="font-medium text-white">Alex</span>
          </p>
        </div>

        {/* Balance Card */}
        <BalanceCard />

        {/* Action Buttons */}
        <div className="absolute flex gap-[11px]" style={{ left: 24, top: 288 }}>
          {/* Deposit */}
          <button
            className="font-poppins text-[16px] text-white leading-[18px] rounded-[16px] flex items-center justify-center"
            style={{
              width: 154,
              height: 38,
              backgroundColor: "#6552fe",
              border: "none",
              cursor: "pointer",
            }}
          >
            Deposit
          </button>

          {/* Withdraw */}
          <button
            className="font-poppins text-[16px] text-white leading-[18px] rounded-[16px] flex items-center justify-center"
            style={{
              width: 155,
              height: 38,
              backgroundColor: "transparent",
              border: "1px solid white",
              cursor: "pointer",
            }}
          >
            Withdraw
          </button>
        </div>

        {/* Holdings Section */}
        <div className="absolute" style={{ left: 24, top: 350, width: 327 }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-[20px]">
            <p className="font-poppins font-bold text-[20px] text-white leading-[20px]">
              Holdings
            </p>
            <a
              href="#"
              className="font-poppins font-medium text-[14px] text-white leading-[16px] underline decoration-solid"
            >
              See All
            </a>
          </div>

          {/* Holdings list */}
          <div className="flex flex-col gap-[20px]">
            {holdings.map((item) => (
              <HoldingItem key={item.ticker} {...item} />
            ))}
          </div>
        </div>

        {/* Tab Bar */}
        <TabBar />
      </div>
    </div>
  );
}
