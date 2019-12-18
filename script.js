var startBtn = document.getElementById("start-button");
var submitBtn = document.getElementById("submit");

var questionBox = document.getElementById("question-container");
var box0 = document.getElementById("choice0");
var box1 = document.getElementById("choice1");
var box2 = document.getElementById("choice2");
var box3 = document.getElementById("choice3");
var questionAnswer = document.getElementById("answers");
var questionIndex = 0;

document.getElementById("choice0").style.visibility = "hidden";
document.getElementById("choice1").style.visibility = "hidden";
document.getElementById("choice2").style.visibility = "hidden";
document.getElementById("choice3").style.visibility = "hidden";
document.getElementById("submit-button").style.visibility = "hidden";

startBtn.addEventListener("click", startQuiz);

// var questionString = allQuestions[i].title;
// var answerList = allQuestions[i].choices;
// var answer = allQuestions[i].answer;

function startQuiz() {

    document.getElementById("text").style.visibility = "hidden";
    document.getElementById("start-button").style.visibility = "hidden";
    document.getElementById("choice0").style.visibility = "visible";
    document.getElementById("choice1").style.visibility = "visible";
    document.getElementById("choice2").style.visibility = "visible";
    document.getElementById("choice3").style.visibility = "visible";

    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    questionIndex++;

}


box0.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[0] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    questionIndex++;

});

box1.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[1] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    questionIndex++;

});

box2.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[2] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    questionIndex++;

});

box3.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[3] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    questionIndex++;

});