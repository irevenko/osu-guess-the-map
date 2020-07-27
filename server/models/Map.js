const { Schema, model } = require('mongoose');

const mapSchema = new Schema({
  name: String,
  image: String,
});

module.exports = model('Map', mapSchema);