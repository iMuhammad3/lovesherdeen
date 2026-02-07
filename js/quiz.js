const allQuestions = [
    {
        question: "My favorite way to spend free time?",
        answers: [
            "Sleeping",
            "Learning",
            "Overthinking life",
            "All of the above",
        ],
        correct: 4,
        difficulty: "medium",
    },
    {
        question: "What describes me best?",
        answers: ["Chill", "Quiet but deep", "Funny", "A bit of everything"],
        correct: 4,
        difficulty: "medium",
    },
    {
        question: "What’s my love language?",
        answers: ["Words", "Quality Time", "Physical touch", "Gifts"],
        correct: 2,
        difficulty: "medium",
    },
    {
        question: "What scares me more?",
        answers: ["Failure", "Wasted potential", "Being misunderstood"],
        correct: 3,
        difficulty: "medium",
    },
    {
        question: "What’s something I rarely say out loud?",
        answers: ["I need rest", "I care about you", "I’m shy"],
        correct: 2,
        difficulty: "medium",
    },
    {
        question: "The Surah I recite most often is",
        answers: ["Kahf", "Saffat", "Yusuf", "Naml"],
        correct: 1,
        difficulty: "medium",
    },
    {
        question: "What's my best way to start the day",
        answers: ["Morning walk", "Workout", "Sleep", "Writing"],
        correct: 1,
        difficulty: "medium",
    },
    {
        question: "What am I most conscious of",
        answers: ["My emotions", "My thoughts", "My surroundings"],
        correct: 2,
        difficulty: "medium",
    },
    
    {
        question: "In my friend group, what role do I play",
        answers: ["Quiet one", "Silly and Goofy", "The driver", "The planner"],
        correct: 2,
        difficulty: "medium",
    },
    {
        question: "Which is my least favorite of these series",
        answers: [
            "Suits",
            "The Good Doctor",
            "Peaky Blinders",
            "Young Sheldon",
        ],
        correct: 3,
        difficulty: "hard",
    },
    {
        question: "How many online chess games have I played",
        answers: [
            "10+",
            "100+",
            "1000+",
            "5000+",
        ],
        correct: 4,
        difficulty: "hard",
    },
    {
        question: "What's a name I'd give to my son",
        answers: [
            "Ibrahim",
            "Abdullah",
            "Ahmad",
            "Chukwuemeka",
        ],
        correct: 1,
        difficulty: "hard",
    },
    {
        question: "Why did I make this website",
        answers: [
            "To advance my coding skills",
            "I had too much free time",
            "To impress you and make you fall in love with me",
            "All of the above",
        ],
        correct: 3,
        difficulty: "hard",
    },
];

const difficultySelect = document.getElementById("difficulty-select");
const quizEl = document.getElementById("quiz");

let questions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

function startQuiz(level) {
    questions = allQuestions.filter(q => q.difficulty === level);

    difficultySelect.classList.add("hidden");
    quizEl.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;

    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(index) {
    console.log(questions[currentQuestion].correct);
    
    if ((index+1) === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    scoreEl.classList.remove("hidden");
    restartBtn.classList.remove("hidden");

    let message = "";

    if (score === questions.length) {
        message = "Okay wow… you actually know me ";
    } else if (score >= questions.length / 2) {
        message = "Hmm… Not bad";
    } else {
        message = "💀 you no try sha";
    }

    scoreEl.innerHTML = `You scored ${score}/${questions.length}.<br> ${message}`;
}

restartBtn.onclick = () => {
    score = 0;
    currentQuestion = 0;
    document.getElementById("quiz").classList.remove("hidden");
    scoreEl.classList.add("hidden");
    restartBtn.classList.add("hidden");
    showQuestion();
};
