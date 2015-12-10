var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var v1 = require('./v1');

var app = express();
app.use(cors());
app.use(v1);
app.listen(3000);
console.log('Server started on port 3000');
