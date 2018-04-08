angular.module('MyApp')
.controller('CreateCtrl', function($scope, $location, $window, $auth, Query) {
  
  $scope.IsVisible = true;
  $scope.IsCourse1Visible = true;

  $scope.ShowHide = function () {
      //If DIV is visible it will be hidden and vice versa.
      $scope.IsVisible = $scope.IsVisible ? false : true;
  }



  $scope.setShow = function(showVal) {
    $scope.show = false;
  };


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


  $scope.getAllCourses = function() {
    Query.getAllCourses()
      .then(function(response) {
        $scope.courses = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.courses = {
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

  $scope.getDepartments = function() {
    Query.getDepartments()
      .then(function(response) {
        $scope.departments = {
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

  $scope.getMinors = function(sFaculty) {
    Query.getMinors(sFaculty)
      .then(function(response) {
        $scope.minors = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.minors = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
  };

  $scope.getConcentrations = function(sFaculty, sMaj) {
    Query.getConcentrations(sFaculty, sMaj)
      .then(function(response) {
        $scope.concentrations = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.concentrations = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
  };

    $scope.setClickedRow = function(index){
      $scope.selectedRow = index;
    }

    $scope.updateRows = function(index, email, dept_name, course_num){
      $scope.courses.success.splice(index, 1);

      Query.putCourseTaken(email, dept_name, course_num)
      .then(function(response) {
        $scope.courseTaken = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.courseTaken = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });

    }
   
    $scope.nextPage = function(email, faculty, major, minor, concentration){

      if (concentration == null)
      {
        concentration = " None"
      }

      if (minor == null)
      {
        minor = " None"
      }

      Query.putHasMajor(email, faculty, major, concentration)
      .then(function(response) {
        $scope.hMajor = {
          success: (response.data)
        };
      });
      

      Query.putHasMinor(email, faculty, minor)
      .then(function(response) {
        $scope.hMinor = {
          success: (response.data)
        };
      })
      .catch(function(response) {
        $scope.hMinor = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });

    }

    $scope.deleteUser = function(index, email) {
      console.log("index: " + index + "Email: " + email + "\n");
      $scope.users.success.splice(index, 1);
  
      Query.deleteUser(email)
        .then(function(response) {
          $scope.userD = {
            success: (response.data)
          };
        })
        .catch(function(response) {
          $scope.userD = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.makeAdmin = function(index, email) {
      console.log("index: " + index + "Email: " + email + "\n");
      $scope.users.success[index].access_lvl = 1;
  
      Query.makeAdmin(email)
        .then(function(response) {
          $scope.userA = {
            success: (response.data)
          };
        })
        .catch(function(response) {
          $scope.userA = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.addCourse = function(number, dept_name, name, description, avgrade) { 
      
      console.log(number);
      console.log(dept_name);
      console.log(name);
      console.log(description);
      console.log(avgrade);

      $scope.IsCourse1Visible = $scope.IsCourse1Visible ? false : true;

      Query.addCourse(number, dept_name, name, description, avgrade)
        .then(function(response) {
          $scope.courseAdd = {
            success: (response.data)
          };
        })
        .catch(function(response) {
          $scope.courseAdd = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };
    

    
  $scope.response = { text: [ 'hello', 'world'] };  


});
