module.exports = {
    goto: function(req, res){
        var tag= req.param('tag');

        return res.view('help/help', {layout: 'layout', elementid: tag});
    }
};