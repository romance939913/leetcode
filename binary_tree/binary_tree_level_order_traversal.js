/*

Given a binary tree, return the level order traversal of its nodes' values. 
(ie, from left to right, level by level).

For example:
Given binary tree[3, 9, 20, null, null, 15, 7],
       3
      / \
     9   20
        /  \
       15   7
return its level order traversal as:
[
  [3],
  [9, 20],
  [15, 7]
]

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
@param {TreeNode} root
@return {number[][]}
*/

// bfs through given tree. Indicate somehow what row I'm on. 
// keep all same row nodes in the same array. into result matrix

var levelOrder = function (root) {
  if (!root) return [];

  let matrix = [];
  let queue = [root];
  while (queue.length > 0) {

    let subArray = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let ele = queue.shift();
      if (ele.left) queue.push(ele.left);
      if (ele.right) queue.push(ele.right);
      subArray.push(ele.val);
    }
    matrix.push(subArray);
  }
  return matrix;
};

