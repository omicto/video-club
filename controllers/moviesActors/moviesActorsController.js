const express = require('express');
const { MoviesActors, Movie, Actor } = require('../../sequelize');

function list(req, res, next){
  MoviesActors.findAll({}).then(objects => res.json(objects));
}

function actorsFromMovie(req, res, next) {
  let movieId = req.params.movieId;
  Movie.findOne({
    where: {
      id: movieId
    }
  }).then(movie => movie.getActors().then((actors) => res.json(actors)));
}

function moviesOfActor(req, res, next) {
  let actorId = req.params.actorId;
  Actor.findOne({
    where: {
      id: actorId
    }
  }).then(actor => actor.getActors().then((movies) => res.json(movies)));
}

function insertMovieActors(req, res, next){
  /*
  Actor.addMovie(through : {req.body.movieId});
  Movie.addActor(req.body.actorId);*/
  
}

module.exports = {
  actorsFromMovie, moviesOfActor, insertMovieActors
}
