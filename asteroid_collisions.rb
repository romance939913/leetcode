# We are given an array asteroids of integers representing asteroids in a row.

# For each asteroid, the absolute value represents its size, and the sign 
# represents its direction (positive meaning right, negative meaning left). 
# Each asteroid moves at the same speed.

# Find out the state of the asteroids after all collisions. 
# If two asteroids meet, the smaller one will explode. 
# If both are the same size, both will explode. 
# Two asteroids moving in the same direction will never meet.

# Example 1:
# Input: 
# asteroids = [5, 10, -5]
# Output: [5, 10]
# Explanation: 
# The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

# Example 2:
# Input: 
# asteroids = [8, -8]
# Output: []
# Explanation: 
# The 8 and -8 collide exploding each other.

# Example 3:
# Input: 
# asteroids = [10, 2, -5]
# Output: [10]
# Explanation: 
# The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.

# Example 4:
# Input: 
# asteroids = [-2, -1, 1, 2]
# Output: [-2, -1, 1, 2]
# Explanation: 
# The -2 and -1 are moving left, while the 1 and 2 are moving right.
# Asteroids moving the same direction never meet, so no asteroids will meet each other.
# Note:

# The length of asteroids will be at most 10000.
# Each asteroid will be a non-zero integer in the range [-1000, 1000].

def asteroids(input)
 stack = []
 j = 0
 while j < input.length
   if stack.empty?
     stack << input[j]
     j += 1
   elsif (stack[-1] > 0 && input[j] > 0) || (stack[-1] > 0 && input[j] > 0)
     stack << input[j]
     j += 1
   else
     if input[j] + stack[-1] === 0
       stack.pop
       j += 1
     elsif stack[-1].abs > input[j].abs
       j += 1
     else
       stack.pop
     end
   end
 end
 stack
end

p asteroids([1, 2, 3, -3, 4, -2])
p asteroids([1, 2, 3, -3, 4, -6])

# I believe the time complexity is linear and the space complexity
# should be linear as well because of the stack.