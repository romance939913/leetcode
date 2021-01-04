// Leetcode #387
// Given a string, find the first non - repeating character in it and return its index.
// If it doesn't exist, return -1.

// 1) run through string making a hash with char as the key, indices as values
// 2)

// 1)Run through string, check indexOf char for string .slice)i+1, str.length)
// 2 if index)f == -1, return char

function firstUniqueChar(str) {
    let keys = {};
    for (i = 0; i < str.length; i++) {
        if (!keys[str[i]]) {
            keys[str[i]] = 1;
        } else {
            keys[str[i]] += 1;
        }
    }

    for (i = 0; i < str.length; i++) {
        if (keys[str[i]] === 1 ) return i;
    }
    return -1;
}

console.log(firstUniqueChar("leetcode")) // => 0
console.log(firstUniqueChar("loveleetcode")) // => 2
console.log(firstUniqueChar("hannah")) // => -1


