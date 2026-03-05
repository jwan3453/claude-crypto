import StatusBar from "@/components/StatusBar";
import TabBar from "@/components/TabBar";

// Settings gear icon
function SettingsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        fill="white"
      />
    </svg>
  );
}

// Bitcoin logo
function BitcoinLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.4 9.8c.4-.8.2-1.7-.5-2.2.5-.7.6-1.6.1-2.3C14.1 4 12.8 4 11 4H7v14h4.5c2 0 4-.8 4-3 0-1.1-.4-2-.9-2.6l-.2-.6zM9.5 6.5h1.6c.9 0 2 .2 2 1.2 0 1-.9 1.3-1.8 1.3H9.5V6.5zm2.2 9H9.5v-3h2.2c1.1 0 2.2.4 2.2 1.5s-1.1 1.5-2.2 1.5z"
        fill="white"
      />
      <path d="M10 4V2M12 4V2M10 20v-2M12 20v-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Chart data
const chartLinePath =
  "M 7,112 C 20,108 33,90 46,84 C 59,78 68,53 82,47 C 96,41 108,69 120,65 C 132,61 145,42 158,38 C 171,34 181,23 194,19 C 207,15 219,32 231,28 C 243,24 253,13 266,9";
const chartAreaPath = `${chartLinePath} L 266,140 L 7,140 Z`;

const TOKEN_TABS = [
  { name: "BTC", x: 24, active: true, width: 27 },
  { name: "ETH", x: 107, active: false, width: 23 },
  { name: "LTC", x: 186, active: false, width: 23 },
  { name: "XRP", x: 265, active: false, width: 25 },
  { name: "EOS", x: 346, active: false, width: 26 },
];

const Y_AXIS = [
  { label: "15k", relTop: 0 },
  { label: "12k", relTop: 34 },
  { label: "9k", relTop: 71 },
  { label: "6k", relTop: 108 },
  { label: "3k", relTop: 145 },
  { label: "0k", relTop: 182 },
];

const X_AXIS = [
  { day: "Mon", date: "15", svgX: 5 },
  { day: "Tue", date: "16", svgX: 44 },
  { day: "Wed", date: "17", svgX: 79 },
  { day: "Thu", date: "18", svgX: 118 },
  { day: "Fri", date: "19", svgX: 158 },
  { day: "Sat", date: "20", svgX: 193 },
  { day: "Sun", date: "21", svgX: 229 },
  { day: "Mon", date: "22", svgX: 264 },
];

