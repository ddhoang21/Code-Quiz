var startBtn = document.getElementById("start-button");
var submitBtn = document.getElementById("submit");

var questionBox = document.getElementById("question-container");
var box0 = document.getElementById("choice0");
var box1 = document.getElementById("choice1");
var box2 = document.getElementById("choice2");
var box3 = document.getElementById("choice3");

var questionAnswer = document.getElementById("answers");

document.getElementById("choice0").style.visibility = "hidden";
document.getElementById("choice1").style.visibility = "hidden";
document.getElementById("choice2").style.visibility = "hidden";
document.getElementById("choice3").style.visibility = "hidden";
document.getElementById("submit-button").style.visibility = "hidden";

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

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

box0.addEventListener("click", function() {
    if (allQuestions[0].choices[0] === allQuestions[0].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[1].title;
    box0.innerHTML = allQuestions[1].choices[0];
    box1.innerHTML = allQuestions[1].choices[1];
    box2.innerHTML = allQuestions[1].choices[2];
    box3.innerHTML = allQuestions[1].choices[3];
});

box1.addEventListener("click", function() {
    if (allQuestions[0].choices[1] === allQuestions[0].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[1].title;
    box0.innerHTML = allQuestions[1].choices[0];
    box1.innerHTML = allQuestions[1].choices[1];
    box2.innerHTML = allQuestions[1].choices[2];
    box3.innerHTML = allQuestions[1].choices[3];
});

box2.addEventListener("click", function() {
    if (allQuestions[0].choices[2] === allQuestions[0].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[1].title;
    box0.innerHTML = allQuestions[1].choices[0];
    box1.innerHTML = allQuestions[1].choices[1];
    box2.innerHTML = allQuestions[1].choices[2];
    box3.innerHTML = allQuestions[1].choices[3];
});

box3.addEventListener("click", function() {
    if (allQuestions[0].choices[3] === allQuestions[0].answer) {
        questionAnswer.innerHTML = "Correct!";
    } else {
        questionAnswer.innerHTML = "Incorrect!";
    }
    questionBox.innerHTML = allQuestions[1].title;
    box0.innerHTML = allQuestions[1].choices[0];
    box1.innerHTML = allQuestions[1].choices[1];
    box2.innerHTML = allQuestions[1].choices[2];
    box3.innerHTML = allQuestions[1].choices[3];
});

    // var questionString = allQuestions[i].title;
    // var answerIndex = allQuestions[i].answerIndex;
    // var answerList = allQuestions[i].choices;
    // var answer = allQuestions[i].answer;


// function nextQuestion() {
//     for (i = 0; i < allQuestions.length; i++) {

// }
