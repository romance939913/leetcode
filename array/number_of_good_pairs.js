/* Problem # 1512

Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0

@param {number[]} nums
@return {number}
 */

const numIdenticalPairs = (nums) => {
    let counts = {};

    nums.forEach(num => {
        !!counts[num] ? counts[num] += 1 : counts[num] = 1;
    })

    let values = Object.values(counts).filter(count => count > 1);

    let pairs = 0;

    values.forEach(value => {
        let arr = [...Array(value).keys()].slice(1)
        pairs += arr.reduce((acc, ele) => acc + ele, 0)
    })

    return pairs;
};

// console.log(numIdenticalPairs([1,2,1,1,1,1,2])); // 11
// console.log(numIdenticalPairs([1,1,1,1])); // 6
// console.log(numIdenticalPairs([1,2,3])); // 0
// console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4