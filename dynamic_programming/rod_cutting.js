/* rod cutting problem
Given a rod of length n, and an array that contains the prices of all the pieces 
smaller than n, determine the maximum profit you could obtain from cutting up the 
rod and selling its pieces.

build up an arrray of the same length as input array
at each position in the array, store the max profit you can get for a rod of
that length
*/

// when i = 2, checking a rod of length 3
// all the other prev combinations are between lengths 1 and 2


function rodCutting(arr) {
    const newArr = []; // memo
    
    for (let i = 0; i < arr.length; i++) {
        let j = i - 1;
        let k = 0;
        let largest = arr[i];
        while (j >= k) {
            if (arr[k] + arr[j] > largest) largest = arr[k] + arr[j];
            j--;
            k++;
        }
        newArr.push(largest);
    }
    return newArr[newArr.length - 1];
}

let rodValues = [2, 5, 7, 11, 11, 13];
console.log(rodCutting(rodValues)); // => 16 (slices of size 2 & 4)

let rodValues1 = [2, 6, 7, 8, 10, 13, 15, 16];
console.log(rodCutting(rodValues1)); // => 18 (slices of size 2 & 6)