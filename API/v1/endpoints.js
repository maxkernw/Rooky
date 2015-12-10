'use strict';
var endpoints = {};
var documentation = require('./handlers/documentation');
var person = require('./handlers/person');

endpoints.ping = {
    url: '/ping',
    method: 'get',
    middleware: [],
    description: 'Serve me a pingpong ball and check if I will send something back',
    expectedInput: 'none',
    expectedOutput: 'Response saying pong',
    handerName: 'none',
    handler: function(req, res) {
        res.status(200).send('pong');
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
        documentation.getDocs(req, res, endpoints);
    }
}

endpoints.getAllUsers = {
    url: '/v1/people',
    method: 'get',
    middleware: [],
    description: '',
    expectedInput: '',
    expectedOutput: '',
    handlerName: 'findAll',
    handler: function(req, res) {
        person.findAll(req, res);
    }
}

endpoints.createUser = {
    url: '/v1/people',
    method: 'post',
    middleware: [],
    description: '',
    expectedInput: '',
    expectedOutput: '',
    handlerName: 'create',
    handler: function(req, res) {
        person.create(req, res)
    }
}

endpoints.getUser = {
    url: '/v1/people/:id',
    method: 'get',
    middleware: [],
    description: '',
    expectedInput: '',
    expectedOutput: '',
    handlerName: '',
    handler: function(req, res) {
        person.findById(req, res)
    }
}

endpoints.updateUser = {
    url: '/v1/people/:id',
    method: 'put',
    middleware: [],
    description: '',
    expectedInput: '',
    expectedOutput: '',
    handlerName: '',
    handler: function(req, res) {
        person.update(req, res)
    }
}

endpoints.deleteUser = {
    url: '/v1/people/:id',
    method: 'delete',
    middleware: [],
    description: '',
    expectedInput: '',
    expectedOutput: '',
    handlerName: '',
    handler: function(req, res) {
        person.delete(req, res)
    }
}
module.exports = endpoints;
