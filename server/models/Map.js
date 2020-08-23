const { Schema, model } = require('mongoose');

const mapSchema = new Schema({
  name: String,
  artist: String,
  image: String,
  audio: String,
});

module.exports = model('Map', mapSchema);
