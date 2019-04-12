const express = require('express');

const games = require('../games/gamesHelpers');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ message: "api working" });
});

server.get('/games', async(req, res) => {
    try{
        const gamesArr = await games.getGames();
        gamesArr.length > 0
            ? res.json(gamesArr)
            : res.json({ message : "There is no game here!"})
    } catch {
        res.status(500).json({ message: "something went wrong" });
    }
    
})

server.post('/games', async(req, res) => {
    const game = req.body;
    try {
        if (game.title && game.genre) {
            const newGame = await games.insert(game)
            res.json(newGame)
        } else {
            res.status(422).json({ message: "Games must have a title and a genre" });
        }
    } catch {
        res.status(500).json({ message: "something went wrong" });
    }
    
})

module.exports = server;