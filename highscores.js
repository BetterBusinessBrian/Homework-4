var list = document.getElementById("list")
var highscores = JSON.parse(localStorage.getItem("highscores"))
highscores.forEach(element =>{
    var newScore= document.createElement("LI")
    newScore.textContent = element.name + ' ' + element.score;
    newScore.className= "list-group list-group-flush"
    list.appendChild(newScore);
})

