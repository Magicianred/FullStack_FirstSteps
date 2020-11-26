//Passing functions as arguments

function add (num1, num2) {
    return num1 + num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculator (num1, num2, operator) { //Higher order function, operator is a callback function
    return operator(num1, num2);
}