/* Leetcode #46 Permutations
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.

Example 1:
Input: nums = [1, 2, 3]
Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

Example 2:
Input: nums = [0, 1]
Output: [[0, 1], [1, 0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Strategy:

*/

const permute = function (nums) {
    const permutations = [];
    debugger
    const rcr = (arr, permutation) => {
        if (!arr.length) {
            permutations.push(permutation);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            rcr(newArr, [...permutation, arr[i]]);
        }
    };
    rcr(nums, []);

    return permutations;
};

console.log(permute([1, 2, 3])) 
// => [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

console.log(permute([0, 1]));
// => [[0, 1], [1, 0]]

console.log(permute([1]));
// => [[1]]