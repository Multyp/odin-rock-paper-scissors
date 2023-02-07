let userScore = 0;
let computerScore = 0;
let round = 1;

const element = document.querySelector("#replay");

const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  document.querySelector('#result').innerHTML = `You chose: ${userChoice}<br>Computer chose: ${computerChoice}`;
  if (userChoice === computerChoice) {
    document.querySelector('#result').innerHTML += "<br>It's a tie!";
    return;
  } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
             userChoice === 'scissors' && computerChoice === 'paper' ||
             userChoice === 'paper' && computerChoice === 'rock') {
    document.querySelector('#result').innerHTML += '<br>You win!';
    userScore++;
  } else {
    document.querySelector('#result').innerHTML += '<br>Computer wins!';
    computerScore++;
  }
  document.querySelector('#userScore').innerHTML = userScore;
  document.querySelector('#computerScore').innerHTML = computerScore;
  if (round === 5) {
    document.querySelector('#result').innerHTML += userScore > computerScore ? '<br>You win the game!' : '<br>Computer wins the game!';
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
    element.style.display = "flex";
  } else {
    round++;
    document.querySelector('#round').innerHTML = round;
  }
};

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
};

document.querySelector('#rock').addEventListener('click', function() {
  playRound('rock');
});
document.querySelector('#paper').addEventListener('click', function() {
  playRound('paper');
});
document.querySelector('#scissors').addEventListener('click', function() {
  playRound('scissors');
});
const playAgainButton = document.getElementById('play-again-button');

const resetGame = () => {
  if (userScore !== 0 || computerScore !== 0) {
      userScore = 0;
      computerScore = 0;
      document.querySelector('#userScore').innerHTML = userScore;
      document.querySelector('#computerScore').innerHTML = computerScore;
  }
  round = 1;
  document.querySelector('#round').innerHTML = round;
  document.querySelector('#rock').disabled = false;
  document.querySelector('#paper').disabled = false;
  document.querySelector('#scissors').disabled = false;
  document.querySelector('#result').innerHTML = '';
  element.style.display = "none";
};

document.querySelector('#replay').addEventListener('click', resetGame);