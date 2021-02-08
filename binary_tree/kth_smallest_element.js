/* Problem 230

Given a Binary search tree, write a finction KthSmallest 
to find the kth smallest element in it

the input is in the form of nodes meaning there is left and 
right for each node.(the input given is misleading)

*/

function TreeNode(val, left, right) {
    this.val = val
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function kthSmallestSolution(node, k, result=[]) {
    if (!!node) {
        kthSmallestSolution(node.left, k, result);
        result.push(node.val);
        kthSmallestSolution(node.right, k, result);
    }
    return result[k - 1]
}