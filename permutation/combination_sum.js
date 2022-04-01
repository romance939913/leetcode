/* Leetcode # 39 Combination Sum
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers 
sum to target.You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers 
is different.

It is guaranteed that the number of unique combinations that sum up to target is 
less than 150 combinations for the given input.

Example 1:
Input: candidates = [2, 3, 6, 7], target = 7
Output: [[2, 2, 3], [7]]
Explanation:

Example 2:
Input: candidates = [2, 3, 5], target = 8
Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

Example 3:
Input: candidates = [2], target = 1
Output: []

strategy:
*/

var combinationSum = function (arr, target) {
    let result = []
    debugger
    findCombination();
    return result

    function findCombination(start = 0, sum = 0, ans = []) {
        if (sum > target) return;
        if (sum === target) {
            result.push(ans.slice());
        }

        for (let i = start; i < arr.length; i++) {
            findCombination(i, sum + arr[i], [...ans, arr[i]]);
        }
    }
};

console.log(combinationSum([2, 3, 6, 7], 7))
// Output: [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8));
// Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]