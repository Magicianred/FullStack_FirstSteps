for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (){ //anonymous function
        alert("I got clicked!!!!");
    });
}
