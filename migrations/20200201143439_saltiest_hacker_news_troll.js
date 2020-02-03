
exports.up = function(knex) {
  return knex.schema.createTable('users', users => { 
      users.increments().unique();
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
    return knex.schema.dropTableIfExists('users')
            .dropTableIfExists('Favorites')
            .dropTableIfExists('user_favorites')
};
