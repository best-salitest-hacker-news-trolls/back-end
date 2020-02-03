const db = require('../database/db.config.js'); 

module.exports = { 
    find, 
    add, 
    findById, 
    findBy, 
}


function find() {
    return db('users').select('id', 'username','Users_Salty_Score'); 
}

// function add(name){
//     return db('users')
//     .insert(name).returning('id');
// }

async function add(user){
    const [id] = await db('users').insert(user).returning('id');
    return findById(id);
}

function findById(id){
    return db('users')
    .where({id})
    .first();
}

function findBy(input){
    return db('users').where(input); 
}