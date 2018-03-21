angular.module('MyApp')
.controller('CreateCtrl', function($scope, $location, $window, $auth, Query) {
  
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  $scope.getUsers = function() {
    Query.getUsers()
      .then(function(response) {
        $scope.users = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.users = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
  };

  $scope.response = { text: [ 'hello', 'world'] };  
  

});
