var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT * FROM questionario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(axSet, axPontosSofridos, axPontosFeitos, axPontosProprios, axData, idUsuario) {
    var instrucaoSql = `
        INSERT INTO questionario 
        (setJogo, pntSofridos, pntGanhos, pntProprios, dtJogo) 
        VALUES ('${axSet}', '${axPontosSofridos}', '${axPontosFeitos}', '${axPontosProprios}', '${axData}');
    `;
    
var instrucaoSql2 = `
        INSERT INTO registro (idUsuario, idQuestionario)
        VALUES (
            ${idUsuario},
            (SELECT idQuestionario FROM questionario ORDER BY idQuestionario DESC LIMIT 1)
        );
    `;

    console.log("Executando SQL do questionário:\n" + instrucaoSql);
    console.log("Executando SQL do registro:\n" + instrucaoSql2);

    return database.executar(instrucaoSql)
        .then(() => {
            return database.executar(instrucaoSql2);
        });
}
module.exports = {
    cadastrar,
    listar
};
