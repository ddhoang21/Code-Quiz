var startBtn = document.getElementById("start-button");
var submitBtn = document.getElementById("submit");

var questionBox = document.getElementById("question-container");
var box0 = document.getElementById("choice0");
var box1 = document.getElementById("choice1");
var box2 = document.getElementById("choice2");
var box3 = document.getElementById("choice3");

document.getElementById("choice0").style.visibility = "hidden";
document.getElementById("choice1").style.visibility = "hidden";
document.getElementById("choice2").style.visibility = "hidden";
document.getElementById("choice3").style.visibility = "hidden";
document.getElementById("submit-button").style.visibility = "hidden";

startBtn.addEventListener("click", displayQuestion);

function displayQuestion() {
    document.getElementById("text").style.visibility = "hidden";
    document.getElementById("start-button").style.visibility = "hidden";
    document.getElementById("choice0").style.visibility = "visible";
    document.getElementById("choice1").style.visibility = "visible";
    document.getElementById("choice2").style.visibility = "visible";
    document.getElementById("choice3").style.visibility = "visible";
    for (i = 0; i < allQuestions.length; i++) {
        questionBox.innerHTML = allQuestions[0].title;
        box0.innerHTML = allQuestions[0].choices[0];
        box1.innerHTML = allQuestions[0].choices[1];
        box2.innerHTML = allQuestions[0].choices[2];
        box3.innerHTML = allQuestions[0].choices[3];
    }
}