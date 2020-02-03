const db = require('../database/db.config.js'); 

module.exports = { 
    find, 
    add, 
    findById, 
    findBy, 
    addFav, 
    findUserFav, 

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

// function addFav(id, input){
//     return db('users')
//     .select('id')
//     .where({id})
//     .first()
//     .insert(input)
//     .then(([id]) => {
//         return findUserFav(id)
//     })

// }

// function findUserFav(id){
//     return db('')
// }

async function addFav(input, userid){
    const [id] = await db('Favorites').insert(input).returning('id');
    return findUserFavId(id, userid)
    
}

async function findUserFavId(id, userid){
    console.log('favoritesId and userId', id, userid)
    let project  = await db('user_favorites as UF')
    .join('users as U', 'U.id', 'user_Fav_FK')
    .join('Favorites as F', 'F.id', 'UF.Fav_FK')
    .select('U.id as User_id', 'U.username', 'F.id as Fav_id', 'F.favorite_comments', 'F.fav_salty_score')
    .where('F.id', id)
    .where('U.id', userid)
    return project;
    
}
async function findUserFav(){
    let project = await db('Favorites')
    // let project  = await db('user_favorites as UF')
    // .join('users as U', 'U.id', 'user_Fav_FK')
    // .join('Favorites as F', 'F.id', 'UF.Fav_FK')
    // .select('U.id as User_id', 'U.username', 'F.id as Fav_id', 'F.favorite_comments', 'F.fav_salty_score')

    return project
    
    
}


