
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Concentration', function(table) {
          table.primary(['Name', 'Major_name','Program_ID_of_Major']);  
          table.string('Name');
          table.string('Major_name').references('name').inTable('major').onDelete('cascade').onUpdate('cascade');
          table.integer('Program_ID_of_Major').references('ID').inTable('program').onDelete('cascade').onUpdate('cascade');
        })
      ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('Major')
      ])
};
