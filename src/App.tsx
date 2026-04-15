import { useEffect, useMemo, useState } from 'react';
import { HomePage } from './components/HomePage';
import { QuizPage } from './components/QuizPage';
import { CalculatingPage } from './components/CalculatingPage';
import { ResultPage } from './components/ResultPage';
import { DecisionCard } from './components/DecisionCard';
import { MealPlanPage } from './components/MealPlanPage';
import { ShareModal } from './components/ShareModal';
import { questions } from './data/questions';
import {
  buildMealPlan,
  buildProfile,
  buildScores,
  getDecisionCandidates,
  getProgressStats,
} from './data/recommendationEngine';
import type { MealPlanItem, PageStep, Recipe, RecipeCategory } from './types';

const mealPlanWithReplacement = (
  plan: MealPlanItem[],
  category: RecipeCategory,
  recipe: Recipe,
): MealPlanItem[] =>
  plan.map((item) => (item.category === category ? { ...item, current: recipe } : item));

export default function App() {
  const [step, setStep] = useState<PageStep>('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [decisionIndex, setDecisionIndex] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [mealPlan, setMealPlan] = useState<MealPlanItem[]>([]);

  const scores = useMemo(() => buildScores(questions, answers), [answers]);
  const profile = useMemo(() => buildProfile(scores), [scores]);
  const candidates = useMemo(() => getDecisionCandidates(profile), [profile]);
  const currentDecision = candidates[decisionIndex % candidates.length];
  const progressStats = useMemo(() => getProgressStats(scores), [scores]);

  useEffect(() => {
    if (step !== 'calculating') return;
    const timer = window.setTimeout(() => {
      setMealPlan(buildMealPlan(profile));
      setStep('result');
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [profile, step]);

  const activeQuestion = questions[currentIndex];

  const handleStart = () => {
    setStep('quiz');
    setCurrentIndex(0);
  };

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [activeQuestion.id]: value }));
  };

  const handlePrev = () => {
    if (step !== 'quiz') return;
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (!answers[activeQuestion.id]) return;
    if (currentIndex === questions.length - 1) {
      setStep('calculating');
      return;
    }
    setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setDecisionIndex(0);
    setMealPlan([]);
    setShowShare(false);
    setStep('home');
  };

  const handleDecisionConfirm = () => {
    setMealPlan(buildMealPlan(profile));
    setStep('meal-plan');
  };

  const handleDecisionRefresh = () => {
    setDecisionIndex((prev) => (prev + 1) % candidates.length);
  };

  const handleReplaceMeal = (category: RecipeCategory, recipe: Recipe) => {
    setMealPlan((prev) => mealPlanWithReplacement(prev, category, recipe));
  };

  const handleRegeneratePlan = () => {
    setMealPlan(buildMealPlan(profile));
  };

  const handleIndulgentPlan = () => {
    setMealPlan((prev) =>
      prev.map((item) => ({
        ...item,
        current: item.swaps.indulgent[0] ?? item.current,
      })),
    );
  };

  return (
    <div className="min-h-screen bg-[#fffbf7] px-4 py-5 text-[#3a2e2b] md:px-6 md:py-7 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {step === 'home' && <HomePage onStart={handleStart} />}

        {step === 'quiz' && (
          <QuizPage
            question={activeQuestion}
            current={currentIndex}
            total={questions.length}
            selected={answers[activeQuestion.id]}
            onSelect={handleSelect}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}

        {step === 'calculating' && <CalculatingPage stats={progressStats} />}

        {step === 'result' && (
          <ResultPage
            profile={profile}
            decision={currentDecision}
            decisionAlternatives={candidates.slice(1, 4).map((item) => item.name)}
            mealPlan={mealPlan}
            onDecision={() => setStep('decision')}
            onDecisionRefresh={handleDecisionRefresh}
            onMealReplace={handleReplaceMeal}
            onMealRegenerate={handleRegeneratePlan}
            onMealIndulgent={handleIndulgentPlan}
            onShare={() => setShowShare(true)}
            onRestart={handleRestart}
          />
        )}

        {step === 'decision' && (
          <DecisionCard
            profile={profile}
            decision={currentDecision}
            onConfirm={handleDecisionConfirm}
            onRefresh={handleDecisionRefresh}
          />
        )}

        {step === 'meal-plan' && (
          <MealPlanPage
            profile={profile}
            mealPlan={mealPlan}
            onReplace={handleReplaceMeal}
            onRegenerate={handleRegeneratePlan}
            onIndulgent={handleIndulgentPlan}
            onBack={() => setStep('result')}
          />
        )}
      </div>

      <ShareModal
        open={showShare}
        profile={profile}
        decision={currentDecision}
        backupNames={candidates.slice(1, 4).map((item) => item.name)}
        onClose={() => setShowShare(false)}
      />
    </div>
  );
}
