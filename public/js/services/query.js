angular.module('MyApp')
  .factory('Query', function($http) {
    return {
      getUsers: function() {
        return $http.get('/getAllUsers');
      }
    };
  });