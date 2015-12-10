var express = require('express');
app = express();
var bodyParser = require('body-parser');
var Person = require('../models/person.js');
var personController = require('../controllers/personController.js');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.route('/v1/people')
.get(function (req, res) {
    personController.findAll(function(err,item){
      if(err){
          res.status(400).send(err);
      }
      res.status(200).send(item);
    }, req.query.select);
})

.post(function (req, res) {
  personController.create(function(err,item){
    if(err){
      return res.status(400).send(err);
    }
    res.status(200).send('Created'+ item);
  },req.body);
})

app.route('/v1/people/:id')
.get(function(req,res){
  personController.findPerson(function(err,item){
    if(err){
      res.status(400).send(err)
    }
    res.status(200).send(item);
  },req.params.id);
})

.put(function (req, res) {
  Person.findById(req.params.id, function(err,doc){
    if(err){
      res.status(400).send(err);
    }
    doc.firstName = req.body.firstName;
    doc.lastName = req.body.lastName;
    doc.email = req.body.email;
    doc.save(function(err){
      if(err){
        return res.status(400).send(err);
      }
      return res.status(201).send('Updated ' + doc);
    });
  })
})

.delete(function (req, res) {
  Person.findById(req.params.id, function(err,doc){
    if(err){
      return res.status(400).send('Error ' + err)
    }
    doc.remove();
    return res.status(200).send('Deleted ' + doc);
  })
})

module.exports = app;
