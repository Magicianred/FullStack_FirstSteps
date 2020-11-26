
////////////////// DICE 1

var ramdomNum = Math.floor(Math.random() * 6) + 1;  ////Generate random image number
var diceImage = "images/dice" + ramdomNum + ".png";

var image1 = document.querySelectorAll("img")[0]; // Puts image
image1.setAttribute("src", diceImage);

////////////////// DICE 2
var ramdomNum2 = Math.floor(Math.random() * 6) + 1;  ////Generate random image number
var diceImage2 = "images/dice" + ramdomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1];    // Puts image
image2.setAttribute("src", diceImage2);

////////////////// Winner message
if (ramdomNum > ramdomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (ramdomNum < ramdomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "DRAW!!";
}