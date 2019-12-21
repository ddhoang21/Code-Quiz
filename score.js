var scoreList = document.getElementById("scoreList");
var clearBtn = document.getElementById("clear-button");

for (var i = 0; i < localStorage.length; ++i) {
    var id = localStorage.key(i);
    var score = localStorage.getItem(id);
    var l1 = document.createElement("li");
    l1.innerHTML = id + "-" + score;
    scoreList.appendChild(l1);
}

clearBtn.addEventListener("click", clearScores);

function clearScores() {
    localStorage.clear();
    scoreList.remove(l1);
}