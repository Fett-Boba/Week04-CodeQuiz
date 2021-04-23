var txtOutQuestion = document.querySelector("#txtOutQuestion");
var buttonContainer = document.querySelector("#buttonContainer");
var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var startContainer = document.querySelector("#startContainer");
var displayTimer = document.querySelector("#displayTimer");
var saveHiScoreButton = document.querySelector("#saveHiScoreButton");
var initials = document.querySelector("#initials");

var restartQuizBtn = document.querySelector("#restartQuizBtn");
var clearHiScoresBtn = document.querySelector("#clearHiScoresBtn");
var txtOutHiScores = document.querySelector("#txtOutHiScores");

var secondsLeft = 30;
var qnum = 0;
var button;
var score = 0;
var hiScores = [];
var scoreOut;

// NOTE! I just noticed TODAY it was supposed to be JS questions, but thought I would keep it like this for your entertainment
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

//Start the clock, and display first question 
function startQuiz(event) {
    event.preventDefault();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayTimer.textContent = secondsLeft;
        if (secondsLeft === 0 || qnum === questions.length) {
            clearInterval(timerInterval);
            clearButtons();
            questionContainer.classList.add("hidden");   
            gameOverContainer.classList.remove("hidden");
        };
    }, 1000);
    startContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    displayQuestion();
}

//Cycle through and display all questions. At end, hide the question container and display game over
function displayQuestion() {
    if (qnum < questions.length) {
        txtOutQuestion.value = questions[qnum].question;
        for (var j = 0; j < questions[qnum].choices.length; j++) {
            button = document.createElement('button');
            button.textContent = questions[qnum].choices[j];
            buttonContainer.appendChild(button);
        };
    } else {
        questionContainer.classList.add("hidden");      
        gameOverContainer.classList.remove("hidden");
    }
}

//Check for correct answer, update score if correct, and display next question
function checkAnswer(event) {
    if (event.target.outerText === questions[qnum].answer) {
        score++;
    }
    clearButtons();
    qnum++;
    displayQuestion();
}

//Clear the choices/answers in prep for next question
function clearButtons() {
    while (buttonContainer.firstChild) {
        buttonContainer.removeChild(buttonContainer.firstChild);
    }
}

//Clear scores at user request
function clearScores() {
    while (txtOutHiScores.firstChild) {
        txtOutHiScores.removeChild(txtOutHiScores.firstChild);
    }
}

//Save high score
function saveHiScore(event) {
    event.preventDefault();
    hiScores[hiScores.length] = initials.value + ": " + score;
    gameOverContainer.classList.add("hidden");
    hiScoresContainer.classList.remove("hidden");
    displayHiScores();
}

//Display the high scores
function displayHiScores() {
    clearScores();
    for (var i = 0; i < hiScores.length; i++) {
        scoreOut = document.createElement('p');
        scoreOut.textContent = hiScores[i] + "/" + questions.length;        
        txtOutHiScores.appendChild(scoreOut);
    }
}

//Reset varaibles and clear hi score array upon request
function clearHiScores(event) {
    hiScores = [];
    resetForNewQuiz();
}

//Reset variables upon restart quiz request
function restartQuiz() {
    resetForNewQuiz();
}

//Reset all containers to original state
function resetForNewQuiz() {
    hiScoresContainer.classList.add("hidden");
    gameOverContainer.classList.add("hidden");
    questionContainer.classList.add("hidden");
    startContainer.classList.remove("hidden");
    secondsLeft = 30;       //reset clock
    qnum = 0;               //reset question number back to 0
    score = 0;              //reset score
    initials.value = "";    //clear initials
}

// Listeners
startButton.addEventListener("click", startQuiz);
buttonContainer.addEventListener("click", checkAnswer);
saveHiScoreButton.addEventListener("click", saveHiScore);
restartQuizBtn.addEventListener("click", restartQuiz);
clearHiScoresBtn.addEventListener("click", clearHiScores);


