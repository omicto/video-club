const express = require('express');
const { Copy } = require('../../sequelize');

function list(req, res, next){
  Copy.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Copy.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let copy = new Object;
  copy.movieId = req.body.movieId;
  copy.number = req.body.number;
  copy.format = req.body.format;
  copy.status = req.body.status;
  Copy.create(copy).then(copy => res.json(copy));
}

function update(req, res, next) {
  let id = req.params.id;
  Copy.findByPk(id, {}).then((object) => {
    object.movieId = req.body.movieId ? req.body.movieId : object.movieId;
    object.number = req.body.number ? req.body.number : object.number;
    object.format = req.body.format ? req.body.format : object.format;
    object.status = req.body.status ? req.body.status : object.status;
    object.update({
      'movieId': object.movieId,
      'number': object.number,
      'format': object.format,
      'status': object.status,
    })
      .then(object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Copy.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}
