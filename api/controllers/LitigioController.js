/**
 * LitigioController
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
                    Litigio.find({or : [
                        {acusador: entidade.id },
                        {reu: entidade.id }
                    ]}).populateAll().exec(function(err, litigios){
                        return res.view('litigio/litigio', {layout: 'content_layout', litigios: litigios, entidade:entidade, filtro: field});  
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
                    Litigio.find({or : [
                        {acusador: entidade.id },
                        {reu: entidade.id }
                    ], tipo: field}).populateAll().exec(function(err, litigios){
                        return res.view('litigio/litigio', {layout: 'content_layout', litigios: litigios, entidade:entidade, filtro: field});  
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