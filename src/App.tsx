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
  buildProfile,
  buildScores,
  generateMenuPlan,
  getDecisionCandidates,
  getProgressStats,
} from './data/recommendationEngine';
import type { MealPlanItem, MenuPlan, PageStep, Recipe, RecipeCategory } from './types';

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
  const [showShare, setShowShare] = useState(false);
  const [initialMenuPlan, setInitialMenuPlan] = useState<MenuPlan | null>(null);
  const [currentMenuPlan, setCurrentMenuPlan] = useState<MenuPlan | null>(null);

  const scores = useMemo(() => buildScores(questions, answers), [answers]);
  const profile = useMemo(() => buildProfile(scores), [scores]);
  const candidates = useMemo(() => getDecisionCandidates(profile), [profile]);
  const currentDecision = currentMenuPlan?.decision ?? candidates[0];
  const currentMealPlan = currentMenuPlan?.meals ?? [];
  const decisionAlternatives = useMemo(() => {
    if (candidates.length === 0) return [];
    const currentIndex = candidates.findIndex((item) => item.id === currentDecision?.id);
    const startIndex = currentIndex >= 0 ? currentIndex + 1 : 1;

    return Array.from({ length: Math.min(3, Math.max(0, candidates.length - 1)) }, (_, offset) => {
      const candidate = candidates[(startIndex + offset) % candidates.length];
      return candidate?.name;
    }).filter((item): item is string => Boolean(item) && item !== currentDecision?.name);
  }, [candidates, currentDecision]);
  const progressStats = useMemo(() => getProgressStats(scores), [scores]);

  useEffect(() => {
    if (step !== 'calculating') return;
    const timer = window.setTimeout(() => {
      const firstPlan = generateMenuPlan(profile);
      setInitialMenuPlan(firstPlan);
      setCurrentMenuPlan(firstPlan);
      setStep('result');
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [profile, step]);

  const activeQuestion = questions[currentIndex];

  const handleStart = () => {
    setInitialMenuPlan(null);
    setCurrentMenuPlan(null);
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
    setInitialMenuPlan(null);
    setCurrentMenuPlan(null);
    setShowShare(false);
    setStep('home');
  };

  const handleBackHomeFromQuiz = () => {
    setAnswers({});
    setCurrentIndex(0);
    setInitialMenuPlan(null);
    setCurrentMenuPlan(null);
    setStep('home');
  };

  const handleDecisionConfirm = () => {
    setStep('meal-plan');
  };

  const handleDecisionRefresh = () => {
    setCurrentMenuPlan((prev) => {
      if (!prev || candidates.length === 0) return prev;
      const currentIndex = candidates.findIndex((item) => item.id === prev.decision.id);
      const nextDecision = candidates[(currentIndex + 1 + candidates.length) % candidates.length] ?? candidates[0];

      return {
        ...prev,
        decision: nextDecision,
      };
    });
  };

  const handleReplaceMeal = (category: RecipeCategory, recipe: Recipe) => {
    setCurrentMenuPlan((prev) =>
      prev
        ? {
            ...prev,
            meals: mealPlanWithReplacement(prev.meals, category, recipe),
          }
        : prev,
    );
  };

  const handleRegeneratePlan = () => {
    setCurrentMenuPlan((prev) => generateMenuPlan(profile, { excludeCurrent: prev, diversify: true }));
  };

  const handleRestoreInitialMenu = () => {
    if (!initialMenuPlan) return;
    setCurrentMenuPlan(initialMenuPlan);
  };

  const handleIndulgentPlan = () => {
    setCurrentMenuPlan((prev) =>
      prev
        ? {
            ...prev,
            meals: prev.meals.map((item) => ({
              ...item,
              current: item.swaps.indulgent[0] ?? item.current,
            })),
          }
        : prev,
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
            onBackHome={handleBackHomeFromQuiz}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}

        {step === 'calculating' && <CalculatingPage stats={progressStats} />}

        {step === 'result' && (
          <ResultPage
            profile={profile}
            decision={currentDecision}
            decisionAlternatives={decisionAlternatives}
            mealPlan={currentMealPlan}
            onDecision={() => setStep('decision')}
            onDecisionRefresh={handleDecisionRefresh}
            onMealReplace={handleReplaceMeal}
            onMealRegenerate={handleRegeneratePlan}
            onMealRestoreInitial={handleRestoreInitialMenu}
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
            decision={currentDecision}
            mealPlan={currentMealPlan}
            onReplace={handleReplaceMeal}
            onRegenerate={handleRegeneratePlan}
            onRestoreInitial={handleRestoreInitialMenu}
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
