
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dia bagi nama

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber2 + ".png"; //dia bagi nama

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage);




if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}


console.log(randomNumber1);
console.log(randomNumber2);
