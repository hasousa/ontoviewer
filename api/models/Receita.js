module.exports = {

    attributes: {
        tipo: {type: 'string',
               enum: ['imposto', 'subsidio_recebido', 'tarifa', 'taxa', 'transferencia_recebida']},
        ano:{type: 'string'},
        montante:{type: 'string'},
        fundamento:{type: 'string'},
        pagador: {model: 'entidade'},
        receptor: {model: 'entidade'}
    }
};