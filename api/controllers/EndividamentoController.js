/**
 * EndividamentoController
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
                    Endividamento.find({or : [
                        {credor: entidade.id },
                        {devedor: entidade.id }
                    ]}).populateAll().exec(function(err, endividamentos){
                        return res.view('endividamento/endividamento', {layout: 'content_layout', endividamentos: endividamentos, entidade:entidade, filtro: field});  
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
                    Endividamento.find({or : [
                        {credor: entidade.id },
                        {devedor: entidade.id }
                    ], tipo: field}).populateAll().exec(function(err, endividamentos){
                        return res.view('endividamento/endividamento', {layout: 'content_layout', endividamentos: endividamentos, entidade:entidade, filtro: field});  
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