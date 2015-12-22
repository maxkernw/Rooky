'use strict'
var mongoose = require('mongoose')

var apiusersSchema = {
    email: {
        type: String,
        required: true
    },
    key: {
        type: String
    }
}

var User = mongoose.model('User', apiusersSchema)

module.exports = User
