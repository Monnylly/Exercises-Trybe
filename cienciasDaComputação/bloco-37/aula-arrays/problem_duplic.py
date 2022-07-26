""""
    # Problema: Contém Duplicado
    Dado um array de números, verifiquem se o array
    possui algum elemento duplicado.
    Sua função deve retornar True se algum valor
    aparece pelo menos duas vezes no array
    e False caso todos os elementos sejam distintos.
"""

# from numpy import False_


def contains_duplicate(nums: list) -> bool:
    nums.sort()
    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True
    return False


if __name__ == "__main__":
    test1 = [1, 2, 3, 4, 1]
    test2 = []
    test3 = [1, 2, 4]
    test4 = [1, 3, 2, 5, 3]

print(contains_duplicate(test1))
print(contains_duplicate(test2))
print(contains_duplicate(test3))
print(contains_duplicate(test4))
