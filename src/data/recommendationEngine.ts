import { questions } from './questions';
import { decisionOptions, recipeDatabase } from './recipes';
import { easterEggs, personalityTypes, regionTags, secondaryTags } from './personalities';
import type {
  AnswerMap,
  DecisionOption,
  MealPlanItem,
  Question,
  QuizResult,
  RecommendationProfile,
  Recipe,
  RecipeCategory,
  ScoreMap,
  SwapBucket,
  UserProfile,
} from '../types';

const personalityScoreKeys = personalityTypes.map((item) => item.scoreKey);
const regionScoreKeys = ['sichuan', 'guangdong', 'dongbei', 'jiangzhe'];

const mealFallbackByCategory: Record<RecipeCategory, string[]> = {
  breakfast: ['bf-soy', 'bf-riceball', 'bf-guandong', 'bf-yogurt', 'bf-shaxian'],
  lunch: ['lu-hotpot', 'lu-ygf', 'lu-soup', 'lu-lanzhou', 'lu-huangmen'],
  dinner: ['di-soup', 'di-shaxian', 'di-bowl', 'di-malatang', 'di-huangmen'],
  snack: ['sn-yogurt', 'sn-milk', 'sn-corn'],
};

const primaryToRegionPreference: Record<string, string> = {
  HOTP: 'sichuan',
  SPCY: 'sichuan',
  HLTH: 'guangdong',
  LITE: 'guangdong',
  CARB: 'dongbei',
  BUFF: 'dongbei',
  SWET: 'jiangzhe',
  TREN: 'jiangzhe',
};

const primaryToSecondaryExclusions: Record<string, string[]> = {
  TREN: ['trend'],
  MIDN: ['lateNight'],
  HLTH: ['health'],
  CARB: ['carbCore'],
  HOME: ['loyalty'],
};

export const buildScores = (questionBank: Question[], answers: AnswerMap): ScoreMap => {
  const total: ScoreMap = {};

  questionBank.forEach((question) => {
    const answer = answers[question.id];
    const matched = question.options.find((option) => option.id === answer);
    if (!matched) return;

    Object.entries(matched.scores).forEach(([key, value]) => {
      total[key] = (total[key] ?? 0) + value;
    });
  });

  return total;
};

export const getProgressPercent = (answers: AnswerMap, total: number) => {
  const answeredCount = Object.keys(answers).length;
  return Math.round((answeredCount / total) * 100);
};

export const isQuizComplete = (answers: AnswerMap, totalQuestions: number) => Object.keys(answers).length >= totalQuestions;

const unique = <T,>(list: T[]) => Array.from(new Set(list));

const getPrimaryType = (scores: ScoreMap) =>
  personalityTypes.reduce((best, current) => {
    const bestScore = scores[best.scoreKey] ?? 0;
    const currentScore = scores[current.scoreKey] ?? 0;
    return currentScore > bestScore ? current : best;
  }, personalityTypes[0]);

export const getTopSecondaryTags = (scores: ScoreMap, primaryTypeCode: string) => {
  const exclusions = new Set(primaryToSecondaryExclusions[primaryTypeCode] ?? []);

  const ranked = secondaryTags
    .map((tag) => ({
      ...tag,
      value: scores[tag.scoreKey] ?? 0,
    }))
    .filter((tag) => tag.value > 0 && !exclusions.has(tag.scoreKey))
    .sort((left, right) => right.value - left.value);

  return ranked.slice(0, Math.min(4, Math.max(2, ranked.length))).map((tag) => tag.name);
};

export const getRegionTag = (scores: ScoreMap, primaryTypeCode: string) => {
  const ranked = [...regionTags]
    .map((region) => ({ ...region, value: scores[region.key] ?? 0 }))
    .sort((left, right) => right.value - left.value);

  const [top, second] = ranked;
  if (!second) return top.name;

  const preferredKey = primaryToRegionPreference[primaryTypeCode];
  if (preferredKey && top.value - second.value <= 1) {
    const preferred = ranked.find((region) => region.key === preferredKey);
    if (preferred && preferred.value >= second.value) return preferred.name;
  }

  return top.name;
};

