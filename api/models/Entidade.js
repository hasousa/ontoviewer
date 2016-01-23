/**
* Entidade.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        imagem: {type: 'string'},
        extinta: {type: 'boolean',
                 defaultsTo: 'false'},
        tipo: {type: 'string',
               enum: ['publica', 'privada', 'individuo']},
        nif:{type: 'integer'},
        cae:{type: 'integer', defaultsTo: '-'},
        nome: {type: 'string'},
        morada: {type: 'string', defaultsTo: '-'},
        capsocial: {type: 'string', defaultsTo: '-'},
        datacriacao: {type: 'string', defaultsTo: '-'},
        dataextincao: {type: 'string', defaultsTo: '-'},
        criacaodr: {type: 'string', defaultsTo: '-'},
        extincaodr: {type: 'string', defaultsTo: '-'},
        motivoextincao: {type: 'string', defaultsTo: '-'},
        reversao: {model: 'entidade', defaultsTo: '-'},
        contratou:{ collection: 'contrato',
                   via: 'adjudicante'},
        contratado:{ collection: 'contrato',
                    via: 'adjudicatario'}
    }
};

