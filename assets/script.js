const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

let questions = [{
        question: "What is javascript?",
        choice1: "Company",
        choice2: "Programming language",
        choice3: "Brand",
        answer: 2
    },
    {
        question: "Inside which html element do we put the Javascript?",
        choice1: "<script>",
        choice2: "<js>",
        choice3: "<javascripting>",
        answer: 1
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choice1: "the <head> section",
        choice2: "the <body> section",
        choice3: "both the <head> and <body> section are correct",
        answer: 3
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choice1: "True",
        choice2: "False",
        choice3: "Maybe",
        answer: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function myFunction()",
        choice3: "functions:myFunction()",
        answer: 2
    },
    {
        question: "How do you add a comment in a javascript?",
        choice1: "<!--this is a comment-->",
        choice2: "'this is a comment",
        choice3: "//This is a comment",
        answer: 3
    },
    {
        question: "Javascript is the same as Java",
        choice1: "True",
        choice2: "False",
        choice3: "Honestly, I dont know",
        answer: 2
    },

]


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 10;
    avaliableQuestions = [...questions];
    console.log(avaliableQuestions);
    timer = setInterval(startTime, 1000);
    getNewQuestion();


};

getNewQuestion = () => {
    if (avaliableQuestions.length === 0 || questionCounter >
        MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign("../assets/end.html");

    }




    questionCounter++;
    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    avaliableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];


        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";


        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);






    });
});


startGame();

var timer;
var ele = document.getElementById('timer');
console.log(ele);
(function() {
    var sec = 75;
    timer = setInterval(() => {
        ele.innerHTML = '00:' + sec;
        sec++;
    }, 1000)

})

var gameTime = 75;

function startTime() {
    var sec = 75;
    gameTime--
    ele.textContent = gameTime
}

function storeHighScore() {
    addEventListener('click')
};