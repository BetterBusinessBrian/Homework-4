var timeEl = document.getElementById("seconds")
var startButton = document.getElementById("startButton")
var question = document.getElementById("question")
var answers = document.getElementById("answers")
var title = document.getElementById("title")
var questionNumber = 0
var form =document.getElementById("scoreplaceholder")
var scoreDisplay = document.getElementById("score-display")

form.style.visibility = 'hidden'

var secondsLeft = 75;

var questionArray = [
{   question: "Common used data types DO NOT include: ",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 1
},
{   question: "The condition of an If/Else Statement is enclosed within_____.  ",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 3
},
{   question: "Arrays in Javascript can be used to store: ",
    answers: ["numbers and strings", "other arrays", "booleans", "all the above"],
    correctAnswer: 4
},
{   question: "string values must be enclosed in ______ when being assigned to variables : ",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 3
},
{   question: "A very useful tool used in development for debugging is _____: ",
    answers: ["javascript", "terminal/bash", "for loops", "console logs"],
    correctAnswer: 4
}
]


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft ;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}


function createButtons(questionArray){
  for(i=0; i< questionArray.answers.length; i++){
    var button= document.createElement("button");
    button.innerHTML= questionArray.answers[i];
    button.className= "btn btn-outline-success";
    answers.appendChild(button);
  }
}

function setUpTest(){
  startButton.remove()
  question.textContent = questionArray[0].question;
  createButtons(questionArray[0]);
  console.log(questionArray[0]);
}

function finishGame(){
question.textContent= "Nicely done!"
Object.freeze(secondsLeft);
localStorage.setItem("score", secondsLeft)
scoreDisplay.value = "Your score: " + localStorage.getItem("score") 
form.style.visibility = 'visible'; 
}

function nextQuestion(){
  questionNumber ++;
  answers.innerHTML= ""
  if (questionNumber < 5){
  question.textContent = questionArray[questionNumber].question;
  createButtons(questionArray[questionNumber]);
} else {
  finishGame()
}
}


startButton.addEventListener("click", function(){
    setTime();
    setUpTest()
    console.log("Im clicked")
});

answers.addEventListener("click", function(){
  nextQuestion();
  
  //if statement for correct answer or not
})

//add eventlistener for hitting submit on form, function
  //committ name and score to highscores array
  //run some kind of sort
  //display highscores.html
//