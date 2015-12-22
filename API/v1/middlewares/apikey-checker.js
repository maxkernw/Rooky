'use strict';
var Users = require('../models/apiusers')

module.exports = function(req, res, next) {
    var key = req.query.key
    if (!key){
        res.status(403).send('Provide me an api key and I\'ll give you access.')
        return false
    }
    Users.findOne({key: key}, function(err, foundKey) {
        if (!foundKey) {
            res.status(403).send('Please provide valid api key.')
            return false
        }
        next()
    })
}