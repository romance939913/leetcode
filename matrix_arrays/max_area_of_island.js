/*You are given an m x n binary matrix grid.An island is a group of 1's (representing land) 
connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid.If there is no island, return 0.

strategy
Create a visited grid the same size as the input grid
once a 1 is come across, pass the coords, and visited grid to a bfsHelper
bfs helper will have a queue that starts with the passed coord.
it will check each neighboring coord to see if it 
- is previously visited, out of bounds, or 0
it not ^^ then it gets enqueued, flipped to true in visited grid and islandlandSize++
*/

function largestIslandArea(grid) {
    let visited = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(false))
    maxAreaIsland = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                debugger
                maxAreaIsland = Math.max(bfsHelper(i, j), maxAreaIsland)
            }
        }
    }

    function bfsHelper(row, col) {
        islandSize = 1;
        visited[row][col] = true;
        let rowdiff = [1, -1, 0, 0];
        let coldiff = [0, 0, 1, -1];
        
        let queue = [[row, col]]
        while (queue.length) {
            let coord = queue.shift()

            for (let i = 0; i < 4; i++) {
                let rowDelta = coord[0] + rowdiff[i];
                let colDelta = coord[1] + coldiff[i];

                if (colDelta < 0 || rowDelta < 0) continue;
                if (colDelta >= grid[0].length || rowDelta >= grid.length) continue;
                if (grid[rowDelta][colDelta] == 0) continue;
                if (visited[rowDelta][colDelta]) continue;

                islandSize++
                queue.push([rowDelta, colDelta])
                visited[rowDelta][colDelta] = true;
            }
        }
        return islandSize;
    }

    return maxAreaIsland;
}

let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], 
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], 
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
console.log(largestIslandArea(grid)) // => Output: 6

let grid1 = [[0, 0, 0, 0, 0, 0, 0, 0]]
console.log(largestIslandArea(grid1)) // => Output: 0
