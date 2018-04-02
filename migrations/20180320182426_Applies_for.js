
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Applies_for', function(table) {
          table.primary(['Student_ID', 'Program_ID']);                 
          table.string('Student_ID').references('Email').inTable('Users').onDelete('cascade').onUpdate('cascade');
          table.integer('Program_ID').references('ID').inTable('program').onDelete('cascade').onUpdate('cascade');
        })
      ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('Applies_for')
      ])
};
