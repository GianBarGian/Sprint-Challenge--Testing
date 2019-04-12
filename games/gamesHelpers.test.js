const db = require('../data/dbConfig');
const games = require('./gamesHelpers');

describe('games helpers', () => {
    beforeEach(async () => { await db('games').truncate()});
    afterEach(async () => {await db('games').truncate()});

    describe('get test', () => {
        it('should get all the games in the games table', async () => {
            const mockGame = {
                title: "game",
                genre: "adventure",
            }
            await games.insert(mockGame);
            
            const gamesArr = await games.getGames();

            expect(gamesArr).toHaveLength(1)
        })
    })
})