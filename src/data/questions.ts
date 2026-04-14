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
      option('a', '认真控卡，连酱汁都要算进去', { diet: 3, wellness: 2, health: 2 }, '你这不是在吃饭，是在和热量进行一场精算级谈判。'),
      option('b', '先吃清淡点，但晚上可能会想补偿一下', { diet: 2, betrayer: 2, lateNight: 1, fakeDiscipline: 1 }, '系统检测到你白天很冷静，但夜里容易和食欲私下和解。'),
      option('c', '白天说减脂，晚上看心情', { betrayer: 3, diet: 2, indecisive: 1, mood: 1 }, '你不是没有计划，你只是给计划留了一个非常灵活的后门。'),
      option('d', '减什么脂，先活过今天再说', { carb: 2, hotpot: 1, comfort: 2, enjoy: 1 }, '你的饮食逻辑非常朴素：人都快累没了，先别委屈胃。'),
    ],
  },
  {
    id: 2,
    dimension: 'breakfast',
    text: '早餐最容易让你瞬间恢复做人状态的是？',
    options: [
      option('a', '热豆浆 + 茶叶蛋 + 玉米', { wellness: 2, comfort: 1, health: 1 }, '系统判断你属于“早上先把胃哄明白”的稳定派。'),
      option('b', '手抓饼或饭团，主打一个迅速顶饱', { carb: 2, street: 1, breakfast: 1 }, '你对早餐的要求很现实：别讲故事，先让我撑到中午。'),
      option('c', '冰美式配个小甜口，清醒和快乐都要有', { milkTea: 2, dessert: 1, trend: 1 }, '你连恢复出厂设置都带一点都市丽人的仪式感。'),
      option('d', '不吃，留着中午狠狠干一顿', { lateNight: 1, hotpot: 1, betrayer: 2, carb: 1 }, '系统提醒你：你的胃正在默默记下这笔账。'),
    ],
  },
  {
    id: 3,
    dimension: 'spicy',
    text: '点餐时看到辣度选项，你通常会？',
    options: [
      option('a', '微辣就行，我主要是想吃味道', { wellness: 1, spicy: 1, lite: 1 }, '你和辣味的关系很体面，主打一个点到为止。'),
      option('b', '中辣，稳妥又不丢脸', { spicy: 2, cautious: 1 }, '你很会在人设和肠胃之间找一个社交安全区。'),
      option('c', '特辣，我尊重自己的舌头', { spicy: 3, hotpot: 1, sichuan: 1 }, '系统已经听见你的味蕾在说：别拿微辣敷衍我。'),
      option('d', '看今天心情，反正最后常常越点越辣', { spicy: 2, indecisive: 1, betrayer: 1, mood: 1 }, '你表面在犹豫，手其实已经替你滑到更狠那一档了。'),
    ],
  },
  {
    id: 4,
    dimension: 'trend',
    text: '你对“排队 2 小时的网红店”的态度？',
    options: [
      option('a', '排，不排不配活在互联网', { trend: 3, milkTea: 2, foodie: 1 }, '你不是去吃饭，你是在参与一场当代热点现场。'),
      option('b', '热度过了再说', { street: 1, wellness: 1, cautious: 1 }, '系统感觉你对“等别人踩完雷再去”这件事很有耐心。'),
      option('c', '看朋友去不去', { indecisive: 2, trend: 1, social: 1 }, '你对美食的热情，常常要等群聊气氛先热起来。'),
      option('d', '不可能排，楼下小馆更香', { street: 3, comfort: 1, local: 1 }, '你的胃比流量更务实，知道真正靠谱的饭通常就在附近。'),
    ],
  },
  {
    id: 5,
    dimension: 'drink',
    text: '你和奶茶/茶饮的关系更像哪一种？',
    options: [
      option('a', '一周一两次，算是理性相处', { milkTea: 1, wellness: 1 }, '你和奶茶属于成熟关系，见面快乐，不见面也不抓狂。'),
      option('b', '点无糖，但小料要自由', { milkTea: 2, betrayer: 2, fakeDiscipline: 1 }, '系统检测到你很会给快乐套上一层“我已经克制了”的外壳。'),
      option('c', '我有自己的固定搭配和隐藏菜单', { milkTea: 3, trend: 1, mtex: 1 }, '你的饮品选择已经不是消费行为，而是个人方法论。'),
      option('d', '能不喝就不喝，胃比嘴重要', { wellness: 2, health: 1 }, '你对身体反馈这件事，比对新品上架更敏感。'),
    ],
  },
  {
    id: 6,
    dimension: 'comfort',
    text: '最能安慰你的一顿饭通常是？',
    options: [
      option('a', '热汤热锅，最好边煮边吃', { hotpot: 3, comfort: 2, social: 1 }, '你的情绪修复方式很明确：先来点热气把人重新拼起来。'),
      option('b', '一大碗面或盖饭，吃完就踏实', { carb: 3, comfort: 1, home: 1 }, '你对安全感的理解，经常可以被一大口主食精准翻译。'),
      option('c', '炸鸡甜品奶茶套餐，快乐要来全套', { dessert: 2, milkTea: 1, betrayer: 1, mood: 1 }, '你安慰自己的方式向来讲究全链路闭环。'),
      option('d', '清汤、蒸菜或轻食，吃完身体舒服最重要', { wellness: 3, lite: 2, health: 1 }, '你属于那种会把“舒服”也算进满足感的人。'),
    ],
  },
  {
    id: 7,
    dimension: 'region',
    text: '如果一周只能保留一种风味体系，你会选？',
    options: [
      option('a', '麻辣鲜香这套我一辈子都可以', { sichuan: 3, spicy: 2, hotpot: 1 }, '系统发现你的人生底味，大概率已经被麻辣重新校准过。'),
      option('b', '清淡鲜甜、煲汤糖水那种舒服感', { guangdong: 3, wellness: 1, lite: 1 }, '你很懂那种“不吵闹但越吃越顺”的高级舒服。'),
      option('c', '大份量、硬菜、实在顶饱', { dongbei: 3, carb: 1, buff: 1 }, '你的胃对“实在”二字有一种近乎本能的信任。'),
      option('d', '偏甜口、精致点心、浓油赤酱也行', { jiangzhe: 3, dessert: 1, sweet: 1 }, '你对风味的要求有点细，讲究一个精致和顺口同时成立。'),
    ],
  },
  {
    id: 8,
    dimension: 'delivery',
    text: '下班后最常出现的吃饭场景是？',
    options: [
      option('a', '直接点外卖，省掉选择和社交', { delivery: 3, street: 1, delv: 1 }, '系统判断你已经把“低决策成本活下去”研究明白了。'),
      option('b', '楼下快餐店，快狠准解决', { street: 2, comfort: 1, local: 1 }, '你对吃饭的执行力很强，主打一个下楼就能结束战斗。'),
      option('c', '去有点仪式感的店坐一坐', { hotpot: 1, trend: 1, milkTea: 1, foodie: 1 }, '你下班后的胃，不止想填饱，还想顺便被生活哄一下。'),
      option('d', '家里简单做点，求稳', { wellness: 2, home: 2 }, '系统感觉你对“热乎、熟悉、别出幺蛾子”这件事很有执念。'),
    ],
  },
  {
    id: 9,
    dimension: 'late',
    text: '晚上 10 点后突然饿了，你最像哪种人？',
    options: [
      option('a', '喝水硬扛，扛过去就赢了', { diet: 2, wellness: 2, strict: 1 }, '你在深夜和食欲之间的关系，多少带点意志力对抗赛。'),
      option('b', '找点可控加餐，不能直接摆烂', { diet: 2, snack: 2, health: 1 }, '你很会在“别疯”与“别饿死”之间给自己留条路。'),
      option('c', '打开外卖看半小时，最后点了重口的', { lateNight: 3, delivery: 1, betrayer: 2, mood: 1 }, '系统看到你在深夜最擅长的事，是先挣扎再投降。'),
      option('d', '来点面、饺子、麻辣烫，人生总得有盼头', { carb: 2, hotpot: 1, lateNight: 2, midn: 1 }, '你的深夜哲学很清晰：热乎主食能把灵魂接回来。'),
    ],
  },
  {
    id: 10,
    dimension: 'social',
    text: '朋友问“随便吃点啥”，你脑内第一反应是？',
    options: [
      option('a', '火锅吧，谁能拒绝热乎的', { hotpot: 2, comfort: 1, social: 1 }, '你嘴上说随便，脑子里其实已经把锅底都选好了。'),
      option('b', '找个茶饮 + 轻食的地方拍拍照', { milkTea: 2, dessert: 1, trend: 1 }, '你对聚餐的理解，是吃和氛围最好都别输。'),
      option('c', '米饭面条饺子都行，只要能吃饱', { carb: 2, street: 1 }, '系统发现你对“这顿必须像一顿饭”这件事很认真。'),
      option('d', '清淡点吧，最近身体要稳一点', { wellness: 2, diet: 1, lite: 1 }, '你已经开始替明天的自己提前打理状态了。'),
    ],
  },
  {
    id: 11,
    dimension: 'dessert',
    text: '饭后嘴巴寂寞的时候，你通常会？',
    options: [
      option('a', '来点水果或酸奶，意思一下', { wellness: 2, dessert: 1, lite: 1 }, '你对“收尾”也讲究一个轻盈体面。'),
      option('b', '必须要有个甜的，今天才算完整', { dessert: 3, sweet: 2 }, '系统判断你吃饭的最后一步，经常要交给糖分完成闭环。'),
      option('c', '看有没有奶茶券，顺手点一杯', { milkTea: 2, delivery: 1, mtex: 1 }, '你的嘴巴寂寞时，第一反应通常是让饮品来接管局面。'),
      option('d', '直接加主食，甜品对我不如碳水实在', { carb: 2, carbCore: 1 }, '你对“真正有用的安慰”有非常具体的定义。'),
    ],
  },
  {
    id: 12,
    dimension: 'discipline',
    text: '“少油少糖少盐”这类口号对你来说更像？',
    options: [
      option('a', '执行标准，不然第二天不舒服', { wellness: 3, health: 2, strict: 1 }, '你不是嘴硬型选手，你是真的会在意身体第二天怎么回你消息。'),
      option('b', '白天相信，晚上容易摇摆', { diet: 1, betrayer: 3, fakeDiscipline: 1 }, '系统记录到你对自律是认可的，只是执行时间常常不稳定。'),
      option('c', '知道是对的，但我更想先快乐', { dessert: 1, carb: 1, comfort: 2, mood: 1 }, '你的价值排序很诚实，快乐这项通常不会排太后。'),
      option('d', '可以偶尔做做样子，别太较真', { betrayer: 2, indecisive: 1, fakeDiscipline: 1 }, '你对健康口号的态度，基本停留在“我知道，但先别催”。'),
    ],
  },
  {
    id: 13,
    dimension: 'soup',
    text: '天气不好时，你最想被哪类食物治愈？',
    options: [
      option('a', '番茄锅、热汤面、麻辣烫这种冒热气的', { hotpot: 3, spicy: 1, comfort: 2 }, '你的治愈系食物必须带热气，最好还能顺便给情绪加热。'),
      option('b', '粥、汤、蒸菜，胃先舒服下来', { wellness: 2, guangdong: 1, lite: 1 }, '系统发现你很会优先安抚胃，再慢慢安抚自己。'),
      option('c', '炸物 + 饮料，情绪恢复最快', { dessert: 1, milkTea: 1, betrayer: 1, mood: 2 }, '你在坏天气里的情绪处理方式，相当讲究立刻见效。'),
      option('d', '盖饭、焖饭、拌面，直接稳住', { carb: 3, comfort: 1 }, '你的应对策略很成熟：别分析了，先吃饱。'),
    ],
  },
  {
    id: 14,
    dimension: 'brand',
    text: '如果只能选一个“高频救命品牌”，你更偏向？',
    options: [
      option('a', '海底捞 / 麻辣烫这类热乎体系', { hotpot: 3, spicy: 1, brandHot: 1 }, '系统感觉你对热锅体系有一种近乎信仰级的稳定依赖。'),
      option('b', '喜茶 / 茶百道这类饮品体系', { milkTea: 3, trend: 1, brandDrink: 1 }, '你的人生救援包里，很可能常备一杯带情绪价值的喝的。'),
      option('c', '兰州拉面 / 沙县 / 黄焖鸡这类主食体系', { carb: 2, street: 2, brandStaple: 1 }, '你对“能吃饱、好落地”的品牌生态非常有安全感。'),
      option('d', '全家 / 711 / 家常菜这种稳妥体系', { wellness: 2, street: 1, home: 1 }, '你属于那种看见稳妥选项，心里就会先松一口气的人。'),
    ],
  },
  {
    id: 15,
    dimension: 'snack',
    text: '办公室下午四点最容易诱惑你的是什么？',
    options: [
      option('a', '奶茶拼单链接', { milkTea: 2, dessert: 1, delivery: 1 }, '系统检测到你对“来一杯吗”这五个字的抵抗力比较一般。'),
      option('b', '小蛋糕、饼干、甜口零食', { dessert: 2, sweet: 1 }, '你下午的情绪续航，经常想靠一口甜的来续命。'),
      option('c', '泡面、饭团、卤蛋这类抗饿选手', { carb: 2, snack: 1 }, '你很懂下午崩盘之前，先给自己加点真正管用的。'),
      option('d', '坚果 / 酸奶 / 水果，能稳住就行', { wellness: 2, diet: 1, health: 1 }, '你在零食这件事上，明显更倾向于“别给今晚埋雷”。'),
    ],
  },
  {
    id: 16,
    dimension: 'speed',
    text: '赶时间时，你更容易接受哪种解决方案？',
    options: [
      option('a', '便利店组合，快且可控', { wellness: 1, street: 1, diet: 1 }, '你的吃饭策略很像成熟打工人：快、稳、别失控。'),
      option('b', '社区小馆现成套餐，别让我再想', { street: 3, local: 1 }, '系统判断你对“少想一步”这件事有很深的现实智慧。'),
      option('c', '下单茶饮和小食，主打省脑子', { milkTea: 2, delivery: 1, delv: 1 }, '你赶时间时，连吃饭都希望走轻量化路径。'),
      option('d', '快速麻辣烫 / 米线，热乎还能吃饱', { hotpot: 1, carb: 1, comfort: 2 }, '你对匆忙时段的要求很明确：效率归效率，胃不能敷衍。'),
    ],
  },
  {
    id: 17,
    dimension: 'weekend',
    text: '周末“奖励自己”时，你更可能点什么？',
    options: [
      option('a', '火锅、烤肉、麻辣烫，热闹一点才值', { hotpot: 3, spicy: 1, social: 1 }, '你的周末奖励机制里，“热闹”和“热气”通常要一起到位。'),
      option('b', '奶茶 + 甜品 + 小吃，一套完整快乐', { milkTea: 2, dessert: 2, mood: 1 }, '你对周末的尊重，往往体现在快乐配置拉满。'),
      option('c', '大碗面 / 盖饭 / 煲仔饭，饱足才是真的', { carb: 3, carbCore: 1 }, '你很清楚什么才叫真正像样的一顿奖励餐。'),
      option('d', '好吃但没那么重负担的精致简餐', { wellness: 2, trend: 1, lite: 1 }, '你连奖励自己都想兼顾体面和后续状态。'),
    ],
  },
  {
    id: 18,
    dimension: 'friends',
    text: '和朋友口味冲突时，你最常做的事是？',
    options: [
      option('a', '坚持自己的热食阵地', { hotpot: 2, comfort: 1, social: 1 }, '你对“这顿至少得热乎”这件事，立场相当稳定。'),
      option('b', '看谁今天更想喝点东西 / 吃甜口', { milkTea: 2, indecisive: 1, dessert: 1 }, '系统感觉你在餐桌分歧里，属于柔性摇摆那一派。'),
      option('c', '主食类最稳，大家都能接受', { carb: 2, street: 1 }, '你很懂聚餐本质：别整太花，先让大家都能吃饱。'),
      option('d', '你们定，我负责找相对健康版本', { wellness: 2, diet: 1, health: 1 }, '你即使随大流，也会默默给自己留一个更稳的落点。'),
    ],
  },
  {
    id: 19,
    dimension: 'identity',
    text: '你觉得自己最像哪种“吃饭人格”描述？',
    options: [
      option('a', '吃热的才能感觉活着', { hotpot: 3, hotFood: 2 }, '系统听懂了，你需要的不是饭，是热气带来的复活感。'),
      option('b', '饮品和小料才是灵魂', { milkTea: 3, sauc: 1 }, '你的味觉重点，经常落在别人容易忽略的快乐细节上。'),
      option('c', '主食是底线，不能少', { carb: 3, carbCore: 2 }, '你的人生底层逻辑之一，大概就是这顿得像一顿饭。'),
      option('d', '吃完身体轻松最重要', { wellness: 3, health: 2 }, '你对“舒服”这件事有长期主义者的认真。'),
    ],
  },
  {
    id: 20,
    dimension: 'reverse',
    text: '如果今天必须“收一收”，你最能接受的是？',
    options: [
      option('a', '番茄汤 / 轻麻辣烫这种有满足感的可控版', { hotpot: 2, diet: 2, betrayer: 1, health: 1 }, '你很会给自己找那种“不算放纵，也不算太惨”的折中解。'),
      option('b', '轻食碗或鸡胸肉沙拉，简单直接', { wellness: 3, diet: 2, lite: 1 }, '系统判断你在收一收这件事上，执行力是在线的。'),
      option('c', '无糖茶饮 + 小点心，先骗过自己', { milkTea: 1, dessert: 1, betrayer: 1, fakeDiscipline: 1 }, '你很会用“我已经选无糖了”给自己做情绪缓冲。'),
      option('d', '半份饭的黄焖鸡 / 拉面，至少别让我太委屈', { carb: 2, comfort: 1, carbCore: 1 }, '你的核心诉求很清楚：可以收，但不能收得像受罚。'),
    ],
  },
  {
    id: 21,
    dimension: 'budget',
    text: '你对“高性价比吃顿好饭”的理解更像？',
    options: [
      option('a', '麻辣烫自由配，最懂我的需求', { hotpot: 2, street: 1, local: 1 }, '你对性价比的理解，带一点“可自由配置才是真尊重”。'),
      option('b', '便利店 / 家常菜也能凑出舒服一餐', { wellness: 1, street: 2, home: 1 }, '你很擅长在现实预算里，把一顿饭过得不寒酸。'),
      option('c', '一杯饮料带来的快乐不能只算价格', { milkTea: 2, dessert: 1, mood: 1 }, '系统确认你在快乐消费这件事上有自己的衡量公式。'),
      option('d', '主食量足才叫值', { carb: 2, dongbei: 1, buff: 1 }, '你对“值不值”的判断标准，非常朴素也非常坚定。'),
    ],
  },
  {
    id: 22,
    dimension: 'temperature',
    text: '比起冷食，你对热食的执念程度是？',
    options: [
      option('a', '一般，能吃就行', { street: 1, lite: 1 }, '你对温度这件事比较佛，属于能解决问题就行派。'),
      option('b', '偏爱热乎的，但不是绝对', { hotpot: 1, comfort: 1 }, '系统感觉你确实偏心热食，只是还保持着表面克制。'),
      option('c', '热食优先，最好带汤', { hotpot: 3, spicy: 1, hotFood: 2 }, '你的胃对“带汤热乎”这四个字明显有额外好感。'),
      option('d', '热的 + 辣的才算真正开饭', { hotpot: 2, spicy: 2, sichuan: 1 }, '你不是在吃饭，你是在追求一种足够有存在感的开场。'),
    ],
  },
  {
    id: 23,
    dimension: 'sweet',
    text: '下面哪句最像你对“甜”的态度？',
    options: [
      option('a', '没必要，太甜容易腻', { wellness: 1, lite: 1 }, '你和甜口的距离感，多少带一点成年人式理智。'),
      option('b', '偶尔来点，气氛到了可以有', { dessert: 1, milkTea: 1 }, '你对甜的态度很会拿捏，属于看场合给面子。'),
      option('c', '甜口是情绪修复包', { dessert: 3, sweet: 2, mood: 1 }, '系统看到你一难受，糖分就会被自动抬进候选名单。'),
      option('d', '甜可以，但最好和茶饮 / 点心一起出现', { dessert: 2, milkTea: 2, mtex: 1 }, '你对甜不是单点突破，而是讲究一个搭配着来。'),
    ],
  },
  {
    id: 24,
    dimension: 'regional',
    text: '当你想吃“有地方感”的东西时，最先想到的是？',
    options: [
      option('a', '麻辣火锅、钵钵鸡、酸辣粉', { sichuan: 3, hotpot: 1, spicy: 2 }, '系统判断你心里的地域风味坐标，大概率偏向热辣那一边。'),
      option('b', '煲汤、肠粉、云吞面、糖水', { guangdong: 3, wellness: 1, lite: 1 }, '你对“地方感”的理解，更像是一种温和但很顺的精细舒服。'),
      option('c', '锅包肉、铁锅炖、超大份面食', { dongbei: 3, carb: 1, buff: 1 }, '你对地域美食的热爱，明显更看重豪爽和实在。'),
      option('d', '生煎、小笼、甜口红烧类', { jiangzhe: 3, dessert: 1, sweet: 1 }, '你很容易被那种细腻、讲究、带点甜口记忆的风味打动。'),
    ],
  },
  {
    id: 25,
    dimension: 'emotion',
    text: '如果你心情很差，你更可能靠什么救自己？',
    options: [
      option('a', '热锅热汤，先把胃哄好', { hotpot: 2, comfort: 2, mood: 1 }, '你的情绪急救方案很明确：先给胃一点像样的安慰。'),
      option('b', '奶茶甜品，糖分先顶上', { milkTea: 2, dessert: 2, mood: 2 }, '系统感觉你对情绪低谷的处理方式，讲究立刻回血。'),
      option('c', '碳水主食，吃饱了再说', { carb: 3, comfort: 1, mood: 1 }, '你解决问题的第一步，常常是先别让自己饿着。'),
      option('d', '清淡一点，至少身体别再添乱', { wellness: 2, health: 2, lite: 1 }, '你在低落的时候，反而更会替身体收住局面。'),
    ],
  },
  {
    id: 26,
    dimension: 'loyalty',
    text: '如果一家店你很喜欢，你更可能因为什么一直复购？',
    options: [
      option('a', '那口锅 / 那口热气太稳定了', { hotpot: 2, loyalty: 1, comfort: 1 }, '你对复购的要求很朴素：只要它稳定安慰我，我就稳定回来。'),
      option('b', '饮品、小料、搭配总能踩中我', { milkTea: 2, sauc: 1, loyalty: 1 }, '你会反复回头的店，通常都很懂你的味觉小脾气。'),
      option('c', '分量足、主食强、永远吃得饱', { carb: 2, loyalty: 1, carbCore: 1 }, '系统感觉你对“每次都能稳稳吃爽”这件事很忠诚。'),
      option('d', '吃完不累、负担小、长期友好', { wellness: 2, loyalty: 1, health: 1 }, '你不是容易恋旧，你只是很珍惜长期相处起来舒服的饭。'),
    ],
  },
  {
    id: 27,
    dimension: 'identity',
    text: '如果别人评价你“吃饭很有自己的一套”，你觉得更像在说？',
    options: [
      option('a', '我对热食、锅物、小料是真的有讲究', { hotpot: 2, sauc: 2, hotp: 1 }, '系统确认你对“好吃”这件事，确实有一套可执行标准。'),
      option('b', '我对饮品、甜度、配料有稳定审美', { milkTea: 2, mtex: 2 }, '你在饮品世界里不是随缘派，更像有固定偏好的评委。'),
      option('c', '我对主食和饱腹感有不可动摇的底线', { carb: 2, carbCore: 2 }, '你的饮食原则非常明确：一顿饭不能只看起来像饭。'),
      option('d', '我知道什么样吃法最适合自己身体', { wellness: 2, health: 2, hlth: 1 }, '你在吃这件事上，已经逐渐长成了懂自己的人。'),
    ],
  },
  {
    id: 28,
    dimension: 'finish',
    text: '测试结束了，如果现在就替你决定今天吃什么，你最希望它？',
    options: [
      option('a', '给我一个热乎又不太有负罪感的答案', { hotpot: 2, diet: 1, betrayer: 1, health: 1 }, '系统听出来了，你想要的是满足感和体面同时在线。'),
      option('b', '最好顺手把饮料和快乐一起安排了', { milkTea: 2, dessert: 1, mood: 1 }, '你对“今天吃什么”的期待，明显不只是主食本体。'),
      option('c', '别整虚的，给我一个真顶饱的', { carb: 2, comfort: 2, carbCore: 1 }, '你的胃已经替你表达了真实立场：今天得吃点扎实的。'),
      option('d', '能执行、能坚持、明天不后悔', { wellness: 2, diet: 2, health: 2 }, '系统发现你现在最需要的，不是刺激，是一个靠谱答案。'),
    ],
  },
];
