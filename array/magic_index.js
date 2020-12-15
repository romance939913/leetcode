/** 
Magic Index
A magic index in an array (A) is defined to be an index such that A[i] = i. 
Given a sorted array of distinct integers, write a function that returns a magic 
index for the array or -1 if one does not exist.
**/

// let arr = [1, 3, 4, 4, 5, 5, 6, 10, 12]

// Generates a sorted array of distinct integers
function randomArray(len) {
    var arr = [];
    while (arr.length < len) {
        let rand = Math.floor(Math.random() * len * 2) - (len / 2);
        if (arr.indexOf(rand) === -1) {
            arr.push(rand);
        }
    }
    return arr.sort((a, b) => { return a - b });
}

/* O(logN) solution
checks the mid point index between the start and end each time. 
each recursive call changes the start or end to be after or before the mid point (respectivly)
*/
function getMagicIndex(arr, start, end) {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === mid) {
            return mid;
        } else if (mid > arr[mid]) {
            return getMagicIndex(arr, mid + 1, end)
        } else {
            return getMagicIndex(arr, start, mid - 1);
        }
    }
    return -1;
}

const magicalArray = randomArray(16);
console.log('Arr: ', magicalArray);
console.log('Magic Index: ', getMagicIndex(magicalArray, 0, magicalArray.length - 1));
  