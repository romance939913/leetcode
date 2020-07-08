// problem 1305

// Given two binary search trees root1 and root2.

// Return a list containing all the integers from both trees sorted in 
// ascending order.

// Example 1:
// Input: root1 = [2, 1, 4], root2 = [1, 0, 3]
// Output: [0, 1, 1, 2, 3, 4]

// Example 2:
// Input: root1 = [0, -10, 10], root2 = [5, 1, 7, 0, 2]
// Output: [-10, 0, 0, 1, 2, 5, 7, 10]

// Example 3:
// Input: root1 = [], root2 = [5, 1, 7, 0, 2]
// Output: [0, 1, 2, 5, 7]

// Example 4:
// Input: root1 = [0, -10, 10], root2 = []
// Output: [-10, 0, 10]


// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
 

var getAllElements = function (root1, root2) {
  let result = [];
  let queue = [];
  if (root1.length > 0) queue.push(root1);
  if (root2.length > 0) queue.push(root2);

  while (queue.length > 0) {
    let ele = queue.shift();
    if (ele) result.push(ele.val);
    if (ele.left) queue.push(ele.left);
    if (ele.right) queue.push(ele.right);
  }
  return result.sort((a, b) => { return a - b })
};

let root1 = [2, 1, 4], root2 = [1, 0, 3];
console.log(getAllElements(root1, root2));