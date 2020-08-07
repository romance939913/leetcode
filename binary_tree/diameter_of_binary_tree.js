/* Problem 543

Given a binary tree, you need to compute the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two 
nodes in a tree.This path may or may not pass through the root.

  Example:
Given a binary tree
    1
   / \
  2   3
 / \
4   5
Return 3, which is the length of the path[4, 2, 1, 3] or [5, 2, 1, 3].

Example:
Given a binary tree
        1
       / \
      2   3
     / \
    4   5
   /   / \
  6   7   8
 /   /
9   10
      \
       11
         \
          12
Return 8, which is the length of the path[4, 2, 1, 3]

Note: The length of path between two nodes is represented by the number of 
edges between them. */

const diameterOfBinaryTree = (root) => {
  let maxSize = 0

  function getDepth(root) {
    if (root === null) return 0;
    let left = getDepth(root.left);
    let right = getDepth(root.right);
    maxSize = Math.max(maxSize, left + right);
    return 1 + Math.max(left, right);
  }

  getDepth(root);

  return maxSize
}