const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  user: String,
  points: Number,
  date: String,
});

module.exports = model('Score', scoreSchema);