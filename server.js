const express = require('express');
const accountRouter = require('./accountRouter.js');
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);

server.get('/', (req, res) => {
    res.send('<h1>Webdb-i-challenge</h1>');
  });

module.exports = server;
