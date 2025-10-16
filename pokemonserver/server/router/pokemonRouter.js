var pokemonRouter = require('express').Router();
var pokemonController = require('../controller/pokemonController');
var authMiddleware = require('../middleware/authMiddleware');

pokemonRouter.route('/')
  .get(pokemonController.retrieve)
  .post( pokemonController.createOne);

pokemonRouter.route('/:id')
  .get(pokemonController.retrieveOne)
  .put( pokemonController.updateOne)
  .delete( pokemonController.deleteOne);

module.exports = pokemonRouter;
