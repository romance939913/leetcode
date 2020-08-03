/*After becoming famous, the CodeBots decided to move into a new building 
together.Each of the rooms has a different cost, and some of them are 
free, but there's a rumour that all the free rooms are haunted! 
Since the CodeBots are quite superstitious, they refuse to stay in 
any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents 
the cost of the room, your task is to return the total sum of all rooms that 
are suitable for the CodeBots(ie: add up all the values that don't appear 
below a 0).

Example

For

matrix = [[0, 1, 1, 2], // 0, x
          [0, 5, 0, 0], // 1, x
          [2, 0, 3, 3]] // 2, x

matrix = [[1,1,1,0],
          [0,5,0,1],
          [2,1,3,10]]
          
the output should be
matrixElementsSum(matrix) = 9.*/

function matrixElementsSum(matrix) {
  let pojo = {};
  let cost = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) pojo[j] = 'Kobe';
      if (!pojo[j]) {
        cost += matrix[i][j];
      }
    }
  }
  return cost;
}
