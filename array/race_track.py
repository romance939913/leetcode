# input array is obstacles on a race track, the car starts at position 2
# determine how many movements the car needs to make to reach the finish line

# input = [3, 2, 1, 2, 3, 3, 2] 
# output => two movements: from lane 2 -> 3 at arr[1] && from lane 3 -> 1 at arr[4]

# strategy: look which number is the furthest distance from your current point 
# OR non existant in rest of array.
# keep position and numMoves variable

# outcome: O(n) because it touches each element once

def minimum_movements(obstacles):
    num_moves = 0
    position = 2

    i = 0
    while i < len(obstacles):
        if obstacles[i] != position:
            i += 1
        else:
            num_moves += 1
            find_3 = {}
            search_lanes = True
            while search_lanes:
                if i >= len(obstacles):
                    break
                find_3[obstacles[i]] = True
                if len(find_3) < 3:
                    i += 1
                else:
                    search_lanes = False
                    position = obstacles[i]
    return num_moves


print(minimum_movements([3, 2, 1, 2, 3, 3, 2])) # => 2
print(minimum_movements([3, 2, 1, 2, 3, 3, 2, 1, 2, 2, 3, 3, 1])) # => 4
print(minimum_movements([3, 2, 1, 2])) # => 1
print(minimum_movements([3, 3, 1, 1])) # => 0