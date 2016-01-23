/**
* Contrato.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        tipo: {type: 'string',
               enum: ['avenca', 'servico', 'bem_movel', 'empreitada']},
        duracao:{type: 'string'},
        funcoes:{type: 'string'},
        descricao: {type: 'string'},
        fundamento:{type: 'string'},
        data_publicacao:{type: 'date'},
        data_inicio:{type: 'date'},
        prazo_entrega: {type: 'string'},
        prazo_pagamento:{type: 'string'},
        prazo_execucao:{type: 'string'},
        montante: {type: 'float'},
        adjudicante: {model: 'entidade'},
        adjudicatario: {model: 'entidade'}
    }
};

