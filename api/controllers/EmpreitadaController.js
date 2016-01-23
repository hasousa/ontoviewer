/**
 * Empreitada
 * @description :: Server-side logic for managing contratoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: function(req, res){
        var nomeEntidade= req.param('nome');

        if(nomeEntidade != undefined){
            Entidade.findOne({nome: nomeEntidade}).exec(function(err, entidade){
                if(entidade != undefined){
                    Empreitada.find({investidor: entidade.id }).populateAll().exec(function(err, empreitadas){
                        return res.view('empreitada/empreitada', {layout: 'content_layout', empreitadas: empreitadas, entidade: entidade});  
                    })    
                }else{
                    return res.view(404); //return 404 if no entidade found
                }
            })
        }else{
            return res.view(404); //return 404 if nomeEntidade is undefined
        }
    }
};