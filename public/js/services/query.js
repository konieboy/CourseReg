angular.module('MyApp')
  .factory('Query', function ($http) {
    return {
      getUsers: function () {
        return $http.get('/getAllUsers');
      },

      getAllCourses: function () {
        return $http.get('/getAllCourses');
      },

      getFaculties: function () {
        return $http.get('/getFaculties');
      },
      getDepartments: function () {
        return $http.get('/getDepartments');
      },
      getMajors: function (faculty) {

        console.log(faculty);
        return $http.get('/getMajors', {
          params: {
            faculty: faculty
          }
        })
      },

      getMinors: function (faculty) {

        console.log(faculty);
        return $http.get('/getMinors', {
          params: {
            faculty: faculty
          }
        })
      },

      deleteUser: function (email) {
        console.log(email);
        return $http.get('/deleteUser', {
          params: {
            email: email
          }
        })
      },

      makeAdmin: function (email) {
        console.log(email);
        return $http.get('/makeAdmin', {
          params: {
            email: email
          }
        })
      },
      
      getConcentrations: function (faculty, major) {
        console.log(faculty);
        console.log(major);
        return $http.get('/getConcentrations', {
          params: {
            faculty: faculty,
            major: major
          }
        })
      },

      putCourseTaken: function (email, dept_name, course_num) {
        console.log(email);
        console.log(dept_name);
        console.log(course_num);

        // This should be a put request but fuck it
        return $http.get('/putCourseTaken', {
          params: {
            email: email,
            dept_name: dept_name,
            course_num: course_num

          }
        })
      },

      putHasMajor: function (email, faculty, major, concentration) {
        console.log(email);
        console.log(faculty);
        console.log(major);
        console.log(concentration);

        // This should be a put request but fuck it
        return $http.get('/putHasMajor', {
          params: {
            email: email,
            faculty: faculty,
            major: major,
            concentration: concentration
          }
        })
      },

        addCourse: function (number, dept_name, name, description, avgrade) {
        console.log(number);
        console.log(dept_name);
        console.log(name);
        console.log(description);
        console.log(avgrade);

        // This should be a put request but fuck it
        return $http.get('/addCourse', {
          params: {
            number: number,
            dept_name: dept_name,
            name: name,
            description: description,
            avgrade: avgrade
          }
        })
      },

      
      putHasMinor: function (email, faculty, minor) {
        console.log(email);
        console.log(faculty);
        console.log(minor);

        // This should be a put request but fuck it
        return $http.get('/putHasMinor', {
          params: {
            email: email,
            faculty: faculty,
            minor: minor,
          }
        })
      }
    };
  });