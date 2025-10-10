var pokemonRouter = require('express').Router();
var pokemonController = require('../controller/pokemonController');

// TODO: Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')
  .get(pokemonController.retrieve)
  .post(pokemonController.createOne);

pokemonRouter.route('/:id')
  .get(pokemonController.retrieveOne)
  .put(pokemonController.updateOne)
  .delete(pokemonController.deleteOne);

module.exports = pokemonRouter;
