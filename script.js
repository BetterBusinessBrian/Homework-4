//Variables used
var timeEl = document.getElementById("seconds")
var startButton = document.getElementById("startButton")
var question = document.getElementById("question")
var answers = document.getElementById("answers")
var title = document.getElementById("title")
var questionNumber = 1
var form = document.getElementById("scoreplaceholder")
var scoreDisplay = document.getElementById("score-display")
var scoreSaver = document.getElementById("save-score")
var initials = document.getElementById("initials")
var timerInterval
var finished = false
//hiding form until test completion
form.style.visibility = 'hidden';
// beginning time 
var secondsLeft = 75;
//array of 5 questions, respective answers, and correct answer
var questionArray = [
  {
    question: "Common used data types DO NOT include: ",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 3
  },
  {
    question: "The condition of an If/Else Statement is enclosed within_____.  ",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 3
  },
  {
    question: "Arrays in Javascript can be used to store: ",
    answers: ["numbers and strings", "other arrays", "booleans", "all the above"],
    correctAnswer: 4
  },
  {
    question: "string values must be enclosed in ______ when being assigned to variables : ",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 3
  },
  {
    question: "A very useful tool used in development for debugging is _____: ",
    answers: ["javascript", "terminal/bash", "for loops", "console logs"],
    correctAnswer: 4
  }
]

// function starts clock and stops it if game is complete
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      finishGame();
    }
    if (finished) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

// function creates buttons containing text from Question Array
function createButtons(questionArray) {
  for (i = 0; i < questionArray.answers.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = questionArray.answers[i];
    button.className = "btn btn-outline-success";
    button.value = i + 1
    answers.appendChild(button);
  }
}

// Removes start button and begins test
function setUpTest() {
  startButton.remove()
  question.textContent = questionArray[0].question;
  createButtons(questionArray[0]);
  for (i = 0; i < questionArray.length; i++){
console.log(questionArray[i]);
  }
}

// Ends game and makes form visible 
function finishGame() {
  question.textContent = "Nicely done!";
  finished = true;
  localStorage.setItem("score", secondsLeft);
  scoreDisplay.value = "Your score: " + localStorage.getItem("score");
  form.style.visibility = 'visible';
}
// Progresses to the next question
function nextQuestion() {
  console.log(questionNumber);
  questionNumber++;
  answers.innerHTML = ""
  if (questionNumber < 6) {
    question.textContent = questionArray[questionNumber-1].question;
    createButtons(questionArray[questionNumber-1]);
  } else {
    finishGame()
  }
}

//start button sets up timer and first questions
startButton.addEventListener("click", function () {
  setTime();
  setUpTest()
});

// clicking answer results in next questions and score change if applicable 
answers.addEventListener("click", function (event) {
  if (event.target.value != questionArray[questionNumber - 1].correctAnswer) {
    secondsLeft = secondsLeft - 10;
    nextQuestion();
  }
  else {
    nextQuestion();
  }
});



// Creating Highscore list 
scoreSaver.addEventListener("click", function (event) {
  event.preventDefault();
  var scoreObject = {
    name: initials.value,
    score: secondsLeft
  }

  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  highscores.push(scoreObject);
  highscores.sort(function(a, b) { return b.score - a.score })
  highscores.splice(10);

  localStorage.setItem("highscores", JSON.stringify(highscores));

  window.location.href = "highscores.html";
});