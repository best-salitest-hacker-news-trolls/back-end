const request = require('supertest');

const server = require('./server');


describe('server', function() {
    it('runs the tests', function() {
        expect(true).toBe(true)
    })
    describe('GET /', function() {
        it('should return 200 OK', function() {
            // make a GET request to /
            return request(server).get('/')
                .then(res => {
                // check that the status code is 200
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON', function() {
            // make a GET request to /
            return request(server).get('/api/users/comments')
                .then(res => {
                // check that the status code is 200
                console.log('response type:', res.type)
                expect(res.type).toMatch(/json/i)
            })
        })
        it('should return JSON', function() {
            // make a GET request to /
            return request(server).get('/api/users/favorites')
                .then(res => {
                // check that the status code is 200
                console.log('response type:', res.type)
                expect(res.type).toMatch(/json/i)
            })
        })
    })
    
})