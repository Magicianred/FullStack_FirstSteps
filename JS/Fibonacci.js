// An array that contains the starting sequence (two numbers) and length (size of the sequence). It will then return an array that contains a fibonacci sequence based on the starting numbers and the length that was passed in.

// Sample Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// Equasion: Fn = (Fn-1) + (Fn-2)

var fibonacciArray = [0,1];
var length;

function fibSequence (length) {
    for (i = 2; i < length; i++) {
        fibonacciArray.push( fibonacciArray[i-1] + fibonacciArray[i-2]);
    }
    return fibonacciArray;
}
console.log(fibSequence(50));



function calculateFibonacciNumbers(max) {
    var fib = [0, 1];
    for (var i = 2; i < max; i++ ) {
      fib.push( fib[i - 1] + fib[i - 2] );
    }
    return fib;
  }
  console.log(calculateFibonacciNumbers(50));
