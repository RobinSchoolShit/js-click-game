// var clicks = 0;

// function clicker() {
//     clicks += 1;
//     document.getElementById("clicker").innerHTML = clicks
// }

// var clicks2 = 0;

// function clicker2() {
//     clicks2 += 1;
//     document.getElementById("clicker2").innerHTML = clicks2
// }

// // Timer
// var time = 5;
// var timer = setInterval(function(){
//  time--;
//  document.getElementById("timer").innerHTML = time + "s";
//  if(time==0){
//    clearInterval(timer);
//    document.getElementById("timer").innerHTML = "Time's up!";
//    outOfTime = true;
//  }
// }, 1000);

let elementTimer = document.getElementById("timer")
let elementSpelIsActief = document.getElementById("spelIsActief")
let elementScore1 = document.getElementById("score1")
let elementScore2 = document.getElementById("score2")
let elementWinner = document.getElementById("winner")
let elementReset = document.getElementById("reset")

let timer = 6;

let clickAllowed = false;

let player1Button = "a";
let player2Button = "l";

let player1Score = 0;
let player2Score = 0;

function countDown() {
  if (timer == 0){
    gameStart();
  }
  timer = timer-1;
  elementTimer.innerHTML = timer;
  setTimeout(countDown,1000)
}

function gameStart() {
  clickAllowed = true;
}

countDown()