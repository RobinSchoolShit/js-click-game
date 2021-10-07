let elementTimer = document.getElementById("timer");
let elementSpelIsActief = document.getElementById("spelIsActief");
let elementScore1 = document.getElementById("score1");
let elementScore2 = document.getElementById("score2");
let elementWinner = document.getElementById("winner");
let elementReset = document.getElementById("reset");

let timer = 6;

let clickAllowed = false;

let player1Button = "a";
let player2Button = "l";

let player1Score = 0;
let player2Score = 0;

function countDown() {
  elementScore1.innerHTML = player1Score;
  elementScore2.innerHTML = player2Score;
  clickAllowed = false;
  if (timer == 0) {
    gameStart();
  } else {
    timer = timer - 1;
    elementTimer.innerHTML = timer;
    setTimeout(countDown, 1000);
  }
}

function gameStart() {
  timer = 10;
  elementTimer.innerHTML = timer;
  clickAllowed = true;
  setTimeout(gameCountDown, 1000);
}

document.addEventListener("keydown", function (event) {
  if (event.key == "a") {
    if (clickAllowed == true) {
      player1Score = player1Score + 1;
      elementScore1.innerHTML = player1Score;
    }
  }
  if (event.key == "l") {
    if (clickAllowed == true) {
      player2Score = player2Score + 1;
      elementScore2.innerHTML = player2Score;
    }
  }
});

function gameCountDown() {
  if (timer == 0) {
    clickAllowed = false;
    if (player1Score == player2Score) {
      elementWinner.innerHTML = "Het is gelijkspel";
    } else {
      if (player1Score > player2Score) {
        elementWinner.innerHTML = "Player 1 heeft gewonnen";
      } else {
        elementWinner.innerHTML = "Player 2 heeft gewonnen";
      }
    }
  } else {
    timer = timer - 1;
    elementTimer.innerHTML = timer;
    setTimeout(gameCountDown, 1000);
  }
}

countDown();
