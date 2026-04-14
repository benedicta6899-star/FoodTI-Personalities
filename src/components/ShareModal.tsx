import { personalityVisualMap } from '../data/resultPresentation';
import type { DecisionOption, UserProfile } from '../types';

type ShareModalProps = {
  open: boolean;
  profile: UserProfile;
  decision: DecisionOption;
  backupNames: string[];
  onClose: () => void;
};

export const ShareModal = ({ open, profile, decision, backupNames, onClose }: ShareModalProps) => {
  if (!open) return null;

  const posterMeta = personalityVisualMap[profile.primaryTypeCode];
  const lightweightTag = profile.region.name || profile.easterEgg.name;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a0d08]/55 p-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-[32px] border border-white/40 bg-white/95 p-6 shadow-[0_40px_120px_rgba(20,10,8,0.35)] md:p-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black text-[#24120d]">分享海报弹层</div>
          <button onClick={onClose} className="rounded-full bg-[#f7e3d7] px-4 py-2 text-sm font-medium text-[#7b503b]">
            关闭
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[#efd4c5] bg-[#fff8f3] p-6 text-sm leading-7 text-[#5d392c]">
            <div>
              <span className="font-semibold text-[#8f5639]">人格：</span>
              {profile.primaryTypeCode}（{profile.mainPersonality.name}）
            </div>
            <div>
              <span className="font-semibold text-[#8f5639]">短评：</span>
              {posterMeta?.slogan}
            </div>
            <div>
              <span className="font-semibold text-[#8f5639]">今日结论：</span>
              {decision.name}
            </div>
            <div>
              <span className="font-semibold text-[#8f5639]">轻量标签：</span>
              {lightweightTag}
            </div>
          </div>

          <div className="rounded-[30px] bg-[linear-gradient(180deg,#f4f7f2_0%,#e7efe8_100%)] p-6 text-[#23362d]">
            <div className="rounded-[28px] border border-[#d6e2d9] bg-white/80 p-6 backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6f8778]">海报预览</div>
              <div className="mt-6 text-sm font-medium text-[#587163]">你的美食人格类型是：</div>
              <div className="mt-3 max-w-[16rem] text-3xl font-black leading-[1.18] text-[#1f3128] md:text-[2rem]">
                {profile.mainPersonality.name}
              </div>
              <div className="mt-2 text-[1.7rem] font-bold uppercase tracking-[0.34em] text-[#4f6c5e] md:text-[1.85rem]">
                {profile.primaryTypeCode}
              </div>

              <div className="mt-6 flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#d7e3db] bg-[radial-gradient(circle_at_top,#fffdf7_0%,#f6f3e9_45%,#e8eee7_100%)] text-4xl md:h-32 md:w-32 md:text-5xl">
                  {posterMeta?.visualEmoji ?? profile.mainPersonality.emoji}
                </div>
              </div>

              <div className="mt-6 px-3 text-center text-base font-semibold leading-7 text-[#355244]">
                {posterMeta?.slogan}
              </div>

              <div className="mt-7 rounded-[24px] border border-[#dbe6de] bg-[#f7fbf8] p-5 text-center">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#74907e]">
                  今日最终结论
                </div>
                <div className="mt-3 text-base font-medium text-[#648173]">今天就吃：</div>
                <div className="mt-2 text-2xl font-black leading-9 text-[#1f3128]">{decision.name}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-[#1f1c1b] px-7 py-3 font-semibold text-white transition hover:bg-[#e25a2c]">
            保存图片
          </button>
          <button className="rounded-full border border-[#efcdbb] px-7 py-3 font-medium text-[#7d503b] transition hover:bg-[#fff5ef]">
            分享给朋友
          </button>
        </div>
      </div>
    </div>
  );
};
