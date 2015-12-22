'use strict';
var Users = require('../models/apiusers')

module.exports = function(req, res, next) {
    var key = req.get('x-key');
    Users.findOne({key: key}, function(err, foundUser) {
        if (!foundUser) {
            res.status(403).send()
            return false
        }
        next()
    })
}