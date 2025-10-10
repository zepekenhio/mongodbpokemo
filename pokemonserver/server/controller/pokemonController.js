const Pokemon = require('../model/Pokemon');

// TODO: Complete each of the following controller methods 
const controller = {
  createOne: function (req, res) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save()
      .then(pokemon => res.status(201).json(pokemon))
      .catch(err => res.status(400).json({ error: err.message }));
  },

  retrieve: function (req, res) {
    Pokemon.find()
      .then(pokemons => res.status(200).json(pokemons))
      .catch(err => res.status(400).json({ error: err.message }));
  },

  retrieveOne: function (req, res) {
    const { id } = req.params;
    Pokemon.findById(id).populate('trainer', 'name age').populate('zone', 'name region')
      .then(pokemon => {
        if (!pokemon) {
          return res.status(404).json({ error: 'Pokemon not found' });
        }
        res.status(200).json(pokemon);
      })
      .catch(err => res.status(400).json({ error: err.message }));
  },

  updateOne: function (req, res) {
    const { id } = req.params;
    Pokemon.findByIdAndUpdate(id, req.body, { new: true })
      .then(pokemon => {
        if (!pokemon) {
          return res.status(404).json({ error: 'Pokemon not found' });
        }
        res.status(200).json(pokemon);
      })
      .catch(err => res.status(400).json({ error: err.message }));
  },

  deleteOne: function (req, res) {
    const { id } = req.params;
    Pokemon.findByIdAndDelete(id)
      .then(pokemon => {
        if (!pokemon) {
          return res.status(404).json({ error: 'Pokemon not found' });
        }
        res.status(204).send();
      })
      .catch(err => res.status(400).json({ error: err.message }));
  }
};

module.exports = controller;
