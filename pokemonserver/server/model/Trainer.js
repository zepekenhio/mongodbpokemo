var mongoose = require('mongoose');
const db = require('../db/index.js');

var trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    /* pokemons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }] */
});

var Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;
