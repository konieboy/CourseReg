
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('professor', function(table) {
          table.string('Name').unique();
          table.integer('Rating');
          table.date('StartDate');
        })
      ]);
    

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('professor')
      ])
};