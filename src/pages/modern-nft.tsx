import { useState } from "react";
import Head from "next/head";

// Figma MCP asset URLs
const assets = {
  ellipse19: "https://www.figma.com/api/mcp/asset/6ebf9a35-2a6b-4ca1-8d5e-6bc0c65e0dc3",
  ellipse18: "https://www.figma.com/api/mcp/asset/264883a3-25d0-49ba-a264-bd8588649e4a",
  ellipse20: "https://www.figma.com/api/mcp/asset/37718ead-bfb0-4361-bbf9-6286fc38e6d4",
  heroImage: "https://www.figma.com/api/mcp/asset/bf11890f-3979-4ca2-aaf4-e2d96b104936",
  heroShape: "https://www.figma.com/api/mcp/asset/cf7c3b33-f60e-4cfb-95b2-99e989ca9ef8",
  eye: "https://www.figma.com/api/mcp/asset/6dc40878-e054-4f61-b937-73b476d05d5c",
  floatingNft: "https://www.figma.com/api/mcp/asset/ca9dcb79-c99b-434d-92f1-9b9582195bd0",
  nft1: "https://www.figma.com/api/mcp/asset/d2018801-275a-4273-b9da-97651a950b81",
  nft2: "https://www.figma.com/api/mcp/asset/c69d55b4-e0a4-4979-ba84-61531fa7bf38",
  nft3: "https://www.figma.com/api/mcp/asset/26b68a03-4b83-403f-8ace-b702552270cf",
  nft4: "https://www.figma.com/api/mcp/asset/890c7fba-5178-4137-8b35-2850a7656294",
  nft5: "https://www.figma.com/api/mcp/asset/30797d03-18bd-4d66-b3c2-9d553c6eb481",
  nft6: "https://www.figma.com/api/mcp/asset/dce3447b-89d0-43c8-841b-7274ae2cb54c",
  ethereum: "https://www.figma.com/api/mcp/asset/2943f44e-b946-4f31-ab97-4c62485b7328",
  star: "https://www.figma.com/api/mcp/asset/7a6d4539-6aee-4a6a-93f1-52b949655161",
  heart: "https://www.figma.com/api/mcp/asset/b1a8f8ae-eb75-420e-9d40-fc17130a7108",
  coinWallet: "https://www.figma.com/api/mcp/asset/984c55c6-1d84-487d-b1ea-9c95afaa18e1",
  addNew: "https://www.figma.com/api/mcp/asset/479bcf8a-d1a6-4033-9320-89e92e072739",
  nftIcon: "https://www.figma.com/api/mcp/asset/d809acde-74c9-418d-b890-137f1cdde58f",
  sell: "https://www.figma.com/api/mcp/asset/be1c27e3-31cd-4cb0-96f2-0d20ec816427",
  subtract1: "https://www.figma.com/api/mcp/asset/7bac72a9-a035-4ac5-aafa-c4e7736b0271",
  subtract2: "https://www.figma.com/api/mcp/asset/f2faead3-0b98-4377-ba32-aa488dd63710",
  subtract3: "https://www.figma.com/api/mcp/asset/bb8e74ec-4df3-4880-bae2-f4138de73682",
  tabBg: "https://www.figma.com/api/mcp/asset/ae4db8d3-eba9-4097-8aff-833a0403328b",
  logo1: "https://www.figma.com/api/mcp/asset/3b33b484-60ae-4616-843b-15cd5559987d",
  logo2: "https://www.figma.com/api/mcp/asset/f84c1fca-01f4-44f8-b3fc-40744d965ea5",
  logo3: "https://www.figma.com/api/mcp/asset/6aaaeb14-4281-4064-b396-e5d1c53ecaa8",
  logo4: "https://www.figma.com/api/mcp/asset/6ceb924d-6336-4a80-bc15-e9d7360e9e03",
  logo5: "https://www.figma.com/api/mcp/asset/5229c8c0-083e-4959-a2c8-9dc762a9e5d5",
  logo6: "https://www.figma.com/api/mcp/asset/1ab21d8c-41cb-4726-9b5d-a64c3df724cd",
  catImg1: "https://www.figma.com/api/mcp/asset/453619b3-4f5f-4549-8211-c460dd4d7e10",
  catImg2: "https://www.figma.com/api/mcp/asset/3198a2c0-a70b-49f0-8521-33dbb85c8f3b",
  catImg3: "https://www.figma.com/api/mcp/asset/45a66daf-63a7-4e3a-bf36-ea5d7b398467",
  catImg4: "https://www.figma.com/api/mcp/asset/a259d4d0-6a7f-4105-8227-39389b6caa48",
  newspaper: "https://www.figma.com/api/mcp/asset/3eff5974-5a96-483c-b1b8-da816477d7f8",
  newsImg1: "https://www.figma.com/api/mcp/asset/31641ae8-cc62-4d26-b429-d3ec2f4f9d43",
  newsImg2: "https://www.figma.com/api/mcp/asset/c45d3b04-0d1e-4b84-86b6-413c9e93c408",
  emailIcon: "https://www.figma.com/api/mcp/asset/6f0ee8b0-47bb-4b5b-859d-e5a4a2abc5c1",
  inboxIcon: "https://www.figma.com/api/mcp/asset/7c850e9e-c0e6-478e-aeb9-186fa6ccdfcd",
  rocketIcon: "https://www.figma.com/api/mcp/asset/0d4134bc-45d7-40e1-9ce5-a800b4bb13e3",
  callIcon: "https://www.figma.com/api/mcp/asset/8a185d4a-4d79-443f-afc7-6da30e52527a",
  socialFb: "https://www.figma.com/api/mcp/asset/81d98ddc-862f-42c3-b408-d4ec28e9260d",
  socialTw: "https://www.figma.com/api/mcp/asset/b6c788c3-4c2a-4455-afd3-2eec0189742f",
  socialIn: "https://www.figma.com/api/mcp/asset/41c4320c-fa5b-4c27-a2d3-1fbbc05ab65e",
  socialIg: "https://www.figma.com/api/mcp/asset/0db88863-6e74-4fb4-8c23-44d3a5b703be",
  line: "https://www.figma.com/api/mcp/asset/a52f351f-f753-4c4f-9f2a-c4a2393ffa95",
};

