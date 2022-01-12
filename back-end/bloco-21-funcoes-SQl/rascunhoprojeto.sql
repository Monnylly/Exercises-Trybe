CREATE DATABASE SpotifyClone;

Use SpotifyClone;

create table planos(
 id_plano INT primary Key auto_increment,
 tipo varchar(250) not null,
 valor numeric(3,2) not null
);


create table usuario(
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nome_usuario varchar(255) NOT NULL,
  idade INT NOT Null,
  data_assinatura date Not null,
  id_plano int not null,
  foreign key (id_plano) references planos (id_plano)
) ENGINE = innodb;


create table artista(
 id_artista Int primary key auto_increment,
 nome_artista varchar(100) not null
)ENGINE = innodb;


create table albuns(
 id_albuns int primary key auto_increment,
 nome_albuns varchar(250) not null,
 ano_lancamento int not null,
 id_artista int not null, 
 foreign key (id_artista) references artista (id_artista)
)ENGINE = innodb;


create table cancoes(
 id_cancoes int primary key auto_increment,
 nome_cancoes text not null,
 duracao tinyint unsigned null,
 id_artista int not null,
 id_albuns int not null,
 foreign key (id_artista) references artista (id_artista),
 foreign key (id_albuns) references albuns (id_albuns)
) ENGINE = innodb;


create table reproducoes(
 data_reproducao datetime not null, 
 id_cancoes int not null, 
 id_usuario int not null, 
 foreign key (id_cancoes) references cancoes (id_cancoes),
 foreign key (id_usuario) references usuario (id_usuario),
 primary key(id_usuario, id_cancoes)
)ENGINE = innodb;


create table seguidor(
id_usuario int not null,
id_artista int not null,
foreign key (id_usuario) references usuario (id_usuario),
foreign key (id_artista) references artista (id_artista),
primary key(id_usuario, id_artista)
)engine = innodb;


insert into planos (id_plano, tipo, valor)
values
  (1, 'Gratuito', 0),
  (2, 'Universitario', 5.99),
  (3, 'Pessoal', 6.99),
  (4, 'Familiar', 7.99); 


INSERT INTO usuario (id_usuario, nome_usuario, idade, data_assinatura, id_plano)
VALUES
  (1, 'Thati', 23, '2019-10-20', 1),
  (2, 'Cintia', 35, '2017-12-30', 4),
  (3, 'Bill', 20, '2019-06-05', 2),
  (4, 'Roger', 45, '2020-05-13', 3),
  (5, 'Norman', 58, '2017-02-17', 3),
  (6, 'Patrick', 33, '2017-01-06', 4),
  (7, 'Vivian', 26, '2018-01-05', 2),
  (8, 'Carol', 19, '2018-02-14', 2),
  (9, 'Angelina', 42, '2018-04-29', 4),
  (10, 'Paul', 46, '2017-01-17', 4);
  
 

insert into artista (id_artista, nome_artista)
 values
(1, 'Walter Phoenix'),
(2, 'Peter Strong'),
(3, 'Lance Day'),
(4, 'Freedie Shannon'),
(5, 'Tyler Isle'),
(6, 'Fog');

insert into albuns(id_albuns, nome_albuns, ano_lancamento, id_artista)
 values
  (1, 'Envious', 1990, 1),
  (2, 'Exuberant', 1993, 1),
  (3, 'Hallowed Steam', 1995, 2),
  (4, 'Incandescent', 1998, 3),
  (5, 'Temporary Culture', 2001, 4),
  (6, 'Library of liberty', 2003, 4),
  (7, 'Chained Down', 2007, 5),
  (8, 'Cabinet of fools', 2012, 5),
  (9, 'No guarantees', 2015, 5),
  (10, 'Apparatus', 2015, 6);
  
  

  
