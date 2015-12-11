'use strict'
var endpoints = {}
var documentation = require('./handlers/documentation')
var person = require('./handlers/person')

endpoints.ping = {
    url: '/ping',
    method: 'get',
    middleware: [],
    description: 'Serve me a pingpong ball and check if I will send something back',
    expectedInput: 'none',
    expectedOutput: 'Response saying pong',
    handerName: 'none',
    handler: function(req, res) {
        res.status(200).send('pong')
    }
}

endpoints.documentation = {
    url: '/v1/documentation/:format?',
    method: 'get',
    middleware: [],
    description: 'Get the documentation for the apit in the specified format. Supported formats: JSON',
    expectedInput: 'none',
    expectedOutput: 'The documentation of the API',
    handlerName: 'documentation',
    handler: function(req, res) {
        documentation.getDocs(req, res, endpoints)
    }
}

endpoints.getAllUsers = {
    url: '/v1/people',
    method: 'get',
    middleware: [],
    description: 'Returns all users from the database',
    expectedInput: 'none',
    expectedOutput: 'A list of users in JSON format',
    handlerName: 'findAll',
    handler: function(req, res) {
        person.findAll(req, res)
    }
}

endpoints.createUser = {
    url: '/v1/people',
    method: 'post',
    middleware: [],
    description: 'Will create a user',
    expectedInput: 'firstName : lastName : email',
    expectedOutput: 'A 201 created status with location header',
    handlerName: 'create',
    handler: function(req, res) {
        person.create(req, res)
    }
}

endpoints.getUser = {
    url: '/v1/people/:id',
    method: 'get',
    middleware: [],
    description: 'Will return a single user with the specified id',
    expectedInput: 'Id which user to fetch',
    expectedOutput: 'A user in JSON format',
    handlerName: 'findById',
    handler: function(req, res) {
        person.findById(req, res)
    }
}

endpoints.updateUser = {
    url: '/v1/people/:id',
    method: 'put',
    middleware: [],
    description: 'Updates a user with the input from the body',
    expectedInput: 'firstName | lastName | email',
    expectedOutput: 'A 201 created status with location header',
    handlerName: '',
    handler: function(req, res) {
        person.update(req, res)
    }
}

endpoints.deleteUser = {
    url: '/v1/people/:id',
    method: 'delete',
    middleware: [],
    description: 'Deletes a user with the specified id',
    expectedInput: 'Id',
    expectedOutput: 'A reasonable HTTP status code',
    handlerName: 'delete',
    handler: function(req, res) {
        person.delete(req, res)
    }
}

module.exports = endpoints
