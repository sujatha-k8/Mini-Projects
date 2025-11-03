let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);

function checkGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Please enter a number between 1 and 100!";
    message.style.color = "#FFD700";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    message.style.color = "#00FF99";
  } else if (guess < secretNumber) {
    message.textContent = "⬆️ Too low! Try a higher number.";
    message.style.color = "#FFD700";
  } else {
    message.textContent = "⬇️ Too high! Try a lower number.";
    message.style.color = "#FF6347";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  message.textContent = "";
  attemptsDisplay.textContent = "";
}
