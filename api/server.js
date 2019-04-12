const express = require('express');

const games = require('../games/gamesHelpers');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ message: "api working" });
});

server.get('/games', async(req, res) => {
    const gamesArr = await games.getGames();
    res.json(gamesArr);
})

module.exports = server;