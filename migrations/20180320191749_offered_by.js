
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('offered_by', function(table) {
          table.primary(['Program_ID', 'Dept_Name']);  
          table.integer('Program_ID').references('ID').inTable('program').onDelete('cascade').onUpdate('cascade');
          table.string('Dept_Name').references('Name').inTable('department').onDelete('cascade').onUpdate('cascade');
        })
      ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('offered_by')
      ])
};
