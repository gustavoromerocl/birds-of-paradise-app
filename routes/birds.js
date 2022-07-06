const express = require('express');
const router = express.Router();

const BirdsController = require('../controllers/BirdsController')


router.route('/')
  .get(BirdsController.index)
  .post(BirdsController.multerMiddleware(), BirdsController.create)

router.route('/:id')
  .get(BirdsController.find, BirdsController.show)
  .put(BirdsController.find, BirdsController.update)
  .delete(BirdsController.find, BirdsController.destroy)

module.exports = router;