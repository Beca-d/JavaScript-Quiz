const question = document.querySelector('#question')
const progressText = document.querySelector('#progressText')
const timer = document.querySelector('#timer')
const scoreText = document.querySelector('#score')
const answerChoices = Array.from(document.querySelectorAll('.choice-text'))

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let quizQuestions = [
    {
        question: "What is the output of this code? console.log(typeof typeof 1);",
        choice1: 'string',
        choice2: 'true',
        choice3: 'number',
        choice4: '1',
        answer: 'a'
    },
    {
        question: "Arrays in java are:",
        choice1: 'Null values',
        choice2: 'numbers',
        choice3: 'object references',
        choice4: 'objects',
        answer: 'd'
    },
    {
        question: "What does the window.alert() method do?",
        choice1: 'turn the browser red',
        choice2: 'warn the user this website is unsafe',
        choice3: 'creates a popup window alert with a message',
        choice4: 'refreshes the browser',
        answer: 'c'
    },
    {
        question: "JavaScript file has an extension of:",
        choice1: '.js',
        choice2: '.java',
        choice3: '.javacript',
        choice4: '.json',
        answer: 'a'
    },
    {
        question: "How do you properly call a function?",
        choice1: 'callback function()',
        choice2: 'function()',
        choice3: 'function(call)',
        choice4: 'call [function ()]',
        answer: 'a'
    }
]

const scorePoints = 125
const maxQuestions = 5

startQuiz = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...quizQuestions]
    getNewQuestion()
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
};

answerChoices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
})

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
        
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeOut (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

//else { 
    //deduct 10 seconds from timer
//}

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
