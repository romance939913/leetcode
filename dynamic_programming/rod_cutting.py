# rod cutting problem
# Given a rod of length n, and an array that contains the prices of all the pieces 
# smaller than n, determine the maximum profit you could obtain from cutting up the 
# rod and selling its pieces.

# build up an arrray of the same length as input array
# at each position in the array, store the max profit you can get for a rod of
# that length

# when i = 2, checking a rod of length 3
# all the other prev combinations are between lengths 1 and 2

def rod_cutting(lengths):
    optimals = []
    for i in range(len(lengths)):
        largest = lengths[i]
        j = i - 1
        k = 0
        while j >= k:
            if lengths[k] + lengths[j] > largest:
                largest = lengths[k] + lengths[j]
            k += 1
            j -= 1
        optimals.append(largest)
    return optimals[-1]



rod_values = [2, 5, 7, 11, 11, 13]
print(rod_cutting(rod_values)) # => 16 (slices of size 2 & 4)

rod_values1 = [2, 6, 7, 8, 10, 13, 15, 16]
print(rod_cutting(rod_values1)) # => 19 (slices of size 2 & 6)