const QUESTIONS = [
  {section:'Phần 1 – Giá trị thặng dư',question:'Công thức chung của tư bản là gì?',options:['H – T – H','T – H – T’','T – T – H','H – H – T'],answer:'T – H – T’',explain:'Đáp án đúng là T – H – T’. Mục tiêu của tư bản là làm cho số tiền ban đầu tăng lên thành T’. Ví dụ: bỏ tiền mua nguyên liệu và sức lao động, sau đó bán hàng hóa để thu về số tiền lớn hơn ban đầu.'},
  {section:'Phần 1 – Giá trị thặng dư',question:'Nguồn gốc trực tiếp của giá trị thặng dư gắn với hàng hóa nào?',options:['Hàng hóa tiêu dùng','Hàng hóa sức lao động','Hàng hóa tiền tệ','Hàng hóa xa xỉ'],answer:'Hàng hóa sức lao động',explain:'Đáp án đúng là hàng hóa sức lao động. Chỉ sức lao động mới tạo ra giá trị mới lớn hơn giá trị bản thân nó. Ví dụ: người công nhân nhận lương một ngày nhưng có thể tạo ra lượng giá trị nhiều hơn tiền lương được trả.'},
  {section:'Phần 1 – Giá trị thặng dư',question:'Hàng hóa sức lao động có mấy thuộc tính cơ bản?',options:['1','2','3','4'],answer:'2',explain:'Đáp án đúng là 2: giá trị và giá trị sử dụng. Ví dụ: chi phí nuôi sống người lao động tạo nên giá trị; còn khả năng lao động tạo ra sản phẩm là giá trị sử dụng.'},
  {section:'Phần 1 – Giá trị thặng dư',question:'Tư bản khả biến thường được ký hiệu là gì?',options:['c','m','v','p'],answer:'v',explain:'Đáp án đúng là v. Đây là phần tư bản dùng để mua sức lao động. Ví dụ: tiền lương trả cho công nhân được tính vào tư bản khả biến.'},
  {section:'Phần 1 – Giá trị thặng dư',question:'Tỷ suất giá trị thặng dư được tính theo công thức nào?',options:['m’ = m/c × 100%','m’ = m/v × 100%','m’ = v/m × 100%','m’ = c/v × 100%'],answer:'m’ = m/v × 100%',explain:'Đáp án đúng là m’ = m/v × 100%. Nó phản ánh mức độ bóc lột sức lao động làm thuê. Ví dụ: m = 100, v = 50 thì m’ = 200%.'},
  {section:'Phần 2 – Tích lũy tư bản',question:'Bản chất của tích lũy tư bản là gì?',options:['Tiêu dùng hết giá trị thặng dư','Tư bản hóa giá trị thặng dư','Giảm sản xuất','Tăng lương đồng loạt'],answer:'Tư bản hóa giá trị thặng dư',explain:'Đáp án đúng là tư bản hóa giá trị thặng dư. Phần giá trị thặng dư không tiêu hết mà đem tái đầu tư. Ví dụ: dùng lợi nhuận để mua thêm máy móc hoặc thuê thêm lao động.'},
  {section:'Phần 2 – Tích lũy tư bản',question:'Yếu tố nào giúp tăng quy mô tích lũy tư bản?',options:['Giảm năng suất lao động','Nâng cao tỷ suất giá trị thặng dư','Giảm hiệu quả máy móc','Thu hẹp quy mô sản xuất'],answer:'Nâng cao tỷ suất giá trị thặng dư',explain:'Đáp án đúng là nâng cao tỷ suất giá trị thặng dư. Khi thu được nhiều giá trị thặng dư hơn, khả năng tích lũy sẽ lớn hơn. Ví dụ: tăng năng suất hoặc kéo dài thời gian lao động.'},
  {section:'Phần 2 – Tích lũy tư bản',question:'Tích tụ tư bản là gì?',options:['Sáp nhập nhiều tư bản nhỏ','Tăng quy mô tư bản bằng tư bản hóa giá trị thặng dư','Chia nhỏ tư bản','Tăng nợ vay ngân hàng'],answer:'Tăng quy mô tư bản bằng tư bản hóa giá trị thặng dư',explain:'Đáp án đúng là tăng quy mô tư bản bằng tư bản hóa giá trị thặng dư. Đây là sự lớn lên từ bên trong từng tư bản cá biệt. Ví dụ: một xưởng dùng lợi nhuận để mua thêm dây chuyền.'},
  {section:'Phần 2 – Tích lũy tư bản',question:'Tập trung tư bản là gì?',options:['Sáp nhập nhiều tư bản nhỏ thành tư bản lớn hơn','Tiết kiệm chi tiêu cá nhân','Giảm vốn đầu tư','Chỉ tăng lương công nhân'],answer:'Sáp nhập nhiều tư bản nhỏ thành tư bản lớn hơn',explain:'Đáp án đúng là sáp nhập nhiều tư bản nhỏ thành tư bản lớn hơn. Ví dụ: hai công ty nhỏ hợp nhất thành một công ty lớn để tăng sức cạnh tranh.'},
  {section:'Phần 2 – Tích lũy tư bản',question:'Một hệ quả của tích lũy tư bản là gì?',options:['Xóa chênh lệch giàu nghèo','Tăng chênh lệch thu nhập','Lợi nhuận biến mất','Không còn cạnh tranh'],answer:'Tăng chênh lệch thu nhập',explain:'Đáp án đúng là tăng chênh lệch thu nhập. Quá trình tích lũy thường làm của cải tập trung hơn vào phía nhà tư bản. Ví dụ: doanh nghiệp mở rộng nhanh nhưng tiền công của lao động không tăng tương ứng.'},
  {section:'Phần 3 – Lợi nhuận và lợi tức',question:'Chi phí sản xuất tư bản chủ nghĩa được ký hiệu là gì?',options:['m','k','p','v'],answer:'k',explain:'Đáp án đúng là k. Theo bài, chi phí sản xuất tư bản chủ nghĩa là k = c + v. Ví dụ: nguyên liệu + máy móc hao phí + tiền lương.'},
  {section:'Phần 3 – Lợi nhuận và lợi tức',question:'Lợi nhuận thường được ký hiệu là gì?',options:['G','P','K','V'],answer:'P',explain:'Đáp án đúng là P. Lợi nhuận là hình thức biểu hiện chuyển hóa của giá trị thặng dư. Ví dụ: doanh nghiệp tính lãi sau khi trừ chi phí sản xuất.'},
  {section:'Phần 3 – Lợi nhuận và lợi tức',question:'Tỷ suất lợi nhuận được tính theo công thức nào?',options:['p’ = p/(c+v) × 100%','p’ = p/v × 100%','p’ = m/v × 100%','p’ = c/p × 100%'],answer:'p’ = p/(c+v) × 100%',explain:'Đáp án đúng là p’ = p/(c+v) × 100%. Nó phản ánh mức doanh lợi của toàn bộ tư bản ứng trước. Ví dụ: lãi 50 trên tổng vốn 200 thì tỷ suất lợi nhuận là 25%.'},
  {section:'Phần 3 – Lợi nhuận và lợi tức',question:'Giá cả sản xuất bằng gì?',options:['k + lợi nhuận bình quân','c + m','v + p','c + v'],answer:'k + lợi nhuận bình quân',explain:'Đáp án đúng là k + lợi nhuận bình quân. Khi cạnh tranh giữa các ngành diễn ra, giá trị hàng hóa biểu hiện thành giá cả sản xuất. Ví dụ: chi phí 100, lợi nhuận bình quân 20 thì giá cả sản xuất là 120.'},
  {section:'Phần 3 – Lợi nhuận và lợi tức',question:'Lợi tức là gì?',options:['Toàn bộ lợi nhuận doanh nghiệp','Phần lợi nhuận bình quân trả cho người cho vay','Chi phí khấu hao','Thuế gián thu'],answer:'Phần lợi nhuận bình quân trả cho người cho vay',explain:'Đáp án đúng là phần lợi nhuận bình quân trả cho người cho vay. Ví dụ: doanh nghiệp vay vốn ngân hàng thì phải trả một phần lợi nhuận dưới hình thức tiền lãi.'}
];

