/* Leetcode 735
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign 
represents its direction (positive meaning right, negative meaning left). 
Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. 
If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. 
Two asteroids moving in the same direction will never meet.

Example 1:
asteroids = [5, 10, -5]
Output: [5, 10]

Example 2:
asteroids = [8, -8]
Output: []

Example 3:
asteroids = [-2, -1, 1, 2]
Output: [-2, -1, 1, 2]

Example 4:
asteroids = [-2, -1, 5, 3, -4, -3, -3, -6, 1, 4, 3]
output: [-2, -1, 1, 4, 3]

strategy
create two pointers at the far ends of the asteroids arr.
move left inward until first positive int is id'd and right in until first negative is id'd
iterate through the remaining inner array
Create two stacks: movingRight and movingLeft
once a collission (left moving) is id'd crush down the stacks until the one or both stacks are empty
repeat process and combine all 3 arrays at the end
iterate over 
*/

// function asteroids(asteroids) {
//   let movingLeft = [];
//   let movingRight = [];
//   let left = [];
//   let right = [];
//   let idx = 0;
//   let end = asteroids.length - 1;

//   while (asteroids[idx] < 0) {
//     left.push(asteroids[idx]);
//     idx++;
//   }
//   while (asteroids[end] > 0) {
//     right.unshift(asteroids[end]);
//     end--;
//   }
//   // debugger
//   while (idx <= end) {
//     if (asteroids[idx] > 0) {
//       movingRight.push(asteroids[idx]);
//       idx++;
//     } else {
//       movingLeft.push(asteroids[idx])
//       while (movingLeft.length && movingRight.length) {
//         if (Math.abs(movingLeft[movingLeft.length - 1]) > movingRight[movingRight.length - 1]) {
//           movingRight.pop();
//         } else if (Math.abs(movingLeft[movingLeft.length - 1]) < movingRight[movingRight.length - 1]) {
//           movingLeft.pop();
//         } else {
//           movingRight.pop();
//           movingLeft.pop();
//         }
//       }
//       idx++;
//     }
//   }

//   return left.concat(movingRight).concat(movingLeft).concat(right);
// }

// attempt 2
// Create a stack
// if the asteroid is moving right push onto the stack, 
// if the asteroid is moving left, check the top of the stack to see if positive
// if so crunch down the stack until it's the right moving asteroid is larger
// return stack


// [-2, -1, 5, 3, 2, -4, -3, -3, -6, 1, 4, 3] // => [-2, -1, -6, 1, 4, 3]

function asteroids(asteroids) {
  let stack = [];
  let idx = 0
  
  while (idx < asteroids.length) {
    if (asteroids[idx] > 0) {
      stack.push(asteroids[idx])
      idx++;
    } else {
      if (stack[stack.length - 1] < 0 || !stack.length) {
        stack.push(asteroids[idx]);
        idx++;
      } else if (stack[stack.length - 1] > 0) {
        while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroids[idx])) {
          stack.pop()
        }
        if (stack[stack.length - 1] > Math.abs(asteroids[idx])) {
          idx++;
        } else if (stack[stack.length - 1] == Math.abs(asteroids[idx])) {
          stack.pop();
          idx++;
        } else {
          stack.push(asteroids[idx]);
          idx++;
        }
      }
    }
  }
  return stack;
}

// console.log(asteroids([-2, -1, 5, 3, 2, -4, -3, -3, -6, 1, 4, 3])) // => [-2, -1, -6, 1, 4, 3]
// console.log(asteroids([5, 10, -5])) // => [5, 10]
console.log(asteroids([8, -8])) // => []
console.log(asteroids([-2, -1, 1, 2])) // => [-2, -1, 1, 2]
console.log(asteroids([1, 2, 3, -3, 4, -2])) // => [1, 2, 4]
console.log(asteroids([1, 2, 3, -3, 4, -6])) // => [-6]






























// def asteroids(input)
//  stack = []
//  j = 0
//  while j < input.length
//    if stack.empty?
//      stack << input[j]
//      j += 1
//    elsif (stack[-1] > 0 && input[j] > 0) || (stack[-1] > 0 && input[j] > 0)
//      stack << input[j]
//      j += 1
//    else
//      if input[j] + stack[-1] === 0
//        stack.pop
//        j += 1
//      elsif stack[-1].abs > input[j].abs
//        j += 1
//      else
//        stack.pop
//      end
//    end
//  end
//  stack
// end