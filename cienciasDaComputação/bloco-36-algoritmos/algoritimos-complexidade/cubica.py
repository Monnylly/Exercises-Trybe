def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result

# no caso de tres loops aninhados teremos um uma complexidade de o(n3)


# meu_array = [1, 2, 3, 4, 5, 2, 3]
n = 10

meu_array = list(range(1, n))

multiply_arrays(meu_array, meu_array, meu_array)
