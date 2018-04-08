var config = require('../knexfile');
var knex = require('knex')(config);


exports.getAllUsers = function (req, res)
  {
    knex('users')
    .then( users => res.send(users));
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

exports.putCourseTaken = function (req, res)
{
  console.log("Test" + req.query.email);
  knex('taken_course')
  .insert({Student_ID: req.query.email , Dept_Name: req.query.dept_name,  Course_Num: req.query.course_num})
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
  .insert({Number: req.query.number, Dept_Name: req.query.dept_name, Name: req.query.name, Description: req.query.Description, AvGrade: req.query.avgrade})
  .then(nuthing => res.send(nuthing));
}; 

