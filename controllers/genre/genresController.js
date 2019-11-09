const express = require('express');
const { Genre } = require('../../sequelize');

function list(req, res, next){
  Genre.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Genre.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let genre = new Object;
  genre.description = req.body.description;
  genre.status = req.body.status;

  Genre.create(genre).then(genre => res.json(genre));
}

function update(req, res, next){
  let id = req.params.id;
  Genre.findByPk(id, {}).then((object) =>{
    object.description = req.body.description ? req.body.description : object.description;
    object.status = req.body.status ? req.body.status : object.status;
    object.update({'description':object.description, 'status':object.status})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Genre.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}