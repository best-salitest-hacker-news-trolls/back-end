const db = require('../database/db.config.js'); 

module.exports = { 
    find, 
    add, 
    findById, 
    findBy, 
    addFav, 
    findUserFav, 
    findUserById, 
    insertFavorite, 
    getFav, 
    deleteFav, 

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
    let project = await db('Favorites as F')
    .join('users as U' , 'U.id', 'F.user_id')
    .select('F.user_id', 'U.username').where('F.user_id', Number(userid) )
    .select('F.id as comment_id', 'F.favorite_comments', 'F.fav_salty_score').where('F.id', id)
    return project  
}
async function getFav(userid){
    console.log('favoritesId and userId',userid)
    let project = await db('Favorites as F')
    .join('users as U' , 'U.id', 'F.user_id')
    .select('F.user_id', 'U.username').where('F.user_id', Number(userid) )
    .select('F.id as comment_id', 'F.favorite_comments', 'F.fav_salty_score')
    return project  
}
function findUserFav(){
    return db('Favorites as F')
    .join('users as U' , 'U.id', 'F.user_id')
    .select('F.user_id','U.username')
    .select('F.id as comment_id', 'F.favorite_comments', 'F.fav_salty_score') 
}


function findUserById(id){
    return db('users').where({id:Number(id)})

}
function insertFavorite(favorite){
    return db('Favorites')
    .insert(favorite)
    .then(ids => ({ id: ids[0]}))
}

async function deleteFav(userid, commentid){
    let project = await db('Favorites as F')
    .join('users as U' , 'U.id', 'F.user_id')
    .select('F.user_id', 'U.username').where('F.user_id', Number(userid) )
    .select('F.id as comment_id', 'F.favorite_comments', 'F.fav_salty_score').where('F.id', Number(commentid)).del();
    return project
}

