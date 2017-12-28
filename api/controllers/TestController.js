/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    index(req, res) {
        res.json({status: 'success', message: 'From index'});
    },
    
    one(req, res) {
        res.json({status: 'success', message: 'From one'});
    },
    
    create(req, res) {
        res.json({status: 'success', message: 'From create'});
    },
    
    update(req, res) {
        res.json({status: 'success', message: 'From update'});
    },
    
    delete(req, res) {
        res.json({status: 'success', message: 'From delete'});
    },
};

