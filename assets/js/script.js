var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var startContainer = document.querySelector("#startContainer");
var displayTimer = document.querySelector("#displayTimer");


var secondsLeft = 5;




// Start button event handler
function startQuiz(event) {
    event.preventDefault();
    console.log("Game is started");
    var timerInterval = setInterval(function(){
        secondsLeft--;
        console.log(secondsLeft);

        displayTimer.textContent = secondsLeft;


        if (secondsLeft === 0) {
            console.log("game over");
            clearInterval(timerInterval);
        }
    }   ,1000);

    // hide start button container
    console.log(startContainer);
    startContainer.classList.add("hidden");

    // display question container
    questionContainer.classList.remove("hidden");



}

function checkAnswer(event) {
    console.log(event.target.type);
    
    if (event.target.type === "button") {
        console.log()
    
        //if answer correct
        //  display correct 
        //  score ++
        //else 
        //   display incorrect

        //display next question
    }
}

function displayNextQuestion() {



}

// Start button listener
startButton.addEventListener("click", startQuiz);
questionContainer.addEventListener("click", checkAnswer);


