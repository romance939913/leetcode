# problem  #5
import functools

# Given a string s, find the longest palindromic substring in s. 
# You may assume that the maximum length of s is 1000.

# Example 1:
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.

# Example 2:
# Input: "cbbd"
# Output: "bb"

def longestPalindrome(word):
    pals = []
    stack = []
    current_word = ''
    for char in word:
        current_word += char
        if stack[-1] != char:
            stack.append(char)
        else:
            stack.pop()
            if len(stack) <= 1:
                pals.append(current_word) 
                current_word = ''
    return functools.reduce(lambda a, b : a if len(a) > len(b) else b, pals)

print(longestPalindrome('babad'))
print(longestPalindrome('cbbd'))  