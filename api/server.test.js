const request = require('supertest'); 

const db = require('../data/dbConfig');
const server = require('./server.js');

describe('server test', () => { 
    beforeEach(async () => { await db('games').truncate()});
    afterEach(async () => {await db('games').truncate()});
    
    describe('/games GET endpoint', () => {
        it('should answering with 200 status', async () => {
            
            const response = await request(server).get('/games');
            expect(response.status).toEqual(200);
        })

        it('should res with a message if there is no game', async () => {
            const response = await request(server).get('/games');
            expect(response.body).toEqual({ message : "There is no game here!"})
        })

    })

    describe('/games POST endpoint', () => {
        it('should answering with 200 status', async () => {
            const mockGame = {
                title: "Another world",
                genre: "Adventure"
            }
            const response = await request(server).post('/games').send(mockGame)
            expect(response.status).toEqual(200);
        })

        it('should sending a message if the wrong body is passed', async () => {
            const response = await request(server).post('/games').send({n: "m"});

            expect(response.body).toEqual({ message: "Games must have a title and a genre" })
        })
    })
})