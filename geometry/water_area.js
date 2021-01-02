/* Problem #11 Container with most water

Given n non-negative integers a1, a2, ..., an , where each represents a point at 
coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the 
line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis 
forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Example 3:
Input: height = [4,3,2,1,4]
Output: 16

Example 4:
Input: height = [1,2,1]
Output: 2
*/

// n = height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104

// brute force method: check area of each pair as I loop through 

function waterContainerProblem(heights) {
    let currentMax = 0;
    let beginning = 0;
    let end = heights.length - 1;
    
    while (beginning < end) {
        let area = (end - beginning) * Math.min(heights[beginning], heights[end])
        if (area > currentMax) currentMax = area;
        if (heights[beginning] < heights[end]) {
            beginning++;
        } else {
            end--;
        }
    }
    return currentMax;
}

console.log(waterContainerProblem([1, 8, 6, 2, 5, 4, 8, 3, 7])) // => 49
console.log(waterContainerProblem([1, 1])) // => 1
console.log(waterContainerProblem([4, 3, 2, 1, 4])) // => 16
console.log(waterContainerProblem([1, 2, 1])) // => 2