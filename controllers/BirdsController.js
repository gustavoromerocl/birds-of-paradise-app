let Bird = require('../models/Bird');

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
    const bird = await Bird.findById(req.params.id);
    
    res.json({bird});
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
    const bird = await Bird.updateOne({_id: req.params.id}, {
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

//Eliminar un recurso
const destroy = async (req, res) => {
  try{
    const bird = await Bird.findByIdAndRemove(req.params.id);

    res.json(bird);
  }catch(error){
    console.log(error);
    res.json({error});
  }
}


module.exports = { index, show, create, update, destroy }