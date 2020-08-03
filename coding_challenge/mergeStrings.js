/* You are implementing your own programming language and you've decided to add 
support for merging strings. A typical merge function would take two 
strings s1 and s2, and return the lexicographically smallest result that can be 
obtained by placing the symbols of s2 between the symbols of s1 in such a way that 
maintains the relative order of the characters in each string.

For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".
You'd like to make your language more unique, so for your merge function, 
instead of comparing the characters in the usual lexicographical order, 
you'll compare them based on how many times they occur in their respective 
strings(fewer occurrences means the character is considered smaller).
If the number of occurrences are equal, then the characters should be compared in 
the usual way. If both number of occurences and characters are equal, you should 
take the characters from the first string to the result.

Given two strings s1 and s2, return the result of the special merge function you are implementing.

Example

For s1 = "dce" and s2 = "cccbd", the output should be
mergeStrings(s1, s2) = "dcecccbd".
All symbols from s1 goes first, because all of them have only 1 occurrence in 
s1 and c has 3 occurrences in s2 */

const mergeStrings = (s1, s2) => {
  
}