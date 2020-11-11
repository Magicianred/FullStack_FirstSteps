//Form validation
var inputName = document.getElementById('name-input');
var inputEmail = document.getElementById('email-input');
var inputText = document.getElementById('text-input');
var button = document.querySelector('.submit-btn');
var regEx = /\S+@\S+\.\S+/;
var form = document.querySelector('.form');

function checkInput() {
    if (inputName.value.trim() !== "" && regEx.test(inputEmail.value) && inputText.value.trim() !== "") {
        button.style.backgroundColor = '#2962ff';
        button.style.cursor = 'pointer';
        button.disabled = false;
    } else {
        button.style.backgroundColor = '#efefef';
        button.disabled = true;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submitted!")
})