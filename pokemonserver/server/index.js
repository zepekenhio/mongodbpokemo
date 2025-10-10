var express = require('express');
var db = require('./db');
var pokemonRouter = require('./router/pokemonRouter');
var trainerRouter = require('./router/trainerRouter');
var Zone = require('./model/Zone');
var rateLimiter = require('./middleware/rateLimiter');


var app = express();

app.use(express.json());
app.use(rateLimiter);



// TODO: Import the pokemonRouter and assign it to the correct route:
app.use('/api/pokemons', rateLimiter, pokemonRouter);
app.use('/api/trainers', trainerRouter);
app.use('/api/zones', require('./router/zoneRouter'));


var PORT = 3000;

app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});
