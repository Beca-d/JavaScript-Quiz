var quizQuestions = [
    {
        question: "What is the output of this code? console.log(typeof typeof 1);",
        answers: {
            a: 'string',
            b: 'true',
            c: 'number',
            d: '1'
        },
        correctanswer: 'a'
    },
    {
        question: "Arrays in java are:",
        answers: {
            a: 'Null values',
            b: 'numbers',
            c: 'object references',
            d: 'objects'
        },
        correctanswer: 'd'
    },
    {
        question: "What does the window.alert() method do?",
        answers: {
            a: 'turn the browser red',
            b: 'warn the user this website is unsafe',
            c: 'creates a popup window alert with a message',
            d: 'refreshes the browser'
        },
        correctanswer: 'c'
    },
    {
        question: "JavaScript file has an extension of:",
        answers: {
            a: '.js',
            b: '.java',
            c: '.javacript',
            d: '.json'
        },
        correctanswer: 'a'
    },
    {
        question: "How do you properly call a function?",
        answers: {
            a: 'callback function()',
            b: 'function()',
            c: 'function(call)',
            d: 'call [function ()]'
        },
        correctanswer: 'a'
    }

];

const scorePoints = 125
const maxQuestions = 5

var startQuiz = function() {
    questionCounter = 0
    score = 0
    availableQuestions = [...quizQuestions]
    getNewQuestion()
};

var getNewQuestion = function() {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem(mostRecentScore, score)

        return window.location.assig("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter}`
};

/*var timer = 60;
var countdown = setInterval(function(){
    if(timer <=0){
        clearInterval(countdown);
        document.getElementById("timer").innerHTML="Finished";
    } else {
        document.getElementById("timer").innerHTML = timer + " Seconds Left";
    }
    timer -= 1;
}, 1000);*/
