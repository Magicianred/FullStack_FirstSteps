//Selecionando elementos (body, h1, h2..., ul, li, etc)
document.getElementsByTagName("li")[2].style.backgroundColor = "yellow";
//document.getElementsByTagName("li").length;


//Selecionando elementos, ids e classes
document.querySelector("input");
document.querySelector("li a").style.color ="red";
document.querySelector("li.item");
document.querySelector("#list a");

document.querySelector("#list .item"); //Dos 3 items, retorna apenas o primeiro que satisfaz as condições
document.querySelectorAll("#list .item"); //Retorna uma lista com todos os items que satisfazem as condições
document.querySelectorAll("#list .item")[1].style.color = "blue";

document.querySelector("button").style.backgroundColor = "#2962ff";

////////////// Getting style classes from CSS

document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.add("huge");

///////////////////////// Inside text and Inside HTML

//document.getElementById("title").textContent = "Heeeeey";
document.querySelector("h1").innerHTML; //Gets strong tag inside h1 tag!
document.querySelector("h1").textContent;//Gets only the text
document.querySelector("h1").innerHTML = "<em>Hellooo</em>";

//////////////// Attributes of each element (href, class, id, etc)
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("class");
document.querySelector("a").setAttribute("href", "https://duckduckgo.com/");


