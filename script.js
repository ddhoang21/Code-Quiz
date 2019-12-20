var startBtn = document.getElementById("start-button");

var questionBox = document.getElementById("question-container");
var box0 = document.getElementById("choice0");
var box1 = document.getElementById("choice1");
var box2 = document.getElementById("choice2");
var box3 = document.getElementById("choice3");
var questionAnswer = document.getElementById("answers");
var questionIndex = 0;


document.getElementById("initialBox").style.display = "none";
document.getElementById("choice0").style.visibility = "hidden";
document.getElementById("choice1").style.visibility = "hidden";
document.getElementById("choice2").style.visibility = "hidden";
document.getElementById("choice3").style.visibility = "hidden";
document.getElementById("submitForm").style.visibility = "hidden";

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
        }, 500);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";
        }, 500);
    }

    questionIndex++;
    if (questionIndex <= 4) {
        questionBox.innerHTML = allQuestions[questionIndex].title;
        box0.innerHTML = allQuestions[questionIndex].choices[0];
        box1.innerHTML = allQuestions[questionIndex].choices[1];
        box2.innerHTML = allQuestions[questionIndex].choices[2];
        box3.innerHTML = allQuestions[questionIndex].choices[3];
    }
    if (questionIndex > 4) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        questionBox.innerHTML = "All Done!";
        document.getElementById("text").innerHTML = "Your final score is"; 
        document.getElementById("text").style.display = "block";
        document.getElementById("submitForm").style.visibility = "visible";
    }
});

box1.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[1] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 500);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 500);
    }

    questionIndex++;
    if (questionIndex <= 4) {
    questionBox.innerHTML = allQuestions[questionIndex].title;
        box0.innerHTML = allQuestions[questionIndex].choices[0];
        box1.innerHTML = allQuestions[questionIndex].choices[1];
        box2.innerHTML = allQuestions[questionIndex].choices[2];
        box3.innerHTML = allQuestions[questionIndex].choices[3];
    }
    if (questionIndex > 4) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        questionBox.innerHTML = "All Done!";
        document.getElementById("text").innerHTML = "Your final score is"; 
        document.getElementById("text").style.display = "block";
        document.getElementById("submitForm").style.visibility = "visible";
    }
});

box2.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[2] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 500);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 500);
    }

    questionIndex++;
    if (questionIndex <= 4) {
    questionBox.innerHTML = allQuestions[questionIndex].title;
        box0.innerHTML = allQuestions[questionIndex].choices[0];
        box1.innerHTML = allQuestions[questionIndex].choices[1];
        box2.innerHTML = allQuestions[questionIndex].choices[2];
        box3.innerHTML = allQuestions[questionIndex].choices[3];
    }
    if (questionIndex > 4) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        questionBox.innerHTML = "All Done!";
        document.getElementById("text").innerHTML = "Your final score is"; 
        document.getElementById("text").style.display = "block";
        document.getElementById("submitForm").style.visibility = "visible";
    }
});

box3.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[3] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 500);
    } else {
        questionAnswer.innerHTML = "Incorrect!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 500);
    }

    questionIndex++;
    if (questionIndex <= 4) {
    questionBox.innerHTML = allQuestions[questionIndex].title;
        box0.innerHTML = allQuestions[questionIndex].choices[0];
        box1.innerHTML = allQuestions[questionIndex].choices[1];
        box2.innerHTML = allQuestions[questionIndex].choices[2];
        box3.innerHTML = allQuestions[questionIndex].choices[3];
    }
    if (questionIndex > 4) {
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        questionBox.innerHTML = "All Done!";
        document.getElementById("text").innerHTML = "Your final score is"; 
        document.getElementById("text").style.display = "block";
        document.getElementById("submitForm").style.visibility = "visible";
    }
});