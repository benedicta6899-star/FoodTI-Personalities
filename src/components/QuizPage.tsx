import type { Question } from '../types';

type QuizPageProps = {
  question: Question;
  current: number;
  total: number;
  selected?: string;
  onSelect: (value: string) => void;
  onBackHome: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export const QuizPage = ({
  question,
  current,
  total,
  selected,
  onSelect,
  onBackHome,
  onPrev,
  onNext,
}: QuizPageProps) => {
  const selectedOption = question.options.find((option) => option.id === selected);

  return (
    <section className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-[0_30px_90px_rgba(217,79,32,0.12)] backdrop-blur md:p-8">
      <header className="flex items-center justify-between border-b border-[#f2d7c7] pb-4">
        <button onClick={onBackHome} className="text-sm font-medium text-[#8f5b44] transition hover:text-[#d5542c]">
          ← 返回
        </button>
        <div className="text-lg font-bold text-[#2d160f]">
          {String(current + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </div>
      </header>

      <div className="mt-10">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c06a41]">Q{question.id}</div>
        <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-10 text-[#24120d] md:text-3xl">{question.text}</h2>

        <div className="mt-8 grid gap-4">
          {question.options.map((option, index) => {
            const active = selected === option.id;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={`flex items-start gap-4 rounded-[24px] border p-5 text-left transition ${
                  active
                    ? 'border-[#ff8c58] bg-[#fff1e8] shadow-[0_12px_30px_rgba(255,122,61,0.18)]'
                    : 'border-[#f2d7c7] bg-[#fffaf6] hover:-translate-y-0.5 hover:border-[#ffbe97]'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    active ? 'bg-[#ff7a3d] text-white' : 'bg-[#f5e1d6] text-[#91553a]'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <div className="text-base leading-7 text-[#4b2e22]">{option.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={`mt-8 min-h-[52px] rounded-[24px] px-4 py-3 text-sm leading-6 transition ${
          selectedOption?.hint
            ? 'border border-dashed border-[#f3ccb6] bg-[#fff5ef] text-[#8b5a41]'
            : 'border border-dashed border-transparent bg-transparent text-transparent'
        }`}
      >
        {selectedOption?.hint ? `🧠 趣味提示：${selectedOption.hint}` : '趣味提示占位'}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={onPrev}
          className="rounded-full border border-[#efcdbb] px-6 py-3 font-medium text-[#7d503b] transition hover:bg-[#fff5ef]"
        >
          上一题
        </button>
        <button
          onClick={onNext}
          className="rounded-full bg-[#1f1c1b] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e25a2c]"
        >
          {current === total - 1 ? '提交答案' : '下一题'}
        </button>
      </div>
    </section>
  );
};
