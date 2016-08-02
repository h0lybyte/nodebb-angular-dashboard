'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      
            var req = {
              method: 'POST',
              
              url: 'https://kbve.com/forum/api/ns/login',
              
              headers: {
               'Content-Type' : 'application/json'
               },
              
              data: { 
                username: $scope.user.email, 
                password: $scope.user.password
                
              }
              
              
            }
      
            
      
      // Try to login
      $http(req)
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