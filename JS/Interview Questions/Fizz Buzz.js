
    // Based on a traditional English children's game
    // Print the numbers 1..100
    // For multiples of 3, print "Fizz" instead of the number
    // For multiples of 5, print "Buzz" instead of the number
    // For multiples of 3 and 5, print "FizzBuzz" instead of the number
    // Here: fill an array instead of printing + some other complications 

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz"); //For multiples of 3 and 5, print "FizzBuzz" instead of the number 
        } else if (count % 3 === 0) {
            output.push("Fizz"); //For multiples of 5, print "Buzz" instead of the number 
        } else if (count % 5 === 0) {
            output.push("Buzz"); //For multiples of 3, print "Fizz" instead of the number 
        } else {
            output.push(count);//will add the next number or fizz buzz to the array
        }
        count++;
    }
    console.log(output) // Print out numbers from 1 to 100
}

// do { 
//     fizzBuzz() 
// } while (count <= 100);

const fizzBuzz2 = num => {
    for(let i = 1; i <= num; i++) {
      // check if the number is a multiple of 3 and 5
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
      } // check if the number is a multiple of 3
        else if(i % 3 === 0) {
        console.log('fizz');
      } // check if the number is a multiple of 5
        else if(i % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    }
}
fizzBuzz2(15);