# Candy crush words - removing letters that appear at least 3 times in a row

# (ABCCCBB= > ABBB = > A)
# (""= > "")
# (ABCCCBBB=> ABBBB = > A)
# (AAABBBCC= > CC)
# Strategy:
# Utilize a stack
# elements are tuples that hold the character and amount
# remove from stack when current character differs from the stack top and stack top count >= 3
# before adding to stack check top to see if same element

def candy_crush(letters):
    stack = [[letters[0], 1]]

    i = 1
    while i < len(letters):
        if len(stack) == 0: 
            stack.append([letters[i], 1])
            i += 1
        elif letters[i] != stack[-1][0]:
            if stack[-1][1] >= 3:
                stack.pop()
            else:
                stack.append([letters[i], 1])
                i += 1
        else:
            stack[-1] = [letters[i], stack[-1][1] + 1]
            i += 1
    if stack[-1][1] >= 3:
        stack.pop()

    answer = ''
    for tup in stack:
        answer += tup[0] * tup[1]
    
    return answer
            



print(candy_crush("ABCCCBB")) # = > "A"
print(candy_crush("ABCCCB")) # = > "ABB"
print(candy_crush("ABCCBB")) # = > "ABCCBB"
print(candy_crush("ABCCCCCCBBDD")) # = > "ADD"
print(candy_crush("ABCCCCCCBBAADD")) # = > "DD"
print(candy_crush("CCCCCC")) # = > ""
