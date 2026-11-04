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

console.log(getComputerChoice());

function getHumanChoice () {
  const myChoice = prompt("Make a choice, choose either: rock, paper or scissors?");
  console.log("User typed '" + myChoice + "'");
  return myChoice.trim().toLowerCase();
}

console.log(getHumanChoice());