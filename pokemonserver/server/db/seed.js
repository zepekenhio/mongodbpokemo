const mongoose  = require('mongoose');
const Pokemon = require('../model/Pokemon.js');

const allPokemons = require('../../data/pokemon.json')

const insertAllPokemons = function() {
  Pokemon.create(allPokemons)
    .then(() => {
      console.log('All Pokémon inserted');
      mongoose.disconnect();
    })
    .catch((error) => {
      console.error('Error inserting Pokémon:', error);
      mongoose.disconnect();
    });
};

insertAllPokemons();