'use strict';
var authController = {}
var jwt = require('jsonwebtoken');
var Person = require('../models/Person')
var secret = require('../config/secret')
var bcrypt = require('bcrypt');

authController.login = function(callback, body) {
    Person.findOne({email: body.email}, function(err, foundUser) {
        if (err) throw err
        var response = {success: false, message: 'Authentication failed. User not found.'}
        if (foundUser) {
            response = {success: false, message: 'Authentication failed. Wrong password.'}
            bcrypt.compare(body.password, foundUser.password, function(err, res) {
                if (err) throw err
                if (res) {
                    var token = jwt.sign({
                        id: foundUser.linkedinId,
                        user: foundUser.email
                    }, secret(), {
                        expiresIn: 1440
                    });
                    response = {
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    }
                }
                callback(err, response)
            });
        }
    }).select('+password')
};

module.exports = authController