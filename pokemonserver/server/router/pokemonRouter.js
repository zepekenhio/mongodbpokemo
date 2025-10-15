var pokemonRouter = require('express').Router();
var pokemonController = require('../controller/pokemonController');
var authMiddleware = require('../middleware/authMiddleware');

pokemonRouter.route('/')
  .get(pokemonController.retrieve)
  .post(authMiddleware, pokemonController.createOne);

pokemonRouter.route('/:id')
  .get(pokemonController.retrieveOne)
  .put(authMiddleware, pokemonController.updateOne)
  .delete(authMiddleware, pokemonController.deleteOne);

module.exports = pokemonRouter;
