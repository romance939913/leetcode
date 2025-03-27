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

input: [14, 16, 17, 2, 4, 5, 7, 8, 13], 12
output: 1

input: [12, 13, 14, 16, 1, 2, 4, 5, 7, 8, 9, 10, 11], 16
output: 3

input: [12, 13, 14, 16, 17, 18, 2], 18
output: 5

input: [3, 4, 5, 1, 2], 7
output: 4

strategy:
conduct a binary search, choose the number in the middle of the arr
look to the far left pointer, is that side sorted? And could the target be in there?
if it's not sorted check the right side, could the target be in there?
do a bsearch on that smaller arr and repeat
*/


function shiftedBSearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    debugger
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] <= nums[right]) {
            if (target <= nums[right] && nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1
}

// const input = [12, 13, 14, 16, 17, 18, 20, 22, 1, 2, 3, 6, 9];
// console.log(shiftedBSearch(input, 3)); // => 10

// const input1 = [12, 13, 14, 16, 1, 2, 4, 5, 7, 8, 9, 10, 11];
// console.log(shiftedBSearch(input1, 16)); // => 3

// // fix this case
// const input2 = [3, 4, 5, 1, 2];
// console.log(shiftedBSearch(input2, 7)); // => -1

// const nums = [4, 5, 6, 7, 0, 1, 2];
// console.log(shiftedBSearch(nums, 0))

const input3 = [1, 3];
console.log(shiftedBSearch(input3, 3)) // => 1












/*
strategy: 
index into the middle and beginning and end of our array
check if the middle is our target
check which side is in order,
check if the num falls into that ordered range,
if so call the same func on that side, else the other

Outcome: 
logarithmic time complexity because input is halved for each recursive call. 


function shiftedBSearch(nums, target) {
    let left = 0; 
    let right = nums.length - 1;
    while (left <= r) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] < nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target <= nums[right] && target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1
}
*/

