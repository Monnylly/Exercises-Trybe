# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def maior(n1, n2):
    if n2 > n1:
        return n2
    return n1


test = maior(2, 5)

print(test)


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media(num):
    total = 0
    for number in num:
        total += number
    return total / len(num)


resultado = media(3)


print(int(resultado))


#  Python sabe multiplicar sequências! Por exemplo, 3 * 'bla'
# resulta em blablabla. Isso se aplica a listas também, caso você precise.


# Exercício 3: Faça um programa que, dado um valor n qualquer,
# tal que n > 1, imprima na tela um quadrado feito de asteriscos
# de lado de tamanho n. Por exemplo:


def asteriscos(n):
    for row in range(n):
        print(n * "*")


result_ast = asteriscos(5)

print(int(result_ast))

# Crie uma função que receba uma lista de
# nomes e retorne o nome com a maior quantidade de caracteres
# . Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]o
# retorno deve ser "Fernanda".
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.


def maiorNome(names):
    big_name = names[0]
    for name in names:
        if len(name) > len(big_name):
            big_name = name
    return big_name


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


def triang_ast(n):
    for row in range(1, n + 1):
        print(row * "*")


if __name__ == "__main__":
    print(maior(7, 9))
