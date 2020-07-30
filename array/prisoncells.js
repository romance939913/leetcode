// There are 8 prison cells in a row, and each cell is either occupied or vacant.

// Each day, whether the cell is occupied or vacant changes according to the following rules:

// If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
// Otherwise, it becomes vacant.
// (Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

// We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

// Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)


// Example 1:

// Input: cells = [0,1,0,1,1,0,0,1], N = 7
// Output: [0,0,1,1,0,0,0,0]
// Explanation: 
// The following table summarizes the state of the prison on each day:
// Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
// Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
// Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
// Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
// Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
// Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
// Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
// Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

// Example 2:

// Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
// Output: [0,0,1,1,1,1,1,0]


// make sure no out of bounds error 
// iterate num times through cells while changing each cell based on its neighbors
const prisonReform = (cells, num) => {
  // N = N % 14 === 0 ? 14 : N % 14
  while (!!num) {
    // debugger
    let dupCells = cells.slice();
    cells.forEach((cell, idx) => {
      if (cells[idx + 1] === cells[idx - 1]) {
          dupCells[idx] = 1;
      } else {
        dupCells[idx] = 0;
      }
    });
    cells = dupCells
    num--;
  }
  return cells;
}

console.log(prisonReform([0, 1, 0, 1, 1, 0, 0, 1], 7));
// Output: [0,0,1,1,0,0,0,0]