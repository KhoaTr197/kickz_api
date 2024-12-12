const imagesService = require('../services/imagesService');
const Buffer = require('buffer').Buffer;


//IMAGES CONTROLER
const getOneImage = (req, res) => {
  const { mode, filename } = req.params;

  if(mode != 'brands' && mode != 'shoes')
    return res.sendStatus(404);

  imagesService.getOneImage(filename, mode.slice(0, -1))
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

const createNewImage = (req, res) => {
  res.send("create a image");
};

const updateOneImage = (req, res) => {
  res.send("update a image");
};

const deleteOneImage = (req, res) => {
  res.send("delete a image");
};

module.exports = {
  getOneImage,
  createNewImage,
  updateOneImage,
  deleteOneImage
};