// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:
// Input: 5
// Output:
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]


function generatePascal(numRows) {
    let triangle = [];

    if (numRows === 0) {
        return triangle;
    }

    triangle.push([1]);

    // debugger
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [];
        newRow.push(1);

        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[(j - 1)] + prevRow[j]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle;
};

console.log(generatePascal(5))