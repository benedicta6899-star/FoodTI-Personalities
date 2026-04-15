export type PageStep = 'home' | 'quiz' | 'calculating' | 'result' | 'decision' | 'meal-plan';

export type ScoreMap = Record<string, number>;
export type AnswerMap = Record<number, string>;

export type QuestionOption = {
  id: string;
  label: string;
  scores: ScoreMap;
  hint?: string;
};

export type Question = {
  id: number;
  text: string;
  dimension: string;
  options: QuestionOption[];
};

export type PersonalityType = {
  key: string;
  code: string;
  scoreKey: string;
  name: string;
  emoji: string;
  summary: string;
  soulHit: string;
  portraits: string[];
  decisionTone: string;
};

export type SecondaryTag = {
  key: string;
  name: string;
  scoreKey: string;
};

export type RegionTag = {
  key: string;
  name: string;
};

export type EasterEgg = {
  key: string;
  name: string;
  match: (scores: ScoreMap) => boolean;
};

export type RecipeCategory = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type SwapBucket = 'similar' | 'healthier' | 'indulgent';

export type Recipe = {
  id: string;
  name: string;
  meal: RecipeCategory;
  kcal: number;
  reason: string;
  source: string;
  tags: string[];
  swapGroup: string;
};

export type DecisionOption = {
  id: string;
  name: string;
  reason: string;
  highlights: string[];
  tags: string[];
  altPool: string[];
};

export type MenuPlan = {
  decision: DecisionOption;
  meals: MealPlanItem[];
};

export type RecommendationProfile = {
  prefersHot: boolean;
  prefersDrink: boolean;
  prefersCarb: boolean;
  prefersLight: boolean;
  prefersSweet: boolean;
  prefersSpicy: boolean;
  prefersTakeout: boolean;
};

export type QuizResult = {
  primaryTypeCode: string;
  primaryTypeName: string;
  primaryScoreKey: string;
  regionTag: string;
  stateLabel: string;
  secondaryTags: string[];
  scores: ScoreMap;
  recommendationProfile: RecommendationProfile;
};

export type UserProfile = {
  status: string;
  tasteSummary: string[];
  mainPersonality: PersonalityType;
  secondaryTags: string[];
  region: RegionTag;
  easterEgg: EasterEgg;
  explanation: string;
  scores: ScoreMap;
  primaryTypeCode: string;
  primaryScoreKey: string;
  recommendationProfile: RecommendationProfile;
};

export type MealPlanItem = {
  category: RecipeCategory;
  current: Recipe;
  swaps: Record<SwapBucket, Recipe[]>;
};
