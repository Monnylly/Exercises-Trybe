import csv

with open("graduacao.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader

# print(header) retorna toda primeira linha o header

# o print a seguir retorna todo o arquivo data posso acessar com posiçao []

print(data[0])

departament_list = {}

for row in data:
    department = row[15]
    if department not in departament_list:
        departament_list[department] = 0
    departament_list[department] += 1

# list_test = {}

# for row in data:
#     if lista in list_test:
#         list_test[lista] += 1
#     list_test[lista] = 0

with open("list_department_new.csv", "w", encoding="utf8") as file:
    new_list = csv.writer(file)

    headers = ["Departamento" "Total de Cursos"]

    new_list.writerow(headers)

    for department, grades in departament_list.items():

        row = [
            department,
            grades,
        ]

        new_list.writerow(row)
