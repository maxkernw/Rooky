'use strict'
var personController = {}
var Person = require('../models/Person')

personController.findAll = function(callback, select) {
    Person.find().select(select).exec(function(err, item) {
        callback(err, item)
    })
}
personController.findById = function(callback, id) {
    Person.findById(id, function(err, item) {
        callback(err, item)
    })
}

personController.create = function(callback, model) {
    var user = new Person(model)
    user.save(function(err, item) {
        callback(err, item)
    })
}

personController.update = function(callback, data) {
    Person.findOne(data.id, function(err, doc) {
        doc.firstName = data.firstName
        doc.lastName = data.lastName
        doc.email = data.email
        doc.save()
        callback(err, doc)
    })
}

personController.delete = function(callback, id) {
    Person.findByIdAndRemove(id, null, function(err, doc) {
        doc.remove()
        callback(err, doc)
    })
}

module.exports = personController
