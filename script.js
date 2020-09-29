var timeEl = document.getElementById("seconds")
var startButton = document.getElementById("startButton")
var secondsLeft = 75;

var questions = [
{   question = "Common used data types DO NOT include: ",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 1
},
{   question = "The condition of an If/Else Statement is enclosed within_____.  ",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 3
},
{   question = "Arrays in Javascript can be used to store: ",
    answers: ["numbers and strings", "other arrays", "booleans", "all the above"],
    correctAnswer: 4
},
{   question = "string values must be enclosed in ______ when being assigned to variables : ",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 3
},
{   question = "A very useful tool used in development for debugging is _____: ",
    answers: ["javascript", "terminal/bash", "for loops", "console logs"],
    correctAnswer: 1
}
]


function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft ;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);(any);
    }

  }, 1000);
}


startButton.addEventListener("click", function(event){
    event.preventDefault();
    setTime();
});
