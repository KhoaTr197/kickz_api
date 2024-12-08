const DB = require('./database');

//SHOES SERVICE
// const movies = database.collection('movies');
// const query = { title: 'Back to the Future' };
// const movie = await movies.findOne(query);
//console.log(movie);
const getAllShoes = async () => {
  const db = await DB.connect();
  const shoes = db.collection('shoes');

  const allShoes = await shoes.find().toArray();
  DB.disconnect();

  return allShoes;
};

const getOneShoe = async (id) => {
  const db = await DB.connect();
  const shoes = db.collection('shoes');

  const query = { id: Number(id) };
  const foundedShoe = await shoes.findOne(query);
  console.log(foundedShoe);
  DB.disconnect();

  return foundedShoe;
};

const createNewShoe = async (newShoe) => {
  const db = await DB.connect();
  const shoes = db.collection('shoes');
  const result = await shoes.insertOne(newShoe);
  DB.disconnect();

  return result;
};

const updateOneShoe = async () => {
  res.send("update a shoe");
};

const deleteOneShoe = async () => {
  res.send("delete a shoe");
};

module.exports = {
  getAllShoes,
  getOneShoe,
  createNewShoe,
  updateOneShoe,
  deleteOneShoe
};