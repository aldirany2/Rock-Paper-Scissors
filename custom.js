// player score
let humanScore = 0;

// computer score
let compScore = 0;

// game rounds
const maxGameRound = 5;
let currentRound = 0;

// computer choice
const choose = ['rock', 'paper', 'scissors'];
function getComputerChoice () {
  const randomChoose = Math.floor (Math.random () * choose.length);
  const theChoice = choose[randomChoose];
  document.querySelector ('#compResult').innerHTML = theChoice;
  return theChoice;
}

// player choice
function getHumanChoice (choice) {
  document.querySelector ('#result').innerHTML = choice;
  return choice;
}

document.querySelector ('.rock').addEventListener ('click', function () {
  // const humanSelection = getHumanChoice ('rock');
  // const computerSelection = getComputerChoice ();
  // playRound (humanSelection, computerSelection);
  playGame("rock");
});

document.querySelector ('.paper').addEventListener ('click', function () {
  // const humanSelection = getHumanChoice ('paper');
  // const computerSelection = getComputerChoice ();
  // playRound (humanSelection, computerSelection);
  playGame("papper");
});

document.querySelector ('.scissors').addEventListener ('click', function () {
  // const humanSelection = getHumanChoice ('scissors');
  // const computerSelection = getComputerChoice ();
  // playRound (humanSelection, computerSelection);
  playGame("scissors");
});

// play round
const roundResult = document.querySelector ('.round');
function playRound (humanChoice, computerChoice) {
  if (computerChoice == humanChoice) {
    roundResult.innerHTML = 'tie babe';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
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

// play game up to 5 rounds
function playGame (humanChoice) {
  if (currentRound >= maxGameRound) {
    endGame ();
    return;
  }

  const computerChoice = getComputerChoice ();
  playRound (humanChoice, computerChoice);
  currentRound++;

  if (currentRound === maxGameRound) {
    endGame ();
  }
}

// end game: clear body and show result
function endGame() {
  document.body.innerHTML = `
    <div style="text-align:center; font-size:24px; margin-top:50px;">
      <p>Game Over!</p>
      <p>Final Score:</p>
      <p>Human: ${humanScore}</p>
      <p>Computer: ${compScore}</p>
      <button onclick="location.reload()" 
        style="margin-top:20px; padding:10px 20px; font-size:18px; cursor:pointer;">
        Play Again
      </button>
    </div>
  `;
}
