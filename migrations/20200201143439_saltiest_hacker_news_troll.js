
exports.up = function(knex) {
  return knex.schema.createTable('users', users => { 
      users.increments();
      users.string('username', 128)
      .notNullable()
      .unique();

      users.string('password', 128).notNullable();
      users.integer('Users_Salty_Score');
  })
  .createTable('Favorites', tbl => { 
    tbl.increments();
    tbl.string('favorite_comments').notNullable();
    tbl.integer('fav_salty_score').notNullable();
    tbl.integer('user_id', 128)
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
  })
  .createTable('user_favorites', tbl => { 
    tbl.increments();
    tbl.integer('user_Fav_FK', 128)
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    
    tbl.integer('Fav_FK', 128)
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('Favorites')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')



  
  })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_favorites')
            .dropTableIfExists('Favorites')
            .dropTableIfExists('users')
};
