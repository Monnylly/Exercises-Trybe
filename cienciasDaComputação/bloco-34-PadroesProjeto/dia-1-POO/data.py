from datetime import date


class Persona:
    def __init__(self, nome, age, sexo):
        self.nome = nome
        self.age = age
        self.sexo = sexo

    def say_hello(self):
        atual_year = date.today().year

        print(f"Hello, my name is {self.nome}")
        print(f"I whas born in {atual_year - self.age}")


if __name__ == "__main__":
    p1 = Persona("Jona", 15, "feminino")
    print(p1.nome)
    print(p1.age)
    print(p1.sexo)
    p1.say_hello()
