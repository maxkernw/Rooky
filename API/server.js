'use strict'
var bodyParser = require('body-parser')
var cors = require('cors')
var express = require('express')
var mongoose = require('mongoose')
var v1 = require('./v1/')

var app = express()

mongoose.connect('mongodb://localhost/simple')
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())
app.use(v1)

app.listen(3000, function() {
    console.log('On port 3000, listening..')
})