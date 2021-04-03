import pdb

# Problem 230

# Given a Binary search tree, write a fuZnction KthSmallest 
# to find the kth smallest element in it

# the input is in the form of nodes meaning there is left and 
# right for each node.(the input given is misleading)


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def kthSmallest(self, node: TreeNode, k: int, result=[]) -> int:
        # pdb.set_trace()
        if node:
            self.kthSmallest(node.left, k, result)
            result.append(node.val)
            self.kthSmallest(node.right, k, result)
        try:
            return result[k - 1]
        except IndexError: 
            return None


root = TreeNode(5)
root.right = TreeNode(6)
root.left = TreeNode(3)
root.left.right = TreeNode(4)
root.left.left = TreeNode(2)
root.left.left.left = TreeNode(1)

ans = Solution()

print(ans.kthSmallest(root, 3))