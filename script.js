function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // console.log(`The random number generated was "${randomNumber}".`);
  let theirChoice;
  if (randomNumber === 1) {
    theirChoice = "rock";
  } else if (randomNumber === 2) {
    theirChoice = "paper";
  } else {
    theirChoice = "scissors";
  }
  console.log(`The computer selected "${theirChoice}".`);
  return theirChoice;
}



function getHumanChoice() {
  let input = prompt("Your turn. Choose from rock, paper or scissors?");
  // consider inserting check for null or undefined
  // consider accepting input as only rock, paper or scissors
  let myChoice = input.trim().toLowerCase();
  console.log(`You chose "${myChoice}".`);
  return myChoice;

}



function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let combineChoice = humanChoice + computerChoice;
  if (humanChoice === computerChoice) {
    console.log("This round is a draw.");
  } else if (combineChoice === "rockscissors" || combineChoice === "paperrock" || combineChoice === "scissorspaper") {
    console.log(`You win! ...${humanChoice} beats ${computerChoice}.`);
    return "human";
  } else {
    console.log(`You lose! ...${computerChoice} beats ${humanChoice}.`);
    return "computer";
  }
}



function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`--- ROUND ${i} ---`);
    const winner = playRound();
    if (winner === "human") {
      humanScore += 1;
    } else if (winner === "computer") {
      computerScore += 1;
    }
    console.log(`The current score is ${humanScore}-${computerScore}.`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You win! Play again? Hit F5 to refresh.");
  } else if (computerScore > humanScore) {
    console.log("Game over! You lost.");
  } else {
    console.log("Wow, what a tight game. It was a draw!")
  }
}

playGame();