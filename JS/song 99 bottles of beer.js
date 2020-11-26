var count = 99;

while (count >= 0) {
    if (count === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else if (count === 2){
        console.log(count + " bottles of beer on the wall. " + count + " bottles of beer."); 
        console.log("Take one down pass it around, 1 bottle of beer on the wall.");
    } else if (count === 1){
        console.log(count + " bottle of beer on the wall. " + count + " bottle of beer."); 
        console.log("Take one down pass it around, no more bottles of beer on the wall.");
    } else {
        console.log(count + " bottles of beer on the wall. " + count + " bottles of beer."); 
        console.log("Take one down pass it around, " + (count-1) + " bottles of beer on the wall.");
    }
    count--;
}

// USING FOR LOOP

for (var counter = 99; counter >= 0; counter--) {
    if (counter === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else if (counter === 2){
        console.log(counter + " bottles of beer on the wall. " + counter + " bottles of beer."); 
        console.log("Take one down pass it around, 1 bottle of beer on the wall.");
    } else if (counter === 1){
        console.log(counter + " bottle of beer on the wall. " + counter + " bottle of beer."); 
        console.log("Take one down pass it around, no more bottles of beer on the wall.");
    } else {
        console.log(counter + " bottles of beer on the wall. " + counter + " bottles of beer."); 
        console.log("Take one down pass it around, " + (counter-1) + " bottles of beer on the wall.");
    }
}


// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	       numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }