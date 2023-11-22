/*
    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. 

    Example: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]));

function moveZeros(arr) {
    let nonZeroPointer = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroPointer] = arr[i];
            if (nonZeroPointer !== i) {
                arr[i] = 0;
            }
            nonZeroPointer++;
        }
    }
    return arr;
}

/* 
    var moveZeros = function (arr) {
        var filtedList = arr.filter(function (num){return num !== 0;});
        var zeroList = arr.filter(function (num){return num === 0;});
        return filtedList.concat(zeroList);
    }

    function moveZeros(arr) {
        return arr.sort((a, b) => b === 0 ? -1 : 0);
    }
*/