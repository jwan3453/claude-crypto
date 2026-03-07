import { useState } from "react";
import Head from "next/head";

const faqs = [
  {
    q: "What is Stablecoin Earn Plus?",
    a: "Stablecoin Earn Plus is a product introduced by Bitget Wallet that lets you earn interest on stablecoins like USDC. Your funds are automatically deployed to DeFi protocols to generate a base yield, with bonus interest offered by the platform.",
  },
  {
    q: "How do I subscribe to Stablecoin Earn Plus?",
    a: "In the Bitget Wallet app, go to the Earn section and select Stablecoin Earn Plus. After completing the subscription, your investment will appear on the My Investments page. You can also check your subscription and redemption records in the Earn transaction history.",
  },
  {
    q: "How do I check my Stablecoin Earn Plus holdings?",
    a: "On the My Investments page, your Stablecoin Earn Plus assets are displayed at the top by default, including the amount invested, current yield, and yesterday's profits. Tap to view full details of your holdings.",
  },
  {
    q: "How is interest calculated and distributed?",
    a: "Protocol earnings are accrued in real time and tallied daily. Bonus interest is distributed when you redeem. If you subscribe to Aave V3 on the Base chain through other channels, you will only receive protocol earnings – no bonus interest applies.",
  },
  {
    q: "Can I redeem at any time?",
    a: "Yes. You can redeem both your funds and bonus interest at any time. Once you submit a redemption request, your principal, protocol earnings, and bonus interest will all be returned, with bonus interest distributed via airdrop. The actual arrival time depends on blockchain confirmation, usually instant or within a few minutes.",
  },
  {
    q: "Where can I find transaction records?",
    a: "Both subscription and redemption records can be found in your wallet and Earn transaction history. Since bonus interest is distributed via airdrop, you'll see two records for each redemption: one for the principal plus protocol earnings, and another for the airdropped bonus interest.",
  },
  {
    q: "Are there any fees?",
    a: "Your first subscription is gas-free. After that, standard blockchain gas fees apply according to the protocol. Bitget Wallet does not charge any additional management or service fees.",
  },
  {
    q: "What are the risks?",
    a: "Your funds are invested in audited, decentralized DeFi protocols, with all on-chain transactions fully transparent and verifiable. While protocol contracts offer safeguards, risks still exist – such as smart contract bugs, on-chain asset volatility, or hacking attacks. Please assess your own risk tolerance carefully and invest cautiously.",
  },
];

const testimonials = [
  {
    name: "Michale",
    location: "Europe",
    role: "Freelancer",
    text: "My income isn't always stable, but Stablecoin Earn Plus lets me earn passively anytime! Start earning 10% APY the moment you deposit. Best of all, redemptions are instant and withdrawals are as fast as PayPal.",
  },
  {
    name: "Nancy",
    location: "Japan",
    role: "Housewife",
    text: "I can save by putting my leftover yen from grocery shopping into USDC, and redeem instantly with no hassle. My husband used to always worry, but even he said: これで安心 (peace of mind).",
  },
  {
    name: "Jason",
    location: "China",
    role: "Programmer",
    text: "Stablecoin Earn Plus offers 10% APY with no subscription requirements. I redeemed last week and got my funds instantly, with no next-day waiting. This is true effortless investing for the digital age!",
  },
  {
    name: "Nick",
    location: "",
    role: "Experienced DeFi user",
    text: "Earning yields through the Aave protocol from my non-custodial wallet gives me peace of mind. I can deposit or redeem in seconds, so my idle funds are always ready to ride the next bull run!",
  },
  {
    name: "Kevin",
    location: "",
    role: "Finance professional",
    text: "Just like Yu'e Bao in China, this new generation of financial product combines flexibility and high returns – powered by blockchain technology.",
  },
  {
    name: "Sophia",
    location: "",
    role: "College student",
    text: "Deposit your living expenses here and watch your money grow – it's super convenient for daily spending and even when traveling abroad. Young people deserve financial products made for them!",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex justify-between items-center py-5 text-left text-white font-medium text-base hover:text-blue-400 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <span className="ml-4 text-xl text-blue-400 flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function StablecoinEarnPage() {
  return (
    <>
      <Head>
        <title>Stablecoin Earn Plus: 10% APY, Low Risk | Bitget Wallet</title>
        <meta name="description" content="Earn 10% APY on USDC with Stablecoin Earn Plus. Instant deposits and withdrawals, backed by $700M protection fund." />
      </Head>
      <main className="min-h-screen bg-[#050508] text-white font-sans">

        {/* Protection Fund Badge */}
        <div className="flex justify-center pt-10">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
            <span className="text-green-400">🛡</span>
            <span>$700M Protection Fund</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-400">Transparent fund flows</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            U.S. Treasury-grade{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              stability
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-4 max-w-xl mx-auto">
            USDC is pegged 1:1 to the U.S. dollar, offering stable and transparent returns.
          </p>
          <button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-10 py-3 rounded-full text-base transition-all duration-200 shadow-lg shadow-blue-500/25">
            Invest now
          </button>
        </section>

        {/* APY Comparison */}
        <section className="px-6 py-16 bg-[#0a0b0f]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10 w-full md:w-64">
                <div className="text-gray-400 text-sm mb-2">Bank deposit</div>
                <div className="text-4xl font-bold text-gray-400">0.95%</div>
              </div>
              <div className="text-4xl text-blue-400 font-bold">→</div>
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30 w-full md:w-64">
                <div className="text-blue-300 text-sm mb-2">Stablecoin Earn</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10.00%</div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">10x higher annual yield</h2>
              <p className="text-gray-400">Daily compounding with continuous interest accrual.</p>
            </div>
          </div>
        </section>

        {/* Withdraw anytime */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Withdraw anytime, instantly</h2>
            <p className="text-gray-400 mb-8">Interest accrues 24/7. Enjoy instant deposits and withdrawals.</p>
            <div className="bg-[#0d0e14] rounded-3xl p-8 border border-white/5 inline-block">
              <div className="text-5xl font-mono font-bold text-white tabular-nums">
                $10,005.0<span className="text-blue-400">248</span>
              </div>
              <p className="text-gray-500 mt-2 text-sm">Live balance growing in real time</p>
            </div>
            <div className="mt-6">
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium underline underline-offset-4">
                More details →
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-16 bg-[#0a0b0f]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted by millions of users</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-[#13141a] rounded-2xl p-6 border border-white/5 flex flex-col gap-4"
                >
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">
                      {t.location ? `${t.location} | ` : ""}{t.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Stablecoin Earn Plus FAQ</h2>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="px-6 py-20 text-center bg-[#0a0b0f]">
          <h2 className="text-3xl font-bold mb-4">Start earning 10% APY today</h2>
          <p className="text-gray-400 mb-8">Join millions of users growing their crypto with Stablecoin Earn Plus.</p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-10 py-3 rounded-full text-base transition-all duration-200 shadow-lg shadow-blue-500/25">
            Get Started
          </button>
        </section>
      </main>
    </>
  );
}
