"""
reverse a given list
"""

def reverse(nums):
    if len(nums) == 0:
        return nums
    
    return reverse(nums[1:]) + [nums[0]]

print(reverse([1, 2, 3, 4, 5]))