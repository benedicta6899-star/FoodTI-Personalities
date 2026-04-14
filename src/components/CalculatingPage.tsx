type CalculatingPageProps = {
  stats: { key: string; label: string; value: number }[];
};

export const CalculatingPage = ({ stats }: CalculatingPageProps) => {
  return (
    <section className="rounded-[32px] border border-white/70 bg-white/90 p-8 text-center shadow-[0_30px_90px_rgba(217,79,32,0.12)] backdrop-blur">
      <div className="text-sm font-semibold uppercase tracking-[0.32em] text-[#c06a41]">提交中 / 计算结果</div>
      <h2 className="mt-6 text-3xl font-black text-[#2d160f] md:text-4xl">正在分析你的口味偏好 / 饮食行为 / 地域倾向</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {stats.map((stat) => (
          <div key={stat.key} className="rounded-[24px] border border-[#f3d4c2] bg-[#fff8f3] p-5 text-left">
            <div className="flex items-center justify-between text-sm font-medium text-[#8f5b44]">
              <span>{stat.label}</span>
              <span>{Math.round(stat.value)}%</span>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#f7dfd0]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ff7a3d] to-[#ffbf63] transition-all duration-700"
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-lg font-semibold text-[#8c4d34]">正在替你决定：今天到底吃什么……</div>
    </section>
  );
};
