var config = require('../knexfile');
var knex = require('knex')(config);


exports.getAllUsers = function (req, res)
  {
    knex('users')
    .join('HAS_MINOR', 'users.email', '=', 'HAS_MINOR.student_ID')
    .select('users.name', 'users.id', 'users.email')
    .then( users => res.send(users));
  };  

exports.getFaculties = function (req, res)
{
  knex('faculty')
  .select('name')
  .then( faculty => res.send(faculty));
};  

exports.getMajors = function (req, res)
{
  knex('major')
  .where({
    faculty_name:req.query.faculty
  }).select('name')
  .then(major => res.send(major));
};  

