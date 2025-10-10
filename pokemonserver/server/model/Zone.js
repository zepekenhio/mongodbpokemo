var mongoose = require('mongoose');
const db = require('../db/index.js');

var zoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    pokemons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon'
    }]
    
});

var Zone = mongoose.model('Zone', zoneSchema);
module.exports = Zone;
