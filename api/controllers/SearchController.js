/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req, res){
        return res.view('search/index')
    },

    find: function(req, res){
        var searchItem = req.param('item');

        if(searchItem){

            Entidade.find({nome: { 'contains': searchItem}}).exec(function(err, result){
                console.log(result);

                if(searchItem === undefined) return res.notFound();

                if (err) return next(err);

                return res.view('search/search', {result: result});
            }) 
        }
    },

    findAll: function(req, res){
        Entidade.find().exec(function(err, result){
            console.log(result);
            return res.view('search/search', {result: result});
        }) 
    }
};