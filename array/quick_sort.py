import pdb

def quick_sort(nums):
    if len(nums) <= 1:
        return nums

    pivot = [nums[0]]
    left = list(filter(lambda x: x < nums[0], nums[1:]))
    right = list(filter(lambda x: x >= nums[0], nums[1:]))

    return quick_sort(left) + pivot + quick_sort(right)

print(quick_sort([4, 2, 6, 8, 1, 3, 11, 5]))