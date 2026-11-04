function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice () {
  const myChoice = prompt("Make a choice, choose either: rock, paper or scissors?");
  console.log("User typed '" + myChoice + "'");
  return myChoice.trim().toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human player chose '" + humanSelection + "'");
console.log("The computer chose '" + computerSelection + "'");

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice) {

  const combineChoice = humanChoice + computerChoice

  if (humanChoice === computerChoice) {
    console.log("This round is a draw.");
  } else if (combineChoice === "rockscissors" || combineChoice === "paperrock" || combineChoice === "scissorspaper") {
    console.log("The human player wins this round.");
    humanScore += 1;
  } else {
    console.log("The computer wins this round.");
    computerScore += 1;
  }
}

playRound(humanSelection,computerSelection);

console.log("Current score " + humanScore + "-" + computerScore);
