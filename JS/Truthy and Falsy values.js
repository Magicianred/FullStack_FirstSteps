//Falsy
//undefined
//null
// ''
//false
//0
//NaN

//return the number of truthy values in an array
const array = [0, null, undefined, 1, 2, 3, 4, 5];

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) //if the value is not a boolean, JavaScript will interpret the value as truthy or falsy
    count++;
  } return count;
}