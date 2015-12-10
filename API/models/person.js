var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simple');

var personSchema = {
  firstName:String,
  lastName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    unique:true,
    required:true
  }
}
var Person = mongoose.model('Person',personSchema,'people');

module.exports = Person;
