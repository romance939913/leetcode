# Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2], ...](si < ei),
# find the minimum number of conference rooms required.

# Input: [[0, 30], [5, 10], [15, 20]]
# Output: 2

# Input: [[0, 30], [5, 10], [15, 20], [60, 70]]
# Output: 2

# Input: [[0, 30], [5, 10], [5, 20]]
# Output: 3

# Input: [[7, 10], [2, 4]]
# Output: 1

# questions:
# Are the intervals only up to 60? ** NO **

# strategy:
# If I take all the start times and all the end times and sort them in separate arrays.
# For each start time I'll need a new room until a start time occures after the first end time.
# increment endTime pointer to the next endTime when iterating and a start comes after it

# outcome:
# O(n log(n))

def min_meeting_rooms(intervals):
    starts = []
    ends = []
    rooms = 0

    for sub in intervals:
        starts.append(sub[0])
        ends.append(sub[1])
    
    starts.sort()
    ends.sort()

    end_pos = 0
    for i in range(len(intervals)):
        if starts[i] < ends[end_pos]:
            rooms += 1
        else:
            end_pos += 1

    return rooms



print(min_meeting_rooms([[0, 30], [5, 10], [15, 20], [25, 30]]))
# = > 2
print(min_meeting_rooms([[0, 30], [5, 10], [15, 20], [25, 30], [13, 30], [17, 20]]))
# = > 4
print(min_meeting_rooms([[0, 30], [5, 10], [5, 20]]))
# = > 3
print(min_meeting_rooms([[7, 10], [2, 4]]))
# = > 1
