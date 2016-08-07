'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {

    $scope.user = {};
    $scope.authError = null;
    $scope.login = function login() {
      $scope.authError = null;
      
      
      var req = {
        method: 'GET',
        url: 'https://kbve.com/forum/api/config'
      };
      
      $http(req)
      .then(function(res) {
        var csrf = res.csrf_token;
        
        req = {
          method: 'POST',
          url: 'https://kbve.com/forum/api/ns/login',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf
          },
          data: {
            username: $scope.user.email,
            password: $scope.user.password
          }
        };
        
        $http(req)
        .then(function(res) {
          console.log(res);
        })
      });
    };
    
}]);