const mongoose = require('mongoose');
//mongoose.set('debug', true); //Muestra por consola el debug de las queries a la base de datos

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