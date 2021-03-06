'use strict'
var person = {}
var controller = require('../controllers/personController')

person.create = function(req, res) {
    controller.create(
      function(err, item) {
          if (err) return res.status(400).send(err);

          res.status(200).location('v1/people/' + item._id).send('Created' + item);
      },
      req.body)
}

person.findAll = function(req, res) {
    controller.findAll(
      function(err, item) {
          if (err) res.status(400).send(err)

          res.status(200).send(item)
      },
      req.query.select)
}

person.findById = function(req, res) {
    controller.findById(
      function(err, item) {
          if (err) res.status(400).send(err)

          res.status(200).send(item)
      },
      req.params.id)
}

person.update = function(req, res) {
    controller.update(
      function(err, doc) {
          if (err) return res.status(400).send(err)

          res.status(200).send(doc)
      },
      req.body,
      req.params.id)
}

person.delete = function(req, res) {
    controller.delete(
      function(err, doc) {
          if (err) return res.status(400).send('Error ' + err)

          res.status(204).send();
      },
      req.params.id)
}

module.exports = person
