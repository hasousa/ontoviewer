/**
 * InvestimentoController
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
                    Investimento.find({or : [
                        {parceiro_publico: entidade.id },
                        {parceiro_privado: entidade.id },
                        {participante: entidade.id},
                        {participada: entidade.id},
                        {investidor: entidade.id}
                    ]}).populateAll().exec(function(err, investimentos){
                        return res.view('investimento/investimento', {layout: 'content_layout', investimentos: investimentos, entidade:entidade, filtro: field});  
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
                    Investimento.find({or : [
                        {parceiro_publico: entidade.id },
                        {parceiro_privado: entidade.id },
                        {participante: entidade.id},
                        {participada: entidade.id},
                        {investidor: entidade.id}
                    ], tipo: field}).populateAll().exec(function(err, investimentos){
                        return res.view('investimento/investimento', {layout: 'content_layout', investimentos: investimentos, entidade:entidade, filtro: field});  
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