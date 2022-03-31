/* Problem 1302
Given a binary tree, return the sum of values of its deepest leaves.

             1
            / \
           2   3
          / \
         4   5

Input: root
Output: 9

strategy:
dfs through the tree keeping track of the current lvl
Keep a hashmap of the levels pointing to all the values at that level
after iterating, find the deepest level and sum all the values
*/
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function deepestLeavesSum(root) {
    let levels = {};

    function dfs(node, level = 0) {
        if (!node) return null;
        if (levels[level]) {
            levels[level].push(node.val);
        } else {
            levels[level] = [node.val];
        }

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root);
    let maxArr = levels[Math.max(...Object.keys(levels))];
    return maxArr.reduce((ele, acc) => ele + acc);
}

let root = new TreeNode(1)
root.right = new TreeNode(3)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

console.log(deepestLeavesSum(root)) // => 9
