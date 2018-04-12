var config = require('../knexfile');
var knex = require('knex')(config);


exports.getAllUsers = function (req, res)
  {
    knex('users')
    .then( users => res.send(users));
  };

  exports.getAllProfs = function (req, res)
  {
    knex('professor')
    .then( profs => res.send(profs));
  };
  
  

  exports.getAllConcentrations = function (req, res)
  {
    knex('concentration')
    .then( concentration => res.send(concentration));
  };  
  
  
exports.deleteUser = function (req, res)
{
  console.log(req.query.email);
  knex('users')
  .where({
    email:req.query.email
  }).del()
  .then(users => res.send());
}; 

exports.deleteProf = function (req, res)
{
  console.log(req.query.name);
  knex('professor')
  .where({
    Name:req.query.name
  }).del()
  .then(profD => res.send(200));
}; 

exports.deleteTakingCourses = function (req, res)
{
  console.log(req.query.email);
  console.log(req.query.dept_name);
  console.log(req.query.number);

  knex('taking_course')
  .del().where({
    Course_Num:req.query.number,
    Dept_Name:req.query.dept_name,
    Student_ID:req.query.email
    })
  .then(courseTD => res.send(200));
}; 

exports.deleteCourse = function (req, res)
{
  console.log(req.query.number);
  console.log(req.query.dept_name);

  knex('course')
  .del().where({
    Number:req.query.number,
    Dept_Name:req.query.dept_name
    })
  .then(courseD => res.send(200));
}; 


exports.makeAdmin = function (req, res)
{
  console.log(req.query.email);
  knex('users')
  .where({
    email:req.query.email
  }).update('access_lvl', '1')
  .then(users => res.send());
}; 

exports.getAllCourses = function (req, res)
{
  knex('course')
  .then(course => res.send(course));
};  
  
exports.getFaculties = function (req, res)
{
  knex('faculty')
  .select('name')
  .then( faculty => res.send(faculty));
};  

exports.getDepartments = function (req, res)
{
  knex('department')
  .select('name')
  .then( department => res.send(department));
};  



exports.getMajors = function (req, res)
{
  knex('major')
  .where({
    faculty_name:req.query.faculty
  }).select('name')
  .then(major => res.send(major));
}; 

exports.getTakingCourses = function (req, res)
{
  knex('course')
  .join('taking_course', function () {
    this
      .on('course.Dept_Name', 'taking_course.Dept_Name')
      .on('course.Number', 'taking_course.Course_Num');
  })
  .where({
    'taking_course.Student_ID':req.query.email
  }).select()
  .then(taking => res.send(taking));
}; 



exports.getAllMajors = function (req, res)
{
  knex('major')
  .then(major => res.send(major));
}; 


exports.getAllMinors = function (req, res)
{
  knex('minor')
  .then(minor => res.send(minor));
}; 

exports.getMinors= function (req, res)
{
  knex('minor')
  .where({
    faculty_name:req.query.faculty
  }).select('name')
  .then(minor => res.send(minor));
};  

exports.getConcentrations = function (req, res)
{
  knex('concentration')
  .where({
    faculty_name:req.query.faculty,
    Major_Name:req.query.major
  }).select('name')
  .then(major => res.send(major));
};  
exports.putCourseTaking = function (req, res)
{
  console.log("Test" + req.query.email);
  knex('taking_course')
  .insert({Student_ID: req.query.email , Dept_Name: req.query.dept_name,  Course_Num: req.query.course_num})
  .then(nuthing => res.send(nuthing));
};  
  
exports.putCourseTaken = function (req, res)
{
  console.log("Test" + req.query.email);
  knex('taken_course')
  .insert({Student_ID: req.query.email , Dept_Name: req.query.dept_name,  Course_Num: req.query.course_num})
  .then(nuthing => res.send(nuthing));
};  

exports.putProf = function (req, res)
{
  console.log("Test" + req.query.profName);
  console.log("Test" + req.query.profRating);
  console.log("Test" + req.query.profStart);

  knex('professor')
  .insert({Name: req.query.profName , Rating: req.query.profRating,  StartDate: req.query.profStart})
  .then(nuthing => res.send(nuthing));
};  

exports.putHasMajor = function (req, res)
{
  console.log("Test" + req.query.email);
  knex('has_major')
  .insert({Student_ID: req.query.email , Faculty_Name: req.query.faculty,  Major_Name: req.query.major,  Con_Name: req.query.concentration })
  .then(nuthing => res.send(nuthing));
};  
  
exports.putHasMinor = function (req, res)
{
  console.log("Test" + req.query.email);
  console.log("Test" + req.query.faculty);
  console.log("Test" + req.query.minor);

  knex('has_minor')
  .insert({Student_ID: req.query.email , Faculty_Name: req.query.faculty,  Minor_Name: req.query.minor})
  .then(nuthing => res.send(nuthing));
};  

exports.addCourse = function (req, res)
{
  console.log("Test" + req.query.number);
  console.log("Test" + req.query.dept_name);
  console.log("Test" + req.query.name);

  knex('course')
  .insert({Number: req.query.number, Dept_Name: req.query.dept_name, Name: req.query.name, Description: req.query.description, AvGrade: req.query.avgrade})
  .then(nuthing => res.send(nuthing));
}; 

