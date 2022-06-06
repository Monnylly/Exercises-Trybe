from tabulate import tabulate

titles = ["Animes", "Temporadas"]

data = [["digomo", 2], ["Prommisse", 5], ["Attack Titan", 2], ["jujutsu", 6]]

print(tabulate(data, headers=titles, tablefmt="fancy_grid"))
