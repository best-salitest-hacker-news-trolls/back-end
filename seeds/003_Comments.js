
const json = require('../object500.json')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Comments2')
    .then(function () {
      // Inserts seed entries
      return knex('Comments2').insert(json);
    });
};
