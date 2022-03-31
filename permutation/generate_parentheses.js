/* leetcode #22

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Strategy:
Recursive solution. 
Calls opening parentheses until it reaches n open parentheses
Then calls closing parentheses until it reaches n closing parentheses
at which point we have ["((()))"]
That returns 
To which point it was left off at ["(("]
That calls closing parentheses because that's where it left off in the execution
["(()"]
Now it calls opening because we call generate again, 
currently ["(()("]

Summary: function will always call opening parens until it can't call open anymore
At which point it will return to where the last "Open parens" call left off and call close
first will always look like ["(((((())))))"]
last will always look like ["()()()()()()"]
*/


function generateParentheses(n) {
    const result = [];
    debugger

    function generate(open = 0, close = 0, parens = "") {
        if (close === n) {
            result.push(parens);
            return;
        }

        if (open < n) generate(open + 1, close, parens + "(");
        if (open > close) generate(open, close + 1, parens + ")");
    }

    generate();
    return result;
}

console.log(generateParentheses(3)) // => ["((()))","(()())","(())()","()(())","()()()"]

console.log(generateParentheses(1)) // => ["()"]