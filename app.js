// Picking up spans by their ids
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

// we are picking all the buttons in one go present in HTML
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

// Taking choice from the user
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

// Generating and assigning choice for computer
function generateComputerChoice() {
    // const randomNumber = Math.random() * possibleChoices.length;
    // will have the same meaning as above since we have only 3 choices
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    if(randomNumber === 1) {
        computerChoice = 'Rock';
    }

    if(randomNumber === 2) {
        computerChoice = 'Paper';
    }

    if(randomNumber === 3) {
        computerChoice = 'Scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

// Returns the result of the match
function getResult() {
    // Same choices from both of them
    if(computerChoice === userChoice) {
        result = 'Draw';
    }
    
    // Computer -> Rock possiblities
    if(computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Win :)';
    }
    
    if(computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You Lost!';
    }
    
    // Computer -> Paper possiblities
    if(computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You Win :)';
    }

    if(computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You Lost!';
    }

    // Computer -> Scissors possiblities
    if(computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You Win :)';
    }

    if(computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You Lost!';
    }

    // Returning the final result 
    resultDisplay.innerHTML = result;
}