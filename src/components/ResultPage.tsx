import { useMemo, useState } from 'react';
import { personalityVisualMap } from '../data/resultPresentation';
import type { DecisionOption, MealPlanItem, Recipe, RecipeCategory, UserProfile } from '../types';

type ResultPageProps = {
  profile: UserProfile;
  decision: DecisionOption;
  decisionAlternatives: string[];
  mealPlan: MealPlanItem[];
  onDecision: () => void;
  onDecisionRefresh: () => void;
  onMealReplace: (category: RecipeCategory, recipe: Recipe) => void;
  onMealRegenerate: () => void;
  onMealIndulgent: () => void;
  onShare: () => void;
  onRestart: () => void;
};

const dimensionMeta: Record<string, { label: string; scoreKey: string }> = {
  HOTP: { label: 'HOTP', scoreKey: 'hotpot' },
  MTEX: { label: 'MTEX', scoreKey: 'milkTea' },
  CARB: { label: 'CARB', scoreKey: 'carb' },
  HLTH: { label: 'HLTH', scoreKey: 'wellness' },
  SPCY: { label: 'SPCY', scoreKey: 'spicy' },
};

const personalityLabelMap = {
  HOTP: '火锅原教旨主义者',
  MTEX: '奶茶鉴定师',
  DTRR: '减脂期叛徒',
  CARB: '碳水教父',
  SPCY: '辣不怕战士',
  HLTH: '养生派修士',
  SWET: '甜食续命师',
  STRT: '街巷寻味者',
  TREN: '网红探店信徒',
  MIDN: '深夜碳水依赖者',
  MOOD: '情绪化干饭人',
  LITE: '清汤秩序维护者',
  DELV: '外卖生存专家',
  HOME: '家常菜灵魂守护者',
  SAUC: '小料调配工程师',
  BUFF: '自助餐战略指挥官',
} as const;

const formatScoreLabel = (code: string) => {
  const zh = personalityLabelMap[code as keyof typeof personalityLabelMap];
  return zh ? { code, zh } : { code, zh: null };
};

const mealTitles: Record<RecipeCategory, string> = {
  breakfast: '早餐',
  lunch: '午餐',
  dinner: '晚餐',
  snack: '加餐',
};

const swapTitles = {
  similar: '同类替代',
  healthier: '更健康',
  indulgent: '更有满足感',
} as const;

const highlightKeywordMap: Record<string, string[]> = {
  HOTP: ['热锅', '蘸料', '热气', '人格秩序', '最热、最香、最能冒气'],
  MTEX: ['饮品', '小料', '糖度', '风味分配权'],
  DTRR: ['无糖', '控卡', '破功', '弹性执行状态'],
  CARB: ['主食', '基础设施', '吃饱'],
  SPCY: ['辣味', '微辣', '更有冲击力'],
  HLTH: ['吃完舒服', '身体反馈', '长期'],
  SWET: ['甜口', '糖分', '情绪补偿'],
  STRT: ['楼下快餐', '社区小馆', '真实执行力'],
  TREN: ['新店', '限定', '体验感'],
  MIDN: ['深夜', '热汤', '麻辣烫'],
  MOOD: ['情绪', '安慰', '选择'],
  LITE: ['清淡', '原味', '轻负担'],
  DELV: ['外卖', '效率', '最低决策成本'],
  HOME: ['家常小炒', '热汤热饭', '踏实好吃'],
  SAUC: ['蘸料', '甜度', '配比'],
  BUFF: ['份量', '性价比', '饱腹感'],
};

