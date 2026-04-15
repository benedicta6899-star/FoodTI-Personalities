import type { Question } from '../types';

const option = (id: string, label: string, scores: Record<string, number>, hint: string) => ({
  id,
  label,
  scores,
  hint,
});

export const questions: Question[] = [
  {
    id: 1,
    dimension: 'diet',
    text: '如果你最近在减脂，今天中午最像你的真实状态是？',
    options: [
      option('a', '吃草！今天做人要规矩', { diet: 3, wellness: 2, health: 2 }, '你这不是在吃饭，是在和热量进行一场精算级谈判。'),
      option('b', '点个清淡的汤面，假装努力', { diet: 2, betrayer: 2, lateNight: 1, fakeDiscipline: 1 }, '系统检测到你白天很冷静，但夜里容易和食欲私下和解。'),
      option('c', '白天忍一忍，晚上补回来', { betrayer: 3, diet: 2, indecisive: 1, mood: 1 }, '你不是没有计划，你只是给计划留了一个非常灵活的后门。'),
      option('d', '不管了，这顿先吃点像样的', { carb: 2, hotpot: 1, comfort: 2, enjoy: 1 }, '你的饮食逻辑非常朴素：人都快累没了，先别委屈胃。'),
    ],
  },
  {
    id: 2,
    dimension: 'breakfast',
    text: '早餐最容易让你瞬间“恢复人样”的是？',
    options: [
      option('a', '喝点热乎的，豆浆包子就行', { wellness: 2, comfort: 1, health: 1 }, '系统判断你属于“早上先把胃哄明白”的稳定派。'),
      option('b', '得来点顶饱的，饭团手抓饼', { carb: 2, street: 1, breakfast: 1 }, '你对早餐的要求很现实：别讲故事，先让我撑到中午。'),
      option('c', '冰美式配个小甜口，清醒和快乐都要有', { milkTea: 2, dessert: 1, trend: 1 }, '你连恢复出厂设置都带一点都市丽人的仪式感。'),
      option('d', '随便，中午再狠狠吃回来', { lateNight: 1, hotpot: 1, betrayer: 2, carb: 1 }, '系统提醒你：你的胃正在默默记下这笔账。'),
    ],
  },
  {
    id: 3,
    dimension: 'spicy',
    text: '点餐时看到辣度选项，你通常会？',
    options: [
      option('a', '微辣，从心开始', { wellness: 1, spicy: 1, lite: 1 }, '你和辣味的关系很体面，主打一个点到为止。'),
      option('b', '中辣，正常发挥', { spicy: 2, cautious: 1 }, '你很会在人设和肠胃之间找一个社交安全区。'),
      option('c', '特辣，挑战极限', { spicy: 3, hotpot: 1, sichuan: 1 }, '系统已经听见你的味蕾在说：别拿微辣敷衍我。'),
      option('d', '嘴上微辣，手却很诚实地选中辣+', { spicy: 2, indecisive: 1, betrayer: 1, mood: 1 }, '你表面在犹豫，手其实已经替你滑到更狠那一档了。'),
    ],
  },
  {
    id: 4,
    dimension: 'trend',
    text: '你对“排队2小时的网红店”的态度？',
    options: [
      option('a', '冲！人生的乐趣在于打卡', { trend: 3, milkTea: 2, foodie: 1 }, '你不是去吃饭，你是在参与一场当代热点现场。'),
      option('b', '让子弹飞一会儿，过气了我再去', { street: 1, wellness: 1, cautious: 1 }, '系统感觉你对“等别人踩完雷再去”这件事很有耐心。'),
      option('c', '朋友拉我去，我就去', { indecisive: 2, trend: 1, social: 1 }, '你对美食的热情，常常要等群聊气氛先热起来。'),
      option('d', '排队的功夫，我能吃三家不踩雷的', { street: 3, comfort: 1, local: 1 }, '你的胃比流量更务实，知道真正靠谱的饭通常就在附近。'),
    ],
  },
  {
    id: 5,
    dimension: 'drink',
    text: '你和奶茶/茶饮的关系更像？',
    options: [
      option('a', '浅尝辄止的普通朋友', { milkTea: 1, wellness: 1 }, '你和奶茶属于成熟关系，见面快乐，不见面也不抓狂。'),
      option('b', '互相拉扯的暧昧对象', { milkTea: 2, betrayer: 2, fakeDiscipline: 1 }, '系统检测到你很会给快乐套上一层“我已经克制了”的外壳。'),
      option('c', '锁定本命，非他不可', { milkTea: 3, trend: 1, mtex: 1 }, '你的饮品选择已经不是消费行为，而是个人方法论。'),
      option('d', '只在情绪崩溃时见面的患难之交', { wellness: 2, health: 1 }, '你对身体反馈这件事，比对新品上架更敏感。'),
    ],
  },
  {
    id: 6,
    dimension: 'comfort',
    text: '最能“安慰”你的一顿饭通常是？',
    options: [
      option('a', '热气腾腾的，有锅气的', { hotpot: 3, comfort: 2, social: 1 }, '你的情绪修复方式很明确：先来点热气把人重新拼起来。'),
      option('b', '扎扎实实一大碗，顶饱', { carb: 3, comfort: 1, home: 1 }, '你对安全感的理解，经常可以被一大口主食精准翻译。'),
      option('c', '糖油混合物，快乐老家', { dessert: 2, milkTea: 1, betrayer: 1, mood: 1 }, '你安慰自己的方式向来讲究全链路闭环。'),
      option('d', '清淡舒服，吃完没负担', { wellness: 3, lite: 2, health: 1 }, '你属于那种会把“舒服”也算进满足感的人。'),
    ],
  },
  {
    id: 7,
    dimension: 'region',
    text: '如果一周只能保留一种风味，你选？',
    options: [
      option('a', '辣的，痛的，过瘾的', { sichuan: 3, spicy: 2, hotpot: 1 }, '系统发现你的人生底味，大概率已经被麻辣重新校准过。'),
      option('b', '鲜的，清的，舒服的', { guangdong: 3, wellness: 1, lite: 1 }, '你很懂那种“不吵闹但越吃越顺”的高级舒服。'),
      option('c', '香的，厚的，管饱的', { dongbei: 3, carb: 1, buff: 1 }, '你的胃对“实在”二字有一种近乎本能的信任。'),
      option('d', '甜的，浓的，有层次的', { jiangzhe: 3, dessert: 1, sweet: 1 }, '你对风味的要求有点细，讲究一个精致和顺口同时成立。'),
    ],
  },
  {
    id: 8,
    dimension: 'delivery',
    text: '下班后最常出现的吃饭场景是？',
    options: [
      option('a', '外卖到家，我的赛博母亲', { delivery: 3, street: 1, delv: 1 }, '系统判断你已经把“低决策成本活下去”研究明白了。'),
      option('b', '楼下饭堂，我的第二厨房', { street: 2, comfort: 1, local: 1 }, '你对吃饭的执行力很强，主打一个下楼就能结束战斗。'),
      option('c', '找个馆子，慢慢回血', { hotpot: 1, trend: 1, milkTea: 1, foodie: 1 }, '你下班后的胃，不止想填饱，还想顺便被生活哄一下。'),
      option('d', '厨房亮灯，家的味道', { wellness: 2, home: 2 }, '系统感觉你对“热乎、熟悉、别出幺蛾子”这件事很有执念。'),
    ],
  },
  {
    id: 9,
    dimension: 'late',
    text: '晚上10点后突然饿了，你会？',
    options: [
      option('a', '修仙，喝口水骗自己', { diet: 2, wellness: 2, strict: 1 }, '你在深夜和食欲之间的关系，多少带点意志力对抗赛。'),
      option('b', '健康点，酸奶水果', { diet: 2, snack: 2, health: 1 }, '你很会在“别疯”与“别饿死”之间给自己留条路。'),
      option('c', '打开外卖软件，开始罪恶', { lateNight: 3, delivery: 1, betrayer: 2, mood: 1 }, '系统看到你在深夜最擅长的事，是先挣扎再投降。'),
      option('d', '煮点速冻，必须吃口热乎的', { carb: 2, hotpot: 1, lateNight: 2, midn: 1 }, '你的深夜哲学很清晰：热乎主食能把灵魂接回来。'),
    ],
  },
  {
    id: 10,
    dimension: 'social',
    text: '朋友问“随便吃点啥”，你脑内第一反应是？',
    options: [
      option('a', '盖饭/面/饺子，像样的一餐', { carb: 2, street: 1 }, '系统发现你对“这顿必须像一顿饭”这件事很认真。'),
      option('b', '火锅/烤肉，人多就得热闹', { hotpot: 2, comfort: 1, social: 1 }, '你嘴上说随便，脑子里其实已经把锅底都选好了。'),
      option('c', '简餐/轻食，保命要紧', { wellness: 2, diet: 1, lite: 1 }, '你已经开始替明天的自己提前打理状态了。'),
      option('d', '坐着舒服的地方，能慢慢吃、顺便聊聊天的那种', { milkTea: 2, dessert: 1, trend: 1 }, '你对聚餐的理解，是吃和氛围最好都别输。'),
    ],
  },
  {
    id: 11,
    dimension: 'dessert',
    text: '饭后嘴巴寂寞，你通常会？',
    options: [
      option('a', '搞点水果酸奶，清爽收尾', { wellness: 2, dessert: 1, lite: 1 }, '你对“收尾”也讲究一个轻盈体面。'),
      option('b', '必须来点甜的，不然白吃了', { dessert: 3, sweet: 2 }, '系统判断你吃饭的最后一步，经常要交给糖分完成闭环。'),
      option('c', '看看有没有奶茶优惠券', { milkTea: 2, delivery: 1, mtex: 1 }, '你的嘴巴寂寞时，第一反应通常是让饮品来接管局面。'),
      option('d', '再扒两口饭，碳水才是归宿', { carb: 2, carbCore: 1 }, '你对“真正有用的安慰”有非常具体的定义。'),
    ],
  },
  {
    id: 12,
    dimension: 'discipline',
    text: '“少油少糖少盐”对你来说更像？',
    options: [
      option('a', '我的座右铭，吃重了难受', { wellness: 3, health: 2, strict: 1 }, '你不是嘴硬型选手，你是真的会在意身体第二天怎么回你消息。'),
      option('b', '早A晚B，白天自律晚上放肆', { diet: 1, betrayer: 3, fakeDiscipline: 1 }, '系统记录到你对自律是认可的，只是执行时间常常不稳定。'),
      option('c', '道理我都懂，但筷子不听', { dessert: 1, carb: 1, comfort: 2, mood: 1 }, '你的价值排序很诚实，快乐这项通常不会排太后。'),
      option('d', '参考意见，不是人生准则', { betrayer: 2, indecisive: 1, fakeDiscipline: 1 }, '你对健康口号的态度，基本停留在“我知道，但先别催”。'),
    ],
  },
  {
    id: 13,
    dimension: 'soup',
    text: '天气不好时，你最想被什么治愈？',
    options: [
      option('a', '带汤的，热乎的，暖身子的', { hotpot: 3, spicy: 1, comfort: 2 }, '你的治愈系食物必须带热气，最好还能顺便给情绪加热。'),
      option('b', '清淡的，稳住的，不添乱的', { wellness: 2, guangdong: 1, lite: 1 }, '系统发现你很会优先安抚胃，再慢慢安抚自己。'),
      option('c', '炸鸡奶茶，我的精神创可贴', { dessert: 1, milkTea: 1, betrayer: 1, mood: 2 }, '你在坏天气里的情绪处理方式，相当讲究立刻见效。'),
      option('d', '扎实碳水，给我“活着”的实感', { carb: 3, comfort: 1 }, '你的应对策略很成熟：别分析了，先吃饱。'),
    ],
  },
  {
    id: 14,
    dimension: 'brand',
    text: '如果只能选一个“高频救命品牌”，你选？',
    options: [
      option('a', '现做现吃，回血最快的', { hotpot: 3, spicy: 1, brandHot: 1 }, '系统感觉你对热锅体系有一种近乎信仰级的稳定依赖。'),
      option('b', '随手可得，喝着顺口、负担不大的', { milkTea: 3, trend: 1, brandDrink: 1 }, '你的人生救援包里，很可能常备一杯带情绪价值的喝的。'),
      option('c', '主食稳定、分量扎实，永远不踩雷的', { carb: 2, street: 2, brandStaple: 1 }, '你对“能吃饱、好落地”的品牌生态非常有安全感。'),
      option('d', '最省心，闭眼点都行的', { wellness: 2, street: 1, home: 1 }, '你属于那种看见稳妥选项，心里就会先松一口气的人。'),
    ],
  },
  {
    id: 15,
    dimension: 'snack',
    text: '办公室下午四点，什么最诱惑你？',
    options: [
      option('a', '“有人一起点奶茶吗？”的审判', { milkTea: 2, dessert: 1, delivery: 1 }, '系统检测到你对“来一杯吗”这五个字的抵抗力比较一般。'),
      option('b', '一口一个的小零食，吃着没压力', { dessert: 2, sweet: 1 }, '你下午的情绪续航，经常想靠一口甜的来续命。'),
      option('c', '能扛饿到晚上的硬货', { carb: 2, snack: 1 }, '你很懂下午崩盘之前，先给自己加点真正管用的。'),
      option('d', '（摸肚子）今天还是算了吧', { wellness: 2, diet: 1, health: 1 }, '你在零食这件事上，明显更倾向于“别给今晚埋雷”。'),
    ],
  },
  {
    id: 16,
    dimension: 'speed',
    text: '赶时间时，你更容易接受？',
    options: [
      option('a', '便利店拼配，快且稳定', { wellness: 1, street: 1, diet: 1 }, '你的吃饭策略很像成熟打工人：快、稳、别失控。'),
      option('b', '老地方打包，不费脑子', { street: 3, local: 1 }, '系统判断你对“少想一步”这件事有很深的现实智慧。'),
      option('c', '喝的+小吃，糊弄学大师', { milkTea: 2, delivery: 1, delv: 1 }, '你赶时间时，连吃饭都希望走轻量化路径。'),
      option('d', '热乎的，别是汤汤水水，吃完像没吃过', { hotpot: 1, carb: 1, comfort: 2 }, '你对匆忙时段的要求很明确：效率归效率，胃不能敷衍。'),
    ],
  },
  {
    id: 17,
    dimension: 'weekend',
    text: '周末“奖励自己”时，你更可能点？',
    options: [
      option('a', '大餐！要有“值了”的仪式感', { hotpot: 3, spicy: 1, social: 1 }, '你的周末奖励机制里，“热闹”和“热气”通常要一起到位。'),
      option('b', '奶茶炸鸡小蛋糕，快乐三件套', { milkTea: 2, dessert: 2, mood: 1 }, '你对周末的尊重，往往体现在快乐配置拉满。'),
      option('c', '硬菜！必须吃到扶墙出', { carb: 3, carbCore: 1 }, '你很清楚什么才叫真正像样的一顿奖励餐。'),
      option('d', '吃好点，但明天别让我后悔', { wellness: 2, trend: 1, lite: 1 }, '你连奖励自己都想兼顾体面和后续状态。'),
    ],
  },
  {
    id: 18,
    dimension: 'friends',
    text: '和朋友口味冲突时，你最常？',
    options: [
      option('a', '据理力争，捍卫我想吃的', { hotpot: 2, comfort: 1, social: 1 }, '你对“这顿至少得热乎”这件事，立场相当稳定。'),
      option('b', '“我都行，看你们想吃啥”', { milkTea: 2, indecisive: 1, dessert: 1 }, '系统感觉你在餐桌分歧里，属于柔性摇摆那一派。'),
      option('c', '“要不…吃面？”（安全牌）', { carb: 2, street: 1 }, '你很懂聚餐本质：别整太花，先让大家都能吃饱。'),
      option('d', '我提个折中方案，大家将就', { wellness: 2, diet: 1, health: 1 }, '你即使随大流，也会默默给自己留一个更稳的落点。'),
    ],
  },
  {
    id: 19,
    dimension: 'identity',
    text: '你觉得自己最像哪种“吃饭人格”？',
    options: [
      option('a', '不吃主食，等于没吃', { carb: 3, carbCore: 2 }, '你的人生底层逻辑之一，大概就是这顿得像一顿饭。'),
      option('b', '吃舒服比吃刺激更重要', { wellness: 3, health: 2 }, '你对“舒服”这件事有长期主义者的认真。'),
      option('c', '不吃口热乎的，人暖不过来', { hotpot: 3, hotFood: 2 }, '系统听懂了，你需要的不是饭，是热气带来的复活感。'),
      option('d', '喝什么搭配什么，是门学问', { milkTea: 3, sauc: 1 }, '你的味觉重点，经常落在别人容易忽略的快乐细节上。'),
    ],
  },
  {
    id: 20,
    dimension: 'reverse',
    text: '如果今天必须“收一收”，你最能接受？',
    options: [
      option('a', '饭可以只吃半碗，但不能没有', { carb: 2, comfort: 1, carbCore: 1 }, '你的核心诉求很清楚：可以收，但不能收得像受罚。'),
      option('b', '看着清淡但好吃不至于委屈的', { hotpot: 2, diet: 2, betrayer: 1, health: 1 }, '你很会给自己找那种“不算放纵，也不算太惨”的折中解。'),
      option('c', '喝杯奶茶/吃块饼干，骗过嘴巴', { milkTea: 1, dessert: 1, betrayer: 1, fakeDiscipline: 1 }, '你很会用“我已经选无糖了”给自己做情绪缓冲。'),
      option('d', '直接水煮一切，别给我选择', { wellness: 3, diet: 2, lite: 1 }, '系统判断你在收一收这件事上，执行力是在线的。'),
    ],
  },
  {
    id: 21,
    dimension: 'budget',
    text: '你对“高性价比吃顿好饭”的理解是？',
    options: [
      option('a', '有点小快乐，就算值', { milkTea: 2, dessert: 1, mood: 1 }, '系统确认你在快乐消费这件事上有自己的衡量公式。'),
      option('b', '便宜但没吃饱，等于浪费钱', { carb: 2, dongbei: 1, buff: 1 }, '你对“值不值”的判断标准，非常朴素也非常坚定。'),
      option('c', '丰俭由人，自己搭配最值', { hotpot: 2, street: 1, local: 1 }, '你对性价比的理解，带一点“可自由配置才是真尊重”。'),
      option('d', '不贵，舒服，顺口就行', { wellness: 1, street: 2, home: 1 }, '你很擅长在现实预算里，把一顿饭过得不寒酸。'),
    ],
  },
  {
    id: 22,
    dimension: 'temperature',
    text: '比起冷食，你对热食的执念？',
    options: [
      option('a', '必须有，吃着舒服', { hotpot: 1, comfort: 1 }, '系统感觉你确实偏心热食，只是还保持着表面克制。'),
      option('b', '还好，好吃就行', { street: 1, lite: 1 }, '你对温度这件事比较佛，属于能解决问题就行派。'),
      option('c', '不仅要热，还得有点刺激感才到位', { hotpot: 2, spicy: 2, sichuan: 1 }, '你不是在吃饭，你是在追求一种足够有存在感的开场。'),
      option('d', '最好热乎带气，吃完复活', { hotpot: 3, spicy: 1, hotFood: 2 }, '你的胃对“带汤热乎”这四个字明显有额外好感。'),
    ],
  },
  {
    id: 23,
    dimension: 'sweet',
    text: '你对“甜”的态度更像？',
    options: [
      option('a', '甜是刚需，是情绪急救', { dessert: 3, sweet: 2, mood: 1 }, '系统看到你一难受，糖分就会被自动抬进候选名单。'),
      option('b', '可以甜，但最好配着别的', { dessert: 2, milkTea: 2, mtex: 1 }, '你对甜不是单点突破，而是讲究一个搭配着来。'),
      option('c', '可要可不要，太甜反而腻', { wellness: 1, lite: 1 }, '你和甜口的距离感，多少带一点成年人式理智。'),
      option('d', '看心情，今天高兴就来点', { dessert: 1, milkTea: 1 }, '你对甜的态度很会拿捏，属于看场合给面子。'),
    ],
  },
  {
    id: 24,
    dimension: 'regional',
    text: '当你想吃“有地方感”的东西时，想到？',
    options: [
      option('a', '精致讲究，层次丰富的', { jiangzhe: 3, dessert: 1, sweet: 1 }, '你很容易被那种细腻、讲究、带点甜口记忆的风味打动。'),
      option('b', '扎实顶饱，存在感强的', { dongbei: 3, carb: 1, buff: 1 }, '你对地域美食的热爱，明显更看重豪爽和实在。'),
      option('c', '清爽舒服，细水长流的', { guangdong: 3, wellness: 1, lite: 1 }, '你对“地方感”的理解，更像是一种温和但很顺的精细舒服。'),
      option('d', '味儿冲的，记忆点强的', { sichuan: 3, hotpot: 1, spicy: 2 }, '系统判断你心里的地域风味坐标，大概率偏向热辣那一边。'),
    ],
  },
  {
    id: 25,
    dimension: 'emotion',
    text: '心情很差时，你更可能靠什么自救？',
    options: [
      option('a', '吃点温和的，别再刺激我', { wellness: 2, health: 2, lite: 1 }, '你在低落的时候，反而更会替身体收住局面。'),
      option('b', '热汤热饭，先把人安顿好', { hotpot: 2, comfort: 2, mood: 1 }, '你的情绪急救方案很明确：先给胃一点像样的安慰。'),
      option('c', '干饭！吃饱了再哭！', { carb: 3, comfort: 1, mood: 1 }, '你解决问题的第一步，常常是先别让自己饿着。'),
      option('d', '糖分！立刻马上！', { milkTea: 2, dessert: 2, mood: 2 }, '系统感觉你对情绪低谷的处理方式，讲究立刻回血。'),
    ],
  },
  {
    id: 26,
    dimension: 'loyalty',
    text: '喜欢一家店，你会因为什么复购？',
    options: [
      option('a', '长期吃也不腻，身体和钱包都友好', { wellness: 2, loyalty: 1, health: 1 }, '你不是容易恋旧，你只是很珍惜长期相处起来舒服的饭。'),
      option('b', '细节到位，连饮料小菜都对我胃口', { milkTea: 2, sauc: 1, loyalty: 1 }, '你会反复回头的店，通常都很懂你的味觉小脾气。'),
      option('c', '味道稳定，每次都能把我状态拉回来', { hotpot: 2, loyalty: 1, comfort: 1 }, '你对复购的要求很朴素：只要它稳定安慰我，我就稳定回来。'),
      option('d', '踏实，吃完不会有虚度一顿的失落', { carb: 2, loyalty: 1, carbCore: 1 }, '系统感觉你对“每次都能稳稳吃爽”这件事很忠诚。'),
    ],
  },
  {
    id: 27,
    dimension: 'identity',
    text: '别人说你“吃饭很有自己的一套”是夸你？',
    options: [
      option('a', '“我对奶茶甜度冰量很严格”', { milkTea: 2, mtex: 2 }, '你在饮品世界里不是随缘派，更像有固定偏好的评委。'),
      option('b', '“没主食？那这顿不算吃饭”', { carb: 2, carbCore: 2 }, '你的饮食原则非常明确：一顿饭不能只看起来像饭。'),
      option('c', '“我知道什么能吃一辈子”', { wellness: 2, health: 2, hlth: 1 }, '你在吃这件事上，已经逐渐长成了懂自己的人。'),
      option('d', '“嗯，我对火锅蘸料很有研究”', { hotpot: 2, sauc: 2, hotp: 1 }, '系统确认你对“好吃”这件事，确实有一套可执行标准。'),
    ],
  },
  {
    id: 28,
    dimension: 'finish',
    text: '测试结束了，如果现在就替你决定今天吃什么，你最希望它？',
    options: [
      option('a', '可行，吃完我不会骂你', { wellness: 2, diet: 2, health: 2 }, '系统发现你现在最需要的，不是刺激，是一个靠谱答案。'),
      option('b', '实在点，能顶饱不糊弄', { carb: 2, comfort: 2, carbCore: 1 }, '你的胃已经替你表达了真实立场：今天得吃点扎实的。'),
      option('c', '热乎，满足，别太有负罪感', { hotpot: 2, diet: 1, betrayer: 1, health: 1 }, '系统听出来了，你想要的是满足感和体面同时在线。'),
      option('d', '最好喝的吃的都安排上', { milkTea: 2, dessert: 1, mood: 1 }, '你对“今天吃什么”的期待，明显不只是主食本体。'),
    ],
  },
];
