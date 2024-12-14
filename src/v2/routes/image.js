const express = require('express');
const imageController = require('../controllers/imageController');
const router = express.Router();

//IMAGES
router.get('/:mode/:filename.jpg', imageController.getOneImage);

module.exports = router;