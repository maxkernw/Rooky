'use strict'
var authenticate = {}
var controller = require('../controllers/authController')

authenticate.login = function(req, res) {
    controller.login(
      function(err, response) {
          if (err) return res.status(400).send(err);
          if (response.success) res.status(200).send(response)
          res.status(400).send(response)
      },
      req.body)
}

module.exports = authenticate