//Generate Random Dice Roll
var n = Math.random();// 0 to 0.999999999999999999...
n = n * 6; // Multiply by whatever range is needed, this example is gonna be 0 to 5
n = Math.floor(n) + 1;// +1 to be 1 to 6
console.log(n);


var randomScore = Math.random() * 100;
randomScore = Math.floor(randomScore) + 1;
console.log(randomScore + "%");