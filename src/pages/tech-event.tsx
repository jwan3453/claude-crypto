import { useState } from "react";
import Head from "next/head";

// Figma MCP Assets
const imgBackgroundImage =
  "https://www.figma.com/api/mcp/asset/f7b7239c-06b5-4330-92aa-ab8d1987b41b";
const imgEventImage =
  "https://www.figma.com/api/mcp/asset/f53f2d22-97bb-404a-a638-eb68604f4117";
const imgUnion =
  "https://www.figma.com/api/mcp/asset/65560ebc-95fa-4e8a-ac3d-2d67923d3440";
const imgMenu01 =
  "https://www.figma.com/api/mcp/asset/9f1f5e90-29c9-4ef8-8d2d-bf8ceed33af4";
const imgIconPin =
  "https://www.figma.com/api/mcp/asset/95a04120-db7a-4462-b759-1fd7bc0a8542";
const imgIconCalendar =
  "https://www.figma.com/api/mcp/asset/c9f72b8b-47d5-4ecc-9aa5-4fedff27b164";
const imgIconClock =
  "https://www.figma.com/api/mcp/asset/4c995b84-d9a2-4c6d-b7ec-c5676fe4222b";

// Decorative vector groups around the event image
const decorativeAssets = [
  "https://www.figma.com/api/mcp/asset/5b858fb6-560b-41cf-85ac-32773bb86b48",
  "https://www.figma.com/api/mcp/asset/9624f000-969a-4a0b-974b-0e9b841cd091",
  "https://www.figma.com/api/mcp/asset/3b685a1e-552c-470b-8d8d-7d30d568768d",
  "https://www.figma.com/api/mcp/asset/72ba74cc-6683-41ce-9ddd-8d73ff7f9c70",
  "https://www.figma.com/api/mcp/asset/9bc8627e-2c75-4fe9-8a97-015ded164e03",
  "https://www.figma.com/api/mcp/asset/381f0c56-6ec5-4731-a40d-dd2470b9b536",
  "https://www.figma.com/api/mcp/asset/9a734a14-5a3a-4d84-8756-87c2ebc63f27",
  "https://www.figma.com/api/mcp/asset/53761193-d740-4185-81ca-cce51a36b275",
  "https://www.figma.com/api/mcp/asset/b9fc6f43-e2b4-45a1-8de3-d8be18bdd62c",
  "https://www.figma.com/api/mcp/asset/25d00cb0-92ba-4763-9081-8269ecfaa1c6",
  "https://www.figma.com/api/mcp/asset/4c5318a3-92aa-4180-b799-998d28a923db",
  "https://www.figma.com/api/mcp/asset/6aa10871-cbaa-478d-885a-577f28a4ef53",
  "https://www.figma.com/api/mcp/asset/67c5b356-5d50-4dd2-866a-0b424f16e9e0",
  "https://www.figma.com/api/mcp/asset/66f730b5-a939-46d4-b2e7-49bb40bca0f0",
  "https://www.figma.com/api/mcp/asset/cdc3f671-0566-4d9c-b076-7d0f9fd9072f",
  "https://www.figma.com/api/mcp/asset/8b5b459e-f049-4167-a28d-e5cecfacd671",
  "https://www.figma.com/api/mcp/asset/e8774992-b078-42fa-b00f-14bb168d0b87",
  "https://www.figma.com/api/mcp/asset/ab187af2-9a95-45ec-8843-40f412e5e0c4",
  "https://www.figma.com/api/mcp/asset/c87e8519-e7fe-40f9-b63e-d37d60b787a7",
];

const scheduleItems = [
  { time: "12:25 PM", event: "CHECK-IN", side: "right" as const },
  { time: "12:40 PM", event: "OPENING NOTE", side: "left" as const },
  { time: "01:00 PM", event: "APEXIA UNVEILING", side: "right" as const },
  {
    time: "1:20 PM",
    event: "CONVERGING PATHS: UNDERSTANDING EVENTS",
    side: "left" as const,
  },
  { time: "2:00 PM", event: "DISCOVER & CONNECT", side: "right" as const },
  {
    time: "2:25 PM",
    event: "CLOSING NOTES & SWAG DISTRIBUTION",
    side: "left" as const,
  },
];

const faqItems = [
  "What are the benefits of attending Converge?",
  "I'm new to tech and Marketing. Is Converge still for me?",
  "Is there any entry fee?",
  "Who's the mastermind behind Converge?",
  "Will I get any swags?",
  "Okay, you've convinced me. How do I sign up?",
];

