// You are building a linter for your company's new custom text editor to keep
// the code smells out of your (anticipated) massive codebase! Part of your 
// technical design includes writing a function that checks that all of the 
// parentheses in your engineers' code are balanced.
//
// Given a string of text, write a function that returns true if the 
// parentheses are balanced, and false if they are not.
// Note: Your code should ignore all non-bracket characters in the input 
//       string.

//         - Parentheses:     ()
//         - Square Brackets: []
//         - Curly Brackets:  {}

//
// (1) Your function must run in linear time, O(n).
// (2) Your function must consume (at maximum) linear space, O(n).

// Example 1: Parentheses Only
// ---------------------------
//
// balancedParens('(');          => false
// balancedParens('()');         => true
// balancedParens(')(');         => false
// balancedParens(')()())');     => false
// balancedParens('((()()))');   => true
//
//

// Example 2: Parentheses + Text
// -----------------------------
//
// balancedParens('var x = Math.floor(2.5)');             => true
// balancedParens('var y = (((x + 5)/6) + 2*(x + 10))');  => true
// balancedParens('var z = ()(x + 5)/6) + 2*(x + 10))');  => false

// Example 3: All Brackets
// -----------------------
//
// balancedParens('()[]{}');     => true
// balancedParens('[{()}]');     => true
// balancedParens('[{])({)[}');  => false
//
// ------------------------------
// Example 4: All Brackets + Text
// ------------------------------
//


function balancedParens(str) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (pairs[char]) {
      stack.push(char);
    } else if (pairs[stack[stack.length - 1]] === char) {
      stack.pop()
    }
  }

  return stack.length === 0;
};

console.log(balancedParens(']')); // => false
console.log(balancedParens('[[[]]]]')); // => false
console.log(balancedParens('[]{}()')); // => true
console.log(balancedParens('const roundDown = function(num) { return Math.floor(num) };')); // => true
console.log(balancedParens('{ array: [1, 2, [3, 4], 5], timesTwoMethod: (num) => num * 2; }')); // => true
console.log(balancedParens('function printThirdElement(array) { console.log(array[3]]] }')); // => false