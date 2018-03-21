var config = require('../knexfile');
var knex = require('knex')(config);


exports.getAllUsers = function (req, res)
  {
      knex.select()
        .from('program')
        .then( users => res.send(users));
  };  
