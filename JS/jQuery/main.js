$("h1").addClass("big-title margin-50");
console.log( $("h1").css("color") );
//$("h1").removeClass("big-title");

$("h1").hasClass("margin-50");// boolean to see if it has a class

$("h1").text("Hi there!");
$("button").text("Don't click me");//Selects all items!

$("button").html("<em>Don't click me</em>");


// Manipulating attributes
$("img").attr("src","img.png");
$("a").attr("href","https://duckduckgo.com/");

//Add Event Listener
$("button").click(function() {
    $("h1").css("color", "purple");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
})

$("h1").on("click", function() {
    $("h1").css("color", "red");
})

//Adding NEW elements
$("h1").before("<button>New Button Added With jQuery</button>"); //before element selected
$("h1").after("<button>New Button Added With jQuery</button>"); // after element selected
$("h1").prepend("<button>New Button Prepended With jQuery</button>");//inside the selected element, just after the oppening tag
$("h1").append("<button>New Button Appended With jQuery</button>");// inside, just after the content of selected element, before closing tag
//$("button").remove() - REMOVES ALL BUTTONS FROM DOCUMENT

//Animations
$("button").on("click",function(){
    $("a").hide();
    $("a").toggle();
    $("a").fadeOut();
    $("a").fadeIn();
    $("a").fadeToggle();
    $("a").slideUp().slideToggle().slideDown().animate({opacity: 0.3});
})

$("button").on("click",function(){
    $("h1").animate({ //allows to define custom css to gradually animate towards
        opacity: 0.5 //USE ONLY FOR NUMERIC VALUES
    });
})