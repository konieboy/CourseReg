
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Faculty', function(table) {
          table.string('Name').unique();
          table.string('Email')
          table.string('Phone')
        })
      ]);
    

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('Faculty')
      ])
};
