/* problem #257

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:
Input:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

Output: ["4->7->9", "4->7->6", "4->2->3", "4->2->1"]
Explanation: All root-to-leaf paths are included

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
@param {TreeNode} root
@return {string[]} */

var binaryTreePaths = function(root) {
    let answer = [];
    let path = [];
    function dfs(node, path) {
        if (!node) return null;
        if (node.val === root.val) {
            path.push(`${root.val}`)
        } else {
            path[path.length - 1] += `->${node.val}`
        }
        dfs(node.left, path);
        dfs(node.right, path);
    }
    dfs(root, answer)
    return answer;
};