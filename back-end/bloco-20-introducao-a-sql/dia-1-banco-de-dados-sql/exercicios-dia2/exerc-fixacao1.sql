-- Monte uma query que exiba seu nome na tela;
SELECT 'Monnylly';

-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Monnylly', 'Negreiros', 'Picuí', 38;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'Monnylly' AS nome, 'Negreiros' AS sobrenome, 'Picuí' AS 'Cidade Natal', 38 AS idade;

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13 * 8;

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'DATA ATUAL';
