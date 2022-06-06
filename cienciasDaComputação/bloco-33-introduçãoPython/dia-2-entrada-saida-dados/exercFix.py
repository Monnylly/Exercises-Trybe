# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
#  escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo.
# A nota miníma para aprovação é 6.

arrStudents = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        student = line
        student = student.split(" ")
        if int(student[1]) < 6:
            arrStudents.append(student[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(arrStudents)
    recuStudentsFile.writelines(arrStudents)
