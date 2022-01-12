-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
-- Escreva uma query para exibir três números em três colunas.

SELECT 1, 2, 3;

-- Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15;

-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT (20*2) + 15;

-- Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists.Scientists;

-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT name AS 'Nome de Projeto', hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT name FROM Scientists.Scientists order by name ASC;

-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

select name FROM Scientists.Projects ORDER BY name desc;


-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
select concat('O projeto ', name, ' precisou de ', ' ', hours, ' horas para ser concluido ') FROM Scientists.Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT name, hours FROM Scientists.Projects ORDER BY hours desc limit 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT distinct Project FROM Scientists.AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

SELECT name, hours FROM Scientists.Projects order by Hours desc limit 1;

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT name FROM Scientists.Projects order by Hours asc limit 1 offset 1;

-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Scientists.Projects order by hours asc limit 5;

-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se
-- refira a quantidade de cientistas.
SELECT concat('EXISTEM ', count(name), ' cientistas na tabela scientists ') AS resultados from Scientists.Scientists;