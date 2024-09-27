function getComputerChoice() {
  const randomChoice = ["rock", "paper", "scissors"];
  return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function getHumanChoice() {
  const randomChoice = ["rock", "paper", "scissors"];
  let choice = prompt(
    "Press button: \n1: rock\n2: paper\n3: scissors\nelse: random"
  );
  if (choice == 1 || choice === "rock") {
    return "rock";
  } else if (choice == 2 || choice === "paper") {
    return "paper";
  } else if (choice == 3 || choice === "scissor") {
    return "scissors";
  } else {
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
  }
}
// console.log(getComputerChoice())
// console.log(getHumanChoice())
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
  }
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Round: " + +(i + 1));
    console.log("Human: " + humanSelection + " | score: " + humanScore);
    console.log(
      "Computer: " + computerSelection + " | score: " + computerScore
    );
  }
  if (humanScore > computerScore) {
    return "Human win!";
  } else if (humanScore < computerScore) {
    return "Computer win!";
  } else {
    return "It's a tie";
  }
}
console.log(playGame());