const nftCards = [
  { name: "Cyber Samurai #575", price: "8.5", image: assets.nft1, shortImg: true },
  { name: "Cyber Samurai #784", price: "7.5", image: assets.nft2, shortImg: false },
  { name: "Cyber Samurai #475", price: "15.5", image: assets.nft3, shortImg: false },
  { name: "Cyber Samurai #784", price: "7.5", image: assets.nft4, shortImg: false },
  { name: "Cyber Samurai #784", price: "7.5", image: assets.nft5, shortImg: false },
  { name: "Cyber Samurai #475", price: "15.5", image: assets.nft6, shortImg: false },
];

const steps = [
  {
    icon: assets.coinWallet,
    bg: assets.subtract1,
    title: "Set Up Your Wallet",
    desc: "Connect your wallet to Nico by clicking the wallet icon in the top right corner after you've set it up.",
  },
  {
    icon: assets.addNew,
    bg: assets.subtract2,
    title: "Create Unique Collection",
    desc: "Set a secondary sales fee and add social links, a description, profile and banner images, and a description.",
  },
  {
    icon: assets.nftIcon,
    bg: assets.subtract3,
    title: "Download NFTs",
    desc: "Add a title and description to your work (picture, video, audio, or 3D art), then customize your NFTs with properties.",
  },
  {
    icon: assets.sell,
    bg: assets.subtract2,
    title: "Put Them Up for Sale",
    desc: "Auctions, fixed-price listings, and declining-price listings are all options. You decide how you'd like to sell your NFTs.",
  },
];

const stats = [
  { label: "World Arts", value: "30.000 +" },
  { label: "Digital Artists", value: "17.000 +" },
  { label: "Live Auctions", value: "22.000 +" },
  { label: "Unique Products", value: "50.000 +" },
];

