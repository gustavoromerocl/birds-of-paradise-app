const mongoose = require('mongoose');

let birdSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: String,
  description: String,
  location: String,
  birdImage: String
})

let Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;