SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;


-- Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é 
-- ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.


select title, film_id, IF('ACE GOLDFINGER', 'JA ASSISTI A ESSE FILME', 'NAO CONHEÇO ESSE FILME') as 'conheco o filme?'
FROM sakila.film;


-- Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e 
-- uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".

select title, rating,
	case 
		when rating= 'G' then 'livre para todos'
        when rating= 'PG' then 'nao recomendado para menores de 10 anos'
        when rating= 'PG-13' then 'não recomendado para menores de 13 anos'
        when rating= 'R' then 'nao recomendado para menores de 17 anos'
	else rating= 'proibido para menores de idade'
end as 'público alvo'
from sakila.film;
    
    
  

