// quiz.js

const questions = [
    { question: 'What is the capital of France?', answers: ['Paris', 'London', 'Berlin'], correct: 'Paris' },
    { question: 'What is 2 + 2?', answers: ['3', '4', '5'], correct: '4' },
    { question: 'What is the largest mammal?', answers: ['Elephant', 'Blue Whale', 'Giraffe'], correct: 'Blue Whale' },
    { question: 'What is the chemical symbol for water?', answers: ['H2O', 'O2', 'CO2'], correct: 'H2O' },
    { question: 'Who wrote Romeo and Juliet?', answers: ['Charles Dickens', 'William Shakespeare', 'J.K. Rowling'], correct: 'William Shakespeare' },
    { question: 'What is the smallest prime number?', answers: ['1', '2', '3'], correct: '2' },
    { question: 'What is the speed of light?', answers: ['300,000 km/s', '150,000 km/s', '1,000,000 km/s'], correct: '300,000 km/s' },
    { question: 'Who painted the Mona Lisa?', answers: ['Van Gogh', 'Da Vinci', 'Picasso'], correct: 'Da Vinci' },
    { question: 'What is the largest planet in our solar system?', answers: ['Earth', 'Jupiter', 'Saturn'], correct: 'Jupiter' },
    { question: 'What is the hardest natural substance on Earth?', answers: ['Gold', 'Iron', 'Diamond'], correct: 'Diamond' },
    { question: 'What is the freezing point of water?', answers: ['0°C', '100°C', '32°F'], correct: '0°C' },
    { question: 'Who discovered penicillin?', answers: ['Marie Curie', 'Alexander Fleming', 'Louis Pasteur'], correct: 'Alexander Fleming' },
    { question: 'What gas do plants absorb from the atmosphere?', answers: ['Oxygen', 'Nitrogen', 'Carbon Dioxide'], correct: 'Carbon Dioxide' },
    { question: 'What is the main ingredient in guacamole?', answers: ['Avocado', 'Tomato', 'Onion'], correct: 'Avocado' },
    { question: 'What is the tallest mountain in the world?', answers: ['K2', 'Kangchenjunga', 'Mount Everest'], correct: 'Mount Everest' }
];

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = questions.length;
let timer;
const timeLimit = 30; // seconds

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startTimer();
    displayQuestion();
}

function startTimer() {
    let timeRemaining = timeLimit;
    timer = setInterval(() => {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            showResults();
        }
    }, 1000);
}

function displayQuestion() {
    const questionDiv = document.getElementById('question');
    const answersDiv = document.getElementById('answers');
    questionDiv.innerText = questions[currentQuestionIndex].question;
    answersDiv.innerHTML = '';
    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = checkAnswer;
        answersDiv.appendChild(button);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer);
    alert(`Quiz completed! Your score is ${score}/${totalQuestions}`);
}

// Initialize the quiz when the page loads
window.onload = startQuiz;

