/*You are given a string s and an integer k, a k duplicate removal consists of choosing 
k adjacent and equal letters from s and removing them, causing the left and the right 
side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. 
It is guaranteed that the answer is unique.

Example 1:
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"

strategy
Create a 2d stack [["a", 1]]
Iterate through the string, check which letter is at top of stack
if it's the same letter, increment the top of the stack, (if it's the required amt, pop off stack)
if it's a dif letter add a new stack element to the top
recreate the string with what's left of the stack
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (letters, k) {
    let stack = [];

    for (let i = 0; i < letters.length; i++) {
        if (stack.length == 0 || stack[stack.length - 1][0] != letters[i]) {
            stack.push([letters[i], 1])
        } else if (stack[stack.length - 1][0] == letters[i]) {
            stack[stack.length - 1][1] ++;
            if (stack[stack.length - 1][1] == k) {
                stack.pop()
            }
        }
    }

    let ans = [];
    stack.forEach(element => {
        while (element[1] > 0) {
            ans.push(element[0]);
            element[1] --;
        }
    });
    return ans.join("")
};

console.log(removeDuplicates("abcd", 2)); // => "abcd"
console.log(removeDuplicates("deeedbbcccbdaa", 3)) // => ""
console.log(removeDuplicates("pbbcggttciiippooaais", 2)) // => "ps"