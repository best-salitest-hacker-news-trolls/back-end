
exports.up = function(knex) {
  return knex.schema.createTable('users', users => { 
      users.increments().unique();
      users.string('username', 128)
      .notNullable()
      .unique();

      users.string('password', 128).notNullable();
      users.integer('Users_Salty_Score');
  })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
