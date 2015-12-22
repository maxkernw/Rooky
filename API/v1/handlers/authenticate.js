'use strict'
var authenticate = {}
var controller = require('../controllers/authController')

authenticate.login = function(req, res) {
    controller.login(
      function(err, response) {
          if (err) res.status(400).send(err);
          if (response.success) res.status(200).send(response)
          if (!response.success)res.status(400).send(response)
      },
      req.body)
}

module.exports = authenticate
