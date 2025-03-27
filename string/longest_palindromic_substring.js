/*problem  #5

Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "breracecartr"
output: "racecar"

strategy:
loop through word
for word[i] check if the neighboring chars are either the same as word[i] or the same chars themselves
*/
function longestPalindrome(word) {
    let pals = [];
    debugger
    for (let i = 0; i < word.length; i++) {
        if (word[i - 1] && word[i + 1]) {
            if (word[i] == word[i + 1]) {
                palindromeLenChecker(i - 1, i + 2)
            }
            if (word[i + 1] == word[i - 1]) {
                palindromeLenChecker(i - 1, i + 1);
            }
        }
    }

    function palindromeLenChecker(left, right) {
        let iterate = true;
        while (iterate) {
            if ((word[left] && word[right]) && (word[left] == word[right])) {
                left --;
                right ++;
            } else {
                iterate = false
            }
        }
        pals.push(word.slice(left + 1, right))
    }

    return pals.reduce((acc, ele) => ele.length > acc.length ? ele : acc);
}

console.log(longestPalindrome('bebracecartr'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))  