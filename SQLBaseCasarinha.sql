create schema Casarinha;
use Casarinha;

create table Locador (
	CPF char(11) not null,
	Nome varchar(30) not null,
	Idade int not null,
    Telefone char(11) not null,
    Email varchar(30) not null
);
alter table Locador add primary key(CPF);

create table Locatario (
	CPF char(11) not null,
	Nome varchar(30) not null,
	Idade int not null,
    Telefone char(11) not null,
    Email varchar(30) not null
);
alter table Locatario add primary key(CPF);

create table Vistoria (
	CNPJ char(11) not null,
    Telefone char(11) not null,
	Email varchar(30) not null
);
alter table Vistoria add primary key(CNPJ);

create table Imovel (
	Id char(11) not null,
	Tipo varchar(15) not null,
	Endereco varchar(30) not null,
    CPFLocador char(11) not null,
    CPFLocatario char(11)
);
alter table Imovel add primary key(Id);

create table Vistora (
	Id char(11) not null,
	CNPJVistoria char(11) not null,
	IdImovel char(11) not null,
	DataVistoria date not null,
	Condicao varchar(10) not null
);
alter table Vistora add primary key(Id);

create table Cartorio (
	CNPJ char(14) not null,
    Telefone char(11) not null,
    Email varchar(30) not null
);
alter table Cartorio add primary key(CNPJ);

create table Contrato (
	Id char(11) not null,
	Clausulas varchar(300) not null,
    Aluguel int not null,
    CPFLocador char(11) not null,
    CPFLocatario char(11) not null,
    CNPJCartorio char(14) not null,
    DataInicio date not null,
    DataFinal date not null,
    IdImovel char(11) not null
);
alter table Contrato add primary key(Id);

create table Valida (
	IdContrato char(11) not null,
    CNPJCartorio char(14) not null,
    Comprovante varchar(300) not null
);

create table Encerra (
	IdContrato char(11) not null,
    CNPJCartorio char(14) not null,
    Comprovante varchar(300) not null
);

alter table Imovel add foreign key (CPFLocador) references Locador(CPF);
alter table Imovel add foreign key (CPFLocatario) references Locatario(CPF);
alter table Vistora add foreign key (CNPJvistoria) references Vistoria(CNPJ);
alter table Vistora add foreign key (IdImovel) references Imovel(Id);
alter table Contrato add foreign key (CNPJCartorio) references Cartorio(CNPJ);
alter table Contrato add foreign key (IDImovel) references Imovel(Id);
alter table Contrato add foreign key (CPFLocatario) references Locatario(CPF);
alter table Contrato add foreign key (CPFLocador) references Locador(CPF);
alter table Valida add foreign key (CNPJCartorio) references Cartorio(CNPJ);
alter table Valida add foreign key (IdContrato) references Contrato(Id);
alter table Encerra add foreign key (CNPJCartorio) references Cartorio(CNPJ);
alter table Encerra add foreign key (IdContrato) references Contrato(Id);


insert into Cartorio (CNPJ, Telefone, Email) values ('12345678912345', '53999999999', 'pessoa@gmail.com');

insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('12312312312', 'Cleber Jhonson', 30, '49999254678', 'JhonsonsAndClebers@gmail.com');
insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('55544433322', 'Nicolas Sosa', 21, '49999224477', 'nicolassosa@gmail.com');
insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('32456789212', 'Murilo Uarth', 19, '49999289782', 'murilo@gmail.com');
insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('68792171523', 'Jone Birck', 19, '49999229875', 'jone@gmail.com');
insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('15481584871', 'Vane Vane', 20, '49999222343', 'vane@gmail.com');
insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('51564878948', 'Madu Madu', 19, '49999227259', 'madu@gmail.com');
insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('32231561567', 'Bundz Alano', 27, '49999222122', 'bundz@gmail.com');
insert into Locador (CPF, Nome, Idade, Telefone, Email) values ('48486487121', 'Helena irmã', 13, '49999878424', 'helena@gmail.com');

insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('32132132132', 'Sr Locatario', 30, '49991254666', 'Locatarios@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('04895415007', 'Muras Lenda', 73, '49991155666', 'MurinhasBaterista@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('12354679875', 'Fulano rico', 35, '49991154689', 'fulano@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('59878956464', 'Ciclano podendo', 38, '49991132456', 'ciclano@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('26554875489', 'Jone ricasso', 43, '49991759254', 'jone@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('91654848943', 'Vane poderosa', 55, '49991248657', 'vane@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('51321545648', 'Bundz programador', 40, '49991985623', 'bundz@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('82132154564', 'Lucas irmão', 20, '49991562389', 'lucas@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('96546545646', 'Maristela academia', 49, '49991132456', 'maristela@gmail.com');
insert into Locatario (CPF, Nome, Idade, Telefone, Email) values ('46548678732', 'Seu zé', 60, '49991784512', 'zé@gmail.com');

insert into Vistoria (CNPJ, Telefone, Email) values ('12345678912', '53984262840', 'vistoriaboa@gmail.com');
insert into Vistoria (CNPJ, Telefone, Email) values ('15647897897', '53984354214', 'vistoriaruim@gmail.com');
insert into Vistoria (CNPJ, Telefone, Email) values ('85156456448', '53984258963', 'vistoriaexcelente@gmail.com');
insert into Vistoria (CNPJ, Telefone, Email) values ('55465487979', '53984357951', 'vistoriapessima@gmail.com');
insert into Vistoria (CNPJ, Telefone, Email) values ('84879999777', '53984878952', 'vistoriatop@gmail.com');
insert into Vistoria (CNPJ, Telefone, Email) values ('16545646548', '53984123215', 'vistoriaperfeita@gmail.com');
insert into Vistoria (CNPJ, Telefone, Email) values ('48965456478', '53984289452', 'vistoriamuitoruim@gmail.com');
insert into Vistoria (CNPJ, Telefone, Email) values ('65487894787', '53984225436', 'vistoriamaisoumenos@gmail.com');

insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('32165498732', 'Apartamento', 'Rua Mais Doce', '32132132132', '51564878948');
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('16169873232', 'Casa', 'Rua General Osório', '51321545648', '55544433322');
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('46548978975', 'Casa', 'Rua Octavio Peixoto', '91654848943', '15481584871');
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('03216545649', 'Apartamento', 'Avenida Duque de Caxias', '04895415007', '68792171523');
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('21561654878', 'Apartamento', 'Rua Andrade Neves', '12354679875', '32231561567');
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('42156156489', 'Apartamento', 'Rua Voluntarios da Patria', '59878956464', '55544433322');
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('84564564504', 'Casa', 'Rua Saldanha Marinho', '26554875489', '32231561567');
insert into Imovel (Id, Tipo, Endereco, CPFLocador) values ('84564564878', 'Casa', 'Avenida Bento Gonçalves', '15481584871');
insert into Imovel (Id, Tipo, Endereco, CPFLocador) values ('65465123123', 'Apartamento', 'Avenida Bento Gonçalves', '32231561567');
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('98978789745', 'Casa', 'Rua Henrique Dias', '82132154564', 48486487121);
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('85798456421', 'Casa', 'Rua Octavio Peixoto', '96546545646', 48486487121);
insert into Imovel (Id, Tipo, Endereco, CPFLocatario, CPFLocador) values ('46484787897', 'Apartamento', 'Rua marechal deodoro', '46548678732', 15481584871);

insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('65487891321', '12345678912', '32165498732', '2021-10-11', 'Top');
insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('15156156464', '15647897897', '16169873232', '2021-01-02', 'Decadente');
insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('23332123156', '85156456448', '46548978975', '2021-12-22', 'Ta ruim');
insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('88548945123', '55465487979', '03216545649','2022-06-02', 'Excelente');
insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('23322311544', '84879999777', '21561654878', '2022-03-22', 'Excelente');
insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('06545640400', '16545646548', '42156156489', '2022-01-26', 'Top');
insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('70210514548', '48965456478', '84564564504', '2022-04-27', 'Ta ruim');
insert into Vistora (Id, CNPJVistoria, idImovel, DataVistoria, Condicao) values ('40212151504', '65487894787', '84564564878', '2022-06-10', 'Excelente');

insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('32165498732', 'Contrato Bem Interessante', 321, '51564878948', '32132132132', '12345678912345', '2022-04-27', '2025-12-10', '32165498732');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('16169873232', 'Contrato Não Muito Interessante', 666, '55544433322', '51321545648', '12345678912345', '2021-10-11', '2024-07-05', '16169873232');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('01651231348', 'Não pode Cachorro', 870, '15481584871', '91654848943', '12345678912345', '2022-01-26', '2024-12-10', '46548978975');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('78945645612', 'Não pode gato', 840, '68792171523', '04895415007', '12345678912345', '2022-03-22', '2022-11-03', '03216545649');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('62132102199', 'Proibido som alto', 765, '32231561567', '12354679875', '12345678912345', '2021-12-22', '2022-12-22', '21561654878');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('00323215640', 'Se romper o contrato, perde a alma', 1500, '55544433322', '59878956464', '12345678912345', '2021-01-02', '2023-06-05', '42156156489');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('82512312304', 'Casa assombrada', 100, '32231561567', '26554875489', '12345678912345', '2022-01-02', '2022-06-09', '84564564504'); 
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('13213215464', 'Casa pode pegar fogo', 150, '32231561567', '59878956464', '12345678912345', '2020-06-02', '2021-12-10', '65465123123');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('15315648789', 'Casa sem regulação', 890, '48486487121', '82132154564', '12345678912345', '2021-06-02', '2023-12-10', '98978789745');
insert into Contrato (Id, Clausulas, Aluguel, CPFLocador, CPFLocatario, CNPJCartorio, DataInicio, DataFinal, IdImovel) values ('13213544657', 'Casa perigosa', 230, '15481584871', '46548678732', '12345678912345', '2020-06-02', '2024-12-10', '46484787897');

insert into Encerra (IdContrato, CNPJCartorio, Comprovante) values ('13213215464', '12345678912345', 'Terminou amigavelmente');
insert into Encerra (IdContrato, CNPJCartorio, Comprovante) values ('82512312304', '12345678912345', 'Expulso');

insert into Valida (IdContrato, CNPJCartorio, Comprovante) values ('32165498732', '12345678912345', 'Ta Valendo');
insert into Valida (IdContrato, CNPJCartorio, Comprovante) values ('16169873232', '12345678912345', 'De acordo');
insert into Valida (IdContrato, CNPJCartorio, Comprovante) values ('01651231348', '12345678912345', 'Acordão');
insert into Valida (IdContrato, CNPJCartorio, Comprovante) values ('78945645612', '12345678912345', 'Assinado');
insert into Valida (IdContrato, CNPJCartorio, Comprovante) values ('62132102199', '12345678912345', 'Fica de olho');
insert into Valida (IdContrato, CNPJCartorio, Comprovante) values ('00323215640', '12345678912345', 'Caiu no papo');


-- Retorna id de imoveis que se localizam em uma Avenida
select Id from Imovel where Endereco like '%Avenida%';

-- Retorna id de imoveis que possuem alugueis maiores que 850 reais
select id from Contrato where Aluguel >= 850;

-- Retorna o nome e a quantidade de imoveis apenas de locadores que possuem 2 ou mais imoveis
select nome, COUNT(*) as 'Imoveis'from imovel INNER JOIN locador on (CPFLocador = CPF) group by cpf HAVING count(*) > 1;

-- Retorna o nome de locador e locatorio que já tiveram seu vínculo encerrado
select Locador.nome as 'Locador', Locatario.nome as 'Locatario' from Contrato INNER JOIN Encerra on (IdContrato = id) INNER JOIN Locador on (CPFLocador = Locador.CPF) INNER JOIN Locatario on (CPFLocatario = Locatario.CPF);

-- Retorna o id dos contratos que ainda não foram validados nem encerrados
select id from Contrato LEFT JOIN Valida on (Valida.IdContrato = id) LEFT JOIN ENCERRA on (Encerra.IdContrato = id) where Encerra.CNPJCartorio IS NULL and Valida.CNPJCartorio IS NULL;

-- Retorna o nome dos locadores que estão com imoveis desocupados
select * from Locador INNER JOIN Imovel on (CPFLocador = CPF) where CPFLocatario IS NULL;
