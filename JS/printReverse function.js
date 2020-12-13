// printreverse()
//Write a function printreverse() that takes an array as an argument and prints out the elemtns in the array in reverse order(don't actually reverse the array itself)

//printreverse([1, 2, 3, 4]);
//4
//3
//2
//1

//printreverse(["a", "b", "c"]);
//"c"
//"b"
//"a"

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0 ; i--){
        console.log(arr[i]);
    }
}