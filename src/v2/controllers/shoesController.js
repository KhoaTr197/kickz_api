require('dotenv').config({ path: '../../../.env' })
const { hasAllKeys, checkShoeValid } = require('../utils/utils')
const shoesService = require('../services/shoesService');

let controller = {}

//SHOES CONTROLER
controller.getAllShoes = (req, res) => {
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

controller.searchShoes = (req, res) => {
  const { limit, skip, q: searchQuery } = req.query;

  shoesService.searchShoes(
    Number(limit),
    Number(skip),
    searchQuery
  )
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
}

controller.getShoeById = (req, res) => {
  const { id } = req.params;

  shoesService.getShoeById(id)
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

controller.createNewShoe = (req, res) => {
  const { body } = req;

  if (!checkShoeValid(body)) {
    return res.status(400).send({
      status: "ERROR",
      message: "The request body is missing keys!"
    });
  }

  const newShoe = {
    ...body
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

module.exports = controller;