const LETTERS = ['A','B','C','D'];
const REWARD_POOL_TEMPLATE = [20000,20000,20000,20000,2000,2000,2000,1000,1000,1000,1000,1000,1000,1000,1000];
const WHEEL_THEMES = [
  ['#ffd84d','#ff9b24','#ff7ec7','#ff4da6','#7fe6ff','#45bfff'],
  ['#8cf7bb','#4cd88c','#78deff','#4f9dff','#ffd962','#ff9b54'],
  ['#ffb865','#ff7f50','#ff77b7','#8fd7ff','#6de9c1','#ffd761'],
  ['#ffd84d','#8fe3ff','#7d9cff','#ff8bc2','#b2ff94','#ff9e64']
];
const MASCOTS = ['🦉','🎤','🎪','🎮','🤩','🧠'];

const el = {
  startScreen: document.getElementById('startScreen'),
  gameScreen: document.getElementById('gameScreen'),
  finishScreen: document.getElementById('finishScreen'),
  startBtn: document.getElementById('startBtn'),
  soundBtn: document.getElementById('soundBtn'),
  timeInput: document.getElementById('timeInput'),
  timeValue: document.getElementById('timeValue'),
  volumeInput: document.getElementById('volumeInput'),
  volumeValue: document.getElementById('volumeValue'),
  questionNumber: document.getElementById('questionNumber'),
  timer: document.getElementById('timer'),
  timerPill: document.getElementById('timerPill'),
  score: document.getElementById('score'),
  comboPill: document.getElementById('comboPill'),
  comboValue: document.getElementById('comboValue'),
  questionSection: document.getElementById('questionSection'),
  questionText: document.getElementById('questionText'),
  mascotBubble: document.getElementById('mascotBubble'),
  answersGrid: document.getElementById('answersGrid'),
  explainBox: document.getElementById('explainBox'),
  resultTitle: document.getElementById('resultTitle'),
  explainText: document.getElementById('explainText'),
  knowledgeIcon: document.getElementById('knowledgeIcon'),
  nextBtn: document.getElementById('nextBtn'),
  count20k: document.getElementById('count20k'),
  count2k: document.getElementById('count2k'),
  count1k: document.getElementById('count1k'),
  rewardList: document.getElementById('rewardList'),
  totalReward: document.getElementById('totalReward'),
  finalScore: document.getElementById('finalScore'),
  finalReward: document.getElementById('finalReward'),
  finalRewardList: document.getElementById('finalRewardList'),
  restartBtn: document.getElementById('restartBtn'),
  wheelModal: document.getElementById('wheelModal'),
  wheelDisc: document.getElementById('wheelDisc'),
  wheelPointer: document.querySelector('.wheel-pointer'),
  spinBtn: document.getElementById('spinBtn'),
  wheelResult: document.getElementById('wheelResult'),
  closeWheelBtn: document.getElementById('closeWheelBtn'),
  jackpotBanner: document.getElementById('jackpotBanner')
};

