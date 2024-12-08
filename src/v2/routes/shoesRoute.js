const express = require('express');
const shoesController = require('../controllers/shoesController');
const router = express.Router();

//SHOES
router.get('/', shoesController.getAllShoes);

router.get('/:id', shoesController.getOneShoe);

router.post('/', shoesController.createNewShoe);

router.patch('/:id', shoesController.updateOneShoe);

router.delete('/:id', shoesController.deleteOneShoe);

module.exports = router;