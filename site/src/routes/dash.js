var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/", function (req, res) {
    dashController.testar(req, res);
});

router.get("/listarCaminhao/:idEstacao", function (req, res) {
    dashController.listarCaminhao(req, res);
});

router.get("/listarEstacao/:idLinha", function (req, res) {
    dashController.listarEstacao(req, res);
});

router.get("/listar/:idMaquina", function (req, res) {
    dashController.listar(req, res);
});

router.get("/buscarDados/:idMaquina", function (req, res) {
    dashController.buscarDadosTotem(req, res);
});

router.get("/buscarTotens/:idEstacao", function (req, res) {
    dashController.buscarTotensEstacao(req, res);
});

module.exports = router;