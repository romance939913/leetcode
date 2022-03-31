/*
leetcode #48
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Strategy:
Iterate through the matrix normally
have a second iterator starting at the 
start at the bottom left coord and reassign
*/

const rotate = function(matrix) {
    let matrixCopy = matrix.map(arr => arr.slice());
    let sideLen = matrix.length - 1

    for (let i = 0; i < matrixCopy.length; i++) {
        let sub = matrixCopy[i];
        for (let j = 0; j < sub.length; j++) {
            matrix[i][j] = matrixCopy[sideLen - j][i]
        }
    }
    return matrix;
} 

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
/*
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3]
*/
// output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))
// output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]