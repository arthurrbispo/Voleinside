-- Nesse script estão as tabelas para o funcionamento correto da aplicação
-- Usado apenas para forma didatica

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUser VARCHAR(100),
emailUser VARCHAR(55) NOT NULL,
CHECK(emailUser LIKE('%@%.%')),
senhaUser VARCHAR(45) NOT NULL
);

CREATE TABLE questionario (
idQuestionario INT PRIMARY KEY AUTO_INCREMENT,
setJogo INT,
pntSofridos INT,
pntGanhos INT,
pntProprios INT,
dtJogo DATE
);


CREATE TABLE registro (
idRegistro INT AUTO_INCREMENT,
idQuestionario INT,
idUsuario INT,
PRIMARY KEY(idRegistro, idQuestionario, idUsuario),
dtHora DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (idQuestionario) REFERENCES questionario(idQuestionario),
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);
