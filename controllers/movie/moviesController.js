const express = require('express');
const { Movie } = require('../../sequelize');

function list(req, res, next){
  Movie.findAll({}).then(objects => res.json(objects));
}

function index(req, res, next){
  let id = req.params.id;
  Movie.findByPk(id, {}).then(object => res.json(object));
}

function create(req, res, next){
  let movie = new Object;
  movie.title = req.body.title;
  movie.genreId = req.body.genreId;
  movie.directorId = req.body.directorId;

  Movie.create(movie).then(movie => res.json(movie)).catch(err => res.status(500).json({error: err}));
}

function update(req, res, next){
  let id = req.params.id;
  Movie.findByPk(id, {}).then((object) =>{
    object.title = req.body.title ? req.body.title : object.title;
    object.genreId = req.body.genreId ? req.body.genreId : object.genreId;
    object.directorId = req.body.directorId ? req.body.directorId : object.directorId;
    object.update({'title':object.title, 'genreId':object.genreId, 'directorId':object.directorId})
    .then( object => res.json(object));
  });
}

function destroy(req, res, next){
  let id = req.params.id;
  Movie.destroy({ where: {id: id}}).then( object => res.json(object));
}

module.exports = {
  index, list, create, update, destroy
}