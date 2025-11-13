var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    userController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    userController.listar(req, res);
});

module.exports = router;