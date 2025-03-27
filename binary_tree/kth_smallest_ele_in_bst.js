/*
Given the root of a binary search tree, and an integer k, return the kth smallest 
value(1 - indexed) of all the values of the nodes in the tree.

Example 1:
Input: root = [3, 1, 4, null, 2], k = 1
Output: 1


Example 2:
Input: root = [5, 3, 6, 2, 4, null, null, 1], k = 3
Output: 3

strategy:
dfs all the way down to the left most node
once it reaches that, push that nodes value into the result array
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var kthSmallest = function (root, k) {
    let result = [];

    function dfs(node) {
        if (node.left) dfs(node.left);
        result.push(node.val);
        if (node.right) dfs(node.right);
    }

    dfs(root)
    return result[k - 1];
};