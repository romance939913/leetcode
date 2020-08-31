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
    if (!root) return 0;

    let cache = [];
    function rec(node, depth = 0) {
        if (!node) return 0;
        
        cache[depth] = (cache[depth] || 0) + node.val;
        
        rec(node.left, depth + 1);
        rec(node.right, depth + 1);
    }
    rec(root, 0);
    return cache[cache.length - 1]
};