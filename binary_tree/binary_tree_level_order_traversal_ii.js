/* Leetcode 107
Given a binary tree, return the level order traversal of its nodes' values.
(ie, from left to right, level by level).

For example:
Given binary tree[3, 9, 20, null, null, 15, 7],
       3
      / \
     9   20
        /  \
       15   7
return its level order traversal as:
[
  [15, 7]
  [9, 20],
  [3]
]
strategy:
dfs keeping track of depth until you reach deepest leaves in an object
key->depth, value->[nodes arr]
return matrix starting with the deepest nodes arr
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


function level_order_traversal_ii(root) {
    let tracker = {};

    function dfs(node, depth=0) {
        if (!node) return;
        if (!tracker[depth]) {
            tracker[depth] = [node.val];
        } else {
            tracker[depth].push(node.val);
        }
        dfs(node.left, depth+1);
        dfs(node.right, depth+1)
    }

    dfs(root);
    let result = [];

    let maxDepth = Math.max(...Object.keys(tracker).map(ele => parseInt(ele)))
    for (let i = maxDepth; i >= 0; i--) {
        result.push(tracker[i])
    }
    return result;
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(level_order_traversal_ii(root))