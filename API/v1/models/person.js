'use strict'

var mongoose = require('mongoose')

var personSchema = {
    linkedinId: {
        type: Number
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
        type: [{
            id: Number,
            title: String,
            summary: String
        }]
    },
    educations: {
        type: [{
            id: Number,
            schoolName: String,
            fieldOfStudy: String
        }]
    }
}

var Person = mongoose.model('Person', personSchema, 'people')

module.exports = Person
