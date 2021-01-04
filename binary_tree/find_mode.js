// Given a binary search tree(BST) with duplicates, find all the mode(s)(the most 
// frequently occurred element) in the given BST.

// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// For example:
// Given BST[1, null, 2, 2],

    // 1
    //   \
    //    2
    //   /
    // 2


// return [2].
// Note: If a tree has more than one mode, you can return them in any order.

// Follow up: Could you do that without using any extra space ? (Assume that the 
// implicit stack space incurred due to recursion does not count).

// strategy:
// create a counter hash where each key is a node.val and its value is the frequency of the node


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function findMode(root) {
    if (!root) return root;
    if (!root.left && !root.right) return [root.val]
    
    let counter = {};
    function dfsHelper(node) {
        if (!node) return null;
        if (!counter[node.val]) {
            counter[node.val] = 1
        } else {
            counter[node.val] ++;
        }
        dfsHelper(node.left);
        dfsHelper(node.right);
    }
    dfsHelper(root);

    let maxes = [];
    Object.keys(counter).forEach(key => {
        if (maxes[0] === undefined || counter[key] > counter[maxes[0]]) {
            maxes = [key]
        } else if (counter[key] === counter[maxes[0]]) {
            maxes.push(key)
        }
    })
    return maxes.map(ele => parseInt(ele))
}