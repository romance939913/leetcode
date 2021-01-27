/*
Shifted Binary Search
function takes in array of distinct ints and target int
The array is sorted, but has been shifted by some amount
return the index of the target, or -1 if it doesn't exist

examples 
input: [45, 61, 71, 72, 73, 0, 1, 21, 33, 37], 33
output: 8

input: [12, 2, 4, 5, 7, 8, 10], 2
output: 1

input: [11, 12, 14, 2, 4, 5, 7, 8, 10], 12
output: 1

input: [12, 13, 14, 16, 1, 2, 4, 5, 7, 8, 9, 10, 11], 16
output: 3

input: [12, 13, 14, 16, 17, 18, 2], 18
output: 5

input: [3, 4, 5, 1, 2], 7
output: 4

strategy: 
index into the middle and beginning and end of our array
check if the middle is our target
check which side is in order,
check if the num falls into that ordered range,
if so call the same func on that side, else the other

Outcome: 
logarithmic time complexity because input is halved for each recursive call. 
*/

function shiftedBSearch(arr, target, start, end) {
    if (start > end) return -1

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    }

    if (arr[start] <= arr[mid]) {
        if (target >= arr[start] && target <= arr[mid]) {
            return shiftedBSearch(arr, target, start, mid - 1)
        } else {
            return shiftedBSearch(arr, target, mid + 1, end)
        }
    }

    if (arr[mid] <= arr[end]) {
        if (target >= arr[mid] && target <= arr[end]) {
            return shiftedBSearch(arr, target, mid + 1, end);
        } else {
            return shiftedBSearch(arr, target, start, mid - 1)
        }
    }
}

const input = [12, 13, 14, 16, 17, 18, 20, 22, 1, 2, 3, 6, 9];
console.log(shiftedBSearch(input, 3, 0, input.length - 1)); // => 10

const input1 = [12, 13, 14, 16, 1, 2, 4, 5, 7, 8, 9, 10, 11];
console.log(shiftedBSearch(input1, 16, 0, input1.length - 1)); // => 3

// fix this case
const input2 = [3, 4, 5, 1, 2];
console.log(shiftedBSearch(input2, 7, 0, input1.length - 1)); // => -1