/**
 * Const Variables
 * Create variables that represents elements in our document
 * these variables will be used to access the elements via DOM model
 */

const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const option1Btn = document.getElementById("option1");
const option2Btn = document.getElementById("option2");
const option3Btn = document.getElementById("option3");
const option4Btn = document.getElementById("option4");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

/**
 * Defining variables that will be used to maintain 3 important things for interacitivity
 * counter for current question, enable JS to access right question by 
 *      incrementing or decrementing this counter based on the user's 
 *      interactivity with previous and next buttons
 * counter for the score, for every correct answer, score will be incremented
 *      score will be decremented for every wrong answer
 * an array of quesions, contains our questions and the options for the same
 */

let currentQuestion = 0;
let score = 0;

let questions = [
    {
        question: "Who is the current vice president of the United States?",
        answers: [
            {option: "Joe Biden", answer: false},
            {option: "Hillary Clinton", answer: false},
            {option: "Kamala Harris", answer: true},
            {option: "Mike Pence", answer: false},
        ]
    },
    {
        question: "What is the largest organ in the body?",
        answers: [
            {option: "Heart", answer: false},
            {option: "Skin", answer: true},
            {option: "Liver", answer: false},
            {option: "Lung", answer: false},
        ]
    },
    {
 
        question: "Which country has the highest life expectancy?",
        answers: [
            {option: "South Korea", answer: false},
            {option: "China", answer: true},
            {option: "Switzerland", answer: false},
            {option: "Japan", answer: false},
        ]
    }
    {
 
        question: "What is the capital of Finland?",
        answers: [
            {option: "Helsinki", answer: true},
            {option: "Luxemburg", answer: false},
            {option: "Oslo", answer: false},
            {option: "Stockholm", answer: false},
        ]
    }
    {
 
        question: "Which country has won the most World Cups?",
        answers: [
            {option: "Argentina", answer: false},
            {option: "Brazil", answer: true},
            {option: "France", answer: false},
            {option: "Italy", answer: false},
        ]
    }
    {
 
        question: "Where is the strongest human muscle located?",
        answers: [
            {option: "Forearms", answer: false},
            {option: "Calves", answer: false},
            {option: "Triceps", answer: false},
            {option: "Jaw", answer: true},
        ]
    }
    {
 
        question: "How many colors are used in the South African flag?",
        answers: [
            {option: "Four", answer: false},
            {option: "Eight", answer: false},
            {option: "Six", answer: true},
            {option: "Seven", answer: false},
        ]
    }
    {
 
        question:  "Where did sushi originate?",
        answers: [
            {option: "Japan", answer: true},
            {option: "China", answer: false},
            {option: "South Korea", answer: false},
            {option: "Thailand", answer: false},
        ]
    }
    {
 
        question:  "Where is the largest Disney park in the world?",
        answers: [
            {option: "London", answer: false},
            {option: "Orlando", answer: true},
            {option: "Paris", answer: false},
            {option: "Hong Kong", answer: false},
        ]
    }
    {
 
        question:  "What is the national sport of Japan?",
        answers: [
            {option: "Football", answer: false},
            {option: "Swimmming", answer: false},
            {option: "Sumo Wrestling", answer: true},
            {option: "Baseball", answer: false},
        ]
    }
 ]

 /**
  * Adding onclick events to the button will call the appropiate functions when a particular button is clicked
  */

 restartBtn.addEventListener("click", restart);
 prevBtn.addEventListener("click", prev);
 nextBtn.addEventListener("click", next);
 submitBtn.addEventListener("click", submit);

 /**
  * function beginQuiz() will get executed when page loads and script gets executed
  * Added a feature that'll allow page to jump to the next question once an option is clicked on from answer options
  */

 function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 4) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 4) {
            next();
        }
    }

    prevBtn.classList.add("hide")
 }

 beginQuiz()

 /**
  * function restart() will reset score, reset the current question index and remove the 'hide' class from elements
  */ 

 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz()
}

/**
 * function next() will jump to next question
 * currentQuestion() will be incremented
 * hidden class will be removed from prev button
 * score will be incremnted based on option the user selects
 */

function next() {
    currentQuestion++;
    if (currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score < 3) {
                score++
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next()
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score <3) {
                score ++
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }
    prevBtn.classList.remove("hide");
}

/**
 * function prev() jump to previous question
 * currentQuestion will be decremented and hidden class removed from next button
 * score will be incremented based on user score
 */

function prev() {
    currentQuestion--;
    if (currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if (score< 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQuestion].answers[1].answer) {
            if (score <3) {
                score ++
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 2) {
            next();
        }
    }
    nextBtn.classList.remove("hide");

}

/**
 * Create submit button, hiding all elements except restart button and score
 * It'll add a congratulations message
 */

function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
    questionText.innerHTML = "Congratulations on submitting the Quiz"
}