const state = {
  index: 0,
  score: 0,
  timer: 20,
  timerId: null,
  timePerQuestion: 20,
  muted: false,
  volume: 0.9,
  rewardPool: [...REWARD_POOL_TEMPLATE],
  collected: [],
  locked: false,
  questionOrder: [],
  currentQuestion: null,
  currentOptions: [],
  wheelOptions: [],
  wheelPrize: null,
  wheelSpinning: false,
  wheelRotation: 0,
  themeIndex: 0,
  currentStreak: 0,
  bgLoopId: null
};

function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }
function formatMoney(v){ return `${v.toLocaleString('vi-VN')}đ`; }
function buildQuestionOrder(){ return shuffle([...QUESTIONS.keys()]); }
function randomItem(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function normalizeDeg(v){ return ((v % 360) + 360) % 360; }
function getLandedIndex(rotation, total){ const angle = 360 / total; const norm = normalizeDeg(rotation); return Math.floor((((360 - norm) % 360) / angle)) % total; }

function updateVolumeUI(){
  el.volumeValue.textContent = Math.round(state.volume * 100);
  el.soundBtn.textContent = state.muted ? '🔇 Âm thanh: Tắt' : '🔊 Âm thanh: Bật';
}

function playFx(type='good'){
  if (state.muted) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  const patterns = {
    good: {notes:[523,659,784], dur:.16, wave:'triangle', gain:.12},
    bad: {notes:[392,311,247], dur:.18, wave:'sawtooth', gain:.11},
    wheel: {notes:[740,660,588,523,494], dur:.1, wave:'square', gain:.07},
    win: {notes:[659,784,988,1175], dur:.15, wave:'triangle', gain:.13},
    jackpot: {notes:[659,880,1175,1319,1568], dur:.18, wave:'square', gain:.16},
    crowd: {notes:[300,440,620,740,620,880], dur:.08, wave:'triangle', gain:.09},
    ooh: {notes:[220,196,185], dur:.18, wave:'sine', gain:.08},
    ticking: {notes:[1046], dur:.05, wave:'square', gain:.06}
  };
  const p = patterns[type] || patterns.good;
  p.notes.forEach((freq,i)=>{
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = p.wave;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + i*0.11);
    gain.gain.exponentialRampToValueAtTime((p.gain||.1)*state.volume, ctx.currentTime + i*0.11 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i*0.11 + p.dur);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(ctx.currentTime + i*0.11); osc.stop(ctx.currentTime + i*0.11 + p.dur + 0.02);
  });
  setTimeout(()=>ctx.close(),1200);
}

