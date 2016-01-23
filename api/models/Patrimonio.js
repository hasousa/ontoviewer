/**
* Patrimonio.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        data_registo_predial:{type: 'string'},
        localizacao: {type: 'string'},
        registo_predial:{type:'string'},
        tipo: {type:'string'},
        valor: {type: 'float'},
        proprietario: {model: 'entidade'}
    }
};