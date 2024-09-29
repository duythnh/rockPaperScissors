const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomChoice = ["rock", "paper", "scissors"];
  return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

function playRound(humanChoice, computerChoice) {
  const resultScore = document.createElement("p");
  const resultChoice = document.createElement("p");
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
  resultChoice.innerText = `Human : ${humanChoice} - Computer: ${computerChoice}`;
  resultScore.innerText = `Human: ${humanScore} - Computer ${computerScore}`;
  result.appendChild(resultChoice);
  result.appendChild(resultScore);
  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    humanScore = 0;
    computerScore = 0;
    result.innerText = "Human Win!";
  } else if (computerScore === 5) {
    humanScore = 0;
    computerScore = 0;
    result.innerText = "Computer Win!";
  }
  
}

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "rock";
  playRound(humanSelection, computerSelection);
});
paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "paper";
  playRound(humanSelection, computerSelection);
});
scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "scissors";
  playRound(humanSelection, computerSelection);
});
