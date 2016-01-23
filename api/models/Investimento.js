module.exports = {

    attributes: {
        tipo: {type: 'string',
               enum: ['bem_movel', 'ppp', 'participacao_social']},
        data:{type: 'string', defaultsTo: '-'},
        montante:{type: 'string', defaultsTo: '-'},
        tipo_bem: {type: 'string', defaultsTo: '-'},
        condicoes:{type: 'string', defaultsTo: '-'},
        duracao:{type: 'string', defaultsTo: '-'},
        objectivo:{type: 'string', defaultsTo: '-'},
        capital: {type: 'string', defaultsTo: '-'},
        quotizacao: {type: 'string', defaultsTo: '-'},
        parceiro_publico:{model: 'entidade'},
        parceiro_privado:{model: 'entidade'},
        participante:{model: 'entidade'},
        participada:{model: 'entidade'},
        investidor:{model: 'entidade'}        
    }
};