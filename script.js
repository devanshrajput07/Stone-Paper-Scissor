let wins = 0;
let lose = 0;
let tied = 0;
let roundsPlayed = 0;

function playMove(playerMove) {
  const compMove = getComputerMove();
  const result = getResult(playerMove, compMove);
  updateResultCounter(result);

  const userImg = document.getElementById("user-img");
  userImg.src = `img/${playerMove.toLowerCase()}.png`;

  const computerImg = document.getElementById("computer-img");
  computerImg.src = `img/${compMove.toLowerCase()}.png`;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You picked ${playerMove}. Computer picked ${compMove}. ${result}`;

  const scoreDiv = document.getElementById("score");
  scoreDiv.innerHTML = `Wins=${wins}, Lost=${lose}, Tied=${tied}`;

  roundsPlayed++;

  if (roundsPlayed >= 5) {
    endGame();
  }
}

function getComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "Stone";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getResult(playerMove, compMove) {
  if (playerMove === compMove) {
    return "Tied";
  } else if (
    (playerMove === "Stone" && compMove === "Scissor") ||
    (playerMove === "Paper" && compMove === "Stone") ||
    (playerMove === "Scissor" && compMove === "Paper")
  ) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

function updateResultCounter(result) {
  if (result === "You Win") {
    wins++;
  } else if (result === "You Lose") {
    lose++;
  } else {
    tied++;
  }
  console.log(`Wins=${wins}, Lost=${lose}, Tied=${tied}`);
}

function endGame() {
  if (wins == 5) {
    displayWinner("You are the overall winner!", "green");
  } else if (lose == 5) {
    displayWinner("Computer is the overall winner!", "red");
  } else if (wins == 5 || lose == 5) {
    resetCounters();
  }
}

function displayWinner(message, color) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<span style="color: ${color}; font-size: 24px;">${message}</span>`;
  resetCounters();
}

function resetCounters() {
  wins = 0;
  lose = 0;
  tied = 0;
  roundsPlayed = 0; // Reset the rounds played as well
  console.log("Counters reset. Starting a new match.");
}
