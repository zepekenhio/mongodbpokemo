var express = require('express');
var db = require('./db');
var pokemonRouter = require('./router/pokemonRouter');
var trainerRouter = require('./router/trainerRouter');
var Zone = require('./model/Zone');
var rateLimiter = require('./middleware/rateLimiter');
var logger = require('./middleware/logger');
var authRouter = require('./router/authRouter');
var authMiddleware = require('./middleware/authMiddleware');


var app = express();

app.use(express.json());
app.use(rateLimiter);
app.use(logger);



// TODO: Import the pokemonRouter and assign it to the correct route:
app.use('/api/pokemons', authMiddleware, rateLimiter, logger, pokemonRouter);
app.use('/api/trainers', authMiddleware, trainerRouter);
app.use('/api/zones', authMiddleware, require('./router/zoneRouter'));
app.use('/api', authRouter);


var PORT = 3000;


app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});
