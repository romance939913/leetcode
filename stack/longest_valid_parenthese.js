/* Problem #32
Given a string containing just the characters '(' and ')', 
find the length of the longest valid(well - formed) parentheses substring.

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
*/

function longestValidParantheses(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack[stack.length - 1] === "(" && str[i] === ")") {
            stack.pop();
        } else {
            stack.push(str[i])
        }
    }
    return str.length - stack.length;
}

// console.log(longestValidParantheses("((()))")) // => 6
// console.log(longestValidParantheses("")) // => 0
// console.log(longestValidParantheses("(()")) // => 2
// console.log(longestValidParantheses("(()()(")) // => 4
// console.log(longestValidParantheses("(()))(()((()))()")) // => 4
console.log(longestValidParantheses("()()()()(((((((((()))))")) // => 10