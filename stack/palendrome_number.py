import pdb

def isPalindrome(num):
    string = str(num)
    i = 0
    j = len(string) - 1
    while i < len(string):
        if string[i] != string[j]:
            return False
        i += 1
        j -= 1
    return True

print(isPalindrome(14541))
print(isPalindrome(153849))
print(isPalindrome(-414))