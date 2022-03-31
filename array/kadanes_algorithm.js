// kadane's algo
// input: int array
// output: subarray that sums to the max

let nums= [3,-8,5,8,-10];
// [5,8]

let nums1 = [6, 3, -10, 4, -14, 5, 8, 10, 4, -3, -5, 8, 2, -1];
// output = 29 --> [5, 8, 10, 4, -3, -5, 8, 2]

// if the next number added will cause the sum to be 
// smaller than current sum, then skip.

let nums2 = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
// output = 19 --> [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

const kadanesAlgo = nums => {

}


console.log(kadanesAlgo(nums))
console.log(kadanesAlgo(nums1));
console.log(kadanesAlgo(nums2));