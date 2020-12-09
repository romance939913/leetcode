# Problem # 3
# Given a string s, find the length of the longest substring without repeating characters.

# Example 1:
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Example 2:
# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:
# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

# Example 4:
# Input: s = ""
# Output: 0
 

# Constraints:
# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.

def length_of_longest_substring(word):
    longest = 0
    characterHash = {}
    right = 0
    left = 0
    while right < len(word):
        if word[right] in characterHash:
            
            shift_left = True


print(length_of_longest_substring("abcabcbb")) # 3
print(length_of_longest_substring("bbbbb")) # 1 
print(length_of_longest_substring("pwwkew")) # 3
print(length_of_longest_substring("")) # 0

