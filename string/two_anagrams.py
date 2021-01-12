# find if two words are anagrams of each other

# questions:
# What is the desired time complexity?
# should it be case sensitive?

# strategy:
# loop through the first string populating an object with each letter and it's quantity
# loop through the second string decrementing each letter in the hash as we pass
# if a character in the second string doesn't exist in the hash return false
# if each key value in the hash is 0, same chars, return true else false

# outcome:
# Time Complexity = (O)3n which reduces down to just(O)n
# We loop through each string once and the hash values which is <= str lengths

def check_anagrams(str1, str2):
    my_dict = {}
    for char in str1:
        if char in my_dict:
            my_dict[char] += 1
        else:
            my_dict[char] = 1
    for char in str2:
        if char in my_dict:
            my_dict[char] -= 1
    for key in my_dict:
        if my_dict[key] > 0:
            return False
    return True


print(check_anagrams("silent", "listen")) # = > true
print(check_anagrams("walker", "texas ranger")) # = > false
print(check_anagrams("hannah", "nahhan")) # = > true
print(check_anagrams("hannah", "banana")) # = > false
print(check_anagrams("borat sagdiyev", "sagdiyev borat")) # = > true
