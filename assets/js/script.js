const question = document.querySelector('#question')
const progressText = document.querySelector('#progressText')
const timeText = document.querySelector('#timer')
const scoreText = document.querySelector('#score')
const answerChoices = Array.from(document.querySelectorAll('.choice-text'))
const button = document.querySelector('.option')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let quizQuestions = [
    {
        question: 'What is the output of this code? console.log(typeof typeof 1);',
        choice1: 'string',
        choice2: 'true',
        choice3: 'number',
        choice4: '1',
        answer: 1,
    },
    {
        question: 'Arrays in java are:',
        choice1: 'Null values',
        choice2: 'numbers',
        choice3: 'object references',
        choice4: 'objects',
        answer: 3,
    },
    {
        question: 'What does the window.alert() method do?',
        choice1: 'turn the browser red',
        choice2: 'warn the user this website is unsafe',
        choice3: 'creates a popup window alert with a message',
        choice4: 'refreshes the browser',
        answer: 3,
    },
    {
        question: 'JavaScript file has an extension of:',
        choice1: '.js',
        choice2: '.java',
        choice3: '.javacript',
        choice4: '.json',
        answer: 1,
    },
    {
        question: 'How do you properly call a function?',
        choice1: 'callback function()',
        choice2: 'function()',
        choice3: 'function(call)',
        choice4: 'call [function ()]',
        answer: 2,
    }
]

const scorePoints = 125
const maxQuestions = 5
const timeDeduction = -20

startQuiz = function () {
    questionCounter = 0
    score = 0
    availableQuestions = [...quizQuestions]
    getNewQuestion()
    timer = 150
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    answerChoices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

answerChoices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(scorePoints)
        } 
        
        if(classToApply === 'incorrect'){
            timeChange(timeDeduction)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

timeChange = num => {
    timer +=num
    timeText.innerText = timer
}

startQuiz()
console.log(currentQuestion.answer)

//else { 
    //deduct 10 seconds from timer
//}

var timer = 150;
var countdown = setInterval(function(){
    if(timer <=0){
        clearInterval(countdown);
        document.getElementById("timer").innerHTML="Finished";
    } else {
        document.getElementById("timer").innerHTML = timer + " Seconds Left";
    }
    timer -= 1;
}, 1000);