export default function TechEvent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>CONVERGE - Tech Event by Apexia</title>
        <meta
          name="description"
          content="Converge demystifies hackathons, cohorts, and meetups. Join us for expert talks, interactive challenges, and epic connections."
        />
      </Head>

      <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
        {/* Background Image */}
        <div className="fixed inset-x-0 top-0 h-[783px] z-0 overflow-hidden">
          <img
            src={imgBackgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[420px]">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-8 py-7 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <img src={imgUnion} alt="Apexia" className="h-6 w-auto" />
              <span
                className="text-white text-lg tracking-wide"
                style={{ fontFamily: "'Borna', sans-serif", fontWeight: 500 }}
              >
                apexia
              </span>
            </div>
            <button aria-label="Menu">
              <img src={imgMenu01} alt="" className="w-6 h-6" />
            </button>
          </nav>

          {/* Hero Section */}
          <section className="flex flex-col items-center pt-48 pb-16 px-6">
            <h1
              className="text-[96px] leading-none text-white tracking-tight"
              style={{ fontFamily: "'NeueBit', sans-serif" }}
            >
              CONVERGE
            </h1>

            <div className="flex flex-col items-center gap-5 mt-3">
              {/* Location */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <img src={imgIconPin} alt="" className="w-3 h-3.5" />
                  <span
                    className="text-xs text-white tracking-tighter"
                    style={{ fontFamily: "'Martian Mono', monospace" }}
                  >
                    Aeronautical Auditorium
                  </span>
                </div>

                {/* Date & Time */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <img src={imgIconCalendar} alt="" className="w-3 h-3.5" />
                    <span
                      className="text-[10.5px] text-white tracking-tighter"
                      style={{ fontFamily: "'Martian Mono', monospace" }}
                    >
                      7th February 2024
                    </span>
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="flex items-center gap-1">
                    <img src={imgIconClock} alt="" className="w-3 h-3" />
                    <span
                      className="text-[10.5px] text-white tracking-tighter"
                      style={{ fontFamily: "'Martian Mono', monospace" }}
                    >
                      12:45pm - 2:40pm
                    </span>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <a
                href="#register"
                className="border border-white rounded-md px-5 py-2 text-xs text-white tracking-tighter hover:bg-white hover:text-[#080808] transition-colors"
                style={{ fontFamily: "'Martian Mono', monospace" }}
              >
                Register now
              </a>
            </div>
          </section>

          {/* About Section */}
          <section className="border-y border-white/10 px-6 py-12">
            <p
              className="text-[10px] text-[#6c6c6c] text-center uppercase tracking-wide mb-4"
              style={{ fontFamily: "'Martian Mono', monospace" }}
            >
              [ABOUT CONVERGE]
            </p>

            <div className="border-y border-white/10 py-3 mb-4">
              <h2
                className="text-[32px] text-[#ff4600] text-center tracking-wide"
                style={{ fontFamily: "'NeueBit', sans-serif" }}
              >
                kya hai converge?
              </h2>
            </div>

            <p
              className="text-[10px] text-white leading-relaxed mb-8"
              style={{ fontFamily: "'Martian Mono', monospace" }}
            >
              <span className="text-[#ff4600]">{`{\``}</span>
              Confused about hackathons, cohorts, and meetups? Converge cracks
              the code! Converge demystifies hackathons, cohorts, and meetups,
              empowering you to navigate the thrilling world of tech & marketing
              events. Expert talks, interactive challenges, and epic connections.
              Soch kya rahe ho? Register karo !
              <span className="text-[#ff4600]">{`\`}`}</span>
            </p>

            {/* Event Image with decorative elements */}
            <div className="relative flex justify-center py-8">
              <img
                src={imgEventImage}
                alt="Converge Event"
                className="w-52 h-auto rotate-[30deg] rounded-sm"
              />
              {/* Decorative tech icons scattered around */}
              <div className="absolute inset-0 pointer-events-none">
                {decorativeAssets.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="absolute w-6 h-6"
                    style={{
                      top: `${15 + ((i * 37) % 70)}%`,
                      left: `${5 + ((i * 23) % 85)}%`,
                      opacity: 0.9,
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="border-b border-white/10 px-6 py-12">
            <p
              className="text-[10px] text-[#6c6c6c] text-center uppercase tracking-wide mb-4"
              style={{ fontFamily: "'Martian Mono', monospace" }}
            >
              [EVENT OUTLINE]
            </p>

            <div className="border-y border-white/10 py-3 mb-10">
              <h2
                className="text-[32px] text-[#3080ed] text-center tracking-wide"
                style={{ fontFamily: "'NeueBit', sans-serif" }}
              >
                event ki rooprekha
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

              <div className="flex flex-col gap-10">
                {scheduleItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 ${
                      item.side === "left"
                        ? "flex-row-reverse text-right pr-[52%]"
                        : "pl-[52%]"
                    }`}
                  >
                    {/* Dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3080ed] border-2 border-[#3080ed] mt-0.5 shrink-0" />

                    {/* Content */}
                    <div className="flex flex-col gap-1">
                      <span
                        className="text-[10px] text-[#3080ed] tracking-tighter"
                        style={{ fontFamily: "'Martian Mono', monospace" }}
                      >
                        {item.time}
                      </span>
                      <span
                        className="text-[10px] text-white tracking-tighter uppercase"
                        style={{ fontFamily: "'Martian Mono', monospace" }}
                      >
                        {item.event}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-b border-white/10 px-6 py-12">
            <p
              className="text-[10px] text-[#6c6c6c] text-center uppercase tracking-wide mb-4"
              style={{ fontFamily: "'Martian Mono', monospace" }}
            >
              [FREQUENTLY ASKED QUESTIONS]
            </p>

            <div className="border-y border-white/10 py-3 mb-8">
              <h2
                className="text-[32px] text-[#7da942] text-center tracking-wide"
                style={{ fontFamily: "'NeueBit', sans-serif" }}
              >
                aksar pooche jane wale sawal
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              {faqItems.map((question, i) => (
                <button
                  key={i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="border border-white/50 rounded px-3.5 py-2 flex items-center justify-between gap-2 text-left w-full hover:border-white transition-colors"
                >
                  <span
                    className="text-[10px] text-white"
                    style={{ fontFamily: "'Martian Mono', monospace" }}
                  >
                    {question}
                  </span>
                  <svg
                    className={`w-2 h-2.5 shrink-0 text-white transition-transform ${
                      openFaq === i ? "rotate-90" : ""
                    }`}
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 text-center">
            <p
              className="text-[16px] text-white lowercase"
              style={{ fontFamily: "'NeueBit', sans-serif" }}
            >
              apexa&copy;2025
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
