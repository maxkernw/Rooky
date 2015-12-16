'use strict'
var bodyParser = require('body-parser')
var cors = require('cors')
var express = require('express')
var mongoose = require('mongoose')
var jwt = require('jsonwebtoken');
var config = require('./config');

var v1 = require('./v1/')
var app = express()

app.set('superSecret', config.secret);
mongoose.connect(config.database)
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())
app.use(v1)

app.listen(3000, function(e) {
    console.log('listening')
})

module.exports = app;
