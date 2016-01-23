/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

    'get /': {
        controller: 'SearchController',
        action: 'index'
    },

    'get /find/:item':{
        controller: 'SearchController',
        action: 'find'
    },
    
    'get /find':{
        controller: 'SearchController',
        action: 'findAll'
    },
    
    'get /entidade/:nome':{
        controller: 'EntidadeController',
        action: 'loadData'
    },
    
    'get /contrato/:nome':{
        controller: 'ContratoController',
        action: 'list'
    },
    
    'get /contrato/:nome/filter/:field':{
        controller: 'ContratoController',
        action: 'filter'
    },
    
    'get /investimento/:nome':{
        controller: 'InvestimentoController',
        action: 'list'
    },
    
    'get /investimento/:nome/filter/:field':{
        controller: 'InvestimentoController',
        action: 'filter'
    },
    
    'get /receita/:nome':{
        controller: 'ReceitaController',
        action: 'list'
    },
    
    'get /receita/:nome/filter/:field':{
        controller: 'ReceitaController',
        action: 'filter'
    },
    
    'get /despesa/:nome':{
        controller: 'DespesaController',
        action: 'list'
    },
    
    'get /despesa/:nome/filter/:field':{
        controller: 'DespesaController',
        action: 'filter'
    },
    
    'get /endividamento/:nome':{
        controller: 'EndividamentoController',
        action: 'list'
    },
    
    'get /endividamento/:nome/filter/:field':{
        controller: 'EndividamentoController',
        action: 'filter'
    },
    
    'get /patrimonio/:nome':{
        controller: 'PatrimonioController',
        action: 'list'
    },
    
    'get /patrimonio/:nome/filter/:field':{
        controller: 'PatrimonioController',
        action: 'filter'
    },
    
    'get /empreitada/:nome':{
        controller: 'EmpreitadaController',
        action: 'list'
    },
    
    'get /litigio/:nome':{
        controller: 'LitigioController',
        action: 'list'
    },
    
    'get /litigio/:nome/filter/:field':{
        controller: 'LitigioController',
        action: 'filter'
    }

    /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
