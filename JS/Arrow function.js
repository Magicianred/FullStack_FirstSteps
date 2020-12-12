var numbers = [3, 56, 2, 48, 5];

//    NORMAL function
function square(x){ 
    return x * x;
}

const newNumbers = numbers.map(square);

////////////////

//     ANONYMOUS function
const newNumbers = numbers.map(function (x) {
    return x * x;
})
////////////////

//     ARROW function versions
const newNumbers = numbers.map( (x, y) => { //two parameters need parenthesis
    return x * y;
})

const newNumbers = numbers.map( x => { //ONE parameter doesn't need parenthesis
    return x * x;
})

const newNumbers = numbers.map( x => x * x );//Only a single line statement, returning only a single expression, can delete the return keyword


console.log(newNumbers);