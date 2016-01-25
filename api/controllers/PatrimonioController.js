/**
 * Patrimonio
 * @description :: Server-side logic for managing contratoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: function(req, res){
        var nomeEntidade= req.param('nome');

        if(nomeEntidade != undefined){
            Entidade.findOne({nome: nomeEntidade}).exec(function(err, entidade){
                if(entidade != undefined){
                    Patrimonio.find({proprietario: entidade.id }).populateAll().exec(function(err, imoveis){
                        AccoesPatrimonio.find({or : [
                            {comprador: entidade.id},
                            {vendedor: entidade.id},
                            {arrendante: entidade.id},
                            {arrendatário: entidade.id},
                            {cedente: entidade.id},
                            {cessionario: entidade.id}
                        ]}).populateAll().exec(function(err, accoes){
                            return res.view('patrimonio/patrimonio', {layout: 'content_layout', imoveis: imoveis, accoes: accoes, entidade: entidade});
                        })
                    })
                } else{
                    return res.view(404); //return 404 if no entidade found
                }
            })
        }else{
            return res.view(404); //return 404 if nomeEntidade is undefined
        }
    },


    filter: function(req, res){
        var nomeEntidade= req.param('nome');
        var field= req.param('field');

        if(nomeEntidade != undefined){
            Entidade.findOne({nome: nomeEntidade}).exec(function(err, entidade){
                if(entidade != undefined){
                    Patrimonio.find({proprietario: entidade.id}).populateAll().exec(function(err, imoveis){
                        AccoesPatrimonio.find({or : [
                            {comprador: entidade.id},
                            {vendedor: entidade.id},
                            {arrendante: entidade.id},
                            {arrendatário: entidade.id},
                            {cedente: entidade.id},
                            {cessionario: entidade.id}
                        ], tipo: field}).populateAll().exec(function(err, accoes){
                            return res.view('patrimonio/patrimonio', {layout: 'content_layout', imoveis: imoveis, accoes: accoes, entidade:entidade, filtro: field});
                        })
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