exports.setMajReq = function (req, res)
{
  console.log("major_name" + req.query.major_name);
  console.log("dept_name" + req.query.dept_name);
  console.log("course_num" + req.query.course_num);

  knex('major_requires')
  .insert({Major_Name: req.query.major_name, Dept_Name: req.query.dept_name, Course_Num: req.query.course_num})
  .then(nuthing => res.send(nuthing));
}; 

exports.setMinReq = function (req, res)
{
  console.log("Minor_Name" + req.query.minor_name);
  console.log("dept_name" + req.query.dept_name);
  console.log("course_num" + req.query.course_num);

  knex('minor_requires')
  .insert({Minor_Name: req.query.minor_name, Dept_Name: req.query.dept_name, Course_Num: req.query.course_num})
  .then(nuthing => res.send(nuthing));
}; 

exports.putConcentrationReq = function (req, res)
{
  console.log("Con_Name" + req.query.con_name);
  console.log("dept_name" + req.query.dept_name);
  console.log("course_num" + req.query.course_num);

  knex('con_requires')
  .insert({Con_Name: req.query.con_name, Dept_Name: req.query.dept_name, Course_Num: req.query.course_num})
  .then(nuthing => res.send(nuthing));
}; 

exports.addTeaches = function (req, res)
{
  console.log("prof_name" + req.query.prof_name);
  console.log("dept_name" + req.query.dept_name);
  console.log("course_num" + req.query.course_num);

  knex('teaches')
  .insert({Prof_Name: req.query.prof_name, Dept_Name: req.query.dept_name, Course_Num: req.query.course_num})
  .then(nuthing => res.send(nuthing));
}; 


exports.putPreReq = function (req, res)
{
  console.log("dept_name" + req.query.dept_name);
  console.log("course_num" + req.query.course_num);
  console.log("dept_name_of_prereq" + req.query.dept_name_of_prereq);
  console.log("course_num_of_prereq" + req.query.course_num_of_prereq);


  knex('prerequisite_of')
  .insert({Dept_Name: req.query.dept_name, Dept_Name: req.query.dept_name, Course_Num: req.query.course_num, Dept_Name_Of_Prereq: req.query.dept_name_of_prereq, Course_Num_Of_Prereq: req.query.course_num_of_prereq })
  .then(nuthing => res.send(nuthing));
}; 

exports.getMajorCourses = function (req, res)
{
  console.log(req.query.grade);
  console.log(req.query.rating);

  knex('course')
  .join('major_requires', function () {
    this
      .on('course.Dept_Name', 'major_requires.Dept_Name')
      .on('course.Number', 'major_requires.Course_Num');
  })
  .where('major_requires.Major_name', '=', req.query.major_name)
  // .join('taking_course')
  // .where('taking_course.Student_ID', '!=', '1@1.com')
  // .join('taken_course')
  // .whereNot('taken_course.Student_ID', '!=', '1@1.com')

  .join('teaches', function () {
    this
      .on('course.Dept_Name', 'teaches.Dept_Name')
      .on('course.Number', 'teaches.Course_Num');
  })
  .join('professor', function () {
    this
      .on('teaches.Prof_Name', 'professor.Name');
  })

  .where('professor.rating', '>=', req.query.rating)
  .where('course.AvGrade', '>=', req.query.grade)

  .orderBy('course.Number', 'asc')  
  .select()
  .then(courses => res.send(courses));
}; 

exports.getMinorCourses = function (req, res)
{
  console.log(req.query.grade);
  console.log(req.query.rating);
  knex('course')
  .join('minor_requires', function () {
    this
      .on('course.Dept_Name', 'minor_requires.Dept_Name')
      .on('course.Number', 'minor_requires.Course_Num');
  })
  .where('minor_requires.Minor_Name', '=', req.query.minor_name)

  .join('teaches', function () {
    this
      .on('course.Dept_Name', 'teaches.Dept_Name')
      .on('course.Number', 'teaches.Course_Num');
  })
  .join('professor', function () {
    this
      .on('teaches.Prof_Name', 'professor.Name');
  })

  .where('professor.rating', '>=', req.query.rating)
  .where('course.AvGrade', '>=', req.query.grade)

  .orderBy('course.Number', 'asc')  
  .select()
  .then(courses => res.send(courses));
}; 

exports.getConCourses = function (req, res)
{
  console.log(req.query.grade);
  console.log(req.query.rating);

  knex('course')
  .join('con_requires', function () {
    this
      .on('course.Dept_Name', 'con_requires.Dept_Name')
      .on('course.Number', 'con_requires.Course_Num');
  })  
  .where('con_requires.Con_Name', '=', req.query.con_name)

  .join('teaches', function () {
    this
      .on('course.Dept_Name', 'teaches.Dept_Name')
      .on('course.Number', 'teaches.Course_Num');
  })
  .join('professor', function () {
    this
      .on('teaches.Prof_Name', 'professor.Name');
  })
  .where('professor.rating', '>=', req.query.rating)
  .where('course.AvGrade', '>=', req.query.grade)
  .orderBy('course.Number', 'asc')  
  .select()
  .then(courses => res.send(courses));
}; 