function startHappyBackgroundMusic(){
  stopHappyBackgroundMusic();
  if (state.muted) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  const ctx = new AudioCtx();
  state.bgLoopId = ctx;
  const melody = [523.25,659.25,783.99,880,659.25,587.33,523.25,659.25];
  let i = 0;
  const tick = () => {
    if (state.muted || state.bgLoopId !== ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = melody[i % melody.length];
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.038 * state.volume, ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + 0.42);
    i += 1;
    setTimeout(tick, 460);
  };
  tick();
}
function stopHappyBackgroundMusic(){ if(state.bgLoopId?.close){ try{state.bgLoopId.close();}catch(e){} } state.bgLoopId = null; }

function resetState(){
  state.index = 0; state.score = 0; state.rewardPool = [...REWARD_POOL_TEMPLATE]; state.collected = [];
  state.locked = false; state.questionOrder = buildQuestionOrder(); state.currentQuestion = null; state.currentOptions = [];
  state.wheelOptions = []; state.wheelPrize = null; state.wheelSpinning = false; state.wheelRotation = 0;
  state.themeIndex = 0; state.currentStreak = 0;
  clearInterval(state.timerId); state.timerId = null;
}

function updateRewardStats(){
  el.count20k.textContent = state.rewardPool.filter(v=>v===20000).length;
  el.count2k.textContent = state.rewardPool.filter(v=>v===2000).length;
  el.count1k.textContent = state.rewardPool.filter(v=>v===1000).length;
  const total = state.collected.reduce((s,v)=>s+v,0);
  el.totalReward.textContent = formatMoney(total);
  if(!state.collected.length){ el.rewardList.className='reward-list empty'; el.rewardList.textContent='Chưa có phần quà nào.'; }
  else {
    el.rewardList.className='reward-list';
    el.rewardList.innerHTML = state.collected.map((v,i)=>`<span class="reward-tag">Lượt ${i+1}: ${formatMoney(v)}</span>`).join('');
  }
}

