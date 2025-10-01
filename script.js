const quizData = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Colorful Style Sheets"
    ],
    correct: 1
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Markup Language",
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "HighText Machine Language"
    ],
    correct: 1
  },
  {
    question: "Which year was JavaScript launched?",
    answers: ["1996", "1995", "1994", "None of the above"],
    correct: 1
  },
  {
    question: "Which tag is used to link a JavaScript file?",
    answers: ["<script>", "<link>", "<js>", "<javascript>"],
    correct: 0
  },
  {
    question: "Inside which HTML element do we put the CSS?",
    answers: ["<script>", "<style>", "<css>", "<design>"],
    correct: 1
  },
  {
    question: "Which property is used to change text color in CSS?",
    answers: ["font-style", "color", "background-color", "text-color"],
    correct: 1
  },
  {
    question: "Which method is used to print messages in the console?",
    answers: ["console.write()", "print()", "console.log()", "log.print()"],
    correct: 2
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Google", "Oracle"],
    correct: 1
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["class", "style", "font", "styles"],
    correct: 1
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "/* */", "#", "<!-- -->"],
    correct: 0
  },
  {
    question: "Which HTML element is used for the largest heading?",
    answers: ["<heading>", "<h1>", "<h6>", "<head>"],
    correct: 1
  },
  {
    question: "Which CSS property controls the text size?",
    answers: ["text-style", "font-size", "text-size", "font-weight"],
    correct: 1
  },
  {
    question: "What is the default display value of a <div> element?",
    answers: ["inline", "block", "flex", "grid"],
    correct: 1
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: ["var", "int", "string", "letvar"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns.forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.style.background = "#f4f4f4";
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const q = quizData[currentQuestion];
  if (selected === q.correct) {
    score++;
    answerBtns[selected].style.background = "lightgreen";
  } else {
    answerBtns[selected].style.background = "salmon";
    answerBtns[q.correct].style.background = "lightgreen";
  }
  answerBtns.forEach(btn => btn.disabled = true);
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `🎉 You scored ${score} out of ${quizData.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
}

// Load first question
loadQuestion();
