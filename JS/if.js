var randomScore = Math.random() * 100;
randomScore = Math.floor(randomScore) + 1;
console.log(randomScore + "%");

if (randomScore >= 70) {
    alert("Lucky! High score of " + randomScore + ".");
} else if (randomScore >= 30 && randomScore < 70) {
    alert("Score of " + randomScore + ".");
} else if (randomScore < 30) {
    alert("Score of " + randomScore + ". Kinda low, unlucky!");
}