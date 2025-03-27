/* Problem 2412
An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. 
In other words, it is any substring of the string "abcdefghijklmnopqrstuvwxyz".

For example, "abc" is an alphabetical continuous string, while "acb" and "za" are not.
Given a string s consisting of lowercase letters only, return the length of the 
longest alphabetical continuous substring.

Example 1:
Input: s = "abacaba"
Output: 2
Explanation: There are 4 distinct continuous substrings: "a", "b", "c" and "ab".

Example 2:
Input: s = "abcde"
Output: 5

strategy: 

*/


var longestContinuousSubstring = function (s) {
    let longest = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    debugger
    for (let i = 0; i < s.length; i++) {
        let abc_idx = alphabet.indexOf(s[i])
        let new_longest = 0;
        while (!!alphabet[abc_idx] && !!s[i] && s[i] == alphabet[abc_idx]) {
            new_longest++;
            i++;
            abc_idx++;
        }
        longest = Math.max(longest, new_longest)
    }
    return longest;
};

console.log(longestContinuousSubstring("abacaba")) // => 2
console.log(longestContinuousSubstring("abcde")) // => 5
console.log(longestContinuousSubstring("pcfftiovoygwwncfgews")) // => 2