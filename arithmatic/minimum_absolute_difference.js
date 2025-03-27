/* Given an array of distinct integers arr, find all pairs of elements with the minimum 
absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair[a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:
Input: arr = [4, 2, 1, 3]
Output: [[1, 2], [2, 3], [3, 4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1, 3, 6, 10, 15]
Output: [[1, 3]]

Example 3:
Input: arr = [3, 8, -10, 23, 19, -4, -14, 27]
Output: [[-14, -10], [19, 23], [23, 27]]

strategy: 
sort the array
Iterate through the array keeping track of the smallest difference between 2 elements
add the tuple if the difference is smallest
if a difference is smaller than result matrix, create a new result matrix w new tuple

result: O(n log n) for sorting array
*/

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let smallestDifference = Infinity;
    let sortedArr = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < sortedArr.length; i++) {
        let next = sortedArr[i + 1];
        if (!!next && (next - sortedArr[i] < smallestDifference)) {
            result = [[sortedArr[i], next]];
            smallestDifference = next - sortedArr[i];
        } else if (!!next && (next - sortedArr[i] === smallestDifference)) {
            result.push([sortedArr[i],  next])
        }
    }

    return result;
};