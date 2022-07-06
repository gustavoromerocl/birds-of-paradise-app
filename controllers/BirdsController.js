const Bird = require('../models/Bird');
const upload = require('../config/upload');

//Middleware de busqueda para reutilizar la funcíon de búsqueda
const find = async (req, res, next) => {
  try{
    const bird = await Bird.findById(req.params.id);

    req.bird = bird;
    next();
  }catch(error){
    next(error);
  }
}

//Mostrar todos los recursos del schema Bird
const index = async (req, res) => {
  try{
    console.log("dentro de index");
    let birds = await Bird.find({});
    
    res.json(birds);
  }catch(error){
    console.log(error);
    res.json({error});
  }
}

//Mostrar el recurso solicitado de manera individual
const show = async (req, res) => {
  try{
    res.json(req.bird);
  }catch(error){
    console.log(error);
    res.json({error});
  }
}

//Crear un recurso
const create = async (req, res) => {
  try{
    const bird = await Bird.create({
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      location: req.body.location
    });

    res.json(bird);
  }catch(error){
    console.log(error);
    res.json({error});
  }
}

//Actualizar un recurso
const update = async (req, res) => {
  try{
    let params = {
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      location: req.body.location
    }

    req.bird = Object.assign(req.bird, params);
    await req.bird.save();

    res.json(req.bird);
  }catch(error){
    console.log(error);
    res.json({error});
  }
}

//Eliminar un recurso
const destroy = async (req, res) => {
  try{
    req.bird.remove();
    res.json({});
  }catch(error){
    console.log(error);
    res.json({error});
  }
}

//Carga de archivos de imagen
const multerMiddleware = () => upload.fields([
  {name: 'bird-img', maxCount: 1},
]);

module.exports = { find, index, show, create, update, destroy, multerMiddleware }