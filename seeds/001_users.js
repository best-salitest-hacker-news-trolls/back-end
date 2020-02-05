
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 200, username:'test', password:'123', Users_Salty_Score:null},
        {id: 201, username: 'Natalie', password: '123'},
        {id: 202, username: 'Neel', password: '123'},
        {id: 203, username: 'Jason', password: '123'},
        {id: 204, username: 'Alex', password: '123'},
        {id: 205, username: 'Thomas', password: '123'},
        {id: 206, username: 'Mike', password: '123'},
        {id: 207, username: 'Chase', password: '123'},
        {id: 208, username: 'Nisha', password: '123'},
        {id: 209, username: 'Riely', password: '123'},
        
      ]);
    });
};
