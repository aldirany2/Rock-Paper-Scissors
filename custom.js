// player score
let humanScore = 0;

// computer score
let compScore = 0;

// computer choice
const choose = ['rock', 'paper', 'scissors'];
function getComputerChoice () {
  const randomChoose = Math.floor (Math.random () * choose.length);
  const theChoice = choose[randomChoose];
  const compResult = (document.querySelector (
    '#compResult'
  ).innerHTML = theChoice);

  return theChoice;
}

// player choice
function getHumanChoice (choice) {
  document.querySelector ('#result').innerHTML = choice;
  return choice;
}

document.querySelector ('.rock').addEventListener ('click', function () {
  const humanSelection = getHumanChoice ('rock');
  const computerSelection = getComputerChoice ();
  playRound (humanSelection, computerSelection);
});

document.querySelector ('.paper').addEventListener ('click', function () {
  const humanSelection = getHumanChoice ('paper');
  const computerSelection = getComputerChoice ();
  playRound (humanSelection, computerSelection);
});

document.querySelector ('.scissors').addEventListener ('click', function () {
  const humanSelection = getHumanChoice ('scissors');
  const computerSelection = getComputerChoice ();
  playRound (humanSelection, computerSelection);
});

// play round
const roundResult = document.querySelector ('.round');
function playRound (getComputerChoice, getHumanChoice) {
  if (getComputerChoice == getHumanChoice) {
    roundResult.innerHTML = 'tie babe';
  }

  if (
    (getHumanChoice === 'rock' && getComputerChoice === 'scissors') ||
    (getHumanChoice === 'scissors' && getComputerChoice === 'paper') ||
    (getHumanChoice === 'paper' && getComputerChoice === 'rock')
  ) {
    roundResult.innerHTML = 'WoOoOoOw you win this round';
    humanScore++;
  } else {
    roundResult.innerHTML = 'Ops!... you lose this round';
    compScore++;
  }
  // console.log(`Scores => Human: ${humanScore}, Computer: ${compScore}`);
  document.querySelector (
    '.score'
  ).innerHTML = `Scores => Human: ${humanScore}, Computer: ${compScore}`;
}
