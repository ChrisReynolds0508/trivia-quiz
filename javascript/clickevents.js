import elements from "./ui.js";
import { sampleQuestions } from "./samplequestions.js"


function showQuestion(index){
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

    label.appendChild(radio);
    label.appendChild(document.createTextNode(option));

    elements.questionDiv.appendChild(label);

   });


}
elements.beginButton.addEventListener('click', () => {
    currentQuestionIndex = 0; 
    userAnswers.length = 0;
    showQuestion(currentQuestionIndex);
});

let currentQuestionIndex = 0;
const userAnswers = [];

elements.nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked'); //get the selected radio button 

    if(!selectedOption){
        alert('Please select an answer before moving on!');
        return;  // dont proceed if no answer is selected cxxx
    }

    userAnswers[currentQuestionIndex] = parseInt(selectedOption.value); // save the answer's index 

    currentQuestionIndex++; //move to next question

    if(currentQuestionIndex < sampleQuestions.length){
        showQuestion(currentQuestionIndex);
    }else{
        let scoreCount = 0;
        userAnswers.forEach((answerIndex, questionIndex) => {
            if(answerIndex === sampleQuestions[questionIndex].answerIndex){
                scoreCount++;
            }
        });
        elements.questionDiv.innerHTML = `<p>Quiz Completed! You scored: ${sampleQuestions.length}.</p>`;
        elements.score.textContent = `Your score; ${scoreCount}/ ${sampleQuestions.length}`  
    }
});


export default 'beginbutton.js';