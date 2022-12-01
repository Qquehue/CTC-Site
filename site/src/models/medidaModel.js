var database = require("../database/config");

function buscarUltimasMedidas(maquina) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 7 usoMemoria, usoCPU, upTime, processos, fkMaquina from UsoMaquina where fkMaquina = ${maquina}
                    order by idUso desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select usoMemoria, usoCPU upTime, fkMaquina from UsoMaquina where fkMaquina = 7
        order by idUso desc`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idCaminhao) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT top 1 usoCpu, usoMemoria, fkMaquina, processos, FORMAT(upTime, 'HH:mm:ss') as momento_grafico  from usoMaquina join 
        maquina on UsoMaquina.fkMaquina = maquina.idMaquina where fkMaquina = ${idCaminhao} ORDER BY idUso DESC;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT top 1 usoCpu, usoMemoria, fkMaquina, FORMAT(upTime, 'HH:mm:ss') as momento_grafico from usoMaquina join 
        maquina on UsoMaquina.fkMaquina = maquina.idMaquina where fkMaquina = ${idCaminhao} ORDER BY idUso DESC;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
