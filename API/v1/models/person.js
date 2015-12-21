'use strict'

var mongoose = require('mongoose')

var personSchema = {
    linkedinId: {
        type: String
    },
    password: {
        type: String
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
    },
    timeSpan: {
        type: [{
            start: Date,
            end: Date
        }]
    },
    created_at: Date,
    updated_at: Date
}
var Person = mongoose.model('Person', personSchema, 'people')

module.exports = Person
