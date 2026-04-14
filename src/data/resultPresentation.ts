type ResultPresentationItem = {
  image: string;
  slogan: string;
  eyebrow: string;
  matchLine: string;
  systemConclusion: string;
  detailedDescription: string;
  visualEmoji: string;
};

export const personalityVisualMap: Record<string, ResultPresentationItem> = {
  HOTP: {
    image: '/images/personalities/hotp.svg',
    visualEmoji: '🍲',
    slogan: '锅还没开，你的灵魂已经入座了。',
    eyebrow: '隐藏味觉人格已激活',
    matchLine: '热食信仰已接管今日食欲',
    systemConclusion: '系统检测到你对热锅、蘸料和热气腾腾的安全感有持续依赖。你不是在“想吃什么”，你是在寻找一种能让灵魂坐下来的温度。',
    detailedDescription:
      '你不是普通地喜欢吃火锅，你是那种锅底还没沸腾，情绪就已经先热起来的人。对你来说，热气、蘸料、涮菜顺序从来不是附属细节，而是一种稳定的人格秩序。你嘴上可能说“吃什么都行”，但真到点单时，身体会自动把你送到最热、最香、最能冒气的那一口。别人吃火锅是聚餐，你吃火锅更像精神回仓。只要锅一开，你整个人的状态就会明显变好。',
  },
  MTEX: {
    image: '/images/personalities/mtex.png',
    visualEmoji: '🧋',
    slogan: '这不是喝饮料，这是风味管理。',
    eyebrow: '味觉人格识别完成',
    matchLine: '饮品快乐值正在稳定供能',
    systemConclusion: '系统判断你对饮品、小料、甜度和那一点点情绪价值有长期投入。你不是随便喝点，你是在给这一天补一口像样的兴致。',
    detailedDescription:
      '你和奶茶的关系早就超出了“口渴喝点东西”这么简单。你会在糖度、冰量、配料和心情之间快速完成一轮内部评审，然后选出那杯最懂你的。别人点饮料是附带动作，你点饮料更像在给今天做收尾或者做开场。你知道什么时候该无糖装体面，也知道什么时候该让小料替自己说真话。你以为你在选喝的，其实是人格在接管风味分配权。',
  },
  DTRR: {
    image: '/images/personalities/dtrr.png',
    visualEmoji: '🥗➡️🍗',
    slogan: '你不是不自律，你只是每次都挑对了破功时机。',
    eyebrow: '饮食人格已归档',
    matchLine: '理智仍在线，只是常被食欲插队',
    systemConclusion: '你的理智并没有消失，只是在奶茶、炸物和“就这一顿”面前会暂时交出管理权。系统对这一模式已经非常熟悉。',
    detailedDescription:
      '你不是完全不想控制饮食，相反，你经常是认真想过的。问题在于你总能在最脆弱、最需要安慰、最值得给自己一点奖励的时候，精准地替破功找到合理理由。你会点无糖，会想控卡，会在心里说这周一定稳住，但食欲一旦带着情绪一起上来，计划就会自动进入弹性执行状态。你不是没有原则，你只是非常擅长让原则先等一下。',
  },
  CARB: {
    image: '/images/personalities/carb.png',
    visualEmoji: '🍜',
    slogan: '主食不是配角，是你的核心秩序。',
    eyebrow: '主食人格已上线',
    matchLine: '饱腹感优先级高于花里胡哨',
    systemConclusion: '系统确认你对碳水有稳定而清晰的信任。你不是嘴馋，你只是知道一顿饭不该只看起来像一顿饭。',
    detailedDescription:
      '对你来说，主食从来不是可有可无的背景板，而是一顿饭成立的基础设施。面、饭、粉、饺子这些东西带给你的，不只是热量，更像是秩序、踏实和“我今天至少还行”的底气。你可能会尊重搭配、也会看健康版本，但只要主食感不够，这顿饭在你心里就像没正式开始。别人吃饱是结果，你把吃饱当成前提。',
  },
  SPCY: {
    image: '/images/personalities/spcy.png',
    visualEmoji: '🌶️',
    slogan: '微辣只是你的社交伪装。',
    eyebrow: '隐藏辣度人格已激活',
    matchLine: '味觉刺激值明显高于平均线',
    systemConclusion: '系统观察到你对辣味并不是兴趣，而是一种长期稳定的情绪唤醒机制。你需要一点刺激，生活才像真的开始。',
    detailedDescription:
      '你对辣的喜欢，已经不是“能吃一点”那么简单。你会用辣度给一顿饭定调，也会靠那种舌头被点醒的感觉把状态拉回来。越是疲惫、无聊或者一天过得没什么存在感的时候，你越需要一点辣味来提醒自己还活着。你可能嘴上会说微辣也行，但真正让你满意的，往往还是那一口更有冲击力的狠劲。',
  },
  HLTH: {
    image: '/images/personalities/hlth.png',
    visualEmoji: '🥣',
    slogan: '你对舒服这件事，有近乎职业级的认真。',
    eyebrow: '身体友好人格已激活',
    matchLine: '你的饮食逻辑自洽且长期主义',
    systemConclusion: '系统判断你吃饭时会同时考虑当下口味和明天状态。你不是无趣，你只是比很多人更早明白“吃完舒服”有多值钱。',
    detailedDescription:
      '你并不是不懂快乐，只是你很清楚真正可持续的快乐，不应该总以第二天浮肿、胃不舒服或精神下线为代价。你会看食材、看负担、看吃完之后身体怎么反馈，也更愿意选择那种稳定、低噪音、不会让自己后悔的饭。别人觉得你克制，你自己知道这不是忍耐，是经验。你不是把嘴瘾压下去，你是把身体感受提到了更靠前的位置。',
  },
  SWET: {
    image: '/images/personalities/swet.png',
    visualEmoji: '🍰',
    slogan: '你的情绪修复，常常需要一点糖分配合。',
    eyebrow: '甜口人格已识别',
    matchLine: '糖分安抚机制运行稳定',
    systemConclusion: '系统检测到你对甜口并非一时冲动，而是一种成熟的情绪补偿手段。你知道什么时候该给自己来点快的。',
    detailedDescription:
      '你和甜食的关系里，带着一种很难替代的即时安抚感。很多人说甜只是嘴馋，但对你来说，甜口经常意味着状态修复、心情缓冲和一点“今天至少还有东西能让我高兴”的支撑。你可能不会顿顿都要很甜，但只要情绪有波动，甜品、点心、奶香口感就会被迅速抬到候选名单前排。你不是幼稚，你只是很懂糖分在某些时刻的现实价值。',
  },
  STRT: {
    image: '/images/personalities/strt.png',
    visualEmoji: '🍢',
    slogan: '真正能救命的饭，通常就在楼下拐角。',
    eyebrow: '街巷人格已归档',
    matchLine: '你的胃比流量更相信老地方',
    systemConclusion: '系统判断你不是不懂精致，而是更懂真实世界里什么最靠谱。你对小馆子和落地感有非常稳定的偏爱。',
    detailedDescription:
      '你吃饭时最看重的东西，往往不是滤镜和故事，而是效率、口碑、熟悉感和真实执行力。楼下快餐、社区小馆、常去那家沙县或者老牌面馆，在你这儿都有远高于网红店的可信度。你不是没有审美，你只是知道大多数工作日里，真正重要的是这顿饭能不能迅速把人托住。你的人格里有很强的烟火气，也有很成熟的现实感。',
  },
  TREN: {
    image: '/images/personalities/tren.png',
    visualEmoji: '📸',
    slogan: '你不是跟风，你是在为热点做实地勘察。',
    eyebrow: '探店人格已激活',
    matchLine: '新鲜感对你的吸引力持续偏高',
    systemConclusion: '系统发现你对新店、限定、热度和“这家最近很火”这类信号反应明显。你吃饭时，体验感本身就是主菜。',
    detailedDescription:
      '你对吃饭这件事有一种天然的内容感。新店、限定、排队、隐藏菜单、朋友群里突然刷屏的地址，都很容易点亮你的行动欲。你不只是想吃饱，你还想体验、想判断、想知道这家到底值不值、到底有没有必要下一次再带人来。别人会说你爱跟风，但你自己知道，这其实是一种对新鲜感和参与感的稳定追求。你吃饭，不止是在吃饭。',
  },
  MIDN: {
    image: '/images/personalities/midn.png',
    visualEmoji: '🌙🍜',
    slogan: '深夜一饿，理智就自动切成省电模式。',
    eyebrow: '深夜人格已解锁',
    matchLine: '夜间食欲驱动明显增强',
    systemConclusion: '系统记录到你的白天和深夜像两套饮食人格。白天可能讲逻辑，到了晚上通常由食欲和情绪共同执政。',
    detailedDescription:
      '你很可能不是那种全天都在乱吃的人，真正的问题通常出现在夜里。白天的疲惫、拖延的情绪、没来得及安顿好的食欲，都会在深夜一起回来敲门。你不是不知道这时候最好别点，但一想到热汤、面、饺子、麻辣烫之类能立刻托住人的东西，理智就会自动开始找台阶。你不是管不住自己，你只是太需要夜里那一点确切的安慰。',
  },
  MOOD: {
    image: '/images/personalities/mood.png',
    visualEmoji: '😭🍚',
    slogan: '你不是在点餐，你是在给情绪找出口。',
    eyebrow: '情绪人格识别完成',
    matchLine: '你的吃饭决策明显受心情驱动',
    systemConclusion: '系统确认你的食欲和情绪并不是平行线，而是高度联动。你以为你在选吃的，其实是情绪先做了决定。',
    detailedDescription:
      '你今天吃什么，经常不完全取决于饿不饿，而是取决于累不累、烦不烦、值不值得奖励自己。快乐的时候你想庆祝，难受的时候你想安慰，普通的一天你也可能想靠一顿饭给自己来点起伏。别人点餐时在做选择，你点餐时更像在处理情绪。你不是不讲道理，你只是内心那套“今天需要被怎样安抚”的系统，运行得比别人更明显。',
  },
  LITE: {
    image: '/images/personalities/lite.png',
    visualEmoji: '🍵',
    slogan: '你的胃喜欢秩序，你也一样。',
    eyebrow: '清汤人格已归档',
    matchLine: '轻负担偏好显著高于随机水平',
    systemConclusion: '系统检测到你对清淡、顺口、吃完不难受的食物有稳定偏好。这不是寡淡，这是你的人格秩序在维护现场。',
    detailedDescription:
      '你不是不能接受刺激和重口，只是你越来越清楚，真正适合自己的饭，往往是吃完后状态还在线的那一类。清汤、原味、蒸煮、轻负担这些关键词，在别人那里可能叫“将就”，在你这里更像“高效且有远见”。你知道什么食物会让自己舒服，也知道什么样的满足感是短期热闹、长期麻烦。你吃得克制，但并不委屈。',
  },
  DELV: {
    image: '/images/personalities/delv.png',
    visualEmoji: '🛵',
    slogan: '你不是懒，你只是很懂工作日生存。',
    eyebrow: '外卖人格已激活',
    matchLine: '低决策成本对你极具吸引力',
    systemConclusion: '系统已经确认你在效率、便利和现实节奏之间形成了成熟吃饭策略。你不是随便点，你是在优化存活流程。',
    detailedDescription:
      '你对外卖的依赖里，其实有很强的现实逻辑。忙、累、通勤长、下班脑子空、没社交电量，这些都会让“赶紧把饭解决掉”成为比“认真研究今晚吃什么”更优先的任务。你不是不挑，而是把挑选标准放在了效率、稳定和最低决策成本上。谁送得快、谁份量稳、谁最不容易踩雷，你心里往往比平台推荐还清楚。',
  },
  HOME: {
    image: '/images/personalities/home.png',
    visualEmoji: '🍳',
    slogan: '熟悉的那口热饭，比惊喜更能托住你。',
    eyebrow: '家常人格已识别',
    matchLine: '你的满足感更偏向稳定而非刺激',
    systemConclusion: '系统判断你对家常味、熟悉感和“像过日子的一顿饭”有明显偏爱。你不是保守，你只是很懂什么最能长期安抚人。',
    detailedDescription:
      '你喜欢的饭，很多时候并不需要多新奇、多炸裂或者多有噱头。番茄牛肉、家常小炒、热汤热饭、熟悉的那种咸淡和油香，对你来说已经足够构成非常完整的安慰。你更看重一顿饭能不能长期相处，能不能在疲惫的时候把人托住，而不是只追求短时间的强刺激。别人可能追热点，你更相信回头率高的那种踏实好吃。',
  },
  SAUC: {
    image: '/images/personalities/sauc.png',
    visualEmoji: '🥣🧂',
    slogan: '真正决定成败的，常常是最后那一勺小料。',
    eyebrow: '细节味觉人格已激活',
    matchLine: '你对配比和口感层次有稳定执念',
    systemConclusion: '系统发现你对味道的关注点，常常落在别人懒得细分的地方。你不是挑，你只是很懂细节决定快乐。',
    detailedDescription:
      '你对吃这件事的讲究，很少是表面的。别人觉得差不多就行的蘸料、甜度、配比、口感层次，在你这儿都有更精确的标准。你会知道哪一口少了点什么，也会下意识去修正让它更像你想要的样子。你不是在无意义地复杂化流程，而是在追求那种“这一口终于对了”的满足。你的味觉系统，明显比平均值更爱做精细活。',
  },
  BUFF: {
    image: '/images/personalities/buff.png',
    visualEmoji: '🍽️',
    slogan: '你不是能吃，你是很会吃。',
    eyebrow: '战略型吃饭人格已归档',
    matchLine: '饱足感与性价比同时进入计算',
    systemConclusion: '系统检测到你对份量、回本感和配置效率有天然敏感度。你不是冲动型食客，你更像战术型选手。',
    detailedDescription:
      '你吃饭时会自动进入资源配置模式，这件事几乎已经成了本能。什么东西最顶饱、哪类菜最值、怎么选才能既满足又不亏，你心里通常都有一套很清晰的顺序。别人可能只是随便吃一顿，你更像在进行一场有目标的部署。你不是只在乎量，而是在乎这顿饭是不是在预算、饱腹感和快乐之间做到了足够合理的平衡。',
  },
};
