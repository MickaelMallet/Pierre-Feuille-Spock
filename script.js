// import des confettis
import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

// Element Constants
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');
const playerRock = document.getElementById('playerRock');
const playerScissors = document.getElementById('playerScissors');
const playerPaper = document.getElementById('playerPaper');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');
const computerRock = document.getElementById('computerRock');
const computerScissors = document.getElementById('computerScissors');
const computerPaper = document.getElementById('computerPaper');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');
const allGameIcons = document.querySelectorAll('.far');

// regles du jeu
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// Reset des icones
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });

  // Stop confetti
  stopConfetti();
  removeConfetti();
}

// Reset scores et choix
function resetAll() {
  playerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreNumber = 0;
  computerScoreEl.textContent = computerScoreNumber;
  resultText.textContent = "Qui l'emportera?";
  resetSelected();
}
window.resetAll = resetAll;

// Random choice de l'ordinateur
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * 5);
  if (computerChoiceNumber === 0) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber === 1) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber === 2) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber === 3) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// Ajout style et choix de l'ordinateur
function displayComputerChoice() {
  // Ajout style et choix du joueur et de l'ordinateur
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

// Check Resultats, modifier score, afficher resultats
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "Egalité !";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = 'Victoire !';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'Défaite !';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

// fonction pour effectuer un tour 
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}


function select(playerChoice) {
  // reset icons
  checkResult(playerChoice);

  // ajout style et choix du joueur
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}
window.select = select;

// demarrage du jeu et reset
resetAll();