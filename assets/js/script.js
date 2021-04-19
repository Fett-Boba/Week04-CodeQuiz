var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var startContainer = document.querySelector("#startContainer");
var displayTimer = document.querySelector("#displayTimer");
var question = document.querySelector("#question");


// var button0 = document.querySelector("button0");
// var button1 = document.querySelector("button1");
// var button2 = document.querySelector("button2");
// var button3 = document.querySelector("button3");



var secondsLeft = 5;

// Array of qestions and answers
var questions = [
    { question: "What did fans name The Child?",
      choices: ["Baby Mandalorian","Baby Jabba","Baby Yoda","Baby Groot"],  
      answer: 2},
    { question: "What is The Childs real name?",
      choices: ["Smeagol","Gizmo","Chucky","Grogu"],
      answer: 3},
    { question: "What is The Mandalorians name?",
      choices: ["Din Djarin","Greef Karga","Fennec Shand","He has no name"],
      answer: 0},
    { question: "What is The Mandalorians armor made of?",
      choices: ["Carbonite","Beskar","Mithril","Duriam"],
      answer: 1},
    {question: "What is the name of The Mandalorians ship?",
      choices: ["Razor Crest","Millenium Falcon","Enterprise","Ebon Hawk"],
      answer: 0}];

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
        //if answer correct, display correct, score ++
        //else display incorrect, endif
        //display next question
    }
}

function displayNewQuestion() {
    
    questionContainer.question.textContent = "HI";




}


// Start button listener
startButton.addEventListener("click", startQuiz);
questionContainer.addEventListener("click", checkAnswer);

//displayNewQuestion();


