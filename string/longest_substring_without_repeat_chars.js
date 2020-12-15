// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const length_of_longest_substring = str => {
    let longest = 0;
    let letterHash = {};
    let left = 0;
    let right = 0;

    while (right < str.length) {
        if (!!letterHash[str[right]]) {
            longest = Math.max(longest, right - left);
            let shift_window = true;
            while (shift_window) {
                if (str[left] === str[right]) {
                    shift_window = false;
                    left ++;
                } else {
                    delete letterHash[str[left]];
                    left ++;
                }
            }
            right ++;
        } else {
            letterHash[str[right]] = true;
            right ++;
        }
    } 
    return Math.max(longest, right - left)
}

console.log(length_of_longest_substring("abcabcbb")) // => 3
console.log(length_of_longest_substring("bbbbb")) // => 1
console.log(length_of_longest_substring("pwwkew")) // => 3
console.log(length_of_longest_substring("")) // => 0
console.log(length_of_longest_substring(" ")) // => 1
console.log(length_of_longest_substring("dvdf")) // => 3