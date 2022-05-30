# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma: A -
# álcool, G - gasolina), e retorne o valor a ser pago pelo cliente
# , sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do
# litro do álcool é R$ 1,90.


def number_litres_vend(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
