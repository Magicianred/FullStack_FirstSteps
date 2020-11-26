//Detecting button clicked
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (){ //anonymous function
       var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    });
}

//Detecting key pressed
document.addEventListener("keydown", function (event) { //Adding event listener to the whole page document (higher order function)
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Deciding which sound to play
function makeSound (key) { 
    switch (key) {
        case "w":
             let tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();
             break;
         case "a":
             let tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
             break;
         case "s":
             let tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
             break;
         case "d":
             let tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();
             break;
         case "j":
             let snare = new Audio('sounds/snare.mp3');
             snare.play();
             break;
         case "k":
             let crash = new Audio('sounds/crash.mp3');
             crash.play();
             break;
         case "l":
             let kick = new Audio('sounds/kick-bass.mp3');
             kick.play();
             break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

//Button pressing animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}