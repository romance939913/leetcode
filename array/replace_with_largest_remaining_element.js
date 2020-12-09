// problem 1299

// Given an array arr, replace every element in that array with the greatest 
// element among the elements to its right, and replace the last element with -1

// After doing so, return the array.


// Example 1:

// Input: arr = [17, 18, 5, 4, 17, 6, 1]
// sorted: [1]
// result: [18, 17, 17, 17, 6]
// numHash { 18:0, 17:0, 6:1, 5:0, 4:0, 1:1}

// Input:  [17, 18, 5, 4, 6, 1]
// sorted: [18, 17, 6, 5, 4, 1]
// result: [18, ]
// numHash { 18:0, 17:0, 6:1, 5:0, 4:0, 1:1}

// Output: [18, 17, 17, 17, 6, 1, -1]


// Constraints:

// 1 <= arr.length <= 10 ^ 4
// 1 <= arr[i] <= 10 ^ 5

var replaceElements = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b).reverse();
  let result = [];
  let numHash = {};

  arr.forEach(num => {
    !!numHash[num] ? numHash[num] ++ : numHash[num] = 1;
  })

  for (let i = 0; i < arr.length - 1; i++) {
    numHash[arr[i]]--;
    let check = true;
    while (check) {
      if (arr[i] === sorted[0] || !numHash[sorted[0]]) {
        sorted.shift()
      } else {
        check = false;
      }
    }
    result.push(sorted[0]);
  }

  result.push(-1)
  return result;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))
console.log(replaceElements([17, 18, 5, 4, 17, 6, 1]))


