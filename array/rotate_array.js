/* leetcode # 189
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] 

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Follow up:
Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

const rotateArray = (arr, k) => {
    k = k % arr.length;
    reverse(0, arr.length - 1)
    reverse(0, k - 1)
    reverse(k, arr.length - 1)

    function reverse(i, j) {
        while (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// [7, 6, 5, 4, 3, 2, 1]
//
// [5, 6, 7, 1, 2, 3, 4]

console.log(rotateArray([-1, -100, 3, 99], 2));
// [3, 99, -1, -100]

console.log(rotateArray([8, 9, 10, 11, 12, 13, 14, 15, 16], 6));
// [11, 12, 13, 14, 15, 16, 8, 9, 10]