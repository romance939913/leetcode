// Problem: Given a 2D board and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cell, where 
// "adjacent" cells are those horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

// can the same coordinate be used more than once?

// strategy: loop through the board to find all possible starting points (the first letter). 
// from each starting point, index into each possible neighbor searching for the next char
// if the character is found, recursively call helper function on that char 
// repeat the process until word completed or each starting point returns false

// time complexity: unsure
// worst case: entire board is the first letter of the input word (say "A")
// say word is "AAAAAAAAAZ"
// Will need to loop through the entire word for every char on the board

function wordSearch(word, board) {
    let result = false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                if (!!result) {
                    continue;
                } else {
                    if (!result) recursionHelper([i, j], 1)
                }
            }
        }
        if (!!result) continue;
    }
    function recursionHelper(point, idx) {
        if (idx === word.length) result = true;
        let possibleNextSteps = [];
        if (!!board[point[0] + 1] && board[point[0] + 1][point[1]] === word[idx]) {
            possibleNextSteps.push([point[0] + 1, point[1]])
        } if (!!board[point[0] - 1] && board[point[0] - 1][point[1]] === word[idx]) {
            possibleNextSteps.push([point[0] - 1, point[1]])
        } if (board[point[0]][point[1] + 1] === word[idx]) {
            possibleNextSteps.push([point[0], point[1] + 1])
        } if (board[point[0]][point[1] - 1] === word[idx]) {
            possibleNextSteps.push([point[0], point[1] - 1])
        }
        if (possibleNextSteps.length > 0) {
            for (let i = 0; i < possibleNextSteps.length; i++) {
                recursionHelper(possibleNextSteps[i], idx + 1)
            }
        } else {
            return null
        }
    }
    return result;
}

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const board2 = [
    ['G', 'H', 'G'],
    ['E', 'C', 'E'],
    ['C', 'Y', 'C'],
    ['W', 'S', 'J']
];
const board3 = [
    ['A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A']
];

let word1 = "ABCCED";
let word2 = "SEE";
let word3 = "ABCB";
let word4 = "ABCX";
let word5 = 'GECH';
let word6 = 'AAAAAAAAAAAAZ';
console.log(wordSearch(word1, board)) // =>  true
console.log(wordSearch(word2, board)) // => true
console.log(wordSearch(word3, board)) // => false **** FIX ****** last idx included
console.log(wordSearch(word4, board)) // => false
console.log(wordSearch(word5, board2)) // => true
console.log(wordSearch(word6, board3)) // => true
