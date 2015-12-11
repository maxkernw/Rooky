'use strict'

var mongoose = require('mongoose')

var personSchema = {
    linkedinId: {
        type: Int
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    headline: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    skills: {
        type: []
    },
    threePastPositions: {
        type: []
    },
    educations: {
        type: []
    }
}

var Person = mongoose.model('Person', personSchema, 'people')

module.exports = Person
