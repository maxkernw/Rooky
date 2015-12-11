'use strict';

angular.module('siteApp').controller('PeopleCtrl', PeopleCtrl);

function PeopleCtrl($http){
  var app = this;

  $http.get('http://localhost:3000/v1/people/').success(function(result){
    app.result = result;
  });

  app.selectPerson = function (person){
    var url = 'http://localhost:3000/v1/people/'+person._id;
    $http.get(url).success(function(person){
      app.selectedPerson = person;
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

}
