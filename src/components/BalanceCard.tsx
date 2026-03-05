const imgMeshGradient = "https://www.figma.com/api/mcp/asset/6672b415-f2a3-421e-92e7-65f7cc7be4cd";
const imgArrowUp = "https://www.figma.com/api/mcp/asset/51efa66d-a00c-40f1-87ae-cdce5738de38";

export default function BalanceCard() {
  return (
    <div className="absolute" style={{ left: 24, top: 170, width: 327, height: 100 }}>
      {/* Mesh gradient background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgMeshGradient}
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-[16px] pointer-events-none"
      />

      {/* Glassmorphism overlay */}
      <div
        className="absolute inset-0 rounded-[16px]"
        style={{
          background: "rgba(255,255,255,0.24)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 px-[16px] py-[12px] flex flex-col justify-between">
        {/* Current Balance label */}
        <p className="font-poppins font-normal text-[16px] text-[#272727] leading-normal">
          Current Balance
        </p>

        {/* Amount + percentage row */}
        <div className="flex items-center gap-[10px]">
          <p className="font-poppins font-bold text-[24px] text-[#1d1d1d] leading-normal whitespace-nowrap">
            $87,430.12
          </p>
          <div className="flex items-center gap-[4px]">
            {/* Arrow up (rotated to point up-right) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgArrowUp}
              alt="up"
              className="w-[12px] h-[12px]"
              style={{ transform: "scaleY(-1) rotate(90deg)" }}
            />
            <span className="font-bold text-[#6552fe] text-[14.819px] leading-normal">
              10.2%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
