var questionarioModel = require("../models/questionarioModel");

function listar(req, res) {
    questionarioModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var axData = req.body.dataServer;
    var axSet = req.body.setServer;
    var axPontosFeitos = req.body.pontosFeitosServer;
    var axPontosSofridos = req.body.pontosSofridosServer;
    var axPontosProprios = req.body.pontosPropriosServer;

    console.log("Dados recebidos no controller:", {
        data: axData,
        set: axSet,
        pontosFeitos: axPontosFeitos,
        pontosSofridos: axPontosSofridos,
        pontosProprios: axPontosProprios
    });

    // Validações...
    if (axData == undefined) {
        res.status(400).send("Sua data está undefined!");
        return;
    }
    if (axSet == undefined) {
        res.status(400).send("Seu SET está undefined!");
        return;
    }
    if (axPontosFeitos == undefined) {
        res.status(400).send("Seus pontos feitos está undefined!");
        return;
    }
    if (axPontosSofridos == undefined) {
        res.status(400).send("Seus pontos sofridos está undefined!");
        return;
    }
    if (axPontosProprios == undefined) {
        res.status(400).send("Seus pontos proprios está undefined!");
        return;
    }

    questionarioModel.cadastrar(
        axSet, 
        axPontosSofridos, 
        axPontosFeitos, 
        axPontosProprios, 
        axData
    )
    .then(function(resposta){
        console.log("Cadastro realizado com sucesso:", resposta);
        res.status(200).send("Questionário cadastrado com sucesso!");
    })
    .catch(function(erro){
        console.log("Erro no cadastro:", erro);
        res.status(500).json(erro.sqlMessage || erro);
    });
}

module.exports = {
    listar,
    cadastrar
}