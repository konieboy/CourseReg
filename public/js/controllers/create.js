angular.module('MyApp')
  .controller('CreateCtrl', function ($scope, $location, $window, $auth, Query) {

    $scope.IsVisible = true;
    $scope.IsCourse1Visible = true;
    $scope.IsCourse2Visible = true;
    $scope.IsCourse3Visible = true;
    $scope.IsCourse4Visible = true;
    $scope.IsCourse5Visible = true;
    $scope.IsCourse6Visible = true;
    $scope.profRating = 3;
    $scope.classMark = 50;

    $scope.major;
    $scope.minor;
    $scope.con;

    $scope.setMajor = function (name) {
      //If DIV is visible it will be hidden and vice versa.
      $scope.major = name;
    }

    $scope.setMajor = function (name) {
      //If DIV is visible it will be hidden and vice versa.
      $scope.major = name;
    }

    $scope.setMinor = function (name) {
      //If DIV is visible it will be hidden and vice versa.
      $scope.minor = name;
    }

    $scope.setCon = function (name) {
      //If DIV is visible it will be hidden and vice versa.
      $scope.con = name;
    }

    $scope.ShowHide = function () {
      //If DIV is visible it will be hidden and vice versa.
      $scope.IsVisible = $scope.IsVisible ? false : true;
    }

    $scope.ShowCourse1 = function () {
      $scope.IsCourse1Visible = $scope.IsCourse1Visible ? false : true;
    }

    $scope.ShowCourse2 = function () {
      $scope.IsCourse2Visible = $scope.IsCourse2Visible ? false : true;
    }

    $scope.ShowCourse3 = function () {
      $scope.IsCourse3Visible = $scope.IsCourse3Visible ? false : true;
    }

    $scope.ShowCourse4 = function () {
      $scope.IsCourse4Visible = $scope.IsCourse4Visible ? false : true;
    }

    $scope.ShowCourse5 = function () {
      $scope.IsCourse5Visible = $scope.IsCourse5Visible ? false : true;
    }

    $scope.ShowCourse6 = function () {
      $scope.IsCourse6Visible = $scope.IsCourse6Visible ? false : true;
    }

    $scope.setShow = function (showVal) {
      $scope.show = false;
    };


    $scope.isAuthenticated = function () {
      return $auth.isAuthenticated();
    };

    $scope.getUsers = function () {
      Query.getUsers()
        .then(function (response) {
          $scope.users = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.users = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };


    $scope.getAllCourses = function () {
      Query.getAllCourses()
        .then(function (response) {
          $scope.courses = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.courses = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.deleteProf = function (index, name) {

      $scope.profs.success.splice(index, 1);

      Query.deleteProf(name)
        .then(function (response) {
          $scope.profNameD = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.profNameD = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getMinorCourses = function (minor_name, grade, rating) {

      Query.getMinorCourses(minor_name, grade, rating)
        .then(function (response) {
          $scope.minorCourses = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.minorCourses = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getConCourses = function (con_name, grade, rating) {


      Query.getConCourses(con_name, grade, rating)
        .then(function (response) {
          $scope.conCourses = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.conCourses = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getMajorCourses = function (major_name, grade, rating) {

      console.log(major_name);
      console.log(grade);
      console.log(rating);

      Query.getMajorCourses(major_name, grade, rating)
        .then(function (response) {
          $scope.majorCourses = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.majorCourses = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getAllProfs = function () {
      Query.getAllProfs()
        .then(function (response) {
          $scope.profs = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.profs = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getFaculties = function () {
      Query.getFaculties()
        .then(function (response) {
          $scope.faculties = {
            success: (response.data)
          };
        })
        .then(function (response) {
          //$scope.selectedFaculty = $scope.faculties.success[0];
        })

        .catch(function (response) {
          $scope.faculties = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getDepartments = function () {
      Query.getDepartments()
        .then(function (response) {
          $scope.departments = {
            success: (response.data)
          };
        })
        .then(function (response) {
          //$scope.selectedFaculty = $scope.faculties.success[0];
        })

        .catch(function (response) {
          $scope.faculties = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getMajors = function (sFaculty) {
      Query.getMajors(sFaculty)
        .then(function (response) {
          $scope.majors = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.majors = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getAllMajors = function () {
      Query.getAllMajors()
        .then(function (response) {
          $scope.allMajors = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.allMajors = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getMinors = function (sFaculty) {
      Query.getMinors(sFaculty)
        .then(function (response) {
          $scope.minors = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.minors = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getAllMinors = function () {
      Query.getAllMinors()
        .then(function (response) {
          $scope.allMinors = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.allMinors = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.putProf = function (profName, profRating, profStart) {
      console.log(profName);
      console.log(profRating);
      console.log(profStart);

      Query.putProf(profName, profRating, profStart)
        .then(function (response) {
          $scope.addedProf = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.addedProf = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };


    $scope.getConcentrations = function (sFaculty, sMaj) {
      Query.getConcentrations(sFaculty, sMaj)
        .then(function (response) {
          $scope.concentrations = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.concentrations = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getAllConcentrations = function () {
      Query.getAllConcentrations()
        .then(function (response) {
          $scope.allConcentrations = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.allConcentrations = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.setClickedRow = function (index) {
      $scope.selectedRow = index;
    }

    $scope.setClickedRow1 = function (index) {
      $scope.selectedRow1 = index;
    }
    $scope.setClickedRow2 = function (index) {
      $scope.selectedRow2 = index;
    }
    $scope.setClickedRow3 = function (index) {
      $scope.selectedRow3 = index;
    }

    $scope.updateRows = function (index, email, dept_name, course_num) {
      $scope.courses.success.splice(index, 1);

      Query.putCourseTaken(email, dept_name, course_num)
        .then(function (response) {
          $scope.courseTaken = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.courseTaken = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });

    }

    $scope.putCourseTaking = function (email, dept_name, course_num) {

      for (i = 0 ;i < $scope.conCourses.success.length; i++)
      {
        if ($scope.conCourses.success[i].Dept_Name == dept_name && $scope.conCourses.success[i].Number == course_num )
        {
          console.log("Bada Bing")
          $scope.conCourses.success.splice(i, 1);
        }
      }

      for (i = 0 ;i < $scope.minorCourses.success.length; i++)
      {
        if ($scope.minorCourses.success[i].Dept_Name == dept_name && $scope.minorCourses.success[i].Number == course_num )
        {
          console.log("Bada")
          $scope.minorCourses.success.splice(i, 1);
        }
      }

      for (i = 0 ;i < $scope.majorCourses.success.length; i++)
      {
        if ($scope.majorCourses.success[i].Dept_Name == dept_name && $scope.majorCourses.success[i].Number == course_num )
        {
          console.log("Boom")
          $scope.majorCourses.success.splice(i, 1);
        }
      }
      
      Query.putCourseTaking(email, dept_name, course_num)
        .then(function (response) {
          $scope.courseTaking = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.courseTaking = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });

    }

    $scope.nextPage = function (email, faculty, major, minor, concentration) {

      if (concentration == null) {
        concentration = " None"
      }

      if (minor == null) {
        minor = " None"
      }

      Query.putHasMajor(email, faculty, major, concentration)
        .then(function (response) {
          $scope.hMajor = {
            success: (response.data)
          };
        });


      Query.putHasMinor(email, faculty, minor)
        .then(function (response) {
          $scope.hMinor = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.hMinor = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });

    }

    $scope.deleteUser = function (index, email) {
      console.log("index: " + index + "Email: " + email + "\n");
      $scope.users.success.splice(index, 1);

      Query.deleteUser(email)
        .then(function (response) {
          $scope.userD = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.userD = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.makeAdmin = function (index, email) {
      console.log("index: " + index + "Email: " + email + "\n");
      $scope.users.success[index].access_lvl = 1;

      Query.makeAdmin(email)
        .then(function (response) {
          $scope.userA = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.userA = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.addCourse = function (number, dept_name, name, description, avgrade) {

      console.log(number);
      console.log(dept_name);
      console.log(name);
      console.log(description);
      console.log(avgrade);

      Query.addCourse(number, dept_name, name, description, avgrade)
        .then(function (response) {
          $scope.courseAdd = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.courseAdd = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };




    $scope.setMajReq = function (index, major_name, dept_name, course_num) {

      $scope.allMajors.success.splice(index, 1);

      Query.setMajReq(major_name, dept_name, course_num)
        .then(function (response) {
          $scope.majReq = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.majReq = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.setMinReq = function (index, minor_name, dept_name, course_num) {

      $scope.allMinors.success.splice(index, 1);

      Query.setMinReq(minor_name, dept_name, course_num)
        .then(function (response) {
          $scope.minReq = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.minReq = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.putConcentrationReq = function (index, con_name, dept_name, course_num) {

      $scope.allConcentrations.success.splice(index, 1);

      Query.putConcentrationReq(con_name, dept_name, course_num)
        .then(function (response) {
          $scope.conReq = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.conReq = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.putPreReq = function (index, dept_name, course_num, dept_name_of_prereq, course_num_of_prereq) {

      $scope.courses.success.splice(index, 1);

      Query.putPreReq(dept_name, course_num, dept_name_of_prereq, course_num_of_prereq)
        .then(function (response) {
          $scope.courseReq = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.courseReq = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.getAllTakingCourses = function (email) {

      console.log("Taken Email: " + email);

      Query.getTakingCourses(email)
        .then(function (response) {
          $scope.takenCourses = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.takenCourses = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };


    $scope.addTeaches = function (prof_name, dept_name, course_num) {

      console.log("ayy" + prof_name);
      Query.addTeaches(prof_name, dept_name, course_num)
        .then(function (response) {
          $scope.profT = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.profT = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.deleteTakingCourses = function (index, email, dept_name, number) {

      console.log(email);
      console.log(number);
      console.log(dept_name);

      $scope.takenCourses.success.splice(index, 1);

      Query.deleteTakingCourses(email, dept_name, number)
        .then(function (response) {
          $scope.courseTakenDel = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.courseTakenDel = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };

    $scope.deleteCourse = function (index, number, dept_name) {

      console.log(number);
      console.log(dept_name);

      $scope.courses.success.splice(index, 1);

      Query.deleteCourse(number, dept_name)
        .then(function (response) {
          $scope.courseDel = {
            success: (response.data)
          };
        })
        .catch(function (response) {
          $scope.courseDel = {
            error: Array.isArray(response.data) ? response.data : [response.data]
          };
        });
    };



    $scope.response = {
      text: ['hello', 'world']
    };


  });