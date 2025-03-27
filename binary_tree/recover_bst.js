/* Leetcode 99
You are given the root of a binary search tree(BST), where the values of exactly 
two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.


Example 1:
Input: root = [1, 3, null, null, 2]
      1               3
    /               /
   3      --->     1 
    \               \
      2               2
Output: [3, 1, null, null, 2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.


Example 2:
Input: root = [3, 1, 4, null, null, 2]
     3                2
   /   \            /   \
  1     4   --->   1     4
       /                /
     2                 3
Output: [2, 1, 4, null, null, 3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

strategy

*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function recoverTree(root) {

}

