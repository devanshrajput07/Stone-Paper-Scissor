let wins = 0;
      let lose = 0;
      let tied = 0;

      function playMove(playerMove) {
        const compMove = getComputerMove();
        const result = getResult(playerMove, compMove);
        alert(
          `You picked ${playerMove}. Computer picked ${compMove}. ${result}`
        );
        updateResultCounter(result);
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