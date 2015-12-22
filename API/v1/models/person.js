'use strict'
var mongoose = require('mongoose')

var personSchema = {
    linkedinId: {
        type: String
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    img: {
        type: String
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
            title: String,
            summary: String
        }]
    },
    educations: {
        type: [{
            schoolName: String,
            fieldOfStudy: String
        }]
    },
    timeSpan: {
        type: [{
            start: Date,
            end: Date
        }]
    }
}

var Person = mongoose.model('Person', personSchema)

module.exports = Person
