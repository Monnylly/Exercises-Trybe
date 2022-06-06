import json

with open("pokemon.json") as file:
    content = file.read()

    pokemons = json.loads(content)["results"]

    print(pokemons[0]["name"])


# with open("pokemons.json") as file:
#     pokemons = json.load(file)["results"]

# print(pokemons[0])  # imprime o primeiro pokemon da lista
