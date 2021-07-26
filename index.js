var randonNumber1 = Math.floor(Math.random()*6)+1;
var randonNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "images/dice" + randonNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randonNumber2 + ".png";

var winner;

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randonNumber1>randonNumber2){
  winner = "Player 1 Wins !";
} else if (randonNumber1<randonNumber2) {
  winner = "Player 2 Wins !";
} else {
  winner = "DRAW !";
}

document.querySelectorAll("h1")[0].innerHTML = winner;
