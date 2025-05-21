const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        correctAnswer: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map(option => 
            `<div class="option" onclick="selectAnswer('${option}')">${option}</div>`
        ).join('')}
    `;
}

function selectAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    if (selectedOption === correctAnswer) {
        score++;
    }

    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
        if (option.innerText === correctAnswer) {
            option.style.backgroundColor = 'lightgreen';
        }
        if (option.innerText === selectedOption && selectedOption !== correctAnswer) {
            option.style.backgroundColor = 'red';
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("result-container").style.display = 'block';
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = 'block';
    document.getElementById("result-container").style.display = 'none';
    loadQuestion();
}

// Start the quiz
loadQuestion();
