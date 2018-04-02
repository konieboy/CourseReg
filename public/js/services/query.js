angular.module('MyApp')
  .factory('Query', function($http) {
    return {
      getUsers: function() {
        return $http.get('/getAllUsers');
      },
      getFaculties: function() {
        return $http.get('/getFaculties');
      },

      getMajors: function(faculty) {

        console.log(faculty);
        return $http.get('/getMajors', {
        params:  {faculty: faculty}
        })

       // return $http.get('/getMajors/');
      
      }

    };
  });


