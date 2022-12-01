var dashModel = require("../models/dashModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA dashController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listarCaminhao(req, res){
    var idEstacao = req.params.idEstacao;
    dashModel.listarCaminhao(idEstacao)
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(
        function (erro){
            console.log(erro);{
                console.log(erro);
                console.log("Houve um erro ao tentar realizar a consulta Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        }
    );
}

function listarEstacao(req, res){
    var idLinha = req.params.idLinha;
    dashModel.listarEstacao(idLinha)
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(
        function (erro){
            console.log(erro);{
                console.log(erro);
                console.log("Houve um erro ao tentar realizar a consulta Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        }
    );
}

function buscarDadosTotem(req, res){
    var idMaquina = req.params.idMaquina;

    dashModel.buscarDados(idMaquina)
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(
        function (erro){
            console.log(erro);{
                console.log(erro);
                console.log("Houve um erro ao tentar realizar a consulta Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        }
    );
}

function buscarTotensEstacao(req, res){
    var idEstacao = req.params.idEstacao;

    dashModel.listarCaminhao(idEstacao)
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(
        function (erro){
            console.log(erro);{
                console.log(erro);
                console.log("Houve um erro ao tentar realizar a consulta Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        }
    );
}


function listar(req, res){
    var idMaquina = req.params.idMaquina;
    dashModel.listar(idMaquina)
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado")
        }
    }).catch(
        function (erro){
            console.log(erro);{
                console.log(erro);
                console.log("Houve um erro ao tentar realizar a consulta Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        }
    );
}

module.exports = {
    listarCaminhao,
    listarEstacao,
    listar,
    testar,
    buscarDadosTotem,
    buscarTotensEstacao
}