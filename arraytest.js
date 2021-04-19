var txtOutQuestion = document.querySelector("#txtOutQuestion");
var buttonContainer = document.querySelector("#buttonContainer");
var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var startContainer = document.querySelector("#startContainer");
var displayTimer = document.querySelector("#displayTimer");
var secondsLeft = 30;
var qnum = 0;
var button;

var questions = [
    {
        question: "What did fans name The Child?",
        choices: ["Baby Mandalorian", "Baby Jabba", "Baby Yoda", "Baby Groot"],
        answer: "Baby Yoda"
    },
    {
        question: "What is The Childs real name?",
        choices: ["Smeagol", "Rocket", "Chucky", "Grogu"],
        answer: "Grogu"
    },
    {
        question: "What is The Mandalorians name?",
        choices: ["Din Djarin", "Greef Karga", "Fennec Shand", "He has no name"],
        answer: "Din Djarin"
    },
    {
        question: "What is The Mandalorians armor made of?",
        choices: ["Carbonite", "Beskar", "Mithril", "Duriam"],
        answer: "Beskar"
    },
    {
        question: "What is the name of The Mandalorians ship?",
        choices: ["Razor Crest", "Millenium Falcon", "Enterprise", "Ebon Hawk"],
        answer: "Razor Crest"
    }
];

function startQuiz(event) {
    event.preventDefault();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayTimer.textContent = secondsLeft;
        if (secondsLeft === 0) {
            console.log("game over");
            clearInterval(timerInterval);
        }
    }, 1000);

    startContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    displayQuestion();
}

function displayQuestion() {
    if (qnum < questions.length) {
        txtOutQuestion.value = questions[qnum].question;
        for (var j = 0; j < questions[qnum].choices.length; j++) {
            button = document.createElement('button');
            button.textContent = questions[qnum].choices[j];
            buttonContainer.appendChild(button);
        };
    } else {
        console.log("end of game");
    }
}

function checkAnswer(event) {
    if (event.target.outerText === questions[qnum].answer) {
        console.log("right answer !!!!!");
    } else {
        console.log("NOPE");
    }
    clearButtons();
    qnum++;
    displayQuestion();
}

function clearButtons() {
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }
}

startButton.addEventListener("click", startQuiz);
buttonContainer.addEventListener("click", checkAnswer);

