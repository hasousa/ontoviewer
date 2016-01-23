/**
* Empreitada.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        montante:{type: 'string'},
        objecto: {model: 'patrimonio'},
        investidor: {model: 'entidade'}
    }
};