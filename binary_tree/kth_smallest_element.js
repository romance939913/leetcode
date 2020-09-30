// Given a Binary search tree, write a finction KthSmallest 
//to find the kth smallest element in it

// the input is in the form of nodes meaning there is left and 
//right for each node.(the input given is misleading)

// traverse through the given tree
// make a hash
// const kthSmallest = (root, k) => {
//     let hash = {};
//     function dfs(node) {
//         if (!node) return null;
//         hash[node.val] = true;
//         dfs(node.left)
//         dfs(node.right)
//     }
//     dfs(root);
//     let i = 0;
//     let counter = 0;
//     while (i >= 0) {
//         if (!!hash[i]) {
//             counter += 1;
//             if (counter === k) return i;
//         }
//         i++;
//     }
// }

// optimized
const kthSmallestSolution = (root, k, result = []) => {
    if (!!node) {
        kthSmallestSolution(root.left);
        result.push(root.val);
        kthSmallestSolution(root.right);
    }
    return result[k - 1]
}