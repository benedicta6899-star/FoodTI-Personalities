import { motion } from 'framer-motion';
import { personalityTypes } from '../data/personalities';

type HomePageProps = {
  onStart: () => void;
};

const gameplayHighlights = [
  '测测你是哪种互联网吃货人格',
  '今天吃什么？你的 FoodTI 已经安排好了',
  '结果文案适合截图，餐单适合直接跟着吃',
];

const floatingItems = [
  {
    id: 'fork',
    top: 'top-12',
    left: '-left-4 md:left-0',
    delay: 0,
    duration: 8,
    rotate: -8,
    kind: 'fork' as const,
  },
  {
    id: 'quote',
    top: 'top-48 md:top-56',
    left: 'left-[18%]',
    delay: 1.2,
    duration: 9,
    rotate: -2,
    kind: 'quote' as const,
  },
  {
    id: 'leaf',
    top: 'bottom-8',
    right: '-right-10 md:-right-4',
    delay: 0.6,
    duration: 10,
    rotate: 10,
    kind: 'leaf' as const,
  },
];

const cardTransition = { duration: 0.24, ease: 'easeOut' as const };

const FloatingDecor = ({ kind }: { kind: (typeof floatingItems)[number]['kind'] }) => {
  if (kind === 'fork') {
    return (
      <div className="relative h-36 w-20 opacity-30">
        <div className="absolute left-5 top-1 h-32 w-3 rounded-full bg-[#dbd2ca]" />
        <div className="absolute left-1 top-0 h-14 w-3 rounded-full bg-[#dbd2ca]" />
        <div className="absolute left-8 top-0 h-14 w-3 rounded-full bg-[#dbd2ca]" />
        <div className="absolute left-15 top-0 h-14 w-3 rounded-full bg-[#dbd2ca]" />
      </div>
    );
  }

  if (kind === 'leaf') {
    return (
      <div className="relative h-52 w-44 opacity-30">
        <div className="absolute left-16 top-12 h-32 w-16 rotate-[24deg] rounded-[100%_0_100%_0] border-[10px] border-[#e2d8d0]" />
        <div className="absolute left-3 top-20 h-28 w-16 -rotate-[34deg] rounded-[100%_0_100%_0] border-[10px] border-[#e2d8d0]" />
        <div className="absolute left-1/2 top-16 h-24 w-3 -translate-x-1/2 rounded-full bg-[#e2d8d0]" />
      </div>
    );
  }

  return (
    <div className="font-editorial text-[8rem] leading-none tracking-tight text-[#ddd3cb] md:text-[10rem]">
      ”
    </div>
  );
};

