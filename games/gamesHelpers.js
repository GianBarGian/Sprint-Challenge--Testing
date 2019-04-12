const db = require('../data/dbConfig');

const getGames = async () => {
    return await db('games');
}

const insert = async game => {
    const [id] = await db('games').insert(game);
    return await db('games').where({ id }).first();
}

module.exports = {
    getGames,
    insert
}