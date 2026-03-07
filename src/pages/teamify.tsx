/* eslint-disable @next/next/no-img-element */

// Figma asset URLs
const imgAvatar = "https://www.figma.com/api/mcp/asset/4f82ad7d-696b-41c5-898d-d6c8d7e693c2";
const imgNotif1 = "https://www.figma.com/api/mcp/asset/e8bb04f5-0d70-406d-974b-376f887719e0";
const imgNotif2 = "https://www.figma.com/api/mcp/asset/08d27982-fd58-40a0-85ba-4cea2ce7e998";
const imgNotif3 = "https://www.figma.com/api/mcp/asset/5bef2ccd-fdd7-492d-bb10-d3dc7c0d39ba";
const imgNotif4 = "https://www.figma.com/api/mcp/asset/afbc5ae5-ebc6-4ddc-b354-cb0365998b48";
const imgNotif5 = "https://www.figma.com/api/mcp/asset/65d7eb87-0edf-4bfa-a06c-c8dc647396df";
const imgIllustration = "https://www.figma.com/api/mcp/asset/75504f9e-c667-45da-b206-2eb542cdf061";

const sidebarItems = [
  { label: "Dashboard", active: true, icon: "grid" },
  { label: "Teams", active: false, icon: "command" },
  { label: "Employees", active: false, icon: "users" },
  { label: "Projects", active: false, icon: "briefcase" },
];

const sidebarItems2 = [
  { label: "Meetings", active: false, icon: "phone" },
  { label: "Tasks", active: false, icon: "folder" },
  { label: "Settings", active: false, icon: "settings" },
];

const notifications = [
  { name: "Ellie joined team developers", date: "04 April, 2021 | 04:00 PM", img: imgNotif1 },
  { name: "Jenny joined team HR", date: "04 April, 2021 | 04:00 PM", img: imgNotif2 },
  { name: "Adam got employee of the month", date: "03 April, 2021 | 02:00 PM", img: imgNotif3 },
  { name: "Robert joined team design", date: "02 April, 2021 | 02:00 PM", img: imgNotif4 },
  { name: "Jack joined team design", date: "01 April, 2021 | 03:00 PM", img: imgNotif5 },
];

const teamBars = [
  { letter: "a", value: 1, maxH: 168, color: "#fabe7a", label: "Marketing" },
  { letter: "b", value: 5, maxH: 168, color: "#f6866a", label: "HR" },
  { letter: "c", value: 3, maxH: 168, color: "#59e6f6", label: "Developers" },
  { letter: "d", value: 10, maxH: 168, color: "#7661e2", label: "Design" },
];

const statCards = [
  { value: "Top 10", desc: "Position in Dribbble", sub: "20% Increase from Last Week", bg: "bg-[#fff0e6]" },
  { value: "26", desc: "New Employees Onboarded", sub: "15% Increase from Last Month", bg: "bg-[#eceafe]" },
  { value: "500", desc: "New Clients Approached", sub: "5% Increase from Last Week", bg: "bg-[#e5f7ff]" },
];

function SidebarIcon({ name, active }: { name: string; active: boolean }) {
  const color = active ? "#6956e5" : "#878787";
  const icons: Record<string, JSX.Element> = {
    grid: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill={color} />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill={color} />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill={color} />
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill={color} />
      </svg>
    ),
    command: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
    users: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    briefcase: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    phone: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    folder: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    settings: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  };
  return icons[name] || null;
}