export const getStateLabel = (scores: ScoreMap) => {
  const diet = scores.diet ?? 0;
  const betrayer = scores.betrayer ?? 0;
  const wellness = scores.wellness ?? 0;
  const health = scores.health ?? 0;

  if (diet >= 6 && betrayer <= 3) return '严格减脂中';
  if (diet >= 4 && betrayer >= 4) return '假装减肥中';
  if (wellness + health >= 8) return '稳定养生中';
  return '快乐干饭中';
};

const getRecommendationProfile = (scores: ScoreMap): RecommendationProfile => ({
  prefersHot: (scores.hotpot ?? 0) + (scores.comfort ?? 0) + (scores.hotFood ?? 0) >= 8,
  prefersDrink: (scores.milkTea ?? 0) + (scores.dessert ?? 0) >= 8,
  prefersCarb: (scores.carb ?? 0) + (scores.carbCore ?? 0) >= 7,
  prefersLight: (scores.wellness ?? 0) + (scores.lite ?? 0) + (scores.health ?? 0) >= 8,
  prefersSweet: (scores.dessert ?? 0) >= 6,
  prefersSpicy: (scores.spicy ?? 0) >= 6,
  prefersTakeout: (scores.delivery ?? 0) >= 5,
});

export const calculateResult = (answers: AnswerMap, questionBank: Question[] = questions): QuizResult => {
  const scores = buildScores(questionBank, answers);
  const primaryType = getPrimaryType(scores);

  return {
    primaryTypeCode: primaryType.code,
    primaryTypeName: primaryType.name,
    primaryScoreKey: primaryType.scoreKey,
    regionTag: getRegionTag(scores, primaryType.code),
    stateLabel: getStateLabel(scores),
    secondaryTags: getTopSecondaryTags(scores, primaryType.code),
    scores,
    recommendationProfile: getRecommendationProfile(scores),
  };
};

export const buildProfile = (scores: ScoreMap): UserProfile => {
  const primaryType = getPrimaryType(scores);
  const regionTag = getRegionTag(scores, primaryType.code);
  const region = regionTags.find((item) => item.name === regionTag) ?? regionTags[0];
  const recommendationProfile = getRecommendationProfile(scores);
  const fallbackEgg = easterEggs[0];
  const easterEgg = easterEggs.find((egg) => egg.match(scores)) ?? fallbackEgg;

  const tasteSummary = unique(
    [
      recommendationProfile.prefersSpicy ? '偏辣' : '',
      recommendationProfile.prefersHot ? '偏热食' : '',
      recommendationProfile.prefersCarb ? '偏碳水' : '',
      recommendationProfile.prefersDrink ? '爱茶饮搭配' : '',
      recommendationProfile.prefersLight ? '在意轻负担' : '',
      recommendationProfile.prefersTakeout ? '外卖适配度高' : '',
    ].filter(Boolean),
  );

  return {
    status: getStateLabel(scores),
    tasteSummary: tasteSummary.length > 0 ? tasteSummary : ['偏真实落地派'],
    mainPersonality: primaryType,
    secondaryTags: getTopSecondaryTags(scores, primaryType.code),
    region,
    easterEgg,
    explanation: `你在“减脂自律 / 深夜食欲 / 热食偏好 / 饮品依赖 / 情绪吃饭方式”这些维度上的累计倾向，最后都指向了典型的“${primaryType.decisionTone}”人格。`,
    scores,
    primaryTypeCode: primaryType.code,
    primaryScoreKey: primaryType.scoreKey,
    recommendationProfile,
  };
};

const scoreDecision = (option: DecisionOption, profile: UserProfile) => {
  let score = 0;

  option.tags.forEach((tag) => {
    if (tag === profile.mainPersonality.key) score += 4;
    if (tag === profile.region.key) score += 2;
    score += profile.scores[tag] ?? 0;
  });

  if (profile.recommendationProfile.prefersHot && option.tags.includes('hotpot')) score += 3;
  if (profile.recommendationProfile.prefersDrink && option.tags.includes('milkTea')) score += 2;
  if (profile.recommendationProfile.prefersCarb && option.tags.includes('carb')) score += 3;
  if (profile.recommendationProfile.prefersLight && option.tags.includes('diet')) score += 3;
  if (profile.status.includes('减肥') && option.tags.includes('diet')) score += 2;
  if (profile.status === '快乐干饭中' && option.tags.includes('comfort')) score += 2;

  return score;
};

