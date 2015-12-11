'use strict'

var mongoose = require('mongoose')

var personSchema = {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
}
var Person = mongoose.model('Person', personSchema, 'people')

module.exports = Person
