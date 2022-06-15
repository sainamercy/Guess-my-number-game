"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const resultMessage = function (msg) {
  document.getElementById("resultMsg").innerText = msg;
};
const toggleClassList = function (className) {
  document.getElementById("body").classList.toggle(className);
};
const displayScore = function (score) {
  document.getElementById("score").innerText = score;
};
document.getElementById("checkBtn").addEventListener("click", function () {
  let guess = Number(document.getElementById("numberInput").value);
  //   when there is no input
  if (!guess) {
    resultMessage("🙄 no number");
    //  when guess is equal to the secretNumber
  } else if (guess === secretNumber) {
    resultMessage("🎉 correct guess");
    document.getElementById("correctGuess").innerText = secretNumber;
    toggleClassList("win");
    if (score > highScore) {
      highScore = score;
      document.getElementById("highScore").innerText = highScore;
    }
    //  when guess is different from the secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      resultMessage(guess > secretNumber ? "📈 too high" : "📉 too low");
      score--;
      displayScore(score);
    } else {
      resultMessage("👎 you lost the game");
      displayScore(0);
      toggleClassList("lost");
    }
  }
});

//  restore initial setting on click of play Again button
document.getElementById("playAgainBtn").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  resultMessage("🤔 Guess the number....");
  displayScore(score);
  document.getElementById("numberInput").value = "";
  document.getElementById("correctGuess").innerText = "?";
  document.getElementById("body").classList.remove("win", "lost");
});
