/* AlgoExpert

Write a function that takes in an array of integers and returns an array of
the same length, where each element in the output array corresponds to the
number of integers in the input array that are to the right of the relevant
index and that are strictly smaller than the integer at that index.

In other words, the value at output[i] represents the number of integers that 
are to the right of i and that are strictly smaller than input[i]

array = [8, 5, 11, -1, 3, 4, 2]
output = [5, 4, 4, 0, 1, 1, 0]

There are 5 integers smaller than 8 to the right of it.
There are 4 integers smaller than 5 to the right of it.
There are 4 integers smaller than 11 to the right of it.
etc..

*/

function rightSmallerThan(array) {  
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (let j = i + 1; j < array.length; j++) {
        if (typeof array[j] === "number" && array[i] > array[j]) count++;
      }
      result.push(count);
    }  
    return result;
}

console.log(rightSmallerThan([8, 5, 11, -1, 3, 4, 2]))