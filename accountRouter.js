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
        .first()//give me the first item from the array and will only send an object to client than sending an array.
        .then(account => {
            res.status(200).json(account);
        })
        .catch(err =>{
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    db('accounts')
      .insert(req.body)
      .then(ids => {
        res.status(200).json(ids);
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

router.put('/:id', (req, res) => {
    db('accounts')
      .where({ id: req.params.id })
      .update(req.body)
      .then(count => {
        res.status(200).json(count);
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

router.delete('/:id', (req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;