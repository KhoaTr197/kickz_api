const shoesService = require('../services/shoesService');
//SHOES CONTROLER
const getAllShoes = (req, res) => {
  shoesService.getAllShoes()
  .then(data => {
    res.send({
      status: 200,
      data: data
    });
  })
  .catch(error => {
    res.send({
      status: "ERROR",
      message: "Can't get data",
      detail: error
    });
  })
};

const getOneShoe = (req, res) => {
  const { id } = req.params;
  shoesService.getOneShoe(id)
  .then(data => {
    res.status(200).send({
      status: 200,
      data: data
    });
  })
  .catch(error => {
    res.status(400).send({
      status: "ERROR",
      message: "Can't get data",
      detail: error
    });
  })
};

const createNewShoe = (req, res) => {
  const { body } = req;

  if ( 
    !body.name
  ) {
    res.status(400).send({
      status: "ERROR",
      message: "The request body is missing keys!"
    });
    return;
  }
  const newShoe = {
    name: body.name
  };
  shoesService.createNewShoe(newShoe)
  .then(result => {
    res.status(201).send({
      status: "OK",
      data: {
        ...result,
        newShoe
      }
    });
  })
  .catch(error => {
    res.status(400).send({
      status: "ERROR",
      message: "Can't add a new Shoe!",
      detail: error
    });
  })

};

const updateOneShoe = (req, res) => {
  res.send("update a shoe");
};

const deleteOneShoe = (req, res) => {
  res.send("delete a shoe");
};

module.exports = {
  getAllShoes,
  getOneShoe,
  createNewShoe,
  updateOneShoe,
  deleteOneShoe
};