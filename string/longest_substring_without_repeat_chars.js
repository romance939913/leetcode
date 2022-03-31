/* leetcode # 3 
Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3

strategy: 2 pointer approach
iterate the right pointer keeping track of every character passed in a set
Once right passes a character alreach in a set, add up every char in the set
and compare it to longest var
then iterate the left pointer, ejecting every char until it comes to the offending
char
eject that one then begin iterating the right pointer again

Outcome: Faster than 95% of JS submissions
O(n) time because in the worst case, both right and left pointer touch each char 
just once
O(n) space because worse case is a set the size of the input 
*/


const length_of_longest_substring = (str) => {
    let longest = 0;
    let currentChars = new Set();
    let left = 0;
    let right = 0;
    while (right < str.length) {
        if (!currentChars.has(str[right])){
            currentChars.add(str[right]);
            right ++;
        } else {
            longest = Math.max(longest, currentChars.size)
            while (str[left] !== str[right]) {
                currentChars.delete(str[left])
                left ++;
            }
            currentChars.delete(str[left])
            left ++;
        }
    }
    return Math.max(longest, currentChars.size);
}

console.log(length_of_longest_substring("abcabcbb")) // => 3
console.log(length_of_longest_substring("bbbbb")) // => 1
console.log(length_of_longest_substring("pewwkew")) // => 3
console.log(length_of_longest_substring("")) // => 0
console.log(length_of_longest_substring(" ")) // => 1
console.log(length_of_longest_substring("dvdf")) // => 3