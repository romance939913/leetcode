/*
Problem #1302
Given a binary tree, return the sum of values of its deepest leaves.

            1
           / \
          2   3
         / \
        4   5
       / \   \
      6   7   8
     /   /
    9   10

Input: root
Output: 19

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

@param {TreeNode} root
@return {number}

*/
var deepestLeavesSum = function(root) {
    let hash = {};

    function dfs(node, depth) {
        if (!node) return null;
        if (!node.left && !node.right) {
            !!hash[depth] ? hash[depth].push(node.val) : hash[depth] = [node.val];
        } else {
            depth++;
        }
        dfs(node.left, depth);
        dfs(node.right, depth);
    }
    dfs(root, 0)

    let maxDepth = Math.max(...Object.keys(hash))
    return hash[maxDepth].reduce((acc, ele) => acc + ele.val, 0)
};