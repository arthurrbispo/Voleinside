var database = require("../database/config")

function listar() {
    var instrucaoSql = `
        SELECT * FROM questionario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(axSet, axPontosSofridos, axPontosFeitos, axPontosProprios, axData) {
    var instrucaoSql = `
        INSERT INTO questionario 
        (setJogo, pntSofridos, pntGanhos, pntProprios, dtJogo) 
        VALUES ('${axSet}', '${axPontosSofridos}', '${axPontosFeitos}', '${axPontosProprios}', '${axData}');
    `;

    var instrucaoSql2 = `
    INSERT INTO registro (idQuestionario)`
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    listar
};
