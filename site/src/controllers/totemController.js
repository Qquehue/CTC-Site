var totemModel = require("../models/totemModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA totemController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    totemModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        totemmModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarTotem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro_maquina.html
    var modeloCPU = req.body.modeloCPUServer;
    var totalMemoria = req.body.totalMemoriaServer;
    var estacao = req.body.estacaoServer;

    // Faça as validações dos valores
    if (modeloCPU == undefined) {
        res.status(400).send("Seu Modelo Cpu está undefined!");
    } else if (totalMemoria == undefined) {
        res.status(400).send("Seu Total Memoria está undefined!");
    } else if (estacao == undefined) {
        res.status(400).send("Sua estação está undefined!");
    }
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        totemModel.cadastrarTotem(modeloCPU, totalMemoria, estacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrarTotem,
    listar,
    testar
}