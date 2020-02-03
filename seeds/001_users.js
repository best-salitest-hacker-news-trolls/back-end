
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Natalie', password: '123'},
        {username: 'Neel', password: '123'},
        {username: 'Jason', password: '123'},
        {username: 'Alex', password: '123'},
        {username: 'Thomas', password: '123'},
        {username: 'Mike', password: '123'},
        {username: 'Chase', password: '123'},
        {username: 'Nisha', password: '123'},
        {username: 'Riely', password: '123'},
        
        
      ]);
    });
};
