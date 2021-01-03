// Given an m x n 2d grid map of '1's(land) and '0's(water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally
// or vertically. You may assume all four edges of the grid are all surrounded by water.

// Questions:
// Is the grid always going to be a rectangle or a square?

// Strategy:
// Loop through every element in the grid
// If a "1" turn it to a "0" and increment island count
// look at each neighbor to see if that is a "1", if so, turn it to zero
// recursively call on the neighbor's neighbors until entire island is accounted for and turned to zeros

// Outcome:

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
] // => 1

let grid1 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
] // => 3

let grid2 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
] // => 1

function islandCount(grid) {
    let numIslands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                flipEntireIsland(i, j)
            }
        }
    }

    function flipEntireIsland(row, col) {
        grid[row][col] = "0"
        if (grid[row + 1] && grid[row + 1][col] === "1") {
            flipEntireIsland(row + 1, col);
        } if (grid[row - 1] && grid[row - 1][col] === "1") {
            flipEntireIsland(row - 1, col);
        } if (grid[row][col + 1] === "1") {
            flipEntireIsland(row, col + 1);
        } if (grid[row][col - 1] === "1") {
            flipEntireIsland(row, col - 1)
        }
        return null;
    }

    return numIslands;
}


console.log(islandCount(grid)) // => 1
console.log(islandCount(grid1))  // => 3