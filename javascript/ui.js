
const container = document.createElement('div'); // app container 
container.classList.add('container');
document.body.appendChild(container);

const heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = 'Trivia Quiz';
container.appendChild(heading);

const questionDiv = document.createElement('div');  
questionDiv.classList.add('questions');
container.appendChild(questionDiv);

const score = document.createElement('div'); 
score.classList.add('score');
container.appendChild(score);

const beginButton = document.createElement('button'); 
beginButton.classList.add('beginButton');
beginButton.textContent = 'Begin Quiz';
container.appendChild(beginButton);

const nextButton = document.createElement('button'); 
nextButton.classList.add('nextButton');
nextButton.textContent = 'Next Question';
container.appendChild(nextButton);

const previousQuestion = document.createElement('button'); 
previousQuestion.classList.add('previousQuestion');
previousQuestion.textContent = 'Previous Question';
previousQuestion.style.display = 'none';
container.appendChild(previousQuestion);

const timer = document.createElement('div'); 
timer.classList.add('timer');
timer.textContent = 'Timer';
container.appendChild(timer);

const elements = {
    container,
    heading,
    questionDiv,
    score,
    beginButton,
    nextButton,
    previousQuestion,
    timer
}

export default elements;