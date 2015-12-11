'use strict';

/**
* @ngdoc function
* @name siteApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the siteApp
*/
angular.module('siteApp')
.controller('MainCtrl',['$http', function ($http) {
  var app = this;
  app.heppe = {};


  app.onLinkedInLoad = function() {
    IN.UI.Authorize().place();
    IN.Event.on(IN, "auth", function () { app.onLogin(); });
    IN.Event.on(IN, "logout", function () { app.onLogout(); });
  };

  app.onLogin = function() {
    IN.API.Profile("me").fields('email-address','id','firstName','lastName','picture-url','headline').result(app.displayResult);
  }
  app.displayResult = function (profiles) {
    var member = profiles.values[0];
    var name = member.firstName + ' ' + member.lastName;
    app.displayResult = profiles;
    app.heppe.id = member.id;
    app.heppe.headline = member.headline;
    app.heppe.name = name;
    app.heppe.img = member.pictureUrl;
    app.heppe.email = member.emailAddress;
    console.log(member);
    $scope.$apply();
  }
  app.onLogout = function(){
    IN.User.logout();
    app.heppe = {};
  }

  app.getCommitData = function() {
      IN.API.Profile("me").fields(
              [ "id", "firstName", "lastName", "pictureUrl",
                      "publicProfileUrl","email-address","headline" ]).result(function(result) {
          //set the model
          $scope.$apply(function() {
              $scope.jsondata = result.values[0];
              var member = result.values[0];
              app.heppe.id = member.id;
              app.heppe.headline = member.headline;
              app.heppe.name = member.firstName + ' ' + member.lastName;
              app.heppe.img = member.pictureUrl;
              app.heppe.email = member.emailAddress;

          });
      }).error(function(err) {
          $scope.$apply(function() {
              $scope.error = err;
          });
      });
  };

  app.addToDatabase = function(username,mail){
    var person = {};
    person.firstName = username;
    person.lastName = username;
    person.email = mail;
    $http.post('http://localhost:3000/v1/people',person);

  }
}]);
