'use strict';

/**
* @ngdoc function
* @name siteApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the siteApp
*/
angular.module('siteApp')
.controller('MainCtrl', function ($scope,$http) {
  var app = this;
  app.user = {};


  function onLinkedInLoad() {
    IN.Event.on(IN, "auth", onLinkedInAuth);
  }

  // 2. Runs when the viewer has authenticated
  function onLinkedInAuth() {
    IN.API.Profile("me").result(displayResult);
  }
  app.onLogin = function() {

    IN.API.Profile("me").fields('email-address','id','firstName','lastName','picture-url','headline').result(app.displayResult);
  };
  app.displayResult = function (profiles) {
    var member = profiles.values[0];
    var name = member.firstName + ' ' + member.lastName;
    app.displayResult = profiles;
    app.user.id = member.id;
    app.user.headline = member.headline;
    app.user.name = name;
    app.user.img = member.pictureUrl;
    app.user.email = member.emailAddress;
    $scope.$apply();
  };
  app.onLogout = function(){
    IN.User.logout();
    app.user = {};
  };

  app.getCommitData = function() {
      IN.API.Profile("me").fields(
              [ "id", "firstName", "lastName", "pictureUrl",
                      "publicProfileUrl","email-address","headline" ]).result(function(result) {
          //set the model
          console.log();

          $scope.$apply(function() {
              $scope.jsondata = result.values[0];
              var member = result.values[0];
              app.user.id = member.id;
              app.user.headline = member.headline;
              app.user.firstName = member.firstName;
              app.user.lastName = member.lastName;
              app.user.img = member.pictureUrl;
              app.user.email = member.emailAddress;
              app.fetched = true;

          });
      }).error(function(err) {
          $scope.$apply(function() {
              $scope.error = err;
          });
      });
  };
  app.addToDatabase = function(email,firstName,lastName,id,skills,headline,img){
     var person = {};
     console.log(email + ' ' + firstName + ' ' + lastName + ' ' +id+  ' ' + skills);
     person.firstName = firstName;
     person.lastName = lastName;
     person.email = email;
     person.headline = headline;
     person.img = img;
     person.linkedinId = id;
     person.skills = skills;

     $http.post('http://localhost:3000/v1/people',person);
   };

 });
