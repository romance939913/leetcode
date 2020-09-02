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
    let queue = [root];
    let depth = 0;

    while (queue.length > 0) {
        let num = queue.length;
        for (let i = 0; i < num; i++) {
            if (hash[depth]) {
                hash[depth].push(queue[i]);
            } else {
                hash[depth] = [];
                hash[depth].push(queue[i]);
            }
            if (!!queue[i].left) queue.push(queue[i].left);
            if (!!queue[i].right) queue.push(queue[i].right);
        }
        queue = queue.slice(num)
        depth++;
    }

    let keys = Object.keys(hash)
    let maxDepth = Math.max(...keys)
    return hash[maxDepth].reduce((acc, ele) => acc + ele.val, 0)
};