export const HomePage = ({ onStart }: HomePageProps) => {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/70 bg-[rgba(255,251,247,0.78)] px-5 py-5 shadow-[0_40px_120px_rgba(179,129,104,0.10)] ring-1 ring-white/60 backdrop-blur-xl md:px-8 md:py-7 xl:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,110,80,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(230,110,80,0.06),transparent_28%)]" />

      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className={`pointer-events-none absolute ${item.top} ${item.left ?? ''} ${item.right ?? ''}`}
          initial={{ opacity: 0, y: 18, rotate: item.rotate }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
            rotate: [item.rotate, item.rotate + 2, item.rotate],
          }}
          transition={{
            opacity: { duration: 0.8, delay: item.delay },
            y: { duration: item.duration, repeat: Infinity, ease: 'easeInOut', delay: item.delay },
            rotate: {
              duration: item.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            },
          }}
        >
          <FloatingDecor kind={item.kind} />
        </motion.div>
      ))}

      <header className="relative rounded-[30px] border border-white/70 bg-white/55 px-4 py-4 shadow-[0_16px_40px_rgba(163,122,99,0.08)] backdrop-blur-xl md:px-6 md:py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 md:min-w-[240px]">
            <div className="font-ui text-sm font-semibold uppercase tracking-[0.42em] text-[#e66e50]">
              FoodTI
            </div>
            <div className="font-ui mt-2 text-sm leading-6 text-[#8f7f77] md:text-[15px]">
              美食人格测试
              <span className="mx-2 text-[#d0c4bc]">/</span>
              今天吃什么决策器
            </div>
          </div>

          <motion.div
            className="flex flex-1 justify-center md:px-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src="/foodti-logo.svg"
              alt="FoodTI"
              className="h-12 w-auto object-contain drop-shadow-[0_10px_24px_rgba(230,110,80,0.20)] md:h-14"
            />
          </motion.div>

          <div className="flex justify-start md:min-w-[240px] md:justify-end">
            <motion.div
              whileHover={{ y: -2, boxShadow: '0 20px 40px rgba(163,122,99,0.10)' }}
              transition={cardTransition}
              className="font-ui inline-flex items-center gap-2 rounded-full border border-[#ece2db] bg-white/85 px-4 py-2.5 text-xs font-semibold tracking-[0.18em] text-[#73655f] shadow-[0_8px_20px_rgba(163,122,99,0.08)]"
            >
              <span className="text-[#e66e50]">✦</span>
              轻娱乐人格测试
            </motion.div>
          </div>
        </div>
      </header>

      <div className="relative px-2 pb-4 pt-14 text-center md:px-8 md:pb-6 md:pt-18">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
          className="font-ui mb-8 inline-flex items-center gap-3 rounded-full border border-[#f1dfd7] bg-white/80 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-[#e66e50] shadow-[0_14px_34px_rgba(163,122,99,0.08)] backdrop-blur"
        >
          <span className="text-base">✦</span>
          3分钟测测你的美食人格
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: 'easeOut' }}
          className="font-editorial mx-auto max-w-4xl text-[4.2rem] font-semibold leading-[0.88] tracking-[-0.06em] text-[#3a2e2b] md:text-[5.8rem] lg:text-[7rem]"
        >
          <span className="block">想好今天</span>
          <span className="mt-2 block text-transparent [-webkit-text-stroke:1.3px_#3a2e2b] md:[-webkit-text-stroke:1.8px_#3a2e2b]">
            吃什么了吗？
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
          className="font-ui mx-auto mt-8 max-w-2xl text-lg font-medium leading-8 tracking-[0.03em] text-[#8d7f79] md:text-[1.35rem]"
        >
          解决你的选择困难
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.46, ease: 'easeOut' }}
          className="mt-12 flex justify-center"
        >
          <motion.button
            onClick={onStart}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={cardTransition}
            className="group relative inline-flex overflow-hidden rounded-full bg-[#1f1b19] px-10 py-5 font-ui text-lg font-semibold tracking-[0.08em] text-white shadow-[0_24px_50px_rgba(31,27,25,0.16)]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.16)_45%,rgba(255,255,255,0.42)_50%,rgba(255,255,255,0.16)_55%,transparent_80%)] opacity-70 animate-[shimmer_4.6s_linear_infinite] group-hover:opacity-100" />
            <span className="relative z-10">立即测一份今日菜单</span>
            <span className="relative z-10 ml-4 text-2xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </motion.div>
      </div>

      <div className="relative mt-4 grid gap-6 border-t border-[#eee2da] pt-8 md:mt-6 md:grid-cols-[1.12fr_0.88fr] md:pt-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="rounded-[30px] border border-white/75 bg-white/60 p-6 shadow-[0_20px_50px_rgba(163,122,99,0.08)] backdrop-blur"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-10 w-3 rounded-full bg-[#e66e50]" />
            <h2 className="font-editorial text-[1.18rem] font-semibold tracking-[-0.04em] text-[#3a2e2b] md:text-[1.3rem]">
              热门人格
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {personalityTypes.slice(0, 11).map((item, index) => (
              <motion.button
                key={item.key}
                type="button"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 + index * 0.04, ease: 'easeOut' }}
                whileHover={{
                  y: -4,
                  borderColor: '#E66E50',
                  backgroundColor: 'rgba(255,250,246,0.98)',
                  boxShadow: '0 20px 40px rgba(230,110,80,0.12)',
                }}
                whileTap={{ scale: 0.98 }}
                className="font-ui rounded-[28px] border border-[#efe5de] bg-[#fffdfb] px-6 py-4 text-[0.8rem] font-semibold tracking-[0.01em] text-[#81726b] shadow-[0_12px_28px_rgba(163,122,99,0.05)] transition-colors duration-300 md:text-[0.86rem]"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52, ease: 'easeOut' }}
          className="rounded-[30px] border border-white/75 bg-white/50 p-6 shadow-[0_20px_50px_rgba(163,122,99,0.07)] backdrop-blur"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-10 w-3 rounded-full bg-[#d9d2cd]" />
            <h2 className="font-editorial text-[1.18rem] font-semibold tracking-[-0.04em] text-[#3a2e2b] md:text-[1.3rem]">
              热门玩法
            </h2>
          </div>

          <div className="space-y-4">
            {gameplayHighlights.map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.58 + index * 0.06, ease: 'easeOut' }}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-4 rounded-[24px] border border-transparent px-3 py-3 transition-colors duration-300 hover:border-[#f1dfd7] hover:bg-white/70"
              >
                <span className="mt-2 h-4 w-4 rounded-full border-[4px] border-[#e66e50]/95 bg-white shadow-[0_0_0_4px_rgba(230,110,80,0.08)]" />
                <p className="font-ui text-[0.9rem] font-semibold leading-7 tracking-[0.01em] text-[#b4aba6] transition-colors duration-300 group-hover:text-[#7b6e68] md:text-[0.96rem]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <div className="relative flex items-center justify-center gap-4 pb-2 pt-10 text-[#d4cbc5]">
        <span className="h-px w-12 bg-current" />
        <span className="font-ui text-xs font-semibold uppercase tracking-[0.38em]">FoodTI Atelier</span>
        <span className="h-px w-12 bg-current" />
      </div>
    </section>
  );
};
