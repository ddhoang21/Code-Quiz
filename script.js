var startBtn = document.getElementById("start-button");
var questionBox = document.getElementById("question-container");
var box0 = document.getElementById("choice0");
var box1 = document.getElementById("choice1");
var box2 = document.getElementById("choice2");
var box3 = document.getElementById("choice3");
var questionAnswer = document.getElementById("answers");
var questionIndex = 0;
var count = 75;
var backBtn = document.getElementById("back-button");

document.getElementById("choice0").style.visibility = "hidden";
document.getElementById("choice1").style.visibility = "hidden";
document.getElementById("choice2").style.visibility = "hidden";
document.getElementById("choice3").style.visibility = "hidden";
document.getElementById("submitForm").style.visibility = "hidden"

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    document.getElementById("timer").innerHTML = "Time: " + count;
    var i = setInterval(function(){
        document.getElementById("timer").innerHTML = "Time: " + count;
        count--;
        if (questionIndex > 4) {
            clearInterval(i);
            document.getElementById("timer").style.visibility = "hidden";
        }
        if (count === 0 || count < 0) {
            clearInterval(i);
            document.getElementById("text").innerHTML = "Your final score is " + count; 
            document.getElementById("text").style.display = "block";
            document.getElementById("choice0").style.display = "none";
            document.getElementById("choice1").style.display = "none";
            document.getElementById("choice2").style.display = "none";
            document.getElementById("choice3").style.display = "none";
            questionBox.innerHTML = "All Done!";
            document.getElementById("submitForm").style.visibility = "visible";
            document.getElementById("timer").style.visibility = "hidden";
        }
    }, 1000);

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
        questionAnswer.innerHTML = "<hr>Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "<hr>Wrong!";
        count = count - 10;
        document.getElementById("timer").innerHTML = "Time: " + count;
        setTimeout(function() {
            questionAnswer.innerHTML = "";
        }, 1000);
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
        document.getElementById("text").innerHTML = "Your final score is " + count; 
        document.getElementById("text").style.display = "block";
        questionBox.innerHTML = "All Done!";
        document.getElementById("submitForm").style.visibility = "visible";
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("timer").style.visibility = "hidden";
    }
});

box1.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[1] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "<hr>Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "<hr>Wrong!";
        count = count - 10;
        document.getElementById("timer").innerHTML = "Time: " + count;
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
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
        document.getElementById("text").innerHTML = "Your final score is " + count; 
        document.getElementById("text").style.display = "block";
        questionBox.innerHTML = "All Done!";
        document.getElementById("submitForm").style.visibility = "visible";
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("timer").style.visibility = "hidden";
    }
});

box2.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[2] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "<hr>Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "<hr>Wrong!";
        count = count - 10;
        document.getElementById("timer").innerHTML = "Time: " + count;
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
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
        document.getElementById("text").innerHTML = "Your final score is " + count; 
        document.getElementById("text").style.display = "block";
        questionBox.innerHTML = "All Done!";
        document.getElementById("submitForm").style.visibility = "visible";
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("timer").style.visibility = "hidden";
    }
});

box3.addEventListener("click", function() {
    if (allQuestions[questionIndex].choices[3] === allQuestions[questionIndex].answer) {
        questionAnswer.innerHTML = "<hr>Correct!";
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
    } else {
        questionAnswer.innerHTML = "<hr>Wrong!";
        count = count - 10;
        document.getElementById("timer").innerHTML = "Time: " + count;
        setTimeout(function() {
            questionAnswer.innerHTML = "";    
        }, 1000);
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
        document.getElementById("text").innerHTML = "Your final score is " + count; 
        document.getElementById("text").style.display = "block";
        questionBox.innerHTML = "All Done!";
        document.getElementById("submitForm").style.visibility = "visible";
        document.getElementById("choice0").style.display = "none";
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("timer").style.visibility = "hidden";
    }
});

var submitBtn = document.getElementById("submit-button");
var initialsBox = document.getElementById("initialsBox");

submitBtn.addEventListener("click", savedScores);

function savedScores() {
    localStorage.setItem(initialsBox.value, count);
    localStorage.getItem(initialsBox.value);
}


// box0.addEventListener("click", nextQuestion);
// box1.addEventListener("click", nextQuestion);
// box2.addEventListener("click", nextQuestion);
// box3.addEventListener("click", nextQuestion);

// function nextQuestion() {
//     for (var i = 0; i < 4; ++i) {
//         if (allQuestions[questionIndex].choices[i] === allQuestions[questionIndex].answer) {
//             questionAnswer.innerHTML = "<hr>Correct!";
//             setTimeout(function() {
//                 questionAnswer.innerHTML = "";    
//             }, 500);
//         } else {
//             questionAnswer.innerHTML = "<hr>Wrong!";
//             count = count - 10;
//             document.getElementById("timer").innerHTML = "Time: " + count;
//             setTimeout(function() {
//                 questionAnswer.innerHTML = "";    
//             }, 500);
//         }

//         questionIndex++;
//         if  (questionIndex <= 4) {
//             questionBox.innerHTML = allQuestions[questionIndex].title;
//             box0.innerHTML = allQuestions[questionIndex].choices[0];
//             box1.innerHTML = allQuestions[questionIndex].choices[1];
//             box2.innerHTML = allQuestions[questionIndex].choices[2];
//             box3.innerHTML = allQuestions[questionIndex].choices[3];
//         }
//         if (questionIndex > 4) {
//             document.getElementById("text").innerHTML = "Your final score is " + count; 
//             document.getElementById("text").style.display = "block";
//             questionBox.innerHTML = "All Done!";
//             document.getElementById("submitForm").style.visibility = "visible";
//             document.getElementById("choice0").style.display = "none";
//             document.getElementById("choice1").style.display = "none";
//             document.getElementById("choice2").style.display = "none";
//             document.getElementById("choice3").style.display = "none";
//         }
//     }
// }