const highlightText = (text: string, keywords: string[]) => {
  if (keywords.length === 0) return text;

  const escaped = keywords
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    keywords.includes(part) ? (
      <span
        key={`${part}-${index}`}
        className="font-medium text-[#2f5f4d]"
      >
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
};

export const ResultPage = ({
  profile,
  decision,
  decisionAlternatives,
  mealPlan,
  onDecision,
  onDecisionRefresh,
  onMealReplace,
  onMealRegenerate,
  onMealIndulgent,
  onShare,
  onRestart,
}: ResultPageProps) => {
  const [openCategory, setOpenCategory] = useState<RecipeCategory | null>(null);
  const presentation = personalityVisualMap[profile.primaryTypeCode];
  const highlightKeywords = highlightKeywordMap[profile.primaryTypeCode] ?? [];
  const primaryScore = profile.scores[profile.primaryScoreKey] ?? 0;
  const totalKcal = mealPlan.reduce((sum, item) => sum + item.current.kcal, 0);
  const matchPercent = Math.min(
    99,
    Math.max(
      84,
      Math.round(
        (primaryScore /
          Math.max(
            1,
            primaryScore +
              (profile.scores.hotpot ?? 0) +
              (profile.scores.milkTea ?? 0) +
              (profile.scores.carb ?? 0),
          )) *
          100 +
          48,
      ),
    ),
  );

  const dimensionBars = useMemo(
    () =>
      Object.values(dimensionMeta).map((item) => ({
        ...item,
        percent: Math.min(100, Math.round(((profile.scores[item.scoreKey] ?? 0) / 12) * 100)),
      })),
    [profile.scores],
  );

  return (
    <section className="rounded-[36px] border border-[#d9e4dd] bg-[#f4f8f5] p-6 shadow-[0_30px_90px_rgba(73,98,83,0.08)] md:p-8">
      <div className="rounded-[30px] border border-[#dce7df] bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#62816f]">
              🧠 {presentation?.eyebrow ?? '隐藏味觉人格已激活'}
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight text-[#1f3128] md:text-5xl">
              {profile.primaryTypeCode}（{profile.mainPersonality.name}）
            </h2>
            <div className="mt-4 text-lg font-semibold leading-8 text-[#3d5b4d]">
              {presentation?.slogan ?? profile.mainPersonality.soulHit}
            </div>
          </div>

          <div className="shrink-0 rounded-[24px] border border-[#d9e5dd] bg-[#f7fbf8] px-5 py-4 text-left md:min-w-[240px]">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6f8778]">📊 人格识别结果</div>
            <div className="mt-3 text-2xl font-black text-[#1f3128]">{matchPercent}%</div>
            <div className="mt-2 text-sm leading-7 text-[#587163]">{presentation?.matchLine ?? '你的胃已经先于大脑做了决定'}</div>
          </div>
        </div>

        <div className="mt-6 inline-flex rounded-full border border-[#cce0d3] bg-[#edf8f0] px-5 py-3 text-sm text-[#3f6b53]">
          <span className="font-semibold">✅ 匹配度 {matchPercent}%</span>
          <span className="mx-2 opacity-55">·</span>
          <span className="font-medium">{presentation?.matchLine ?? '你的胃已经先于大脑做了决定'}</span>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 text-base leading-8 text-[#395244] md:text-lg">
            <p>{presentation?.systemConclusion ?? profile.mainPersonality.soulHit}</p>
            <p>{profile.explanation}</p>
          </div>

          <div className="rounded-[24px] border border-[#d9e5dd] bg-[#f7fbf8] p-5">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6f8778]">📌 系统结论</div>
            <div className="mt-3 text-xl font-bold leading-9 text-[#1f3128]">
              你不是在“选吃的”，你更像是在让人格接管这顿饭。
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[30px] border border-[#dce7df] bg-white p-6 md:p-8">
        <div className="text-lg font-bold text-[#284136]">📖 该人格的详细解读</div>
        <p className="mt-4 text-base leading-9 text-[#3c5648] md:text-lg">
          {highlightText(presentation?.detailedDescription ?? profile.mainPersonality.summary, highlightKeywords)}
        </p>
      </div>

      <div className="mt-6 rounded-[30px] border border-[#dce7df] bg-white p-6 md:p-8">
        <div className="text-lg font-bold text-[#284136]">🏷 味觉人格附加信息</div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6f8778]">🏷 副标签</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {profile.secondaryTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d3e2d8] bg-[#f4faf6] px-4 py-2 text-sm font-medium text-[#365648]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6f8778]">📍 地域属性</div>
              <div className="mt-3 text-2xl font-black text-[#23362d]">{profile.region.name}</div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6f8778]">✨ 彩蛋称号</div>
              <div className="mt-3 text-2xl font-black text-[#23362d]">{profile.easterEgg.name}</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6f8778]">📊 五维核心评分</div>
            <div className="mt-4 space-y-4">
              {dimensionBars.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-[#355547]">
                    <span className="flex min-w-0 items-baseline gap-1.5">
                      <span className="shrink-0">{formatScoreLabel(item.label).code}</span>
                      {formatScoreLabel(item.label).zh ? (
                        <span className="min-w-0 text-xs font-medium text-[#6f8778]">
                          （{formatScoreLabel(item.label).zh}）
                        </span>
                      ) : null}
                    </span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#e7f0ea]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#79b08f] to-[#3f7e5b]"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[30px] border border-[#dce7df] bg-[linear-gradient(180deg,#ffffff_0%,#f3f8f5_100%)] p-6 md:p-8">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#668472]">
          🎯{' '}
          根据你的测试结果，我们替你做了决定
        </div>
        <div className="mt-5 text-base font-medium text-[#567063]">你今天最适合吃：</div>
        <div className="mt-4 rounded-[28px] border border-[#d7e4dc] bg-white px-6 py-6 text-center text-2xl font-black text-[#1f3128] md:text-4xl">
          {decision.name}
        </div>
        <div className="mt-5 space-y-3 text-base leading-8 text-[#3b5547]">
          <p>你的胃已经替你做决定了。与其反复纠结，不如直接吃一顿更符合你人格惯性的东西。</p>
          <p>{decision.reason}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#587163]">
          {decision.highlights.map((item) => (
            <span key={item} className="rounded-full border border-[#d6e4dc] bg-[#f7fbf8] px-4 py-2">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-4">
          <button
            onClick={onDecision}
            className="rounded-full bg-[#2f5a46] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#244837]"
          >
            就吃这个
          </button>
          <button
            onClick={onDecisionRefresh}
            className="rounded-full border border-[#ccdcd2] bg-white px-7 py-3 font-medium text-[#3f5b4e] transition hover:bg-[#f3f8f5]"
          >
            我不服，再给我一个
          </button>
          <button
            onClick={onShare}
            className="rounded-full border border-[#ccdcd2] bg-white px-7 py-3 font-medium text-[#3f5b4e] transition hover:bg-[#f3f8f5]"
          >
            生成分享海报
          </button>
        </div>
        <div className="mt-5 text-sm leading-7 text-[#6c8677]">备选方案：{decisionAlternatives.join(' / ')}</div>
      </div>

      <div className="mt-6 rounded-[30px] border border-[#dce7df] bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-lg font-bold text-[#284136]">🍱 今日食谱</div>
          <div className="text-sm text-[#678172]">
            当前状态：{profile.status} · 口味倾向：{profile.tasteSummary.join(' / ')}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {mealPlan.map((item) => (
            <div key={item.category} className="rounded-[24px] border border-[#deebe3] bg-[#f8fbf9] p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-[#26382f]">
                    {mealTitles[item.category]}：{item.current.name}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-[#466253]">{item.current.reason}</div>
                  {item.category !== 'snack' ? (
                    <div className="mt-2 text-sm text-[#6a8576]">约 {item.current.kcal} kcal · {item.current.source}</div>
                  ) : (
                    <div className="mt-2 text-sm text-[#6a8576]">{item.current.source}</div>
                  )}
                </div>

                {item.category !== 'snack' ? (
                  <button
                    onClick={() => setOpenCategory(openCategory === item.category ? null : item.category)}
                    className="rounded-full border border-[#d6e3db] bg-white px-5 py-2 text-sm font-medium text-[#446052] transition hover:bg-[#f2f8f4]"
                  >
                    🔁 换一换 {openCategory === item.category ? '▲' : '▼'}
                  </button>
                ) : null}
              </div>

              {item.category !== 'snack' && openCategory === item.category ? (
                <div className="mt-5 rounded-[20px] border border-[#dce8e0] bg-white p-4">
                  {(['similar', 'healthier', 'indulgent'] as const).map((bucket) => (
                    <div key={bucket} className="mb-4 last:mb-0">
                      <div className="text-sm font-semibold text-[#5d7a6b]">{swapTitles[bucket]}</div>
                      <div className="mt-3 flex flex-wrap gap-3">
                        {item.swaps[bucket].map((recipe) => (
                          <button
                            key={recipe.id}
                            onClick={() => onMealReplace(item.category, recipe)}
                            className="rounded-2xl border border-[#dbe7df] bg-[#f9fcfa] px-4 py-3 text-left text-sm leading-6 text-[#435f51] transition hover:-translate-y-0.5 hover:border-[#9dbca9]"
                          >
                            {recipe.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] bg-[#24372e] p-5 text-white">
          <div className="text-lg font-bold">今日总热量：约 {totalKcal - 80} - {totalKcal + 40} kcal</div>
          <div className="mt-5 flex flex-wrap gap-4">
            <button
              onClick={onMealRegenerate}
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#24372e] transition hover:-translate-y-0.5"
            >
              保存今天这套
            </button>
            <button
              onClick={onMealRegenerate}
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              重新生成
            </button>
            <button
              onClick={onMealIndulgent}
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              更放纵一点
            </button>
            <button
              onClick={onRestart}
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              再测一次
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