function showExplanation(success, text){
  el.explainBox.classList.remove('hidden','success','fail');
  el.explainBox.classList.add(success ? 'success' : 'fail');
  el.knowledgeIcon.textContent = success ? '💡' : '📘';
  el.resultTitle.textContent = success ? '🎉 Chính xác!' : '❌ Chưa đúng rồi';
  el.explainText.textContent = text;
}
function hideExplanation(){ el.explainBox.classList.add('hidden'); }
function lockAnswers(correctIndex, selectedIndex){
  [...el.answersGrid.querySelectorAll('.answer-btn')].forEach((btn,index)=>{
    btn.classList.add('locked');
    if(index===correctIndex) btn.classList.add('correct');
    if(index===selectedIndex && selectedIndex!==correctIndex) btn.classList.add('wrong');
  });
}

function emitConfetti(count=24, deluxe=false){
  const colors = deluxe ? ['#ffd84d','#fff2ac','#ff8dd1','#7ee8ff','#ff9b24','#ffffff'] : WHEEL_THEMES[state.themeIndex % WHEEL_THEMES.length];
  for(let i=0;i<count;i++){
    const d = document.createElement('div');
    d.className = i % 5 === 0 ? 'streamer' : 'confetti';
    d.style.left = `${Math.random()*100}vw`;
    d.style.background = colors[i % colors.length];
    d.style.animationDelay = `${Math.random()*0.35}s`;
    d.style.transform = `rotate(${Math.random()*180}deg)`;
    document.body.appendChild(d);
    setTimeout(()=>d.remove(),3400);
  }
}
function flashScreen(){ const f=document.createElement('div'); f.className='flash-overlay'; document.body.appendChild(f); setTimeout(()=>f.remove(),760); }
function shakeWrong(){ document.body.classList.add('shake-screen'); setTimeout(()=>document.body.classList.remove('shake-screen'),360); }
function showCombo(){
  if(state.currentStreak >= 2){
    el.comboValue.textContent = state.currentStreak;
    el.comboPill.classList.remove('hidden');
    el.comboPill.animate([{transform:'scale(.7)',opacity:.3},{transform:'scale(1.08)',opacity:1},{transform:'scale(1)',opacity:1}],{duration:700,easing:'ease-out'});
  } else el.comboPill.classList.add('hidden');
}


function buildWheelOptions(){
  state.wheelOptions = shuffle(state.rewardPool);
  const segments = state.wheelOptions.length;
  const angle = 360 / segments;
  const palette = WHEEL_THEMES[state.themeIndex % WHEEL_THEMES.length];
  const gradient = state.wheelOptions.map((value,i)=>{
    const start = i * angle;
    const end = start + angle;
    const color = value===20000 ? palette[(i+1)%palette.length] : value===2000 ? palette[(i+3)%palette.length] : palette[(i+5)%palette.length];
    return `${color} ${start}deg ${end}deg`;
  }).join(',');
  el.wheelDisc.style.background = `conic-gradient(from -90deg, ${gradient})`;
  el.wheelDisc.style.transition = 'none';
  el.wheelDisc.style.transform = `rotate(${state.wheelRotation}deg)`;
  el.wheelDisc.innerHTML = '';
  const radius = segments > 12 ? 150 : 136;
  state.wheelOptions.forEach((value,i)=>{
    const label = document.createElement('div');
    label.className='wheel-segment-label';
    const centerAngle = i * angle + angle / 2;
    const visualAngle = centerAngle - 90;
    label.style.transform = `translate(-50%, -50%) rotate(${visualAngle}deg) translate(${radius}px) rotate(${-visualAngle}deg)`;
    label.textContent = value===20000 ? '20k' : value===2000 ? '2k' : '1k';
    if(value===20000) label.style.color = '#5a2a00';
    el.wheelDisc.appendChild(label);
  });
  for(let i=0;i<segments;i++){
    const pin = document.createElement('div');
    pin.className='wheel-pin';
    const a = i * angle - 90;
    pin.style.transform = `translate(-50%, -50%) rotate(${a}deg) translate(200px)`;
    el.wheelDisc.appendChild(pin);
  }
}

