const express = require('express');
const shoesRouter = require('./shoesRoute');
const imagesRouter = require('./imagesRoute');

const router = express.Router();

router.use('/images', imagesRouter);

router.use('/shoes', shoesRouter);

module.exports = router;