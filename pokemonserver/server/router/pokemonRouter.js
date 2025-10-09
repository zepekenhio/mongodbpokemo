var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// TODO: Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number')

module.exports = pokemonRouter;
