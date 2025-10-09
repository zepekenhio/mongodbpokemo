var express = require('express');
var db = require('./db');


var app = express();

app.use(express.json());



// TODO: Import the pokemonRouter and assign it to the correct route:



var PORT = 3000;

app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});
