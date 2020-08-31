const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  user: String,
  points: String,
  date: new Date().toLocaleString(),
});

module.exports = model('Score', scoreSchema);