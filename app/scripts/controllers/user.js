'use strict';

angular.module('siteApp').controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$routeParams', '$http'];
function UserCtrl($routeParams, $http) {
    var vm = this;
    vm.user = {};

    $http.get('http://localhost:3000/v1/people/' + $routeParams.id).success(function(result) {
        vm.user = result;
        console.log(vm.user);
    });
}
