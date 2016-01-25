module.exports = {

     attributes: {
        tipo: {type: 'string',
               enum: ['aquisicao', 'arrendamento', 'cedencia', 'expropriacao', 'permuta', 'venda']},
        montante:{type: 'string'},
        funcoes:{type: 'string'},
        descricao: {type: 'string'},
        fundamento:{type: 'string'},
        data_publicacao:{type: 'string'},
        data_inicio:{type: 'string'},
        prazo_entrega: {type: 'string'},
        prazo_pagamento:{type: 'string'},
        prazo_execucao:{type: 'string'},
        montante: {type: 'string'},
        comprador: {model: 'entidade'},
        vendedor:{model: 'entidade'},
        arrendante: {model: 'entidade'},
        arrendatário:{model: 'entidade'},
        cedente: { model: 'entidade'},
        cessionario:{model: 'entidade'},
        objecto:{ model: 'patrimonio'}
    }
};