insert into cancoes (id_cancoes, nome_cancoes, duracao, id_artista, id_albuns)
 values
   (1, 'Soul For Us', 200, 1, 1),
   (2, 'Reflections Of Magic', 163, 1, 1),
   (3, 'Dance With Her Own', 116, 1, 1),
   (4, 'Troubles Of My Inner Fire', 203, 1, 2),
   (5, 'Time Fireworks', 152, 1, 2),
   (6, 'Magic Circus', 105, 2, 3),
   (7, 'Honey, So Do I', 207, 2, 3),
   (8, "Sweetie, Let's Go Wild", 139, 2, 3),
   (9, 'She Knows', 244, 2, 3),
   (10, 'Fantasy For Me', 100, 3, 4),
   (11, 'Celebration Of More', 146, 3, 4),
   (12, 'Rock His Everything', 223, 3, 4),
   (13, 'Home Forevers', 231, 3, 4),
   (14, 'Diamond Power', 241, 3, 4),
   (15, "Let's Be Silly", 132, 3, 4),
   (16, 'Thang Of Thunder', 240, 4, 5),
   (17, 'Words Of Her Life', 185, 4, 5),
   (18, 'Without My Streets', 176, 4, 5),
   (19, 'Need Of The Evening', 190, 4, 6),
   (20, 'History Of My Roses', 222, 4, 6),
   (21, 'Without My Love', 111, 4, 6),
   (22, 'Walking And Game', 123, 4, 6),
   (23,'Young And Father', 197, 4, 6),
   (24, 'Finding My Traditions', 179, 5, 7),
   (25, 'Walking And Man', 229, 5, 7),
   (26, 'Hard And Time', 135, 5, 7),
   (27, "Honey, I'm A Lone Wolf", 150, 5, 7),
   (28, "She Thinks I Won't Stay Tonight", 166, 5, 8),
   (29, "He Heard You're Bad For Me", 154, 5, 8),
   (30, "He Hopes We Can't Stay", 210, 5, 8),
   (31, 'I Know I Know', 117, 5, 8),
   (32, "He's Walking Away", 159, 5, 9),
   (33, "He's Trouble", 138, 5, 9),
   (34, 'I Heard I Want To Bo Alone', 120, 5, 9),
   (35, 'I Ride Alone', 151, 5, 9),
   (36, 'Honey', 79, 6, 10),
   (37, 'You Cheated On Me', 95, 6, 10),
   (38, "Wouldn't It Be Nice", 213, 6, 10),
   (39, 'Baby', 136, 6, 10),
   (40, 'You Make Me Feel So...', 83, 6, 10);
   
insert into reproducoes (data_reproducao, id_cancoes, id_usuario)
values
   ('2020-02-28 10:45:55', 36, 1),
   ('2020-05-02 05:30:35', 25, 1),
   ('2020-03-06 11:22:33', 23, 1),
   ('2020-08-05 08:05:17', 14, 1),
   ('2020-09-14 16:32:22', 15, 1),
   ('2020-01-02 07:40:33', 34, 2),
   ('2020-05-16 06:16:22', 24, 2),
   ('2020-10-09 12:27:48', 21, 2),
   ('2020-09-21 13:14:46', 39, 2),
   ('2020-11-13 16:55:13', 6, 3),
   ('2020-12-05 18:38:30', 3, 3),
   ('2020-07-30 10:00:00', 26, 3),
   ('2021-08-15 17:10:10', 2, 4),
   ('2021-07-10 15:20:30', 35, 4),
   ('2021-01-09 01:44:33', 27, 4),
   ('2020-07-03 19:33:28', 7, 5),
   ('2017-02-24 21:14:22', 12, 5),
   ('2020-08-06 15:23:43', 14, 5),
   ('2020-11-10 13:52:27', 1, 5),
   ('2019-02-07 20:33:48', 38, 6),
   ('2017-01-24 00:31:17', 29, 6),
   ('2017-10-12 12:35:20', 30, 6),
   ('2018-05-29 14:56:41', 22, 6),
   ('2018-05-09 22:30:49', 5, 7),
   ('2020-07-27 12:52:58', 4, 7),
   ('2018-01-16 18:40:43', 11, 7),
   ('2018-03-21 16:56:40', 39, 8),
   ('2020-10-18 13:38:05', 40, 8),
   ('2019-05-25 08:14:03', 32, 8),
   ('2021-08-15 21:37:09', 33, 8),
   ('2021-05-24 17:23:45', 16, 9),
   ('2018-12-07 22:48:52', 17, 9),
   ('2021-03-14 06:14:26', 8, 9),
   ('2020-04-01 03:36:00', 9, 9),
   ('2017-02-06 08:21:34', 20, 10),
   ('2017-12-04 05:33:43', 21, 10),
   ('2017-07-27 05:24:49', 12, 10),
   ('2017-12-25 01:03:57', 13, 10);
   

   
insert into seguidor (id_usuario, id_artista)
 values 
   (1, 1),
   (1, 4),
   (1, 3),
   (2, 1),
   (2, 3),
   (3, 2),
   (3, 1),
   (4, 4),
   (5, 5),
   (5, 6),
   (6, 6),
   (6, 3),
   (6, 1),
   (7, 2),
   (7, 5),
   (8, 1),
   (8, 5),
   (9, 6),
   (9, 4),
   (9, 2),
   (10, 3),
   (10, 6);
 
 
 
  




