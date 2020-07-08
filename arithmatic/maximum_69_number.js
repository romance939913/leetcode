// Problem 1323

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit(6 becomes 9, and 9 becomes 6).

// Example 1:
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

// Example 2:
// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.

// Example 3:
// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

var maximum69Number = function (num) {
  let arr = num.toString().split("");
  let max = num;

  for (let i = 0; i < arr.length; i++) {
    let newArr = arr;
    if (arr[i] === '6') {
      newArr[i] = '9';
      let newNum = parseInt(newArr.join(""));
      if (newNum > max) {
        return newNum
      }
    }
  }
  return max;
};


console.log(maximum69Number(9669))

console.log(maximum69Number(9996))

console.log(maximum69Number(9999))