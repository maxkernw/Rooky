'use strict'
var endpoints = {}
var documentation = require('./handlers/documentation')
var keyGenerator = require('./handlers/keys')
var person = require('./handlers/person')
var authenticate = require('./handlers/authenticate')
var tokenChecker = require('./middlewares/token-checker')
var requireApiKey = require('./middlewares/apikey-checker')

endpoints.register = {
    url: '/v1/register',
    method: 'post',
    middleware: [],
    description: 'Will register a user for an API key.',
    expectedInput: '',
    expectedOutput: 'Random API-key string',
    handlerName: '',
    handler: function(req, res) {
        keyGenerator.create(req, res)
    }
}

endpoints.auth = {
    url: '/v1/authenticate',
    method: 'post',
    middleware: [requireApiKey],
    description: 'Authenticate a user',
    expectedInput: 'Email and password',
    expectedOutput: 'A token',
    handlerName: 'login',
    handler: function(req, res) {
        authenticate.login(req, res)
    }
}

endpoints.documentation = {
    url: '/v1/documentation/:format?',
    method: 'get',
    middleware: [requireApiKey],
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
    middleware: [requireApiKey],
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
    middleware: [requireApiKey],
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
    middleware: [requireApiKey],
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
    middleware: [requireApiKey],
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
    middleware: [requireApiKey],
    description: 'Deletes a user with the specified id',
    expectedInput: 'Id',
    expectedOutput: 'A reasonable HTTP status code',
    handlerName: 'delete',
    handler: function(req, res) {
        person.delete(req, res)
    }
}

module.exports = endpoints
