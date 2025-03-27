/* leetcode 1305
Given two binary search trees root1 and root2, 
return a list containing all the integers from both trees sorted in ascending order.

Example 1:
    2            1
  /   \        /   \
 1     4      0     3
Input: root1 = [2, 1, 4], root2 = [1, 0, 3]
Output: [0, 1, 1, 2, 3, 4]


Example 2:
Input: root1 = [1, null, 8], root2 = [8, 1]
Output: [1, 1, 8, 8]

strategy
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
function getAllElements(node1, node2) {
    let res = [];
    let stack1 = [];
    let stack2 = [];
    debugger
    while (node1 != null || node2 != null || stack1.length || stack2.length) {
        while (node1 !== null) {
            stack1.push(node1);
            node1 = node1.left;
        }

        while (node2 !== null) {
            stack2.push(node2);
            node2 = node2.left;
        }
        if (!stack2.length || (stack1.length && stack1[stack1.length - 1].val <= stack2[stack2.length - 1].val)) {
            node1 = stack1.pop();
            res.push(node1.val);
            node1 = node1.right;
        } else {
            node2 = stack2.pop();
            res.push(node2.val);
            node2 = node2.right;
        }
    }
    return res;
}

let node1 = new TreeNode(2)
node1.left = new TreeNode(1)
node1.right = new TreeNode(4)
let node2 = new TreeNode(1)
node2.left = new TreeNode(0)
node2.right = new TreeNode(3)

console.log(getAllElements(node1, node2)) // => [0, 1, 1, 2, 3, 4]