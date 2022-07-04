# procedural

mylist = [10, 20, 30]


def sumlist(mylist):
    res = 0
    for val in mylist:
        res += val
    return res


print(sumlist(mylist))
