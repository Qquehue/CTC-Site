CREATE DATABASE CTC; 

USE CTC;  

CREATE TABLE Linha (
idLinha INT PRIMARY KEY AUTO_INCREMENT,  
nomeLinha VARCHAR(45)
);  

CREATE TABLE Estacao (  
idEstacao INT PRIMARY KEY AUTO_INCREMENT,  
nomeEstacao VARCHAR(45),  
fkLinha INT,  
FOREIGN KEY (fkLinha) REFERENCES Linha(idLinha)  
);  

CREATE TABLE Maquina (  
idMaquina INT PRIMARY KEY AUTO_INCREMENT,  
modeloCPU VARCHAR(45),  
totalMemoria DOUBLE,  
dataCadastro DATETIME, 
fkEstacao INT,  
FOREIGN KEY (fkEstacao) REFERENCES Estacao(idEstacao)  
);  

CREATE TABLE UsoMaquina (  
idUso INT PRIMARY KEY AUTO_INCREMENT, 
usoCPU DOUBLE, 
usoMemoria DOUBLE, 
upTime DATETIME, 
fkMaquina INT,  
FOREIGN KEY (fkMaquina) REFERENCES Maquina(idMaquina)  
);  

CREATE TABLE Cargo (  
idCargo INT PRIMARY KEY AUTO_INCREMENT,  
nomeCargo VARCHAR(45)  
);  

CREATE TABLE Funcionario (  
idFuncionario INT PRIMARY KEY AUTO_INCREMENT,  
nomeFuncionario VARCHAR(45),  
CPF CHAR(11),  
telefone CHAR(15),  
email VARCHAR(45),  
senha VARCHAR(45),  
fkLinha INT,  
FOREIGN KEY (fkLinha) REFERENCES Linha(idLinha),  
fkCargo INT,  
FOREIGN KEY (fkCargo) REFERENCES Cargo(idCargo),
fkEstacao INT,
FOREIGN KEY (fkEstacao) REFERENCES Estacao(idEstacao) 
); 

INSERT INTO Cargo (nomeCargo) VALUES 
("Analista"), 
("Gerente");

INSERT INTO Linha (nomeLinha) VALUES 
("Azul"),
("Verde"), 
("Vermelha");

INSERT INTO Linha (idLinha, nomeLinha) VALUES 
(1000,"Linha Gerente");

INSERT INTO Estacao (idEstacao, nomeEstacao, fkLinha) VALUES
(1000, "Gerente",1000);

INSERT INTO Estacao (nomeEstacao, fkLinha) VALUES
("Jabaquara",1),
("Conceição",1),
("São Judas",1),
("Vila Prudente",2),
("Tamanduateí",2),
("Sacomã",2),
("Itaquera",3),
("Artur Alvim",3),
("Patriarca",3);

SELECT * FROM Cargo; 

SELECT * FROM Linha; 

SELECT * FROM Estacao;

SELECT * FROM Funcionario;

SELECT  modeloCPU, totalMemoria, dataCadastro from Maquina;

INSERT INTO Maquina (modeloCPU, totalMemoria, dataCadastro, fkEstacao) VALUES ('i3',1.1 , current_timestamp, 1);