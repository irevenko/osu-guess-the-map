const { Schema, model } = require('mongoose');

const mapSchema = new Schema({
  user: String,
  points: String,
  date: new Date(),
});

module.exports = model('Map', mapSchema);