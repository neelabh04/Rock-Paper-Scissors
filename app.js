// Picking up spans by their ids
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

// we are picking all the buttons in one go present in HTML
const possibleChoices = document.querySelectorAll('button');

let userChoice;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}));

function generateComputerChoice() {
    // const randomNumber = Math.random() * possibleChoices.length;
    // will have the same meaning as above since we have only 3 choices
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
}