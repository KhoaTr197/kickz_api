const imageService = require('../services/imageService');
const Buffer = require('buffer').Buffer;

let controller = {};

//IMAGES CONTROLER
controller.getOneImage = (req, res, next) => {
  const { mode, filename } = req.params;

  if(mode != 'brand' && mode != 'shoe')
    return next();

  imageService.getOneImage(filename, mode)
  .then(image => {
    let buffer = Buffer.from(image.data.toString('base64'), 'base64');

    res
    .set({
      'Content-Type': 'image/jpeg',
      'Content-Length': buffer.length
    })
    .send(buffer);
  })
  .catch(error => {
    res.send({
      status: "ERROR",
      message: "Can't get data",
      detail: error
    });
  })
};
module.exports = controller;