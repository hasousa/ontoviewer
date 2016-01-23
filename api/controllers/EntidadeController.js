/**
 * EntidadeController
 *
 * @description :: Server-side logic for managing entidades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    loadData: function(req, res){
        var nomeEntidade= req.param('nome');

        if(nomeEntidade){

            Entidade.findOne({nome: nomeEntidade}).populateAll().exec(function(err, result){
                if(nomeEntidade === undefined) return res.notFound();

                if (err) return next(err);
                
                return res.view('entidade/entidade', {layout: 'content_layout', entidade: result});
            }) 
        }
    }
};

