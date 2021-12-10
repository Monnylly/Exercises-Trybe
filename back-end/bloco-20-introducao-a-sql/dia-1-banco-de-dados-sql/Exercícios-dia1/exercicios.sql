-- Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
basta clicar com o botao direito em cima da tabela e marcar a primeira opção, select rows

-- Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .
clicando em cima de create table com botao direito

-- Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;


-- Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
faz referencia a tabela country

-- Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
N: 1 ou seja muitos pra 1
-- Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
1: N ou seja 1 para muitos
