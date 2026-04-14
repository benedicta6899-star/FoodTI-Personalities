import type { DecisionOption, UserProfile } from '../types';

type DecisionCardProps = {
  profile: UserProfile;
  decision: DecisionOption;
  onConfirm: () => void;
  onRefresh: () => void;
};

export const DecisionCard = ({ profile, decision, onConfirm, onRefresh }: DecisionCardProps) => {
  return (
    <section className="rounded-[32px] border border-[#ffd5c3] bg-[linear-gradient(135deg,#fff8f2_0%,#ffe9d9_100%)] p-6 shadow-[0_30px_100px_rgba(226,90,44,0.15)] md:p-8">
      <div className="text-center">
        <div className="text-sm font-semibold uppercase tracking-[0.32em] text-[#c06a41]">
          根据你的测试结果，我们替你做了决定
        </div>
        <p className="mt-8 text-lg font-medium text-[#8f5639]">你今天最适合吃：</p>
        <h2 className="mx-auto mt-4 max-w-3xl rounded-[28px] bg-white px-6 py-6 text-3xl font-black text-[#24120d] shadow-[0_18px_40px_rgba(31,28,27,0.08)] md:text-4xl">
          {decision.name}
        </h2>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/70 bg-white/75 p-6">
          <div className="text-lg font-bold text-[#2a1710]">推荐理由</div>
          <p className="mt-3 text-sm leading-7 text-[#5d392c]">{decision.reason}</p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-[#5d392c]">
            {decision.highlights.map((item) => (
              <div key={item}>✔ {item}</div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] bg-[#1f1c1b] p-6 text-white">
          <div className="text-sm uppercase tracking-[0.24em] text-[#ffb88a]">人格匹配</div>
          <div className="mt-4 text-2xl font-bold">
            {profile.mainPersonality.name} · {profile.region.name}
          </div>
          <div className="mt-4 text-sm leading-7 text-white/80">
            你的关键词：{profile.status} / {profile.tasteSummary.join(' / ')}
          </div>
          <div className="mt-4 text-lg font-semibold text-[#ffd39d]">别纠结了，今天就吃这个。</div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={onConfirm}
          className="rounded-full bg-[#1f1c1b] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e25a2c]"
        >
          就吃这个
        </button>
        <button
          onClick={onRefresh}
          className="rounded-full border border-[#e6bfa8] bg-white/80 px-7 py-3 font-medium text-[#7d503b] transition hover:bg-white"
        >
          我不服，再给我一个
        </button>
      </div>
    </section>
  );
};
