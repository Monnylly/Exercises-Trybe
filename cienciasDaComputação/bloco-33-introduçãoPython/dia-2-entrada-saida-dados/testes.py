# import random
import sys

# random_number = random.randint(
#     1, 10
# )  # escolhe um número aleatório entre 1 e 10
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     guess = int(
#         input("Qual o seu palpite? ")
#     )  # pergunte a pessoa usuária um número

# print("O número sorteado era: ", guess)


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)


name = input("Qual é o seu nome? ")

for letter in name:
    print(letter)

numeros = input("insira valores aqui separados por espaço: ")

numArray = numeros.split(" ")

sum = 0

for n in numArray:
    if not n.isdigit():
        print(f"Erro ao somar valores {n} não é um numero digitado.")
    else:
        sum += int(n)

print(f"a soma dos valores é {sum}")
