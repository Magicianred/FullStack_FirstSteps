const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num =>{
  double.push(num * 2);
});

console.log("forEach", double);

// MAP : creates a new collection for the values of the array, always has a return value, has less side effects than forEach
const mapArray = array.map(num => num * 2);
console.log("map", mapArray);

//FILTER: filter arrays content that return true for the condition
const filterArray = array.filter(num => num > 5);
console.log("filter", filterArray);

//REDUCE: filter arrays content that return true for the condition
const reduceArray = array.reduce((accumulator, num) =>{
  return accumulator + num;
}, 0);
console.log("reduce", reduceArray);