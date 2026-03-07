import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const nftCards = [
  { name: "Cyber Samurai #575", price: "8.5", img: "/modern-22/nft1.png", hasButton: true },
  { name: "Cyber Samurai #784", price: "7.5", img: "/modern-22/nft2.png" },
  { name: "Cyber Samurai #475", price: "15.5", img: "/modern-22/nft3.png" },
  { name: "Cyber Samurai #784", price: "7.5", img: "/modern-22/nft4.png" },
  { name: "Cyber Samurai #784", price: "7.5", img: "/modern-22/nft5.png" },
  { name: "Cyber Samurai #475", price: "15.5", img: "/modern-22/nft6.png" },
];

const stats = [
  { label: "World Arts", value: "30.000 +" },
  { label: "Digital Artists", value: "17.000 +" },
  { label: "Live Auctions", value: "22.000 +" },
  { label: "Unique Products", value: "50.000 +" },
];

const steps = [
  {
    icon: "/modern-22/icon-wallet.png",
    bg: "/modern-22/card-bg1.png",
    title: "Set Up Your Wallet",
    desc: "Connect your wallet to Nico by clicking the wallet icon in the top right corner after you've set it up.",
  },
  {
    icon: "/modern-22/icon-add.png",
    bg: "/modern-22/card-bg2.png",
    title: "Create Unique Collection",
    desc: "Set a secondary sales fee and add social links, a description, profile and banner images, and a description.",
  },
  {
    icon: "/modern-22/icon-nft.png",
    bg: "/modern-22/card-bg3.png",
    title: "Download NFTs",
    desc: "Add a title and description to your work (picture, video, audio, or 3D art), then customize your NFTs with properties.",
  },
  {
    icon: "/modern-22/icon-sell.png",
    bg: "/modern-22/card-bg2.png",
    title: "Put Them Up for Sale",
    desc: "Auctions, fixed-price listings, and declining-price listings are all options. You decide how you'd like to sell your NFTs.",
  },
];

const navLinks = ["Home", "All NFTs", "Team", "Terms & Co.", "Contact"];

