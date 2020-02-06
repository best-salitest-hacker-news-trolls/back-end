
exports.up = function(knex) {
  return knex.schema.createTable('users', users => { 
      users.increments();
      users.string('username', 128)
      .notNullable()
      .unique();

      users.string('password', 128).notNullable();
      users.float('Users_Salty_Score');
  })
  .createTable('Favorites', tbl => { 
    tbl.increments();
    tbl.string('favorite_comments', 2048).notNullable();
    tbl.float('fav_salty_score').notNullable();
    tbl.integer('user_id', 128)
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    tbl.string('Hacker_News_User').notNullable()
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
  .createTable('Comments2', tbl => { 
    tbl.increments();
    tbl.string('favorite_comments', 4086).notNullable();
    tbl.string('fav_salty_score').notNullable();
    tbl.string('Hacker_News_User').notNullable();
  })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Comments2')
            .dropTableIfExists('user_favorites')
            .dropTableIfExists('Favorites')
            .dropTableIfExists('users')
};
