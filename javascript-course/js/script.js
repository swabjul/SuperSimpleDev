
const guessScore = JSON.parse(localStorage.getItem("guessScore")) || {
  wins: 0,
  lose: 0
};


function playGame2(guess) {
  let randomFlipCoin = randomFlip();
  let result = "";

  if (guess === randomFlipCoin) {
    result = "You Win!";
    guessScore.wins++
  } else {
    result = "You Lose!"
    guessScore.lose++
  }

  localStorage.setItem("guessScore", JSON.stringify(guessScore));

  alert(`You guess: ${guess}. Coin result: ${randomFlipCoin}. ${result}
Wins: ${guessScore.wins}, Losses: ${guessScore.lose};
  
  `);
}

function randomFlip() {
  const randomNumber = Math.random();
  let move = "";
  randomNumber > 1/2 ? move = "heads" : move = "tails";
  return move;

}