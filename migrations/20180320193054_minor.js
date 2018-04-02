
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Minor', function(table) {
          table.primary(['Name', 'Program_ID']);  
          table.string('Name');
          table.integer('Program_ID').references('ID').inTable('program').onDelete('cascade').onUpdate('cascade');
        })
      ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('Minor')
      ])
};
