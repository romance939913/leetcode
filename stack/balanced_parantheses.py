import pdb
# You are building a linter for your company's new custom text editor to keep
# the code smells out of your(anticipated) massive codebase! Part of your
# technical design includes writing a function that checks that all of the
# parentheses in your engineers' code are balanced.
# Given a string of text, write a function that returns true if the
# parentheses are balanced, and false if they are not.
# Note: Your code should ignore all non-bracket characters in the input
# string.

# - Parentheses:     ()
# - Square Brackets: []
# - Curly Brackets:  {}

# (1) Your function must run in linear time, O(n).
# (2) Your function must consume(at maximum) linear space, O(n).

# Example 1: Parentheses Only
# balanced_parens('(') = > false
# balanced_parens('()') = > true
# balanced_parens(')(') = > false
# balanced_parens(')()())') = > false
# balanced_parens('((()()))') = > true

# Example 2: Parentheses + Text
# balanced_parens('var x = Math.floor(2.5)') = > true
# balanced_parens('var y = (((x + 5)/6) + 2*(x + 10))') = > true
# balanced_parens('var z = ()(x + 5)/6) + 2*(x + 10))') = > false

# Example 3: All Brackets
# balanced_parens('()[]{}') = > true
# balanced_parens('[{()}]') = > true
# balanced_parens('[{])({)[}') = > false

def balanced_parens(code):
    stack = []
    pairs = { '(': ')', '[': ']', '{': '}' }
    # pdb.set_trace()
    for char in code:
        if char in pairs:
            stack.append(char)
        elif char == ')' or char == ']' or char == '}':
            if len(stack) == 0 or pairs.get(stack.pop()) != char:
                return False
    return len(stack) == 0


input = 'const roundDown = function(num) { return Math.floor(num) };'
print(balanced_parens(input)) # => True
input1 = '({[]})'
print(balanced_parens(input1)) # => True
input2 = 'var y = (((x + 5)/6) + 2*(x + 10))'
print(balanced_parens(input2))  # = > True
input3 = '()]()'
print(balanced_parens(input3))  # = > False
