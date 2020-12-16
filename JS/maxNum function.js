// Write a function maxNum() that acceps an array of numbers and returns the maximum number in the array.
//maxNum([1, 2, 3]);  3;
//maxNum([10, 3, 10, 4]);  10;
//maxNum([-5, 100]);  100;

function maxNum(array) {
    var max = arr[0]
    arr.forEach(function(i) {
        if (i > largest){
            largest = i 
        }
    });
    return largest;
}

///// FOR LOOP 

function max(arr){
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum){
            max = arr[i];
        }
    }
    return maxNum;
}

///// ES6
function biggestNumberInArray(arr) {
    const max = Math.max(...arr);
    return max;
  }