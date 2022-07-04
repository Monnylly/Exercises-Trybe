def multipli(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


# complexidade de espaço sera uma constante --->>> o(1)
# iremos operar sobre um numero constante de variaveis que
#  por sua vez armazenam
# um unico elemento elemento em memoria, a variavel
# result sre responsavel por # # armazenar o resultado
#  nimero da operação de # multiplicação,
# independete do tamanho do array a resposta sera o
# resultado da operação que # # #### armazena um
# numero de resposta. por isso é constante --->> o(1)

# complexidade de tempo sera --->>> o(n)
# independente do tamanho da entrada(numbers) o nosso laço ira percorrer
# cada elemento do array de tamanho n, por isso sua complexidade é O(n)
