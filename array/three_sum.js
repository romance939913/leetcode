/* Leetcode # 15
Given an array nums of n integers, are there elements a, b, c in nums 
such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1, 0, 1, 2, -1, -4]
*sorted*: nums = [-4, -1, -1, 0, 1, 2]
Output: [[-1, -1, 2], [-1, 0, 1]]

strategy options: 
brute force with 3 nested for loops
optimized approach, sort array (n log(n)) keep one pointer at the smallest number
keep two pointers at the opposite ends of the rest of the sorted array j[1] and k[-1]
if the tripplet is > 0, decrement k and if the triplet is > 0 increment i
*/

function threeSum(arr) {
    arr = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > 0) break;
        let j = i + 1;
        let k = arr.length - 1
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                result.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
            }
        }
    }
    return result
}

console.log(threeSum([-4, -1, -1, 0, 1, 2])) // => [[-1, -1, 2], [-1, 0, 1], [-1, 0, 1]]
console.log(threeSum([-3, -2, 0, 1, 2, 5])) // => [[-3, -2, 5], [-3, 1, 2], [-2, 0, 2]]
console.log(threeSum([-3, -2, 0, 0, 2, 5])) // => [[-3, -2, 5], [-2, 0, 2]]
console.log(threeSum([])) // => []
console.log(threeSum([0])) // => []