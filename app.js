const GAME_SIZE = 5;
const GIFT_URL =
  "https://h5.leoao.com/promotion/gift-receive-new.html#/index?id=3djKvY&merchantId=999999&lk-tenantid=1&sourceCode=platform_user_xinlibao";
const MASCOTS = {
  wave: "./assets/me-3d-web/1.png",
  stand: "./assets/me-3d-web/2.png",
  barbell: "./assets/me-3d-web/3.png",
  cup: "./assets/me-3d-web/4.png",
  walk: "./assets/me-3d-web/5.png",
  shout: "./assets/me-3d-web/6.png",
  dumbbell: "./assets/me-3d-web/7.png",
};
const MASCOT_SRC = MASCOTS.wave;

const questionBank = [
  {
    answer: "哑铃",
    category: "运动器械",
    hint: "打一健身房里的手持器械",
    visual: "dumbbell",
    emoji: "🤐 🔔",
  },
  {
    answer: "杠铃",
    category: "运动器械",
    hint: "打一件两端加片的力量器械",
    visual: "barbell",
    emoji: "➖ 🔔",
  },
  {
    answer: "跑步机",
    category: "运动器械",
    hint: "打一件常见有氧器械",
    visual: "treadmill",
    emoji: "🏃 👣 ⚙️",
  },
  {
    answer: "划船机",
    category: "运动器械",
    hint: "打一件像在水上训练的器械",
    visual: "rower",
    emoji: "🚣 🛶 ⚙️",
  },
  {
    answer: "龙门架",
    category: "运动器械",
    hint: "打一件可以做绳索训练的大型器械",
    visual: "cable",
    emoji: "🐉 🚪 🏗️",
  },
  {
    answer: "壶铃",
    category: "运动器械",
    hint: "打一件像茶壶一样的力量器械",
    visual: "kettlebell",
    emoji: "🫖 🔔",
  },
  {
    answer: "弹力带",
    category: "运动器械",
    hint: "打一件可拉伸的训练小工具",
    visual: "band",
    emoji: "↔️ 💪 🎗️",
  },
  {
    answer: "瑜伽垫",
    category: "运动器械",
    hint: "打一件铺在地上的训练用品",
    visual: "mat",
    emoji: "🧘 🟨",
  },
  {
    answer: "椭圆机",
    category: "运动器械",
    hint: "打一件低冲击有氧器械",
    visual: "elliptical",
    emoji: "🥚 ⭕ ⚙️",
  },
  {
    answer: "动感单车",
    category: "运动器械",
    hint: "打一件骑行类有氧器械",
    visual: "bike",
    emoji: "🎵 🚴",
  },
  {
    answer: "腹肌轮",
    category: "运动器械",
    hint: "打一件训练核心的小轮子",
    visual: "abWheel",
    emoji: "🍫 🔘",
  },
  {
    answer: "泡沫轴",
    category: "运动器械",
    hint: "打一件放松肌肉的圆柱工具",
    visual: "foamRoller",
    emoji: "🫧 🧻",
  },
  {
    answer: "药球",
    category: "运动器械",
    hint: "打一件可以抛接训练的重球",
    visual: "medicineBall",
    emoji: "💊 ⚽",
  },
  {
    answer: "战绳",
    category: "运动器械",
    hint: "打一件甩起来很燃的粗绳",
    visual: "battleRope",
    emoji: "⚔️ 🪢",
  },
  {
    answer: "跳绳",
    category: "运动器械",
    hint: "打一件轻便有氧小工具",
    visual: "jumpRope",
    emoji: "🦘 🪢",
  },
  {
    answer: "史密斯机",
    category: "运动器械",
    hint: "打一件固定轨道杠铃器械",
    visual: "smith",
    emoji: "🛤️ 🏋️ ⚙️",
  },
  {
    answer: "卧推凳",
    category: "运动器械",
    hint: "打一件躺着推胸会用到的凳子",
    visual: "bench",
    emoji: "🛏️ 💪 🪑",
  },
  {
    answer: "深蹲架",
    category: "运动器械",
    hint: "打一件练深蹲常用的大架子",
    visual: "squatRack",
    emoji: "⬇️ 🦵 🏗️",
  },
  {
    answer: "引体架",
    category: "运动器械",
    hint: "打一件向上拉身体会用到的架子",
    visual: "pullupBar",
    emoji: "⬆️ 🧍 🏗️",
  },
  {
    answer: "腿举机",
    category: "运动器械",
    hint: "打一件用腿往上推的器械",
    visual: "legPress",
    emoji: "🦵 ⬆️ ⚙️",
  },
  {
    answer: "拉力器",
    category: "运动器械",
    hint: "打一件用拉力做训练的器械",
    visual: "puller",
    emoji: "🤏 ➡️ 💪",
  },
  {
    answer: "踏板",
    category: "运动器械",
    hint: "打一件上下台阶训练用品",
    visual: "step",
    emoji: "👟 ⬆️ 🟦",
  },
  {
    answer: "健身球",
    category: "运动器械",
    hint: "打一件大圆球训练用品",
    visual: "fitnessBall",
    emoji: "🏋️ ⚽",
  },
  {
    answer: "臀推机",
    category: "运动器械",
    hint: "打一件练臀发力的器械",
    visual: "hipThrust",
    emoji: "🍑 ⬆️ ⚙️",
  },
  {
    answer: "滑盘",
    category: "运动器械",
    hint: "打一件脚下滑动训练用品",
    visual: "slider",
    emoji: "🛝 🥏",
  },
  {
    answer: "深蹲",
    category: "运动动作",
    hint: "打一项练腿练臀的基础动作",
    visual: "squat",
    emoji: "⬇️ 🦵 🍑",
  },
  {
    answer: "平板支撑",
    category: "运动动作",
    hint: "打一项考验核心稳定的动作",
    visual: "plank",
    emoji: "🟫 📏 🤲",
  },
  {
    answer: "波比跳",
    category: "运动动作",
    hint: "打一项全身燃脂动作",
    visual: "burpee",
    emoji: "🌊 🆚 🦘",
  },
  {
    answer: "弓步蹲",
    category: "运动动作",
    hint: "打一项单腿发力感很强的动作",
    visual: "lunge",
    emoji: "🏹 🦵 ⬇️",
  },
  {
    answer: "俯卧撑",
    category: "运动动作",
    hint: "打一项经典自重上肢动作",
    visual: "pushup",
    emoji: "⬇️ 🤲 ⬆️",
  },
  {
    answer: "臀桥",
    category: "运动动作",
    hint: "打一项唤醒臀部发力的动作",
    visual: "gluteBridge",
    emoji: "🍑 🌉",
  },
  {
    answer: "卷腹",
    category: "运动动作",
    hint: "打一项腹部收卷动作",
    visual: "crunch",
    emoji: "🌀 🍫",
  },
  {
    answer: "引体向上",
    category: "运动动作",
    hint: "打一项把身体拉上去的动作",
    visual: "pullup",
    emoji: "🧍 ⬆️ 🤲",
  },
  {
    answer: "硬拉",
    category: "运动动作",
    hint: "打一项从地面拉起重量的动作",
    visual: "deadlift",
    emoji: "🪨 ⬆️ 💪",
  },
  {
    answer: "卧推",
    category: "运动动作",
    hint: "打一项躺着向上推的动作",
    visual: "benchPress",
    emoji: "🛏️ ⬆️ 💪",
  },
  {
    answer: "开合跳",
    category: "运动动作",
    hint: "打一项双脚开合的热身动作",
    visual: "jumpingJack",
    emoji: "↔️ 🦵 🦘",
  },
  {
    answer: "高抬腿",
    category: "运动动作",
    hint: "打一项原地快速抬腿动作",
    visual: "highKnees",
    emoji: "⬆️ 🦵 🏃",
  },
  {
    answer: "登山跑",
    category: "运动动作",
    hint: "打一项像爬山一样的燃脂动作",
    visual: "mountainClimber",
    emoji: "⛰️ 🏃",
  },
  {
    answer: "俄罗斯转体",
    category: "运动动作",
    hint: "打一项坐姿左右转动核心动作",
    visual: "russianTwist",
    emoji: "🇷🇺 🔄 🧘",
  },
  {
    answer: "侧平板",
    category: "运动动作",
    hint: "打一项侧身支撑动作",
    visual: "sidePlank",
    emoji: "↔️ 🟫 🤲",
  },
  {
    answer: "臀推",
    category: "运动动作",
    hint: "打一项向上顶髋练臀动作",
    visual: "hipThrustAction",
    emoji: "🍑 ⬆️",
  },
  {
    answer: "划船",
    category: "运动动作",
    hint: "打一项往后拉的背部动作",
    visual: "rowAction",
    emoji: "🚣 💪",
  },
  {
    answer: "肩推",
    category: "运动动作",
    hint: "打一项向上推举练肩动作",
    visual: "shoulderPress",
    emoji: "🤷 ⬆️ 💪",
  },
  {
    answer: "弯举",
    category: "运动动作",
    hint: "打一项手臂弯曲发力动作",
    visual: "curl",
    emoji: "💪 ↩️",
  },
  {
    answer: "下压",
    category: "运动动作",
    hint: "打一项手臂向下发力动作",
    visual: "pushdown",
    emoji: "👇 💪",
  },
  {
    answer: "提踵",
    category: "运动动作",
    hint: "打一项脚跟抬起的小腿动作",
    visual: "calfRaise",
    emoji: "🦶 ⬆️",
  },
  {
    answer: "跳箱",
    category: "运动动作",
    hint: "打一项跳上箱子的爆发动作",
    visual: "boxJump",
    emoji: "🦘 📦",
  },
  {
    answer: "农夫走",
    category: "运动动作",
    hint: "打一项双手负重行走动作",
    visual: "farmerWalk",
    emoji: "👨‍🌾 🧳 🚶",
  },
  {
    answer: "甩战绳",
    category: "运动动作",
    hint: "打一项用粗绳快速摆动的动作",
    visual: "ropeSlam",
    emoji: "⚔️ 🪢 〰️",
  },
  {
    answer: "拉伸",
    category: "运动动作",
    hint: "打一项训练后放松动作",
    visual: "stretch",
    emoji: "↔️ 🧘",
  },
  {
    answer: "全国通",
    category: "品牌权益",
    hint: "打一项 FEELINGME 权益，到不同城市也能继续练",
    visual: "nationwide",
    emoji: "🧑‍🏫 🇨🇳 🔁",
  },
  {
    answer: "随时约",
    category: "品牌权益",
    hint: "打一项 FEELINGME 权益，时间安排更灵活",
    visual: "booking",
    emoji: "📚 ⏰ 📲",
  },
  {
    answer: "自由选",
    category: "品牌权益",
    hint: "打一项 FEELINGME 权益，适配你的训练风格",
    visual: "coach",
    emoji: "🧑‍🏫 🆓 👆",
  },
];

