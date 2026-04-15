import { useState } from 'react';
import type { DecisionOption, MealPlanItem, Recipe, RecipeCategory, SwapBucket, UserProfile } from '../types';

type MealPlanPageProps = {
  profile: UserProfile;
  decision: DecisionOption;
  mealPlan: MealPlanItem[];
  onReplace: (category: RecipeCategory, recipe: Recipe) => void;
  onRegenerate: () => void;
  onRestoreInitial: () => void;
  onIndulgent: () => void;
  onBack: () => void;
};

const mealTitles: Record<RecipeCategory, string> = {
  breakfast: '早餐',
  lunch: '午餐',
  dinner: '晚餐',
  snack: '加餐（可选）',
};

const swapTitles: Record<SwapBucket, string> = {
  similar: '同类替代',
  healthier: '更健康',
  indulgent: '更有满足感',
};

export const MealPlanPage = ({
  profile,
  decision,
  mealPlan,
  onReplace,
  onRegenerate,
  onRestoreInitial,
  onIndulgent,
  onBack,
}: MealPlanPageProps) => {
  const [openCategory, setOpenCategory] = useState<RecipeCategory | null>('breakfast');

  const totalKcal = mealPlan.reduce((sum, item) => sum + item.current.kcal, 0);

  return (
    <section className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_30px_90px_rgba(217,79,32,0.12)] backdrop-blur md:p-8">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f2d7c7] pb-5">
        <button onClick={onBack} className="text-sm font-medium text-[#8f5b44] transition hover:text-[#d5542c]">
          ← 返回结果页
        </button>
        <div className="text-2xl font-black text-[#24120d]">今日食谱</div>
      </header>

      <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,#fff8f2_0%,#ffe9d9_100%)] p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="text-sm font-medium text-[#8f5b44]">你的状态</div>
            <div className="mt-2 text-lg font-bold text-[#2a1710]">{profile.status}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#8f5b44]">你的口味</div>
            <div className="mt-2 text-lg font-bold text-[#2a1710]">{profile.tasteSummary.join(' / ')}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#8f5b44]">你的结论</div>
            <div className="mt-2 text-lg font-bold text-[#2a1710]">{decision.name}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {mealPlan.map((item) => (
          <article key={item.category} className="rounded-[28px] border border-[#f0d6c6] bg-[#fff8f3] p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-black text-[#24120d]">
                  {mealTitles[item.category]} <span className="text-base font-medium text-[#8f5b44]">（约 {item.current.kcal} kcal）</span>
                </div>
                <div className="mt-4 text-lg font-bold text-[#2b1811]">推荐：{item.current.name}</div>
                <div className="mt-3 text-sm leading-7 text-[#5f3e31]">原因：{item.current.reason}</div>
                <div className="mt-2 text-sm leading-7 text-[#8a5a43]">品牌参考：{item.current.source}</div>
              </div>
              {item.category !== 'snack' && (
                <button
                  onClick={() => setOpenCategory(openCategory === item.category ? null : item.category)}
                  className="rounded-full border border-[#efcdbb] bg-white px-5 py-2 text-sm font-medium text-[#7d503b] transition hover:bg-[#fff1e8]"
                >
                  换一换 {openCategory === item.category ? '▲' : '▼'}
                </button>
              )}
            </div>

            {item.category !== 'snack' && openCategory === item.category && (
              <div className="mt-5 rounded-[24px] border border-[#efcfbc] bg-white p-5">
                {(['similar', 'healthier', 'indulgent'] as SwapBucket[]).map((bucket) => (
                  <div key={bucket} className="mb-4 last:mb-0">
                    <div className="text-sm font-semibold text-[#9a5a39]">{swapTitles[bucket]}</div>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {item.swaps[bucket].map((recipe) => (
                        <button
                          key={recipe.id}
                          onClick={() => onReplace(item.category, recipe)}
                          className="rounded-2xl border border-[#f2d8ca] bg-[#fff8f3] px-4 py-3 text-left text-sm leading-6 text-[#5f3d30] transition hover:-translate-y-0.5 hover:border-[#ffbf97]"
                        >
                          {recipe.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-[28px] bg-[#1f1c1b] p-6 text-white">
        <div className="text-lg font-bold">今日总热量：约 {totalKcal - 80} - {totalKcal + 40} kcal</div>
        <div className="mt-5 flex flex-wrap gap-4">
          <button
            onClick={onRestoreInitial}
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f1c1b] transition hover:-translate-y-0.5"
          >
            恢复初始菜单
          </button>
          <button
            onClick={onRegenerate}
            className="rounded-full border border-white/25 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            重新生成
          </button>
          <button
            onClick={onIndulgent}
            className="rounded-full border border-white/25 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            更放纵一点
          </button>
        </div>
      </div>
    </section>
  );
};
