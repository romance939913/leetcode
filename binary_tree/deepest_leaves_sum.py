# Problem #1302

# Given a binary tree, return the sum of values of its deepest leaves.

#             1
#            / \
#           2   3
#          / \
#         4   5

# Input: root
# Output: 9

# # Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        depths = { 0: [root.val] }

        def dfs(node, depth):
            if not node:
                return
            if not node.left and not node.right:
                if depth in depths:
                    depths[depth].append(node.val)
                else:
                    depths[depth] = [node.val]
            else:
                depth += 1
            dfs(node.left, depth)
            dfs(node.right, depth)

        dfs(root, 0)
        max_depth = max(list(depths.keys()))
        return sum(depths[max_depth])

root = TreeNode(1)
root.right = TreeNode(3)
root.left = TreeNode(2)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(Solution().deepestLeavesSum(root)) # => 9
