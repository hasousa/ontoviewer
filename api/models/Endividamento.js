module.exports = {

    attributes: {
        tipo: {type: 'string',
               enum: ['divida_fornecedor', 'emprestimo']},
        data:{type: 'string'},
        estrutura_divida:{type: 'string'},
        duracao_emprestimo:{type: 'string'},
        amortizacao:{type: 'string'},
        natureza:{type: 'string'},
        montante:{type: 'string'},
        credor: {model: 'entidade'},
        devedor: {model: 'entidade'}
    }
};