var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// TODO: Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    db = mongoose.connection;
  })
  .catch(err => {
    console.error('Connection error:', err);
  });

module.exports = db;
