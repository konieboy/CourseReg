
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('program', function(table) {
          table.integer('ID').unique();
          table.string('Description')
        })
      ]);
    

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('program')
      ])
};
