const imgBackground = "https://www.figma.com/api/mcp/asset/d6bb84e8-b296-4926-8cbe-dcc4b8999cd5";
const imgDashboard = "https://www.figma.com/api/mcp/asset/d4414c7a-a73f-4bdf-9e9a-e045e95aa5b9";
const imgExchange = "https://www.figma.com/api/mcp/asset/3ba819ae-5f71-4ce1-9e9e-459c243ab9c4";
const imgUser = "https://www.figma.com/api/mcp/asset/6552e64a-cf04-446f-bcb0-7354278945e3";

export default function TabBar() {
  return (
    <div className="absolute left-0 w-full" style={{ top: 729, height: 83 }}>
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ transform: "scaleY(-1)" }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(255,255,255,0.1)]" />

      {/* Tabs */}
      <div className="absolute inset-0 flex items-start pt-[8px]">
        {/* Tab 1 – Dashboard (active) */}
        <div className="flex-1 flex flex-col items-center justify-center h-[49px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgDashboard} alt="Dashboard" className="w-[30px] h-[28px] object-contain" />
        </div>

        {/* Tab 2 – Exchange */}
        <div className="flex-1 flex flex-col items-center justify-center h-[49px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgExchange} alt="Exchange" className="w-[24px] h-[24px] object-contain" />
        </div>

        {/* Tab 3 – Profile */}
        <div className="flex-1 flex flex-col items-center justify-center h-[49px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgUser} alt="Profile" className="w-[24px] h-[24px] object-contain" />
        </div>
      </div>

      {/* Home indicator */}
      <div
        className="absolute bottom-[8px] left-1/2 -translate-x-1/2 h-[5px] rounded-full"
        style={{ width: 134, background: "rgba(185,193,217,0.5)" }}
      />
    </div>
  );
}
