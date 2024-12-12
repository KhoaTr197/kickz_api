const express = require('express');
const imagesController = require('../controllers/imagesController');
const router = express.Router();

//IMAGES
router.get('/:mode/:filename.jpg', imagesController.getOneImage);

module.exports = router;