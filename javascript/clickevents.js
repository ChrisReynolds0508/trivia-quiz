import elements from "./ui.js";
import { sampleQuestions } from "./samplequestions.js"

let currentQuestionIndex = 0;//tracks what question index the user is on 
const userAnswers = []; // stores users answers 
let timerInterval; // initialises a timer variable
let timeRemaining = 30; //sets the timer to 30 seconds

function showQuestion(index){ //index of the question in sample questions array
    clearInterval(timerInterval);//stops any existing timer 

    if(index > 0){
        elements.previousQuestion.style.display = 'block';
    } else {
        elements.previousQuestion.style.display ='none'; 
    }

    const currentQuestion = sampleQuestions[index];

    elements.questionDiv.innerHTML = ''; //clears previous question

    const questionText = document.createElement('p'); //displays current question 
    questionText.textContent = currentQuestion.question;
    elements.questionDiv.appendChild(questionText);

   currentQuestion.options.forEach((option, i) => {
    const label = document.createElement('label');
    label.style.display = 'block';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quizOption';
    radio.value = i;

    if(userAnswers[index] === i){
        radio.checked = true;
    }

    label.appendChild(radio);
    label.appendChild(document.createTextNode(option));

    elements.questionDiv.appendChild(label);

   });
   startTimer();
}

function startTimer(){
    timeRemaining = 30;
    elements.timer.textContent = `Time Left: ${timeRemaining}`;
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        elements.timer.textContent = `Time left: ${timeRemaining}`; 

        if(timeRemaining <= 0){
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000); 
}

function handleTimeout(){
    userAnswers[currentQuestionIndex] = null;
    currentQuestionIndex++;

    if(currentQuestionIndex < sampleQuestions.length){
        showQuestion(currentQuestionIndex);
    }else{
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    elements.timer.style.display = "none";

    let scoreCount = 0;

    userAnswers.forEach((answerIndex, questionIndex) => {
        if(answerIndex === sampleQuestions[questionIndex].answerIndex){
            scoreCount++;
        }
    });
    elements.questionDiv.innerHTML = `<p>Quiz Completed! You scored: ${scoreCount} out of ${sampleQuestions.length}. </p>`;
    elements.score.textContent = `Your score: ${scoreCount} / ${sampleQuestions.length}`
}

elements.beginButton.addEventListener('click', () => {
    currentQuestionIndex = 0; 
    userAnswers.length = 0;
    elements.score.textContent = ''
    showQuestion(currentQuestionIndex);
});


elements.nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked'); //get the selected radio button 

    if(!selectedOption){
        alert('Please select an answer before moving on!');
        return;  // dont proceed if no answer is selected cxxx
    }

    userAnswers[currentQuestionIndex] = parseInt(selectedOption.value); // save the answer's index 
    clearInterval(timerInterval);

    currentQuestionIndex++; //move to next question

    if(currentQuestionIndex < sampleQuestions.length){
        showQuestion(currentQuestionIndex);
    }else{
        endQuiz();  
    }
});

elements.previousQuestion.addEventListener('click', () => {
    if(currentQuestionIndex > 0){
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex)
    }
    
})


export default 'clickevents.js';