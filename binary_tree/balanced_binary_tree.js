/* Leetcode # 110 
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

ex1: 
        3
      /   \
    9      20
          /  \
        15    7
outcome: true

ex2:
            1
          /   \
        2       3
      /   \    / 
    4      5  6
  /   
8     
outcome: true

ex3: 
    1
      \
        2
          \
            3
outcome: false (because left subtree is depth=1 and right subtree is depth=3)
         

strategy:
DFS until I find all the leaves
keep track of the depth of every leaf
if any of the depth differentials are more than 1, than false, otherwise true
*/

class TreeNode {
  constructor(val) {
    this.val = val ? val : null;
    this.left = null;
    this.right = null;
  }
}

const isBalanced = (root) => {
  let result = true
  
  function checkBalanced(node) {
    if (!node || !result) return null;
    if (Math.abs(findMaxDepth(node.right) - findMaxDepth(node.left)) > 1) {
      result = false;
    }
    checkBalanced(node.left);
    checkBalanced(node.right);
  }
  checkBalanced(root);
  return result;
}

const findMaxDepth = (node, depth = 0) => {
  if (!node) return depth;

  let left = findMaxDepth(node.left, depth + 1);
  let right = findMaxDepth(node.right, depth + 1);
  return Math.max(left, right);
}