export default function TokenDetail() {
  return (
    <div className="min-h-screen bg-[#070707] flex items-start justify-center">
      {/* Mobile container: 375 × 812px */}
      <div
        className="relative bg-[#070707] overflow-hidden"
        style={{ width: 375, minHeight: 812 }}
      >
        {/* Status Bar */}
        <StatusBar />

        {/* Header: "Trading" title */}
        <div className="absolute" style={{ left: 24, top: 76 }}>
          <p className="font-poppins font-bold text-[28px] text-white" style={{ lineHeight: "42px" }}>
            Trading
          </p>
        </div>

        {/* Settings Icon */}
        <div className="absolute" style={{ right: 32, top: 85, width: 24, height: 24 }}>
          <SettingsIcon />
        </div>

        {/* Token Tabs */}
        {TOKEN_TABS.map(({ name, x, active, width }) => (
          <div key={name} className="absolute" style={{ left: x, top: 136 }}>
            <span className="font-poppins font-medium text-[14px] text-white leading-[16px]">
              {name}
            </span>
            {active && (
              <div
                className="absolute bg-[#6552FE]"
                style={{ bottom: -6, left: 0, width, height: 2 }}
              />
            )}
          </div>
        ))}

        {/* Coin Header */}
        <div
          className="absolute flex items-center"
          style={{ left: 24, top: 181, width: 327, height: 45 }}
        >
          {/* BTC Icon Container */}
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-[6px]"
            style={{ width: 48, height: 45, backgroundColor: "#212125" }}
          >
            <BitcoinLogo />
          </div>

          {/* Coin name & ticker */}
          <div className="ml-[14px] flex flex-col justify-center">
            <p className="font-poppins font-bold text-[20px] text-white leading-[24px]">
              Bitcoin
            </p>
            <p className="font-poppins text-[13px] text-[#6c757d] leading-[15px] mt-[2px]">
              BTC
            </p>
          </div>

          {/* Price (right aligned) */}
          <div className="ml-auto flex flex-col items-end justify-center">
            <p className="font-poppins font-bold text-[20px] text-white leading-[24px]">
              $26927
            </p>
            <p className="font-poppins text-[13px] text-[#6c757d] leading-[15px] mt-[2px]">
              2.05 BTC
            </p>
          </div>
        </div>

        {/* Y-Axis Labels */}
        {Y_AXIS.map(({ label, relTop }) => (
          <div
            key={label}
            className="absolute font-poppins text-[10px] text-[#efefef] leading-[16px]"
            style={{ left: 24, top: 255 + relTop }}
          >
            {label}
          </div>
        ))}

        {/* Chart SVG */}
        <div className="absolute" style={{ left: 47, top: 305 }}>
          <svg
            width="295"
            height="140"
            viewBox="0 0 295 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6552FE" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#6552FE" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Gradient area fill */}
            <path d={chartAreaPath} fill="url(#areaGradient)" />
            {/* Chart line */}
            <path
              d={chartLinePath}
              stroke="#6552FE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* X-Axis Labels */}
        {X_AXIS.map(({ day, date, svgX }, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{ left: 47 + svgX, top: 456 }}
          >
            <p className="font-poppins text-[9px] text-[#b9c1d9] leading-[13px]">{day}</p>
            <p className="font-poppins text-[9px] text-[#efefef] leading-[13px]">{date}</p>
          </div>
        ))}

        {/* Buy / Sell Buttons */}
        <button
          className="absolute font-poppins font-medium text-[16px] text-white leading-[18px] rounded-[16px] flex items-center justify-center"
          style={{
            left: 24,
            top: 507,
            width: 155,
            height: 38,
            backgroundColor: "#6552FE",
            border: "none",
          }}
        >
          Buy
        </button>
        <button
          className="absolute font-poppins font-medium text-[16px] text-white leading-[18px] rounded-[16px] flex items-center justify-center"
          style={{
            left: 195,
            top: 507,
            width: 156,
            height: 38,
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
        >
          Sell
        </button>

        {/* At Price Input Field */}
        <div
          className="absolute"
          style={{ left: 24, top: 566, width: 327, height: 55 }}
        >
          <p className="font-poppins text-[12px] leading-[18px]" style={{ color: "#B9C1D9" }}>
            At Price | USD
          </p>
          <p className="font-poppins font-medium text-[16px] text-white leading-[21px] mt-[4px]">
            0.031
          </p>
          {/* Bottom line */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: 2, backgroundColor: "#6552FE" }}
          />
        </div>

        {/* Amount Input Field */}
        <div
          className="absolute"
          style={{ left: 24, top: 637, width: 327, height: 55 }}
        >
          <p className="font-poppins text-[12px] leading-[18px]" style={{ color: "#B9C1D9" }}>
            Amount
          </p>
          <div className="flex items-center justify-between mt-[4px]">
            <p className="font-poppins font-medium text-[16px] text-white leading-[21px]">
              345 USD
            </p>
            {/* Quick-select percentages */}
            <div className="flex gap-[16px]">
              <span className="font-poppins text-[11px] text-white">25%</span>
              <span className="font-poppins text-[11px]" style={{ color: "#B9C1D9" }}>
                50%
              </span>
              <span className="font-poppins text-[11px]" style={{ color: "#B9C1D9" }}>
                100%
              </span>
            </div>
          </div>
          {/* Bottom divider */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: 2, backgroundColor: "rgba(185,193,217,0.3)" }}
          />
        </div>

        {/* Tab Bar */}
        <TabBar />
      </div>
    </div>
  );
}
