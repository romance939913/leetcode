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

// create a forloop and if index === element value
// add that to a result array
// if result array is empty then return -1

// edge cases that could throw errors:

function getMagicIndex(arr) {
    if (arr.length === 0) return -1;

    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === mid) {
        return mid;
    } else if (arr[mid] < mid) {
        return getMagicIndex(arr.slice(0, mid));
    } else {
        let result = getMagicIndex(arr.slice(mid + 1));
        return result === -1 ? -1 : result + mid + 1;
    }
}

const magicalArray = randomArray(16);
console.log('Arr: ', magicalArray);
console.log('Magic Index: ', getMagicIndex(magicalArray));
  