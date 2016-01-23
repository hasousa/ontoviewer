/**
 * ContratoController
 *
 * @description :: Server-side logic for managing contratoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: function(req, res){
        var nomeEntidade= req.param('nome');
        var field='todos';

        if(nomeEntidade != undefined){
            Entidade.findOne({nome: nomeEntidade}).exec(function(err, entidade){

                if(entidade != undefined){
                    Contrato.find({or : [
                        {adjudicatario: entidade.id },
                        {adjudicante: entidade.id }
                    ]}).populateAll().exec(function(err, contratos){
                        return res.view('contrato/contratos', {layout: 'content_layout', contratos: contratos, entidade:entidade, filtro: field});  
                    })
                }else{
                    return res.view(404);
                }
            })
        }else{
            return res.view(404);
        }
    },
    
    filter: function(req, res){
        var nomeEntidade= req.param('nome');
        var field= req.param('field');

        if(nomeEntidade != undefined){
            Entidade.findOne({nome: nomeEntidade}).exec(function(err, entidade){

                if(entidade != undefined){
                    Contrato.find({or : [
                        {adjudicatario: entidade.id },
                        {adjudicante: entidade.id }
                    ], tipo: field}).populateAll().exec(function(err, contratos){
                        return res.view('contrato/contratos', {layout: 'content_layout', contratos: contratos, entidade:entidade, filtro: field});  
                    })
                }else{
                    return res.view(404);
                }
            })
        }else{
            return res.view(404);
        }
    } 
};