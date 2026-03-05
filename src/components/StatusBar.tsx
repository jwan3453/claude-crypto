const imgBattery = "https://www.figma.com/api/mcp/asset/e794dbd8-9849-4eba-89ba-f62871701d58";
const imgWifi = "https://www.figma.com/api/mcp/asset/b4f318f6-1980-433a-9855-9f2d90e9cebd";
const imgCellular = "https://www.figma.com/api/mcp/asset/d8b79f22-d111-473d-9792-66241ed494be";

export default function StatusBar() {
  return (
    <div className="absolute left-0 top-0 w-full h-[44px] flex items-center">
      <span
        className="absolute font-poppins font-semibold text-[15px] text-white tracking-[-0.3px] leading-normal"
        style={{ left: 21 }}
      >
        09:41
      </span>
      <div className="absolute right-[14px] flex items-center gap-[6px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgCellular} alt="cellular" className="h-[12px] w-auto" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgWifi} alt="wifi" className="h-[12px] w-auto" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgBattery} alt="battery" className="h-[12px] w-auto" />
      </div>
    </div>
  );
}
