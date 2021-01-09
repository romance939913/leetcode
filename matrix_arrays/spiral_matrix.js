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

function spiralMatrix(matrix) { 
    let stopRight = matrix[0].length;
    let stopLeft = 0;
    let stopUp = 0;
    let stopDown = matrix.length;
    let direction = 'right'
    let coord = [0,0]
    let resultArr = [];
    let total = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            total++;
        }
    }

    debugger
    let stopCheck = true;
    while (!!stopCheck) {
        switch (direction) {
            case 'right':
                while (coord[1] < stopRight) {
                    resultArr.push(matrix[stopUp][coord[1]])
                    coord[1]++;
                }
                if (resultArr.length === total) stopCheck = false;
                direction = 'down';
                stopRight--;
            case 'down':
                while (coord[0] < stopDown) {
                    resultArr.push(matrix[coord[0]][stopRight]);
                    coord[0]++;
                }
                if (resultArr.length === total) stopCheck = false;
                direction = 'left';
                stopDown--;
            case 'left':
                while (coord[1] > stopLeft) {
                    resultArr.push(matrix[stopDown][coord[1]])
                    coord[1]--;
                }
                if (resultArr.length === total) stopCheck = false;
                direction = 'right';
                stopLeft++;
            case 'up':
                while (coord[0] > stopUp) {
                    resultArr.push(matrix[coord[0]][stopLeft]) 
                    coord[0]++;
                }
                if (resultArr.length === total) stopCheck = false;
                direction = 'right'
                stopUp++;
        }
    }
    return resultArr;
}


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralMatrix(matrix)) // => [1, 2, 3, 6, 9, 8, 7, 4, 5]


let matrix1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralMatrix(matrix1)) // => [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]