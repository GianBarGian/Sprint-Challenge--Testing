const db = require('../data/dbConfig');
const games = require('./gamesHelpers');

describe('games helpers', () => {
    beforeEach(async () => { await db('games').truncate()});
    afterEach(async () => {await db('games').truncate()});

    describe('get test', () => {
        it('should get all the games in the games table', async () => {
            const gamesArr = await games.getGames();
            expect(Array.isArray(gamesArr)).toBe(true)
        })
    })

    describe('insert tests', () => {
        it('should insert a new game and return it', async () => {
            const mockGame = {
                title: "Another world",
                genre: "Adventure"
            }
            const newGame = await games.insert(mockGame);
            expect(newGame.title).toBe("Another world");
            expect(newGame.genre).toBe("Adventure");
            expect(newGame.releaseYear).toBe(null);
        })
    })
})