const resultLevels = [
  {
    min: 0,
    title: "端午热身观察员",
    copy: "你已经进入运动状态，下一次可以从一个熟悉动作开始慢慢找回节奏。",
  },
  {
    min: 1,
    title: "燃脂入门生",
    copy: "你抓住了第一段节奏，身体已经听见开练信号。小礼物也为你准备好了。",
  },
  {
    min: 2,
    title: "核心觉醒者",
    copy: "你对训练场景很有感觉，器械、动作和权益都开始进入你的运动地图。",
  },
  {
    min: 3,
    title: "节奏掌控者",
    copy: "你已经能稳稳识别训练线索，下一节私教课可以把目标再推高一点。",
  },
  {
    min: 4,
    title: "私教进阶玩家",
    copy: "你的健身雷达很敏锐，训练动作和工作室权益都难不倒你。",
  },
  {
    min: 5,
    title: "端午运动满贯王",
    copy: "五题全中，今天的运动脑力和行动力都在线。该去领取你的高光奖励了。",
  },
];

const screens = {
  intro: document.querySelector("#introScreen"),
  game: document.querySelector("#gameScreen"),
  result: document.querySelector("#resultScreen"),
};

const els = {
  startBtn: document.querySelector("#startBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  questionIndex: document.querySelector("#questionIndex"),
  questionTotal: document.querySelector("#questionTotal"),
  progressFill: document.querySelector("#progressFill"),
  categoryChip: document.querySelector("#categoryChip"),
  imageStage: document.querySelector("#imageStage"),
  hintText: document.querySelector("#hintText"),
  letterHintBtn: document.querySelector("#letterHintBtn"),
  answerBoxes: document.querySelector("#answerBoxes"),
  answerInput: document.querySelector("#answerInput"),
  feedback: document.querySelector("#feedback"),
  submitBtn: document.querySelector("#submitBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  finalScore: document.querySelector("#finalScore"),
  resultTitle: document.querySelector("#resultTitle"),
  resultCopy: document.querySelector("#resultCopy"),
  answerReview: document.querySelector("#answerReview"),
  giftBtn: document.querySelector("#giftBtn"),
  medalIcon: document.querySelector("#medalIcon"),
};

let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let locked = false;
let revealedHint = false;
let records = [];
let isComposing = false;
let autoAdvanceTimer = null;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
}

function normalizeAnswer(value) {
  return value.replace(/\s/g, "").replace(/[，。,.!！?？]/g, "");
}

function answerChars(answer) {
  return Array.from(answer);
}

function pickQuestions() {
  const equipment = shuffle(questionBank.filter((item) => item.category === "运动器械")).slice(0, 2);
  const actions = shuffle(questionBank.filter((item) => item.category === "运动动作")).slice(0, 2);
  const benefits = shuffle(questionBank.filter((item) => item.category === "品牌权益")).slice(0, 1);
  return shuffle([...equipment, ...actions, ...benefits])
    .slice(0, GAME_SIZE)
    .map((item) => ({
      ...item,
      mode: "emoji",
    }));
}

function startGame() {
  window.clearTimeout(autoAdvanceTimer);
  gameQuestions = pickQuestions();
  currentIndex = 0;
  score = 0;
  records = [];
  els.questionTotal.textContent = GAME_SIZE;
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const item = gameQuestions[currentIndex];
  locked = false;
  revealedHint = false;
  window.clearTimeout(autoAdvanceTimer);

  els.questionIndex.textContent = currentIndex + 1;
  els.progressFill.style.width = `${((currentIndex + 1) / GAME_SIZE) * 100}%`;
  els.categoryChip.textContent = item.category;
  els.hintText.textContent = item.hint;
  els.imageStage.classList.remove("is-bumped");
  els.imageStage.innerHTML = makeQuestionVisual(item);
  els.answerInput.value = "";
  els.answerInput.maxLength = 24;
  els.answerInput.placeholder = `请输入${answerChars(item.answer).length}个字`;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.submitBtn.disabled = false;
  els.nextBtn.classList.remove("is-visible");
  els.nextBtn.textContent = currentIndex === GAME_SIZE - 1 ? "自动查看结果" : "自动下一题";
  els.letterHintBtn.disabled = false;
  els.letterHintBtn.textContent = "给一点点字形线索";

  renderAnswerBoxes();
  setTimeout(() => els.answerInput.focus(), 80);
}

function renderAnswerBoxes() {
  const item = gameQuestions[currentIndex];
  const length = answerChars(item.answer).length;
  const inputChars = answerChars(normalizeAnswer(els.answerInput.value)).slice(0, length);
  const answer = answerChars(item.answer);

  els.answerBoxes.style.gridTemplateColumns = `repeat(${length}, minmax(0, 1fr))`;
  els.answerBoxes.innerHTML = answer
    .map((char, index) => {
      const visibleChar = inputChars[index] || (revealedHint && index === 0 ? char : "");
      const placeholderClass = visibleChar ? "" : " is-placeholder";
      return `<span class="answer-box${placeholderClass}">${visibleChar || "&nbsp;"}</span>`;
    })
    .join("");
}

function revealLetterHint() {
  if (locked) return;
  revealedHint = true;
  els.letterHintBtn.disabled = true;
  els.letterHintBtn.textContent = "已给出首字线索";
  renderAnswerBoxes();
  els.answerInput.focus();
}

function submitAnswer() {
  if (locked) return;

  const item = gameQuestions[currentIndex];
  syncAnswerInput();
  const userAnswer = normalizeAnswer(els.answerInput.value);
  const correct = userAnswer === item.answer;
  locked = true;
  els.submitBtn.disabled = true;
  els.letterHintBtn.disabled = true;
  els.nextBtn.classList.remove("is-visible");

  if (correct) {
    score += 1;
    els.feedback.textContent =
      currentIndex === GAME_SIZE - 1
        ? "答对了！马上查看你的运动表现。"
        : "答对了！马上进入下一题。";
    els.feedback.classList.add("is-right");
  } else {
    els.feedback.textContent =
      currentIndex === GAME_SIZE - 1
        ? `差一点，正确答案是「${item.answer}」。马上查看结果。`
        : `差一点，正确答案是「${item.answer}」。马上进入下一题。`;
    els.feedback.classList.add("is-wrong");
  }

  records.push({
    question: item,
    userAnswer: userAnswer || "未填写",
    correct,
  });

  autoAdvanceTimer = window.setTimeout(() => {
    nextQuestion();
  }, 1100);
}

function nextQuestion() {
  if (!locked) {
    submitAnswer();
    return;
  }

  if (currentIndex < GAME_SIZE - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    renderResult();
  }
}

function renderResult() {
  const matchedLevels = resultLevels.filter((item) => score >= item.min);
  const level = matchedLevels[matchedLevels.length - 1];

  els.finalScore.textContent = score;
  els.resultTitle.textContent = level.title;
  els.resultCopy.textContent = level.copy;
  els.medalIcon.innerHTML = makeMedal(score);
  els.giftBtn.href = GIFT_URL;
  els.giftBtn.classList.toggle("is-visible", score >= 1);

  els.answerReview.innerHTML = records
    .map((record, index) => {
      const mark = record.correct ? "✓" : "!";
      const rowClass = record.correct ? "" : " is-wrong";
      return `
        <div class="review-row${rowClass}">
          <span>${mark}</span>
          <strong>${index + 1}. ${record.question.answer}</strong>
          <em class="review-answer">${record.question.category}</em>
        </div>
      `;
    })
    .join("");

  showScreen("result");
}

function makeMedal(value) {
  const fill = value >= 1 ? "#ffc200" : "#ffffff";
  return `
    <svg viewBox="0 0 160 160" role="img" aria-label="能力表现徽章">
      <circle cx="80" cy="80" r="72" fill="#222222" />
      <circle cx="80" cy="80" r="58" fill="${fill}" stroke="#ffffff" stroke-width="8" />
      <path d="M48 24l26 44M112 24 86 68" stroke="#222222" stroke-width="10" stroke-linecap="round" />
      <path d="M52 85h56l-14 42H66z" fill="#fff" opacity=".92" />
      <text x="80" y="113" text-anchor="middle" fill="#222222" font-size="44" font-weight="900">${value}</text>
    </svg>
  `;
}

function makeQuestionVisual(item) {
  if (item.mode === "emoji") {
    return `
      <div class="question-visual emoji-visual">
        <div class="emoji-puzzle" aria-label="emoji线索">${item.emoji}</div>
        <img class="emoji-mascot" src="${MASCOTS.shout}" alt="" />
      </div>
    `;
  }

  const config = visualConfigs[item.visual] || visualConfigs.default;
  const propClass = config.prop ? `<span class="visual-prop prop-${config.prop}"></span>` : "";
  const chip = config.chip || item.category;

  return `
    <div class="question-visual pose-${item.visual}">
      <span class="visual-chip">${chip}</span>
      ${propClass}
      <span class="visual-line" style="left: 28px; bottom: 34px; width: 70%;"></span>
      <img class="visual-mascot" src="${config.src}" alt="" />
    </div>
  `;
}

const visualConfigs = {
  dumbbell: { src: MASCOTS.dumbbell, chip: "手持器械", prop: "dumbbell" },
  treadmill: { src: MASCOTS.walk, chip: "有氧器械", prop: "treadmill" },
  rower: { src: MASCOTS.barbell, chip: "像划船", prop: "rower" },
  cable: { src: MASCOTS.stand, chip: "绳索训练", prop: "cable" },
  kettlebell: { src: MASCOTS.dumbbell, chip: "像茶壶", prop: "kettlebell" },
  band: { src: MASCOTS.walk, chip: "拉伸小工具", prop: "band" },
  squat: { src: MASCOTS.stand, chip: "练腿练臀" },
  plank: { src: MASCOTS.stand, chip: "核心稳定" },
  burpee: { src: MASCOTS.walk, chip: "全身燃脂" },
  lunge: { src: MASCOTS.walk, chip: "单腿发力" },
  pushup: { src: MASCOTS.stand, chip: "自重上肢" },
  gluteBridge: { src: MASCOTS.stand, chip: "臀部发力" },
  nationwide: { src: MASCOTS.wave, chip: "全国都能练", prop: "nationwide" },
  booking: { src: MASCOTS.cup, chip: "时间自由", prop: "booking" },
  coach: { src: MASCOTS.shout, chip: "教练匹配", prop: "coach" },
  default: { src: MASCOTS.wave, chip: "看图猜词" },
};

function makeIllustration(type, category) {
  const title = `${category}题目图片`;
  const mascot = (x, y, width, height, transform = "") => `
    <image href="${MASCOT_SRC}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" transform="${transform}" />
  `;
  const base = `
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#ffffff" />
        <stop offset=".58" stop-color="#fff5c2" />
        <stop offset="1" stop-color="#ffc200" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="320" height="280" fill="url(#bg)" />
    <path d="M-10 222h340v58H-10z" fill="#222222" opacity=".08" />
    <path d="M28 58h76M226 54h48M42 226h236" stroke="#222222" stroke-width="10" stroke-linecap="round" opacity=".16" />
    <circle cx="274" cy="58" r="25" fill="#222222" />
    <text x="274" y="66" text-anchor="middle" fill="#ffc200" font-size="21" font-weight="900">ME</text>
  `;

  const people = {
    squat: `
      ${mascot(88, 58, 145, 190, "rotate(-8 160 150) scale(1 0.72) translate(0 58)")}
      <path d="M88 210h144" stroke="#222222" stroke-width="12" stroke-linecap="round" />
      <path d="M110 98l20 26M210 98l-20 26" stroke="#222222" stroke-width="8" stroke-linecap="round" />
      <path d="M142 176h36" stroke="#ffc200" stroke-width="14" stroke-linecap="round" />
    `,
    plank: `
      ${mascot(94, 34, 140, 200, "rotate(83 160 140) scale(1.18 .68) translate(10 -34)")}
      <path d="M60 205h200" stroke="#222222" stroke-width="12" stroke-linecap="round" />
      <path d="M74 178h44M206 178h44" stroke="#ffc200" stroke-width="16" stroke-linecap="round" />
      <text x="160" y="60" text-anchor="middle" fill="#222222" font-size="24" font-weight="900">CORE</text>
    `,
    burpee: `
      ${mascot(100, 30, 130, 186, "rotate(-12 160 132)")}
      <path d="M104 196h112" stroke="#222222" stroke-width="11" stroke-linecap="round" />
      <path d="M106 106c-16 20-18 43-6 66M220 106c16 20 18 43 6 66" fill="none" stroke="#222222" stroke-width="8" stroke-linecap="round" />
      <path d="M160 28v34M146 44l14-16 14 16" fill="none" stroke="#ffc200" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
    `,
    lunge: `
      ${mascot(96, 48, 138, 190, "rotate(18 160 150) skewX(-10)")}
      <path d="M74 210h174" stroke="#222222" stroke-width="12" stroke-linecap="round" />
      <path d="M96 184h62M184 198h58" stroke="#ffc200" stroke-width="14" stroke-linecap="round" />
      <path d="M75 120h42" stroke="#222222" stroke-width="8" stroke-linecap="round" opacity=".45" />
    `,
    pushup: `
      ${mascot(96, 40, 134, 190, "rotate(78 160 148) scale(1.1 .72) translate(18 -24)")}
      <path d="M58 203h204" stroke="#222222" stroke-width="12" stroke-linecap="round" />
      <path d="M93 166v36M226 166v36" stroke="#ffc200" stroke-width="12" stroke-linecap="round" />
      <path d="M72 132h176" stroke="#222222" stroke-width="7" stroke-linecap="round" opacity=".25" />
    `,
    gluteBridge: `
      ${mascot(93, 42, 138, 190, "rotate(-54 160 152) scale(1.1 .78) translate(-8 0)")}
      <path d="M60 205h200" stroke="#222222" stroke-width="12" stroke-linecap="round" />
      <path d="M112 154c26-28 68-34 98-6" fill="none" stroke="#ffc200" stroke-width="12" stroke-linecap="round" />
      <path d="M130 130l18-28M190 130l-18-28" stroke="#222222" stroke-width="8" stroke-linecap="round" />
    `,
  };

  const equipment = {
    dumbbell: `
      ${mascot(174, 58, 108, 158, "rotate(10 220 140)")}
      <g transform="rotate(-14 136 145)">
        <path d="M48 145h166" stroke="#222222" stroke-width="17" stroke-linecap="round" />
        <rect x="26" y="112" width="32" height="66" rx="8" fill="#ffc200" stroke="#222222" stroke-width="8" />
        <rect x="202" y="112" width="32" height="66" rx="8" fill="#ffc200" stroke="#222222" stroke-width="8" />
      </g>
    `,
    treadmill: `
      ${mascot(92, 48, 105, 154, "rotate(-7 145 130)")}
      <path d="M58 188h164l34 34H78z" fill="#222222" />
      <path d="M86 188h126" stroke="#ffc200" stroke-width="14" stroke-linecap="round" />
      <path d="M210 188l34-88h30" stroke="#222222" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="240" y="74" width="42" height="28" rx="7" fill="#ffffff" stroke="#222222" stroke-width="7" />
      <circle cx="88" cy="228" r="11" fill="#ffc200" stroke="#222222" stroke-width="6" />
      <circle cx="232" cy="228" r="11" fill="#ffc200" stroke="#222222" stroke-width="6" />
    `,
    rower: `
      ${mascot(78, 52, 116, 156, "rotate(-16 140 130)")}
      <path d="M60 194h204" stroke="#222222" stroke-width="15" stroke-linecap="round" />
      <rect x="124" y="156" width="56" height="26" rx="8" fill="#ffc200" stroke="#222222" stroke-width="7" />
      <path d="M178 168l54-44M232 124h38" stroke="#222222" stroke-width="11" stroke-linecap="round" />
      <circle cx="86" cy="195" r="15" fill="#ffc200" stroke="#222222" stroke-width="7" />
      <circle cx="240" cy="195" r="15" fill="#ffc200" stroke="#222222" stroke-width="7" />
    `,
    cable: `
      ${mascot(112, 82, 100, 144, "rotate(-4 160 150)")}
      <path d="M74 214V64h172v150" fill="none" stroke="#222222" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M106 82h108M106 82l54 88M214 82l-54 88" stroke="#ffc200" stroke-width="9" stroke-linecap="round" />
      <circle cx="160" cy="174" r="17" fill="#222222" />
      <path d="M76 222h168" stroke="#222222" stroke-width="12" stroke-linecap="round" />
    `,
    kettlebell: `
      ${mascot(188, 54, 92, 138, "rotate(12 230 120)")}
      <path d="M80 132c0-34 18-58 42-58s42 24 42 58" fill="none" stroke="#222222" stroke-width="18" stroke-linecap="round" />
      <path d="M64 146c0-34 26-62 58-62s58 28 58 62v14c0 42-26 64-58 64s-58-22-58-64z" fill="#222222" />
      <circle cx="122" cy="156" r="30" fill="#ffc200" />
      <path d="M94 207h56" stroke="#ffffff" stroke-width="10" stroke-linecap="round" opacity=".82" />
    `,
    band: `
      ${mascot(108, 42, 104, 150, "rotate(-10 160 130)")}
      <path d="M74 158c42-58 129-58 171 0 22 30 1 64-35 47-28-14-73-14-101 0-36 17-57-17-35-47z" fill="none" stroke="#222222" stroke-width="17" stroke-linecap="round" />
      <path d="M96 158c36-35 92-35 128 0" fill="none" stroke="#ffc200" stroke-width="12" stroke-linecap="round" />
      <circle cx="84" cy="181" r="15" fill="#ffc200" stroke="#222222" stroke-width="7" />
      <circle cx="236" cy="181" r="15" fill="#ffc200" stroke="#222222" stroke-width="7" />
    `,
  };

  const benefits = {
    nationwide: `
      ${mascot(174, 70, 98, 142, "rotate(8 220 140)")}
      <path d="M62 190c40-64 101-96 168-67 21 9 21 37 0 49-48 28-105 36-168 18z" fill="#ffffff" stroke="#222222" stroke-width="10" />
      <path d="M94 171c30-22 61-26 92-15M118 134c-8 22-8 44 0 66M176 128c12 24 12 48 0 72" fill="none" stroke="#ffc200" stroke-width="8" stroke-linecap="round" />
      <circle cx="146" cy="158" r="10" fill="#222222" />
      <text x="93" y="87" fill="#222222" font-size="24" font-weight="900">全国通</text>
    `,
    booking: `
      ${mascot(190, 74, 86, 126, "rotate(14 230 140)")}
      <rect x="62" y="72" width="152" height="142" rx="14" fill="#ffffff" stroke="#222222" stroke-width="10" />
      <path d="M62 108h152" stroke="#222222" stroke-width="10" />
      <path d="M96 60v34M182 60v34" stroke="#ffc200" stroke-width="12" stroke-linecap="round" />
      <path d="M98 148h30M154 148h30M98 182h30M154 182h30" stroke="#222222" stroke-width="10" stroke-linecap="round" />
      <circle cx="222" cy="194" r="29" fill="#ffc200" stroke="#222222" stroke-width="8" />
      <path d="M209 194l10 10 18-24" fill="none" stroke="#222222" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
    `,
    coach: `
      ${mascot(64, 64, 106, 150, "rotate(-12 118 140)")}
      <circle cx="210" cy="96" r="24" fill="#222222" />
      <path d="M168 198c6-44 26-68 42-68s36 24 42 68" fill="#ffc200" stroke="#222222" stroke-width="8" />
      <circle cx="252" cy="112" r="18" fill="#ffffff" stroke="#222222" stroke-width="8" />
      <path d="M104 222h154" stroke="#222222" stroke-width="12" stroke-linecap="round" />
      <path d="M76 82l24-20M238 66l26-22M166 58l14-30" stroke="#ffc200" stroke-width="9" stroke-linecap="round" />
      <text x="184" y="70" fill="#222222" font-size="22" font-weight="900">自由选</text>
    `,
  };

  const art = people[type] || equipment[type] || benefits[type] || "";

  return `
    <svg viewBox="0 0 320 280" role="img" aria-label="${title}">
      ${base}
      ${art}
      <path d="M36 240h248" stroke="#222222" stroke-width="2" stroke-dasharray="1 10" stroke-linecap="round" opacity=".28" />
    </svg>
  `;
}

els.startBtn.addEventListener("click", startGame);
els.restartBtn.addEventListener("click", startGame);
els.nextBtn.addEventListener("click", nextQuestion);
els.submitBtn.addEventListener("click", submitAnswer);
els.letterHintBtn.addEventListener("click", revealLetterHint);
els.answerBoxes.addEventListener("click", () => els.answerInput.focus());
els.imageStage.addEventListener("click", () => {
  els.imageStage.classList.remove("is-bumped");
  window.requestAnimationFrame(() => els.imageStage.classList.add("is-bumped"));
});

els.answerInput.addEventListener("input", () => {
  if (isComposing) return;
  syncAnswerInput();
});

els.answerInput.addEventListener("compositionstart", () => {
  isComposing = true;
});

els.answerInput.addEventListener("compositionend", () => {
  isComposing = false;
  syncAnswerInput();
});

function syncAnswerInput() {
  const item = gameQuestions[currentIndex];
  const nextValue = answerChars(normalizeAnswer(els.answerInput.value))
    .slice(0, answerChars(item.answer).length)
    .join("");
  els.answerInput.value = nextValue;
  renderAnswerBoxes();
}

els.answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    locked ? nextQuestion() : submitAnswer();
  }
});
