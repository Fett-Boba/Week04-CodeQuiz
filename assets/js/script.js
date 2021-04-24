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
var scorePtext = document.querySelector("#scorePtext");

var secondsLeft = 60;
var qnum = 0;
var button;
var score = 0;
var hiScores = [];
var scoreOut;

var questions = [
    {
        question: "What HTML element do we use to point to our script?",
        choices: ["<scripting>", "<script>", "<javascript>", "<js>"],
        answer: "<script>"
    },
    {
        question: "Where can you insert your JavaScripts?",
        choices: ["<body>", "<head>", "Both"],
        answer: "Both"
    },
    {
        question: "How do you call a function?",
        choices: ["call myFunction()", "call function(myFunction)", "myFunction()", "call myFunction()"],
        answer: "myFunction()"
    },
    {
        question: "The external JavaScript file must contain the <script> tag?",
        choices: ["True", "False"],
        answer: "False"
    },
    {
        question: "How do you add a comment in JavaScript?",
        choices: ["// comment", "<!-- comment -->", "# comment"],
        answer: "// comment"
    }
];

//Start the clock, and display first question 
function startQuiz(event) {
    event.preventDefault();
    displayTimer.textContent = "Time: " + secondsLeft;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayTimer.textContent = "Time: " + secondsLeft;
        
        // When time is up or all questions answered the quiz is over
        if (secondsLeft <= 0 || qnum === questions.length) {
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
            var br = document.createElement('br');
            buttonContainer.appendChild(br);
        };
    } else {
        questionContainer.classList.add("hidden");
        gameOverContainer.classList.remove("hidden");
    }
}

//Check for correct answer, update score if correct, and display next question
function checkAnswer(event) {
    var correct;
    if (event.target.outerText === questions[qnum].answer) {
        score++;
        scorePtext.innerText ="Score: " + score + "/5";
    } else {
        secondsLeft = secondsLeft -10;
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
    if (initials.value !== "") {
        hiScores[hiScores.length] = initials.value + ": " + score;
    } else {
        hiScores[hiScores.length] = "Anonymous: " + score;
    }
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

//Reset all containers in prep for a restarting the quiz
function resetForNewQuiz() {
    hiScoresContainer.classList.add("hidden");
    gameOverContainer.classList.add("hidden");
    questionContainer.classList.add("hidden");
    startContainer.classList.remove("hidden");
    secondsLeft = 60;       //reset clock
    qnum = 0;               //reset question number back to 0
    score = 0;              //reset score
    scorePtext.innerText ="Score: " + score + "/5";
    initials.value = "";    //clear initials
    displayTimer.textContent = "";
}

// Listeners
startButton.addEventListener("click", startQuiz);
buttonContainer.addEventListener("click", checkAnswer);
saveHiScoreButton.addEventListener("click", saveHiScore);
restartQuizBtn.addEventListener("click", restartQuiz);
clearHiScoresBtn.addEventListener("click", clearHiScores);