const mongoose = require('mongoose');
const uploader = require('./Uploader');
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
}, {
  methods: {
    updateImage: async function (path) {
      const url = await uploader(path);
      //Guardamos la url que genera cludinary en la propiedad de birdImage
      return await this.saveUrlImage(url);
    },
    saveUrlImage: async function (secure_url){
      this.birdImage = secure_url;

      return await this.save();
    }
  }
})

let Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;