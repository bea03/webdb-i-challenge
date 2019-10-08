const express = require('express');

const db = require('./data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    //select * from table
    //knex commands return a promise
    db.select('*').from('accounts')
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    db.select('*').from('accounts')
        .where({ id: req.params.id })
        .first()
        .then(account => {
            res.status(200).json(account);
        })
        .catch(err =>{
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;