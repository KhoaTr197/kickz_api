const express = require('express');
const imagesController = require('../controllers/imagesController');
const router = express.Router();

//IMAGES
router.get('/', imagesController.getAllImages);

router.get('/:id', imagesController.getOneImage);

router.post('/', imagesController.createNewImage);

router.patch('/:id', imagesController.updateOneImage);

router.delete('/:id', imagesController.deleteOneImage);

module.exports = router;