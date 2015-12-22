'use strict';
var authController = {}
var jwt = require('jsonwebtoken');
var Person = require('../models/Person')
var secret = require('../config/secret')
var bcrypt = require('bcrypt');

authController.login = function(callback, body) {
    var response;
    Person.findOne({email: body.email}, function(err, foundUser) {
        if (!foundUser) {
            response = {success: false, message: 'Authentication failed. User not found.'}
            callback(err, response)
            return false
        }
        compare(body.password, foundUser, callback)
    }).select('+password')
};

function compare(password, user, callback) {
    var response = {success: false, message: 'Authentication failed. Password is incorrect.'}

    bcrypt.compare(password, user.password, function(err, res) {
        if (err) throw err
        if (res) {
            var token = jwt.sign({
                id: user.linkedinId,
                user: user.email
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
    })
}

module.exports = authController