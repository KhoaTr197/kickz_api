const express = require('express');
const shoesController = require('../controllers/shoesController');
const router = express.Router();

//SHOES
router.get('/', shoesController.getAllShoes);

router.get('/search', shoesController.searchShoes);

router.get('/:id', shoesController.getShoeById);

router.post('/', shoesController.createNewShoe);

module.exports = router;