export default function Modern22() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Hape prime", "Lazy Lions", "Peaceful ape"];

  return (
    <>
      <Head>
        <title>KNFT - Buy, Create & Sell Unique NFTs</title>
        <meta name="description" content="NFT marketplace for digital art and collectibles" />
      </Head>

      <div className="min-h-screen bg-[#04011c] text-white overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute -top-24 -left-[40%] w-[220%] h-[220%] opacity-30">
            <Image src="/modern-22/bg-ellipse1.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute -top-44 -left-24 w-[80rem] h-[80rem] opacity-15">
            <Image src="/modern-22/bg-ellipse2.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="relative z-10">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-20 py-9">
            <span
              className="text-[28px] font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(121deg, #df1cff 26%, #ea0070 138%)" }}
            >
              KNFT.
            </span>
            <div className="flex gap-11 text-xl">
              {navLinks.map((link, i) => (
                <a
                  key={link}
                  href="#"
                  className={i === 0 ? "text-white" : "text-white/40 hover:text-white/70 transition-colors"}
                >
                  {link}
                </a>
              ))}
            </div>
            <button className="px-10 py-3 rounded-lg border-[1.5px] border-[#e50aa7] bg-white/5 text-xl font-bold shadow-[0px_16px_80px_0px_rgba(208,17,204,0.15)] hover:bg-white/10 transition-colors">
              Get in Touch
            </button>
          </nav>

          {/* Hero Section */}
          <section className="px-20 pt-16 pb-24 relative">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-16 max-w-[632px] pt-8">
                <div className="flex flex-col gap-8">
                  <h1 className="text-[56px] font-black leading-[1.3]">
                    Buy, Create &<br />
                    Sell <span className="font-light italic text-[#1ee0e1]">Unique NFTs</span> File.
                  </h1>
                  <p className="text-xl text-white/80 leading-[1.5] max-w-[495px]">
                    NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.
                  </p>
                </div>
                <button
                  className="self-start px-10 py-3 rounded-lg text-xl font-bold shadow-[0px_9px_100px_0px_rgba(208,17,204,0.35)]"
                  style={{ backgroundImage: "linear-gradient(134deg, #df1cff 26%, #ea0070 138%)" }}
                >
                  Explore NFTs
                </button>
              </div>

              {/* Hero Image */}
              <div className="relative w-[570px] h-[570px] flex-shrink-0">
                <div className="absolute inset-0 rotate-45">
                  <Image src="/modern-22/hero-shape.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute top-[86px] left-[86px] w-[252px] h-[252px] rounded-[175px] overflow-hidden bg-white">
                  <Image src="/modern-22/hero.png" alt="Hero NFT" fill className="object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute top-[155px] right-[55px] w-[177px] h-[176px] rounded-full border border-[#df1cff] bg-[#07003e] flex items-center justify-center p-8 z-10">
                  <div className="text-center font-bold text-2xl leading-tight">
                    <p>Cyber</p>
                    <p>Samurai</p>
                    <p>#177</p>
                  </div>
                </div>
                {/* Small floating image */}
                <div className="absolute top-[250px] -left-[20px] w-[84px] h-[84px]">
                  <Image src="/modern-22/hero-small.png" alt="" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="mt-20 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <Image src="/modern-22/eye.png" alt="" fill className="object-contain" />
                </div>
                <h2 className="text-[32px] font-bold">Nico NFT Marketplace Overview</h2>
              </div>
              <div className="flex gap-16">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-4">
                    <p className="text-xl text-white/80">{stat.label}</p>
                    <p className="text-[32px] font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Most Popular NFTs */}
          <section className="px-20 py-16 flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-[40px] font-black text-center">
                <span className="font-light italic text-[#1ee0e1]">Most Popular </span>
                NFTs
              </h2>
              <div className="flex items-baseline gap-20">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[22px] font-medium relative ${
                      activeTab === tab ? "text-white" : "text-white/80 hover:text-white transition-colors"
                    }`}
                  >
                    {activeTab === tab && (
                      <div className="absolute -inset-x-4 -inset-y-2">
                        <Image src="/modern-22/tab-active.png" alt="" fill className="object-contain" />
                      </div>
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* NFT Grid */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-[1280px]">
              {nftCards.map((card, i) => (
                <div key={i} className="bg-white/[0.03] rounded-2xl p-8 flex flex-col gap-8 relative">
                  <div className="relative h-[340px] rounded-lg overflow-hidden shadow-[0px_9px_100px_0px_rgba(204,17,208,0.15)]">
                    <Image src={card.img} alt={card.name} fill className="object-cover" />
                  </div>
                  {/* Heart button */}
                  <button className="absolute top-12 right-12 bg-white/[0.09] rounded-lg p-3">
                    <div className="w-6 h-6 relative">
                      <Image src="/modern-22/heart.png" alt="Like" fill className="object-contain" />
                    </div>
                  </button>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[22px] font-semibold">{card.name}</span>
                      <div className="flex items-end gap-[7px]">
                        <div className="w-8 h-8 relative">
                          <Image src="/modern-22/ethereum.png" alt="ETH" fill className="object-contain" />
                        </div>
                        <span className="text-[22px] font-semibold">{card.price}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className="w-[18px] h-[18px] relative">
                          <Image src="/modern-22/star.png" alt="Star" fill className="object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {card.hasButton && (
                    <button
                      className="w-full py-3 rounded-lg text-xl font-bold text-center shadow-[0px_9px_100px_0px_rgba(208,17,204,0.35)]"
                      style={{ backgroundImage: "linear-gradient(147deg, #df1cff 26%, #ea0070 138%)" }}
                    >
                      Buy Product
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button className="px-10 py-3 rounded-lg border-[1.5px] border-[#e50aa7] bg-white/5 text-xl font-bold shadow-[0px_16px_80px_0px_rgba(208,17,204,0.15)] hover:bg-white/10 transition-colors">
              Explore All NFTs
            </button>
          </section>

          {/* How to Create & Sell */}
          <section className="px-20 py-16 flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6 max-w-[719px]">
              <div className="bg-gradient-to-r from-transparent via-[#1ee0e1] to-white/0 px-4 py-2 rounded-full">
                <span className="text-xl font-bold text-white/80">UNIQUE FILES</span>
              </div>
              <h2 className="text-[40px] font-black text-center leading-[1.3]">
                How to <span className="font-light italic text-[#1ee0e1]">Create & Sell</span> Your NFT Files.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full max-w-[1280px]">
              {steps.map((step, i) => (
                <div key={i} className="relative h-[237px] w-full">
                  <div className="absolute top-0 right-[90px] w-[72px] h-[72px] z-10">
                    <Image src={step.icon} alt="" fill className="object-contain" />
                  </div>
                  <div className="absolute top-[21px] left-0 right-0 h-[215px]">
                    <Image src={step.bg} alt="" fill className="object-contain" />
                  </div>
                  <div className="absolute top-[76px] left-14 flex flex-col gap-6 z-10">
                    <h3 className="text-[22px] font-semibold">{step.title}</h3>
                    <p className="text-xl text-white/80 leading-[1.5] max-w-[530px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Browse by Category */}
          <section className="px-20 py-16 flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-[40px] font-black">
                <span className="font-light italic text-[#1ee0e1]">Browse by</span> Category
              </h2>
              <p className="text-xl text-white/80 leading-[1.5] max-w-[530px]">
                Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
              </p>
            </div>

            <div className="flex flex-col gap-8 w-full max-w-[1280px]">
              <div className="flex gap-8">
                <div className="w-[416px] h-[402px] relative rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/modern-22/category1.png" alt="Category 1" fill className="object-cover" />
                </div>
                <div className="flex-1 h-[402px] relative rounded-2xl overflow-hidden">
                  <Image src="/modern-22/category2.png" alt="Category 2" fill className="object-cover" />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-1 h-[402px] relative rounded-2xl overflow-hidden">
                  <Image src="/modern-22/category3.png" alt="Category 3" fill className="object-cover" />
                </div>
                <div className="w-[416px] h-[402px] relative rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src="/modern-22/category4.png" alt="Category 4" fill className="object-cover" />
                  <div
                    className="absolute inset-0 mix-blend-multiply rounded-2xl"
                    style={{ backgroundImage: "linear-gradient(139deg, #477bff 11%, rgba(166,2,119,0.78) 108%)" }}
                  />
                </div>
              </div>
            </div>

            <button className="px-10 py-3 rounded-lg border-[1.5px] border-[#e50aa7] bg-white/5 text-xl font-bold shadow-[0px_16px_80px_0px_rgba(208,17,204,0.15)] hover:bg-white/10 transition-colors">
              Explore NFTs Category
            </button>
          </section>

          {/* Partner Logos */}
          <section className="px-20 py-10 flex items-center justify-center gap-20">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="relative h-16 w-40 flex-shrink-0">
                <Image src={`/modern-22/partner${n}.png`} alt={`Partner ${n}`} fill className="object-contain" />
              </div>
            ))}
          </section>

          {/* Trending Crypto Market News */}
          <section className="px-20 py-16 flex items-center gap-[72px] overflow-hidden">
            <div className="flex flex-col gap-16 w-[438px] flex-shrink-0">
              <div className="flex flex-col gap-8">
                <div className="w-[79px] h-16 relative">
                  <Image src="/modern-22/newspaper.png" alt="" fill className="object-contain" />
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-[40px] font-black leading-[1.3]">
                    <span className="font-light italic text-[#1ee0e1]">Trending</span> Crypto Market News
                  </h2>
                  <p className="text-xl text-white/80 leading-[1.5]">
                    Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
                  </p>
                </div>
              </div>
              <button
                className="self-start px-10 py-3 rounded-lg text-xl font-bold shadow-[0px_9px_100px_0px_rgba(208,17,204,0.35)]"
                style={{ backgroundImage: "linear-gradient(134deg, #df1cff 26%, #ea0070 138%)" }}
              >
                Explore NFTs
              </button>
            </div>

            <div className="flex gap-8">
              {[
                { img: "/modern-22/news1.png", title: "Few Reasons to Sell NFTs on Nico" },
                { img: "/modern-22/news2.png", title: "Few Reasons to Sell NFTs on Nico" },
              ].map((news, i) => (
                <div key={i} className="flex flex-col gap-6 w-[445px]">
                  <div className="h-[285px] relative rounded-3xl overflow-hidden bg-white">
                    <Image src={news.img} alt={news.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-[17px]">
                    <p className="text-xl text-white/80">April 18, 2022</p>
                    <h3 className="text-[28px] font-semibold leading-[1.4]">{news.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Get in Touch */}
          <section className="py-16 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-[72px] font-extrabold leading-[1.3] relative">
                <span className="absolute top-[3.6px] left-[3.4px] text-transparent" style={{ textShadow: "4px 4px 16px #1ee0e1" }}>
                  Get in Touch
                </span>
                Get in Touch
              </h2>
              <p className="text-xl text-white/80 leading-[1.5] max-w-[612px]">
                Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
              </p>
            </div>

            <div className="bg-[#0d0d2d] flex items-center justify-between p-6 rounded-2xl w-[716px]">
              <span className="text-[22px] text-white/50">Enter your email address</span>
              <div className="w-7 h-7 relative">
                <Image src="/modern-22/icon-email.png" alt="" fill className="object-contain" />
              </div>
            </div>

            <button
              className="px-10 py-3 rounded-lg text-xl font-bold shadow-[0px_9px_100px_0px_rgba(208,17,204,0.35)]"
              style={{ backgroundImage: "linear-gradient(130deg, #df1cff 26%, #ea0070 138%)" }}
            >
              Contact Us
            </button>
          </section>

          {/* Contact Info */}
          <section className="px-20 py-16 flex flex-col items-center gap-16">
            <div className="flex items-center justify-between w-full max-w-[945px]">
              {[
                { icon: "/modern-22/icon-email.png", lines: ["example@gmail.com", "sample@yahoo.com"] },
                { icon: "/modern-22/icon-rocket.png", lines: ["We are on Telegram", "@NicoCryptoChannel"] },
                { icon: "/modern-22/icon-phone.png", lines: ["+1 800 123 456 789", "+1 800 123 456 780"] },
              ].map((contact, i) => (
                <div key={i} className="flex flex-col items-center gap-8">
                  <div className="bg-[#1a124f] rounded-full p-4">
                    <div className="bg-[#100943] rounded-full p-3 w-[47px] h-[47px] flex items-center justify-center">
                      <div className="w-6 h-6 relative">
                        <Image src={contact.icon} alt="" fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 text-xl text-center">
                    {contact.lines.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="w-12 h-12 relative">
                  <Image src={`/modern-22/social${n}.png`} alt={`Social ${n}`} fill className="object-contain" />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full max-w-[1280px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Footer */}
            <div className="flex items-center justify-between w-full max-w-[1280px]">
              <p className="text-xl text-white/80">Copyright &copy; 2022 Nazmul Shanto. All Rights Reserved</p>
              <div className="flex gap-11 text-xl">
                {navLinks.map((link, i) => (
                  <a
                    key={link}
                    href="#"
                    className={i === 0 ? "text-white" : "text-white/40 hover:text-white/70 transition-colors"}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
