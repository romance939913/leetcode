// Takes in an array of strings and groups anagrams together
// ie. cinema and iceman
// return a list of anagram groups in no particular order (matrix array)

// input =>  ['iceman', 'cinema', 'lap', 'pal', 'banana', 'lpa']
// output => [['iceman', 'cinema'], ['lap', 'pal', 'lpa'], ['banana']]

// non optimized
// step 1 iterate through input array
// compare current element character hash with that of each other element
// if identical character hashes then group the anagrams in result
// if i get through the entire array with no matches, put element ina solo subarray


const groupAnagrams = words => {
    const wordHash = {};

    for (let i = 0; i < words.length; i++) {
        let sortedWord = words[i].split("").sort().join("");
        if (!!wordHash[sortedWord]) {
            wordHash[sortedWord].push(words[i]);
        } else {
            wordHash[sortedWord] = [words[i]];
        }
    }
    return Object.values(wordHash);
}

console.log(groupAnagrams(['iceman', 'cinema', 'lap', 'pal', 'banana', 'lpa']))