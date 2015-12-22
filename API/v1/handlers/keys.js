'use strict'
var User = require('../models/apiusers')
var users = {}

users.create = function(req, res) {
    var user = new User({
        email: req.body.email,
        key: createKey()
    })
    user.save(function(err, item) {
        if (err)throw err
        res.status(201).send(item)
    })
}

function createKey(){
    return Math.random().toString(36).replace(/[^a-z1-9]+/, '').substr(0, 15);

}

module.exports = users
