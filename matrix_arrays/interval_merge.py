# Leetcode # 56
# Collin's feedback
# GREAT STRATEGY!:
# - sample input-output (great tool for ensuring you understand the question)
# - starting with clarifying Qs 
# - strategy
# - coding

# - make sure to check any assumptions (including whether or not the input is sorted, which you did) 
# - great to turn to another example when need more time to come up with a strategy
# - nice job starting to break down the steps of what your brain immediately sees as the logic, but takes for granted
# - when you need more granular step, ask WHY instead of WHAT 
# - don't get stuck on coming up with the most optimal PoA immediately—start with brute force if need be
# - good take away from practice with these problems — if it's quadratic, can I sort?
# - don't get too stuck in familiar problems (this is not meeting rooms) — luckily this just threw off the language used to discuss the problem, not the logic, but still potentially misleading
# - cursing is 100% ok with me, but don't get in the practice of dropping F-bombs during calls
# - use declarative variable names! (`POJO` is nondescript)
# - `Object.fromEntries()` is a great tool to have under your belt (although you don't need the object for this problem)
# - WRITE STRATEGY BEFORE STARTING TO CODE!!!!!!!!!!!, so you have a map to review when you get lost and don't have to re-derive the logic at each step

# mergeIntervals
# takes in an array of intervals (2D Array)
# Sub arrays are two elements consisting of a start and the end
# return an array of non overlapping

# input: [[0, 20], [0, 10], [5, 10], [15, 25], [30, 45]]
# output: [[0, 25], [30, 45]]

# input: [[5, 10], [0, 15], [10, 25], [15, 30]]
# output [[0, 30]]

# input: [[10, 15], [0, 5], [0, 15]]
# output: [[0, 15]

# clarifications: 
# - Input will always have at lease one interval. 
# - Always expect intervals to be tuples, positive integers and the second is higher

# strategy: keep a result variable = []. Sort our intervals. Keep a variable for our currentInterval
# Loop and if intervals[i][0] comes before our currentInterval ending, merge the intervals.
# Otherwise push the currentInterval to result and reset it with intervals[i]

def mergeIntervals(intervals):
    intervals = sorted(intervals, key=lambda x: x[0])
    result = []
    current_int = intervals[0]

    for sub in intervals:
        if sub[0] < current_int[1]:
            current_int[1] = max(sub[1], current_int[1])
        else:
            result.append(current_int)
            current_int = sub
    result.append(current_int)
    return result


print(mergeIntervals([[10, 15], [0, 5], [0, 15]])) # => [[0, 15]]
print(mergeIntervals([[5, 10], [0, 15], [10, 25], [15, 30]])) # => [[0, 30]]
print(mergeIntervals([[0, 20], [0, 10], [5, 10], [15, 25], [30, 45]])) # => [[0, 25], [30, 45]]

