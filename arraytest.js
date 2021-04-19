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

var txtOutQuestion = document.querySelector("#txtOutQuestion");
var buttonContainer = document.querySelector("#buttonContainer");

var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var startContainer = document.querySelector("#startContainer");
var displayTimer = document.querySelector("#displayTimer");
var secondsLeft = 100;
var i=0;
var j=0;

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

    //for (i = 0; i < questions.length; i++) {
        txtOutQuestion.value = questions[i].question;
        
        for (j = 0; j < questions[i].choices.length; j++) {
            var button = document.createElement('button');
            button.textContent = questions[i].choices[j];
            buttonContainer.appendChild(button);
        };
    //};
}



function checkAnswer(event) {
    console.log("in checkanswer");
    console.log(event.target.outerText);

    console.log("answer: " + questions[i].answer);

    if (event.target.outerText === questions[i].answer) {
        console.log("right answer !!!!!");
    } else {
        console.log("NOPE");
    }
}

startButton.addEventListener("click", startQuiz);
buttonContainer.addEventListener("click", checkAnswer);

