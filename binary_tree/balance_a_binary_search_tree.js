// Given a binary search tree, return a balanced binary search tree with the same node values.
// A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.
// If there is more than one answer, return any of them.

// Input: root = [1, null, 2, null, 3, null, 4, null, null]
// Output: [2, 1, 3, null, null, null, 4]
// Explanation: This is not the only correct answer, [3, 1, 4, null, 2, null, null] is also correct.

/*
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

var balanceBST = root => {
  let orderedArray = getArrayValues(root);

};

var getArrayValues = root => {
  let vals = [];
  let queue = [root];
  while (queue.length > 0) {
    let ele = queue.shift();
    if (!!ele.val) vals.push(ele.val);
    queue.push(ele.right);
    queue.push(ele.left);
  }
  return vals;
}