import Head from "next/head";

const steps = [
  {
    num: "01",
    title: "邀请好友下载 App",
    desc: "邀请好友下载 Bitget Wallet App 并创建或导入钱包",
  },
  {
    num: "02",
    title: "好友绑定邀请码",
    desc: "好友点击邀请链接确认，或在 App 内手动输入邀请码进行绑定",
  },
  {
    num: "03",
    title: "获得返佣奖励",
    desc: "好友开卡激活并完成首笔消费后，你立即获得 2-5 USDC 返佣",
  },
];

const rebateRules = [
  {
    title: "1. 如何建立邀请关系",
    items: [
      "邀请好友通过专属链接注册并开卡，或手动绑定邀请码",
      "邀请关系一旦绑定，将无法更改",
      "已注册用户无法再绑定邀请关系",
    ],
  },
  {
    title: "2. 赚取返佣",
    items: [
      "开卡返佣：好友开卡成功并完成首笔消费，你将获得好友开卡费的 20%-40% 作为返佣奖励",
      "消费返佣：好友后续消费将持续给你返佣",
      "二级邀请奖励：获得好友返佣金额的 10%（不影响好友收益）",
    ],
  },
  {
    title: "3. 提升返佣等级",
    items: [
      "邀请越多，返佣比例越高，当前等级可在「邀请中心」查看",
      "返佣等级越高，佣金比例也会更高",
      "可随时在「邀请」页面查看当前等级与进度",
    ],
  },
  {
    title: "4. 返佣发放",
    items: [
      "返佣奖励会在次日（T+1）发放至【奖励账户】",
      "可在「奖励账户」随时查看并提取返佣奖励",
    ],
  },
];

const levelData = [
  { level: "LV1", openCard: "20%", consume: "基础" },
  { level: "LV2", openCard: "25%", consume: "+5%" },
  { level: "LV3", openCard: "30%", consume: "+10%" },
  { level: "LV4", openCard: "35%", consume: "+15%" },
  { level: "LV5", openCard: "40%", consume: "+20%" },
];

export default function NewReferralPage() {
  return (
    <>
      <Head>
        <title>邀请好友开卡立享返佣 | Bitget Wallet</title>
        <meta name="description" content="邀请好友开卡立享返佣，邀请越多，返佣等级越高。每成功邀请一人开卡，获得 2-5 USDC 奖励。" />
      </Head>
      <main className="min-h-screen bg-[#050508] text-white font-sans">

        {/* Hero */}
        <section className="relative px-6 pt-16 pb-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1060]/50 via-[#0a0b2e]/30 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-6">
              <span>🎁</span>
              <span>开卡返佣 <strong>2–5 USDC</strong> /人</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              邀请好友开卡<br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                立享返佣
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              邀请越多，返佣等级越高
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-semibold px-10 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg shadow-blue-500/30">
              立刻开通
            </button>
            <p className="mt-4 text-gray-600 text-xs">请在移动端扫码并打开页面</p>
          </div>
        </section>

        {/* 返佣亮点 */}
        <section className="px-6 py-12 bg-[#0a0b0f]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
            <div className="bg-[#13141a] rounded-2xl p-6 border border-white/5 text-center">
              <div className="text-3xl mb-3">💳</div>
              <div className="text-blue-400 text-sm font-semibold mb-1">开卡返佣</div>
              <div className="text-2xl font-bold text-white mb-2">2–5 USDC</div>
              <div className="text-gray-500 text-sm">每成功邀请一人开卡激活<br />并完成首笔消费</div>
            </div>
            <div className="bg-[#13141a] rounded-2xl p-6 border border-white/5 text-center">
              <div className="text-3xl mb-3">🔄</div>
              <div className="text-violet-400 text-sm font-semibold mb-1">消费返佣</div>
              <div className="text-2xl font-bold text-white mb-2">持续获得</div>
              <div className="text-gray-500 text-sm">好友每次消费<br />你都能获得返佣</div>
            </div>
            <div className="bg-[#13141a] rounded-2xl p-6 border border-white/5 text-center">
              <div className="text-3xl mb-3">📈</div>
              <div className="text-cyan-400 text-sm font-semibold mb-1">二级邀请</div>
              <div className="text-2xl font-bold text-white mb-2">额外 10%</div>
              <div className="text-gray-500 text-sm">好友邀请他人成功<br />你额外获得 10% 奖励</div>
            </div>
          </div>
        </section>

        {/* 邀请流程 */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">邀请流程</h2>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 bg-[#0d0e14] rounded-2xl p-6 border border-white/5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{step.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 返佣等级表 */}
        <section className="px-6 py-12 bg-[#0a0b0f]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">返佣等级</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-500 text-sm border-b border-white/10">
                    <th className="text-left py-3 pr-4">等级</th>
                    <th className="text-center py-3 px-4">开卡返佣比例</th>
                    <th className="text-center py-3 pl-4">消费返佣加成</th>
                  </tr>
                </thead>
                <tbody>
                  {levelData.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-4 pr-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          i === 4 ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white" :
                          "bg-white/5 text-gray-300"
                        }`}>
                          {row.level}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center text-white font-semibold">{row.openCard}</td>
                      <td className="py-4 pl-4 text-center text-blue-400 font-semibold">{row.consume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-xs text-center mt-4">邀请人数越多，等级越高，返佣比例越大</p>
          </div>
        </section>

        {/* 详细规则 */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">返佣详细规则</h2>
            <div className="space-y-6">
              {rebateRules.map((rule, i) => (
                <div key={i} className="bg-[#0d0e14] rounded-2xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-4">{rule.title}</h3>
                  <ul className="space-y-2">
                    {rule.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="text-blue-400 flex-shrink-0 mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 底部 CTA */}
        <section className="px-6 py-20 text-center bg-[#0a0b0f]">
          <h2 className="text-2xl font-bold mb-3">立即开始邀请</h2>
          <p className="text-gray-400 mb-8 text-sm">开通 Bitget Wallet Card，解锁专属邀请链接，开始赚取返佣</p>
          <button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-semibold px-12 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg shadow-blue-500/30">
            立刻开通
          </button>
          <p className="mt-4 text-gray-600 text-xs">请在移动端扫码并打开页面</p>
        </section>
      </main>
    </>
  );
}
