import functools

mylist = [10, 20, 30]


def sum_list(mylist):
    if len(mylist) == 1:
        return mylist[0]
    else:
        return mylist[0] + sum_list(mylist[1:])


# lambda function is used
print(functools.reduce(lambda x, y: x + y, mylist))
