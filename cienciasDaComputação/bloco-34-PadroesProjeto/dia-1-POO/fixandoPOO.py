class Pessoa:
    def __init__(self, nome, idade, sexo):
        self.nome = nome
        self.idade = idade
        self.sexo = sexo

    def __str__(self):
        return f"""
        - Nome da pessoa: {self.nome}
        - idade da pessoa: {self.idade}
        - Sexo da pessoa: {self.sexo}
        """


usuario = Pessoa("Monnylly", 35, "feminino")

print(usuario)
