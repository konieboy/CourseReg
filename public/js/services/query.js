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

      getAllMajors: function () {

        return $http.get('/getAllMajors');
      },

      getAllProfs: function () {
        return $http.get('/getAllProfs');
      },

      getTakingCourses: function (email) {
        console.log(email);


        return $http.get('/getTakingCourses', {
          params: {
            email: email
          }
        })
      },

      deleteProf: function (name) {
        console.log(name);
        return $http.get('/deleteProf', {
          params: {
            name: name
          }
        })
      },

      addTeaches: function (prof_name, dept_name, course_num) {
        console.log(prof_name);
        console.log(dept_name);
        console.log(course_num);


        return $http.get('/addTeaches', {
          params: {
            prof_name: prof_name,
            dept_name: dept_name,
            course_num: course_num
          }
        })
      },

      putProf: function (profName,profRating,profStart) {
        
        console.log(profName);
        console.log(profRating);
        console.log(profStart);
          
        return $http.get('/putProf', {
          params: {
            profName:profName,
            profRating: profRating,
            profStart: profStart
          }
        })
      },

      getMajorCourses: function (major_name, grade, rating) {
        
        console.log(major_name);
        console.log(grade);
        console.log(rating);
          
        return $http.get('/getMajorCourses', {
          params: {
            major_name: major_name,
            grade: grade,
            rating: rating
          }
        })
      },   
      
      getConCourses: function (con_name, grade, rating) {
        
        console.log(con_name);
        console.log(grade);
        console.log(rating);
          
        return $http.get('/getConCourses', {
          params: {
            con_name: con_name,
            grade: grade,
            rating: rating
          }
        })
      },  
      
      getMinorCourses: function (minor_name, grade, rating) {
        
        console.log(minor_name);
        console.log(grade);
        console.log(rating);
          
        return $http.get('/getMinorCourses', {
          params: {
            minor_name: minor_name,
            grade: grade,
            rating: rating
          }
        })
      },    



      deleteTakingCourses: function (email, dept_name, number) {
        
        console.log(email);
        console.log(dept_name);
        console.log("Hello" + number);
          
        return $http.get('/deleteTakingCourses', {
          params: {
            email:email,
            dept_name: dept_name,
            number: number
          }
        })
      },
  
      deleteCourse: function (number, dept_name) {
        console.log("Hello" + number);
        console.log(dept_name);

        return $http.get('/deleteCourse', {
          params: {
            number: number,
            dept_name: dept_name
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

      getAllMinors: function () {
        return $http.get('/getAllMinors');
      },
      
      getAllConcentrations: function () {
        return $http.get('/getAllConcentrations');
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
      putCourseTaking: function (email, dept_name, course_num) {
        console.log(email);
        console.log(dept_name);
        console.log(course_num);

        // This should be a put request but fuck it
        return $http.get('/putCourseTaking', {
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

      putPreReq: function (dept_name, course_num, dept_name_of_prereq, course_num_of_prereq) {
        console.log(dept_name);
        console.log(course_num);
        console.log(dept_name_of_prereq);
        console.log(course_num_of_prereq);

        return $http.get('/putPreReq', {
          params: {
            dept_name: dept_name,
            course_num: course_num,
            dept_name_of_prereq: dept_name_of_prereq,
            course_num_of_prereq: course_num_of_prereq
          }
        })
      },

      setMajReq: function (major_name, dept_name, course_num) {
        console.log(major_name);
        console.log(dept_name);
        console.log(course_num);

        return $http.get('/setMajReq', {
          params: {
            major_name: major_name,
            dept_name: dept_name,
            course_num: course_num,
          }
        })
      },

      setMinReq: function (minor_name, dept_name, course_num) {
        console.log(minor_name);
        console.log(dept_name);
        console.log(course_num);

        return $http.get('/setMinReq', {
          params: {
            minor_name: minor_name,
            dept_name: dept_name,
            course_num: course_num,
          }
        })
      },

      putConcentrationReq: function (con_name, dept_name, course_num) {
        console.log(con_name);
        console.log(dept_name);
        console.log(course_num);

        return $http.get('/putConcentrationReq', {
          params: {
            con_name: con_name,
            dept_name: dept_name,
            course_num: course_num,
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