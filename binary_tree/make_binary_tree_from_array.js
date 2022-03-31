/* *********** NOT A LEETCODE PROBLEM *****************
Construct a binary tree from an array
The array is designed to be built in BFS fashion

ex1: 
input: [1, 2, 2, 3, 3, null, null, 4, 4]
output: 
            1
          /   \
        2       2
      /   \
    3       3
  /   \
4      4

ex2:
input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, null, 13, 14]
output: 
                    1
                /       \
            2               3
          /   \           /   \
        4       5       6       7
      /  \     /          \    /  
     8    9   10          13  14

Strategy:
First create the root node with idx[0]
Set the nodes children with idx * 2 + 1 && idx * 2 + 2
USE A QUEUE!!!
push each child into a queue
*/

class TreeNode {
    constructor(val) {
        this.val = val ? val : null;
        this.left = null;
        this.right = null;
    }
}

const makeTreeFromArray = (arr) => {
    if (!arr) return null;

    const root = new TreeNode(arr[0]);
    const children = [root];
    let i = 0;

    while (children.length) {
        let node = children.shift();
        if (arr[i * 2 + 1] !== undefined) {
            node.left = new TreeNode(arr[i * 2 + 1]);
            node.right = new TreeNode(arr[i * 2 + 2]);
    
            children.push(node.left, node.right)
        }
        i++;
    }

    return root
}

console.log(makeTreeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, null, 13, 14]))