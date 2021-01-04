// find if two words are anagrams of each other

// questions: 
// What is the desired time complexity?
// should it be case sensitive?

// strategy:
// loop through the first string populating an object with each letter and it's quantity 
// loop through the second string decrementing each letter in the hash as we pass
// if a character in the second string doesn't exist in the hash return false
// if each key value in the hash is 0, same chars, return true else false

// outcome:
// Time Complexity = (O)3n which reduces down to just (O)n
// We loop through each string once and the hash values which is <= str lengths

function checkAnagrams (str1, str2) {
    let letterHash = {};
    
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        if (!!letterHash[str1[i]]) {
            letterHash[str1[i]] ++;
        } else {
            letterHash[str1[i]] = 1
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (!!letterHash[str2[i]]) {
            letterHash[str2[i]] --;
        } else {
            return false;
        }
    }

    let result = true;
    Object.values(letterHash).forEach(val => {
        if (val !== 0) result = false;
    })
    return result;
}


console.log(checkAnagrams("silent", "listen")) // => true
console.log(checkAnagrams("walker", "texas ranger")) // => false
console.log(checkAnagrams("melotony", "melo tony")) // => false
console.log(checkAnagrams("hannah", "nahhan")) // => true
console.log(checkAnagrams("hannah", "banana")) // => false
console.log(checkAnagrams("borat sagdiyev", "sagdiyev borat")) // => true