/* 
Candy crush words - removing letters that appear at least 3 times in a row 

(ABCCCBB => ABBB => A) 
("" => "")
(ABCCCBBB => ABBBB => A)
(AAABBBCC => CC)
Strategy: 
Utilize a stack
elements are tuples that hold the character and amount
remove from stack when current character differs from the stack top and stack top count >= 3
before adding to stack check top to see if same element
*/

function candyCrush(str) {
  let stack = [[str[0], 1]];

  let i = 1;
  while (i < str.length) {
    if (stack.length === 0) {
      stack.push([str[i], 1])
      i++;
    } else if (str[i] !== stack[stack.length - 1][0]) {
      if (stack[stack.length - 1][1] >= 3) {
        stack.pop();
      } else {
        stack.push([str[i], 1])
        i++;
      }
    } else {
      stack[stack.length - 1] = [str[i], stack[stack.length - 1][1] + 1] 
      i++
    }
  }

  if (stack[stack.length - 1][1] >= 3) stack.pop();
  
  let answer = '';
  stack.forEach(tup => {
    while (tup[1] > 0) {
      answer += tup[0];
      tup = [tup[0], tup[1] - 1]
    }
  })
  
  return answer;
}

console.log(candyCrush("ABCCCBB")) // => "A"
console.log(candyCrush("ABCCCB")) // => "ABB"
console.log(candyCrush("ABCCBB")) // => "ABCCBB"
console.log(candyCrush("ABCCCCCCBBDD")) // => "ADD"
console.log(candyCrush("ABCCCCCCBBAADD")) // => "DD"
console.log(candyCrush("CCCCCC")) // => ""


// // First try
// // Not optimal because iterator resets to beginning once it finds a streak
// // touches some characters multiple times
// function candyCrush(str) {
//   let i = 0;
//   let streaking = false;

//   while (str[i + 1] !== undefined) {
//     if (str[i] === str[i + 1]) {
//       let beginning = i;
//       streaking = true;
//       while (streaking) {
//         if (str[i] === str[i + 1]) {
//           i++;
//         } else {
//           streaking = false;
//         }
//         if (i - beginning >= 2) {
//           str = str.slice(0, beginning) + str.slice(i + 1);
//           i = 0;
//         }
//       }
//     } else {
//       i++;
//     }
//   }
//   return str
// }