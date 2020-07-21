// A full binary tree is a binary tree where each node has exactly 0 or 2 children.
// Return a list of all possible full binary trees with N nodes.Each element of 
// the answer is the root node of one possible tree.
// Each node of each tree in the answer must have node.val = 0.
// You may return the final list of trees in any order.

// Input: 7
// Output: [[0, 0, 0, null, null, 0, 0, null, null, 0, 0], [0, 0, 0, null, null, 0, 0, 0, 0], 
// [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, null, null, null, null, 0, 0], 
// [0, 0, 0, 0, 0, null, null, 0, 0]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {number} N
 * @return {TreeNode[]}
 */

var allPossibleFBT = function (N) {
  let treeList = [];
};