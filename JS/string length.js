//Twitter like string count
var textInput = prompt("Type a message:");
alert(`You have written ${textInput.length} characters, you have ${280 - textInput.length} characters left.`);

//Excluding excessive characters
alert(prompt("Type a message:").slice(0, 280));