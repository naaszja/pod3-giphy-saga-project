const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return all favorite images
});

router.post('/', (req, res) => {
  // add a new favorite with the given category id
});

router.delete('/', (req, res) => {
  // delete a favorite
});

module.exports = router;
