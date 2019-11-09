const express = require('express');
const { Actor, Movie, Genre, MoviesActos } = require('../../sequelize');

function list(req, res, next){

  let genre = new Object();

  genre.description = "terror";
  genre.status = false;

  Genre.create(genre).then((genre)=>{
    let movie = new Object();
    movie.title = "pepe el toro";
    movie.genreId = genre.id;
    Movie.create(movie).then(movie => res.json(movie));
  });
}

function index(req, res, next){
  let id = req.params.id;

  Movie.findOne({where: {'id':id}, include:'genre'})
  .then(movie => res.json(movie));
}

function create(req, res, next){
  let actor = new Object;
  actor.name = req.body.name;
  actor.last_name = req.body.last_name;
  Actor.create(actor).then(actor => res.json(actor));
}

function update(req, res, next){
  res.render('index', {title:'se actualizo un elemento'});
}

function destroy(req, res, next){
  res.render('index', {title:'elimino un elemento'});
}

module.exports = {
  index, list, create, update, destroy
}
