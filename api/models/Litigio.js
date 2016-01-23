module.exports = {

    attributes: {
        tipo: {type: 'string',
               enum: ['alvo', 'instaurado']},
        numero_processo: {type: 'string'},
        prazo_execucao: {type: 'string'},
        sentenca: {type: 'string'},
        acusador: {model: 'entidade'},
        reu: {model: 'entidade'}
    }
};