import { personalityTypes } from '../data/personalities';

type HomePageProps = {
  onStart: () => void;
};

export const HomePage = ({ onStart }: HomePageProps) => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/85 p-6 shadow-[0_30px_100px_rgba(217,79,32,0.12)] backdrop-blur xl:p-10">
      <div className="absolute -left-14 top-10 h-36 w-36 rounded-full bg-[#ffcf8d]/60 blur-3xl" />
      <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#ff8f70]/30 blur-3xl" />
      <header className="relative flex items-center justify-between gap-4 border-b border-[#f2d7c7] pb-5">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b85b38]">FoodTI</div>
          <div className="mt-1 text-sm text-[#8c5e47]">美食人格测试 / 今天吃什么决策器</div>
        </div>
        <div className="rounded-full border border-[#f3c9b1] bg-[#fff6ef] px-4 py-2 text-xs font-medium text-[#9c5a37]">
          轻娱乐人格测试
        </div>
      </header>

      <div className="relative py-14 text-center md:py-18">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ffd3c5] bg-[#fff3eb] px-4 py-2 text-sm text-[#b85b38]">
          🍜 测测你的美食人格，顺手替你决定今天这顿
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-[#2d160f] md:text-6xl">
          想好今天吃什么了吗？
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6d4a3a] md:text-lg">
          3分钟测测你的美食人格 + 结合口味/减脂状态 + 直接帮你选今天这顿吃什么
        </p>
        <div className="mt-10 flex justify-center">
          <button
            onClick={onStart}
            className="group rounded-full bg-[#1f1c1b] px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_rgba(31,28,27,0.24)] transition hover:-translate-y-1 hover:bg-[#e25a2c]"
          >
            开始测试
            <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 border-t border-[#f2d7c7] pt-6 md:grid-cols-[1.25fr_1fr]">
        <div>
          <div className="text-sm font-semibold text-[#9f5b38]">热门人格</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {personalityTypes.slice(0, 5).map((item) => (
              <div
                key={item.key}
                className="rounded-full border border-[#f5d1bc] bg-[#fff8f3] px-4 py-2 text-sm font-medium text-[#633b2a]"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-[#9f5b38]">热门玩法</div>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[#6d4a3a]">
            <p>· 测测你是哪种互联网吃货人格</p>
            <p>· 今天吃什么？你的 FoodTI 已经安排好了</p>
            <p>· 结果文案适合截图，餐单适合直接照着吃</p>
          </div>
        </div>
      </div>
    </section>
  );
};
