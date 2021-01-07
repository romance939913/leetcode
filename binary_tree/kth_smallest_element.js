/* Problem 230

Given a Binary search tree, write a finction KthSmallest 
to find the kth smallest element in it

the input is in the form of nodes meaning there is left and 
right for each node.(the input given is misleading)

*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const kthSmallestSolution = (root, k, result = []) => {
    if (!!node) {
        kthSmallestSolution(root.left);
        result.push(root.val);
        kthSmallestSolution(root.right);
    }
    return result[k - 1]
}