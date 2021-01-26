// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Example 2:
// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
// Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

// variables: stopRight, stopDown, stopLeft, stopUp
// iterate arr[stopUp][i] until we hit stopRight, then increment stopUp
// iterate through each arr[i][stopRight] until stopDown, decrement stopRight
// iterate backwards through arr[stopDown][i] until stopLeft, decrement stopDown
// iterate up through arr[i][stopLeft] until stopUp, decrement stopDown
// stop if length of result arr = n * m

function spiralOrder(matrix) {
    let coord = [0, 0];
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;
    let top = 1;
    let direction = 'right';
    let result = [];

    while (result.length < (matrix.length * matrix[0].length)) {
        switch (direction) {
            case 'right':
                while (coord[1] < right) {
                    result.push(matrix[coord[0]][coord[1]])
                    coord[1]++;
                }
                result.push(matrix[coord[0]][coord[1]]);
                direction = 'down';
                right--;
                coord[0]++;
                break;
            case 'down':
                while (coord[0] < bottom) {
                    result.push(matrix[coord[0]][coord[1]]);
                    coord[0]++;
                }
                result.push(matrix[coord[0]][coord[1]]);
                direction = 'left';
                bottom--;
                coord[1]--;
                break;
            case 'left':
                while (coord[1] > left) {
                    result.push(matrix[coord[0]][coord[1]])
                    coord[1]--;
                }
                result.push(matrix[coord[0]][coord[1]])
                direction = 'up';
                left++;
                coord[0]--;
                break;
            case 'up':
                while (coord[0] > top) {
                    result.push(matrix[coord[0]][coord[1]])
                    coord[0]--;
                }
                result.push(matrix[coord[0]][coord[1]])
                direction = 'right';
                top++;
                coord[1]++;
                break;
        }
    }
    return result;
}


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix)) // => [1, 2, 3, 6, 9, 8, 7, 4, 5]


let matrix1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix1)) // => [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]