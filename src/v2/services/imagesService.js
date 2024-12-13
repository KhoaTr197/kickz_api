const DB = require('../db/database');

//IMAGES SERVICE
const getOneImage = async (filename, table) => {
  const db = await DB.connect();
  const images = db.collection(`${table}_images`);

  const image = await images.findOne({ filename: filename });

  return image;
};

module.exports = {
  getOneImage
};