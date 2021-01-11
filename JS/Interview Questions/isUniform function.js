// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical.
//isUniform([1, 1, 1, 1]);  true;
//isUniform([2, 1, 1, 1]);  false;
//isUniform(["a", "b", "p"]);  false;
//isUniform(["b", "b", "b"]);  true;

function isUniform( arr ){
    var first = arr[0]; //first index
    for ( var i = 1; i < arr.length; i++ ){ //compare first index with the next
        if (arr[1] !== first) {
            return false;
        }    
    }
    return true;
};
