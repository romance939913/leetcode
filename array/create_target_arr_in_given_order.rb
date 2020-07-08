require 'byebug'
# Given two arrays of integers nums and index. Your task is to create target array under the following rules:

# Initially target array is empty.
# From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
# Repeat the previous step until there are no elements to read in nums and index.
# Return the target array.

# It is guaranteed that the insertion operations will be valid.
 

# Example 1:

# Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
# Output: [0,4,1,3,2]
# Explanation:
# nums       index     target
# 0            0        [0]
# 1            1        [0,1]
# 2            2        [0,1,2]
# 3            2        [0,1,3,2]
# 4            1        [0,4,1,3,2]
# Example 2:

# Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
# Output: [0,1,2,3,4]
# Explanation:
# nums       index     target
# 1            0        [1]
# 2            1        [1,2]
# 3            2        [1,2,3]
# 4            3        [1,2,3,4]
# 0            0        [0,1,2,3,4]
# Example 3:

# Input: nums = [1], index = [0]
# Output: [1]

#################  Second Try... Just use insert method  #######################
def create_target_array(nums, index)
  target = []
  (0...nums.length).each do |i|
    target.insert(index[i], nums[i])
  end
  target
end

##################### first try: SHIT TIME COMPLEXITY #########################
# def create_target_array(nums, index)
#   indexes = []
#   hash = {}
#   (0...index.length).each do |i|
#     if hash[index[i]]
#       (0...i).each do |j|
#         if indexes[j] >= index[i]
#           indexes[j] += 1
#         end
#       end
#     end
#     hash[index[i]] = 0
#     indexes.push(index[i])
#   end
#   answer = Array.new(index.length, 0)
#   j = 0
#   indexes.each do |idx|
#     answer[idx] = nums[j]
#     j += 1
#   end
#   answer
# end


nums = [0,1,2,3,4]
index = [0,1,2,2,1]
p create_target_array(nums, index) # Output: [0,4,1,3,2]