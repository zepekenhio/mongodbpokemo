// This is the model
var mongoose = require('mongoose');
const db = require('../db/index.js');

// TODO: Complete the pokemonSchema below.
var pokemonSchema = new mongoose.Schema({
    number: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    types: [
        {
            type: String,
            required: false
        }
    ],
    imageUrl: {
        type: String,
        required: false
    },
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer',
        required: false
    },
    zone: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Zone',
        }
    ]
    
});
 
// TODO: Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon = mongoose.model('Pokemon', pokemonSchema);


module.exports = Pokemon;

