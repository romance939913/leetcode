def creditCardProvider(operations):
    result = {}
    for sub in operations:
        if sub[0] == 'Add':
            myList = []
            i = len(sub[2]) - 1
            j = 2
            while i >= 0:
                num = int(sub[2][i])
                if j % 2 != 0:
                    if num * 2 > 9:
                        chars = list(str(num * 2))
                        newNum = int(chars[0]) + int(chars[1])
                        myList.append(newNum)
                    else:
                        myList.append(num * 2)
                else:
                    myList.append(num)
                i -= 1
                j += 1
            if sum(myList) % 10 != 0:
                result[sub[1]] = 'error'
            else:
                number = int(''.join(list(sub[3])[1:]))
                result[sub[1]] = [0, number]
        elif sub[0] == 'Charge':
            number = int(''.join(list(sub[2])[1:]))
            if result[sub[1]] == 'error':
                continue
            if result[sub[1]][0] + number > result[sub[1]][1]:
                continue
            else:
                result[sub[1]][0] += number
        else:
            number = int(''.join(list(sub[2])[1:]))
            if result[sub[1]] == 'error':
                continue
            result[sub[1]][0] -= number
    resultArr = []
    for key in result.keys():
        if result[key] == 'error':
            resultArr.append([key, 'error'])
        else:
            resultArr.append([key, result[key][0]])
    return resultArr