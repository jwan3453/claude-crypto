interface HoldingItemProps {
  name: string;
  ticker: string;
  usdValue: string;
  cryptoAmount: string;
  iconSrc: string;
  graphSrc: string;
  graphDown?: boolean;
  iconBg?: boolean;
  iconLogoSrc?: string;
}

export default function HoldingItem({
  name,
  ticker,
  usdValue,
  cryptoAmount,
  iconSrc,
  graphSrc,
  graphDown = false,
  iconBg = false,
  iconLogoSrc,
}: HoldingItemProps) {
  return (
    <div className="flex items-center w-full h-[45px]">
      {/* Icon */}
      <div
        className="flex-shrink-0 w-[48px] h-[45px] relative rounded-[6px] flex items-center justify-center"
        style={iconBg ? { backgroundColor: "#212125" } : {}}
      >
        {iconBg && iconLogoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={iconLogoSrc} alt={name} className="w-[22px] h-[22px] object-contain" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={iconSrc} alt={name} className="w-full h-full object-contain" />
        )}
      </div>

      {/* Name + ticker */}
      <div className="flex flex-col justify-center ml-[13px] w-[80px]">
        <p className="font-poppins font-bold text-[16px] text-white leading-tight whitespace-nowrap">
          {name}
        </p>
        <p className="font-poppins font-normal text-[14px] text-[#6c757d] leading-tight">
          {ticker}
        </p>
      </div>

      {/* Mini chart */}
      <div className="flex-1 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={graphSrc}
          alt="chart"
          className="w-[66px] h-[33px] object-contain"
          style={graphDown ? { transform: "scaleY(-1) rotate(180deg)" } : {}}
        />
      </div>

      {/* Value */}
      <div className="flex flex-col items-end justify-center">
        <p className="font-poppins font-bold text-[16px] text-white leading-tight whitespace-nowrap">
          {usdValue}
        </p>
        <p className="font-poppins font-bold text-[10px] text-[#6c757d] leading-tight whitespace-nowrap">
          {cryptoAmount}
        </p>
      </div>
    </div>
  );
}
