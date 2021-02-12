const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// ID generator
// const idGenerator = require('../modules/id.generator')();
// const favorites = [{fav: 'Title,', id: idGenerator.next().value},];

// returns an array of gifs

// return all favorite images
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM favorites`;
    pool.query(queryText)
      .then((response) => {
        res.send(response.rows);
      })
      .catch((error) => {
        console.log(`Error on query ${error}`);
        res.sendStatus(500);
      });
});

// add a new favorite >>> GONNA TURN THIS INTO AN ASYNC
router.post('/', (req, res) => {
  let newFavorite = req.body; 
  console.log(`Adding new favorite`, newFavorite);
  
  let queryText = `INSERT INTO "favorites" ("title", "url")
                   VALUES ($1, $2,);`;
  pool.query(queryText, [newFavorite.title, newFavorite.url])
   .then(result => {
    res.sendStatus(201);
   })
  .catch(error => {
    console.log(`Error adding new book`, error);
    res.sendStatus(500);
  });
  
});

  // const favToAdd = req.body;
  // give the fav an ID so we can delete later
  // favToAdd.id = idGenerator.next().value; 
  // favorites.push(favToAdd);

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
