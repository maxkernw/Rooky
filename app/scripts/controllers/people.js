'use strict';

angular.module('siteApp')
.controller('PeopleCtrl', ['$http', function ($http) {
  var app = this;

  $http.get('http://localhost:3000/v1/people/?select=firstName').success(function(result){
    app.people = result;
  });

  app.selectPerson = function (person){
    var url = 'http://localhost:3000/v1/people/'+person.firstName;
    $http.get(url).success(function(person){
      console.log(url + person.firstName);
      app.selectedPerson = person;
      app.selectedPerson.fullName = person.firstName + " " + person.lastName;
      app.selectedPerson.extra = person.email;
      app.selectedPerson.click = true;
    });
  };

  app.postUser = function (person){
    $http.post('http://localhost:3000/v1/people',person);
    window.location.reload();
  };

  app.deleteUser = function (person){
    $http.delete('http://localhost:3000/v1/people/'+person._id).success(function(){
      window.location.reload();
      console.log('Success');
    });
  };
}]);