function DonutChart() {
  const total = 3254;
  const active = 3000;
  const inactive = 254;
  const activePercent = (active / total) * 100;
  const inactivePercent = (inactive / total) * 100;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const activeOffset = circumference - (activePercent / 100) * circumference;
  const inactiveArc = (inactivePercent / 100) * circumference;

  return (
    <svg width="180" height="180" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r={radius} fill="none" stroke="#e6e8ec" strokeWidth="16" />
      <circle
        cx="100" cy="100" r={radius} fill="none"
        stroke="#7661e2" strokeWidth="16"
        strokeDasharray={circumference}
        strokeDashoffset={activeOffset}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />
      <circle
        cx="100" cy="100" r={radius} fill="none"
        stroke="#fb896b" strokeWidth="16"
        strokeDasharray={`${inactiveArc} ${circumference - inactiveArc}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        transform="rotate(-90 100 100)"
      />
      <circle cx="100" cy="100" r={radius - 20} fill="none" stroke="#fabe7a" strokeWidth="8" opacity="0.3" />
    </svg>
  );
}

export default function Teamify() {
  return (
    <div className="font-manrope min-h-screen bg-[#dee1e7] p-4 lg:p-6">
      <div className="mx-auto flex max-w-[1500px] overflow-hidden rounded-[30px] bg-white shadow-[0px_44px_84px_6px_#d8d9db]">
        {/* Sidebar */}
        <aside className="hidden w-[240px] shrink-0 flex-col bg-[#f9f9f9] px-6 py-10 lg:flex">
          {/* Logo */}
          <div className="mb-12 flex items-center gap-3">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
              <rect width="33" height="33" rx="8" fill="#6956e5" />
              <rect x="8" y="8" width="7" height="7" rx="2" fill="white" />
              <rect x="18" y="8" width="7" height="7" rx="2" fill="white" opacity="0.5" />
              <rect x="8" y="18" width="7" height="7" rx="2" fill="white" opacity="0.5" />
              <rect x="18" y="18" width="7" height="7" rx="2" fill="white" opacity="0.3" />
            </svg>
            <span className="text-[22px] font-bold text-[#6956e5]">Teamify</span>
          </div>

          {/* Nav Group 1 */}
          <nav className="flex flex-col gap-2">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex cursor-pointer items-center gap-4 rounded-lg px-2 py-3 text-[16px] ${
                  item.active ? "font-bold text-[#6956e5]" : "font-medium text-[#878787]"
                }`}
              >
                <SidebarIcon name={item.icon} active={item.active} />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-4 border-t border-[#e0e0e0]" />

          {/* Nav Group 2 */}
          <nav className="flex flex-col gap-2">
            {sidebarItems2.map((item) => (
              <div
                key={item.label}
                className="flex cursor-pointer items-center gap-4 rounded-lg px-2 py-3 text-[16px] font-medium text-[#878787]"
              >
                <SidebarIcon name={item.icon} active={false} />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

          {/* Bottom Illustration */}
          <div className="mt-auto pt-8">
            <div className="relative rounded-xl bg-[#6956e5]/10 px-4 pb-4 pt-20">
              <img
                src={imgIllustration}
                alt="illustration"
                className="absolute -top-8 left-1/2 w-[120px] -translate-x-1/2"
              />
              <div className="rounded-md bg-white py-2 text-center text-xs font-semibold text-[#6956e5]">
                Share Your Thoughts
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-[24px] font-bold text-[#23262f] lg:text-[26px]">Good Morning Anima</h1>
              <p className="mt-1 text-sm font-semibold text-[#828282]">Hope you have a good day</p>
            </div>
            <div className="flex items-center gap-5">
              {/* Search */}
              <button className="text-[#23262f]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
              {/* Bell */}
              <button className="text-[#23262f]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              {/* Avatar */}
              <div className="flex items-center gap-2">
                <img src={imgAvatar} alt="avatar" className="h-[44px] w-[44px] rounded-full object-cover" />
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="#23262f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid gap-6 xl:grid-cols-[1fr_1fr_260px]">
            {/* Teams Strength */}
            <div className="rounded-xl border border-[#e6e8ec] bg-white p-6">
              <h2 className="mb-6 text-[18px] font-bold text-[#23262f]">Teams Strength</h2>
              {/* Bar Chart */}
              <div className="flex items-end justify-center gap-4">
                {teamBars.map((bar) => {
                  const height = (bar.value / 10) * bar.maxH;
                  return (
                    <div key={bar.letter} className="flex flex-col items-center">
                      <span className="mb-1 text-xs font-semibold text-[#828282]">{bar.value}</span>
                      <div
                        className="w-[52px] rounded-t-lg lg:w-[60px]"
                        style={{ height: `${height}px`, backgroundColor: bar.color }}
                      />
                      <span className="mt-2 text-xs font-semibold text-[#828282]">{bar.letter}</span>
                    </div>
                  );
                })}
              </div>
              {/* Legend */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {teamBars.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <div className="flex h-[26px] w-[26px] items-center justify-center rounded text-xs font-semibold text-white" style={{ backgroundColor: bar.color }}>
                      {bar.letter}
                    </div>
                    <span className="text-sm font-semibold text-[#828282]">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Employees */}
            <div className="rounded-xl border border-[#e6e8ec] bg-white p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#23262f]">Employees</h2>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#787486]">
                  <span>Aug 25-Sept 25</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-6">
                {/* Stats */}
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#7661e2]" />
                      <span className="text-sm text-[#787486]">Inactive</span>
                    </div>
                    <p className="mt-1 text-[18px] font-bold text-black">254</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#fb896b]" />
                      <span className="text-sm text-[#787486]">Active</span>
                    </div>
                    <p className="mt-1 text-[18px] font-bold text-black">3000</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#fabe7a]" />
                      <span className="text-sm text-[#787486]">Total</span>
                    </div>
                    <p className="mt-1 text-[18px] font-bold text-black">3254</p>
                  </div>
                </div>
                {/* Donut */}
                <div className="flex flex-1 items-center justify-center">
                  <DonutChart />
                </div>
              </div>
            </div>

            {/* Stat Cards Column */}
            <div className="flex flex-col gap-4">
              {statCards.map((card) => (
                <div key={card.value} className={`rounded-xl ${card.bg} px-5 py-5 text-center`}>
                  <p className="text-[22px] font-bold text-black">{card.value}</p>
                  <p className="mt-1 text-sm font-medium capitalize text-black">{card.desc}</p>
                  <p className="mt-1 text-xs font-medium lowercase text-[#787486]">{card.sub}</p>
                </div>
              ))}
            </div>

            {/* Project Deliveries */}
            <div className="rounded-xl bg-white p-6 shadow-[0px_4px_39px_9px_rgba(81,69,159,0.09)] xl:col-span-2">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-[18px] font-bold text-[#23262f]">Project Deliveries</h2>
                <div className="flex gap-8">
                  <div className="flex items-center gap-2">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#fb896b]" />
                    <span className="text-sm text-[#787486]">Achieved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#7661e2]" />
                    <span className="text-sm text-[#787486]">Target</span>
                  </div>
                </div>
              </div>
              {/* Chart */}
              <div className="relative">
                {/* Y Axis Labels */}
                <div className="absolute left-0 top-0 flex h-[250px] flex-col justify-between text-right text-xs text-[#6b7280]">
                  <span>12</span><span>10</span><span>8</span><span>6</span><span>4</span><span>2</span><span>0</span>
                </div>
                {/* Chart Area */}
                <div className="ml-8">
                  <svg className="w-full" viewBox="0 0 600 250" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      <line key={i} x1="0" y1={i * (250 / 6)} x2="600" y2={i * (250 / 6)} stroke="#f0f0f0" strokeWidth="1" />
                    ))}
                    {/* Achieved line (orange) */}
                    <path
                      d="M0,145 C50,140 100,125 150,130 C200,135 250,110 300,100 C350,90 400,115 450,120 C500,125 550,95 600,90"
                      fill="none" stroke="#fb896b" strokeWidth="2.5" strokeLinecap="round"
                    />
                    {/* Target line (purple) */}
                    <path
                      d="M0,165 C50,155 100,145 150,150 C200,155 250,125 300,115 C350,105 400,130 450,135 C500,140 550,110 600,105"
                      fill="none" stroke="#7661e2" strokeWidth="2.5" strokeLinecap="round"
                    />
                    {/* Highlight dot */}
                    <circle cx="300" cy="100" r="6" fill="#fb896b" stroke="white" strokeWidth="2" />
                  </svg>
                  {/* X Axis Labels */}
                  <div className="mt-2 flex justify-between text-xs text-[#6b7280]">
                    <span>Oct 2021</span><span>Nov 2021</span><span>Dec 2021</span><span>Jan 2022</span><span>Feb 2022</span><span>Mar 2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#23262f]">Notifications</h2>
                <button className="text-sm font-semibold text-[#6956e5]">View All</button>
              </div>
              <div className="flex flex-col gap-3">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-[#f9f9f9] p-3">
                    <img src={n.img} alt="" className="h-9 w-9 rounded object-cover" />
                    <div>
                      <p className="text-xs font-medium text-[#23262f]">{n.name}</p>
                      <p className="mt-0.5 text-[10px] text-[#708099]">{n.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
