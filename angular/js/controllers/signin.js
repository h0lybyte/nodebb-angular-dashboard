'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('https://kbve.com/forum/login', {username: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        console.log(response);
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;