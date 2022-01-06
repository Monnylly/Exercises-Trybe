-- 1-Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as
-- tabelas actor e film_actor .

select a.actor_id, a.first_name, f.film_id
from sakila.actor as a
inner join sakila.film_actor as f
on a.actor_id = f.actor_id;


-- 2-Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .

select s.first_name, s.last_name, a.address_id
 from sakila.staff as s
 inner join sakila.address as a
on s.address_id = a.address_id;


-- 3 Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
select c.customer_id, c.first_name, c.email, a.address_id, a.address
from sakila.customer c
inner join sakila.address as a
on c.address_id = a.address_id
order by c.first_name desc
limit 100;

-- 4- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California
-- e que contêm "rene" em seus nomes. 
-- As informações podem ser encontradas nas tabelas address e customer .

select c.first_name, c.email, c.address_id, a.address, a.district
from sakila.customer as c 
inner join sakila.address as a
on c.address_id = a.address_id
where
  a.district = 'California'
	and c.first_name like '%rene%';
