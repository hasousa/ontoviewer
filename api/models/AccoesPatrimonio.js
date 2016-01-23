/**
* AccoesPatrimonio.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        tipo: {type: 'string',
               enum: ['aquisicao', 'arrendamento', 'cedencia', 'expropriacao', 'permuta', 'venda']},
        montante:{type: 'string'},
        
        funcoes:{type: 'string'},
        descricao: {type: 'string'},
        fundamento:{type: 'string'},
        data_publicacao:{type: 'date'},
        data_inicio:{type: 'date'},
        prazo_entrega: {type: 'string'},
        prazo_pagamento:{type: 'string'},
        prazo_execucao:{type: 'string'},
        montante: {type: 'float'},
        pratrimonio: { model: 'patrimonio'},
        comprador: {model: 'entidade'},
        vendedor:{model: 'entidade'},
        arrendante: {model: 'entidade'},
        arrendatário:{model: 'entidade'},
        cedente: { model: 'entidade'},
        cessionario:{model: 'entidade'},
        
        objecto:{ model: 'patrimonio'},
        comprador: {model: 'entidade'},
        vendedor: {model: 'entidade'}
    }
};