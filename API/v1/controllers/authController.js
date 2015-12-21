'use strict';
var authController = {}
var jwt = require('jsonwebtoken');
var Person = require('../models/Person')
var secret = require('../config/secret')

authController.login = function(callback, body) {
    Person.findOne({email: body.email}, function(err, foundUser) {
        if (err) throw err
        var response = {success: false, message: 'Authentication failed. User not found.'}
        if (foundUser) {
            response = {success: false, message: 'Authentication failed. Wrong password.'}
            if (foundUser.password === body.password) {
                var token = jwt.sign(foundUser, secret(), {
                    expiresIn: 1440
                });
                response = {
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                }
            }
        }
        callback(err, response)
    })
};

module.exports = authController

