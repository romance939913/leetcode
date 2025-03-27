/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

strategy: 
do a binary search on the array using target
take the middle idx (check if nums.length exists)
check if target == nums[mid]
if target is greater, pass nums.slice(nums[mid + 1], nums[nums.length - 1]) back to func recursively


*/

var searchInsert = function (nums, target) {
    if (!nums.length) return false;

    let mid = Math.floor(nums.length / 2);
    if(nums[mid] == target) {
        return mid;
    } else if (nums[mid] > target) {
        return searchInsert(nums.slice(0, mid));
    } else {
        return searchInsert(nums.slice(mid + 1, nums.length - 1))
    }

};

let nums = [1, 3, 5, 6], target = 5
console.log(searchInsert(nums, target)) // => output: 2

nums = [1, 3, 5, 6], target = 2
console.log(searchInsert(nums, target)) // => output: 1

nums = [1, 3, 5, 6], target = 7
console.log(searchInsert(nums, target)) // => output: 4