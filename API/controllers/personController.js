var Person = require('../models/person.js');
var personController = {};


personController.findAll = function(callback,select){
  Person.find().select(select).exec(function(err, item){
    callback(err, item);
  });
}
personController.findById = function(callback,select){
  Person.findById(select, function(err,item){
      callback(err,item);
  });
}

personController.create = function(callback,model){
    var user = new Person(model);
    user.save(function(err,item){
      callback(err,item);
    });
}

personController.findPerson = function(callback,id){
  Person.findOne({firstName:id}, function(err,item){
    callback(err,item);
  });
}




module.exports = personController;
