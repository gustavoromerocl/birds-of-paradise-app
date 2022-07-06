const cloudinary = require('cloudinary');
require('dotenv').config()

const api_key = process.env.API_KEY;
const cloud_name = process.env.CLOUD_NAME;
const api_secret = process.env.API_SECRET;

//Pasamos como argumento al configuración desde las variables de entorno
cloudinary.config({
  api_key,
  cloud_name,
  api_secret
});

//Retornamos una función que recibe el path de la imagen y retorna una promesa para procesar el upload
module.exports = (imagePath) => new Promise((resolve, reject) => {
  cloudinary.uploader.upload(imagePath, (result) => {
    if(result.secure_url) return resolve(result.secure_url);

    reject(new Error('Error with cloudinary'));
  })
})