function openWheelModal(){
  buildWheelOptions();
  el.wheelResult.classList.add('hidden');
  el.jackpotBanner.classList.add('hidden');
  el.closeWheelBtn.classList.add('hidden');
  el.spinBtn.disabled = false;
  document.querySelector('.wheel-dialog').classList.remove('jackpot-mode');
  el.wheelModal.classList.remove('hidden');
}
function closeWheelModal(){ el.wheelModal.classList.add('hidden'); document.querySelector('.wheel-dialog').classList.remove('jackpot-mode'); }


function spinWheel(){
  if(state.wheelSpinning || !state.wheelOptions.length) return;
  state.wheelSpinning = true;
  el.spinBtn.disabled = true;
  el.wheelPointer.classList.add('bouncing');
  playFx('wheel');
  const total = state.wheelOptions.length;
  const segmentAngle = 360 / total;
  const chosenIndex = Math.floor(Math.random() * total);
  const targetNorm = normalizeDeg(360 - (chosenIndex * segmentAngle + segmentAngle / 2));
  const currentNorm = normalizeDeg(state.wheelRotation);
  const delta = normalizeDeg(targetNorm - currentNorm);
  const extraTurns = (7 + Math.floor(Math.random()*2)) * 360;
  const finalRotation = state.wheelRotation + extraTurns + delta;
  el.wheelDisc.style.transition = 'transform 8.2s cubic-bezier(0.08, 0.97, 0.13, 1)';
  el.wheelDisc.style.transform = `rotate(${finalRotation}deg)`;
  state.wheelRotation = finalRotation;
  setTimeout(()=>{
    el.wheelPointer.classList.remove('bouncing');
    const actualPrize = state.wheelOptions[chosenIndex];
    state.wheelPrize = actualPrize;
    const idx = state.rewardPool.indexOf(actualPrize);
    if(idx >= 0) state.rewardPool.splice(idx,1);
    state.collected.push(actualPrize);
    updateRewardStats();
    el.wheelResult.textContent = actualPrize===20000 ? `🎉 Bạn nhận được phần thưởng trị giá ${formatMoney(actualPrize)}!` : `🎉 Bạn nhận được ${formatMoney(actualPrize)}!`;
    el.wheelResult.classList.remove('hidden');
    el.wheelResult.classList.toggle('super-win', actualPrize===20000);
    if(actualPrize===20000){
      flashScreen();
      const burst=document.createElement('div');
      burst.className='spot-burst';
      document.body.appendChild(burst);
      setTimeout(()=>burst.remove(),960);
      emitConfetti(120,true);
      playFx('jackpot');
      playFx('crowd');
      el.jackpotBanner.classList.remove('hidden');
      document.querySelector('.wheel-dialog').classList.add('jackpot-mode');
      el.jackpotBanner.textContent = 'PHẦN THƯỞNG TRỊ GIÁ 20K';
      document.querySelector('.wheel-dialog').animate([{transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:550,iterations:2});
    } else {
      emitConfetti(30,false);
      playFx('win');
    }
    el.closeWheelBtn.classList.remove('hidden');
    state.wheelSpinning = false;
    state.themeIndex += 1;
  }, 8260);
}

function finishGame(){
  clearInterval(state.timerId);
  el.gameScreen.classList.add('hidden'); el.finishScreen.classList.remove('hidden');
  const total = state.collected.reduce((s,v)=>s+v,0);
  el.finalScore.textContent = `${state.score}/15`;
  el.finalReward.textContent = formatMoney(total);
  el.finalRewardList.innerHTML = state.collected.length ? state.collected.map((v,i)=>`<span class="final-tag">Quà ${i+1}: ${formatMoney(v)}</span>`).join('') : '<span class="final-tag">Chưa nhận được phần quà nào.</span>';
}

function nextQuestion(){ state.index += 1; if(state.index >= QUESTIONS.length) finishGame(); else renderQuestion(); }

function handleWrong(selectedIndex){
  playFx('bad'); playFx('ooh'); shakeWrong(); clearInterval(state.timerId); state.currentStreak = 0; showCombo();
  const correctIndex = state.currentOptions.findIndex(opt => opt === state.currentQuestion.answer);
  lockAnswers(correctIndex, selectedIndex); showExplanation(false, state.currentQuestion.explain); el.nextBtn.classList.remove('hidden');
}
function handleCorrect(selectedIndex){
  playFx('good'); playFx('crowd'); clearInterval(state.timerId); state.score += 1; state.currentStreak += 1; showCombo();
  el.score.textContent = state.score;
  const correctIndex = state.currentOptions.findIndex(opt => opt === state.currentQuestion.answer);
  lockAnswers(correctIndex, selectedIndex); showExplanation(true, state.currentQuestion.explain); openWheelModal();
}
function handleAnswer(selectedIndex){
  if(state.locked) return; state.locked = true;
  const selectedText = state.currentOptions[selectedIndex];
  selectedText === state.currentQuestion.answer ? handleCorrect(selectedIndex) : handleWrong(selectedIndex);
}

function startTimer(){
  clearInterval(state.timerId); state.timer = state.timePerQuestion; el.timer.textContent = state.timer; el.timerPill.classList.remove('danger');
  state.timerId = setInterval(()=>{
    state.timer -= 1; el.timer.textContent = state.timer;
    if(state.timer <= 5){ el.timerPill.classList.add('danger'); playFx('ticking'); }
    if(state.timer <= 0){ clearInterval(state.timerId); state.locked = true; handleWrong(-1); }
  },1000);
}

function renderQuestion(){
  clearInterval(state.timerId); state.locked = false;
  state.currentQuestion = QUESTIONS[state.questionOrder[state.index]];
  state.currentOptions = shuffle(state.currentQuestion.options);
  el.questionNumber.textContent = state.index + 1;
  el.score.textContent = state.score;
  el.questionSection.textContent = state.currentQuestion.section;
  el.questionText.textContent = state.currentQuestion.question;
  el.mascotBubble.textContent = randomItem(MASCOTS);
  el.answersGrid.innerHTML=''; hideExplanation(); el.nextBtn.classList.add('hidden'); closeWheelModal();
  state.currentOptions.forEach((option,index)=>{
    const btn = document.createElement('button');
    btn.className='answer-btn';
    btn.innerHTML=`<span class="answer-label">${LETTERS[index]}.</span>${option}`;
    btn.addEventListener('click',()=>handleAnswer(index));
    el.answersGrid.appendChild(btn);
  });
  startTimer();
}

function startGame(){
  state.timePerQuestion = Math.min(60, Math.max(8, Number(el.timeInput.value)||20));
  resetState(); updateRewardStats(); startHappyBackgroundMusic();
  el.startScreen.classList.add('hidden'); el.finishScreen.classList.add('hidden'); el.gameScreen.classList.remove('hidden');
  renderQuestion();
}

el.startBtn.addEventListener('click', startGame);
el.nextBtn.addEventListener('click', nextQuestion);
el.restartBtn.addEventListener('click', ()=>{ el.finishScreen.classList.add('hidden'); el.startScreen.classList.remove('hidden'); showCombo(); });
el.spinBtn.addEventListener('click', spinWheel);
el.closeWheelBtn.addEventListener('click', ()=>{ closeWheelModal(); el.nextBtn.classList.remove('hidden'); });
el.soundBtn.addEventListener('click', ()=>{ state.muted = !state.muted; updateVolumeUI(); state.muted ? stopHappyBackgroundMusic() : startHappyBackgroundMusic(); });
el.timeInput.addEventListener('input', ()=> el.timeValue.textContent = el.timeInput.value);
el.volumeInput.addEventListener('input', ()=>{ state.volume = Number(el.volumeInput.value) / 100; updateVolumeUI(); if(!state.muted) startHappyBackgroundMusic(); });
updateVolumeUI();
