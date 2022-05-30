text_to_analise = (
  "O pacote black pode ser"
  "instalado utilizando utilizando a ferramenta"
  "pip vista anteriormente. Vamos utilizar sudo "
  "neste caso para garantir que ela esteja "
  "disponível para todos os usuários do sistema" "operacional. Digite o "
  "comando abaixo:"
)


def analize(text):
    report = ""

    count_words = len(text.split(""))

    report += f"Numero de palavras é {count_words}\n"

    char_count = dict()
    for char in text:
        if (char) in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    report += f"Ocorrências por caracter: {char_count}"

    return report


print(analize(text_to_analise))
