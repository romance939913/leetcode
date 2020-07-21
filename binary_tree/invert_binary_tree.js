// Invert a binary tree.

//   Example:

// Input:

//       4
//     /   \
//    2     7
//   / \   / \
//  1   3 6   9
// Output:

//       4
//     /   \
//    7     2
//   / \   / \
//  9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function (root) {
  if (!root.val) return null;

  let rightNode = root.right;
  root.right = root.left;
  root.left = rightNode;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};