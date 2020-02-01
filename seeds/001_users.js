
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Natalie', password: '123'},
        {id: 2, username: 'Neel', password: '123'},
        {id: 3, username: 'Jason', password: '123'},
        {id: 4, username: 'Alex', password: '123'},
        {id: 5, username: 'Thomas', password: '123'},
        {id: 6, username: 'Mike', password: '123'},
        {id: 7, username: 'Chase', password: '123'},
        {id: 8, username: 'Nisha', password: '123'},
        {id: 9, username: 'Riely', password: '123'},
        
        
      ]);
    });
};
