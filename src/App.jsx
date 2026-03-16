import { useEffect, useMemo, useState } from 'react';
import { QUESTIONS, QUESTION_TIME } from './data/questions';

const STATUS = {
  START: 'start',
  PLAYING: 'playing',
  REWARD_PICK: 'reward-pick',
  FINISHED: 'finished'
};

const createRewardPool = () => [20000, 2000, 2000, 2000, ...Array(11).fill(1000)];

const formatMoney = (value) => `${value.toLocaleString('vi-VN')}đ`;

function playTone(type) {
  const AudioContextRef = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextRef) return;

  const ctx = new AudioContextRef();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.type = type === 'wrong' ? 'sawtooth' : 'triangle';
  oscillator.frequency.value = type === 'correct' ? 660 : type === 'open' ? 880 : 240;

  const now = ctx.currentTime;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.3, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

  oscillator.start(now);
  oscillator.stop(now + 0.3);

  oscillator.onended = () => ctx.close();
}

function getRandomBoxOptions(pool, count = 4) {
  if (pool.length === 0) return [];
  const picks = [];
  for (let i = 0; i < count; i += 1) {
    const randomValue = pool[Math.floor(Math.random() * pool.length)];
    picks.push(randomValue);
  }
  return picks;
}

export default function App() {
  const [status, setStatus] = useState(STATUS.START);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(QUESTION_TIME);
  const [correctCount, setCorrectCount] = useState(0);
  const [rewardPool, setRewardPool] = useState(createRewardPool);
  const [collectedRewards, setCollectedRewards] = useState([]);
  const [boxOptions, setBoxOptions] = useState([]);
  const [feedback, setFeedback] = useState('');

  const totalReward = useMemo(
    () => collectedRewards.reduce((sum, reward) => sum + reward, 0),
    [collectedRewards]
  );

  const currentQuestion = QUESTIONS[currentIndex];

  useEffect(() => {
    if (status !== STATUS.PLAYING) return undefined;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setFeedback('Hết giờ! Câu này bị tính là sai.');
          playTone('wrong');
          setTimeout(() => moveToNextQuestion(), 650);
          return QUESTION_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, currentIndex]);

  function resetGame() {
    setStatus(STATUS.START);
    setCurrentIndex(0);
    setTimer(QUESTION_TIME);
    setCorrectCount(0);
    setRewardPool(createRewardPool());
    setCollectedRewards([]);
    setBoxOptions([]);
    setFeedback('');
  }

  function startGame() {
    setStatus(STATUS.PLAYING);
    setTimer(QUESTION_TIME);
    setFeedback('');
  }

  function moveToNextQuestion() {
    const next = currentIndex + 1;
    setFeedback('');
    if (next >= QUESTIONS.length) {
      setStatus(STATUS.FINISHED);
      return;
    }
    setCurrentIndex(next);
    setTimer(QUESTION_TIME);
    setStatus(STATUS.PLAYING);
  }

  function handleAnswer(optionIndex) {
    if (status !== STATUS.PLAYING) return;

    const isCorrect = optionIndex === currentQuestion.correctIndex;

    if (!isCorrect) {
      setFeedback('Sai rồi! Chuyển sang câu kế tiếp...');
      playTone('wrong');
      setTimeout(() => moveToNextQuestion(), 600);
      return;
    }

    setCorrectCount((prev) => prev + 1);
    setFeedback('Chính xác! Chọn 1 hộp quà may mắn 🎁');
    playTone('correct');
    setBoxOptions(getRandomBoxOptions(rewardPool));
    setStatus(STATUS.REWARD_PICK);
  }

  function pickReward(selectedReward) {
    playTone('open');
    setCollectedRewards((prev) => [...prev, selectedReward]);

    setRewardPool((prevPool) => {
      const removeIndex = prevPool.indexOf(selectedReward);
      if (removeIndex === -1) return prevPool;
      return prevPool.filter((_, idx) => idx !== removeIndex);
    });

    setFeedback(`Bạn nhận được ${formatMoney(selectedReward)}!`);
    setTimeout(() => moveToNextQuestion(), 700);
  }

  return (
    <div className="app-bg">
      <div className="game-card">
        <h1>🎉 Mini Quiz Nhận Quà 🎉</h1>

        {status === STATUS.START && (
          <section className="panel center">
            <p>15 câu hỏi trắc nghiệm, trả lời đúng để mở quà!</p>
            <button className="primary-btn" onClick={startGame}>
              Bắt đầu trò chơi
            </button>
          </section>
        )}

        {(status === STATUS.PLAYING || status === STATUS.REWARD_PICK) && (
          <section className="panel">
            <div className="meta-row">
              <span>Câu {currentIndex + 1}/15</span>
              <span className={`timer ${timer <= 5 ? 'danger' : ''}`}>⏱ {timer}s</span>
              <span>Đúng: {correctCount}</span>
            </div>

            <h2>{currentQuestion.question}</h2>

            {status === STATUS.PLAYING && (
              <div className="grid-options">
                {currentQuestion.options.map((option, idx) => (
                  <button key={option} className="option-btn" onClick={() => handleAnswer(idx)}>
                    {option}
                  </button>
                ))}
              </div>
            )}

            {status === STATUS.REWARD_PICK && (
              <div>
                <p className="hint">Trả lời đúng! Chọn 1 trong 4 hộp quà:</p>
                <div className="gift-grid">
                  {boxOptions.map((reward, idx) => (
                    <button key={`${reward}-${idx}`} className="gift-box" onClick={() => pickReward(reward)}>
                      🎁 Hộp {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {feedback && <p className="feedback">{feedback}</p>}
          </section>
        )}

        {status === STATUS.FINISHED && (
          <section className="panel center">
            <h2>Tổng kết trò chơi</h2>
            <p>Số câu đúng: {correctCount}/15</p>
            <p>Tổng quà nhận được: <strong>{formatMoney(totalReward)}</strong></p>
            <p>Kho quà còn lại: {rewardPool.length} phần</p>
            <button className="primary-btn" onClick={resetGame}>
              Chơi lại
            </button>
          </section>
        )}
      </div>
    </div>
  );
}
