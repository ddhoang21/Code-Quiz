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

    document.getElementById("text").style.display = "none";
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
    
}

box0.addEventListener("click", function() {

    if (allQuestions[questionIndex].choices[0] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    }

    questionIndex++;
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    if (allQuestions[questionIndex].choices[0] === allQuestions[5].choices[0]) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";    
    }
});

box1.addEventListener("click", function() {
    console.log(allQuestions[questionIndex].choices[1]);
    console.log (allQuestions[questionIndex].answer);
    if (allQuestions[questionIndex].choices[1] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    }

    questionIndex++;
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    if (allQuestions[questionIndex].choices[1] === allQuestions[5].choices[1]) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";    
    }
});

box2.addEventListener("click", function() {
    console.log(allQuestions[questionIndex].choices[2]);
    console.log (allQuestions[questionIndex].answer);
    if (allQuestions[questionIndex].choices[2] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    }

    questionIndex++;
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    if (allQuestions[questionIndex].choices[2] === allQuestions[5].choices[2]) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";    
    }
});

box3.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[3] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    }

    questionIndex++;
    questionBox.innerHTML = allQuestions[questionIndex].title;
    box0.innerHTML = allQuestions[questionIndex].choices[0];
    box1.innerHTML = allQuestions[questionIndex].choices[1];
    box2.innerHTML = allQuestions[questionIndex].choices[2];
    box3.innerHTML = allQuestions[questionIndex].choices[3];

    if (allQuestions[questionIndex].choices[3] === allQuestions[5].choices[3]) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";    
    }
});