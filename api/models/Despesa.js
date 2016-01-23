module.exports = {

    attributes: {
        tipo: {type: 'string',
               enum: ['extraordinaria', 'indemnizacao', 'subsidio_concedido', 'transferencia']},
        ano:{type: 'string'},
        montante:{type: 'string'},
        fundamento:{type: 'string'},
        pagador: {model: 'entidade'},
        receptor: {model: 'entidade'}
    }
};