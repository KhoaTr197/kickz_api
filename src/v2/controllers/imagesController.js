//IMAGES CONTROLER
const getAllImages = (req, res) => {
  res.send("Get all images");
};

const getOneImage = (req, res) => {
  res.send("Get a image");
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
  getAllImages,
  getOneImage,
  createNewImage,
  updateOneImage,
  deleteOneImage
};