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

  $scope.getFaculties = function() {
    Query.getFaculties()
      .then(function(response) {
        $scope.faculties = {
          success: (response.data)
        };
      })
      .then(function(response) {
        //$scope.selectedFaculty = $scope.faculties.success[0];
      })

      .catch(function(response) {
        $scope.faculties = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
  };

  $scope.getMajors = function(sFaculty) {
    Query.getMajors(sFaculty)
      .then(function(response) {
        $scope.majors = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.majors = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
  };

  $scope.getConcentrations = function(sFaculty) {
    Query.getConcentrations(sFaculty)
      .then(function(response) {
        $scope.concentrations = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.majors = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
  };

  $scope.response = { text: [ 'hello', 'world'] };  


});
