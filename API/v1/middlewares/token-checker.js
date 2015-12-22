'use strict';
var jwt = require('jsonwebtoken');
var secret = require('../config/secret')

var checkToken = function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }

    jwt.verify(token, secret(), function(err, decoded) {
        if (err) {
            return res.status(403).send({
                success: false,
                message: 'Failed to authenticate token.'
            });
        }
        req.decoded = decoded;
        next();
    });
}

module.exports = checkToken