const navLinks = ["Home", "All NFTs", "Team", "Terms & Co.", "Contact"];
const filterTabs = ["All", "Hape prime", "Lazy Lions", "Peaceful ape"];

export default function ModernNft() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <Head>
        <title>KNFT - Modern NFT Marketplace</title>
        <meta name="description" content="Buy, Create & Sell Unique NFTs" />
      </Head>

      <div className="min-h-screen overflow-hidden relative" style={{ background: "#04011c" }}>
        {/* Background Decorative Ellipses */}
        <div className="absolute pointer-events-none" style={{ left: -679, top: -98, width: 3513, height: 3513 }}>
          <img src={assets.ellipse19} alt="" className="w-full h-full object-contain opacity-30" />
        </div>
        <div className="absolute pointer-events-none" style={{ left: -96, top: -178, width: 1279, height: 1279 }}>
          <img src={assets.ellipse18} alt="" className="w-full h-full object-contain opacity-15" />
        </div>
        <div className="absolute pointer-events-none" style={{ left: -1317, top: -1367, width: 3513, height: 3513 }}>
          <img src={assets.ellipse20} alt="" className="w-full h-full object-contain opacity-20" />
        </div>

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between max-w-[1280px] mx-auto px-5 pt-9">
          <span
            className="font-bold text-[28px] bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(121deg, #df1cff 26%, #ea0070 138%)" }}
          >
            KNFT.
          </span>
          <div className="hidden md:flex gap-[45px] text-[18px]">
            {navLinks.map((link, i) => (
              <span
                key={link}
                className={i === 0 ? "text-white cursor-pointer" : "text-white/40 hover:text-white/70 cursor-pointer transition-colors"}
              >
                {link}
              </span>
            ))}
          </div>
          <button className="rounded-lg px-8 py-3 text-white font-bold text-[16px] border-[1.5px] border-[#e50aa7] bg-white/5 hover:bg-white/10 transition-colors"
            style={{ boxShadow: "0px 16px 80px 0px rgba(208,17,204,0.15)" }}
          >
            Get in Touch
          </button>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 max-w-[1280px] mx-auto px-5 mt-16 flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1 max-w-[632px]">
            <h1 className="text-white text-[48px] lg:text-[56px] font-black leading-[1.3]">
              Buy, Create &<br />
              Sell <span className="text-[#1ee0e1] italic font-light">Unique NFTs</span> File.
            </h1>
            <p className="text-white/80 text-[18px] lg:text-[20px] mt-8 max-w-[495px] leading-[1.5]">
              NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.
            </p>
            <button
              className="mt-10 rounded-lg px-10 py-3 text-white font-bold text-[18px] lg:text-[20px] cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                backgroundImage: "linear-gradient(134deg, #df1cff 26%, #ea0070 138%)",
                boxShadow: "0px 9px 100px 0px rgba(208,17,204,0.35)",
              }}
            >
              Explore NFTs
            </button>
          </div>
          {/* Hero Image */}
          <div className="relative flex-shrink-0 hidden lg:block" style={{ width: 550, height: 550 }}>
            <img src={assets.heroShape} alt="" className="absolute inset-0 w-full h-full object-contain" style={{ transform: "rotate(45deg) scale(1.2)" }} />
            <div className="absolute rounded-[350px] overflow-hidden" style={{ left: 80, top: 80, width: 400, height: 400 }}>
              <img src={assets.heroImage} alt="NFT Hero" className="w-full h-full object-cover" />
            </div>
            {/* Floating label */}
            <div
              className="absolute rounded-full border border-[#df1cff] flex items-center justify-center text-center text-white font-bold text-[20px]"
              style={{ background: "#07003e", width: 150, height: 150, right: 10, top: 260 }}
            >
              Cyber<br />Samurai<br />#177
            </div>
            {/* Small floating NFT */}
            <div className="absolute" style={{ right: -20, top: 200, width: 84, height: 84 }}>
              <img src={assets.floatingNft} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 max-w-[1280px] mx-auto px-5 mt-20">
          <div className="flex items-center gap-4 mb-8">
            <img src={assets.eye} alt="" className="w-12 h-12 object-contain" />
            <span className="text-white font-bold text-[28px] lg:text-[32px]">Nico NFT Marketplace Overview</span>
          </div>
          <div className="flex flex-wrap gap-16">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-4">
                <span className="text-white/80 text-[18px] lg:text-[20px]">{s.label}</span>
                <span className="text-white font-bold text-[28px] lg:text-[32px]">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Most Popular NFTs */}
        <section className="relative z-10 max-w-[1280px] mx-auto px-5 mt-32">
          <h2 className="text-center text-[36px] lg:text-[40px] font-black text-white leading-[1.3]">
            <span className="text-[#1ee0e1] italic font-light">Most Popular </span>NFTs
          </h2>
          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-12 lg:gap-20 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[18px] lg:text-[22px] font-medium pb-2 transition-all cursor-pointer ${
                  activeTab === tab
                    ? "text-white relative"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {activeTab === tab && (
                  <span className="absolute inset-0 -z-10 rounded-full" style={{ background: "url(" + assets.tabBg + ") center/contain no-repeat" }} />
                )}
                {tab}
              </button>
            ))}
          </div>

          {/* NFT Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {nftCards.map((card, i) => (
              <div key={i} className="bg-white/[0.03] rounded-2xl p-8 relative group">
                {/* Heart icon */}
                <div className="absolute right-12 top-12 z-10 bg-white/[0.09] rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <img src={assets.heart} alt="Favorite" className="w-6 h-6 object-contain" />
                </div>
                {/* NFT Image */}
                <div
                  className="rounded-lg overflow-hidden mb-8"
                  style={{
                    height: card.shortImg ? 339 : 425,
                    boxShadow: i === 0 ? "0px 9px 100px 0px rgba(204,17,208,0.15)" : "none",
                  }}
                >
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                </div>
                {/* Card Info */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-[20px] lg:text-[22px]">{card.name}</span>
                  <div className="flex items-end gap-[7px]">
                    <img src={assets.ethereum} alt="ETH" className="w-8 h-8 object-contain" />
                    <span className="text-white font-semibold text-[20px] lg:text-[22px]">{card.price}</span>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex gap-2">
                  {[...Array(5)].map((_, j) => (
                    <img key={j} src={assets.star} alt="star" className="w-[18px] h-[18px] object-contain" />
                  ))}
                </div>
                {/* Buy button (only first card) */}
                {i === 0 && (
                  <button
                    className="w-full mt-8 rounded-lg py-3 text-white font-bold text-[18px] lg:text-[20px] cursor-pointer hover:opacity-90 transition-opacity"
                    style={{
                      backgroundImage: "linear-gradient(147deg, #df1cff 26%, #ea0070 138%)",
                      boxShadow: "0px 9px 100px 0px rgba(208,17,204,0.35)",
                    }}
                  >
                    Buy Product
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Explore All NFTs Button */}
          <div className="flex justify-center mt-12">
            <button
              className="rounded-lg px-10 py-3 text-white font-bold text-[18px] lg:text-[20px] border-[1.5px] border-[#e50aa7] bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              style={{ boxShadow: "0px 16px 80px 0px rgba(208,17,204,0.15)" }}
            >
              Explore All NFTs
            </button>
          </div>
        </section>

        {/* How to Create & Sell Section */}
        <section className="relative z-10 max-w-[1280px] mx-auto px-5 mt-32">
          <div className="text-center">
            <span
              className="inline-block rounded-full px-4 py-2 text-white/80 font-bold text-[18px] lg:text-[20px] mb-6"
              style={{ background: "linear-gradient(to right, rgba(24,254,255,0) 85%, white 107%)", border: "1px solid rgba(30,224,225,0.3)" }}
            >
              UNIQUE FILES
            </span>
            <h2 className="text-[36px] lg:text-[40px] font-black text-white leading-[1.3]">
              How to <span className="text-[#1ee0e1] italic font-light">Create &amp; Sell</span> Your NFT Files.
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {steps.map((step, i) => (
              <div key={i} className="relative" style={{ height: 237 }}>
                {/* Icon */}
                <div className="absolute right-[90px] top-0 z-10">
                  <img src={step.icon} alt="" className="w-[72px] h-[72px] object-contain" />
                </div>
                {/* Background shape */}
                <div className="absolute left-0 top-[21px] w-full" style={{ height: 215 }}>
                  <img src={step.bg} alt="" className="w-full h-full" />
                </div>
                {/* Content */}
                <div className="absolute left-14 top-[76px] flex flex-col gap-6 pr-20">
                  <span className="text-white font-semibold text-[20px] lg:text-[22px]">{step.title}</span>
                  <p className="text-white/80 text-[18px] lg:text-[20px] leading-[1.5]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Category */}
        <section className="relative z-10 max-w-[1280px] mx-auto px-5 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-[36px] lg:text-[40px] font-black text-white leading-[1.3]">
              <span className="text-[#1ee0e1] italic font-light">Browse by</span> Category
            </h2>
            <p className="text-white/80 text-[18px] lg:text-[20px] mt-6 max-w-[530px] mx-auto leading-[1.5]">
              Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <div className="w-[32.5%] h-[400px] rounded-2xl overflow-hidden flex-shrink-0">
                <img src={assets.catImg1} alt="Category 1" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 h-[400px] rounded-2xl overflow-hidden">
                <img src={assets.catImg2} alt="Category 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-1 h-[400px] rounded-2xl overflow-hidden">
                <img src={assets.catImg3} alt="Category 3" className="w-full h-full object-cover" />
              </div>
              <div className="w-[32.5%] h-[400px] rounded-2xl overflow-hidden relative flex-shrink-0">
                <img src={assets.catImg4} alt="Category 4" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 mix-blend-multiply rounded-2xl"
                  style={{ backgroundImage: "linear-gradient(139deg, #477bff 11%, rgba(166,2,119,0.78) 108%)" }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              className="rounded-lg px-10 py-3 text-white font-bold text-[18px] lg:text-[20px] border-[1.5px] border-[#e50aa7] bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              style={{ boxShadow: "0px 16px 80px 0px rgba(208,17,204,0.15)" }}
            >
              Explore NFTs Category
            </button>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="relative z-10 max-w-[1280px] mx-auto px-5 mt-32">
          <div className="flex items-center justify-center gap-20 flex-wrap">
            <img src={assets.logo1} alt="Partner" className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={assets.logo2} alt="Partner" className="h-11 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={assets.logo3} alt="Partner" className="h-16 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={assets.logo4} alt="Partner" className="h-16 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={assets.logo5} alt="Partner" className="h-16 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            <img src={assets.logo6} alt="Partner" className="h-11 object-contain opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </section>

        {/* Trending Crypto Market News */}
        <section className="relative z-10 max-w-[1280px] mx-auto px-5 mt-32">
          <div className="flex flex-col lg:flex-row gap-[72px] items-start">
            {/* Left side */}
            <div className="flex flex-col gap-16 w-full lg:w-[438px] flex-shrink-0">
              <div className="flex flex-col gap-8">
                <img src={assets.newspaper} alt="" className="w-[79px] h-[64px] object-contain" />
                <div>
                  <h2 className="text-[36px] lg:text-[40px] font-black text-white leading-[1.3]">
                    <span className="text-[#1ee0e1] italic font-light">Trending</span> Crypto Market News
                  </h2>
                  <p className="text-white/80 text-[18px] lg:text-[20px] mt-6 leading-[1.5]">
                    Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
                  </p>
                </div>
              </div>
              <button
                className="rounded-lg px-10 py-3 text-white font-bold text-[18px] lg:text-[20px] w-fit cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  backgroundImage: "linear-gradient(134deg, #df1cff 26%, #ea0070 138%)",
                  boxShadow: "0px 9px 100px 0px rgba(208,17,204,0.35)",
                }}
              >
                Explore NFTs
              </button>
            </div>

            {/* News Cards */}
            <div className="flex gap-8 flex-1">
              {[assets.newsImg1, assets.newsImg2].map((img, i) => (
                <div key={i} className="flex flex-col gap-6 flex-1">
                  <div className="h-[285px] rounded-3xl overflow-hidden bg-white">
                    <img src={img} alt="News" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white/80 text-[18px] lg:text-[20px]">April 18, 2022</p>
                    <h3 className="text-white font-semibold text-[24px] lg:text-[28px] mt-4 leading-[1.4]">
                      Few Reasons to Sell NFTs on Nico
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="relative z-10 max-w-[716px] mx-auto px-5 mt-32 text-center">
          <h2 className="text-white font-extrabold text-[56px] lg:text-[72px] leading-[1.3] relative">
            <span className="absolute left-[3px] top-[4px] text-transparent" style={{ textShadow: "4px 4px 16px #1ee0e1" }}>
              Get in Touch
            </span>
            Get in Touch
          </h2>
          <p className="text-white/80 text-[18px] lg:text-[20px] mt-6 max-w-[612px] mx-auto leading-[1.5]">
            Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
          </p>
          {/* Email Input */}
          <div className="flex items-center justify-between p-6 rounded-2xl mt-12" style={{ background: "#0d0d2d" }}>
            <span className="text-white/50 text-[20px] lg:text-[22px]">Enter your email address</span>
            <img src={assets.emailIcon} alt="email" className="w-7 h-7" />
          </div>
          <button
            className="mt-12 rounded-lg px-10 py-3 text-white font-bold text-[18px] lg:text-[20px] cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: "linear-gradient(130deg, #df1cff 26%, #ea0070 138%)",
              boxShadow: "0px 9px 100px 0px rgba(208,17,204,0.35)",
            }}
          >
            Contact Us
          </button>
        </section>

        {/* Footer */}
        <footer className="relative z-10 max-w-[1280px] mx-auto px-5 mt-32 pb-10">
          {/* Contact Info */}
          <div className="flex flex-wrap items-start justify-center gap-20 lg:gap-40">
            {[
              { icon: assets.inboxIcon, lines: ["example@gmail.com", "sample@yahoo.com"] },
              { icon: assets.rocketIcon, lines: ["We are on Telegram", "@NicoCryptoChannel"] },
              { icon: assets.callIcon, lines: ["+1 800 123 456 789", "+1 800 123 456 780"] },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-8">
                <div className="rounded-full p-4" style={{ background: "#1a124f" }}>
                  <div className="rounded-full p-1 flex items-center justify-center" style={{ background: "#100943", width: 47, height: 47 }}>
                    <img src={item.icon} alt="" className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 text-white text-[18px] lg:text-[20px] text-center">
                  <span>{item.lines[0]}</span>
                  <span>{item.lines[1]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <img src={assets.socialFb} alt="Facebook" className="w-12 h-12 cursor-pointer hover:opacity-80 transition-opacity" />
            <img src={assets.socialTw} alt="Twitter" className="w-12 h-12 cursor-pointer hover:opacity-80 transition-opacity" />
            <img src={assets.socialIn} alt="LinkedIn" className="w-12 h-12 cursor-pointer hover:opacity-80 transition-opacity" />
            <img src={assets.socialIg} alt="Instagram" className="w-12 h-12 cursor-pointer hover:opacity-80 transition-opacity" />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 mt-16" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-6">
            <p className="text-white/80 text-[18px] lg:text-[20px] text-center">
              Copyright &copy; 2022 Nazmul Shanto. All Rights Reserved
            </p>
            <div className="flex gap-[45px] text-[18px] lg:text-[20px]">
              {navLinks.map((link, i) => (
                <span
                  key={link}
                  className={i === 0 ? "text-white cursor-pointer" : "text-white/40 hover:text-white/70 cursor-pointer transition-colors"}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
