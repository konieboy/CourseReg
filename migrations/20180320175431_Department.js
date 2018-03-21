
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Department', function(table) {
          table.string('Name').unique().primary();
          table.string('Faculty_name').references('Name').inTable('Faculty');

          table.string('Email')
          table.string('Phone')
        })
      ]);
    

};

exports.down = function(knex, Promise) {

};
