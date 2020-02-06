const favorites_comment = require('./users-model.js');
const db = require('../database/db.config.js');
const server = require('../api/server.js');
const request = require('supertest');


describe('users-model', function() {
    
    describe('addFav()', function() {
        beforeEach(async () => {
            await db('Favorites');
        })

        it('saves favorite comment to the database', async function() {
                
                await request(server).post('/api/users/200/favorites').send(
                    {user_id:200,
                    Hacker_News_User: "GHFigs",
                    favorite_comments: "testing comments from test database",    
                    fav_salty_score:2}
                )
                    
                    
                    .then(res => {
                        
                        console.log('response type:', res.type)
                        expect(res.type).toMatch(/json/i)
                        
                    })
                    
                    const Favorites = await db('Favorites').select('*');
                    expect(Favorites).toHaveLength(20);
                     
        })


    })
    

    
})