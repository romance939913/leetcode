/*

*/
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

let root = new TreeNode(1)
root.right = new TreeNode(3)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(6)

function bfsArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root]
    debugger
    while (queue.length > 0) {
        let level = [];
        let levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            level.push(currentNode.val)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        result.push(level);
    }
    return result.reverse();
}

console.log(bfsArray(root))