var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    var instrucaoSql = `
    SELECT 
        q.setJogo,
        q.pntProprios AS pontosProprios,
        TRUNCATE(q.pntGanhos / (q.pntSofridos + q.pntGanhos) * 100, 1) AS aproveitTotal,
        TRUNCATE(q.pntProprios / (q.pntSofridos + q.pntGanhos) * 100, 1) AS aprovetProprio,
        q.pntGanhos AS pontosDupla,
        q.pntSofridos AS pontosSofridos,
        r.idRegistro AS idRegistro
    FROM questionario q
    JOIN registro r ON q.idQuestionario = r.idQuestionario
    JOIN usuario u  ON u.idUsuario = r.idUsuario
    WHERE u.idUsuario = ${idUsuario}
    ORDER BY r.dtHora DESC
    LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
}