export const getDecisionCandidates = (profile: UserProfile) =>
  [...decisionOptions].sort((left, right) => scoreDecision(right, profile) - scoreDecision(left, profile));

const findRecipe = (id: string) => recipeDatabase.find((item) => item.id === id)!;

const pickRecipesByTags = (meal: RecipeCategory, profile: UserProfile) => {
  const recipes = recipeDatabase.filter((item) => item.meal === meal);
  const ranked = recipes
    .map((recipe) => {
      let score = 0;

      recipe.tags.forEach((tag) => {
        if (tag === profile.mainPersonality.key) score += 3;
        if (tag === profile.region.key) score += 2;
        score += profile.scores[tag] ?? 0;
      });

      if (profile.recommendationProfile.prefersLight && recipe.tags.includes('diet')) score += 2;
      if (profile.recommendationProfile.prefersHot && recipe.tags.includes('hotpot')) score += 2;
      if (profile.recommendationProfile.prefersCarb && recipe.tags.includes('carb')) score += 2;
      if (profile.recommendationProfile.prefersDrink && recipe.tags.includes('milkTea')) score += 1;

      return { recipe, score };
    })
    .sort((left, right) => right.score - left.score)
    .map((item) => item.recipe);

  return ranked.length > 0 ? ranked : mealFallbackByCategory[meal].map(findRecipe);
};

const groupSwapRecipes = (baseRecipe: Recipe, meal: RecipeCategory, profile: UserProfile): Record<SwapBucket, Recipe[]> => {
  const all = pickRecipesByTags(meal, profile).filter((recipe) => recipe.id !== baseRecipe.id);
  const similar = all.filter((recipe) => recipe.swapGroup === baseRecipe.swapGroup).slice(0, 2);
  const healthier = all.filter((recipe) => recipe.swapGroup.includes('health')).slice(0, 2);
  const indulgent = all.filter((recipe) => recipe.swapGroup.includes('indulgent')).slice(0, 2);

  return {
    similar: similar.length ? similar : all.slice(0, 2),
    healthier: healthier.length ? healthier : all.slice(0, 2),
    indulgent: indulgent.length ? indulgent : all.slice(0, 2),
  };
};

export const buildMealPlan = (profile: UserProfile): MealPlanItem[] => {
  const breakfast = pickRecipesByTags('breakfast', profile)[0];
  const lunch = pickRecipesByTags('lunch', profile)[0];
  const dinner = pickRecipesByTags('dinner', profile)[0];
  const snack = pickRecipesByTags('snack', profile)[0];

  return [
    { category: 'breakfast', current: breakfast, swaps: groupSwapRecipes(breakfast, 'breakfast', profile) },
    { category: 'lunch', current: lunch, swaps: groupSwapRecipes(lunch, 'lunch', profile) },
    { category: 'dinner', current: dinner, swaps: groupSwapRecipes(dinner, 'dinner', profile) },
    { category: 'snack', current: snack, swaps: groupSwapRecipes(snack, 'snack', profile) },
  ];
};

export const getProgressStats = (scores: ScoreMap) =>
  personalityScoreKeys.slice(0, 6).map((key) => ({
    key,
    label:
      ({
        hotpot: '火锅人格',
        milkTea: '奶茶人格',
        betrayer: '减脂波动',
        carb: '碳水人格',
        spicy: '辣味倾向',
        wellness: '养生人格',
      })[key] ?? key,
    value: Math.min(100, ((scores[key] ?? 0) / 12) * 100),
  }));

export const getTopScores = (scores: ScoreMap) => ({
  personalities: personalityScoreKeys.map((key) => ({
    key,
    value: scores[key] ?? 0,
  })),
  regions: regionScoreKeys.map((key) => ({
    key,
    value: scores[key] ?? 0,
  })),
});
