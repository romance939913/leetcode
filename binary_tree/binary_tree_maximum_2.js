/*Problem 654

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

  Example 1:
Input: [3, 2, 1, 6, 0, 5]
Output: return the tree root node representing the following tree:

    6
  /   \
 3     5
 \     / 
  2   0
   \
    1

Note:
The size of the given array will be in the range[1, 1000].
*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const constructMaximumBinaryTree = nums => {
  if (nums.length === 0) return null;

  let max = Math.max(...nums);
  let mIdx = nums.indexOf(max);

  let root = new TreeNode(max, null, null);

  let leftArray = nums.slice(0,mIdx);
  let leftTree = constructMaximumBinaryTree(leftArray);

  let rightArray = nums.slice(mIdx + 1);
  let rightTree = constructMaximumBinaryTree(rightArray);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}

// accept array of integers, return TreeNode